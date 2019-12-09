import { NowRequest, NowResponse } from "@now/node"
import { GraphQLClient } from "graphql-request"
import { getSdk } from "../graphql/platform.generated"

export default async (req: NowRequest, res: NowResponse) => {
  const client = new GraphQLClient("http://localhost:8080/v1/graphql")
  const sdk = getSdk(client)
  const { users } = await sdk.getUsers()

  res.json(users)
}
