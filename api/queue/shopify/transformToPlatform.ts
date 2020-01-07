import { NowResponse } from "@now/node"
import retry from "p-retry"
import prettyMs from "pretty-ms"
import { chunks as chunk } from "chunk-array"
import PQueue from "p-queue"

import { authenticateIpc } from "../../_utils/auth"
import { NowHasuraRequest } from "../../_utils/types"
import {
  getAdminSdk,
  getAllCachedShopifyProducts,
  getAllCachedShopifyProductVariants,
} from "../../../graphql-clients/platform"
import { transformShopifyToPlatform } from "../../../utils/transforms"

export default async (req: NowHasuraRequest, res: NowResponse) => {
  try {
    const startTime = new Date().getTime()
    authenticateIpc(req)

    if (!(req.body.event.op === "INSERT" || req.body.event.op === "MANUAL")) {
      throw new Error("Invalid op type")
    }

    const { id, processed, shopifyAccountId } = req.body.event.data.new

    if (processed) {
      return res.status(200).send("Already processed")
    }

    const adminSdk = getAdminSdk()

    await retry(
      () =>
        adminSdk.setShopifyAccountInitialSyncState({ id: shopifyAccountId, state: "transformingToPlatform" }),
      { forever: true }
    )

    // -----------
    // Get Shop Id
    // -----------
    const { shopifyAccount } = await adminSdk.getShopIdForShopifyAccount({ shopifyAccountId })
    if (!shopifyAccount) throw new Error("No shopifyAccount key")
    const shopId = shopifyAccount.shopId

    // -----------------------
    // Get all cached products
    // -----------------------
    const shopifyProducts = await getAllCachedShopifyProducts(shopifyAccountId, adminSdk)

    console.log(
      "★ [api/queue/shopify/transformToPlatform] Fetched total cached products:",
      shopifyProducts.length
    )
    console.log(shopifyProducts[0])

    // -------------------------------
    // Get all cached product variants
    // -------------------------------
    const shopifyVariants = await getAllCachedShopifyProductVariants(shopifyAccountId, adminSdk)

    console.log(
      "★ [api/queue/shopify/transformToPlatform] Fetched total cached productVariants:",
      shopifyVariants.length
    )
    console.log(shopifyVariants[0])

    // ------------
    // Do Transform
    // ------------
    let products = []
    if (false /* has custom transform */) {
      // products = []
    } else {
      products = transformShopifyToPlatform(shopId, shopifyProducts, shopifyVariants)
    }

    // ------------------------
    // Queue for saving
    // ------------------------
    const queue = new PQueue({ concurrency: 15 })

    const chunks = chunk(products, 100)
    chunks.forEach((products: any) =>
      queue.add(() => adminSdk.enqueueShopifySaveToPlatform({ shopifyAccountId, products }))
    )

    await queue.onIdle()

    // -----------------
    // Mark as processed
    // -----------------
    await retry(() => adminSdk.processedQueueShopifyTransformToPlatform({ id }), { forever: true })

    const duration = prettyMs(new Date().getTime() - startTime)
    console.log("★ [api/queue/shopify/transformToPlatform] Success. Duration:", duration)
    res.status(200).json({
      duration,
    })
  } catch (err) {
    console.error(err)
    return res.status(400).send(err)
  }
}
