import { NowResponse } from "@now/node"
import retry from "p-retry"
import prettyMs from "pretty-ms"

import { authenticateIpc } from "../_utils/auth"
import { NowHasuraRequest } from "../_utils/types"
import { getAdminSdk } from "../../graphql-clients/platform"

export default async (req: NowHasuraRequest, res: NowResponse) => {
  try {
    const startTime = new Date().getTime()
    authenticateIpc(req)

    if (!(req.body.event.op === "INSERT" || req.body.event.op === "MANUAL")) {
      throw new Error("Invalid op type")
    }

    const { id, myshopifyDomain, encryptedAccessToken } = req.body.event.data.new

    const adminSdk = getAdminSdk()

    await retry(() => adminSdk.setShopifyAccountInitialSyncState({ id, state: "starting" }), {
      forever: true,
    })

    await retry(
      () =>
        adminSdk.enqueueShopifyFetchProducts({
          shopifyAccountId: id,
          myshopifyDomain,
          encryptedAccessToken,
        }),
      { forever: true }
    )

    const duration = prettyMs(new Date().getTime() - startTime)
    console.log("★ [api/shopify/startImport] Success. Duration:", duration)
    res.status(200).json({
      duration,
    })
  } catch (err) {
    console.error(err)
    return res.status(400).send(err)
  }
}
