import { NowResponse } from "@now/node"
import retry from "p-retry"
import prettyMs from "pretty-ms"

import { authenticateIpc } from "../../_utils/auth"
import { NowHasuraRequest } from "../../_utils/types"
import { getAdminSdk } from "../../../graphql-clients/platform"
import { getAdminSdk as getShopifySdk, obeyRateLimit } from "../../../graphql-clients/shopify"

export default async (req: NowHasuraRequest, res: NowResponse) => {
  try {
    const startTime = new Date().getTime()
    authenticateIpc(req)

    if (!(req.body.event.op === "INSERT" || req.body.event.op === "MANUAL")) {
      throw new Error("Invalid op type")
    }

    const {
      id,
      processed,
      shopifyAccountId,
      myshopifyDomain,
      encryptedAccessToken,
      cursor,
    } = req.body.event.data.new

    if (processed) {
      return res.status(200).send("Already processed")
    }

    const adminSdk = getAdminSdk()
    const shopifySdk = getShopifySdk(myshopifyDomain, encryptedAccessToken)

    await retry(
      () =>
        adminSdk.setShopifyAccountInitialSyncState({
          id: shopifyAccountId,
          state: "fetchingProductVariants",
        }),
      { forever: true }
    )

    // --------------
    // Fetch variants
    // --------------
    console.log("★ [api/queue/shopify/fetchProductVariants] Fetching product variants...")
    const { result } = await obeyRateLimit(() => shopifySdk.getProductVariants({ first: 150, after: cursor }))
    if (!result) throw new Error("result key is missing")

    let productVariants = result.edges.map(edge => edge.node)

    console.log(
      "★ [api/queue/shopify/fetchProductVariants] Fetched total product variants:",
      productVariants.length
    )
    // console.log(productVariants[0])

    // -------------
    // Save to cache
    // -------------
    console.log("★ [api/queue/shopify/fetchProductVariants] Saving variants to cache...")
    await adminSdk.upsertCacheShopifyProductVariants({
      objects: productVariants.map(v => ({
        ...v,
        shopifyAccountId,
        productId: v.product.id,
        product: undefined,
      })),
    })

    // ---------------
    // Queue next page
    // ---------------
    if (result.pageInfo.hasNextPage) {
      await adminSdk.enqueueShopifyFetchProductVariants({
        shopifyAccountId,
        myshopifyDomain,
        encryptedAccessToken,
        cursor: result.edges[result.edges.length - 1].cursor,
      })
    } else {
      await retry(() => adminSdk.enqueueShopifyTransformToPlatform({ shopifyAccountId }), { forever: true })
    }

    await retry(() => adminSdk.processedQueueShopifyFetchProductVariants({ id }), { forever: true })

    const duration = prettyMs(new Date().getTime() - startTime)
    console.log("★ [api/queue/shopify/fetchProductVariants] Success. Duration:", duration)
    res.status(200).json({
      duration,
    })
  } catch (err) {
    console.error(err)
    return res.status(400).send(err)
  }
}
