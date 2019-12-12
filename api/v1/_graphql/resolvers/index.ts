import { Resolvers } from "../schema"
import { encrypt, decrypt } from "../../../../utils/crypto"

const resolvers: Resolvers = {
  Query: {
    async getShopifyAccountAccessToken(_parent, args, context) {
      const { shopifyAccount } = await context.adminSdk.getShopifyAccount({
        id: args.id,
      })
      if (!shopifyAccount || !shopifyAccount.encryptedAccessToken) return null
      return decrypt(shopifyAccount.encryptedAccessToken)
    },
  },
  Mutation: {
    async setShopifyAccountAccessToken(_parent, args, context) {
      const encryptedAccessToken = encrypt(args.accessToken)
      const { result } = await context.adminSdk.updateShopifyAccount({
        id: args.id,
        _set: { encryptedAccessToken },
      })
      if (!result) throw new Error("No result received from adminSdk.updateShopifyAccount")
      return result
    },
  },
}

export default resolvers
