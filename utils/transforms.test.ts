/* eslint-env jest */
import { transformShopifyToPlatform } from "./transforms"

describe("transformShopifyToPlatform", () => {
  it("does basic transform", () => {
    const shopifyProducts = [
      {
        id: "gid://shopify/Product/4428324274281",
        title: "Henley",
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
        images: [
          {
            id: "gid://shopify/ProductImage/13909418410089",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0287/3016/3305/products/White-V-Neck-Curve-Hem.jpg?v=1575934768",
            altText: null,
          },
          {
            id: "gid://shopify/ProductImage/13909418442857",
            originalSrc:
              "https://cdn.shopify.com/s/files/1/0287/3016/3305/products/CUTS_Clothing-2019-07-09_On_Mondel_1230.jpg?v=1575934768",
            altText: "[info]--Drew is 6'1 and wears a size L",
          },
        ],
        productType: "shirt",
      },
    ]

    const shopifyVariants = [
      {
        id: "gid://shopify/ProductVariant/31552601620585",
        title: "Henley Small",
        price: "68.00",
        compareAtPrice: null,
        availableForSale: true,
        inventoryQuantity: 1,
        productId: "gid://shopify/Product/4428324274281",
        selectedOptions: [
          {
            name: "Size",
            value: "S",
          },
        ],
        images: [
          {
            id: "gid://shopify/ProductImage/13909418410089",
            src:
              "https://cdn.shopify.com/s/files/1/0287/3016/3305/products/White-V-Neck-Curve-Hem.jpg?v=1575934768",
            altText: null,
          },
        ],
      },
      {
        id: "gid://shopify/ProductVariant/31552601718889",
        title: "Henley Medium",
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
        title: "Henley Large",
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
          title: "Henley",
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
          images: [
            {
              data: {
                foreignId: "gid://shopify/ProductImage/13909418410089",
                src:
                  "https://cdn.shopify.com/s/files/1/0287/3016/3305/products/White-V-Neck-Curve-Hem.jpg?v=1575934768",
                altText: null,
              },
            },
            {
              data: {
                foreignId: "gid://shopify/ProductImage/13909418442857",
                src:
                  "https://cdn.shopify.com/s/files/1/0287/3016/3305/products/CUTS_Clothing-2019-07-09_On_Mondel_1230.jpg?v=1575934768",
                altText: "[info]--Drew is 6'1 and wears a size L",
              },
            },
          ],
          variants: [
            {
              productForeignId: "gid://shopify/Product/4428324274281",
              data: {
                foreignId: "gid://shopify/ProductVariant/31552601620585",
                title: "Henley Small",
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
                images: [
                  {
                    data: {
                      foreignId: "gid://shopify/ProductImage/13909418410089",
                      src:
                        "https://cdn.shopify.com/s/files/1/0287/3016/3305/products/White-V-Neck-Curve-Hem.jpg?v=1575934768",
                      altText: null,
                    },
                  },
                ],
              },
            },
            {
              productForeignId: "gid://shopify/Product/4428324274281",
              data: {
                foreignId: "gid://shopify/ProductVariant/31552601718889",
                title: "Henley Medium",
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
                images: [],
              },
            },
            {
              productForeignId: "gid://shopify/Product/4428324274281",
              data: {
                foreignId: "gid://shopify/ProductVariant/31552601817193",
                title: "Henley Large",
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
                images: [],
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
