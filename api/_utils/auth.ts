import { NowRequest } from "@now/node"
import { AuthenticationError } from "apollo-server-micro"

export function authenticateIpc(req: NowRequest) {
  const keyHeader = req.headers["x-hasura-admin-secret"]

  // Ensure request is coming from Hasura
  if (
    process.env.NODE_ENV === "production" &&
    (!keyHeader || keyHeader !== process.env.HASURA_GRAPHQL_ADMIN_SECRET)
  ) {
    throw new AuthenticationError("You must be logged in")
  }
}
