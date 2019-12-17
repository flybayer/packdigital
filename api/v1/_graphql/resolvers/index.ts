import { Resolvers } from "../schema"
import { encrypt, decrypt } from "../../../../utils/crypto"

const resolvers: Resolvers = {
  Query: {
    async getShopifyAccountAccessToken(_parent, args, context) {
      const { data } = await context.adminSdk.getShopifyAccount({
        id: args.id,
      })
      if (!data?.shopifyAccount?.encryptedAccessToken) return null
      return decrypt(data.shopifyAccount.encryptedAccessToken)
    },
  },
  Mutation: {
    async setShopifyAccountAccessToken(_parent, args, context) {
      const encryptedAccessToken = encrypt(args.accessToken)
      const { data } = await context.adminSdk.updateShopifyAccount({
        id: args.id,
        _set: { encryptedAccessToken },
      })
      if (!data?.result) throw new Error("No result received from adminSdk.updateShopifyAccount")
      return data.result
    },
  },
}

export default resolvers
