import { NowResponse } from "@now/node"
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

    const { id, shopifyAccountId, myshopifyDomain, encryptedAccessToken, cursor } = req.body.event.data.new

    const adminSdk = getAdminSdk()
    const shopifySdk = getShopifySdk(myshopifyDomain, encryptedAccessToken)

    const { data } = await obeyRateLimit(() => shopifySdk.getProductVariants({ first: 150, after: cursor }))
    if (!data) throw new Error("data key is missing")

    let productVariants = data.result.edges.map(edge => edge.node)

    // TODO: queue saveProductVariants

    console.log(
      "★ [api/queue/shopify/fetchProductVariants] Fetched total product variants:",
      productVariants.length
    )
    console.log(productVariants[0])

    if (data.result.pageInfo.hasNextPage) {
      await adminSdk.enqueueShopifyFetchProductVariants({
        shopifyAccountId,
        myshopifyDomain,
        encryptedAccessToken,
        cursor: data.result.edges[data.result.edges.length - 1].cursor,
      })
    } else {
      // enqueueShopifyFetchProductVariants
    }

    await adminSdk.processedQueueShopifyFetchProductVariants({ id })

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
