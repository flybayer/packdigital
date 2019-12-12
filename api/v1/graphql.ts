import { ApolloServer, gql, AuthenticationError } from "apollo-server-micro"
import { GraphQLClient } from "graphql-request"
import { importSchema } from "graphql-import"
import path from "path"
import { getSdk } from "../../graphql-clients/platform/sdk.generated"
import resolvers from "./_graphql/resolvers"

const schema = path.join(__dirname, "./_graphql/schema.graphql")

export interface Context {
  authRole: string
  adminSdk: ReturnType<typeof getSdk>
}

const server = new ApolloServer({
  typeDefs: importSchema(schema),
  resolvers,
  introspection: true,
  playground: process.env.NODE_ENV === "development",
  context: ({ req }): Context => {
    console.log("REQ")
    console.log(req)
    const keyHeader = req.headers["x-hasura-admin-secret"]
    // Ensure request is coming from Hasura
    if (
      process.env.NODE_ENV === "production" &&
      (!keyHeader || keyHeader !== process.env.HASURA_GRAPHQL_ADMIN_SECRET)
    ) {
      throw new AuthenticationError("You must be logged in")
    }

    // const client = new GraphQLClient("http://localhost:8080/v1/graphql")
    const client = new GraphQLClient(process.env.HASURA_URL as string, {
      headers: {
        "x-hasura-admin-secret": process.env.HASURA_GRAPHQL_ADMIN_SECRET as string,
      },
    })
    const adminSdk = getSdk(client)

    return {
      authRole: req.headers["x-hasura-role"],
      adminSdk,
    }
  },
})

export default server.createHandler({ path: "/api/v1/graphql" })
