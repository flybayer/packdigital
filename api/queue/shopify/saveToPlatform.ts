import { NowResponse } from "@now/node"
import retry from "p-retry"
import prettyMs from "pretty-ms"

import { authenticateIpc } from "../../_utils/auth"
import { NowHasuraRequest } from "../../_utils/types"
import {
  getAdminSdk,
  productOptions_on_conflict,
  productOptionValues_on_conflict,
  joinVariantValues_on_conflict,
} from "../../../graphql-clients/platform"
import { transformShopifyToPlatform } from "../../../utils/transforms"

const flatten = <T>(arrays: T[][]): T[] => arrays.reduce((flat, array) => [...flat, ...array], [])

export default async (req: NowHasuraRequest, res: NowResponse) => {
  try {
    const startTime = new Date().getTime()
    authenticateIpc(req)

    if (!(req.body.event.op === "INSERT" || req.body.event.op === "MANUAL")) {
      throw new Error("Invalid op type")
    }

    const { id, processed, shopifyAccountId } = req.body.event.data.new
    const products = req.body.event.data.new.products as ReturnType<typeof transformShopifyToPlatform>

    if (processed) {
      return res.status(200).send("Already processed")
    }

    const adminSdk = getAdminSdk()

    await retry(
      () => adminSdk.setShopifyAccountInitialSyncState({ id: shopifyAccountId, state: "savingToPlatform" }),
      { forever: true }
    )

    // --------------------------------------------------
    // Upsert all Product/Variant/Options in the platform
    // --------------------------------------------------
    const productsToSave = products.map(p => ({
      ...p.data,
      // Nested upsert of ProductOptions
      options: {
        data:
          p.relationships.options?.map(opt => ({
            ...opt.data,
            // Nested upsert of ProductOptionValues
            values: {
              data: opt.relationships.values.map(v => v.data),
              on_conflict: {
                constraint: "productOptionValues_position_productOptionId_key",
                update_columns: ["title", "position"],
              } as productOptionValues_on_conflict,
            },
          })) || [],
        on_conflict: {
          constraint: "productOptions_foreignId_key",
          update_columns: ["title", "position", "foreignId"],
        } as productOptions_on_conflict,
      },
    }))

    const { result } = await retry(
      () =>
        adminSdk.upsertProducts({
          objects: productsToSave,
        }),
      { retries: 10 }
    )
    if (!result) throw new Error("No result key")
    console.log(JSON.stringify(result.returning[0], null, 2))

    const variantsToSave = flatten(
      products.map(p => {
        const savedProduct = result.returning.find(product => product.foreignId === p.data.foreignId)
        if (!savedProduct) throw new Error(`Cant find saved product with foreignId: ${p.data.foreignId}`)
        return p.relationships.variants.map(v => ({
          ...v.data,
          productId: savedProduct.id,
          // Nested upsert of joinVariantOptionValues (which tracks selectedOptions)
          joinVariantOptionValues: {
            data:
              v.relationships.selectedOptions
                ?.map(selectedOption => ({
                  productOptionValueId: savedProduct.options
                    .find(opt => opt.title === selectedOption.data.title)
                    ?.values.find(value => value.title === selectedOption.data.value)?.id,
                }))
                .filter(i => !!i.productOptionValueId) || [],
            on_conflict: {
              constraint: "variantOptionValues_pkey",
              update_columns: [],
            } as joinVariantValues_on_conflict,
          },
        }))
      })
    )

    const { result: variantsResult } = await retry(
      () =>
        adminSdk.upsertProductVariants({
          objects: variantsToSave,
        }),
      { retries: 10 }
    )
    if (!variantsResult) throw new Error("No variantsResult key")
    console.log("------------")
    console.log(JSON.stringify(variantsResult.returning[0], null, 2))

    await retry(
      () => adminSdk.setShopifyAccountInitialSyncState({ id: shopifyAccountId, state: "success" }),
      { forever: true }
    )

    // -----------------
    // Mark as processed
    // -----------------
    await retry(() => adminSdk.processedQueueShopifySaveToPlatform({ id }), { forever: true })

    const duration = prettyMs(new Date().getTime() - startTime)
    console.log("★ [api/queue/shopify/saveToPlatform] Success. Duration:", duration)
    res.status(200).json({
      duration,
    })
  } catch (err) {
    console.error(err)
    return res.status(400).send(err)
  }
}
