import { x_cache_shopify_products, x_cache_shopify_productVariants } from "../graphql-clients/platform"

type ShopifyProducts = Array<
  Pick<x_cache_shopify_products, "id" | "handle" | "description" | "productType"> & {
    options?: { id: string; name: string; position: number; values: string[] }[]
    images?: { id: string; originalSrc: string; altText: string | null }[]
  }
>
type ShopifyVariants = Array<
  Pick<
    x_cache_shopify_productVariants,
    "id" | "productId" | "price" | "compareAtPrice" | "availableForSale" | "inventoryQuantity"
  > & {
    selectedOptions?: { name: string; value: string }[]
    images?: { id: string; src: string; altText: string | null }[]
  }
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
      selectedOptions: variant.selectedOptions?.map(opt => ({
        data: { title: opt.name, value: opt.value },
      })),
      images: variant.images?.map(img => ({
        data: {
          foreignId: img.id,
          src: img.src,
          altText: img.altText,
        },
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
        options: product.options?.map(opt => ({
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
        images: product.images?.map(img => ({
          data: {
            foreignId: img.id,
            src: img.originalSrc,
            altText: img.altText,
          },
        })),
        variants: productVariants.filter(variant => variant.productForeignId === product.id),
      },
    })
  }

  return products
}
