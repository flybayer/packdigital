import { GraphQLClient, ClientError } from "graphql-request"
import retry, { FailedAttemptError } from "p-retry"
import delay from "delay"
import prettyMs from "pretty-ms"

import { getSdk } from "./sdk.generated"
import { decrypt } from "../../utils/crypto"

export * from "./sdk.generated"

export function getAdminSdk(myshopifyDomain: string, encryptedAccessToken: string) {
  const endpoint = `https://${myshopifyDomain}/admin/api/2019-10/graphql.json`

  const client = new GraphQLClient(endpoint, {
    headers: {
      "X-Shopify-Access-Token": decrypt(encryptedAccessToken),
    },
  })
  return getSdk(client)
}

export type ShopifyAdminSdk = ReturnType<typeof getAdminSdk>

export interface QueryCost {
  requestedQueryCost: number
  actualQueryCost: number
  throttleStatus: {
    maximumAvailable: number
    currentlyAvailable: number
    restoreRate: number
  }
}

function computeWaitTimeInMs(cost: QueryCost) {
  if (cost.requestedQueryCost > cost.throttleStatus.maximumAvailable) {
    throw new Error(
      `Impossible query! Requested: ${cost.requestedQueryCost} Max: ${cost.throttleStatus.maximumAvailable}`
    )
  }
  let seconds =
    (cost.requestedQueryCost - cost.throttleStatus.currentlyAvailable) / cost.throttleStatus.restoreRate
  if (seconds < 0) seconds = 0
  return seconds * 1000
}

export async function obeyRateLimit<T>(request: () => PromiseLike<T> | T): Promise<T> {
  console.log("[obeyRateLimit] Starting new request...")

  return retry(request, {
    // retries: 1,
    forever: true,
    maxTimeout: 60 * 1000,
    onFailedAttempt: async (err: FailedAttemptError) => {
      let error = err as FailedAttemptError & ClientError
      if (error.response.errors?.length) {
        if (error.response.errors[0].message === "Throttled") {
          console.log("[obeyRateLimit] Throttled!", error.response.extensions.cost)
          const delayTime = computeWaitTimeInMs(error.response.extensions.cost)
          console.log(`Waiting for ${prettyMs(delayTime)} before retrying...`)
          await delay(delayTime)
        }
      }
    },
  })
}
