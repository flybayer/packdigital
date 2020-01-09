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
      () => adminSdk.setShopifyAccountInitialSyncState({ id: shopifyAccountId, state: "fetchingProducts" }),
      { forever: true }
    )

    // --------------
    // Fetch products
    // --------------
    console.log("★ [api/queue/shopify/fetchProducts] Fetching products...")
    const { result } = await obeyRateLimit(() => shopifySdk.getProducts({ first: 60, after: cursor }))
    if (!result) throw new Error("result key is missing")

    // ---------------------------
    // Fetch more images if needed
    // ---------------------------
    for (let edge of result.edges) {
      if (!edge.node.images.pageInfo.hasNextPage) continue

      console.log(`★ [api/queue/shopify/fetchProducts] Fetching more images for product ${edge.node.id}...`)
      const cursor = edge.node.images.edges[edge.node.images.edges.length - 1].cursor
      const { result } = await obeyRateLimit(() =>
        shopifySdk.getProductImages({ id: edge.node.id, first: 250, after: cursor })
      )
      if (!result) throw new Error("result key is missing")
      edge.node.images.edges.push(...result.images.edges)
    }

    let products = result.edges.map(edge => ({
      ...edge.node,
      images: edge.node.images.edges.map(e => e.node),
    }))

    console.log("★ [api/queue/shopify/fetchProducts] Fetched total products:", products.length)
    // console.log(products[0])

    // -------------
    // Save to cache
    // -------------
    console.log("★ [api/queue/shopify/fetchProducts] Saving products to cache...")
    await adminSdk.upsertCacheShopifyProducts({
      objects: products.map(p => ({ ...p, shopifyAccountId })),
    })

    // ---------------
    // Queue next page
    // ---------------
    if (result.pageInfo.hasNextPage) {
      await adminSdk.enqueueShopifyFetchProducts({
        shopifyAccountId,
        myshopifyDomain,
        encryptedAccessToken,
        cursor: result.edges[result.edges.length - 1].cursor,
      })
    } else {
      await adminSdk.enqueueShopifyFetchProductVariants({
        shopifyAccountId,
        myshopifyDomain,
        encryptedAccessToken,
      })
    }

    await retry(() => adminSdk.processedQueueShopifyFetchProducts({ id }), { forever: true })

    const duration = prettyMs(new Date().getTime() - startTime)
    console.log("★ [api/queue/shopify/fetchProducts] Success. Duration:", duration)
    res.status(200).json({
      duration,
    })
  } catch (err) {
    console.error(err)
    return res.status(400).send(err)
  }
}
