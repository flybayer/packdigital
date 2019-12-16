import { ApolloServer } from "apollo-server-micro"
import { importSchema } from "graphql-import"
import path from "path"

import { getAdminSdk } from "../../graphql-clients/platform"
import resolvers from "./_graphql/resolvers"
import { authenticateIpc } from "../_utils/auth"

const schema = path.join(__dirname, "./_graphql/schema.graphql")

export interface Context {
  authRole: string
  adminSdk: ReturnType<typeof getAdminSdk>
}

const server = new ApolloServer({
  typeDefs: importSchema(schema),
  resolvers,
  introspection: true,
  playground: process.env.NODE_ENV === "development",
  context: ({ req }): Context => {
    authenticateIpc(req)

    return {
      authRole: req.headers["x-hasura-role"],
      adminSdk: getAdminSdk(),
    }
  },
})

export default server.createHandler({ path: "/api/v1/graphql" })
