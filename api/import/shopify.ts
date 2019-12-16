import { NowRequest, NowResponse } from "@now/node"

import { authenticateIpc } from "../_utils/auth"
import { getAdminSdk } from "../../graphql-clients/platform"
import { getAdminSdk as getShopifySdk } from "../../graphql-clients/shopify"

export default async (req: NowRequest, res: NowResponse) => {
  authenticateIpc(req)

  const shopifyAccount = req.body.event.data.new

  if (!shopifyAccount.myshopifyDomain) throw new Error("Missing myshopifyDomain")
  if (!shopifyAccount.encryptedAccessToken) throw new Error("Missing encryptedAccessToken")

  const adminSdk = getAdminSdk()
  const shopifySdk = getShopifySdk(shopifyAccount.myshopifyDomain, shopifyAccount.encryptedAccessToken)

  const { shop } = await shopifySdk.getShop()

  console.log(shop)

  res.status(204).end()
}
