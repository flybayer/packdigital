import { x_cache_shopify_products, x_cache_shopify_productVariants } from "../graphql-clients/platform"

type ShopifyProducts = Array<
  Pick<x_cache_shopify_products, "id" | "handle" | "description" | "productType" | "options">
>
type ShopifyVariants = Array<
  Pick<
    x_cache_shopify_productVariants,
    | "id"
    | "productId"
    | "price"
    | "compareAtPrice"
    | "availableForSale"
    | "inventoryQuantity"
    | "images"
    | "selectedOptions"
  >
>

const convertStringDollarsToCents = (price: string | null | undefined) =>
  price ? parseInt(price) * 100 : null

export function transformShopifyToPlatform(
  shopId: number,
  shopifyProducts: ShopifyProducts,
  shopifyVariants: ShopifyVariants
) {
  const productVariants = shopifyVariants.map(variant => ({
    productForeignId: variant.productId,
    data: {
      foreignId: variant.id,
      available: variant.availableForSale,
      inventory: variant.inventoryQuantity,
      price: convertStringDollarsToCents(variant.price),
      compareAtPrice: convertStringDollarsToCents(variant.compareAtPrice),
    },
    relationships: {
      selectedOptions: variant.selectedOptions.map((opt: any) => ({
        data: { title: opt.name, value: opt.value },
      })),
    },
  }))

  const products = []
  for (let product of shopifyProducts) {
    products.push({
      data: {
        shopId,
        foreignId: product.id,
        handle: product.handle,
        description: product.description,
        type: product.productType,
      },
      relationships: {
        options: product.options.map((opt: any) => ({
          data: {
            foreignId: opt.id,
            title: opt.name,
            position: opt.position,
          },
          relationships: {
            values: opt.values.map((value: string, index: number) => ({
              data: { title: value, position: index + 1 },
            })),
          },
        })),
        variants: productVariants.filter(variant => variant.productForeignId === product.id),
      },
    })
  }

  return products
}
