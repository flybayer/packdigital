import { NowRequest, NowResponse } from "@now/node"
import { GraphQLClient } from "graphql-request"
import { getSdk } from "../graphql-clients/platform/sdk.generated"

export default async (_req: NowRequest, res: NowResponse) => {
  const client = new GraphQLClient("http://localhost:8080/v1/graphql")
  const sdk = getSdk(client)
  const { products } = await sdk.getProducts()

  res.json(products)
}
