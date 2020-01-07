import { GraphQLClient } from "graphql-request"
import retry from "p-retry"

import { getSdk } from "./sdk.generated"

export * from "./sdk.generated"

if (process.env.NODE_ENV === "production") {
  if (!process.env.HASURA_GRAPHQL_ADMIN_SECRET) {
    throw new Error("You must set the HASURA_GRAPHQL_ADMIN_SECRET env variable")
  }
}

export function getAdminSdk() {
  const client = new GraphQLClient(process.env.HASURA_URL as string, {
    headers: {
      "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET as string,
    },
  })
  return getSdk(client)
}

export type PlatformAdminSdk = ReturnType<typeof getAdminSdk>

export async function getAllCachedShopifyProducts(shopifyAccountId: string, adminSdk: PlatformAdminSdk) {
  const results = []

  let limit = 1000
  let offset = 0
  let hasMore = true

  while (hasMore) {
    // console.log("★ [api/queue/shopify] Fetching next page of cached shopify products...")
    const { result, total } = await retry(
      () => adminSdk.getCachedShopifyProducts({ shopifyAccountId, limit, offset }),
      { retries: 10 }
    )
    if (!result) throw new Error("result key is missing")
    if (!total) throw new Error("total key is missing")

    results.push(...result)

    const totalCount = total.aggregate?.count || 0
    offset += limit
    hasMore = totalCount > offset
  }

  return results
}

export async function getAllCachedShopifyProductVariants(
  shopifyAccountId: string,
  adminSdk: PlatformAdminSdk
) {
  const results = []

  let limit = 1000
  let offset = 0
  let hasMore = true

  while (hasMore) {
    // console.log("★ [api/queue/shopify] Fetching next page of cached shopify product variants...")
    const { result, total } = await retry(
      () => adminSdk.getCachedShopifyProductVariants({ shopifyAccountId, limit, offset }),
      { retries: 10 }
    )
    if (!result) throw new Error("result key is missing")
    if (!total) throw new Error("total key is missing")

    results.push(...result)

    const totalCount = total.aggregate?.count || 0
    offset += limit
    hasMore = totalCount > offset
  }

  return results
}
