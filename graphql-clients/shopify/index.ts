import { GraphQLClient } from "graphql-request"

import { getSdk } from "./sdk.generated"
import { decrypt } from "../../utils/crypto"

export function getAdminSdk(myshopifyDomain: string, encryptedAccessToken: string) {
  const endpoint = `https://${myshopifyDomain}/admin/api/2019-10/graphql.json`

  const client = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Access-Token": decrypt(encryptedAccessToken),
    },
  })
  return getSdk(client)
}
