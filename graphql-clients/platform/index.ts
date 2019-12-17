import { GraphQLClient } from "graphql-request"
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
