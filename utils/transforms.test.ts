/* eslint-env jest */
import { transformShopifyToPlatform } from "./transforms"

describe("transformShopifyToPlatform", () => {
  it("does basic transform", () => {
    const shopifyProducts = [
      {
        id: "gid://shopify/Product/4428324274281",
        handle: "l-s-henley-split-hem",
        description:
          "The Split-Hem delivers dynamic functionality. This casual yet stylish shape expresses a more distinctive look. Providing serious comfort with out compromising appearance.",
        options: [
          {
            id: "gid://shopify/ProductOption/5747871907945",
            name: "Size",
            values: ["S", "M", "L"],
            position: 1,
          },
        ],
        productType: "shirt",
      },
    ]

    const shopifyVariants = [
      {
        id: "gid://shopify/ProductVariant/31552601620585",
        price: "68.00",
        compareAtPrice: null,
        availableForSale: true,
        inventoryQuantity: 1,
        productId: "gid://shopify/Product/4428324274281",
        images: [],
        selectedOptions: [
          {
            name: "Size",
            value: "S",
          },
        ],
      },
      {
        id: "gid://shopify/ProductVariant/31552601718889",
        price: "68.00",
        compareAtPrice: null,
        availableForSale: false,
        inventoryQuantity: 0,
        productId: "gid://shopify/Product/4428324274281",
        images: [],
        selectedOptions: [
          {
            name: "Size",
            value: "M",
          },
        ],
      },
      {
        id: "gid://shopify/ProductVariant/31552601817193",
        price: "68.00",
        compareAtPrice: null,
        availableForSale: false,
        inventoryQuantity: 0,
        productId: "gid://shopify/Product/4428324274281",
        images: [],
        selectedOptions: [
          {
            name: "Size",
            value: "L",
          },
        ],
      },
    ]

    const finalProducts = [
      {
        data: {
          shopId: 1,
          foreignId: "gid://shopify/Product/4428324274281",
          handle: "l-s-henley-split-hem",
          description:
            "The Split-Hem delivers dynamic functionality. This casual yet stylish shape expresses a more distinctive look. Providing serious comfort with out compromising appearance.",
          type: "shirt",
        },
        relationships: {
          options: [
            {
              data: {
                foreignId: "gid://shopify/ProductOption/5747871907945",
                title: "Size",
                position: 1,
              },
              relationships: {
                values: [
                  { data: { title: "S", position: 1 } },
                  { data: { title: "M", position: 2 } },
                  { data: { title: "L", position: 3 } },
                ],
              },
            },
          ],
          variants: [
            {
              productForeignId: "gid://shopify/Product/4428324274281",
              data: {
                foreignId: "gid://shopify/ProductVariant/31552601620585",
                available: true,
                inventory: 1,
                price: 6800,
                compareAtPrice: null,
              },
              relationships: {
                selectedOptions: [
                  {
                    data: {
                      title: "Size",
                      value: "S",
                    },
                  },
                ],
              },
            },
            {
              productForeignId: "gid://shopify/Product/4428324274281",
              data: {
                foreignId: "gid://shopify/ProductVariant/31552601718889",
                available: false,
                inventory: 0,
                price: 6800,
                compareAtPrice: null,
              },
              relationships: {
                selectedOptions: [
                  {
                    data: {
                      title: "Size",
                      value: "M",
                    },
                  },
                ],
              },
            },
            {
              productForeignId: "gid://shopify/Product/4428324274281",
              data: {
                foreignId: "gid://shopify/ProductVariant/31552601817193",
                available: false,
                inventory: 0,
                price: 6800,
                compareAtPrice: null,
              },
              relationships: {
                selectedOptions: [
                  {
                    data: {
                      title: "Size",
                      value: "L",
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    ]

    const shopId = 1

    expect(transformShopifyToPlatform(shopId, shopifyProducts, shopifyVariants)).toStrictEqual(finalProducts)
  })
})
