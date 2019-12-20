import { GraphQLClient } from 'graphql-request';
import { print } from 'graphql';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * An RFC 3986 and RFC 3987 compliant URI string.
   * 
   * Example value: `"https://johns-apparel.myshopify.com"`.
 */
  URL: any,
  /** 
 * An unsigned 64-bit integer. Represents whole numeric values between 0 and 2^64 - 1 encoded as a string of base-10 digits.
   * 
   * Example value: `"50"`.
 */
  UnsignedInt64: any,
  /** An ISO-8601 encoded UTC date time string. Example value: `"2019-07-03T20:47:55Z"`. */
  DateTime: any,
  /** A signed decimal number, which supports arbitrary precision and is serialized as a string. Example value: `"29.99"`. */
  Decimal: any,
  /** A string containing HTML code. Example value: `"<p>Grey cotton knit sweater.</p>"`. */
  HTML: any,
  /** 
 * Represents a unique identifier in the Storefront API. A `StorefrontID` value can
   * be used wherever an ID is expected in the Storefront API.
   * 
   * Example value: `"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzEwMDc5Nzg1MTAw"`.
 */
  StorefrontID: any,
  /** A monetary value string. Example value: `"100.57"`. */
  Money: any,
  /** 
 * A string containing a strict subset of HTML code. Non-allowed tags will be stripped out.
   * Allowed tags:
   * * `a` (allowed attributes: `href`)
   * * `b`
   * * `br`
   * * `em`
   * * `i`
   * * `strong`
   * * `u`
   * 
   * Example value: `"Your current domain is <strong>johns-apparel.myshopify.com</strong>."`
 */
  FormattedString: any,
  /** An [ISO-8601](https://en.wikipedia.org/wiki/ISO_8601) encoded UTC date string. Example value: `"2019-07-16T16:00:00-04:00"`. */
  Date: any,
  /** A JSON Object. Example value: `{ "key1": "Value 1", "key2": "Value 2", "key3": 3 }` */
  JSON: any,
  /** 
 * Time between UTC time and a location's observed time, in the format `"+HH:MM"` or `"-HH:MM"`.
   * 
   * Example value: `"-07:00"`.
 */
  UtcOffset: any,
  /** A string containing Liquid markup to be rendered as HTML. Example value: `"<p>{{ shop.url }}</p>"` */
  LiquidHTML: any,
};


/** Represents the access scope permission that is applicable to a merchant's shop, such as `read_orders`. */
export type AccessScope = {
   __typename?: 'AccessScope',
  /** Description of the access scopes enabled on an api permission. */
  description: Scalars['String'],
  /** A human-friendly string for an access scope. */
  handle: Scalars['String'],
};

/** Succinct overview of a shop activity. */
export type Activity = {
   __typename?: 'Activity',
  /** True if the message already contains the author name. */
  attributed: Scalars['Boolean'],
  /** Event author name. This may be a user name, app name or `Shopify`. */
  author: Scalars['String'],
  /** When the activity event occured. */
  createdAt: Scalars['DateTime'],
  /** An array of formatted messages, each providing detail about the activity. Typically only a single message is present. */
  messages: Array<Scalars['FormattedString']>,
  /** The topic of the activity, used to display an appropriate icon. */
  topic: ActivityTopic,
};

export type ActivityConnection = {
   __typename?: 'ActivityConnection',
  /** A list of edges. */
  edges: Array<ActivityEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type ActivityEdge = {
   __typename?: 'ActivityEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of ActivityEdge. */
  node: Activity,
};

/** The topic of the activity, used to display an appropriate icon or a default icon. */
export enum ActivityTopic {
  PRODUCTS = 'PRODUCTS',
  PAYMENTS = 'PAYMENTS',
  ONLINE_STORE = 'ONLINE_STORE',
  COLLECTIONS = 'COLLECTIONS',
  BLOGS = 'BLOGS',
  APPS = 'APPS',
  MERCHANT = 'MERCHANT',
  DOMAINS = 'DOMAINS',
  SCRIPT = 'SCRIPT',
  PAGES = 'PAGES',
  DEFAULT = 'DEFAULT'
}

/** Whether all items in the cart are entitled to the discount. */
export type AllDiscountItems = {
   __typename?: 'AllDiscountItems',
  /** Whether all items are selected. The value is hardcoded to `true`. */
  allItems: Scalars['Boolean'],
};

/** A version of the API. */
export type ApiVersion = {
   __typename?: 'ApiVersion',
  /** The human-readable name of the version. */
  displayName: Scalars['String'],
  /** The unique identifier of an ApiVersion. All supported API versions have a date-based (YYYY-MM) or `unstable` handle. */
  handle: Scalars['String'],
  /** Whether the version is supported by Shopify. */
  supported: Scalars['Boolean'],
};

/** A Shopify application. */
export type App = Node & {
   __typename?: 'App',
  /** A unique application API identifier. */
  apiKey: Scalars['String'],
  /** App store page URL of the app. */
  appStoreAppUrl?: Maybe<Scalars['URL']>,
  /** App store page URL of the developer who created the app. */
  appStoreDeveloperUrl?: Maybe<Scalars['URL']>,
  /** Banner image for the app. */
  banner: Image,
  /** Description of the app. */
  description?: Maybe<Scalars['String']>,
  /** App's developer name. */
  developerName?: Maybe<Scalars['String']>,
  /** Website of the developer who created the app. */
  developerUrl: Scalars['URL'],
  /** Whether the app uses the Embedded App SDK. */
  embedded: Scalars['Boolean'],
  /** Requirements that must be met before the app can be installed. */
  failedRequirements: Array<FailedRequirement>,
  /** List of app features. */
  features: Array<Scalars['String']>,
  /** Feedback from this app about the store. */
  feedback?: Maybe<AppFeedback>,
  /** Handle of the app. */
  handle?: Maybe<Scalars['String']>,
  /** Icon that represents the app. */
  icon: Image,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Webpage where you can install the app. */
  installUrl?: Maybe<Scalars['URL']>,
  /** 
 * Corresponding AppInstallation for this shop and App.
   * Returns null if the App is not installed.
 */
  installation?: Maybe<AppInstallation>,
  /** Webpage that the app starts in. */
  launchUrl: Scalars['URL'],
  /** Menu items for the app, which also appear as submenu items in left navigation sidebar in the Shopify admin. */
  navigationItems: Array<NavigationItem>,
  /** Detailed information about the app pricing. */
  pricingDetails?: Maybe<Scalars['String']>,
  /** Summary of the app pricing details. */
  pricingDetailsSummary: Scalars['String'],
  /** Link to app privacy policy. */
  privacyPolicyUrl?: Maybe<Scalars['URL']>,
  /** Whether the app is published. */
  published: Scalars['Boolean'],
  /** Screenshots of the app. */
  screenshots: Array<Image>,
  /** Whether the app was developed by Shopify. */
  shopifyDeveloped: Scalars['Boolean'],
  /** Name of the app. */
  title: Scalars['String'],
  /** 
 * Message that appears when the app is uninstalled. For example:
   * By removing this app, you will no longer be able to publish products to
   * MySocialSite or view this app in your Shopify admin. You can re-enable this
   * channel at any time.
 */
  uninstallMessage: Scalars['String'],
  /** Webpage where you can uninstall the app. */
  uninstallUrl?: Maybe<Scalars['URL']>,
};

export type AppConnection = {
   __typename?: 'AppConnection',
  /** A list of edges. */
  edges: Array<AppEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** App credits can be applied by the merchant towards future app purchases, subscriptions, or usage records in Shopify. */
export type AppCredit = Node & {
   __typename?: 'AppCredit',
  /** The amount that can be used towards future app purchases in Shopify. */
  amount: MoneyV2,
  /** The date and time when the app credit was created. */
  createdAt: Scalars['DateTime'],
  /** The description of the app credit. */
  description: Scalars['String'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Whether the app credit is a test transaction. */
  test: Scalars['Boolean'],
};

export type AppCreditConnection = {
   __typename?: 'AppCreditConnection',
  /** A list of edges. */
  edges: Array<AppCreditEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `appCreditCreate` mutation. */
export type AppCreditCreatePayload = {
   __typename?: 'AppCreditCreatePayload',
  /** The newly created app credit. */
  appCredit?: Maybe<AppCredit>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type AppCreditEdge = {
   __typename?: 'AppCreditEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of AppCreditEdge. */
  node: AppCredit,
};

export type AppEdge = {
   __typename?: 'AppEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of AppEdge. */
  node: App,
};

/** 
 * Reports the status of shops and their resources and displays this information
 * within Shopify admin. AppFeedback is used to notify merchants about steps they need to take
 * to set up an app on their store.
 */
export type AppFeedback = {
   __typename?: 'AppFeedback',
  /** The application associated to the feedback. */
  app: App,
  /** A link to where merchants can resolve errors. */
  link?: Maybe<Link>,
  /** The feedback message presented to the merchant. */
  messages: Array<UserError>,
};

/** Represents an installed application on a shop. */
export type AppInstallation = Node & {
   __typename?: 'AppInstallation',
  /** Access scopes granted to an app by a merchant during installation. */
  accessScopes: Array<AccessScope>,
  /** Active subscriptions charged to a shop on a recurring basis. */
  activeSubscriptions: Array<AppSubscription>,
  /** All subscriptions created for a shop. */
  allSubscriptions: AppSubscriptionConnection,
  /** Application which is installed. */
  app: App,
  /** Channel associated with the installed application. */
  channel?: Maybe<Channel>,
  /** Credits that can be used towards future app purchases. */
  credits: AppCreditConnection,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Url used to launch the app. */
  launchUrl: Scalars['URL'],
  /** One-time purchases to a shop. */
  oneTimePurchases: AppPurchaseOneTimeConnection,
  /** Publication associated with the installed application. */
  publication?: Maybe<Publication>,
  /** Subscriptions charge to a shop on a recurring basis. */
  subscriptions: Array<AppSubscription>,
  /** Webpage where you can uninstall the app. */
  uninstallUrl?: Maybe<Scalars['URL']>,
};


/** Represents an installed application on a shop. */
export type AppInstallationallSubscriptionsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<AppSubscriptionSortKeys>
};


/** Represents an installed application on a shop. */
export type AppInstallationcreditsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<AppTransactionSortKeys>
};


/** Represents an installed application on a shop. */
export type AppInstallationoneTimePurchasesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<AppTransactionSortKeys>
};

/** Possible categories of an app installation. */
export enum AppInstallationCategory {
  /** Sales channel apps. */
  CHANNEL = 'CHANNEL',
  /** Apps that can be used in the POS mobile client. */
  POS_EMBEDDED = 'POS_EMBEDDED'
}

export type AppInstallationConnection = {
   __typename?: 'AppInstallationConnection',
  /** A list of edges. */
  edges: Array<AppInstallationEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type AppInstallationEdge = {
   __typename?: 'AppInstallationEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of AppInstallationEdge. */
  node: AppInstallation,
};

/** Possible privacy types of an app installation. */
export enum AppInstallationPrivacy {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE'
}

/** The set of valid sort keys for the appInstallations query. */
export enum AppInstallationSortKeys {
  /** Sort by the `installed_at` value. */
  INSTALLED_AT = 'INSTALLED_AT',
  /** Sort by the `app_title` value. */
  APP_TITLE = 'APP_TITLE',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** Fields required to install an app. */
export type AppInstallInput = {
  /** The ID for the channel API client to be installed. */
  id: Scalars['ID'],
};

/** Defines the pricing model for the app subscription. */
export type AppPlanInput = {
  /** Usage based billing pricing details. */
  appUsagePricingDetails?: Maybe<AppUsagePricingInput>,
  /** Recurring based billing pricing details. */
  appRecurringPricingDetails?: Maybe<AppRecurringPricingInput>,
};

/** Defines the app plan the merchant is subscribed to. */
export type AppPlanV2 = {
   __typename?: 'AppPlanV2',
  /** Defines the pricing model for the app subscription. */
  pricingDetails: AppPricingDetails,
};

/** Information about the price charged to a shop every plan period. */
export type AppPricingDetails = AppUsagePricing | AppRecurringPricing;

/** Interval for which pricing details are applied. */
export enum AppPricingInterval {
  /** App plan pricing details are applied every 30 days. */
  EVERY_30_DAYS = 'EVERY_30_DAYS'
}

/** Services and features purchased once by the store. */
export type AppPurchase = {
  /** The date and time when the app purchase was created. */
  createdAt: Scalars['DateTime'],
  /** The name of the app purchase. */
  name: Scalars['String'],
  /** The amount to be charged to the store for the app purchase. */
  price: MoneyV2,
  /** The status of the app purchase. Possible values include pending, active, declined and cancelled. */
  status: AppPurchaseStatus,
  /** Whether the app purchase is a test transaction. */
  test: Scalars['Boolean'],
};

/** Services and features purchased once by a store. */
export type AppPurchaseOneTime = AppPurchase & Node & {
   __typename?: 'AppPurchaseOneTime',
  /** The date and time when the app purchase was created. */
  createdAt: Scalars['DateTime'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The name of the app purchase. */
  name: Scalars['String'],
  /** The amount to be charged to the store for the app purchase. */
  price: MoneyV2,
  /** The status of the app purchase. Possible values include pending, active, declined and cancelled. */
  status: AppPurchaseStatus,
  /** Whether the app purchase is a test transaction. */
  test: Scalars['Boolean'],
};

export type AppPurchaseOneTimeConnection = {
   __typename?: 'AppPurchaseOneTimeConnection',
  /** A list of edges. */
  edges: Array<AppPurchaseOneTimeEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `appPurchaseOneTimeCreate` mutation. */
export type AppPurchaseOneTimeCreatePayload = {
   __typename?: 'AppPurchaseOneTimeCreatePayload',
  /** The newly created app one-time purchase. */
  appPurchaseOneTime?: Maybe<AppPurchaseOneTime>,
  /** The URL where the merchant can approve or decline the app one-time purchase. */
  confirmationUrl?: Maybe<Scalars['URL']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type AppPurchaseOneTimeEdge = {
   __typename?: 'AppPurchaseOneTimeEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of AppPurchaseOneTimeEdge. */
  node: AppPurchaseOneTime,
};

/** The status of the purchase. */
export enum AppPurchaseStatus {
  /** 
 * The app purchase has been approved by the merchant and is ready to be
   * activated by the app. App purchases created through the GraphQL Admin API are
   * activated upon approval.
 */
  ACCEPTED = 'ACCEPTED',
  /** 
 * The app purchase has been activated by the app. Active app purchases are
   * charged to the store and partners receive payouts for active app purchase.
 */
  ACTIVE = 'ACTIVE',
  /** The app purchase was declined by the merchant. */
  DECLINED = 'DECLINED',
  /** The app purchase was not accepted within 2 days of being created. */
  EXPIRED = 'EXPIRED',
  /** The app purchase is pending approval by the merchant. */
  PENDING = 'PENDING'
}

/** Price charged every interval. */
export type AppRecurringPricing = {
   __typename?: 'AppRecurringPricing',
  /** Specifies the number of days in a billing cycle of the app subscription. */
  interval: AppPricingInterval,
  /** The amount to be charged to the store every billing interval. */
  price: MoneyV2,
};

/** Allows an app to charge per billing interval. */
export type AppRecurringPricingInput = {
  /** The amount to be charged to the store every billing interval. The only permitted currency code is USD. */
  price: MoneyInput,
};

/** The set of valid sort keys for the installedApps query. */
export enum AppsSortKeys {
  /** Sort by the `title` value. */
  TITLE = 'TITLE',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** Provides users access to services and/or features for a duration of time. */
export type AppSubscription = Node & {
   __typename?: 'AppSubscription',
  /** The date and time when the app subscription was created. */
  createdAt: Scalars['DateTime'],
  /** The date and time when the current app subscription period ends. */
  currentPeriodEnd?: Maybe<Scalars['DateTime']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Attaches a plan to an app subscription. */
  lineItems: Array<AppSubscriptionLineItem>,
  /** The name of the app subscription. */
  name: Scalars['String'],
  /** The URL where the merchant is redirected after approving the app subscription. */
  returnUrl: Scalars['URL'],
  /** 
 * The status of the app subscription. Possible values include pending, active, declined,
   *          expired, frozen, and cancelled.
 */
  status: AppSubscriptionStatus,
  /** Specifies whether the app subscription is a test transaction. */
  test: Scalars['Boolean'],
  /** The number of days of the free trial. */
  trialDays: Scalars['Int'],
};

/** Return type for `appSubscriptionCancel` mutation. */
export type AppSubscriptionCancelPayload = {
   __typename?: 'AppSubscriptionCancelPayload',
  /** The cancelled app subscription. */
  appSubscription?: Maybe<AppSubscription>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type AppSubscriptionConnection = {
   __typename?: 'AppSubscriptionConnection',
  /** A list of edges. */
  edges: Array<AppSubscriptionEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `appSubscriptionCreate` mutation. */
export type AppSubscriptionCreatePayload = {
   __typename?: 'AppSubscriptionCreatePayload',
  /** The newly created app subscription. */
  appSubscription?: Maybe<AppSubscription>,
  /** The URL where the merchant approves or declines an app subscription. */
  confirmationUrl?: Maybe<Scalars['URL']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type AppSubscriptionEdge = {
   __typename?: 'AppSubscriptionEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of AppSubscriptionEdge. */
  node: AppSubscription,
};

/** Attaches a plan to an app subscription. */
export type AppSubscriptionLineItem = {
   __typename?: 'AppSubscriptionLineItem',
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Defines the pricing model for the app subscription. */
  plan: AppPlanV2,
  /** Lists the store's usage for a usage pricing plan. */
  usageRecords: AppUsageRecordConnection,
};


/** Attaches a plan to an app subscription. */
export type AppSubscriptionLineItemusageRecordsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<AppUsageRecordSortKeys>
};

/** Allows an app to add more than one plan to an app subscription. */
export type AppSubscriptionLineItemInput = {
  /** Defines the pricing model for the app subscription. */
  plan: AppPlanInput,
};

/** Return type for `appSubscriptionLineItemUpdate` mutation. */
export type AppSubscriptionLineItemUpdatePayload = {
   __typename?: 'AppSubscriptionLineItemUpdatePayload',
  /** The updated app subscription. */
  appSubscription?: Maybe<AppSubscription>,
  /** The URL where the merchant approves or declines the updated app subscription line item. */
  confirmationUrl?: Maybe<Scalars['URL']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** The set of valid sort keys for the allSubscriptions query. */
export enum AppSubscriptionSortKeys {
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** The status of the app subscription. */
export enum AppSubscriptionStatus {
  /** The app subscription is pending approval by the merchant. */
  PENDING = 'PENDING',
  /** 
 * The app subscription has been approved by the merchant and is ready to be
   * activated by the app. App subscriptions created through the GraphQL Admin API
   * are activated upon approval.
 */
  ACCEPTED = 'ACCEPTED',
  /** 
 * The app subscription has been activated by the app. Active app subscriptions
   * are charged to the store and partners recieve payouts for active app subscriptions.
 */
  ACTIVE = 'ACTIVE',
  /** The app subscription was declined by the merchant. */
  DECLINED = 'DECLINED',
  /** The app subscription was not accepted within 2 days of being created. */
  EXPIRED = 'EXPIRED',
  /** 
 * The app subscription is on hold due to a store subscription non-payment. The
   * charge will re-activate once subscription payments resume.
 */
  FROZEN = 'FROZEN',
  /** The app subscription was cancelled by the app. */
  CANCELLED = 'CANCELLED'
}

/** The set of valid sort keys for the oneTimePurchases query. */
export enum AppTransactionSortKeys {
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** Input fields used to uninstall an app. */
export type AppUninstallInput = {
  /** The id for the app api client to be uninstalled. */
  id: Scalars['ID'],
  /** Reason selected from a list of predefined reasons for uninstalling the app. */
  feedback?: Maybe<Scalars['String']>,
  /** 
 * Free form text description for uninstalling the app.
   *               To be provided only when feedback has been provided.
 */
  feedbackDescription?: Maybe<Scalars['String']>,
  /** Additional attributes to pass along during app installation. */
  extraAttributes?: Maybe<Scalars['JSON']>,
};

/** Defines the usage pricing model for the app subscription. */
export type AppUsagePricing = {
   __typename?: 'AppUsagePricing',
  /** The total usage records for interval. */
  balanceUsed: MoneyV2,
  /** The limit a store can be charged for usage based pricing. */
  cappedAmount: MoneyV2,
  /** Specifies the interval which usage records are applied. */
  interval: AppPricingInterval,
  /** The terms and conditions for app usage pricing. */
  terms: Scalars['String'],
};

/** Allows an app to charge a store for usage. */
export type AppUsagePricingInput = {
  /** The limit a customer can be charged for usage based pricing. */
  cappedAmount: MoneyInput,
  /** The terms and conditions for app usage. */
  terms: Scalars['String'],
};

/** Store usage for app subscriptions with usage pricing. */
export type AppUsageRecord = Node & {
   __typename?: 'AppUsageRecord',
  /** The date and time when the usage record was created. */
  createdAt: Scalars['DateTime'],
  /** The description of the app usage record. */
  description: Scalars['String'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The price of the usage record. The only permitted currency code is USD. */
  price: MoneyV2,
  /** Defines the usage pricing plan the merchant is subscribed to. */
  subscriptionLineItem: AppSubscriptionLineItem,
};

export type AppUsageRecordConnection = {
   __typename?: 'AppUsageRecordConnection',
  /** A list of edges. */
  edges: Array<AppUsageRecordEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `appUsageRecordCreate` mutation. */
export type AppUsageRecordCreatePayload = {
   __typename?: 'AppUsageRecordCreatePayload',
  /** The newly created app usage record. */
  appUsageRecord?: Maybe<AppUsageRecord>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type AppUsageRecordEdge = {
   __typename?: 'AppUsageRecordEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of AppUsageRecordEdge. */
  node: AppUsageRecord,
};

/** The set of valid sort keys for the usageRecords query. */
export enum AppUsageRecordSortKeys {
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** Specifies the input fields for an attachment. */
export type AttachmentInput = {
  /** ID of the attachment. */
  id?: Maybe<Scalars['ID']>,
  /** The URL of the attachment. Must be a signed upload URL. */
  url?: Maybe<Scalars['String']>,
};

/** Represents a generic custom attribute. */
export type Attribute = {
   __typename?: 'Attribute',
  /** Key or name of the attribute. */
  key: Scalars['String'],
  /** Value of the attribute. */
  value?: Maybe<Scalars['String']>,
};

/** Specifies the input fields required for an attribute. */
export type AttributeInput = {
  /** Key or name of the attribute. */
  key: Scalars['String'],
  /** Value of the attribute. */
  value: Scalars['String'],
};

/** Automatic discount applications capture the intentions of a discount that was automatically applied. */
export type AutomaticDiscountApplication = DiscountApplication & {
   __typename?: 'AutomaticDiscountApplication',
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod,
  /** 
 * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
 */
  index: Scalars['Int'],
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection,
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType,
  /** The title of the discount application. */
  title: Scalars['String'],
  /** The value of the discount application. */
  value: PricingValue,
};

/** The set of valid sort keys for the automaticDiscounts query. */
export enum AutomaticDiscountSortKeys {
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** 
 * Basic events chronicle resource activities such as the creation of an article, the fulfillment of an order, or
 * the addition of a product.
 */
export type BasicEvent = Node & Event & {
   __typename?: 'BasicEvent',
  /** The name of the app that created the event. Returns null when the event originates from the Shopify admin. */
  appTitle?: Maybe<Scalars['String']>,
  /** Whether the event was created by an app. */
  attributeToApp: Scalars['Boolean'],
  /** Whether the event was caused by an admin user. */
  attributeToUser: Scalars['Boolean'],
  /** The date and time when the event was created. */
  createdAt: Scalars['DateTime'],
  /** Whether the event is critical. */
  criticalAlert: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Human readable text that describes the event. */
  message: Scalars['FormattedString'],
};

/** Represents the dimensions of a three-dimensional box. */
export type BoxDimensions = {
   __typename?: 'BoxDimensions',
  /** The height in `unit`s. */
  height: Scalars['Float'],
  /** The length in `unit`s. */
  length: Scalars['Float'],
  /** Unit of measurement for `length`, `width`, and `height`. */
  unit: LengthUnit,
  /** The width in `unit`s. */
  width: Scalars['Float'],
};

/** 
 * An asynchronous long-running operation to fetch data in bulk.
 * 
 * Bulk operations are created using the `bulkOperationRunQuery` mutation. After they are created,
 * clients should poll the `status` field for updates. When `COMPLETED`, the `url` field contains
 * a link to the data in [JSONL](http://jsonlines.org/) format.
 * 
 * See the [bulk operations guide](https://help.shopify.com/api/guides/bulk-operations) for more details.
 */
export type BulkOperation = Node & {
   __typename?: 'BulkOperation',
  /** When the bulk operation was successfully completed. */
  completedAt?: Maybe<Scalars['DateTime']>,
  /** When the bulk operation was created. */
  createdAt: Scalars['DateTime'],
  /** Error code for failed operations. */
  errorCode?: Maybe<BulkOperationErrorCode>,
  /** File size in bytes of the file in the `url` field. */
  fileSize?: Maybe<Scalars['UnsignedInt64']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The running count of objects processed. This can be used to track operation progress. */
  objectCount: Scalars['UnsignedInt64'],
  /** 
 * URL to partial/incomplete response data (in [JSONL](http://jsonlines.org/) format) returned by a failed operation.
   * Expires **one week** after the operation fails. Returns `null` when there's no data available.
 */
  partialDataUrl?: Maybe<Scalars['URL']>,
  /** GraphQL query document specified in `bulkOperationRunQuery`. */
  query: Scalars['String'],
  /** Status of the bulk operation. */
  status: BulkOperationStatus,
  /** 
 * URL to the response data in [JSONL](http://jsonlines.org/) format.
   * Expires **one week** after the operation completes.
 */
  url?: Maybe<Scalars['URL']>,
};

/** Return type for `bulkOperationCancel` mutation. */
export type BulkOperationCancelPayload = {
   __typename?: 'BulkOperationCancelPayload',
  /** The bulk operation to be canceled. */
  bulkOperation?: Maybe<BulkOperation>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Error codes for failed bulk operations. */
export enum BulkOperationErrorCode {
  /** 
 * The provided operation `query` returned access denied due to missing
   * [access scopes](https://help.shopify.com/api/getting-started/authentication/oauth/scopes).
   * Review the requested object permissions and execute the query as a normal non-bulk GraphQL request to see more details.
 */
  ACCESS_DENIED = 'ACCESS_DENIED',
  /** Operation resulted in partial or incomplete data due to internal server errors during execution. */
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  /** 
 * Operation resulted in partial or incomplete data due to query timeouts during execution.
   * In some cases, timeouts can be avoided by modifying your `query` to select fewer fields.
 */
  TIMEOUT = 'TIMEOUT'
}

/** Return type for `bulkOperationRunQuery` mutation. */
export type BulkOperationRunQueryPayload = {
   __typename?: 'BulkOperationRunQueryPayload',
  /** The newly created bulk operation. */
  bulkOperation?: Maybe<BulkOperation>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Statuses of a bulk operation. */
export enum BulkOperationStatus {
  /** Operation created. */
  CREATED = 'CREATED',
  /** Operation running. */
  RUNNING = 'RUNNING',
  /** Operation completed. */
  COMPLETED = 'COMPLETED',
  /** Operation canceling. */
  CANCELING = 'CANCELING',
  /** Operation canceled. */
  CANCELED = 'CANCELED',
  /** Operation failed. */
  FAILED = 'FAILED',
  /** Operation URL has expired. */
  EXPIRED = 'EXPIRED'
}

/** The computed properties for a draft order. */
export type CalculatedDraftOrder = {
   __typename?: 'CalculatedDraftOrder',
  /** Order-level discount applied to the draft order. */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscount>,
  /** 
 * The available shipping rates for the draft order. Requires a customer with a
   * valid shipping address and at least one line item.
 */
  availableShippingRates: Array<ShippingRate>,
  /** Customer who will be sent an invoice for the draft order, if there is one. */
  customer?: Maybe<Customer>,
  /** Line items in the draft order with their computed properties. */
  lineItems: Array<CalculatedDraftOrderLineItem>,
  /** Line item that contains the shipping costs. */
  shippingLine?: Maybe<ShippingLine>,
  /** Subtotal of the line items and their discounts (does not contain shipping charges or shipping discounts, or taxes). */
  subtotalPrice: Scalars['Money'],
  /** Total amount of taxes charged for each line item and shipping line. */
  taxLines: Array<TaxLine>,
  /** Total amount of the draft order (includes taxes, shipping charges, and discounts). */
  totalPrice: Scalars['Money'],
  /** Total shipping charge for the draft order. */
  totalShippingPrice: Scalars['Money'],
  /** Total amount of taxes for the draft order. */
  totalTax: Scalars['Money'],
};

/** The computed line items for a draft order. */
export type CalculatedDraftOrderLineItem = {
   __typename?: 'CalculatedDraftOrderLineItem',
  /** Discount applied to the line item. */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscount>,
  /** Indicates if this is a product variant line item, or a custom line item. */
  custom: Scalars['Boolean'],
  /** List of additional information (metafields) about the line item. */
  customAttributes: Array<Attribute>,
  /** Total price with discounts applied. */
  discountedTotal: MoneyV2,
  /** Unit price with discounts applied. */
  discountedUnitPrice: MoneyV2,
  /** 
 * Name of the service provider who fulfilled the order.
   * 
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
 */
  fulfillmentService: FulfillmentService,
  /** Image associated with the draft order line item. */
  image?: Maybe<Image>,
  /** Indicates whether the line item represents the puchase of a gift card. */
  isGiftCard: Scalars['Boolean'],
  /** Name of the product. */
  name: Scalars['String'],
  /** Total price (without discounts) of the line item, based on the original unit price of the variant x quantity. */
  originalTotal: MoneyV2,
  /** Variant price without any discounts applied. */
  originalUnitPrice: MoneyV2,
  /** Product associated with the draft order line item. */
  product?: Maybe<Product>,
  /** Number of variant items requested in the draft order. */
  quantity: Scalars['Int'],
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean'],
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>,
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean'],
  /** Title of the product or variant (this field only applies to custom line items). */
  title: Scalars['String'],
  /** Total value of the discount. */
  totalDiscount: MoneyV2,
  /** Variant associated with the draft order line item. */
  variant?: Maybe<ProductVariant>,
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>,
  /** Name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>,
  /** Weight unit and value for a draft order line item. */
  weight?: Maybe<Weight>,
};

/** 
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type Channel = Node & {
   __typename?: 'Channel',
  /** Underlying app used by the channel. */
  app: App,
  /** The collection publications for the list of collections published to the channel. */
  collectionPublicationsV3: ResourcePublicationConnection,
  /** The list of collections published to the channel. */
  collections: CollectionConnection,
  /** Unique identifier for the channel. */
  handle: Scalars['String'],
  /** Whether the collection is available to the channel. */
  hasCollection: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Name of the channel. */
  name: Scalars['String'],
  /** Menu items for the channel, which also appear as submenu items in left navigation sidebar in the Shopify admin. */
  navigationItems: Array<NavigationItem>,
  /** Home page for the channel. */
  overviewPath?: Maybe<Scalars['URL']>,
  productPublications: ProductPublicationConnection,
  /** The product publications for the list of products published to the channel. */
  productPublicationsV3: ResourcePublicationConnection,
  /** The list of products published to the channel. */
  products: ProductConnection,
  /** Whether or not this channel supports future publishing. */
  supportsFuturePublishing: Scalars['Boolean'],
};


/** 
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type ChannelcollectionPublicationsV3Args = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type ChannelcollectionsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type ChannelhasCollectionArgs = {
  id: Scalars['ID']
};


/** 
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type ChannelproductPublicationsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type ChannelproductPublicationsV3Args = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * A channel is a group of products and collections that is published to an app. A
 * channel can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type ChannelproductsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

export type ChannelConnection = {
   __typename?: 'ChannelConnection',
  /** A list of edges. */
  edges: Array<ChannelEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type ChannelEdge = {
   __typename?: 'ChannelEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of ChannelEdge. */
  node: Channel,
};

/** Chat event origin tag. */
export enum ChatEventOriginTag {
  /** Plus */
  ORIGIN_PLUS = 'ORIGIN_PLUS',
  /** Plus segmented */
  ORIGIN_PLUS_SEGMENTED = 'ORIGIN_PLUS_SEGMENTED'
}

/** The set of valid sort keys for the codeDiscountNodes query. */
export enum CodeDiscountSortKeys {
  /** Sort by the `starts_at` value. */
  STARTS_AT = 'STARTS_AT',
  /** Sort by the `ends_at` value. */
  ENDS_AT = 'ENDS_AT',
  /** Sort by the `title` value. */
  TITLE = 'TITLE',
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `updated_at` value. */
  UPDATED_AT = 'UPDATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** Represents a collection of products. */
export type Collection = HasMetafields & Node & Publishable & HasPublishedTranslations & {
   __typename?: 'Collection',
  /** The number of publications a resource is published to without feedback errors. */
  availablePublicationCount: Scalars['Int'],
  /** The stripped description of the collection, in a single line with HTML tags removed. */
  description: Scalars['String'],
  /** The description of the collection, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML'],
  /** Information about the collection that's provided through resource feedback. */
  feedback?: Maybe<ResourceFeedback>,
  /** A unique human-friendly string for the collection. Automatically generated from the collection's title. */
  handle: Scalars['String'],
  /** Whether the collection includes a product. */
  hasProduct: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The image associated with the collection. */
  image?: Maybe<Image>,
  /** The metafield associated with the resource. */
  metafield?: Maybe<Metafield>,
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection,
  /** Returns a private metafield found by namespace and key. */
  privateMetafield?: Maybe<PrivateMetafield>,
  /** List of private metafields. */
  privateMetafields: PrivateMetafieldConnection,
  /** The products that are included in the collection. */
  products: ProductConnection,
  /** The number of products included in the collection. */
  productsCount: Scalars['Int'],
  /** The number of publications a resource is published on. */
  publicationCount: Scalars['Int'],
  /** The channels where the collection is published. */
  publications: CollectionPublicationConnection,
  /** Check to see whether the resource is published to a given channel. */
  publishedOnChannel: Scalars['Boolean'],
  /** Check to see whether the resource is published to the calling app's channel. */
  publishedOnCurrentChannel: Scalars['Boolean'],
  /** Check to see whether the resource is published to the calling app's publication. */
  publishedOnCurrentPublication: Scalars['Boolean'],
  /** Check to see whether the resource is published to a given publication. */
  publishedOnPublication: Scalars['Boolean'],
  /** The list of resources that are published to a publication. */
  resourcePublications: ResourcePublicationConnection,
  /** The rules used to assign products to the collection. This applies only to smart collections. */
  ruleSet?: Maybe<CollectionRuleSet>,
  /** SEO information for the collection. */
  seo: SEO,
  /** The order in which the collection's products are sorted. */
  sortOrder: CollectionSortOrder,
  /** The storefront ID of the collection. */
  storefrontId: Scalars['StorefrontID'],
  /** The theme template used when viewing this collection in a store. */
  templateSuffix?: Maybe<Scalars['String']>,
  /** The title of the collection. */
  title: Scalars['String'],
  /** The translations associated with the resource. */
  translations: Array<PublishedTranslation>,
  /** The list of channels that the resource is not published to. */
  unpublishedChannels: ChannelConnection,
  /** The list of publications that the resource is not published to. */
  unpublishedPublications: PublicationConnection,
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the collection was last modified. */
  updatedAt: Scalars['DateTime'],
};


/** Represents a collection of products. */
export type CollectiondescriptionArgs = {
  truncateAt?: Maybe<Scalars['Int']>
};


/** Represents a collection of products. */
export type CollectionhasProductArgs = {
  id: Scalars['ID']
};


/** Represents a collection of products. */
export type CollectionimageArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  crop?: Maybe<CropRegion>,
  scale?: Maybe<Scalars['Int']>
};


/** Represents a collection of products. */
export type CollectionmetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents a collection of products. */
export type CollectionmetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a collection of products. */
export type CollectionprivateMetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents a collection of products. */
export type CollectionprivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a collection of products. */
export type CollectionproductsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<ProductCollectionSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** Represents a collection of products. */
export type CollectionpublicationCountArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>
};


/** Represents a collection of products. */
export type CollectionpublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a collection of products. */
export type CollectionpublishedOnChannelArgs = {
  channelId: Scalars['ID']
};


/** Represents a collection of products. */
export type CollectionpublishedOnPublicationArgs = {
  publicationId: Scalars['ID']
};


/** Represents a collection of products. */
export type CollectionresourcePublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a collection of products. */
export type CollectiontranslationsArgs = {
  locale: Scalars['String']
};


/** Represents a collection of products. */
export type CollectionunpublishedChannelsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a collection of products. */
export type CollectionunpublishedPublicationsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** Return type for `collectionAddProducts` mutation. */
export type CollectionAddProductsPayload = {
   __typename?: 'CollectionAddProductsPayload',
  /** The updated collection. */
  collection?: Maybe<Collection>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type CollectionConnection = {
   __typename?: 'CollectionConnection',
  /** A list of edges. */
  edges: Array<CollectionEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `collectionCreate` mutation. */
export type CollectionCreatePayload = {
   __typename?: 'CollectionCreatePayload',
  /** The collection that has been created. */
  collection?: Maybe<Collection>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Specifies the collection to delete. */
export type CollectionDeleteInput = {
  /** The ID of the collection to be deleted. */
  id: Scalars['ID'],
};

/** Return type for `collectionDelete` mutation. */
export type CollectionDeletePayload = {
   __typename?: 'CollectionDeletePayload',
  /** The ID of the collection that was deleted. */
  deletedCollectionId?: Maybe<Scalars['ID']>,
  /** The shop associated with the collection. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type CollectionEdge = {
   __typename?: 'CollectionEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of CollectionEdge. */
  node: Collection,
};

/** Specifies the input fields required to create a collection. */
export type CollectionInput = {
  /** The description of the collection, in HTML format. */
  descriptionHtml?: Maybe<Scalars['String']>,
  /** A unique human-friendly string for the collection. Automatically generated from the collection's title. */
  handle?: Maybe<Scalars['String']>,
  /** Specifies the collection to update or create a new collection if absent. */
  id?: Maybe<Scalars['ID']>,
  /** The image associated with the collection. */
  image?: Maybe<ImageInput>,
  /** Initial list of collection products. Only valid with `productCreate` and without rules. */
  products?: Maybe<Array<Scalars['ID']>>,
  /** 
 * Initial list of collection publications. Only valid with `productCreate`. This
   * argument is deprecated: Use PublishablePublish instead.
 */
  publications?: Maybe<Array<CollectionPublicationInput>>,
  /** The private metafields to associated with this product. */
  privateMetafields?: Maybe<Array<PrivateMetafieldInput>>,
  /** The rules used to assign products to the collection. */
  ruleSet?: Maybe<CollectionRuleSetInput>,
  /** The theme template used when viewing the collection in a store. */
  templateSuffix?: Maybe<Scalars['String']>,
  /** The order in which the collection's products are sorted. */
  sortOrder?: Maybe<CollectionSortOrder>,
  /** Required for creating a new collection. */
  title?: Maybe<Scalars['String']>,
  /** The metafields to associate with this collection. */
  metafields?: Maybe<Array<MetafieldInput>>,
  /** SEO information for the collection. */
  seo?: Maybe<SEOInput>,
  /** 
 * Indicates whether a redirect is required after a new handle has been provided.
   * If true, then the old handle is redirected to the new one automatically.
 */
  redirectNewHandle?: Maybe<Scalars['Boolean']>,
};

/** Represents the publications where a collection is published. */
export type CollectionPublication = {
   __typename?: 'CollectionPublication',
  /** The channel where the collection will be published. */
  channel: Channel,
  /** The collection to be published on the publication. */
  collection: Collection,
  /** Whether the publication is published or not. */
  isPublished: Scalars['Boolean'],
  /** The publication where the collection will be published. */
  publication: Publication,
  /** The date that the publication was or is going to be published. */
  publishDate: Scalars['DateTime'],
};

export type CollectionPublicationConnection = {
   __typename?: 'CollectionPublicationConnection',
  /** A list of edges. */
  edges: Array<CollectionPublicationEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type CollectionPublicationEdge = {
   __typename?: 'CollectionPublicationEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of CollectionPublicationEdge. */
  node: CollectionPublication,
};

/** Specifies the publications to which a collection will be published. */
export type CollectionPublicationInput = {
  /** The ID of the publication. */
  publicationId?: Maybe<Scalars['ID']>,
  /** The ID of the channel. This argument is deprecated: Use publicationId instead. */
  channelId?: Maybe<Scalars['ID']>,
  /** This argument is deprecated: Use publicationId instead. */
  channelHandle?: Maybe<Scalars['String']>,
};

/** Specifies a collection to publish and the sales channels to publish it to. */
export type CollectionPublishInput = {
  /** The collection to create or update publications for. */
  id: Scalars['ID'],
  /** The channels where the collection will be published. */
  collectionPublications: Array<CollectionPublicationInput>,
};

/** Return type for `collectionPublish` mutation. */
export type CollectionPublishPayload = {
   __typename?: 'CollectionPublishPayload',
  /** The published collection. */
  collection?: Maybe<Collection>,
  /** The channels where the collection has been published. */
  collectionPublications?: Maybe<Array<CollectionPublication>>,
  /** The shop associated with the collection. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `collectionRemoveProducts` mutation. */
export type CollectionRemoveProductsPayload = {
   __typename?: 'CollectionRemoveProductsPayload',
  /** The asynchronous job removing the products. */
  job?: Maybe<Job>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `collectionReorderProducts` mutation. */
export type CollectionReorderProductsPayload = {
   __typename?: 'CollectionReorderProductsPayload',
  /** The asynchronous job reordering the products. */
  job?: Maybe<Job>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Represents at rule that's used to assign products to a collection. */
export type CollectionRule = {
   __typename?: 'CollectionRule',
  /** The attribute that the rule focuses on (for example, `title` or `product_type`). */
  column: CollectionRuleColumn,
  /** The value that the operator is applied to (for example, `Hats`). */
  condition: Scalars['String'],
  /** The type of operator that the rule is based on (for example, `equals`, `contains`, or `not_equals`). */
  relation: CollectionRuleRelation,
};

/** Specifies the property of a product being used to populate the smart collection. */
export enum CollectionRuleColumn {
  TAG = 'TAG',
  TITLE = 'TITLE',
  TYPE = 'TYPE',
  VENDOR = 'VENDOR',
  VARIANT_PRICE = 'VARIANT_PRICE',
  VARIANT_COMPARE_AT_PRICE = 'VARIANT_COMPARE_AT_PRICE',
  VARIANT_WEIGHT = 'VARIANT_WEIGHT',
  VARIANT_INVENTORY = 'VARIANT_INVENTORY',
  VARIANT_TITLE = 'VARIANT_TITLE'
}

/** Collections may use rules to automatically include the matching products. This defines restrictions for a type of rule. */
export type CollectionRuleConditions = {
   __typename?: 'CollectionRuleConditions',
  /** Allowed relations of the rule. */
  allowedRelations: Array<CollectionRuleRelation>,
  /** Most commonly used relation for this rule. */
  defaultRelation: CollectionRuleRelation,
  /** Type of the rule. */
  ruleType: CollectionRuleColumn,
};

/** Specifies a rule to associate with a collection. */
export type CollectionRuleInput = {
  /** The attribute that the rule focuses on (for example, `title` or `product_type`). */
  column: CollectionRuleColumn,
  /** The type of operator that the rule is based on (for example, `equals`, `contains`, or `not_equals`). */
  relation: CollectionRuleRelation,
  /** The value that the operator is applied to (for example, `Hats`). */
  condition: Scalars['String'],
};

/** Specifies the relationship between the `column` and the condition. */
export enum CollectionRuleRelation {
  EQUALS = 'EQUALS',
  NOT_EQUALS = 'NOT_EQUALS',
  GREATER_THAN = 'GREATER_THAN',
  LESS_THAN = 'LESS_THAN',
  STARTS_WITH = 'STARTS_WITH',
  ENDS_WITH = 'ENDS_WITH',
  CONTAINS = 'CONTAINS',
  NOT_CONTAINS = 'NOT_CONTAINS'
}

/** The set of rules that are used to determine which products are included in the collection. */
export type CollectionRuleSet = {
   __typename?: 'CollectionRuleSet',
  /** 
 * Whether products must match any or all of the rules to be included in the collection.
   * If true, then products must match one or more of the rules to be included in the collection.
   * If false, then products must match all of the rules to be included in the collection.
 */
  appliedDisjunctively: Scalars['Boolean'],
  /** The rules used to assign products to the collection. */
  rules: Array<CollectionRule>,
};

/** Specifies a rule set for the collection. */
export type CollectionRuleSetInput = {
  /** 
 * Whether products must match any or all of the rules to be included in the collection.
   * If true, then products must match one or more of the rules to be included in the collection.
   * If false, then products must match all of the rules to be included in the collection.
 */
  appliedDisjunctively: Scalars['Boolean'],
  /** The rules used to assign products to the collection. */
  rules?: Maybe<Array<CollectionRuleInput>>,
};

/** The set of valid sort keys for the collections query. */
export enum CollectionSortKeys {
  /** Sort by the `title` value. */
  TITLE = 'TITLE',
  /** Sort by the `updated_at` value. */
  UPDATED_AT = 'UPDATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** Specifies the sort order for the products in the collection. */
export enum CollectionSortOrder {
  MANUAL = 'MANUAL',
  BEST_SELLING = 'BEST_SELLING',
  ALPHA_ASC = 'ALPHA_ASC',
  ALPHA_DESC = 'ALPHA_DESC',
  PRICE_DESC = 'PRICE_DESC',
  PRICE_ASC = 'PRICE_ASC',
  CREATED_DESC = 'CREATED_DESC',
  CREATED = 'CREATED'
}

/** Specifies the collection to unpublish and the sales channels to remove it from. */
export type CollectionUnpublishInput = {
  /** The collection to create or update publications for. */
  id: Scalars['ID'],
  /** The channels where the collection is published. */
  collectionPublications: Array<CollectionPublicationInput>,
};

/** Return type for `collectionUnpublish` mutation. */
export type CollectionUnpublishPayload = {
   __typename?: 'CollectionUnpublishPayload',
  /** The collection that has been unpublished. */
  collection?: Maybe<Collection>,
  /** The shop associated with the collection. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `collectionUpdate` mutation. */
export type CollectionUpdatePayload = {
   __typename?: 'CollectionUpdatePayload',
  /** The updated collection. */
  collection?: Maybe<Collection>,
  /** The asynchronous job updating the products based on the new rule set. */
  job?: Maybe<Job>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** 
 * Comment events are generated by staff members of a shop.
 * They are created when a staff member adds a comment to the timeline of an order, draft order, customer, or transfer.
 */
export type CommentEvent = Node & Event & {
   __typename?: 'CommentEvent',
  /** The name of the app that created the event. Returns null when the event originates from the Shopify admin. */
  appTitle?: Maybe<Scalars['String']>,
  /** The attachments associated with the comment event. */
  attachments: Array<CommentEventAttachment>,
  /** Whether the event was created by an app. */
  attributeToApp: Scalars['Boolean'],
  /** Whether the event was caused by an admin user. */
  attributeToUser: Scalars['Boolean'],
  /** Whether the comment event can be deleted. If true, then the comment event can be deleted. */
  canDelete: Scalars['Boolean'],
  /** Whether the comment event can be edited. If true, then the comment event can be edited. */
  canEdit: Scalars['Boolean'],
  /** The date and time when the event was created. */
  createdAt: Scalars['DateTime'],
  /** Whether the event is critical. */
  criticalAlert: Scalars['Boolean'],
  /** Whether the comment event has been edited. If true, then the comment event has been edited. */
  edited: Scalars['Boolean'],
  /** The references associated with the comment event. */
  embed?: Maybe<CommentEventEmbed>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Human readable text that describes the event. */
  message: Scalars['FormattedString'],
  /** The raw body of the comment event. */
  rawMessage: Scalars['String'],
  /** The subject of the comment event. */
  subject: CommentEventSubject,
};

/** A file attachment associated to a comment event. */
export type CommentEventAttachment = {
   __typename?: 'CommentEventAttachment',
  /** The file extension of the comment event attachment, indicating the file format. */
  fileExtension?: Maybe<Scalars['String']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The image attached to the comment event. */
  image?: Maybe<Image>,
  /** The filename of the comment event attachment. */
  name: Scalars['String'],
  /** The size of the attachment. */
  size: Scalars['Int'],
  /** The URL of the attachment. */
  url: Scalars['URL'],
};


/** A file attachment associated to a comment event. */
export type CommentEventAttachmentimageArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  crop?: Maybe<CropRegion>,
  scale?: Maybe<Scalars['Int']>
};

/** The main embed of a comment event. */
export type CommentEventEmbed = Order | DraftOrder | Customer | Product | ProductVariant;

/** The subject line of a comment event. */
export type CommentEventSubject = {
  /** Whether the timeline subject has a timeline comment. If true, then a timeline comment exists. */
  hasTimelineComment: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
};

/** Indicates how HTTP response content should be handled. */
export enum ContentDisposition {
  /** Content is displayed inline in the browser (ie: as a web page or as part of a web page) */
  INLINE = 'INLINE',
  /** Content is downloaded and saved locally. */
  ATTACHMENT = 'ATTACHMENT'
}

/** Countries that have been defined in shipping zones for the shop. */
export type CountriesInShippingZones = {
   __typename?: 'CountriesInShippingZones',
  /** Countries that have been defined in shipping zones. */
  countryCodes: Array<CountryCode>,
  /** Whether 'Rest of World' has been defined in any shipping zones. */
  includeRestOfWorld: Scalars['Boolean'],
};

/** ISO 3166-1 alpha-2 country codes with some differences. */
export enum CountryCode {
  /** Afghanistan. */
  AF = 'AF',
  /** Aland Islands. */
  AX = 'AX',
  /** Albania. */
  AL = 'AL',
  /** Algeria. */
  DZ = 'DZ',
  /** Andorra. */
  AD = 'AD',
  /** Angola. */
  AO = 'AO',
  /** Anguilla. */
  AI = 'AI',
  /** Antigua And Barbuda. */
  AG = 'AG',
  /** Argentina. */
  AR = 'AR',
  /** Armenia. */
  AM = 'AM',
  /** Aruba. */
  AW = 'AW',
  /** Australia. */
  AU = 'AU',
  /** Austria. */
  AT = 'AT',
  /** Azerbaijan. */
  AZ = 'AZ',
  /** Bahamas. */
  BS = 'BS',
  /** Bahrain. */
  BH = 'BH',
  /** Bangladesh. */
  BD = 'BD',
  /** Barbados. */
  BB = 'BB',
  /** Belarus. */
  BY = 'BY',
  /** Belgium. */
  BE = 'BE',
  /** Belize. */
  BZ = 'BZ',
  /** Benin. */
  BJ = 'BJ',
  /** Bermuda. */
  BM = 'BM',
  /** Bhutan. */
  BT = 'BT',
  /** Bolivia. */
  BO = 'BO',
  /** Bosnia And Herzegovina. */
  BA = 'BA',
  /** Botswana. */
  BW = 'BW',
  /** Bouvet Island. */
  BV = 'BV',
  /** Brazil. */
  BR = 'BR',
  /** British Indian Ocean Territory. */
  IO = 'IO',
  /** Brunei. */
  BN = 'BN',
  /** Bulgaria. */
  BG = 'BG',
  /** Burkina Faso. */
  BF = 'BF',
  /** Burundi. */
  BI = 'BI',
  /** Cambodia. */
  KH = 'KH',
  /** Canada. */
  CA = 'CA',
  /** Cape Verde. */
  CV = 'CV',
  /** Caribbean Netherlands. */
  BQ = 'BQ',
  /** Cayman Islands. */
  KY = 'KY',
  /** Central African Republic. */
  CF = 'CF',
  /** Chad. */
  TD = 'TD',
  /** Chile. */
  CL = 'CL',
  /** China. */
  CN = 'CN',
  /** Christmas Island. */
  CX = 'CX',
  /** Cocos (Keeling) Islands. */
  CC = 'CC',
  /** Colombia. */
  CO = 'CO',
  /** Comoros. */
  KM = 'KM',
  /** Congo. */
  CG = 'CG',
  /** Congo, The Democratic Republic Of The. */
  CD = 'CD',
  /** Cook Islands. */
  CK = 'CK',
  /** Costa Rica. */
  CR = 'CR',
  /** Croatia. */
  HR = 'HR',
  /** Cuba. */
  CU = 'CU',
  /** Curaçao. */
  CW = 'CW',
  /** Cyprus. */
  CY = 'CY',
  /** Czech Republic. */
  CZ = 'CZ',
  /** Côte d'Ivoire. */
  CI = 'CI',
  /** Denmark. */
  DK = 'DK',
  /** Djibouti. */
  DJ = 'DJ',
  /** Dominica. */
  DM = 'DM',
  /** Dominican Republic. */
  DO = 'DO',
  /** Ecuador. */
  EC = 'EC',
  /** Egypt. */
  EG = 'EG',
  /** El Salvador. */
  SV = 'SV',
  /** Equatorial Guinea. */
  GQ = 'GQ',
  /** Eritrea. */
  ER = 'ER',
  /** Estonia. */
  EE = 'EE',
  /** Eswatini. */
  SZ = 'SZ',
  /** Ethiopia. */
  ET = 'ET',
  /** Falkland Islands (Malvinas). */
  FK = 'FK',
  /** Faroe Islands. */
  FO = 'FO',
  /** Fiji. */
  FJ = 'FJ',
  /** Finland. */
  FI = 'FI',
  /** France. */
  FR = 'FR',
  /** French Guiana. */
  GF = 'GF',
  /** French Polynesia. */
  PF = 'PF',
  /** French Southern Territories. */
  TF = 'TF',
  /** Gabon. */
  GA = 'GA',
  /** Gambia. */
  GM = 'GM',
  /** Georgia. */
  GE = 'GE',
  /** Germany. */
  DE = 'DE',
  /** Ghana. */
  GH = 'GH',
  /** Gibraltar. */
  GI = 'GI',
  /** Greece. */
  GR = 'GR',
  /** Greenland. */
  GL = 'GL',
  /** Grenada. */
  GD = 'GD',
  /** Guadeloupe. */
  GP = 'GP',
  /** Guatemala. */
  GT = 'GT',
  /** Guernsey. */
  GG = 'GG',
  /** Guinea. */
  GN = 'GN',
  /** Guinea Bissau. */
  GW = 'GW',
  /** Guyana. */
  GY = 'GY',
  /** Haiti. */
  HT = 'HT',
  /** Heard Island And Mcdonald Islands. */
  HM = 'HM',
  /** Holy See (Vatican City State). */
  VA = 'VA',
  /** Honduras. */
  HN = 'HN',
  /** Hong Kong. */
  HK = 'HK',
  /** Hungary. */
  HU = 'HU',
  /** Iceland. */
  IS = 'IS',
  /** India. */
  IN = 'IN',
  /** Indonesia. */
  ID = 'ID',
  /** Iran, Islamic Republic Of. */
  IR = 'IR',
  /** Iraq. */
  IQ = 'IQ',
  /** Ireland. */
  IE = 'IE',
  /** Isle Of Man. */
  IM = 'IM',
  /** Israel. */
  IL = 'IL',
  /** Italy. */
  IT = 'IT',
  /** Jamaica. */
  JM = 'JM',
  /** Japan. */
  JP = 'JP',
  /** Jersey. */
  JE = 'JE',
  /** Jordan. */
  JO = 'JO',
  /** Kazakhstan. */
  KZ = 'KZ',
  /** Kenya. */
  KE = 'KE',
  /** Kiribati. */
  KI = 'KI',
  /** Korea, Democratic People's Republic Of. */
  KP = 'KP',
  /** Kosovo. */
  XK = 'XK',
  /** Kuwait. */
  KW = 'KW',
  /** Kyrgyzstan. */
  KG = 'KG',
  /** Lao People's Democratic Republic. */
  LA = 'LA',
  /** Latvia. */
  LV = 'LV',
  /** Lebanon. */
  LB = 'LB',
  /** Lesotho. */
  LS = 'LS',
  /** Liberia. */
  LR = 'LR',
  /** Libyan Arab Jamahiriya. */
  LY = 'LY',
  /** Liechtenstein. */
  LI = 'LI',
  /** Lithuania. */
  LT = 'LT',
  /** Luxembourg. */
  LU = 'LU',
  /** Macao. */
  MO = 'MO',
  /** Madagascar. */
  MG = 'MG',
  /** Malawi. */
  MW = 'MW',
  /** Malaysia. */
  MY = 'MY',
  /** Maldives. */
  MV = 'MV',
  /** Mali. */
  ML = 'ML',
  /** Malta. */
  MT = 'MT',
  /** Martinique. */
  MQ = 'MQ',
  /** Mauritania. */
  MR = 'MR',
  /** Mauritius. */
  MU = 'MU',
  /** Mayotte. */
  YT = 'YT',
  /** Mexico. */
  MX = 'MX',
  /** Moldova, Republic of. */
  MD = 'MD',
  /** Monaco. */
  MC = 'MC',
  /** Mongolia. */
  MN = 'MN',
  /** Montenegro. */
  ME = 'ME',
  /** Montserrat. */
  MS = 'MS',
  /** Morocco. */
  MA = 'MA',
  /** Mozambique. */
  MZ = 'MZ',
  /** Myanmar. */
  MM = 'MM',
  /** Namibia. */
  NA = 'NA',
  /** Nauru. */
  NR = 'NR',
  /** Nepal. */
  NP = 'NP',
  /** Netherlands. */
  NL = 'NL',
  /** Netherlands Antilles. */
  AN = 'AN',
  /** New Caledonia. */
  NC = 'NC',
  /** New Zealand. */
  NZ = 'NZ',
  /** Nicaragua. */
  NI = 'NI',
  /** Niger. */
  NE = 'NE',
  /** Nigeria. */
  NG = 'NG',
  /** Niue. */
  NU = 'NU',
  /** Norfolk Island. */
  NF = 'NF',
  /** North Macedonia. */
  MK = 'MK',
  /** Norway. */
  NO = 'NO',
  /** Oman. */
  OM = 'OM',
  /** Pakistan. */
  PK = 'PK',
  /** Palestinian Territory, Occupied. */
  PS = 'PS',
  /** Panama. */
  PA = 'PA',
  /** Papua New Guinea. */
  PG = 'PG',
  /** Paraguay. */
  PY = 'PY',
  /** Peru. */
  PE = 'PE',
  /** Philippines. */
  PH = 'PH',
  /** Pitcairn. */
  PN = 'PN',
  /** Poland. */
  PL = 'PL',
  /** Portugal. */
  PT = 'PT',
  /** Qatar. */
  QA = 'QA',
  /** Republic of Cameroon. */
  CM = 'CM',
  /** Reunion. */
  RE = 'RE',
  /** Romania. */
  RO = 'RO',
  /** Russia. */
  RU = 'RU',
  /** Rwanda. */
  RW = 'RW',
  /** Saint Barthélemy. */
  BL = 'BL',
  /** Saint Helena. */
  SH = 'SH',
  /** Saint Kitts And Nevis. */
  KN = 'KN',
  /** Saint Lucia. */
  LC = 'LC',
  /** Saint Martin. */
  MF = 'MF',
  /** Saint Pierre And Miquelon. */
  PM = 'PM',
  /** Samoa. */
  WS = 'WS',
  /** San Marino. */
  SM = 'SM',
  /** Sao Tome And Principe. */
  ST = 'ST',
  /** Saudi Arabia. */
  SA = 'SA',
  /** Senegal. */
  SN = 'SN',
  /** Serbia. */
  RS = 'RS',
  /** Seychelles. */
  SC = 'SC',
  /** Sierra Leone. */
  SL = 'SL',
  /** Singapore. */
  SG = 'SG',
  /** Sint Maarten. */
  SX = 'SX',
  /** Slovakia. */
  SK = 'SK',
  /** Slovenia. */
  SI = 'SI',
  /** Solomon Islands. */
  SB = 'SB',
  /** Somalia. */
  SO = 'SO',
  /** South Africa. */
  ZA = 'ZA',
  /** South Georgia And The South Sandwich Islands. */
  GS = 'GS',
  /** South Korea. */
  KR = 'KR',
  /** South Sudan. */
  SS = 'SS',
  /** Spain. */
  ES = 'ES',
  /** Sri Lanka. */
  LK = 'LK',
  /** St. Vincent. */
  VC = 'VC',
  /** Sudan. */
  SD = 'SD',
  /** Suriname. */
  SR = 'SR',
  /** Svalbard And Jan Mayen. */
  SJ = 'SJ',
  /** Sweden. */
  SE = 'SE',
  /** Switzerland. */
  CH = 'CH',
  /** Syria. */
  SY = 'SY',
  /** Taiwan. */
  TW = 'TW',
  /** Tajikistan. */
  TJ = 'TJ',
  /** Tanzania, United Republic Of. */
  TZ = 'TZ',
  /** Thailand. */
  TH = 'TH',
  /** Timor Leste. */
  TL = 'TL',
  /** Togo. */
  TG = 'TG',
  /** Tokelau. */
  TK = 'TK',
  /** Tonga. */
  TO = 'TO',
  /** Trinidad and Tobago. */
  TT = 'TT',
  /** Tunisia. */
  TN = 'TN',
  /** Turkey. */
  TR = 'TR',
  /** Turkmenistan. */
  TM = 'TM',
  /** Turks and Caicos Islands. */
  TC = 'TC',
  /** Tuvalu. */
  TV = 'TV',
  /** Uganda. */
  UG = 'UG',
  /** Ukraine. */
  UA = 'UA',
  /** United Arab Emirates. */
  AE = 'AE',
  /** United Kingdom. */
  GB = 'GB',
  /** United States. */
  US = 'US',
  /** United States Minor Outlying Islands. */
  UM = 'UM',
  /** Uruguay. */
  UY = 'UY',
  /** Uzbekistan. */
  UZ = 'UZ',
  /** Vanuatu. */
  VU = 'VU',
  /** Venezuela. */
  VE = 'VE',
  /** Vietnam. */
  VN = 'VN',
  /** Virgin Islands, British. */
  VG = 'VG',
  /** Wallis And Futuna. */
  WF = 'WF',
  /** Western Sahara. */
  EH = 'EH',
  /** Yemen. */
  YE = 'YE',
  /** Zambia. */
  ZM = 'ZM',
  /** Zimbabwe. */
  ZW = 'ZW'
}

/** Holds the country specific harmonized system code and the country ISO code. */
export type CountryHarmonizedSystemCode = {
   __typename?: 'CountryHarmonizedSystemCode',
  /** Country ISO code. */
  countryCode: CountryCode,
  /** Country specific harmonized system code. */
  harmonizedSystemCode: Scalars['String'],
};

export type CountryHarmonizedSystemCodeConnection = {
   __typename?: 'CountryHarmonizedSystemCodeConnection',
  /** A list of edges. */
  edges: Array<CountryHarmonizedSystemCodeEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type CountryHarmonizedSystemCodeEdge = {
   __typename?: 'CountryHarmonizedSystemCodeEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of CountryHarmonizedSystemCodeEdge. */
  node: CountryHarmonizedSystemCode,
};

/** Holds the country specific harmonized system code and the country ISO code. */
export type CountryHarmonizedSystemCodeInput = {
  /** Country specific harmonized system code. */
  harmonizedSystemCode: Scalars['String'],
  /** Country ISO code. */
  countryCode: CountryCode,
};

/** The part of the image that should remain after cropping. */
export enum CropRegion {
  /** Keep the center of the image */
  CENTER = 'CENTER',
  /** Keep the top of the image */
  TOP = 'TOP',
  /** Keep the bottom of the image */
  BOTTOM = 'BOTTOM',
  /** Keep the left of the image */
  LEFT = 'LEFT',
  /** Keep the right of the image */
  RIGHT = 'RIGHT'
}

/** Currency codes. */
export enum CurrencyCode {
  /** United States Dollars (USD). */
  USD = 'USD',
  /** Euro (EUR). */
  EUR = 'EUR',
  /** United Kingdom Pounds (GBP). */
  GBP = 'GBP',
  /** Canadian Dollars (CAD). */
  CAD = 'CAD',
  /** Afghan Afghani (AFN). */
  AFN = 'AFN',
  /** Albanian Lek (ALL). */
  ALL = 'ALL',
  /** Algerian Dinar (DZD). */
  DZD = 'DZD',
  /** Angolan Kwanza (AOA). */
  AOA = 'AOA',
  /** Argentine Pesos (ARS). */
  ARS = 'ARS',
  /** Armenian Dram (AMD). */
  AMD = 'AMD',
  /** Aruban Florin (AWG). */
  AWG = 'AWG',
  /** Australian Dollars (AUD). */
  AUD = 'AUD',
  /** Barbadian Dollar (BBD). */
  BBD = 'BBD',
  /** Azerbaijani Manat (AZN). */
  AZN = 'AZN',
  /** Bangladesh Taka (BDT). */
  BDT = 'BDT',
  /** Bahamian Dollar (BSD). */
  BSD = 'BSD',
  /** Bahraini Dinar (BHD). */
  BHD = 'BHD',
  /** Burundian Franc (BIF). */
  BIF = 'BIF',
  /** Belarusian Ruble (BYR). */
  BYR = 'BYR',
  /** Belize Dollar (BZD). */
  BZD = 'BZD',
  /** Bermudian Dollar (BMD). */
  BMD = 'BMD',
  /** Bhutanese Ngultrum (BTN). */
  BTN = 'BTN',
  /** Bosnia and Herzegovina Convertible Mark (BAM). */
  BAM = 'BAM',
  /** Brazilian Real (BRL). */
  BRL = 'BRL',
  /** Bolivian Boliviano (BOB). */
  BOB = 'BOB',
  /** Botswana Pula (BWP). */
  BWP = 'BWP',
  /** Brunei Dollar (BND). */
  BND = 'BND',
  /** Bulgarian Lev (BGN). */
  BGN = 'BGN',
  /** Burmese Kyat (MMK). */
  MMK = 'MMK',
  /** Cambodian Riel. */
  KHR = 'KHR',
  /** Cape Verdean escudo (CVE). */
  CVE = 'CVE',
  /** Cayman Dollars (KYD). */
  KYD = 'KYD',
  /** Central African CFA Franc (XAF). */
  XAF = 'XAF',
  /** Chilean Peso (CLP). */
  CLP = 'CLP',
  /** Chinese Yuan Renminbi (CNY). */
  CNY = 'CNY',
  /** Colombian Peso (COP). */
  COP = 'COP',
  /** Comorian Franc (KMF). */
  KMF = 'KMF',
  /** Congolese franc (CDF). */
  CDF = 'CDF',
  /** Costa Rican Colones (CRC). */
  CRC = 'CRC',
  /** Croatian Kuna (HRK). */
  HRK = 'HRK',
  /** Czech Koruny (CZK). */
  CZK = 'CZK',
  /** Danish Kroner (DKK). */
  DKK = 'DKK',
  /** Djiboutian Franc (DJF). */
  DJF = 'DJF',
  /** Dominican Peso (DOP). */
  DOP = 'DOP',
  /** East Caribbean Dollar (XCD). */
  XCD = 'XCD',
  /** Egyptian Pound (EGP). */
  EGP = 'EGP',
  /** Ethiopian Birr (ETB). */
  ETB = 'ETB',
  /** CFP Franc (XPF). */
  XPF = 'XPF',
  /** Fijian Dollars (FJD). */
  FJD = 'FJD',
  /** Gambian Dalasi (GMD). */
  GMD = 'GMD',
  /** Ghanaian Cedi (GHS). */
  GHS = 'GHS',
  /** Guatemalan Quetzal (GTQ). */
  GTQ = 'GTQ',
  /** Guyanese Dollar (GYD). */
  GYD = 'GYD',
  /** Georgian Lari (GEL). */
  GEL = 'GEL',
  /** Guinean Franc (GNF). */
  GNF = 'GNF',
  /** Haitian Gourde (HTG). */
  HTG = 'HTG',
  /** Honduran Lempira (HNL). */
  HNL = 'HNL',
  /** Hong Kong Dollars (HKD). */
  HKD = 'HKD',
  /** Hungarian Forint (HUF). */
  HUF = 'HUF',
  /** Icelandic Kronur (ISK). */
  ISK = 'ISK',
  /** Indian Rupees (INR). */
  INR = 'INR',
  /** Indonesian Rupiah (IDR). */
  IDR = 'IDR',
  /** Israeli New Shekel (NIS). */
  ILS = 'ILS',
  /** Iranian Rial (IRR). */
  IRR = 'IRR',
  /** Iraqi Dinar (IQD). */
  IQD = 'IQD',
  /** Jamaican Dollars (JMD). */
  JMD = 'JMD',
  /** Japanese Yen (JPY). */
  JPY = 'JPY',
  /** Jersey Pound. */
  JEP = 'JEP',
  /** Jordanian Dinar (JOD). */
  JOD = 'JOD',
  /** Kazakhstani Tenge (KZT). */
  KZT = 'KZT',
  /** Kenyan Shilling (KES). */
  KES = 'KES',
  /** Kuwaiti Dinar (KWD). */
  KWD = 'KWD',
  /** Kyrgyzstani Som (KGS). */
  KGS = 'KGS',
  /** Laotian Kip (LAK). */
  LAK = 'LAK',
  /** Latvian Lati (LVL). */
  LVL = 'LVL',
  /** Lebanese Pounds (LBP). */
  LBP = 'LBP',
  /** Lesotho Loti (LSL). */
  LSL = 'LSL',
  /** Liberian Dollar (LRD). */
  LRD = 'LRD',
  /** Libyan Dinar (LYD). */
  LYD = 'LYD',
  /** Lithuanian Litai (LTL). */
  LTL = 'LTL',
  /** Malagasy Ariary (MGA). */
  MGA = 'MGA',
  /** Macedonia Denar (MKD). */
  MKD = 'MKD',
  /** Macanese Pataca (MOP). */
  MOP = 'MOP',
  /** Malawian Kwacha (MWK). */
  MWK = 'MWK',
  /** Maldivian Rufiyaa (MVR). */
  MVR = 'MVR',
  /** Mexican Pesos (MXN). */
  MXN = 'MXN',
  /** Malaysian Ringgits (MYR). */
  MYR = 'MYR',
  /** Mauritian Rupee (MUR). */
  MUR = 'MUR',
  /** Moldovan Leu (MDL). */
  MDL = 'MDL',
  /** Moroccan Dirham. */
  MAD = 'MAD',
  /** Mongolian Tugrik. */
  MNT = 'MNT',
  /** Mozambican Metical. */
  MZN = 'MZN',
  /** Namibian Dollar. */
  NAD = 'NAD',
  /** Nepalese Rupee (NPR). */
  NPR = 'NPR',
  /** Netherlands Antillean Guilder. */
  ANG = 'ANG',
  /** New Zealand Dollars (NZD). */
  NZD = 'NZD',
  /** Nicaraguan Córdoba (NIO). */
  NIO = 'NIO',
  /** Nigerian Naira (NGN). */
  NGN = 'NGN',
  /** Norwegian Kroner (NOK). */
  NOK = 'NOK',
  /** Omani Rial (OMR). */
  OMR = 'OMR',
  /** Panamian Balboa (PAB). */
  PAB = 'PAB',
  /** Pakistani Rupee (PKR). */
  PKR = 'PKR',
  /** Papua New Guinean Kina (PGK). */
  PGK = 'PGK',
  /** Paraguayan Guarani (PYG). */
  PYG = 'PYG',
  /** Peruvian Nuevo Sol (PEN). */
  PEN = 'PEN',
  /** Philippine Peso (PHP). */
  PHP = 'PHP',
  /** Polish Zlotych (PLN). */
  PLN = 'PLN',
  /** Qatari Rial (QAR). */
  QAR = 'QAR',
  /** Romanian Lei (RON). */
  RON = 'RON',
  /** Russian Rubles (RUB). */
  RUB = 'RUB',
  /** Rwandan Franc (RWF). */
  RWF = 'RWF',
  /** Samoan Tala (WST). */
  WST = 'WST',
  /** Saudi Riyal (SAR). */
  SAR = 'SAR',
  /** Sao Tome And Principe Dobra (STD). */
  STD = 'STD',
  /** Serbian dinar (RSD). */
  RSD = 'RSD',
  /** Seychellois Rupee (SCR). */
  SCR = 'SCR',
  /** Sierra Leonean Leone (SLL). */
  SLL = 'SLL',
  /** Singapore Dollars (SGD). */
  SGD = 'SGD',
  /** Sudanese Pound (SDG). */
  SDG = 'SDG',
  /** Syrian Pound (SYP). */
  SYP = 'SYP',
  /** South African Rand (ZAR). */
  ZAR = 'ZAR',
  /** South Korean Won (KRW). */
  KRW = 'KRW',
  /** South Sudanese Pound (SSP). */
  SSP = 'SSP',
  /** Solomon Islands Dollar (SBD). */
  SBD = 'SBD',
  /** Sri Lankan Rupees (LKR). */
  LKR = 'LKR',
  /** Surinamese Dollar (SRD). */
  SRD = 'SRD',
  /** Swazi Lilangeni (SZL). */
  SZL = 'SZL',
  /** Swedish Kronor (SEK). */
  SEK = 'SEK',
  /** Swiss Francs (CHF). */
  CHF = 'CHF',
  /** Taiwan Dollars (TWD). */
  TWD = 'TWD',
  /** Thai baht (THB). */
  THB = 'THB',
  /** Tajikistani Somoni (TJS). */
  TJS = 'TJS',
  /** Tanzanian Shilling (TZS). */
  TZS = 'TZS',
  /** Tongan Pa'anga (TOP). */
  TOP = 'TOP',
  /** Trinidad and Tobago Dollars (TTD). */
  TTD = 'TTD',
  /** Tunisian Dinar (TND). */
  TND = 'TND',
  /** Turkish Lira (TRY). */
  TRY = 'TRY',
  /** Turkmenistani Manat (TMT). */
  TMT = 'TMT',
  /** Ugandan Shilling (UGX). */
  UGX = 'UGX',
  /** Ukrainian Hryvnia (UAH). */
  UAH = 'UAH',
  /** United Arab Emirates Dirham (AED). */
  AED = 'AED',
  /** Uruguayan Pesos (UYU). */
  UYU = 'UYU',
  /** Uzbekistan som (UZS). */
  UZS = 'UZS',
  /** Vanuatu Vatu (VUV). */
  VUV = 'VUV',
  /** Venezuelan Bolivares (VEF). */
  VEF = 'VEF',
  /** Vietnamese đồng (VND). */
  VND = 'VND',
  /** West African CFA franc (XOF). */
  XOF = 'XOF',
  /** Yemeni Rial (YER). */
  YER = 'YER',
  /** Zambian Kwacha (ZMW). */
  ZMW = 'ZMW'
}

/** Currency formats. */
export type CurrencyFormats = {
   __typename?: 'CurrencyFormats',
  /** HTML without currency. */
  moneyFormat: Scalars['FormattedString'],
  /** Email without currency. */
  moneyInEmailsFormat: Scalars['String'],
  /** HTML with currency. */
  moneyWithCurrencyFormat: Scalars['FormattedString'],
  /** Email with currency. */
  moneyWithCurrencyInEmailsFormat: Scalars['String'],
};

/** Represents a currency setting. */
export type CurrencySetting = {
   __typename?: 'CurrencySetting',
  /** The currency's ISO code. */
  currencyCode: CurrencyCode,
  /** The full name of the currency. */
  currencyName: Scalars['String'],
  /** Flag describing whether the currency is enabled. */
  enabled: Scalars['Boolean'],
  /** Date and time when the exchange rate for the currency was last modified. */
  rateUpdatedAt?: Maybe<Scalars['DateTime']>,
};

export type CurrencySettingConnection = {
   __typename?: 'CurrencySettingConnection',
  /** A list of edges. */
  edges: Array<CurrencySettingEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type CurrencySettingEdge = {
   __typename?: 'CurrencySettingEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of CurrencySettingEdge. */
  node: CurrencySetting,
};

/** 
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type Customer = Node & CommentEventSubject & HasMetafields & LegacyInteroperability & HasEvents & {
   __typename?: 'Customer',
  /** Whether the customer has agreed to receive marketing materials. */
  acceptsMarketing: Scalars['Boolean'],
  /** The date and time when the customer consented or objected to receiving marketing material by email. */
  acceptsMarketingUpdatedAt: Scalars['DateTime'],
  /** A list of addresses associated with the customer. */
  addresses: Array<MailingAddress>,
  /** The average amount that the customer spent per order. */
  averageOrderAmount?: Maybe<Scalars['Money']>,
  /** The average amount that the customer spent per order. */
  averageOrderAmountV2?: Maybe<MoneyV2>,
  /** 
 * Whether the merchant can delete the customer from their store.
   * 
   * A customer can be deleted from a store only if they have not yet made an order. After a customer makes an
   * order, they can't be deleted from a store.
 */
  canDelete: Scalars['Boolean'],
  /** The date and time when the customer was added to the store. */
  createdAt: Scalars['DateTime'],
  /** The default address associated with the customer. */
  defaultAddress?: Maybe<MailingAddress>,
  /** 
 * The full name of the customer, based on the values for first_name and last_name. If the first_name and
   * last_name are not available, then this falls back to the customer's email
   * address, and if that is not available, the customer's phone number.
 */
  displayName: Scalars['String'],
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>,
  /** A list of events associated with the customer. */
  events: EventConnection,
  /** The customer's first name. */
  firstName?: Maybe<Scalars['String']>,
  /** Whether the customer has a note associated with them. */
  hasNote: Scalars['Boolean'],
  /** Whether the merchant has added timeline comments about the customer on the customer's page. */
  hasTimelineComment: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The image associated with the customer. */
  image: Image,
  /** The customer's last name. */
  lastName?: Maybe<Scalars['String']>,
  /** The customer's last order. */
  lastOrder?: Maybe<Order>,
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** 
 * The amount of time since the customer was first added to the store.
   * 
   * Example: 'about 12 years'.
 */
  lifetimeDuration: Scalars['String'],
  /** 
 * The marketing subscription opt-in level (as described by the M3AAWG best practices guideline) that the
   * customer gave when they consented to receive marketing material by email.
   * 
   * If the customer does not accept email marketing, then this property will be null.
 */
  marketingOptInLevel?: Maybe<CustomerMarketingOptInLevel>,
  /** The metafield associated with the resource. */
  metafield?: Maybe<Metafield>,
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection,
  /** A note about the customer. */
  note?: Maybe<Scalars['String']>,
  /** A list of the customer's orders. */
  orders: OrderConnection,
  /** The number of orders that the customer has made at the store in their lifetime. */
  ordersCount: Scalars['UnsignedInt64'],
  /** The customer's phone number. */
  phone?: Maybe<Scalars['String']>,
  /** Returns a private metafield found by namespace and key. */
  privateMetafield?: Maybe<PrivateMetafield>,
  /** List of private metafields. */
  privateMetafields: PrivateMetafieldConnection,
  /** The state of the customer's account with the shop. */
  state: CustomerState,
  /** A list of tags assigned to the customer. */
  tags: Array<Scalars['String']>,
  /** Whether the customer is exempt from being charged taxes on their orders. */
  taxExempt: Scalars['Boolean'],
  /** The list of tax exemptions applied to the customer. */
  taxExemptions: Array<TaxExemption>,
  /** The total amount that the customer has spent on orders in their lifetime. */
  totalSpent: Scalars['Money'],
  /** The total amount that the customer has spent on orders in their lifetime. */
  totalSpentV2: MoneyV2,
  /** The date and time when the customer was last updated. */
  updatedAt: Scalars['DateTime'],
  /** 
 * Whether the email address is formatted correctly. This does not
   * guarantee that the email address actually exists.
 */
  validEmailAddress: Scalars['Boolean'],
  /** Whether the customer has verified their email address. */
  verifiedEmail: Scalars['Boolean'],
};


/** 
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomeraddressesArgs = {
  first?: Maybe<Scalars['Int']>
};


/** 
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomereventsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<EventSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** 
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomerimageArgs = {
  size?: Maybe<Scalars['Int']>
};


/** 
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomermetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** 
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomermetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomerordersArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<OrderSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** 
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomerprivateMetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** 
 * Represents information about a customer of the shop, such as the customer's contact details, their order
 * history, and whether they've agreed to receive email marketing.
 */
export type CustomerprivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** Return type for `customerAddTaxExemptions` mutation. */
export type CustomerAddTaxExemptionsPayload = {
   __typename?: 'CustomerAddTaxExemptionsPayload',
  /** The updated customer. */
  customer?: Maybe<Customer>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type CustomerConnection = {
   __typename?: 'CustomerConnection',
  /** A list of edges. */
  edges: Array<CustomerEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `customerCreate` mutation. */
export type CustomerCreatePayload = {
   __typename?: 'CustomerCreatePayload',
  /** The created customer. */
  customer?: Maybe<Customer>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Specifies the customer to delete. */
export type CustomerDeleteInput = {
  /** The ID of the customer to delete. */
  id: Scalars['ID'],
};

/** Return type for `customerDelete` mutation. */
export type CustomerDeletePayload = {
   __typename?: 'CustomerDeletePayload',
  /** ID of the deleted customer. */
  deletedCustomerId?: Maybe<Scalars['ID']>,
  /** Shop of the deleted customer. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type CustomerEdge = {
   __typename?: 'CustomerEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of CustomerEdge. */
  node: Customer,
};

/** Provides the fields and values to use when creating or updating a customer. */
export type CustomerInput = {
  /** Whether the customer has consented to receive marketing material via email. */
  acceptsMarketing?: Maybe<Scalars['Boolean']>,
  /** 
 * The date and time when the customer consented or objected to receiving marketing material by email. Set
   * whenever the customer consents or objects to marketing material.
 */
  acceptsMarketingUpdatedAt?: Maybe<Scalars['DateTime']>,
  /** An input that specifies addresses for a customer. */
  addresses?: Maybe<Array<MailingAddressInput>>,
  /** The unique email address of the customer. */
  email?: Maybe<Scalars['String']>,
  /** The customer's first name. */
  firstName?: Maybe<Scalars['String']>,
  /** Specifies the customer to update, or creates a new customer if one doesn't exist. */
  id?: Maybe<Scalars['ID']>,
  /** The customer's last name. */
  lastName?: Maybe<Scalars['String']>,
  /** 
 * The marketing subscription opt-in level (as described by the M3AAWG best practices guideline) that was
   * enabled when the customer consented to receiving marketing material by email.
 */
  marketingOptInLevel?: Maybe<CustomerMarketingOptInLevel>,
  /** Attaches additional metadata to the customer. */
  metafields?: Maybe<Array<MetafieldInput>>,
  /** A note about the customer. */
  note?: Maybe<Scalars['String']>,
  /** The unique phone number for the customer. */
  phone?: Maybe<Scalars['String']>,
  /** The private metafields to associated with this product. */
  privateMetafields?: Maybe<Array<PrivateMetafieldInput>>,
  /** Tags that the shop owner has attached to the customer. */
  tags?: Maybe<Array<Scalars['String']>>,
  /** Whether the customer is exempt from paying taxes on their order. */
  taxExempt?: Maybe<Scalars['Boolean']>,
  /** The list of tax exemptions to apply to the customer. */
  taxExemptions?: Maybe<Array<TaxExemption>>,
};

/** Represents a customer's activity on a shop's online store. */
export type CustomerJourney = {
   __typename?: 'CustomerJourney',
  /** The position of the current order within the customer's order history. */
  customerOrderIndex: Scalars['Int'],
  /** 
 * The amount of days between first session and order creation date. First
   * session represents first session since the last order, or first session within
   * the 30 day attribution window, if more than 30 days has passed since the last order.
 */
  daysToConversion: Scalars['Int'],
  /** The customer's first session going into the shop. */
  firstVisit: CustomerVisit,
  /** The last session before an order is made. */
  lastVisit?: Maybe<CustomerVisit>,
  /** Events preceding a customer order, such as shop sessions. */
  moments: Array<CustomerMoment>,
};

/** 
 * The valid values for the marketing subscription opt-in active at the time the customer consented to email
 * marketing.
 * 
 * The levels are defined by [the M3AAWG best practices guideline
 *   document](https://www.m3aawg.org/sites/maawg/files/news/M3AAWG_Senders_BCP_Ver3-2015-02.pdf).
 */
export enum CustomerMarketingOptInLevel {
  /** 
 * The customer started receiving marketing email(s) after providing their email address, without any
   * intermediate steps.
 */
  SINGLE_OPT_IN = 'SINGLE_OPT_IN',
  /** 
 * After providing their email address, the customer received a confirmation email which required them to
   * perform a prescribed action before receiving marketing emails.
 */
  CONFIRMED_OPT_IN = 'CONFIRMED_OPT_IN',
  /** The customer receives marketing emails, but the original opt-in process is unknown. */
  UNKNOWN = 'UNKNOWN'
}

/** Represents events preceding a customer order, such as shop sessions. */
export type CustomerMoment = {
  /** When the customer moment occurred. */
  occurredAt: Scalars['DateTime'],
};

/** Return type for `customerRemoveTaxExemptions` mutation. */
export type CustomerRemoveTaxExemptionsPayload = {
   __typename?: 'CustomerRemoveTaxExemptionsPayload',
  /** The updated customer. */
  customer?: Maybe<Customer>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `customerReplaceTaxExemptions` mutation. */
export type CustomerReplaceTaxExemptionsPayload = {
   __typename?: 'CustomerReplaceTaxExemptionsPayload',
  /** The updated customer. */
  customer?: Maybe<Customer>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** The set of valid sort keys for the customerSavedSearches query. */
export enum CustomerSavedSearchSortKeys {
  /** Sort by the `name` value. */
  NAME = 'NAME',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** The set of valid sort keys for the customers query. */
export enum CustomerSortKeys {
  /** Sort by the `name` value. */
  NAME = 'NAME',
  /** Sort by the `location` value. */
  LOCATION = 'LOCATION',
  /** Sort by the `orders_count` value. */
  ORDERS_COUNT = 'ORDERS_COUNT',
  /** Sort by the `last_order_date` value. */
  LAST_ORDER_DATE = 'LAST_ORDER_DATE',
  /** Sort by the `total_spent` value. */
  TOTAL_SPENT = 'TOTAL_SPENT',
  /** Sort by the `updated_at` value. */
  UPDATED_AT = 'UPDATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** The valid values for the state of a customer's account with a shop. */
export enum CustomerState {
  /** The customer declined the email invite to create an account. */
  DECLINED = 'DECLINED',
  /** The customer doesn't have an active account. Customer accounts can be disabled from the Shopify admin at any time. */
  DISABLED = 'DISABLED',
  /** The customer has created an account. */
  ENABLED = 'ENABLED',
  /** The customer has received an email invite to create an account. */
  INVITED = 'INVITED'
}

/** Return type for `customerUpdateDefaultAddress` mutation. */
export type CustomerUpdateDefaultAddressPayload = {
   __typename?: 'CustomerUpdateDefaultAddressPayload',
  /** The customer whose address was updated. */
  customer?: Maybe<Customer>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `customerUpdate` mutation. */
export type CustomerUpdatePayload = {
   __typename?: 'CustomerUpdatePayload',
  /** The updated customer. */
  customer?: Maybe<Customer>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Information about a customer's session on a shop's online store. */
export type CustomerVisit = CustomerMoment & Node & {
   __typename?: 'CustomerVisit',
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** URL of the first page the customer landed on for the session. */
  landingPage?: Maybe<Scalars['URL']>,
  /** 
 * Landing page information with URL linked in HTML. For example, the first page
   * the customer visited was store.myshopify.com/products/1.
 */
  landingPageHtml?: Maybe<Scalars['HTML']>,
  /** 
 * Represent actions taken by an app, on behalf of a merchant,
   * to market Shopify resources such as products, collections, and discounts.
 */
  marketingEvent?: Maybe<MarketingEvent>,
  /** When the customer moment occurred. */
  occurredAt: Scalars['DateTime'],
  /** 
 * Marketing referral code from the link that the customer clicked to visit the store.
   * Supports the following URL attributes: _ref_, _source_, or _r_.
   * For example, if the URL is myshopifystore.com/products/slide?ref=j2tj1tn2, then this value is j2tj1tn2.
 */
  referralCode?: Maybe<Scalars['String']>,
  /** Referral information with URLs linked in HTML. */
  referralInfoHtml: Scalars['FormattedString'],
  /** 
 * Webpage where the customer clicked a link that sent them to the online store.
   * For example, _https://randomblog.com/page1_ or _android-app://com.google.android.gm_.
 */
  referrerUrl?: Maybe<Scalars['URL']>,
  /** 
 * Source from which the customer visited the store, such as a platform (Facebook, Google), email, direct,
   * a website domain, QR code, or unknown.
 */
  source: Scalars['String'],
  /** Describes the source explicitly for first or last session. */
  sourceDescription?: Maybe<Scalars['String']>,
  /** Type of marketing tactic. */
  sourceType?: Maybe<MarketingTactic>,
  /** A set of UTM parameters gathered from the URL parameters of the referrer. */
  utmParameters?: Maybe<UTMParameters>,
};

/** The input fields used to create a custom fulfillment service. */
export type CustomFulfillmentServiceCreateInput = {
  /** The name of the fulfillment service. */
  name: Scalars['String'],
  /** 
 * The address to which an email is sent when the custom fulfillment service
   * receives a fulfill request.
 */
  email: Scalars['String'],
};



/** Days of the week from Monday to Sunday. */
export enum DayOfTheWeek {
  /** Monday. */
  MONDAY = 'MONDAY',
  /** Tuesday. */
  TUESDAY = 'TUESDAY',
  /** Wednesday. */
  WEDNESDAY = 'WEDNESDAY',
  /** Thursday. */
  THURSDAY = 'THURSDAY',
  /** Friday. */
  FRIDAY = 'FRIDAY',
  /** Saturday. */
  SATURDAY = 'SATURDAY',
  /** Sunday. */
  SUNDAY = 'SUNDAY'
}


/** 
 * Deletion events chronicle the destruction of resources (e.g. products and collections).
 * Once deleted, the deletion event is the only trace of the original's existence,
 * as the resource itself has been removed and can no longer be accessed.
 */
export type DeletionEvent = {
   __typename?: 'DeletionEvent',
  /** The date and time when the deletion event for the related resource was generated. */
  occurredAt: Scalars['DateTime'],
  /** The id of the resource that was deleted. */
  subjectId: Scalars['ID'],
  /** The type of resource that was deleted. */
  subjectType: DeletionEventSubjectType,
};

export type DeletionEventConnection = {
   __typename?: 'DeletionEventConnection',
  /** A list of edges. */
  edges: Array<DeletionEventEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type DeletionEventEdge = {
   __typename?: 'DeletionEventEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of DeletionEventEdge. */
  node: DeletionEvent,
};

/** The set of valid sort keys for the deletionEvents query. */
export enum DeletionEventSortKeys {
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** The supported subject types of deletion events. */
export enum DeletionEventSubjectType {
  COLLECTION = 'COLLECTION',
  PRODUCT = 'PRODUCT'
}

/** The service and the countries they are available for. */
export type DeliveryAvailableService = {
   __typename?: 'DeliveryAvailableService',
  /** The countries the service provider ships to. */
  countries: DeliveryCountryCodesOrRestOfWorld,
  /** The name of the service. */
  name: Scalars['String'],
};

/** Information about a carrier or service provider. */
export type DeliveryCarrierService = Node & {
   __typename?: 'DeliveryCarrierService',
  /** Services offered for given destinations. */
  availableServicesForCountries: Array<DeliveryAvailableService>,
  /** The properly formatted name of the service provider, ready to display. */
  formattedName?: Maybe<Scalars['String']>,
  /** The logo of the service provider. */
  icon: Image,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The name of the service provider. */
  name?: Maybe<Scalars['String']>,
};


/** Information about a carrier or service provider. */
export type DeliveryCarrierServiceavailableServicesForCountriesArgs = {
  origins?: Maybe<Array<Scalars['ID']>>,
  countryCodes?: Maybe<Array<CountryCode>>,
  restOfWorld: Scalars['Boolean']
};

/** A carrier services and their set of shop locations that can be used. */
export type DeliveryCarrierServiceAndLocations = {
   __typename?: 'DeliveryCarrierServiceAndLocations',
  /** The carrier service. */
  carrierService: DeliveryCarrierService,
  /** The locations that support this carrier service. */
  locations: Array<Location>,
};

export type DeliveryCarrierServiceEdge = {
   __typename?: 'DeliveryCarrierServiceEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of DeliveryCarrierServiceEdge. */
  node: DeliveryCarrierService,
};

/** A condition that must pass for a method definition to be applied to an order. */
export type DeliveryCondition = Node & {
   __typename?: 'DeliveryCondition',
  /** The criteria (weight or price) that the field must meet based on the operator. */
  conditionCriteria: DeliveryConditionCriteria,
  /** The field to compare the criteria unit against, using the operator. */
  field: DeliveryConditionField,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The operator to compare the field and criteria. */
  operator: DeliveryConditionOperator,
};

/** The criteria (weight or price) that the field must meet based on the operator. */
export type DeliveryConditionCriteria = Weight | MoneyV2;

/** The field type that the condition will be applied to. */
export enum DeliveryConditionField {
  /** Condition will check against the total weight of the order. */
  TOTAL_WEIGHT = 'TOTAL_WEIGHT',
  /** Condition will check against the total price of the order. */
  TOTAL_PRICE = 'TOTAL_PRICE'
}

/** The operator to use to determine if the condition passes. */
export enum DeliveryConditionOperator {
  /** The condition will check if the field is greater than or equal to the criteria. */
  GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO',
  /** The condition will check if the field is less than or equal to the criteria. */
  LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO'
}

/** A country that is used to define a zone. */
export type DeliveryCountry = Node & {
   __typename?: 'DeliveryCountry',
  /** The ISO 3166-1 alpha-2 country code of this country and a flag indicating Rest Of World. */
  code: DeliveryCountryCodeOrRestOfWorld,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The name of the country. */
  name: Scalars['String'],
  /** The regions associated with this country. */
  provinces: Array<DeliveryProvince>,
};

/** A country with the name of the zone. */
export type DeliveryCountryAndZone = {
   __typename?: 'DeliveryCountryAndZone',
  /** The country in the delivery zone. */
  country: DeliveryCountry,
  /** The name of the delivery zone. */
  zone: Scalars['String'],
};

/** The ISO 3166-1 alpha-2 country code and a flag indicating Rest Of World. */
export type DeliveryCountryCodeOrRestOfWorld = {
   __typename?: 'DeliveryCountryCodeOrRestOfWorld',
  /** The country code. */
  countryCode?: Maybe<CountryCode>,
  /** Indicates if 'Rest of World' is applied. */
  restOfWorld: Scalars['Boolean'],
};

/** A list of ISO 3166-1 alpha-2 country codes or the 'Rest of World'. */
export type DeliveryCountryCodesOrRestOfWorld = {
   __typename?: 'DeliveryCountryCodesOrRestOfWorld',
  /** List of applicable country codes. */
  countryCodes: Array<CountryCode>,
  /** Indicates if 'Rest of World' is applied. */
  restOfWorld: Scalars['Boolean'],
};

/** Input fields to specify a country. */
export type DeliveryCountryInput = {
  /** The country code of the country. */
  code?: Maybe<CountryCode>,
  /** Use Rest of World as the country. */
  restOfWorld?: Maybe<Scalars['Boolean']>,
  /** The regions associated with this country. */
  provinces?: Maybe<Array<DeliveryProvinceInput>>,
  /** Associate all available provinces with this country. */
  includeAllProvinces?: Maybe<Scalars['Boolean']>,
};

/** 
 * Whether the shop is blocked from converting to full multi-location delivery
 * profiles mode. If the shop is blocked, then the blocking reasons are also returned.
 */
export type DeliveryLegacyModeBlocked = {
   __typename?: 'DeliveryLegacyModeBlocked',
  /** Whether the shop can convert to full multi-location delivery profiles mode. */
  blocked: Scalars['Boolean'],
  /** The reasons why the shop is blocked from converting to full multi-location delivery profiles mode. */
  reasons?: Maybe<Array<DeliveryLegacyModeBlockedReason>>,
};

/** Reasons the shop is blocked from converting to full multi-location delivery profiles mode. */
export enum DeliveryLegacyModeBlockedReason {
  /** Multi-Location is disabled. */
  MULTI_LOCATION_DISABLED = 'MULTI_LOCATION_DISABLED',
  /** No locations that can fulfill online orders. */
  NO_LOCATIONS_FULFILLING_ONLINE_ORDERS = 'NO_LOCATIONS_FULFILLING_ONLINE_ORDERS'
}

/** A location group is a collection of active locations that share zone and delivery methods across delivery profiles. */
export type DeliveryLocationGroup = Node & {
   __typename?: 'DeliveryLocationGroup',
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** List of active locations that are part of this location group. */
  locations: LocationConnection,
};


/** A location group is a collection of active locations that share zone and delivery methods across delivery profiles. */
export type DeliveryLocationGrouplocationsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<LocationSortKeys>,
  query?: Maybe<Scalars['String']>,
  includeLegacy?: Maybe<Scalars['Boolean']>,
  includeInactive?: Maybe<Scalars['Boolean']>
};

/** Links a location group and zone with the associated method definitions in a delivery profile. */
export type DeliveryLocationGroupZone = {
   __typename?: 'DeliveryLocationGroupZone',
  /** The method definitions associated to a zone and location group in a delivery profile. */
  methodDefinitions: DeliveryMethodDefinitionConnection,
  /** The zone associated to a location group in a delivery profile. */
  zone: DeliveryZone,
};


/** Links a location group and zone with the associated method definitions in a delivery profile. */
export type DeliveryLocationGroupZonemethodDefinitionsArgs = {
  eligible?: Maybe<Scalars['Boolean']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<MethodDefinitionSortKeys>
};

export type DeliveryLocationGroupZoneConnection = {
   __typename?: 'DeliveryLocationGroupZoneConnection',
  /** A list of edges. */
  edges: Array<DeliveryLocationGroupZoneEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type DeliveryLocationGroupZoneEdge = {
   __typename?: 'DeliveryLocationGroupZoneEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of DeliveryLocationGroupZoneEdge. */
  node: DeliveryLocationGroupZone,
};

/** Input fields for a delivery zone associated to a location group and profile. */
export type DeliveryLocationGroupZoneInput = {
  /** Globally unique identifier of the Zone. */
  id?: Maybe<Scalars['ID']>,
  /** The name of the zone. */
  name?: Maybe<Scalars['String']>,
  /** Countries to associate with the zone. */
  countries?: Maybe<Array<DeliveryCountryInput>>,
  /** Method definitions to create. */
  methodDefinitionsToCreate?: Maybe<Array<DeliveryMethodDefinitionInput>>,
  /** Method definitions to update. */
  methodDefinitionsToUpdate?: Maybe<Array<DeliveryMethodDefinitionInput>>,
};

/** A method definition describes the delivery rate and the conditions that must be met for the method to be applied. */
export type DeliveryMethodDefinition = Node & {
   __typename?: 'DeliveryMethodDefinition',
  /** Whether this method definition is active. */
  active: Scalars['Boolean'],
  /** The description of the method definition. */
  description?: Maybe<Scalars['String']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The method conditions that must pass for this method definition to be applied to an order. */
  methodConditions: Array<DeliveryCondition>,
  /** The name of the method definition. */
  name: Scalars['String'],
  /** Provided rate for this method definition, from a rate definition or participant. */
  rateProvider: DeliveryRateProvider,
};

export type DeliveryMethodDefinitionConnection = {
   __typename?: 'DeliveryMethodDefinitionConnection',
  /** A list of edges. */
  edges: Array<DeliveryMethodDefinitionEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type DeliveryMethodDefinitionEdge = {
   __typename?: 'DeliveryMethodDefinitionEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of DeliveryMethodDefinitionEdge. */
  node: DeliveryMethodDefinition,
};

/** Input fields for a method definition. */
export type DeliveryMethodDefinitionInput = {
  /** Globally unique identifier of the method definition. Use only when updating a method definiton. */
  id?: Maybe<Scalars['ID']>,
  /** The name of the method definition. */
  name?: Maybe<Scalars['String']>,
  /** The description of the method definition. */
  description?: Maybe<Scalars['String']>,
  /** Whether or not to use this method definition during rate calculation. */
  active?: Maybe<Scalars['Boolean']>,
  /** A rate definition to apply to the method definition. */
  rateDefinition?: Maybe<DeliveryRateDefinitionInput>,
  /** A participant to apply to the method definition. */
  participant?: Maybe<DeliveryParticipantInput>,
  /** Weight conditions on the method definition. */
  weightConditionsToCreate?: Maybe<Array<DeliveryWeightConditionInput>>,
  /** Price conditions on the method definition. */
  priceConditionsToCreate?: Maybe<Array<DeliveryPriceConditionInput>>,
  /** Conditions on the method definition to update. */
  conditionsToUpdate?: Maybe<Array<DeliveryUpdateConditionInput>>,
};

/** A carrier-defined rate with possible merchant-defined fixed fee or percentage-of-rate fee. */
export type DeliveryParticipant = Node & {
   __typename?: 'DeliveryParticipant',
  /** Flag to indicate if new available services should be included. */
  adaptToNewServicesFlag: Scalars['Boolean'],
  /** Use this carrier service for this participant. */
  carrierService: DeliveryCarrierService,
  /** The merchant-set fixed fee for this participant. */
  fixedFee?: Maybe<MoneyV2>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Services offered by the participant and their active status. */
  participantServices: Array<DeliveryParticipantService>,
  /** The merchant-set percentage-of-rate fee for this participant. */
  percentageOfRateFee: Scalars['Float'],
};

/** Input fields for a participant. */
export type DeliveryParticipantInput = {
  /** Globally unique identifier of the participant. */
  id?: Maybe<Scalars['ID']>,
  /** Global identifier of the carrier service. */
  carrierServiceId?: Maybe<Scalars['ID']>,
  /** The merchant-set fixed fee for this participant. */
  fixedFee?: Maybe<MoneyInput>,
  /** The merchant-set percentage-of-rate fee for this participant. */
  percentageOfRateFee?: Maybe<Scalars['Float']>,
  /** Services offered by the participant and their active status. */
  participantServices?: Maybe<Array<DeliveryParticipantServiceInput>>,
  /** Flag to indicate if new available services should be included. */
  adaptToNewServices?: Maybe<Scalars['Boolean']>,
};

/** A service provided by a participant. */
export type DeliveryParticipantService = {
   __typename?: 'DeliveryParticipantService',
  /** If the service is active or not. */
  active: Scalars['Boolean'],
  /** Name of the service. */
  name: Scalars['String'],
};

/** Input fields for a service provided by a participant. */
export type DeliveryParticipantServiceInput = {
  /** Name of the service. */
  name: Scalars['String'],
  /** If the service is active or not. */
  active: Scalars['Boolean'],
};

/** Input fields for the price-based conditions of a method definition. */
export type DeliveryPriceConditionInput = {
  /** The criteria for the price. */
  criteria?: Maybe<MoneyInput>,
  /** The operator to use for comparison. */
  operator?: Maybe<DeliveryConditionOperator>,
};

/** A profile for multi-location, per-product delivery. */
export type DeliveryProfile = Node & {
   __typename?: 'DeliveryProfile',
  /** The number of active shipping rates for the profile. */
  activeMethodDefinitionsCount: Scalars['Int'],
  /** Whether this is the default profile. */
  default: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Whether this shop has enabled legacy compatibility mode for delivery profiles. */
  legacyMode: Scalars['Boolean'],
  /** The number of locations without rates defined. */
  locationsWithoutRatesCount: Scalars['Int'],
  /** The name of the delivery profile. */
  name: Scalars['String'],
  /** The number of active origin locations for the profile. */
  originLocationCount: Scalars['Int'],
  /** The number of product variants for this profile. The count for the default profile is not supported and will return -1. */
  productVariantsCount: Scalars['Int'],
  /** The products and variants associated with this profile. */
  profileItems: DeliveryProfileItemConnection,
  /** The location groups and associated zones using this profile. */
  profileLocationGroups: Array<DeliveryProfileLocationGroup>,
  /** List of locations that have not been assigned to a location group for this profile. */
  unassignedLocations: Array<Location>,
  /** The number of countries with active rates to deliver to. */
  zoneCountryCount: Scalars['Int'],
};


/** A profile for multi-location, per-product delivery. */
export type DeliveryProfileprofileItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<ProfileItemSortKeys>
};

export type DeliveryProfileConnection = {
   __typename?: 'DeliveryProfileConnection',
  /** A list of edges. */
  edges: Array<DeliveryProfileEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `deliveryProfileCreate` mutation. */
export type deliveryProfileCreatePayload = {
   __typename?: 'deliveryProfileCreatePayload',
  /** The delivery profile that was created. */
  profile?: Maybe<DeliveryProfile>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type DeliveryProfileEdge = {
   __typename?: 'DeliveryProfileEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of DeliveryProfileEdge. */
  node: DeliveryProfile,
};

/** Input fields for a delivery profile. */
export type DeliveryProfileInput = {
  /** The name of the profile. */
  name?: Maybe<Scalars['String']>,
  /** The location groups associated with the profile. */
  profileLocationGroups?: Maybe<Array<DeliveryProfileLocationGroupInput>>,
  /** The location groups to be created in the profile. */
  locationGroupsToCreate?: Maybe<Array<DeliveryProfileLocationGroupInput>>,
  /** The location groups to be updated in the profile. */
  locationGroupsToUpdate?: Maybe<Array<DeliveryProfileLocationGroupInput>>,
  /** The location groups to be deleted in the profile. */
  locationGroupsToDelete?: Maybe<Array<Scalars['ID']>>,
  /** The product variant ids to be associated with this profile. */
  variantsToAssociate?: Maybe<Array<Scalars['ID']>>,
  /** The product variant ids to be dissociated from this profile and returned to the default profile. */
  variantsToDissociate?: Maybe<Array<Scalars['ID']>>,
  /** Zones to delete. */
  zonesToDelete?: Maybe<Array<Scalars['ID']>>,
  /** Method definitions to delete. */
  methodDefinitionsToDelete?: Maybe<Array<Scalars['ID']>>,
  /** Conditions to delete. */
  conditionsToDelete?: Maybe<Array<Scalars['ID']>>,
};

/** A product and the subset of associated variants that are part of this delivery profile. */
export type DeliveryProfileItem = {
   __typename?: 'DeliveryProfileItem',
  /** A product associated with this profile. */
  product: Product,
  /** The product variants associated with this delivery profile. */
  variants: ProductVariantConnection,
};


/** A product and the subset of associated variants that are part of this delivery profile. */
export type DeliveryProfileItemvariantsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<ProductVariantSortKeys>
};

export type DeliveryProfileItemConnection = {
   __typename?: 'DeliveryProfileItemConnection',
  /** A list of edges. */
  edges: Array<DeliveryProfileItemEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type DeliveryProfileItemEdge = {
   __typename?: 'DeliveryProfileItemEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of DeliveryProfileItemEdge. */
  node: DeliveryProfileItem,
};

/** Links a location group with zones associated to a delivery profile. */
export type DeliveryProfileLocationGroup = {
   __typename?: 'DeliveryProfileLocationGroup',
  /** The countries already selected in any zone for the given location group and profile. */
  countriesInAnyZone: Array<DeliveryCountryAndZone>,
  /** The location group associated to a delivery profile. */
  locationGroup: DeliveryLocationGroup,
  /** The applicable zones associated to a location group and delivery profile. */
  locationGroupZones: DeliveryLocationGroupZoneConnection,
};


/** Links a location group with zones associated to a delivery profile. */
export type DeliveryProfileLocationGrouplocationGroupZonesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** Input fields for a delivery location group associated to a profile. */
export type DeliveryProfileLocationGroupInput = {
  /** Globally unique identifier of the LocationGroup. */
  id?: Maybe<Scalars['ID']>,
  /** The location ids of the locations to be moved to this location group. */
  locations?: Maybe<Array<Scalars['ID']>>,
  /** Zones to create. */
  zonesToCreate?: Maybe<Array<DeliveryLocationGroupZoneInput>>,
  /** Zones to update. */
  zonesToUpdate?: Maybe<Array<DeliveryLocationGroupZoneInput>>,
};

/** Return type for `deliveryProfileRemove` mutation. */
export type deliveryProfileRemovePayload = {
   __typename?: 'deliveryProfileRemovePayload',
  /** The profile deletion job triggered by the mutation. */
  job?: Maybe<Job>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `deliveryProfileUpdate` mutation. */
export type deliveryProfileUpdatePayload = {
   __typename?: 'deliveryProfileUpdatePayload',
  /** The delivery profile that was updated. */
  profile?: Maybe<DeliveryProfile>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** A region that is used to define a zone. */
export type DeliveryProvince = Node & {
   __typename?: 'DeliveryProvince',
  /** The code of this region. */
  code: Scalars['String'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The name of the region. */
  name: Scalars['String'],
};

/** The input fields to specify a region. */
export type DeliveryProvinceInput = {
  /** The code of the region. */
  code: Scalars['String'],
};

/** The merchant-defined rate of the DeliveryMethodDefinition. */
export type DeliveryRateDefinition = Node & {
   __typename?: 'DeliveryRateDefinition',
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The price of this rate. */
  price: MoneyV2,
};

/** Input fields for a rate definition. */
export type DeliveryRateDefinitionInput = {
  /** Globally unique identifier of the rate definition. */
  id?: Maybe<Scalars['ID']>,
  /** The price of the rate definition. */
  price: MoneyInput,
};

/** Rate provided by a rate definition or a participant. */
export type DeliveryRateProvider = DeliveryRateDefinition | DeliveryParticipant;

/** Delivery shop-level settings. */
export type DeliverySetting = {
   __typename?: 'DeliverySetting',
  /** 
 * Whether the shop is blocked from converting to full multi-location delivery
   * profiles mode. If the shop is blocked, then the blocking reasons are also returned.
 */
  legacyModeBlocked: DeliveryLegacyModeBlocked,
  /** Enables legacy compatability mode for the multi-location delivery profiles feature. */
  legacyModeProfiles: Scalars['Boolean'],
};

/** Input fields for shop-level delivery settings. */
export type DeliverySettingInput = {
  /** Enables legacy compatability mode for the multi-location delivery profiles feature. */
  legacyModeProfiles?: Maybe<Scalars['Boolean']>,
};

/** Return type for `deliverySettingUpdate` mutation. */
export type DeliverySettingUpdatePayload = {
   __typename?: 'DeliverySettingUpdatePayload',
  /** The updated delivery shop level settings. */
  setting?: Maybe<DeliverySetting>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `deliveryShippingOriginAssign` mutation. */
export type DeliveryShippingOriginAssignPayload = {
   __typename?: 'DeliveryShippingOriginAssignPayload',
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Input fields for updating the conditions of a method definition. */
export type DeliveryUpdateConditionInput = {
  /** Globally unique identifier of the condition. */
  id: Scalars['ID'],
  /** The value of the criteria of the condition. */
  criteria?: Maybe<Scalars['Float']>,
  /** The unit of the criteria of the condition. */
  criteriaUnit?: Maybe<Scalars['String']>,
  /** The field to use, either total_weight or total_price. */
  field?: Maybe<DeliveryConditionField>,
  /** The operator to use for comparison. */
  operator?: Maybe<DeliveryConditionOperator>,
};

/** Input fields for the weight-based conditions of a method definition. */
export type DeliveryWeightConditionInput = {
  /** The criteria for the weight. */
  criteria?: Maybe<WeightInput>,
  /** The operator to use for comparison. */
  operator?: Maybe<DeliveryConditionOperator>,
};

/** A zone is a geographical area that contains delivery methods within a delivery profile. */
export type DeliveryZone = Node & {
   __typename?: 'DeliveryZone',
  /** The list of countries within the zone. */
  countries: Array<DeliveryCountry>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The name of the zone. */
  name: Scalars['String'],
};

/** Digital wallet, such as Apple Pay, which can be used for accelerated checkouts. */
export enum DigitalWallet {
  /** Apple Pay. */
  APPLE_PAY = 'APPLE_PAY',
  /** Android Pay. */
  ANDROID_PAY = 'ANDROID_PAY',
  /** Google Pay. */
  GOOGLE_PAY = 'GOOGLE_PAY',
  /** Shopify Pay. */
  SHOPIFY_PAY = 'SHOPIFY_PAY'
}

/** An amount discounting the line that has been allocated by an associated discount application. */
export type DiscountAllocation = {
   __typename?: 'DiscountAllocation',
  /** Money amount allocated by the discount application. */
  allocatedAmount: MoneyV2,
  /** Money amount allocated by the discount application in shop and presentment currencies. */
  allocatedAmountSet: MoneyBag,
  /** The discount of which this allocated amount originated from. */
  discountApplication: DiscountApplication,
};

/** The fixed amount value of a discount. */
export type DiscountAmount = {
   __typename?: 'DiscountAmount',
  /** The value of the discount. */
  amount: MoneyV2,
  /** 
 * If true, then the discount is applied to each of the entitled items. If false,
   * then the amount is split across all of the entitled items.
 */
  appliesOnEachItem: Scalars['Boolean'],
};

/** Specifies the value of the discount and how it is applied. */
export type DiscountAmountInput = {
  /** The value of the discount. */
  amount?: Maybe<Scalars['Decimal']>,
  /** 
 * If true, then the discount is applied to each of the entitled items. If false,
   * then the amount is split across all of the entitled items.
 */
  appliesOnEachItem?: Maybe<Scalars['Boolean']>,
};

/** 
 * Discount applications capture the intentions of a discount source at
 * the time of application on an order's line items or shipping lines.
 */
export type DiscountApplication = {
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod,
  /** 
 * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
 */
  index: Scalars['Int'],
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection,
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType,
  /** The value of the discount application. */
  value: PricingValue,
};

/** The method by which the discount's value is allocated onto its entitled lines. */
export enum DiscountApplicationAllocationMethod {
  /** The value is spread across all entitled lines. */
  ACROSS = 'ACROSS',
  /** The value is applied onto every entitled line. */
  EACH = 'EACH',
  /** The value is specifically applied onto a particular line. */
  ONE = 'ONE'
}

export type DiscountApplicationConnection = {
   __typename?: 'DiscountApplicationConnection',
  /** A list of edges. */
  edges: Array<DiscountApplicationEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type DiscountApplicationEdge = {
   __typename?: 'DiscountApplicationEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of DiscountApplicationEdge. */
  node: DiscountApplication,
};

/** 
 * Which lines on the order that the discount is allocated over, of the type
 * defined by the Discount Application's target_type.
 */
export enum DiscountApplicationTargetSelection {
  /** The discount is allocated onto all the lines. */
  ALL = 'ALL',
  /** The discount is allocated onto only the lines it is entitled for. */
  ENTITLED = 'ENTITLED',
  /** The discount is allocated onto explicitly chosen lines. */
  EXPLICIT = 'EXPLICIT'
}

/** The type of line (i.e. line item or shipping line) on an order that the discount is applicable towards. */
export enum DiscountApplicationTargetType {
  /** The discount applies onto line items. */
  LINE_ITEM = 'LINE_ITEM',
  /** The discount applies onto shipping lines. */
  SHIPPING_LINE = 'SHIPPING_LINE'
}

/** An automatic discount. */
export type DiscountAutomatic = DiscountAutomaticBxgy | DiscountAutomaticBasic;

/** Return type for `discountAutomaticActivate` mutation. */
export type DiscountAutomaticActivatePayload = {
   __typename?: 'DiscountAutomaticActivatePayload',
  /** The activated automatic discount. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** An automatic basic discount. */
export type DiscountAutomaticBasic = {
   __typename?: 'DiscountAutomaticBasic',
  /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime'],
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets: DiscountCustomerGets,
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>,
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement: DiscountMinimumRequirement,
  /** A short summary of the discount. */
  shortSummary: Scalars['String'],
  /** The date and time when the discount starts. */
  startsAt: Scalars['DateTime'],
  /** The status of the discount. */
  status: DiscountStatus,
  /** A detailed summary of the discount. */
  summary: Scalars['String'],
  /** The title of the discount. */
  title: Scalars['String'],
  /** The number of times that the discount has been used. */
  usageCount: Scalars['Int'],
};

/** Return type for `discountAutomaticBasicCreate` mutation. */
export type DiscountAutomaticBasicCreatePayload = {
   __typename?: 'DiscountAutomaticBasicCreatePayload',
  /** The created discount. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** Specifies input field to create or update automatic basic discount. */
export type DiscountAutomaticBasicInput = {
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>,
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>,
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>,
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirementInput>,
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets?: Maybe<DiscountCustomerGetsInput>,
};

/** Return type for `discountAutomaticBasicUpdate` mutation. */
export type DiscountAutomaticBasicUpdatePayload = {
   __typename?: 'DiscountAutomaticBasicUpdatePayload',
  /** The updated discount. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** Return type for `discountAutomaticBulkDelete` mutation. */
export type DiscountAutomaticBulkDeletePayload = {
   __typename?: 'DiscountAutomaticBulkDeletePayload',
  /** The asynchronous job removing the automatic discounts. */
  job?: Maybe<Job>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** An automatic BXGY discount. */
export type DiscountAutomaticBxgy = Node & HasEvents & {
   __typename?: 'DiscountAutomaticBxgy',
  /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime'],
  /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
  customerBuys: DiscountCustomerBuys,
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets: DiscountCustomerGets,
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>,
  /** The paginated list of events associated with the host subject. */
  events: EventConnection,
  /** A legacy unique identifier for the discount. */
  id: Scalars['ID'],
  /** The date and time when the discount starts. */
  startsAt: Scalars['DateTime'],
  /** The status of the discount. */
  status: DiscountStatus,
  /** A detailed summary of the discount. */
  summary: Scalars['String'],
  /** The title of the discount. */
  title: Scalars['String'],
  /** The number of times that the discount has been used. */
  usageCount: Scalars['Int'],
  /** The maximum number of times that the discount can be applied to an order. */
  usesPerOrderLimit?: Maybe<Scalars['Int']>,
};


/** An automatic BXGY discount. */
export type DiscountAutomaticBxgyeventsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<EventSortKeys>,
  query?: Maybe<Scalars['String']>
};

/** Return type for `discountAutomaticBxgyCreate` mutation. */
export type DiscountAutomaticBxgyCreatePayload = {
   __typename?: 'DiscountAutomaticBxgyCreatePayload',
  /** The created discount. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** Specifies input field to create or update automatic bogo discount. */
export type DiscountAutomaticBxgyInput = {
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>,
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>,
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>,
  /** The maximum number of times that the discount can be applied to an order. */
  usesPerOrderLimit?: Maybe<Scalars['UnsignedInt64']>,
  /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
  customerBuys?: Maybe<DiscountCustomerBuysInput>,
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets?: Maybe<DiscountCustomerGetsInput>,
};

/** Return type for `discountAutomaticBxgyUpdate` mutation. */
export type DiscountAutomaticBxgyUpdatePayload = {
   __typename?: 'DiscountAutomaticBxgyUpdatePayload',
  /** The updated discount. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

export type DiscountAutomaticConnection = {
   __typename?: 'DiscountAutomaticConnection',
  /** A list of edges. */
  edges: Array<DiscountAutomaticEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `discountAutomaticDeactivate` mutation. */
export type DiscountAutomaticDeactivatePayload = {
   __typename?: 'DiscountAutomaticDeactivatePayload',
  /** The deactivated automatic discount. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** Return type for `discountAutomaticDelete` mutation. */
export type DiscountAutomaticDeletePayload = {
   __typename?: 'DiscountAutomaticDeletePayload',
  /** The deleted automatic discount ID. */
  deletedAutomaticDiscountId?: Maybe<Scalars['ID']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

export type DiscountAutomaticEdge = {
   __typename?: 'DiscountAutomaticEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of DiscountAutomaticEdge. */
  node: DiscountAutomatic,
};

/** An automatic discount wrapper node. */
export type DiscountAutomaticNode = Node & HasEvents & {
   __typename?: 'DiscountAutomaticNode',
  /** An automatic discount. */
  automaticDiscount: DiscountAutomatic,
  /** The paginated list of events associated with the host subject. */
  events: EventConnection,
  /** Globally unique identifier. */
  id: Scalars['ID'],
};


/** An automatic discount wrapper node. */
export type DiscountAutomaticNodeeventsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<EventSortKeys>,
  query?: Maybe<Scalars['String']>
};

export type DiscountAutomaticNodeConnection = {
   __typename?: 'DiscountAutomaticNodeConnection',
  /** A list of edges. */
  edges: Array<DiscountAutomaticNodeEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type DiscountAutomaticNodeEdge = {
   __typename?: 'DiscountAutomaticNodeEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of DiscountAutomaticNodeEdge. */
  node: DiscountAutomaticNode,
};

/** A code discount. */
export type DiscountCode = DiscountCodeBasic | DiscountCodeBxgy | DiscountCodeFreeShipping;

/** Return type for `discountCodeActivate` mutation. */
export type DiscountCodeActivatePayload = {
   __typename?: 'DiscountCodeActivatePayload',
  /** The activated code discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** 
 * Discount code applications capture the intentions of a discount code at
 * the time that it is applied onto an order.
 */
export type DiscountCodeApplication = DiscountApplication & {
   __typename?: 'DiscountCodeApplication',
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod,
  /** The string identifying the discount code that was used at the time of application. */
  code: Scalars['String'],
  /** 
 * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
 */
  index: Scalars['Int'],
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection,
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType,
  /** The value of the discount application. */
  value: PricingValue,
};

/** A basic code discount. */
export type DiscountCodeBasic = {
   __typename?: 'DiscountCodeBasic',
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer: Scalars['Boolean'],
  /** The number of times that the discount has been used. */
  asyncUsageCount: Scalars['Int'],
  /** The number of redeem codes for the discount. */
  codeCount: Scalars['Int'],
  /** A list of redeem codes for the discount. */
  codes: DiscountRedeemCodeConnection,
  /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime'],
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets: DiscountCustomerGets,
  /** The customers that can use the discount. */
  customerSelection: DiscountCustomerSelection,
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>,
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirement>,
  /** A short summary of the discount. */
  shortSummary: Scalars['String'],
  /** The date and time when the discount starts. */
  startsAt: Scalars['DateTime'],
  /** The status of the discount. */
  status: DiscountStatus,
  /** A detailed summary of the discount. */
  summary: Scalars['String'],
  /** The title of the Discount. */
  title: Scalars['String'],
  /** The maximum number of times the code discount can be used. */
  usageLimit?: Maybe<Scalars['Int']>,
};


/** A basic code discount. */
export type DiscountCodeBasiccodesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** Return type for `discountCodeBasicCreate` mutation. */
export type DiscountCodeBasicCreatePayload = {
   __typename?: 'DiscountCodeBasicCreatePayload',
  /** The created discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** Specifies input field to create or update code basic discount. */
export type DiscountCodeBasicInput = {
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>,
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>,
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>,
  /** The maximum number of times that the code discount can be used. For open-ended discounts, use `null`. */
  usageLimit?: Maybe<Scalars['Int']>,
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer?: Maybe<Scalars['Boolean']>,
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirementInput>,
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets?: Maybe<DiscountCustomerGetsInput>,
  /** The customers that can use the discount. */
  customerSelection?: Maybe<DiscountCustomerSelectionInput>,
  /** The code to use the discount. */
  code?: Maybe<Scalars['String']>,
};

/** Return type for `discountCodeBasicUpdate` mutation. */
export type DiscountCodeBasicUpdatePayload = {
   __typename?: 'DiscountCodeBasicUpdatePayload',
  /** The updated discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** A BXGY code discount. */
export type DiscountCodeBxgy = {
   __typename?: 'DiscountCodeBxgy',
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer: Scalars['Boolean'],
  /** The number of times that the discount has been used. */
  asyncUsageCount: Scalars['Int'],
  /** The number of redeem codes for the discount. */
  codeCount: Scalars['Int'],
  /** A list of redeem codes for the discount. */
  codes: DiscountRedeemCodeConnection,
  /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime'],
  /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
  customerBuys: DiscountCustomerBuys,
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets: DiscountCustomerGets,
  /** The customers that can use the discount. */
  customerSelection: DiscountCustomerSelection,
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>,
  /** The date and time when the discount starts. */
  startsAt: Scalars['DateTime'],
  /** The status of the discount. */
  status: DiscountStatus,
  /** A detailed summary of the discount. */
  summary: Scalars['String'],
  /** The title of the Discount. */
  title: Scalars['String'],
  /** The maximum number of times the code discount can be used. */
  usageLimit?: Maybe<Scalars['Int']>,
  /** The maximum number of times that the discount can be applied to an order. */
  usesPerOrderLimit?: Maybe<Scalars['Int']>,
};


/** A BXGY code discount. */
export type DiscountCodeBxgycodesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** Return type for `discountCodeBxgyCreate` mutation. */
export type DiscountCodeBxgyCreatePayload = {
   __typename?: 'DiscountCodeBxgyCreatePayload',
  /** The created discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** Specifies input field to create or update a BXGY code discount. */
export type DiscountCodeBxgyInput = {
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>,
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>,
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>,
  /** The qualifying items and the quantity of each one that the customer has to buy to be eligible for the discount. */
  customerBuys?: Maybe<DiscountCustomerBuysInput>,
  /** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
  customerGets?: Maybe<DiscountCustomerGetsInput>,
  /** The customers that can use this discount. */
  customerSelection?: Maybe<DiscountCustomerSelectionInput>,
  /** The code to use the discount. */
  code?: Maybe<Scalars['String']>,
  /** The maximum number of times that the code discount can be used. For open-ended discounts, use `null`. */
  usageLimit?: Maybe<Scalars['Int']>,
  /** The maximum number of times that the discount can be applied to an order. */
  usesPerOrderLimit?: Maybe<Scalars['Int']>,
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer?: Maybe<Scalars['Boolean']>,
};

/** Return type for `discountCodeBxgyUpdate` mutation. */
export type DiscountCodeBxgyUpdatePayload = {
   __typename?: 'DiscountCodeBxgyUpdatePayload',
  /** The updated discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** Return type for `discountCodeDeactivate` mutation. */
export type DiscountCodeDeactivatePayload = {
   __typename?: 'DiscountCodeDeactivatePayload',
  /** The deactivated code discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** Return type for `discountCodeDelete` mutation. */
export type DiscountCodeDeletePayload = {
   __typename?: 'DiscountCodeDeletePayload',
  /** The deleted code discount ID. */
  deletedCodeDiscountId?: Maybe<Scalars['ID']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** A free shipping code discount. */
export type DiscountCodeFreeShipping = {
   __typename?: 'DiscountCodeFreeShipping',
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer: Scalars['Boolean'],
  /** The number of times that the discount has been used. */
  asyncUsageCount: Scalars['Int'],
  /** The number of redeem codes for the discount. */
  codeCount: Scalars['Int'],
  /** A list of redeem codes for the discount. */
  codes: DiscountRedeemCodeConnection,
  /** The date and time when the discount was created. */
  createdAt: Scalars['DateTime'],
  /** The customers that can use the discount. */
  customerSelection: DiscountCustomerSelection,
  /** A shipping destination that qualifies for the discount. */
  destinationSelection: DiscountShippingDestinationSelection,
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>,
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirement>,
  /** A short summary of the discount. */
  shortSummary: Scalars['String'],
  /** The date and time when the discount starts. */
  startsAt: Scalars['DateTime'],
  /** The status of the discount. */
  status: DiscountStatus,
  /** A detailed summary of the discount. */
  summary: Scalars['String'],
  /** The title of the discount. */
  title: Scalars['String'],
  /** The maximum number of times the code discount can be used. */
  usageLimit?: Maybe<Scalars['Int']>,
};


/** A free shipping code discount. */
export type DiscountCodeFreeShippingcodesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** Return type for `discountCodeFreeShippingCreate` mutation. */
export type DiscountCodeFreeShippingCreatePayload = {
   __typename?: 'DiscountCodeFreeShippingCreatePayload',
  /** The created discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** Specifies input field to create or update free shipping code discount. */
export type DiscountCodeFreeShippingInput = {
  /** The title of the discount. */
  title?: Maybe<Scalars['String']>,
  /** The date and time when the discount starts. */
  startsAt?: Maybe<Scalars['DateTime']>,
  /** The date and time when the discount ends. For open-ended discounts, use `null`. */
  endsAt?: Maybe<Scalars['DateTime']>,
  /** The code to use the discount. */
  code?: Maybe<Scalars['String']>,
  /** The maximum number of times that the code discount can be used. For open-ended discounts, use `null`. */
  usageLimit?: Maybe<Scalars['Int']>,
  /** Whether the discount can be applied only once per customer. */
  appliesOncePerCustomer?: Maybe<Scalars['Boolean']>,
  /** The minimum subtotal or quantity that's required for the discount to be applied. */
  minimumRequirement?: Maybe<DiscountMinimumRequirementInput>,
  /** The customers that can use this discount. */
  customerSelection?: Maybe<DiscountCustomerSelectionInput>,
  /** A list of destinations where the discount will apply. */
  destination?: Maybe<DiscountShippingDestinationSelectionInput>,
};

/** Return type for `discountCodeFreeShippingUpdate` mutation. */
export type DiscountCodeFreeShippingUpdatePayload = {
   __typename?: 'DiscountCodeFreeShippingUpdatePayload',
  /** The updated discount. */
  codeDiscountNode?: Maybe<DiscountCodeNode>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<DiscountUserError>,
};

/** A code discount wrapper node. */
export type DiscountCodeNode = Node & HasEvents & {
   __typename?: 'DiscountCodeNode',
  /** A code discount. */
  codeDiscount: DiscountCode,
  /** The paginated list of events associated with the host subject. */
  events: EventConnection,
  /** Globally unique identifier. */
  id: Scalars['ID'],
};


/** A code discount wrapper node. */
export type DiscountCodeNodeeventsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<EventSortKeys>,
  query?: Maybe<Scalars['String']>
};

export type DiscountCodeNodeConnection = {
   __typename?: 'DiscountCodeNodeConnection',
  /** A list of edges. */
  edges: Array<DiscountCodeNodeEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type DiscountCodeNodeEdge = {
   __typename?: 'DiscountCodeNodeEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of DiscountCodeNodeEdge. */
  node: DiscountCodeNode,
};

/** The set of valid sort keys for the discountCodes query. */
export enum DiscountCodeSortKeys {
  /** Sort by the `code` value. */
  CODE = 'CODE',
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** A list of collections that the discount can have as a prerequisite or entitlement. */
export type DiscountCollections = {
   __typename?: 'DiscountCollections',
  /** A list of collections that the discount can have as a prerequisite or entitlement. */
  collections: CollectionConnection,
};


/** A list of collections that the discount can have as a prerequisite or entitlement. */
export type DiscountCollectionscollectionsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** Specifies the collections attached to a discount. */
export type DiscountCollectionsInput = {
  /** Specifies list of collection ids to add. */
  add?: Maybe<Array<Scalars['ID']>>,
  /** Specifies list of collection ids to remove. */
  remove?: Maybe<Array<Scalars['ID']>>,
};

/** The shipping destination where the discount applies. */
export type DiscountCountries = {
   __typename?: 'DiscountCountries',
  /** The codes for the countries where the discount can be used. */
  countries: Array<CountryCode>,
  /** Whether the discount is applicable to countries that have not been defined in the shop's shipping zones. */
  includeRestOfWorld: Scalars['Boolean'],
};

/** Specifies a list of countries to add or remove from the free shipping discount. */
export type DiscountCountriesInput = {
  /** The country codes to add to the list of countries where the discount applies. */
  add?: Maybe<Array<CountryCode>>,
  /** The country codes to remove from the list of countries where the discount applies. */
  remove?: Maybe<Array<CountryCode>>,
  /** Whether the discount code is applicable to countries that have not been defined in the shop's shipping zones. */
  includeRestOfWorld?: Maybe<Scalars['Boolean']>,
};

/** Whether the discount applies to all countries. */
export type DiscountCountryAll = {
   __typename?: 'DiscountCountryAll',
  /** Always true when resolved to this type. */
  allCountries: Scalars['Boolean'],
};

/** Whether the discount applies to all customers. */
export type DiscountCustomerAll = {
   __typename?: 'DiscountCustomerAll',
  /** Always true when resolved to this type. */
  allCustomers: Scalars['Boolean'],
};

/** The prerequisite items and prerequisite value. */
export type DiscountCustomerBuys = {
   __typename?: 'DiscountCustomerBuys',
  /** The prerequisite items for the discount. */
  items: DiscountItems,
  /** The prerequisite value. */
  value: DiscountCustomerBuysValue,
};

/** Specifies the prerequisite items and prerequisite quantity. */
export type DiscountCustomerBuysInput = {
  /** The quantity of prerequisite items. */
  value?: Maybe<DiscountCustomerBuysValueInput>,
  /** The IDs of items that the customer buys. The items can be either collections or products. */
  items?: Maybe<DiscountItemsInput>,
};

/** The prerequisite quantity required for the discount to be applicable. */
export type DiscountCustomerBuysValue = DiscountQuantity;

/** Specifies the prerequisite quantity for the discount. */
export type DiscountCustomerBuysValueInput = {
  /** The quantity of prerequisite items. */
  quantity?: Maybe<Scalars['UnsignedInt64']>,
};

/** The qualifying items in an order, the quantity of each one, and the total value of the discount. */
export type DiscountCustomerGets = {
   __typename?: 'DiscountCustomerGets',
  /** Entitled items. */
  items: DiscountItems,
  /** Entitled quantity and the discount value. */
  value: DiscountCustomerGetsValue,
};

/** Specifies the items that will be discounted, the quantity of items that will be discounted, and the value of discount. */
export type DiscountCustomerGetsInput = {
  /** The quantity of items discounted and the discount value. */
  value?: Maybe<DiscountCustomerGetsValueInput>,
  /** The IDs of the items that the customer gets. The items can be either collections or products. */
  items?: Maybe<DiscountItemsInput>,
};

/** The value of the discount and how it will be applied. */
export type DiscountCustomerGetsValue = DiscountOnQuantity | DiscountAmount | DiscountPercentage;

/** Specifies the quantity of items discounted and the discount value. */
export type DiscountCustomerGetsValueInput = {
  /** The quantity of the items that are discounted and the discount value. */
  discountOnQuantity?: Maybe<DiscountOnQuantityInput>,
  /** The percentage value of the discount. Value must be between 0.00 - 1.00. */
  percentage?: Maybe<Scalars['Float']>,
  /** The value of the discount. */
  discountAmount?: Maybe<DiscountAmountInput>,
};

/** A list of customers to whom the discount applies. */
export type DiscountCustomers = {
   __typename?: 'DiscountCustomers',
  /** A list of the customers that can use the discount. */
  customers: Array<Customer>,
};

/** A list of customer saved searches that contain the customers to whom the discount applies. */
export type DiscountCustomerSavedSearches = {
   __typename?: 'DiscountCustomerSavedSearches',
  /** A list of customer saved searches that contain the customers who are eligible to use the discount. */
  savedSearches: Array<SavedSearch>,
};

/** Specifies which customer saved searches to add to or remove from the discount. */
export type DiscountCustomerSavedSearchesInput = {
  /** A list of customer saved searches to add to the current list of customer saved searches. */
  add?: Maybe<Array<Scalars['ID']>>,
  /** A list of customer saved searches to remove from the current list of customer saved searches. */
  remove?: Maybe<Array<Scalars['ID']>>,
};

/** The selection of customers who can use this discount. */
export type DiscountCustomerSelection = DiscountCustomerAll | DiscountCustomers | DiscountCustomerSavedSearches;

/** Specifies the customers who can use this discount. */
export type DiscountCustomerSelectionInput = {
  /** Whether all customers can use this discount. */
  all?: Maybe<Scalars['Boolean']>,
  /** The list of customer IDs to add or remove from the list of customers. */
  customers?: Maybe<DiscountCustomersInput>,
  /** The list of customer saved search IDs to add or remove from the list of customer saved searches. */
  customerSavedSearches?: Maybe<DiscountCustomerSavedSearchesInput>,
};

/** Specifies which customers to add to or remove from the discount. */
export type DiscountCustomersInput = {
  /** A list of customers to add to the current list of customers who can use the discount. */
  add?: Maybe<Array<Scalars['ID']>>,
  /** A list of customers to remove from the current list of customers who can use the discount. */
  remove?: Maybe<Array<Scalars['ID']>>,
};

/** The type of discount that will be applied. Currently, only percentage off is supported. */
export type DiscountEffect = DiscountPercentage;

/** Specifies how the discount will be applied. Currently, only percentage off is supported. */
export type DiscountEffectInput = {
  /** The percentage value of the discount. Value must be between 0.00 - 1.00. */
  percentage?: Maybe<Scalars['Float']>,
};

/** Possible error codes that could be returned by a discounts mutation. */
export enum DiscountErrorCode {
  /** Input value is blank. */
  BLANK = 'BLANK',
  /** Input value is not present. */
  PRESENT = 'PRESENT',
  /** Input value should be equal to allowed value. */
  EQUAL_TO = 'EQUAL_TO',
  /** Input value should be greater than minimum allowed value. */
  GREATER_THAN = 'GREATER_THAN',
  /** Input value should be greater than or equal to minimum allowed value. */
  GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO',
  /** Input value is invalid. */
  INVALID = 'INVALID',
  /** Input value should be less or equal to maximum allowed value. */
  LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO',
  /** Input value should be less than maximum allowed value. */
  LESS_THAN = 'LESS_THAN',
  /** Input value is already taken. */
  TAKEN = 'TAKEN',
  /** Input value is too long. */
  TOO_LONG = 'TOO_LONG',
  /** Input value is too short. */
  TOO_SHORT = 'TOO_SHORT',
  /** Unexpected internal error happened. */
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  /** Too many arguments provided. */
  TOO_MANY_ARGUMENTS = 'TOO_MANY_ARGUMENTS',
  /** Missing a required argument. */
  MISSING_ARGUMENT = 'MISSING_ARGUMENT',
  /** Exceeded maximum allowed value. */
  EXCEEDED_MAX = 'EXCEEDED_MAX',
  /** Cannot have both minimum subtotal and quantity present. */
  MINIMUM_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT = 'MINIMUM_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT',
  /** Value is outside allowed range. */
  VALUE_OUTSIDE_RANGE = 'VALUE_OUTSIDE_RANGE',
  /** Active period overlaps with other automatic discounts. At any given time, only one automatic discount can be active. */
  ACTIVE_PERIOD_OVERLAP = 'ACTIVE_PERIOD_OVERLAP',
  /** Attribute selection contains conflicting settings. */
  CONFLICT = 'CONFLICT',
  /** Value is already present through another selection. */
  IMPLICIT_DUPLICATE = 'IMPLICIT_DUPLICATE',
  /** Input value is already present. */
  DUPLICATE = 'DUPLICATE'
}

/** Entitled or prerequisite items on a discount. An item could be either collection or product or product_variant. */
export type DiscountItems = AllDiscountItems | DiscountProducts | DiscountCollections;

/** Specifies the items attached to a discount. */
export type DiscountItemsInput = {
  /** The products and product variants that are attached to a discount. */
  products?: Maybe<DiscountProductsInput>,
  /** The collections that are attached to a discount. */
  collections?: Maybe<DiscountCollectionsInput>,
  /** Whether all items should be selected. */
  all?: Maybe<Scalars['Boolean']>,
};

/** The minimum quantity of items required for the discount to apply. */
export type DiscountMinimumQuantity = {
   __typename?: 'DiscountMinimumQuantity',
  /** The minimum quantity of items that's required for the discount to be applied. */
  greaterThanOrEqualToQuantity: Scalars['UnsignedInt64'],
};

/** Specifies the quantity minimum requirements for a discount. */
export type DiscountMinimumQuantityInput = {
  /** The minimum quantity of items that's required for the discount to be applied. */
  greaterThanOrEqualToQuantity?: Maybe<Scalars['UnsignedInt64']>,
};

/** The minimum subtotal or quantity requirements for the discount. */
export type DiscountMinimumRequirement = DiscountMinimumQuantity | DiscountMinimumSubtotal;

/** Specifies the quantity or subtotal minimum requirements for a discount. */
export type DiscountMinimumRequirementInput = {
  /** The minimum required quantity. */
  quantity?: Maybe<DiscountMinimumQuantityInput>,
  /** The minimum required subtotal. */
  subtotal?: Maybe<DiscountMinimumSubtotalInput>,
};

/** The minimum subtotal required for the discount to apply. */
export type DiscountMinimumSubtotal = {
   __typename?: 'DiscountMinimumSubtotal',
  /** The minimum subtotal that's required for the discount to be applied. */
  greaterThanOrEqualToSubtotal: MoneyV2,
};

/** Specifies the subtotal minimum requirements for a discount. */
export type DiscountMinimumSubtotalInput = {
  /** The minimum subtotal that's required for the discount to be applied. */
  greaterThanOrEqualToSubtotal?: Maybe<Scalars['Decimal']>,
};

/** The quantity of items discounted, the discount value, and how the discount will be applied. */
export type DiscountOnQuantity = {
   __typename?: 'DiscountOnQuantity',
  /** The discount's effect on qualifying items. */
  effect: DiscountEffect,
  /** The number of items being discounted. */
  quantity: DiscountQuantity,
};

/** Specifies the quantity of items discounted and the discount value. */
export type DiscountOnQuantityInput = {
  /** The quantity of items that are discounted. */
  quantity?: Maybe<Scalars['UnsignedInt64']>,
  /** The percentage value of the discount. */
  effect?: Maybe<DiscountEffectInput>,
};

/** The percentage value of the discount. */
export type DiscountPercentage = {
   __typename?: 'DiscountPercentage',
  /** The percentage value of the discount. */
  percentage: Scalars['Float'],
};

/** The entitled or prerequisite products and product variants for a discount. */
export type DiscountProducts = {
   __typename?: 'DiscountProducts',
  /** A list of product variants that the discount can have as a prerequisite or entitlement. */
  productVariants: ProductVariantConnection,
  /** A list of products that the discount can have as a prerequisite or entitlement. */
  products: ProductConnection,
};


/** The entitled or prerequisite products and product variants for a discount. */
export type DiscountProductsproductVariantsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The entitled or prerequisite products and product variants for a discount. */
export type DiscountProductsproductsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** Specifies the products and product variants attached to a discount. */
export type DiscountProductsInput = {
  /** Specifies list of product ids to add. */
  productsToAdd?: Maybe<Array<Scalars['ID']>>,
  /** Specifies list of product ids to remove. */
  productsToRemove?: Maybe<Array<Scalars['ID']>>,
  /** Specifies list of product variant ids to add. */
  productVariantsToAdd?: Maybe<Array<Scalars['ID']>>,
  /** Specifies list of product variant ids to remove. */
  productVariantsToRemove?: Maybe<Array<Scalars['ID']>>,
};

/** The quantity of items in discount. */
export type DiscountQuantity = {
   __typename?: 'DiscountQuantity',
  /** The quantity of items. */
  quantity: Scalars['UnsignedInt64'],
};

/** A redeem code for a code discount. */
export type DiscountRedeemCode = {
   __typename?: 'DiscountRedeemCode',
  /** The code of a discount. */
  code: Scalars['String'],
};

export type DiscountRedeemCodeConnection = {
   __typename?: 'DiscountRedeemCodeConnection',
  /** A list of edges. */
  edges: Array<DiscountRedeemCodeEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type DiscountRedeemCodeEdge = {
   __typename?: 'DiscountRedeemCodeEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of DiscountRedeemCodeEdge. */
  node: DiscountRedeemCode,
};

/** The selection of shipping countries to which this discount applies. */
export type DiscountShippingDestinationSelection = DiscountCountryAll | DiscountCountries;

/** Specifies the destinations where the free shipping discount will be applied. */
export type DiscountShippingDestinationSelectionInput = {
  /** Whether the discount code applies to all countries. */
  all?: Maybe<Scalars['Boolean']>,
  /** A list of countries where the discount code will apply. */
  countries?: Maybe<DiscountCountriesInput>,
};

/** The status of the discount. */
export enum DiscountStatus {
  /** The discount is active. */
  ACTIVE = 'ACTIVE',
  /** The discount is expired. */
  EXPIRED = 'EXPIRED',
  /** The discount is scheduled. */
  SCHEDULED = 'SCHEDULED'
}

/** An error that occurs during the execution of a discount mutation. */
export type DiscountUserError = DisplayableError & {
   __typename?: 'DiscountUserError',
  /** An error code to uniquely identify the error. */
  code?: Maybe<DiscountErrorCode>,
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>,
  /** The error message. */
  message: Scalars['String'],
};

/** Represents an error in the input of a mutation. */
export type DisplayableError = {
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>,
  /** The error message. */
  message: Scalars['String'],
};

/** The possible statuses of a dispute. */
export enum DisputeStatus {
  NEEDS_RESPONSE = 'NEEDS_RESPONSE',
  UNDER_REVIEW = 'UNDER_REVIEW',
  CHARGE_REFUNDED = 'CHARGE_REFUNDED',
  ACCEPTED = 'ACCEPTED',
  WON = 'WON',
  LOST = 'LOST'
}

/** The possible types for a dispute. */
export enum DisputeType {
  CHARGEBACK = 'CHARGEBACK',
  INQUIRY = 'INQUIRY'
}

/** A unique string that represents the address of a Shopify store on the Internet. */
export type Domain = Node & {
   __typename?: 'Domain',
  /** The host name of the domain (eg: `example.com`). */
  host: Scalars['String'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Whether SSL is enabled or not. */
  sslEnabled: Scalars['Boolean'],
  /** The URL of the domain (eg: `https://example.com`). */
  url: Scalars['URL'],
};

/** 
 * Returns unfulfilled line items grouped by their fulfillment service. Each draft
 * fulfillment contains additional information, such as whether the fulfillment
 * requires shipping and whether a shipping label can be printed for it.
 */
export type DraftFulfillment = {
   __typename?: 'DraftFulfillment',
  /** Whether a label can be purchased. */
  allowLabelPurchase: Scalars['Boolean'],
  /** The line items (which might correspond to a variant) that are part of this draft fulfillment. */
  lineItems: Array<LineItem>,
  /** Whether a fulfillment requires shipping. */
  requiresShipping: Scalars['Boolean'],
  /** The service responsible for fulfilling the fulfillment. */
  service: FulfillmentService,
};

/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrder = Node & HasMetafields & CommentEventSubject & LegacyInteroperability & HasEvents & {
   __typename?: 'DraftOrder',
  /** Order-level discount applied to the draft order. */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscount>,
  /** Billing address of the customer. */
  billingAddress?: Maybe<MailingAddress>,
  /** 
 * Date and time when the draft order converted to a new order,
   * and the draft order's status changed to **Completed**.
 */
  completedAt?: Maybe<Scalars['DateTime']>,
  /** Date and time when the draft order was created in Shopify. */
  createdAt: Scalars['DateTime'],
  /** Three letter code for the currency of the store at the time that the invoice is sent. */
  currencyCode: CurrencyCode,
  /** Custom information added to the draft order on behalf of your customer. */
  customAttributes: Array<Attribute>,
  /** Customer who will be sent an invoice for the draft order, if there is one. */
  customer?: Maybe<Customer>,
  /** Email address of the customer, which is used to send notifications to. */
  email?: Maybe<Scalars['String']>,
  /** List of events associated with the draft order. */
  events: EventConnection,
  /** Whether the merchant has added timeline comments to the draft order. */
  hasTimelineComment: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Date and time when the invoice was last emailed to the customer. */
  invoiceSentAt?: Maybe<Scalars['DateTime']>,
  /** Link to the checkout, which is sent to your customer in the invoice email. */
  invoiceUrl?: Maybe<Scalars['URL']>,
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** List of the line items in the draft order. */
  lineItems: DraftOrderLineItemConnection,
  /** The metafield associated with the resource. */
  metafield?: Maybe<Metafield>,
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection,
  /** Unique identifier for the draft order, which is unique within the store. For example, _#D1223_. */
  name: Scalars['String'],
  /** Text from an optional note attached to the draft order. */
  note2?: Maybe<Scalars['String']>,
  /** Order that was created from this draft order. */
  order?: Maybe<Order>,
  /** Returns a private metafield found by namespace and key. */
  privateMetafield?: Maybe<PrivateMetafield>,
  /** List of private metafields. */
  privateMetafields: PrivateMetafieldConnection,
  /** Shipping mailing address of the customer. */
  shippingAddress?: Maybe<MailingAddress>,
  /** Line item that contains the shipping costs. */
  shippingLine?: Maybe<ShippingLine>,
  /** Status of the draft order. */
  status: DraftOrderStatus,
  /** Subtotal of the line items and their discounts (does not contain shipping charges or shipping discounts, or taxes). */
  subtotalPrice: Scalars['Money'],
  /** Tags added to the draft order. */
  tags: Array<Scalars['String']>,
  /** Whether the draft order is tax exempt. */
  taxExempt: Scalars['Boolean'],
  /** Total amount of taxes charged for each line item and shipping line. */
  taxLines: Array<TaxLine>,
  /** Whether the line item prices include taxes. */
  taxesIncluded: Scalars['Boolean'],
  /** Total amount of the draft order (includes taxes, shipping charges, and discounts). */
  totalPrice: Scalars['Money'],
  /** Total shipping charge for the draft order. */
  totalShippingPrice: Scalars['Money'],
  /** Total amount of taxes for the draft order. */
  totalTax: Scalars['Money'],
  /** Total weight (grams) of the draft order. */
  totalWeight: Scalars['UnsignedInt64'],
  /** 
 * Date and time when the draft order was last changed.
   * The format is YYYY-MM-DD HH:mm:ss (for example, 2016-02-05 17:04:01).
 */
  updatedAt: Scalars['DateTime'],
};


/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrdereventsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<EventSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrderlineItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrdermetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrdermetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrderprivateMetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents a draft order. Merchants can use draft orders to create orders on behalf of their customers. */
export type DraftOrderprivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** The order-level discount applied to a draft order. */
export type DraftOrderAppliedDiscount = {
   __typename?: 'DraftOrderAppliedDiscount',
  /** Amount of the order-level discount that is applied to the draft order. */
  amount: Scalars['Money'],
  /** Amount of money discounted. */
  amountV2: MoneyV2,
  /** Description of the order-level discount. */
  description: Scalars['String'],
  /** Name of the order-level discount. */
  title?: Maybe<Scalars['String']>,
  /** 
 * Amount of the order level discount (when value_type is percentage,
   * the value in this field is the percentage discount).
 */
  value: Scalars['Float'],
  /** Type of the order-level discount. */
  valueType: DraftOrderAppliedDiscountType,
};

/** The input fields for applying an order-level discount to a draft order. */
export type DraftOrderAppliedDiscountInput = {
  /** The applied amount of the discount. */
  amount: Scalars['Money'],
  /** Reason for the discount. */
  description?: Maybe<Scalars['String']>,
  /** Title of the discount. */
  title?: Maybe<Scalars['String']>,
  /** 
 * The value of the discount.
   * If the type of the discount is fixed amount, then this is a fixed dollar amount.
   * If the type is percentage, then this is the percentage.
 */
  value: Scalars['Float'],
  /** The type of discount. */
  valueType: DraftOrderAppliedDiscountType,
};

/** The valid discount types that can be applied to a draft order. */
export enum DraftOrderAppliedDiscountType {
  /** A fixed amount in the store's currency. */
  FIXED_AMOUNT = 'FIXED_AMOUNT',
  /** A percentage of the order subtotal. */
  PERCENTAGE = 'PERCENTAGE'
}

/** Return type for `draftOrderCalculate` mutation. */
export type DraftOrderCalculatePayload = {
   __typename?: 'DraftOrderCalculatePayload',
  /** The calculated properties for a draft order. */
  calculatedDraftOrder?: Maybe<CalculatedDraftOrder>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `draftOrderComplete` mutation. */
export type DraftOrderCompletePayload = {
   __typename?: 'DraftOrderCompletePayload',
  /** The completed draft order. */
  draftOrder?: Maybe<DraftOrder>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type DraftOrderConnection = {
   __typename?: 'DraftOrderConnection',
  /** A list of edges. */
  edges: Array<DraftOrderEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `draftOrderCreate` mutation. */
export type DraftOrderCreatePayload = {
   __typename?: 'DraftOrderCreatePayload',
  /** The created draft order. */
  draftOrder?: Maybe<DraftOrder>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Specifies the draft order to delete by its ID. */
export type DraftOrderDeleteInput = {
  /** The ID of the draft order to delete. */
  id: Scalars['ID'],
};

/** Return type for `draftOrderDelete` mutation. */
export type DraftOrderDeletePayload = {
   __typename?: 'DraftOrderDeletePayload',
  /** The ID of the deleted draft order. */
  deletedId?: Maybe<Scalars['ID']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type DraftOrderEdge = {
   __typename?: 'DraftOrderEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of DraftOrderEdge. */
  node: DraftOrder,
};

/** The input fields used to create or update a draft order. */
export type DraftOrderInput = {
  /** 
 * The discount that will be applied to the draft order.
   * A draft order line item can have one discount. A draft order can also have one order-level discount.
 */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscountInput>,
  /** The mailing address associated with the payment method. */
  billingAddress?: Maybe<MailingAddressInput>,
  /** Customer associated with the draft order. */
  customerId?: Maybe<Scalars['ID']>,
  /** Extra information added to the customer. */
  customAttributes?: Maybe<Array<AttributeInput>>,
  /** The customer's email address. */
  email?: Maybe<Scalars['String']>,
  /** 
 * Product variant line item or custom line item associated to the draft order.
   * Each draft order must include at least one line item.
 */
  lineItems?: Maybe<Array<DraftOrderLineItemInput>>,
  /** Metafields attached to the draft order. */
  metafields?: Maybe<Array<MetafieldInput>>,
  /** The private metafields attached to the draft order. */
  privateMetafields?: Maybe<Array<PrivateMetafieldInput>>,
  /** The text of an optional note that a shop owner can attach to the draft order. */
  note?: Maybe<Scalars['String']>,
  /** The mailing address to where the order will be shipped. */
  shippingAddress?: Maybe<MailingAddressInput>,
  /** A shipping line object, which details the shipping method used. */
  shippingLine?: Maybe<ShippingLineInput>,
  /** 
 * Additional short descriptors, commonly used for filtering and searching,
   * formatted as a string of comma-separated values.
 */
  tags?: Maybe<Array<Scalars['String']>>,
  /** 
 * Whether or not taxes are exempt for the draft order.
   * If false, then Shopify will refer to the taxable field for each line item.
   * If a customer is applied to the draft order, then Shopify will use the customer's tax exempt field instead.
 */
  taxExempt?: Maybe<Scalars['Boolean']>,
  /** Sent as part of a draft order object to load customer shipping information. */
  useCustomerDefaultAddress?: Maybe<Scalars['Boolean']>,
};

/** Return type for `draftOrderInvoicePreview` mutation. */
export type DraftOrderInvoicePreviewPayload = {
   __typename?: 'DraftOrderInvoicePreviewPayload',
  /** HTML to preview the draft order invoice email. */
  previewHtml?: Maybe<Scalars['HTML']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `draftOrderInvoiceSend` mutation. */
export type DraftOrderInvoiceSendPayload = {
   __typename?: 'DraftOrderInvoiceSendPayload',
  /** The draft order an invoice email is sent for. */
  draftOrder?: Maybe<DraftOrder>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Represents a line item included in a draft order. */
export type DraftOrderLineItem = Node & {
   __typename?: 'DraftOrderLineItem',
  /** Discount which will be applied to the line item or the overall order. */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscount>,
  /** 
 * Whether this is a product variant line item, or a custom line item.
   * If set to true indicates a custom line item. If set to false indicates a product variant line item.
 */
  custom: Scalars['Boolean'],
  /** List of additional information (metafields) about the line item. */
  customAttributes: Array<Attribute>,
  /** Line item price after discounts are applied. */
  discountedTotal: Scalars['Money'],
  /** The `discountedTotal` divided by `quantity`, resulting in the value of the discount per unit. */
  discountedUnitPrice: Scalars['Money'],
  /** 
 * Name of the service provider who fulfilled the order.
   * 
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
 */
  fulfillmentService: FulfillmentService,
  /** Weight in grams. Can only be specified if this is a custom line item. */
  grams?: Maybe<Scalars['Int']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Image associated with the draft order line item. */
  image?: Maybe<Image>,
  /** Whether the line item represents the puchase of a gift card. */
  isGiftCard: Scalars['Boolean'],
  /** Name of the product. */
  name: Scalars['String'],
  /** Total price (without discounts) of the line item, based on the original unit price of the variant x quantity. */
  originalTotal: Scalars['Money'],
  /** Variant price without any discounts applied. */
  originalUnitPrice: Scalars['Money'],
  /** The product corresponding to the line item’s product variant. */
  product?: Maybe<Product>,
  /** Number of variant items requested in the draft order. */
  quantity: Scalars['Int'],
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean'],
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>,
  /** A list of tax line objects, each of which details the total taxes applicable to the order. */
  taxLines: Array<TaxLine>,
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean'],
  /** Title of the product or variant (this field only applies to custom line items). */
  title: Scalars['String'],
  /** Total value of the discount applied to the line item. */
  totalDiscount: Scalars['Money'],
  /** Associated variant for the line item. */
  variant?: Maybe<ProductVariant>,
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>,
  /** Name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>,
  /** Weight unit and value for a draft order line item. */
  weight?: Maybe<Weight>,
};


/** Represents a line item included in a draft order. */
export type DraftOrderLineItemimageArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  crop?: Maybe<CropRegion>,
  scale?: Maybe<Scalars['Int']>
};

export type DraftOrderLineItemConnection = {
   __typename?: 'DraftOrderLineItemConnection',
  /** A list of edges. */
  edges: Array<DraftOrderLineItemEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type DraftOrderLineItemEdge = {
   __typename?: 'DraftOrderLineItemEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of DraftOrderLineItemEdge. */
  node: DraftOrderLineItem,
};

/** The input fields used to create a line item for a draft order. */
export type DraftOrderLineItemInput = {
  /** Discount which will be applied to the line item. */
  appliedDiscount?: Maybe<DraftOrderAppliedDiscountInput>,
  /** Represents a generic custom attribute using a key value pair. */
  customAttributes?: Maybe<Array<AttributeInput>>,
  /** Ignored when variant ID is provided. This argument is deprecated: Use `weight` instead. */
  grams?: Maybe<Scalars['Int']>,
  /** Ignored when variant ID is provided. */
  originalUnitPrice?: Maybe<Scalars['Money']>,
  /** The number of products that were purchased. */
  quantity: Scalars['Int'],
  /** Ignored when variant ID is provided. */
  requiresShipping?: Maybe<Scalars['Boolean']>,
  /** Ignored when variant ID is provided. */
  sku?: Maybe<Scalars['String']>,
  /** Ignored when variant ID is provided. */
  taxable?: Maybe<Scalars['Boolean']>,
  /** Ignored when variant ID is provided. */
  title?: Maybe<Scalars['String']>,
  /** 
 * The ID of the product variant corresponding to the line item.
   * Null if custom line item. Required if product variant line item.
 */
  variantId?: Maybe<Scalars['ID']>,
  /** 
 * Specifies the weight unit and value inputs.
   * Ignored when variant ID or product ID are provided.
 */
  weight?: Maybe<WeightInput>,
};

/** The set of valid sort keys for the draftOrders query. */
export enum DraftOrderSortKeys {
  /** Sort by the `number` value. */
  NUMBER = 'NUMBER',
  /** Sort by the `updated_at` value. */
  UPDATED_AT = 'UPDATED_AT',
  /** Sort by the `status` value. */
  STATUS = 'STATUS',
  /** Sort by the `total_price` value. */
  TOTAL_PRICE = 'TOTAL_PRICE',
  /** Sort by the `customer_name` value. */
  CUSTOMER_NAME = 'CUSTOMER_NAME',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** The valid statuses for a draft order. */
export enum DraftOrderStatus {
  /** The draft order has been paid. */
  COMPLETED = 'COMPLETED',
  /** An invoice for the draft order has been sent to the customer. */
  INVOICE_SENT = 'INVOICE_SENT',
  /** The draft order is open. It has not been paid, and an invoice hasn't been sent. */
  OPEN = 'OPEN'
}

/** Return type for `draftOrderUpdate` mutation. */
export type DraftOrderUpdatePayload = {
   __typename?: 'DraftOrderUpdatePayload',
  /** The updated draft order. */
  draftOrder?: Maybe<DraftOrder>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** The attribute editable information. */
export type EditableProperty = {
   __typename?: 'EditableProperty',
  /** Whether the attribute is locked for editing. */
  locked: Scalars['Boolean'],
  /** The reason the attribute is locked for editing. */
  reason?: Maybe<Scalars['FormattedString']>,
};

/** Specifies the fields for an email. */
export type EmailInput = {
  /** Specifies the email subject. */
  subject?: Maybe<Scalars['String']>,
  /** Specifies the email recipient. */
  to?: Maybe<Scalars['String']>,
  /** Specifies the email sender. */
  from?: Maybe<Scalars['String']>,
  /** Specifies the email body. */
  body?: Maybe<Scalars['String']>,
  /** Specifies any bcc recipients for the email. */
  bcc?: Maybe<Array<Scalars['String']>>,
  /** Specifies a custom message to include in the email. */
  customMessage?: Maybe<Scalars['String']>,
};

/** 
 * Events chronicle resource activities such as the creation of an article, the fulfillment of an order, or the
 * addition of a product.
 */
export type Event = {
  /** The name of the app that created the event. Returns null when the event originates from the Shopify admin. */
  appTitle?: Maybe<Scalars['String']>,
  /** Whether the event was created by an app. */
  attributeToApp: Scalars['Boolean'],
  /** Whether the event was caused by an admin user. */
  attributeToUser: Scalars['Boolean'],
  /** The date and time when the event was created. */
  createdAt: Scalars['DateTime'],
  /** Whether the event is critical. */
  criticalAlert: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Human readable text that describes the event. */
  message: Scalars['FormattedString'],
};

export type EventConnection = {
   __typename?: 'EventConnection',
  /** A list of edges. */
  edges: Array<EventEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type EventEdge = {
   __typename?: 'EventEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of EventEdge. */
  node: Event,
};

/** The set of valid sort keys for the events query. */
export enum EventSortKeys {
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** List of export formats available. */
export enum ExportFormat {
  EXCEL_CSV = 'EXCEL_CSV',
  PLAIN_CSV = 'PLAIN_CSV'
}

/** Specifies the sorting order for the facts of an assessment. */
export enum FactSortKeys {
  /** 
 * Facts are sorted by sentiment according to the assessment result.
   * For a low assessment they are sorted in ascending order of sentiment: positve, neutral, negative.
   * For any other assessment they are sorted in descending order of sentiment negative, neutral, positive.
 */
  RESULT = 'RESULT',
  /** The default value for the sort key returns the facts unsorted. */
  DEFAULT = 'DEFAULT'
}

/** Requirements that must be met before an app can be installed. */
export type FailedRequirement = {
   __typename?: 'FailedRequirement',
  /** Action to be taken to resolve a failed requirement, including URL link. */
  action?: Maybe<NavigationItem>,
  /** 
 * A concise set of copy strings to be displayed to merchants, to guide them in resolving problems your app
   * encounters when trying to make use of their Shop and its resources.
 */
  message: Scalars['String'],
};

/** A filter option is one possible value in a search filter. */
export type FilterOption = {
   __typename?: 'FilterOption',
  /** The filter option's label for display purposes. */
  label: Scalars['String'],
  /** The filter option's value. */
  value: Scalars['String'],
};

/** Return type for `flowTriggerReceive` mutation. */
export type FlowTriggerReceivePayload = {
   __typename?: 'FlowTriggerReceivePayload',
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};


/** The level of protection against fraudulent chargebacks. */
export enum FraudProtectionLevel {
  FULLY_PROTECTED = 'FULLY_PROTECTED',
  PARTIALLY_PROTECTED = 'PARTIALLY_PROTECTED',
  NOT_PROTECTED = 'NOT_PROTECTED',
  PENDING = 'PENDING',
  NOT_ELIGIBLE = 'NOT_ELIGIBLE',
  NOT_AVAILABLE = 'NOT_AVAILABLE'
}

/** 
 * Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one
 * or more items in an order. When an order has been completely fulfilled, it means
 * that all the items that are included in the order have been sent to the
 * customer. There can be more than one fulfillment for an order.
 */
export type Fulfillment = LegacyInteroperability & Node & {
   __typename?: 'Fulfillment',
  /** The date and time when the fulfillment was created. */
  createdAt: Scalars['DateTime'],
  /** The date that this fulfillment was delivered. */
  deliveredAt?: Maybe<Scalars['DateTime']>,
  /** Human readable display status for this fulfillment. */
  displayStatus?: Maybe<FulfillmentDisplayStatus>,
  /** The estimated date that this fulfillment will arrive. */
  estimatedDeliveryAt?: Maybe<Scalars['DateTime']>,
  /** The history of events associated with this fulfillment. */
  events: FulfillmentEventConnection,
  /** List of the fulfillment's line items. */
  fulfillmentLineItems: FulfillmentLineItemConnection,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The date and time when the fulfillment went into transit. */
  inTransitAt?: Maybe<Scalars['DateTime']>,
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** The location that the fulfillment was processed at. */
  location?: Maybe<Location>,
  /** Human readable reference identifier for this fulfillment. */
  name: Scalars['String'],
  /** Whether any of the line items in the fulfillment require shipping. */
  requiresShipping: Scalars['Boolean'],
  /** Fulfillment service associated with the fulfillment. */
  service?: Maybe<FulfillmentService>,
  /** The status of the fulfillment. */
  status: FulfillmentStatus,
  /** Sum of all line item quantities for the fulfillment. */
  totalQuantity: Scalars['Int'],
  /** 
 * Tracking information associated with the fulfillment,
   * such as the tracking company, tracking number, and tracking URL.
 */
  trackingInfo: Array<FulfillmentTrackingInfo>,
  /** The date and time when the fulfillment was last modified. */
  updatedAt: Scalars['DateTime'],
};


/** 
 * Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one
 * or more items in an order. When an order has been completely fulfilled, it means
 * that all the items that are included in the order have been sent to the
 * customer. There can be more than one fulfillment for an order.
 */
export type FulfillmenteventsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<FulfillmentEventSortKeys>
};


/** 
 * Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one
 * or more items in an order. When an order has been completely fulfilled, it means
 * that all the items that are included in the order have been sent to the
 * customer. There can be more than one fulfillment for an order.
 */
export type FulfillmentfulfillmentLineItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * Represents a fulfillment. In Shopify, a fulfillment represents a shipment of one
 * or more items in an order. When an order has been completely fulfilled, it means
 * that all the items that are included in the order have been sent to the
 * customer. There can be more than one fulfillment for an order.
 */
export type FulfillmenttrackingInfoArgs = {
  first?: Maybe<Scalars['Int']>
};

/** The actions that can be taken on a fulfillment. */
export enum FulfillmentAction {
  /** Create a fulfillment. */
  CREATE_FULFILLMENT = 'CREATE_FULFILLMENT',
  /** Purchase a shipping label. */
  PURCHASE_LABEL = 'PURCHASE_LABEL'
}

/** Return type for `fulfillmentCreate` mutation. */
export type FulfillmentCreatePayload = {
   __typename?: 'FulfillmentCreatePayload',
  /** The created fulfillment. */
  fulfillment?: Maybe<Fulfillment>,
  /** The order for which the fulfillment is created. */
  order?: Maybe<Order>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** The display status of a fulfillment. */
export enum FulfillmentDisplayStatus {
  /** Displayed as **Attempted delivery**. */
  ATTEMPTED_DELIVERY = 'ATTEMPTED_DELIVERY',
  /** Displayed as **Canceled**. */
  CANCELED = 'CANCELED',
  /** Displayed as **Confirmed**. */
  CONFIRMED = 'CONFIRMED',
  /** Displayed as **Delivered**. */
  DELIVERED = 'DELIVERED',
  /** Displayed as **Failure**. */
  FAILURE = 'FAILURE',
  /** Displayed as **Fulfilled**. */
  FULFILLED = 'FULFILLED',
  /** Displayed as **In transit**. */
  IN_TRANSIT = 'IN_TRANSIT',
  /** Displayed as **Label printed**. */
  LABEL_PRINTED = 'LABEL_PRINTED',
  /** Displayed as **Label purchased**. */
  LABEL_PURCHASED = 'LABEL_PURCHASED',
  /** Displayed as **Label voided**. */
  LABEL_VOIDED = 'LABEL_VOIDED',
  /** Displayed as **Marked as fulfilled**. */
  MARKED_AS_FULFILLED = 'MARKED_AS_FULFILLED',
  /** Displayed as **Not delivered**. */
  NOT_DELIVERED = 'NOT_DELIVERED',
  /** Displayed as **Out for delivery**. */
  OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
  /** Displayed as **Ready for pickup**. */
  READY_FOR_PICKUP = 'READY_FOR_PICKUP',
  /** Displayed as **Submitted**. */
  SUBMITTED = 'SUBMITTED'
}

export type FulfillmentEdge = {
   __typename?: 'FulfillmentEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of FulfillmentEdge. */
  node: Fulfillment,
};

/** An event that describes a fulfillment at a time. */
export type FulfillmentEvent = Node & {
   __typename?: 'FulfillmentEvent',
  /** The time at which this fulfillment event happened. */
  happenedAt: Scalars['DateTime'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The status of this fulfillment event. */
  status: FulfillmentEventStatus,
};

export type FulfillmentEventConnection = {
   __typename?: 'FulfillmentEventConnection',
  /** A list of edges. */
  edges: Array<FulfillmentEventEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type FulfillmentEventEdge = {
   __typename?: 'FulfillmentEventEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of FulfillmentEventEdge. */
  node: FulfillmentEvent,
};

/** The set of valid sort keys for the events query. */
export enum FulfillmentEventSortKeys {
  /** Sort by the `happened_at` value. */
  HAPPENED_AT = 'HAPPENED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** Event status' describe the status of a fulfillment. */
export enum FulfillmentEventStatus {
  /** A shipping label has been purchased. */
  LABEL_PURCHASED = 'LABEL_PURCHASED',
  /** A purchased shipping label has been printed. */
  LABEL_PRINTED = 'LABEL_PRINTED',
  /** The fulfillment is ready to be picked up. */
  READY_FOR_PICKUP = 'READY_FOR_PICKUP',
  /** The fulfillment is confirmed. */
  CONFIRMED = 'CONFIRMED',
  /** The fulfillment is in transit. */
  IN_TRANSIT = 'IN_TRANSIT',
  /** The fulfillment is out for delivery. */
  OUT_FOR_DELIVERY = 'OUT_FOR_DELIVERY',
  /** A delivery was attempted. */
  ATTEMPTED_DELIVERY = 'ATTEMPTED_DELIVERY',
  /** The fulfillment was successfully delivered. */
  DELIVERED = 'DELIVERED',
  /** The fulfillment request failed. */
  FAILURE = 'FAILURE'
}

/** The input fields used to create a fulfillment. */
export type FulfillmentInput = {
  /** The ID of the order to be fulfilled. */
  orderId: Scalars['ID'],
  /** The line items to be fulfilled. */
  lineItems?: Maybe<Array<FulfillmentLineItemInput>>,
  /** Tracking numbers associated with the fulfillment. */
  trackingNumbers?: Maybe<Array<Scalars['String']>>,
  /** The URLs to track the fulfillment. */
  trackingUrls?: Maybe<Array<Scalars['String']>>,
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>,
  /** 
 * Whether the customer is notified.
   * If set to true, a notification is sent when the fulfillment is created.
 */
  notifyCustomer?: Maybe<Scalars['Boolean']>,
  /** A reference to the shipping method, such as `Free Shipping`. */
  shippingMethod?: Maybe<Scalars['String']>,
  /** The ID of the location from which the items will be fulfilled. */
  locationId: Scalars['ID'],
};

/** Represents a line item from an order that's included in a fulfillment. */
export type FulfillmentLineItem = Node & {
   __typename?: 'FulfillmentLineItem',
  /** The total price after discounts are applied. */
  discountedTotal: Scalars['Money'],
  /** The total price after discounts are applied in shop and presentment currencies. */
  discountedTotalSet: MoneyBag,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The associated order's line item. */
  lineItem: LineItem,
  /** The total price before discounts are applied. */
  originalTotal: Scalars['Money'],
  /** The total price before discounts are applied in shop and presentment currencies. */
  originalTotalSet: MoneyBag,
  /** Number of line items in the fulfillment. */
  quantity?: Maybe<Scalars['Int']>,
};

export type FulfillmentLineItemConnection = {
   __typename?: 'FulfillmentLineItemConnection',
  /** A list of edges. */
  edges: Array<FulfillmentLineItemEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type FulfillmentLineItemEdge = {
   __typename?: 'FulfillmentLineItemEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of FulfillmentLineItemEdge. */
  node: FulfillmentLineItem,
};

/** The input fields used to include a line item from an order in a fulfillment. */
export type FulfillmentLineItemInput = {
  /** The ID of the line item. */
  id: Scalars['ID'],
  /** The quantity of the line item to be fulfilled. */
  quantity?: Maybe<Scalars['Int']>,
};

/** 
 * Represents a fulfillment service. A fulfillment service is a third-party service
 * that prepares and ships orders on behalf of the store owner.
 */
export type FulfillmentService = {
   __typename?: 'FulfillmentService',
  /** Human-readable unique identifier for this fulfillment service. */
  handle: Scalars['String'],
  /** The ID of the fulfillment service. */
  id: Scalars['ID'],
  /** Whether the fulfillment service tracks product inventory and provides updates to Shopify. */
  inventoryManagement: Scalars['Boolean'],
  /** Location associated with the fulfillment service. */
  location?: Maybe<Location>,
  /** Whether the fulfillment service supports local deliveries. */
  productBased: Scalars['Boolean'],
  /** The name of the fulfillment service as seen by merchants. */
  serviceName: Scalars['String'],
  /** Shipping methods associated with the fulfillment service provider. */
  shippingMethods: Array<ShippingMethod>,
  /** Type associated with the fulfillment service. */
  type: FulfillmentServiceType,
};

/** Return type for `fulfillmentServiceCreate` mutation. */
export type FulfillmentServiceCreatePayload = {
   __typename?: 'FulfillmentServiceCreatePayload',
  /** The created fulfillment service. */
  fulfillmentService?: Maybe<FulfillmentService>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `fulfillmentServiceDelete` mutation. */
export type FulfillmentServiceDeletePayload = {
   __typename?: 'FulfillmentServiceDeletePayload',
  /** The ID of the deleted fulfillment service. */
  deletedId?: Maybe<Scalars['ID']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** The type of a fulfillment service. */
export enum FulfillmentServiceType {
  /** Fulfillment by gift card. */
  GIFT_CARD = 'GIFT_CARD',
  /** Manual fulfillment by the merchant. */
  MANUAL = 'MANUAL',
  /** Fullfillment by a third-party fulfillment service. */
  THIRD_PARTY = 'THIRD_PARTY'
}

/** Return type for `fulfillmentServiceUpdate` mutation. */
export type FulfillmentServiceUpdatePayload = {
   __typename?: 'FulfillmentServiceUpdatePayload',
  /** The updated fulfillment service. */
  fulfillmentService?: Maybe<FulfillmentService>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** The status of a fulfillment. */
export enum FulfillmentStatus {
  /** 
 * Shopify has created the fulfillment and is waiting for the third-party
   * fulfillment service to transition it to `open` or `success`.
 */
  PENDING = 'PENDING',
  /** The third-party fulfillment service has acknowledged the fulfilment and is processing it. */
  OPEN = 'OPEN',
  /** The fulfillment was completed successfully. */
  SUCCESS = 'SUCCESS',
  /** The fulfillment was canceled. */
  CANCELLED = 'CANCELLED',
  /** There was an error with the fulfillment request. */
  ERROR = 'ERROR',
  /** The fulfillment request failed. */
  FAILURE = 'FAILURE'
}

/** Represents the tracking information for a fulfillment. */
export type FulfillmentTrackingInfo = {
   __typename?: 'FulfillmentTrackingInfo',
  /** The name of the tracking company. */
  company?: Maybe<Scalars['String']>,
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>,
  /** The URLs to track the fulfillment. */
  url?: Maybe<Scalars['URL']>,
};

/** Return type for `fulfillmentTrackingInfoUpdate` mutation. */
export type FulfillmentTrackingInfoUpdatePayload = {
   __typename?: 'FulfillmentTrackingInfoUpdatePayload',
  /** The updated fulfillment with tracking information. */
  fulfillment?: Maybe<Fulfillment>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Connector to event records on a compatible host. */
export type HasEvents = {
  /** The paginated list of events associated with the host subject. */
  events: EventConnection,
};


/** Connector to event records on a compatible host. */
export type HasEventseventsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<EventSortKeys>,
  query?: Maybe<Scalars['String']>
};

/** Represents information about the metafields associated to the specified resource. */
export type HasMetafields = {
  /** The metafield associated with the resource. */
  metafield?: Maybe<Metafield>,
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection,
  /** Returns a private metafield found by namespace and key. */
  privateMetafield?: Maybe<PrivateMetafield>,
  /** List of private metafields. */
  privateMetafields: PrivateMetafieldConnection,
};


/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsmetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsmetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsprivateMetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents information about the metafields associated to the specified resource. */
export type HasMetafieldsprivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** Published translations associated with the resource. */
export type HasPublishedTranslations = {
  /** The translations associated with the resource. */
  translations: Array<PublishedTranslation>,
};


/** Published translations associated with the resource. */
export type HasPublishedTranslationstranslationsArgs = {
  locale: Scalars['String']
};


/** Represents an image resource. */
export type Image = HasMetafields & {
   __typename?: 'Image',
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>,
  /** A unique identifier for the image. */
  id?: Maybe<Scalars['ID']>,
  /** The metafield associated with the resource. */
  metafield?: Maybe<Metafield>,
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection,
  /** 
 * The location of the original image as a URL.
   * 
   * If there are any existing transformations in the original source URL, they will remain and not be stripped.
 */
  originalSrc: Scalars['URL'],
  /** Returns a private metafield found by namespace and key. */
  privateMetafield?: Maybe<PrivateMetafield>,
  /** List of private metafields. */
  privateMetafields: PrivateMetafieldConnection,
  /** The location of the image as a URL. */
  src: Scalars['URL'],
  /** 
 * The location of the transformed image as a URL.
   * 
   * All transformation arguments are considered "best-effort". If they can be applied to an image, they will be.
   * Otherwise any transformations which an image type does not support will be ignored.
 */
  transformedSrc: Scalars['URL'],
};


/** Represents an image resource. */
export type ImagemetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents an image resource. */
export type ImagemetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents an image resource. */
export type ImageprivateMetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents an image resource. */
export type ImageprivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents an image resource. */
export type ImagetransformedSrcArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  crop?: Maybe<CropRegion>,
  scale?: Maybe<Scalars['Int']>,
  preferredContentType?: Maybe<ImageContentType>
};

export type ImageConnection = {
   __typename?: 'ImageConnection',
  /** A list of edges. */
  edges: Array<ImageEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** List of supported image content types. */
export enum ImageContentType {
  PNG = 'PNG',
  JPG = 'JPG',
  WEBP = 'WEBP'
}

export type ImageEdge = {
   __typename?: 'ImageEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of ImageEdge. */
  node: Image,
};

/** Specifies the input fields for an image. */
export type ImageInput = {
  /** Globally unique identifier. */
  id?: Maybe<Scalars['ID']>,
  /** A word or phrase to share the nature or contents of an image. */
  altText?: Maybe<Scalars['String']>,
  /** The URL of the image. May be a signed upload URL. */
  src?: Maybe<Scalars['String']>,
};

/** Upload parameter of an image. */
export type ImageUploadParameter = {
   __typename?: 'ImageUploadParameter',
  /** Parameter name. */
  name: Scalars['String'],
  /** Parameter value. */
  value: Scalars['String'],
};

/** Return type for `inventoryActivate` mutation. */
export type InventoryActivatePayload = {
   __typename?: 'InventoryActivatePayload',
  /** The newly activated inventory level. */
  inventoryLevel?: Maybe<InventoryLevel>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Specifies the items and their adjustments. */
export type InventoryAdjustItemInput = {
  /** ID of the inventory item to adjust. */
  inventoryItemId: Scalars['ID'],
  /** Count by which to adjust the available quantity. */
  availableDelta: Scalars['Int'],
};

/** Specifies the fields required to adjust the inventory quantity. */
export type InventoryAdjustQuantityInput = {
  /** ID of the inventory level to adjust. */
  inventoryLevelId: Scalars['ID'],
  /** Count by which to adjust the available quantity. */
  availableDelta: Scalars['Int'],
};

/** Return type for `inventoryAdjustQuantity` mutation. */
export type InventoryAdjustQuantityPayload = {
   __typename?: 'InventoryAdjustQuantityPayload',
  /** Represents the updated inventory quantity of an inventory item at a specific location. */
  inventoryLevel?: Maybe<InventoryLevel>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `inventoryBulkAdjustQuantityAtLocation` mutation. */
export type InventoryBulkAdjustQuantityAtLocationPayload = {
   __typename?: 'InventoryBulkAdjustQuantityAtLocationPayload',
  /** The updated inventory quantities. */
  inventoryLevels?: Maybe<Array<InventoryLevel>>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `inventoryDeactivate` mutation. */
export type InventoryDeactivatePayload = {
   __typename?: 'InventoryDeactivatePayload',
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** 
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type InventoryItem = Node & LegacyInteroperability & {
   __typename?: 'InventoryItem',
  /** The ISO code of the country of origin. */
  countryCodeOfOrigin?: Maybe<CountryCode>,
  /** List of country specific harmonized system codes. */
  countryHarmonizedSystemCodes: CountryHarmonizedSystemCodeConnection,
  /** The date and time when the inventory item was created. */
  createdAt: Scalars['DateTime'],
  /** The number of inventory items that share the same SKU with this item. */
  duplicateSkuCount: Scalars['Int'],
  /** The harmonized system code of the item. */
  harmonizedSystemCode?: Maybe<Scalars['String']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** URL for inventory history web page. */
  inventoryHistoryUrl?: Maybe<Scalars['URL']>,
  /** Get the inventory level at a specific location. */
  inventoryLevel?: Maybe<InventoryLevel>,
  /** Paginated list of inventory levels for each location that the inventory item is stocked at. */
  inventoryLevels: InventoryLevelConnection,
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** The number of locations where this inventory item is stocked. */
  locationsCount: Scalars['Int'],
  /** The ISO code of the province of origin. */
  provinceCodeOfOrigin?: Maybe<Scalars['String']>,
  /** Whether the item requires shipping or not. */
  requiresShipping: Scalars['Boolean'],
  /** Inventory item SKU. */
  sku?: Maybe<Scalars['String']>,
  /** Whether the inventory quantities of inventory levels for the item are tracked or not. */
  tracked: Scalars['Boolean'],
  /** Whether changes to the inventory item tracked attribute are allowed. */
  trackedEditable: EditableProperty,
  /** Unit cost associated with the inventory item. */
  unitCost?: Maybe<MoneyV2>,
  /** The date and time when the inventory item was updated. */
  updatedAt: Scalars['DateTime'],
  /** The variant that owns this inventory item. */
  variant: ProductVariant,
};


/** 
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type InventoryItemcountryHarmonizedSystemCodesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type InventoryIteminventoryLevelArgs = {
  locationId: Scalars['ID']
};


/** 
 * Represents the goods available to be shipped to a customer.
 * It holds essential information about the goods, including SKU and whether it is tracked.
 */
export type InventoryIteminventoryLevelsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  query?: Maybe<Scalars['String']>
};

export type InventoryItemConnection = {
   __typename?: 'InventoryItemConnection',
  /** A list of edges. */
  edges: Array<InventoryItemEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type InventoryItemEdge = {
   __typename?: 'InventoryItemEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of InventoryItemEdge. */
  node: InventoryItem,
};

/** Inventory items. */
export type InventoryItemInput = {
  /** Unit cost associated with the inventory item, the currency is the shop's default currency. */
  cost?: Maybe<Scalars['Decimal']>,
  /** Whether the inventory item is tracked. */
  tracked?: Maybe<Scalars['Boolean']>,
};

/** Inventory items. */
export type InventoryItemUpdateInput = {
  /** Unit cost associated with the inventory item, the currency is the shop's default currency. */
  cost?: Maybe<Scalars['Decimal']>,
  /** Whether the inventory item is tracked. */
  tracked?: Maybe<Scalars['Boolean']>,
  /** The ISO code of the country of origin. */
  countryCodeOfOrigin?: Maybe<CountryCode>,
  /** The ISO code of the province of origin. */
  provinceCodeOfOrigin?: Maybe<Scalars['String']>,
  /** The harmonized system code of the inventory item. */
  harmonizedSystemCode?: Maybe<Scalars['String']>,
  /** List of country-specific harmonized system codes. */
  countryHarmonizedSystemCodes?: Maybe<Array<CountryHarmonizedSystemCodeInput>>,
};

/** Return type for `inventoryItemUpdate` mutation. */
export type InventoryItemUpdatePayload = {
   __typename?: 'InventoryItemUpdatePayload',
  /** The updated inventory item. */
  inventoryItem?: Maybe<InventoryItem>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Represents the inventory quantity of an inventory item at a specific location. */
export type InventoryLevel = Node & {
   __typename?: 'InventoryLevel',
  /** Quantity of items available at the location. */
  available: Scalars['Int'],
  /** Whether inventoryDeactivate is allowed for this inventory level. */
  canDeactivate: Scalars['Boolean'],
  /** The date and time when the inventory level was created. */
  createdAt: Scalars['DateTime'],
  /** Reason why canDeactivate is false, or impact of deactivating the inventory level. */
  deactivationAlert?: Maybe<Scalars['String']>,
  /** Reason why canDeactivate is false with URLs linked in HTML, or impact of deactivating the inventory level. */
  deactivationAlertHtml?: Maybe<Scalars['FormattedString']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Quantity of items incoming to the location. */
  incoming: Scalars['Int'],
  /** Inventory item associated with the inventory level. */
  item: InventoryItem,
  /** Location associated with the inventory level. */
  location: Location,
  /** The date and time when the inventory level was updated. */
  updatedAt: Scalars['DateTime'],
};

export type InventoryLevelConnection = {
   __typename?: 'InventoryLevelConnection',
  /** A list of edges. */
  edges: Array<InventoryLevelEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type InventoryLevelEdge = {
   __typename?: 'InventoryLevelEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of InventoryLevelEdge. */
  node: InventoryLevel,
};

/** Inventory quantity at a specific location. */
export type InventoryLevelInput = {
  /** Sets the quantity available at the location. */
  availableQuantity: Scalars['Int'],
  /** ID of the location. */
  locationId: Scalars['ID'],
};

/** A job corresponds to some long running task that the client should poll for status. */
export type Job = {
   __typename?: 'Job',
  /** This indicates if the job is still queued or has been run. */
  done: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** This field will only resolve once the job is done. Can be used to ask for object(s) that have been changed by the job. */
  query?: Maybe<QueryRoot>,
};


/** The locale language allowed for Kit Skill. */
export enum KitSkillLocale {
  /** English language. */
  EN = 'EN'
}

/** Return type for `kitSkillTriggerRequest` mutation. */
export type KitSkillTriggerRequestPayload = {
   __typename?: 'KitSkillTriggerRequestPayload',
  /** Conversation unique identifier sent to Conversation API and returned to app developer. */
  conversationUid?: Maybe<Scalars['String']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** 
 * Interoperability metadata for types that directly correspond to a REST Admin API resource.
 * For example, on the Product type, LegacyInteroperability returns metadata for
 * the corresponding [Product
 * object](https://help.shopify.com/api/reference/products/product) in the REST Admin API.
 */
export type LegacyInteroperability = {
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
};

/** Units of measurement for length. */
export enum LengthUnit {
  /** 1000 millimeters equals 1 meter. */
  MILLIMETERS = 'MILLIMETERS',
  /** 100 centimeters equals 1 meter. */
  CENTIMETERS = 'CENTIMETERS',
  /** Metric system unit of length. */
  METERS = 'METERS',
  /** 12 inches equals 1 foot. */
  INCHES = 'INCHES',
  /** Imperial system unit of length. */
  FEET = 'FEET',
  /** 1 yard equals 3 feet. */
  YARDS = 'YARDS'
}

/** 
 * The total number of pending orders on a shop if less then a maximum, or that maximum.
 * The atMax field indicates when this maximum has been reached.
 */
export type LimitedPendingOrderCount = {
   __typename?: 'LimitedPendingOrderCount',
  /** This is set when the number of pending orders has reached the maximum. */
  atMax: Scalars['Boolean'],
  /** 
 * The number of pendings orders on the shop.
   * Limited to a maximum of 10000.
 */
  count: Scalars['Int'],
};

/** Represents a single line in a shopping cart. */
export type LineItem = Node & {
   __typename?: 'LineItem',
  /** Whether the line item's variant has an ID and inventory is managed by Shopify. */
  canRestock: Scalars['Boolean'],
  /** List of additional information (metafields) about the line item. */
  customAttributes: Array<Attribute>,
  /** The discounts that have been allocated onto the line item by discount applications. */
  discountAllocations: Array<DiscountAllocation>,
  /** The total line price after discounts are applied. */
  discountedTotal: Scalars['Money'],
  /** The total line price after discounts are applied in shop and presentment currencies. */
  discountedTotalSet: MoneyBag,
  /** The price of a single variant unit after line item discounts are applied. */
  discountedUnitPrice: Scalars['Money'],
  /** The price of a single variant unit after line item discounts are applied in shop and presentment currencies. */
  discountedUnitPriceSet: MoneyBag,
  /** The total number of units to fulfill. */
  fulfillableQuantity: Scalars['Int'],
  /** 
 * Name of the service provider who fulfilled the order.
   * 
   * Valid values are either **manual** or the name of the provider.
   * For example, **amazon**, **shipwire**.
 */
  fulfillmentService: FulfillmentService,
  /** 
 * The line item's fulfillment status. Returns 'fulfilled' if fulfillableQuantity >= quantity,
   * 'partial' if  fulfillableQuantity > 0, and 'unfulfilled' otherwise.
 */
  fulfillmentStatus: Scalars['String'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The Image object associated to the line item's variant. */
  image?: Maybe<Image>,
  /** Whether the line item can be edited or not. */
  merchantEditable: Scalars['Boolean'],
  /** Name of the product. */
  name: Scalars['String'],
  /** A count of the number of line items that cannot be fulfilled. */
  nonFulfillableQuantity: Scalars['Int'],
  /** Total price (without discounts) of the line item, based on the original unit price of the variant x quantity. */
  originalTotal: Scalars['Money'],
  /** 
 * Total price (without discounts) of the line item, based on the original unit
   * price of the  variant x quantity in shop and presentment currencies.
 */
  originalTotalSet: MoneyBag,
  /** Variant price without any discounts applied. */
  originalUnitPrice: Scalars['Money'],
  /** Variant price without any discounts applied in shop and presentment currencies. */
  originalUnitPriceSet: MoneyBag,
  /** The Product object associated with this line item's variant. */
  product?: Maybe<Product>,
  /** Number of variant items ordered. */
  quantity: Scalars['Int'],
  /** The line item's quantity minus its refundedQuantity. */
  refundableQuantity: Scalars['Int'],
  /** Whether physical shipping is required for the variant. */
  requiresShipping: Scalars['Boolean'],
  /** Whether the line item's variant has an ID and inventory is managed by Shopify. */
  restockable: Scalars['Boolean'],
  /** Variant SKU number. */
  sku?: Maybe<Scalars['String']>,
  /** The TaxLine object connected to this line item. */
  taxLines: Array<TaxLine>,
  /** Whether the variant is taxable. */
  taxable: Scalars['Boolean'],
  /** Title of the product or variant (this field only applies to custom line items). */
  title: Scalars['String'],
  /** The sum of all AppliedDiscounts on this line item. */
  totalDiscount: Scalars['Money'],
  /** The sum of all AppliedDiscounts on this line item in shop and presentment currencies. */
  totalDiscountSet: MoneyBag,
  /** The total discounted value of unfulfilled units. */
  unfulfilledDiscountedTotal: Scalars['Money'],
  /** The total discounted value of unfulfilled units in shop and presentment currencies. */
  unfulfilledDiscountedTotalSet: MoneyBag,
  /** The total value before discount of all unfulfilled units. */
  unfulfilledOriginalTotal: Scalars['Money'],
  /** The total value before discount of all unfulfilled units in shop and presentment currencies. */
  unfulfilledOriginalTotalSet: MoneyBag,
  /** The number of units not yet fulfilled. */
  unfulfilledQuantity: Scalars['Int'],
  /** The Variant object associated with this line item. */
  variant?: Maybe<ProductVariant>,
  /** Name of the variant. */
  variantTitle?: Maybe<Scalars['String']>,
  /** Name of the vendor who made the variant. */
  vendor?: Maybe<Scalars['String']>,
};


/** Represents a single line in a shopping cart. */
export type LineItemimageArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  crop?: Maybe<CropRegion>,
  scale?: Maybe<Scalars['Int']>
};


/** Represents a single line in a shopping cart. */
export type LineItemtaxLinesArgs = {
  first?: Maybe<Scalars['Int']>
};

export type LineItemConnection = {
   __typename?: 'LineItemConnection',
  /** A list of edges. */
  edges: Array<LineItemEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type LineItemEdge = {
   __typename?: 'LineItemEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of LineItemEdge. */
  node: LineItem,
};

/** A link to direct users to. */
export type Link = HasPublishedTranslations & {
   __typename?: 'Link',
  /** A context-sensitive label for the link. */
  label: Scalars['String'],
  /** The translations associated with the resource. */
  translations: Array<PublishedTranslation>,
  /** The URL that the link visits. */
  url: Scalars['URL'],
};


/** A link to direct users to. */
export type LinktranslationsArgs = {
  locale: Scalars['String']
};


/** Represents the location where the physical good resides. */
export type Location = Node & LegacyInteroperability & {
   __typename?: 'Location',
  /** Whether this location can be reactivated. */
  activatable: Scalars['Boolean'],
  /** The LocationAddress object for location. */
  address: LocationAddress,
  /** Whether the location address has been verified. */
  addressVerified: Scalars['Boolean'],
  /** Whether this location can be deactivated. */
  deactivatable: Scalars['Boolean'],
  /** 
 * Date and time the location was deactivated (null if location is still active).
   * Following UTC ISO8601 format, e.g.: "2019-04-24T13:42:24Z".
 */
  deactivatedAt?: Maybe<Scalars['String']>,
  /** Whether this location can be deleted. */
  deletable: Scalars['Boolean'],
  /** Name of the service provider that fulfills from this location. */
  fulfillmentService?: Maybe<FulfillmentService>,
  /** Indicates whether this location can fulfill online orders. */
  fulfillsOnlineOrders: Scalars['Boolean'],
  /** Indicates whether or not this location has active inventory. */
  hasActiveInventory: Scalars['Boolean'],
  /** Indicates whether or not this location has unfulfilled orders. */
  hasUnfulfilledOrders: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** A single inventory level for the given inventory item. */
  inventoryLevel?: Maybe<InventoryLevel>,
  /** Paginated list of inventory levels for inventory items stocked at the location. */
  inventoryLevels: InventoryLevelConnection,
  /** Whether the location is active. */
  isActive: Scalars['Boolean'],
  /** Whether the location is your primary location for shipping inventory. */
  isPrimary: Scalars['Boolean'],
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** The name of the location. */
  name: Scalars['String'],
  /** Indicates whether or not this location ships inventory. */
  shipsInventory: Scalars['Boolean'],
  /** List of suggested addresses for this location (empty if none). */
  suggestedAddresses: Array<LocationSuggestedAddress>,
};


/** Represents the location where the physical good resides. */
export type LocationinventoryLevelArgs = {
  inventoryItemId: Scalars['ID']
};


/** Represents the location where the physical good resides. */
export type LocationinventoryLevelsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  query?: Maybe<Scalars['String']>
};

/** Represents the address of the location. */
export type LocationAddress = {
   __typename?: 'LocationAddress',
  /** The first line of the address for the location. */
  address1?: Maybe<Scalars['String']>,
  /** The second line of the address for the location. */
  address2?: Maybe<Scalars['String']>,
  /** The city of the location. */
  city?: Maybe<Scalars['String']>,
  /** The country of the location. */
  country?: Maybe<Scalars['String']>,
  /** The two-letter country code of the location. */
  countryCode?: Maybe<Scalars['String']>,
  /** A formatted version of the location address. */
  formatted: Array<Scalars['String']>,
  /** The latitude coordinates of the location. */
  latitude?: Maybe<Scalars['Float']>,
  /** The longitude coordinates of the location. */
  longitude?: Maybe<Scalars['Float']>,
  /** The phone number of the location. */
  phone?: Maybe<Scalars['String']>,
  /** The province of the location. */
  province?: Maybe<Scalars['String']>,
  /** 
 * The code for the region of the address, such as the province, state, or district.
   * For example QC for Quebec, Canada.
 */
  provinceCode?: Maybe<Scalars['String']>,
  /** The ZIP code of the location. */
  zip?: Maybe<Scalars['String']>,
};

export type LocationConnection = {
   __typename?: 'LocationConnection',
  /** A list of edges. */
  edges: Array<LocationEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type LocationEdge = {
   __typename?: 'LocationEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of LocationEdge. */
  node: Location,
};

/** The set of valid sort keys for the locations query. */
export enum LocationSortKeys {
  /** Sort by the `name` value. */
  NAME = 'NAME',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** Represents a suggested address for a location. */
export type LocationSuggestedAddress = {
   __typename?: 'LocationSuggestedAddress',
  /** The first line of the suggested address. */
  address1?: Maybe<Scalars['String']>,
  /** The second line of the suggested address. */
  address2?: Maybe<Scalars['String']>,
  /** The city of the suggested address. */
  city?: Maybe<Scalars['String']>,
  /** The country of the suggested address. */
  country?: Maybe<Scalars['String']>,
  /** The country code of the suggested address. */
  countryCode?: Maybe<CountryCode>,
  /** A formatted version of the suggested address. */
  formatted: Array<Scalars['String']>,
  /** The province of the suggested address. */
  province?: Maybe<Scalars['String']>,
  /** The province code of the suggested address. */
  provinceCode?: Maybe<Scalars['String']>,
  /** The ZIP code of the suggested address. */
  zip?: Maybe<Scalars['String']>,
};

/** 
 * Represents a customer mailing address.
 * 
 * For example, a customer's default address and an order's billing address are both mailling addresses.
 */
export type MailingAddress = Node & {
   __typename?: 'MailingAddress',
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>,
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>,
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>,
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>,
  /** The name of the country. */
  country?: Maybe<Scalars['String']>,
  /** 
 * The two-letter code for the country of the address.
   * 
   * For example, US.
 */
  countryCode?: Maybe<Scalars['String']>,
  /** 
 * The two-letter code for the country of the address.
   * 
   * For example, US.
 */
  countryCodeV2?: Maybe<CountryCode>,
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>,
  /** A formatted version of the address, customized by the provided arguments. */
  formatted: Array<Scalars['String']>,
  /** A comma-separated list of the values for city, province, and country. */
  formattedArea?: Maybe<Scalars['String']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>,
  /** The latitude coordinate of the customer address. */
  latitude?: Maybe<Scalars['Float']>,
  /** The longitude coordinate of the customer address. */
  longitude?: Maybe<Scalars['Float']>,
  /** The full name of the customer, based on firstName and lastName. */
  name?: Maybe<Scalars['String']>,
  /** 
 * A unique phone number for the customer.
   * 
   * Formatted using E.164 standard. For example, _+16135551111_.
 */
  phone?: Maybe<Scalars['String']>,
  /** The region of the address, such as the province, state, or district. */
  province?: Maybe<Scalars['String']>,
  /** 
 * The two-letter code for the region.
   * 
   * For example, ON.
 */
  provinceCode?: Maybe<Scalars['String']>,
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>,
};


/** 
 * Represents a customer mailing address.
 * 
 * For example, a customer's default address and an order's billing address are both mailling addresses.
 */
export type MailingAddressformattedArgs = {
  withName?: Maybe<Scalars['Boolean']>,
  withCompany?: Maybe<Scalars['Boolean']>
};

export type MailingAddressEdge = {
   __typename?: 'MailingAddressEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of MailingAddressEdge. */
  node: MailingAddress,
};

/** The fields used to create or update a mailing address. */
export type MailingAddressInput = {
  /** The first line of the address. Typically the street address or PO Box number. */
  address1?: Maybe<Scalars['String']>,
  /** The second line of the address. Typically the number of the apartment, suite, or unit. */
  address2?: Maybe<Scalars['String']>,
  /** The name of the city, district, village, or town. */
  city?: Maybe<Scalars['String']>,
  /** The name of the customer's company or organization. */
  company?: Maybe<Scalars['String']>,
  /** The name of the country. This argument is deprecated: Use `countryCode` instead. */
  country?: Maybe<Scalars['String']>,
  /** The two-letter code for the country of the address. */
  countryCode?: Maybe<CountryCode>,
  /** The first name of the customer. */
  firstName?: Maybe<Scalars['String']>,
  /** This argument is deprecated: Not needed for 90% of mutations, and provided separately where it is needed. */
  id?: Maybe<Scalars['ID']>,
  /** The last name of the customer. */
  lastName?: Maybe<Scalars['String']>,
  /** 
 * A unique phone number for the customer.
   * 
   * Formatted using E.164 standard. For example, _+16135551111_.
 */
  phone?: Maybe<Scalars['String']>,
  /** 
 * The region of the address, such as the province, state, or district. This
   * argument is deprecated: Use `provinceCode` instead.
 */
  province?: Maybe<Scalars['String']>,
  /** 
 * The code for the region of the address, such as the province, state, or district.
   * For example QC for Quebec, Canada.
 */
  provinceCode?: Maybe<Scalars['String']>,
  /** The zip or postal code of the address. */
  zip?: Maybe<Scalars['String']>,
};

/** Manual discount applications capture the intentions of a discount that was manually created for an order. */
export type ManualDiscountApplication = DiscountApplication & {
   __typename?: 'ManualDiscountApplication',
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod,
  /** The description of the discount application. */
  description?: Maybe<Scalars['String']>,
  /** 
 * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
 */
  index: Scalars['Int'],
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection,
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType,
  /** The title of the discount application. */
  title: Scalars['String'],
  /** The value of the discount application. */
  value: PricingValue,
};

/** A marketing activity represents marketing created by an app on behalf of the merchant. */
export type MarketingActivity = Node & {
   __typename?: 'MarketingActivity',
  /** The url of the activity listing page of this marketing activity in the marketing section. */
  activityListUrl?: Maybe<Scalars['URL']>,
  /** Amount spent on this marketing activity. */
  adSpend?: Maybe<MoneyV2>,
  /** The app which created this marketing activity. */
  app: App,
  /** Errors generated when app was trying to complete this activity. */
  appErrors?: Maybe<MarketingActivityExtensionAppErrors>,
  /** The budget for this marketing activity. */
  budget?: Maybe<MarketingBudget>,
  /** The date and time when the marketing activity was created. */
  createdAt: Scalars['DateTime'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The broad category of marketing, used for reporting aggregation. */
  marketingChannel: MarketingChannel,
  /** Associated marketing event of this marketing activity. */
  marketingEvent?: Maybe<MarketingEvent>,
  /** A contextual description of the marketing activity based on the platform and tactic used. */
  sourceAndMedium: Scalars['String'],
  /** Status helps to identify if this marketing activity has been completed, queued, failed etc. */
  status: MarketingActivityStatus,
  /** 
 * The [date and time](
   *           https://help.shopify.com/https://en.wikipedia.org/wiki/ISO_8601
   *           ) when the activity's status last changed.
 */
  statusTransitionedAt?: Maybe<Scalars['DateTime']>,
  /** The method of marketing used for this marketing activity. */
  tactic: MarketingTactic,
  /** Expected status set by app in prior to an asynchronous operation. */
  targetStatus?: Maybe<MarketingActivityStatus>,
  /** Title of this marketing activity. */
  title: Scalars['String'],
  /** The date and time when the marketing activity was updated. */
  updatedAt: Scalars['DateTime'],
  /** The set of UTM parameters being tracked for this marketing activity. */
  utmParameters?: Maybe<UTMParameters>,
};

/** This type combines budget amount and its marketing budget type. */
export type MarketingActivityBudgetInput = {
  /** Budget type for marketing activity. */
  budgetType?: Maybe<MarketingBudgetBudgetType>,
  /** Amount of budget for the marketing activity. */
  total?: Maybe<MoneyInput>,
};

export type MarketingActivityConnection = {
   __typename?: 'MarketingActivityConnection',
  /** A list of edges. */
  edges: Array<MarketingActivityEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type MarketingActivityEdge = {
   __typename?: 'MarketingActivityEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of MarketingActivityEdge. */
  node: MarketingActivity,
};

/** The error code resulted from the marketing activity extension integration. */
export enum MarketingActivityExtensionAppErrorCode {
  /** The shop/user must be onboarded to use the app. */
  NOT_ONBOARDED_ERROR = 'NOT_ONBOARDED_ERROR',
  /** The app has returned validation errors. */
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  /** The app is not responding or returning unexpected data. */
  API_ERROR = 'API_ERROR',
  /** The app has returned an error when invoking the platform. */
  PLATFORM_ERROR = 'PLATFORM_ERROR',
  /** The app needs to be installed. */
  INSTALL_REQUIRED_ERROR = 'INSTALL_REQUIRED_ERROR'
}

/** Represents errors returned from apps when using the marketing activity extension. */
export type MarketingActivityExtensionAppErrors = {
   __typename?: 'MarketingActivityExtensionAppErrors',
  /** The app error type. */
  code: MarketingActivityExtensionAppErrorCode,
  /** The list of errors returned by the app. */
  userErrors: Array<UserError>,
};

/** The set of valid sort keys for the marketingActivities query. */
export enum MarketingActivitySortKeys {
  /** Sort by the `title` value. */
  TITLE = 'TITLE',
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** Status helps to identify if this marketing activity has been completed, queued, failed etc. */
export enum MarketingActivityStatus {
  /** This marketing activity is currently running. */
  ACTIVE = 'ACTIVE',
  /** This marketing activity is permanently unavailable. */
  DELETED = 'DELETED',
  /** This marketing activity was deleted and it was triggered from outside of Shopify. */
  DELETED_EXTERNALLY = 'DELETED_EXTERNALLY',
  /** This marketing activity is disconnected and no longer editable. */
  DISCONNECTED = 'DISCONNECTED',
  /** This marketing activity is unable to run. */
  FAILED = 'FAILED',
  /** This marketing activity has completed running. */
  INACTIVE = 'INACTIVE',
  /** This marketing activity is currently not running. */
  PAUSED = 'PAUSED',
  /** This marketing activity is pending creation on the app's platform. */
  PENDING = 'PENDING',
  /** This marketing activity is scheduled to run. */
  SCHEDULED = 'SCHEDULED',
  /** There is no defined status for external marketing activities. */
  UNDEFINED = 'UNDEFINED'
}

/** Specifies the input fields required to update a marketing activity. */
export type MarketingActivityUpdateInput = {
  /** The id for this marketing activity. */
  id: Scalars['ID'],
  /** The ID of the recommendation this marketing activity was created from, if one exists. */
  marketingRecommendationId?: Maybe<Scalars['ID']>,
  /** The title of this marketing activity. */
  title?: Maybe<Scalars['String']>,
  /** The budget for this marketing activity. */
  budget?: Maybe<MarketingActivityBudgetInput>,
  /** 
 * The cumulative amount spent on this marketing activity. This argument is
   * deprecated: Use `MarketingEngagementCreate.MarketingEngagementInput.adSpend`
   * GraphQL to send the ad spend.
 */
  adSpend?: Maybe<MoneyInput>,
  /** The current state of the marketing activity. */
  status?: Maybe<MarketingActivityStatus>,
  /** 
 * Specifies the
   * [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters)
   * that are associated with a related marketing campaign. UTMInput is required for all Marketing
   * tactics except Storefront App. This utm param can be only set once and never modified.
 */
  utm?: Maybe<UTMInput>,
  /** 
 * A list of the items that were marketed in this marketing activity. Valid types for these items are:
   * * `Product`
   * * `Shop` (Must be your current shop).
 */
  marketedResources?: Maybe<Array<Scalars['ID']>>,
  /** 
 * Encoded context provided by Shopify during the update marketing activity
   * callback. This argument is deprecated: This context is no longer needed by
   * Shopify in the callback.
 */
  context?: Maybe<Scalars['String']>,
  /** Error messages generated when app was trying to complete this activity. */
  errors?: Maybe<Scalars['JSON']>,
};

/** Return type for `marketingActivityUpdate` mutation. */
export type MarketingActivityUpdatePayload = {
   __typename?: 'MarketingActivityUpdatePayload',
  /** The updated marketing activity. */
  marketingActivity?: Maybe<MarketingActivity>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** This type combines budget amount and its marketing budget type. */
export type MarketingBudget = {
   __typename?: 'MarketingBudget',
  /** The budget type for a marketing activity. */
  budgetType: MarketingBudgetBudgetType,
  /** The amount of budget for marketing activity. */
  total: MoneyV2,
};

/** The budget type for a marketing activity. */
export enum MarketingBudgetBudgetType {
  /** A daily budget. */
  DAILY = 'DAILY',
  /** A budget for the lifetime of a marketing activity. */
  LIFETIME = 'LIFETIME'
}

/** 
 * The available marketing channels for a marketing activity or event. A marketing
 * channel is broad category of marketing, used for reporting aggregation.
 */
export enum MarketingChannel {
  /** Paid search. */
  SEARCH = 'SEARCH',
  /** Displayed ads. */
  DISPLAY = 'DISPLAY',
  /** Social media. */
  SOCIAL = 'SOCIAL',
  /** Email. */
  EMAIL = 'EMAIL',
  /** Referral links. */
  REFERRAL = 'REFERRAL'
}

/** Marketing engagement represents customer activity taken on a marketing event. */
export type MarketingEngagement = {
   __typename?: 'MarketingEngagement',
  /** The total ad spend for the day, if the marketing event is a paid ad with a daily spend. */
  adSpend?: Maybe<MoneyV2>,
  /** The total number of clicks on the marketing event for the day. */
  clicksCount?: Maybe<Scalars['Int']>,
  /** The total number of comments for the day. */
  commentsCount?: Maybe<Scalars['Int']>,
  /** The total number of complaints for the day. */
  complaintsCount?: Maybe<Scalars['Int']>,
  /** The total number of fails for the day. */
  failsCount?: Maybe<Scalars['Int']>,
  /** The total number of favorites for the day. */
  favoritesCount?: Maybe<Scalars['Int']>,
  /** The date time at which the data was fetched. */
  fetchedAt?: Maybe<Scalars['DateTime']>,
  /** The total number of impressions for the day. */
  impressionsCount?: Maybe<Scalars['Int']>,
  /** Whether the engagements are reported as lifetime values rather than daily totals. */
  isCumulative?: Maybe<Scalars['Boolean']>,
  /** The marketing activity related to this engagement. */
  marketingActivity: MarketingActivity,
  /** The date that these engagements occurred on. */
  occurredOn: Scalars['Date'],
  /** The total number of sends for the day. */
  sendsCount?: Maybe<Scalars['Int']>,
  /** The total number of shares for the day. */
  sharesCount?: Maybe<Scalars['Int']>,
  /** The total number of unique clicks for the day. */
  uniqueClicksCount?: Maybe<Scalars['Int']>,
  /** The total number of unique views for the day. */
  uniqueViewsCount?: Maybe<Scalars['Int']>,
  /** The total number of unsubscribes for the day. */
  unsubscribesCount?: Maybe<Scalars['Int']>,
  /** The UTC Offset that the app is using to determine which date to allocate spend to. */
  utcOffset?: Maybe<Scalars['UtcOffset']>,
  /** The total number of views for the day. */
  viewsCount?: Maybe<Scalars['Int']>,
};

/** Return type for `marketingEngagementCreate` mutation. */
export type MarketingEngagementCreatePayload = {
   __typename?: 'MarketingEngagementCreatePayload',
  /** The marketing engagement that was created. */
  marketingEngagement?: Maybe<MarketingEngagement>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** This object represents marketing engagement input fields for a marketing engagement. */
export type MarketingEngagementInput = {
  /** The date that these engagements occurred on. */
  occurredOn: Scalars['Date'],
  /** The total number of impressions for the day. */
  impressionsCount?: Maybe<Scalars['Int']>,
  /** The total number of views for the day. */
  viewsCount?: Maybe<Scalars['Int']>,
  /** The total number of clicks on the marketing event for the day. */
  clicksCount?: Maybe<Scalars['Int']>,
  /** The total number of shares for the day. */
  sharesCount?: Maybe<Scalars['Int']>,
  /** The total number of favorites for the day. */
  favoritesCount?: Maybe<Scalars['Int']>,
  /** The total number of comments for the day. */
  commentsCount?: Maybe<Scalars['Int']>,
  /** The total number of unsubscribes for the day. */
  unsubscribesCount?: Maybe<Scalars['Int']>,
  /** The total number of complaints for the day. */
  complaintsCount?: Maybe<Scalars['Int']>,
  /** The total number of fails for the day. */
  failsCount?: Maybe<Scalars['Int']>,
  /** The total number of sends for the day. */
  sendsCount?: Maybe<Scalars['Int']>,
  /** The total number of unique views for the day. */
  uniqueViewsCount?: Maybe<Scalars['Int']>,
  /** The total number of unique clicks for the day. */
  uniqueClicksCount?: Maybe<Scalars['Int']>,
  /** The total ad spend for the day, if the marketing event is a paid ad with a daily spend. */
  adSpend?: Maybe<MoneyInput>,
  /** Whether the engagements are reported as lifetime values rather than daily totals. */
  isCumulative?: Maybe<Scalars['Boolean']>,
  /** The UTC Offset that the app is using to determine which date to allocate spend to. */
  utcOffset?: Maybe<Scalars['UtcOffset']>,
  /** The date time at which the data was fetched. */
  fetchedAt?: Maybe<Scalars['DateTime']>,
};

/** Represents actions that market a merchant's store or products. */
export type MarketingEvent = Node & LegacyInteroperability & {
   __typename?: 'MarketingEvent',
  /** The app that the marketing event is attributed to. */
  app: App,
  /** The marketing channel used by the marketing event. */
  channel?: Maybe<MarketingChannel>,
  /** A human-readable description of the marketing event. */
  description?: Maybe<Scalars['String']>,
  /** The date and time when the marketing event ended. */
  endedAt?: Maybe<Scalars['DateTime']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** The URL where the marketing event can be managed. */
  manageUrl?: Maybe<Scalars['URL']>,
  /** The URL where the marketing event can be previewed. */
  previewUrl?: Maybe<Scalars['URL']>,
  /** An optional ID that helps Shopify validate engagement data. */
  remoteId?: Maybe<Scalars['String']>,
  /** The date and time when the marketing event is scheduled to end. */
  scheduledToEndAt?: Maybe<Scalars['DateTime']>,
  /** 
 * Where the `MarketingEvent` occurred and what kind of content was used.
   * Because `utmSource` and `utmMedium` are often used interchangeably, this is
   * based on a combination of `marketingChannel`, `referringDomain`, and `type` to
   * provide a consistent representation for any given piece of marketing
   * regardless of the app that created it.
 */
  sourceAndMedium: Scalars['String'],
  /** The date and time when the marketing event started. */
  startedAt: Scalars['DateTime'],
  /** The display text for the marketing event type. */
  targetTypeDisplayText: Scalars['String'],
  /** The marketing event type. */
  type: MarketingTactic,
  /** The name of the marketing campaign. */
  utmCampaign?: Maybe<Scalars['String']>,
  /** The medium that the marketing campaign is using. Example values: `cpc`, `banner`. */
  utmMedium?: Maybe<Scalars['String']>,
  /** The referrer of the marketing event. Example values: `google`, `newsletter`. */
  utmSource?: Maybe<Scalars['String']>,
};

export type MarketingEventConnection = {
   __typename?: 'MarketingEventConnection',
  /** A list of edges. */
  edges: Array<MarketingEventEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type MarketingEventEdge = {
   __typename?: 'MarketingEventEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of MarketingEventEdge. */
  node: MarketingEvent,
};

/** The set of valid sort keys for the marketingEvents query. */
export enum MarketingEventSortKeys {
  /** Sort by the `started_at` value. */
  STARTED_AT = 'STARTED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** List of supported marketing platforms surfaced on the marketing section. */
export enum MarketingPlatform {
  /** Facebook. */
  FACEBOOK = 'FACEBOOK',
  /** Instagram. */
  INSTAGRAM = 'INSTAGRAM',
  /** Google. */
  GOOGLE = 'GOOGLE',
  /** Pinterest. */
  PINTEREST = 'PINTEREST',
  /** Bing. */
  BING = 'BING',
  /** Email. */
  EMAIL = 'EMAIL',
  /** Snapchat. */
  SNAPCHAT = 'SNAPCHAT',
  /** SMS. */
  SMS = 'SMS'
}

/** The available types of marketing event. */
export enum MarketingTactic {
  /** An abandoned cart recovery email. */
  ABANDONED_CART = 'ABANDONED_CART',
  /** An ad, such as a Facebook ad. */
  AD = 'AD',
  /** An affiliate link. */
  AFFILIATE = 'AFFILIATE',
  /** A link. */
  LINK = 'LINK',
  /** A loyalty program. */
  LOYALTY = 'LOYALTY',
  /** A messaging app, such as Facebook Messenger. */
  MESSAGE = 'MESSAGE',
  /** A newsletter. */
  NEWSLETTER = 'NEWSLETTER',
  /** A notification in the Shopify admin. */
  NOTIFICATION = 'NOTIFICATION',
  /** A blog post. */
  POST = 'POST',
  /** A retargeting ad. */
  RETARGETING = 'RETARGETING',
  /** A transactional email. */
  TRANSACTIONAL = 'TRANSACTIONAL',
  /** Search engine optimization. */
  SEO = 'SEO',
  /** A direct visit to the online store. */
  DIRECT = 'DIRECT',
  /** Popup on merchant's store. */
  STOREFRONT_APP = 'STOREFRONT_APP',
  /** A display ad. */
  DISPLAY = 'DISPLAY',
  /** Paid search. */
  SEARCH = 'SEARCH',
  /** A follow-up email. */
  FOLLOW_UP = 'FOLLOW_UP',
  /** A promotional receipt. */
  RECEIPT = 'RECEIPT'
}

/** 
 * Metafields represent custom metadata attached to a resource. Metafields can be sorted into namespaces and are
 * composed of keys, values, and value types.
 */
export type Metafield = Node & LegacyInteroperability & {
   __typename?: 'Metafield',
  /** The description of a metafield. */
  description?: Maybe<Scalars['String']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The key name for a metafield. */
  key: Scalars['String'],
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** The namespace for a metafield. */
  namespace: Scalars['String'],
  /** Owner type of a metafield visible to the Storefront API. */
  ownerType: MetafieldOwnerType,
  /** The value of a metafield. */
  value: Scalars['String'],
  /** Represents the metafield value type. */
  valueType: MetafieldValueType,
};

export type MetafieldConnection = {
   __typename?: 'MetafieldConnection',
  /** A list of edges. */
  edges: Array<MetafieldEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Specifies the input fields to delete a metafield. */
export type MetafieldDeleteInput = {
  /** The ID of the metafield to delete. */
  id: Scalars['ID'],
};

/** Return type for `metafieldDelete` mutation. */
export type MetafieldDeletePayload = {
   __typename?: 'MetafieldDeletePayload',
  /** The ID of the deleted metafield. */
  deletedId?: Maybe<Scalars['ID']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type MetafieldEdge = {
   __typename?: 'MetafieldEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of MetafieldEdge. */
  node: Metafield,
};

/** Specifies the input fields for a metafield. */
export type MetafieldInput = {
  /** The description of the metafield . */
  description?: Maybe<Scalars['String']>,
  /** The unique ID of the metafield. */
  id?: Maybe<Scalars['ID']>,
  /** The key name of the metafield. */
  key?: Maybe<Scalars['String']>,
  /** The namespace for a metafield. */
  namespace?: Maybe<Scalars['String']>,
  /** The value of a metafield. */
  value?: Maybe<Scalars['String']>,
  /** The value type of a metafield. */
  valueType?: Maybe<MetafieldValueType>,
};

/** Metafield owner types. */
export enum MetafieldOwnerType {
  /** A metafield owner type. */
  ARTICLE = 'ARTICLE',
  /** A metafield owner type. */
  BLOG = 'BLOG',
  /** A metafield owner type. */
  COLLECTION = 'COLLECTION',
  /** A metafield owner type. */
  CUSTOMER = 'CUSTOMER',
  /** A metafield owner type. */
  DRAFTORDER = 'DRAFTORDER',
  /** A metafield owner type. */
  ORDER = 'ORDER',
  /** A metafield owner type. */
  PAGE = 'PAGE',
  /** A metafield owner type. */
  PRODUCT = 'PRODUCT',
  /** A metafield owner type. */
  PRODUCTIMAGE = 'PRODUCTIMAGE',
  /** A metafield owner type. */
  PRODUCTVARIANT = 'PRODUCTVARIANT',
  /** A metafield owner type. */
  SHOP = 'SHOP'
}

/** Represents a whitelist record that enables a metafield to be visible to the storefront. */
export type MetafieldStorefrontVisibility = Node & LegacyInteroperability & {
   __typename?: 'MetafieldStorefrontVisibility',
  /** The date and time when the whitelist record was created. */
  createdAt: Scalars['DateTime'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Key of a metafield in the visibility whitelist. */
  key: Scalars['String'],
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** Namespace of a metafield in the visibility whitelist. */
  namespace: Scalars['String'],
  /** Owner type of a metafield in the visibility whitelist. */
  ownerType: MetafieldOwnerType,
  /** The date and time when the whitelist record was updated. */
  updatedAt: Scalars['DateTime'],
};

export type MetafieldStorefrontVisibilityConnection = {
   __typename?: 'MetafieldStorefrontVisibilityConnection',
  /** A list of edges. */
  edges: Array<MetafieldStorefrontVisibilityEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `metafieldStorefrontVisibilityCreate` mutation. */
export type MetafieldStorefrontVisibilityCreatePayload = {
   __typename?: 'MetafieldStorefrontVisibilityCreatePayload',
  /** The metafield storefront visibility that was created. */
  metafieldStorefrontVisibility?: Maybe<MetafieldStorefrontVisibility>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `metafieldStorefrontVisibilityDelete` mutation. */
export type MetafieldStorefrontVisibilityDeletePayload = {
   __typename?: 'MetafieldStorefrontVisibilityDeletePayload',
  /** The ID of the deleted metafield storefront visibility. */
  deletedMetafieldStorefrontVisibilityId?: Maybe<Scalars['ID']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type MetafieldStorefrontVisibilityEdge = {
   __typename?: 'MetafieldStorefrontVisibilityEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of MetafieldStorefrontVisibilityEdge. */
  node: MetafieldStorefrontVisibility,
};

/** Specifies the input fields for a MetafieldStorefrontVisibilityInput. */
export type MetafieldStorefrontVisibilityInput = {
  /** The namespace of the metafield to be visible to the storefront api. */
  namespace: Scalars['String'],
  /** The key of the metafield to be visible to the storefront api. */
  key: Scalars['String'],
  /** The core resource ( e.g.: Product ) that owns this metafield. */
  ownerType: MetafieldOwnerType,
};

/** Metafield value types. */
export enum MetafieldValueType {
  /** A string. */
  STRING = 'STRING',
  /** An integer. */
  INTEGER = 'INTEGER',
  /** A JSON string. */
  JSON_STRING = 'JSON_STRING'
}

/** The set of valid sort keys for the methodDefinitions query. */
export enum MethodDefinitionSortKeys {
  /** Sort by the `rate_provider_type` value. */
  RATE_PROVIDER_TYPE = 'RATE_PROVIDER_TYPE',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

export type MobileDeviceRegisterInput = {
  id?: Maybe<Scalars['ID']>,
  token: Scalars['String'],
  name: Scalars['String'],
  snsPlatformApplication?: Maybe<Scalars['String']>,
  badgeEnabled?: Maybe<Scalars['Boolean']>,
  identifier?: Maybe<Scalars['String']>,
};

export type MobileDeviceUnregisterInput = {
  id: Scalars['ID'],
};

export type MobileTokenDeleteInput = {
  tokenFingerprint: Scalars['String'],
};


/** A collection of monetary values in their respective currencies. */
export type MoneyBag = {
   __typename?: 'MoneyBag',
  /** Amount in presentment currency. */
  presentmentMoney: MoneyV2,
  /** Amount in shop currency. */
  shopMoney: MoneyV2,
};

/** Specifies the fields for a monetary value with currency. */
export type MoneyInput = {
  /** Decimal money amount. */
  amount: Scalars['Decimal'],
  /** Currency of the money. */
  currencyCode: CurrencyCode,
};

/** 
 * A monetary value with currency.
 * 
 * To format currencies, combine this type's amount and currencyCode fields with your client's locale.
 * 
 * For example, in JavaScript you could use Intl.NumberFormat:
 * 
 * ```js
 * new Intl.NumberFormat(locale, {
 *   style: 'currency',
 *   currency: currencyCode
 * }).format(amount);
 * ```
 * 
 * Other formatting libraries include:
 * 
 * * iOS - [NumberFormatter](https://developer.apple.com/documentation/foundation/numberformatter)
 * * Android - [NumberFormat](https://developer.android.com/reference/java/text/NumberFormat.html)
 * * PHP - [NumberFormatter](http://php.net/manual/en/class.numberformatter.php)
 * 
 * For a more general solution, the [Unicode CLDR number formatting database] is available with many implementations
 * (such as [TwitterCldr](https://github.com/twitter/twitter-cldr-rb)).
 */
export type MoneyV2 = {
   __typename?: 'MoneyV2',
  /** Decimal money amount. */
  amount: Scalars['Decimal'],
  /** Currency of the money. */
  currencyCode: CurrencyCode,
};

/** An individual move to perform of an object to a position. */
export type MoveInput = {
  /** The ID of the object to be moved. */
  id: Scalars['ID'],
  /** The new position of the object in the set, using a 0 based index. */
  newPosition: Scalars['UnsignedInt64'],
};

/** The schema's entry point for all mutation operations. */
export type Mutation = {
   __typename?: 'Mutation',
  /** Allows an app to create a credit for a shop that can be used towards future app purchases. */
  appCreditCreate?: Maybe<AppCreditCreatePayload>,
  /** Allows an app to charge a shop for features or services one time. */
  appPurchaseOneTimeCreate?: Maybe<AppPurchaseOneTimeCreatePayload>,
  /** Cancels an app subscription on a store. */
  appSubscriptionCancel?: Maybe<AppSubscriptionCancelPayload>,
  /** Allows an app to charge a store for features or services on a recurring basis. */
  appSubscriptionCreate?: Maybe<AppSubscriptionCreatePayload>,
  /** Updates the app plan's pricing details attached to an app subscription. */
  appSubscriptionLineItemUpdate?: Maybe<AppSubscriptionLineItemUpdatePayload>,
  /** Allows an app to charge a store for usage. */
  appUsageRecordCreate?: Maybe<AppUsageRecordCreatePayload>,
  /** 
 * Starts the cancelation process of a running bulk operation.
   * 
   * There may be a short delay from when a cancelation starts until the operation is actually canceled.
 */
  bulkOperationCancel?: Maybe<BulkOperationCancelPayload>,
  /** 
 * Creates and runs a bulk operation query.
   * 
   * See the [bulk operations guide](https://help.shopify.com/api/guides/bulk-operations) for more details.
 */
  bulkOperationRunQuery?: Maybe<BulkOperationRunQueryPayload>,
  /** Adds products to a collection. */
  collectionAddProducts?: Maybe<CollectionAddProductsPayload>,
  /** Creates a collection. */
  collectionCreate?: Maybe<CollectionCreatePayload>,
  /** Deletes a collection. */
  collectionDelete?: Maybe<CollectionDeletePayload>,
  /** Publishes a collection to a channel. */
  collectionPublish?: Maybe<CollectionPublishPayload>,
  /** 
 * Removes a set of products from a given collection. It can take a long time to
   * run. Instead of returning a collection it returns a job, which should be polled.
 */
  collectionRemoveProducts?: Maybe<CollectionRemoveProductsPayload>,
  /** Asynchronously reorders a set of products from a given collection. */
  collectionReorderProducts?: Maybe<CollectionReorderProductsPayload>,
  /** Unpublishes a collection. */
  collectionUnpublish?: Maybe<CollectionUnpublishPayload>,
  /** Updates a collection. */
  collectionUpdate?: Maybe<CollectionUpdatePayload>,
  /** Add tax exemptions to a customer. */
  customerAddTaxExemptions?: Maybe<CustomerAddTaxExemptionsPayload>,
  /** Creates a new customer. */
  customerCreate?: Maybe<CustomerCreatePayload>,
  /** Deletes a customer. */
  customerDelete?: Maybe<CustomerDeletePayload>,
  /** Remove tax exemptions from a customer. */
  customerRemoveTaxExemptions?: Maybe<CustomerRemoveTaxExemptionsPayload>,
  /** Replace tax exemptions on a customer. */
  customerReplaceTaxExemptions?: Maybe<CustomerReplaceTaxExemptionsPayload>,
  /** Updates a customer's attributes. */
  customerUpdate?: Maybe<CustomerUpdatePayload>,
  /** Updates a customer's default address. */
  customerUpdateDefaultAddress?: Maybe<CustomerUpdateDefaultAddressPayload>,
  /** Creates a delivery profile. */
  deliveryProfileCreate?: Maybe<deliveryProfileCreatePayload>,
  /** Enqueues the deletion/removal of a delivery profile. */
  deliveryProfileRemove?: Maybe<deliveryProfileRemovePayload>,
  /** Updates a delivery profile. */
  deliveryProfileUpdate?: Maybe<deliveryProfileUpdatePayload>,
  /** Set the delivery settings for a shop. */
  deliverySettingUpdate?: Maybe<DeliverySettingUpdatePayload>,
  /** Assign a location as the shipping origin while in legacy compatibility mode profiles. */
  deliveryShippingOriginAssign?: Maybe<DeliveryShippingOriginAssignPayload>,
  /** Activates the automatic discount. */
  discountAutomaticActivate?: Maybe<DiscountAutomaticActivatePayload>,
  /** Creates a basic automatic discount. */
  discountAutomaticBasicCreate?: Maybe<DiscountAutomaticBasicCreatePayload>,
  /** Update basic automatic discount using its id and input. */
  discountAutomaticBasicUpdate?: Maybe<DiscountAutomaticBasicUpdatePayload>,
  /** 
 * Asynchronously delete automatic discounts in bulk if a `search` or `saved_search_id` argument is provided or if a
   * maximum discount threshold is reached (1,000). Otherwise, deletions will occur inline.
   * **Warning:** All automatic discounts will be deleted if a blank `search` argument is provided.
 */
  discountAutomaticBulkDelete?: Maybe<DiscountAutomaticBulkDeletePayload>,
  /** Creates a BXGY automatic discount. */
  discountAutomaticBxgyCreate?: Maybe<DiscountAutomaticBxgyCreatePayload>,
  /** Updates a BXGY automatic discount using its ID and input. */
  discountAutomaticBxgyUpdate?: Maybe<DiscountAutomaticBxgyUpdatePayload>,
  /** Deactivates the automatic discount. */
  discountAutomaticDeactivate?: Maybe<DiscountAutomaticDeactivatePayload>,
  /** Deletes the automatic discount. */
  discountAutomaticDelete?: Maybe<DiscountAutomaticDeletePayload>,
  /** Activates a code discount. */
  discountCodeActivate?: Maybe<DiscountCodeActivatePayload>,
  /** Creates a basic code discount. */
  discountCodeBasicCreate?: Maybe<DiscountCodeBasicCreatePayload>,
  /** Updates a basic code discount. */
  discountCodeBasicUpdate?: Maybe<DiscountCodeBasicUpdatePayload>,
  /** Creates a BXGY code discount. */
  discountCodeBxgyCreate?: Maybe<DiscountCodeBxgyCreatePayload>,
  /** Updates a BXGY code discount. */
  discountCodeBxgyUpdate?: Maybe<DiscountCodeBxgyUpdatePayload>,
  /** Deactivates the code discount. */
  discountCodeDeactivate?: Maybe<DiscountCodeDeactivatePayload>,
  /** Deletes the code discount. */
  discountCodeDelete?: Maybe<DiscountCodeDeletePayload>,
  /** Creates a free shipping code discount. */
  discountCodeFreeShippingCreate?: Maybe<DiscountCodeFreeShippingCreatePayload>,
  /** Updates a free shipping code discount. */
  discountCodeFreeShippingUpdate?: Maybe<DiscountCodeFreeShippingUpdatePayload>,
  /** 
 * Calculates the properties of a draft order. Useful for determining information
   * such as total taxes or price without actually creating a draft order.
 */
  draftOrderCalculate?: Maybe<DraftOrderCalculatePayload>,
  /** Completes a draft order. */
  draftOrderComplete?: Maybe<DraftOrderCompletePayload>,
  /** Creates a draft order. */
  draftOrderCreate?: Maybe<DraftOrderCreatePayload>,
  /** Deletes a draft order. */
  draftOrderDelete?: Maybe<DraftOrderDeletePayload>,
  /** Previews a draft order invoice email. */
  draftOrderInvoicePreview?: Maybe<DraftOrderInvoicePreviewPayload>,
  /** Sends an email invoice for a draft order. */
  draftOrderInvoiceSend?: Maybe<DraftOrderInvoiceSendPayload>,
  /** Updates a draft order. */
  draftOrderUpdate?: Maybe<DraftOrderUpdatePayload>,
  /** 
 * Triggers a workflow defined by the merchant in Shopify Flow. To learn more,
   * see [_Create Shopify Flow triggers_](https://help.shopify.com/api/embedded-apps/app-extensions/flow/create-triggers).
 */
  flowTriggerReceive?: Maybe<FlowTriggerReceivePayload>,
  /** Creates a fulfillment for an order. */
  fulfillmentCreate?: Maybe<FulfillmentCreatePayload>,
  /** Creates a fulfillment service. */
  fulfillmentServiceCreate?: Maybe<FulfillmentServiceCreatePayload>,
  /** Deletes a fulfillment service. */
  fulfillmentServiceDelete?: Maybe<FulfillmentServiceDeletePayload>,
  /** Updates a fulfillment service. */
  fulfillmentServiceUpdate?: Maybe<FulfillmentServiceUpdatePayload>,
  /** Updates tracking information for a fulfillment. */
  fulfillmentTrackingInfoUpdate?: Maybe<FulfillmentTrackingInfoUpdatePayload>,
  /** Activate an inventory item at a location. */
  inventoryActivate?: Maybe<InventoryActivatePayload>,
  /** Adjusts the inventory by a certain quantity. */
  inventoryAdjustQuantity?: Maybe<InventoryAdjustQuantityPayload>,
  /** Adjusts the inventory at a location for multiple inventory items. */
  inventoryBulkAdjustQuantityAtLocation?: Maybe<InventoryBulkAdjustQuantityAtLocationPayload>,
  /** Deactivate an inventory item at a location. */
  inventoryDeactivate?: Maybe<InventoryDeactivatePayload>,
  /** Updates an inventory item. */
  inventoryItemUpdate?: Maybe<InventoryItemUpdatePayload>,
  /** Kit Skill requested by developer for app and shop. */
  kitSkillTriggerRequest?: Maybe<KitSkillTriggerRequestPayload>,
  /** Updates a marketing activity. */
  marketingActivityUpdate?: Maybe<MarketingActivityUpdatePayload>,
  /** Creates a new marketing event engagement for a marketing activity. */
  marketingEngagementCreate?: Maybe<MarketingEngagementCreatePayload>,
  /** Deletes a metafield. */
  metafieldDelete?: Maybe<MetafieldDeletePayload>,
  /** Makes a Metafield with a specific namespace and key visible to the storefront API. */
  metafieldStorefrontVisibilityCreate?: Maybe<MetafieldStorefrontVisibilityCreatePayload>,
  /** Deletes a Metafield Storefront Visibility. */
  metafieldStorefrontVisibilityDelete?: Maybe<MetafieldStorefrontVisibilityDeletePayload>,
  /** Captures from an authorized transaction on an order. */
  orderCapture?: Maybe<OrderCapturePayload>,
  /** Closes an open order. */
  orderClose?: Maybe<OrderClosePayload>,
  /** Marks an order as paid. */
  orderMarkAsPaid?: Maybe<OrderMarkAsPaidPayload>,
  /** Opens a closed order. */
  orderOpen?: Maybe<OrderOpenPayload>,
  /** Updates an order. */
  orderUpdate?: Maybe<OrderUpdatePayload>,
  /** Activate a price rule. */
  priceRuleActivate?: Maybe<PriceRuleActivatePayload>,
  /** Create a price rule using the input. */
  priceRuleCreate?: Maybe<PriceRuleCreatePayload>,
  /** Deactivate a price rule. */
  priceRuleDeactivate?: Maybe<PriceRuleDeactivatePayload>,
  /** Delete a price rule. */
  priceRuleDelete?: Maybe<PriceRuleDeletePayload>,
  /** Create a discount code for a price rule. */
  priceRuleDiscountCodeCreate?: Maybe<PriceRuleDiscountCodeCreatePayload>,
  /** Update a discount code for a price rule. */
  priceRuleDiscountCodeUpdate?: Maybe<PriceRuleDiscountCodeUpdatePayload>,
  /** Update a price rule using its id and an input. */
  priceRuleUpdate?: Maybe<PriceRuleUpdatePayload>,
  /** Deletes a private metafield. */
  privateMetafieldDelete?: Maybe<PrivateMetafieldDeletePayload>,
  /** Creates or update a private metafield. */
  privateMetafieldUpsert?: Maybe<PrivateMetafieldUpsertPayload>,
  /** Appends images to a product. */
  productAppendImages?: Maybe<ProductAppendImagesPayload>,
  /** Creates a product. */
  productCreate?: Maybe<ProductCreatePayload>,
  /** Deletes a product. */
  productDelete?: Maybe<ProductDeletePayload>,
  /** Removes a product images from the product. */
  productDeleteImages?: Maybe<ProductDeleteImagesPayload>,
  /** Duplicates a product. */
  productDuplicate?: Maybe<ProductDuplicatePayload>,
  /** Updates an image of a product. */
  productImageUpdate?: Maybe<ProductImageUpdatePayload>,
  /** Publishes a product. */
  productPublish?: Maybe<ProductPublishPayload>,
  /** Asynchronously reorders a set of images for a given product. */
  productReorderImages?: Maybe<ProductReorderImagesPayload>,
  /** Unpublishes a product. */
  productUnpublish?: Maybe<ProductUnpublishPayload>,
  /** Updates a product. */
  productUpdate?: Maybe<ProductUpdatePayload>,
  /** Creates a product variant. */
  productVariantCreate?: Maybe<ProductVariantCreatePayload>,
  /** Deletes a product variant. */
  productVariantDelete?: Maybe<ProductVariantDeletePayload>,
  /** Updates a product variant. */
  productVariantUpdate?: Maybe<ProductVariantUpdatePayload>,
  /** Publishes a resource to a channel. */
  publishablePublish?: Maybe<PublishablePublishPayload>,
  /** Publishes a resource to current channel. */
  publishablePublishToCurrentChannel?: Maybe<PublishablePublishToCurrentChannelPayload>,
  /** Unpublishes a resource to a channel. */
  publishableUnpublish?: Maybe<PublishableUnpublishPayload>,
  /** Unpublishes a resource to current channel. */
  publishableUnpublishToCurrentChannel?: Maybe<PublishableUnpublishToCurrentChannelPayload>,
  /** Creates a refund. */
  refundCreate?: Maybe<RefundCreatePayload>,
  /** Creates a saved search. */
  savedSearchCreate?: Maybe<SavedSearchCreatePayload>,
  /** Delete a saved search. */
  savedSearchDelete?: Maybe<SavedSearchDeletePayload>,
  /** Update a saved search. */
  savedSearchUpdate?: Maybe<SavedSearchUpdatePayload>,
  /** Creates a new script tag. */
  scriptTagCreate?: Maybe<ScriptTagCreatePayload>,
  /** Deletes a script tag. */
  scriptTagDelete?: Maybe<ScriptTagDeletePayload>,
  /** Updates a script tag. */
  scriptTagUpdate?: Maybe<ScriptTagUpdatePayload>,
  /** Deletes a shipping package. */
  shippingPackageDelete?: Maybe<ShippingPackageDeletePayload>,
  /** 
 * Sets a Shipping Package as the default shipping package. The default shipping
   * package is the one used to calculate shipping costs on checkout.
 */
  shippingPackageMakeDefault?: Maybe<ShippingPackageMakeDefaultPayload>,
  /** Updates a custom shipping package. */
  shippingPackageUpdate?: Maybe<ShippingPackageUpdatePayload>,
  /** Disables a locale for a shop. */
  shopLocaleDisable?: Maybe<ShopLocaleDisablePayload>,
  /** Enables a locale for a shop. */
  shopLocaleEnable?: Maybe<ShopLocaleEnablePayload>,
  /** Updates a locale for a shop. */
  shopLocaleUpdate?: Maybe<ShopLocaleUpdatePayload>,
  /** Generates the URL and signed paramaters needed to upload an asset to Shopify. */
  stagedUploadTargetGenerate?: Maybe<StagedUploadTargetGeneratePayload>,
  /** Uploads multiple images. */
  stagedUploadTargetsGenerate?: Maybe<StagedUploadTargetsGeneratePayload>,
  /** Creates a storefront access token. */
  storefrontAccessTokenCreate?: Maybe<StorefrontAccessTokenCreatePayload>,
  /** Deletes a storefront access token. */
  storefrontAccessTokenDelete?: Maybe<StorefrontAccessTokenDeletePayload>,
  /** Add tags to a taggable object. */
  tagsAdd?: Maybe<TagsAddPayload>,
  /** Remove tags from a taggable object. */
  tagsRemove?: Maybe<TagsRemovePayload>,
  /** Creates or updates translations. */
  translationsRegister?: Maybe<TranslationsRegisterPayload>,
  /** Removes translations. */
  translationsRemove?: Maybe<TranslationsRemovePayload>,
  /** Creates a new webhook subscription. */
  webhookSubscriptionCreate?: Maybe<WebhookSubscriptionCreatePayload>,
  /** Deletes a webhook subscription. */
  webhookSubscriptionDelete?: Maybe<WebhookSubscriptionDeletePayload>,
  /** Updates a webhook subscription. */
  webhookSubscriptionUpdate?: Maybe<WebhookSubscriptionUpdatePayload>,
};


/** The schema's entry point for all mutation operations. */
export type MutationappCreditCreateArgs = {
  description: Scalars['String'],
  amount: MoneyInput,
  test?: Maybe<Scalars['Boolean']>
};


/** The schema's entry point for all mutation operations. */
export type MutationappPurchaseOneTimeCreateArgs = {
  name: Scalars['String'],
  price: MoneyInput,
  returnUrl: Scalars['URL'],
  test?: Maybe<Scalars['Boolean']>
};


/** The schema's entry point for all mutation operations. */
export type MutationappSubscriptionCancelArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationappSubscriptionCreateArgs = {
  name: Scalars['String'],
  lineItems: Array<AppSubscriptionLineItemInput>,
  test?: Maybe<Scalars['Boolean']>,
  trialDays?: Maybe<Scalars['Int']>,
  returnUrl: Scalars['URL']
};


/** The schema's entry point for all mutation operations. */
export type MutationappSubscriptionLineItemUpdateArgs = {
  id: Scalars['ID'],
  cappedAmount: MoneyInput
};


/** The schema's entry point for all mutation operations. */
export type MutationappUsageRecordCreateArgs = {
  subscriptionLineItemId: Scalars['ID'],
  price: MoneyInput,
  description: Scalars['String']
};


/** The schema's entry point for all mutation operations. */
export type MutationbulkOperationCancelArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationbulkOperationRunQueryArgs = {
  query: Scalars['String']
};


/** The schema's entry point for all mutation operations. */
export type MutationcollectionAddProductsArgs = {
  id: Scalars['ID'],
  productIds: Array<Scalars['ID']>
};


/** The schema's entry point for all mutation operations. */
export type MutationcollectionCreateArgs = {
  input: CollectionInput
};


/** The schema's entry point for all mutation operations. */
export type MutationcollectionDeleteArgs = {
  input: CollectionDeleteInput
};


/** The schema's entry point for all mutation operations. */
export type MutationcollectionPublishArgs = {
  input: CollectionPublishInput
};


/** The schema's entry point for all mutation operations. */
export type MutationcollectionRemoveProductsArgs = {
  id: Scalars['ID'],
  productIds: Array<Scalars['ID']>
};


/** The schema's entry point for all mutation operations. */
export type MutationcollectionReorderProductsArgs = {
  id: Scalars['ID'],
  moves: Array<MoveInput>
};


/** The schema's entry point for all mutation operations. */
export type MutationcollectionUnpublishArgs = {
  input: CollectionUnpublishInput
};


/** The schema's entry point for all mutation operations. */
export type MutationcollectionUpdateArgs = {
  input: CollectionInput
};


/** The schema's entry point for all mutation operations. */
export type MutationcustomerAddTaxExemptionsArgs = {
  customerId: Scalars['ID'],
  taxExemptions: Array<TaxExemption>
};


/** The schema's entry point for all mutation operations. */
export type MutationcustomerCreateArgs = {
  input: CustomerInput
};


/** The schema's entry point for all mutation operations. */
export type MutationcustomerDeleteArgs = {
  input: CustomerDeleteInput
};


/** The schema's entry point for all mutation operations. */
export type MutationcustomerRemoveTaxExemptionsArgs = {
  customerId: Scalars['ID'],
  taxExemptions: Array<TaxExemption>
};


/** The schema's entry point for all mutation operations. */
export type MutationcustomerReplaceTaxExemptionsArgs = {
  customerId: Scalars['ID'],
  taxExemptions: Array<TaxExemption>
};


/** The schema's entry point for all mutation operations. */
export type MutationcustomerUpdateArgs = {
  input: CustomerInput
};


/** The schema's entry point for all mutation operations. */
export type MutationcustomerUpdateDefaultAddressArgs = {
  customerId: Scalars['ID'],
  addressId: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationdeliveryProfileCreateArgs = {
  profile: DeliveryProfileInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdeliveryProfileRemoveArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationdeliveryProfileUpdateArgs = {
  id: Scalars['ID'],
  profile: DeliveryProfileInput,
  leaveLegacyModeProfiles?: Maybe<Scalars['Boolean']>
};


/** The schema's entry point for all mutation operations. */
export type MutationdeliverySettingUpdateArgs = {
  setting: DeliverySettingInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdeliveryShippingOriginAssignArgs = {
  locationId: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountAutomaticActivateArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountAutomaticBasicCreateArgs = {
  automaticBasicDiscount: DiscountAutomaticBasicInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountAutomaticBasicUpdateArgs = {
  id: Scalars['ID'],
  automaticBasicDiscount: DiscountAutomaticBasicInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountAutomaticBulkDeleteArgs = {
  search?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>,
  ids?: Maybe<Array<Scalars['ID']>>
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountAutomaticBxgyCreateArgs = {
  automaticBxgyDiscount: DiscountAutomaticBxgyInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountAutomaticBxgyUpdateArgs = {
  id: Scalars['ID'],
  automaticBxgyDiscount: DiscountAutomaticBxgyInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountAutomaticDeactivateArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountAutomaticDeleteArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountCodeActivateArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountCodeBasicCreateArgs = {
  basicCodeDiscount: DiscountCodeBasicInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountCodeBasicUpdateArgs = {
  id: Scalars['ID'],
  basicCodeDiscount: DiscountCodeBasicInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountCodeBxgyCreateArgs = {
  bxgyCodeDiscount: DiscountCodeBxgyInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountCodeBxgyUpdateArgs = {
  id: Scalars['ID'],
  bxgyCodeDiscount: DiscountCodeBxgyInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountCodeDeactivateArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountCodeDeleteArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountCodeFreeShippingCreateArgs = {
  freeShippingCodeDiscount: DiscountCodeFreeShippingInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdiscountCodeFreeShippingUpdateArgs = {
  id: Scalars['ID'],
  freeShippingCodeDiscount: DiscountCodeFreeShippingInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdraftOrderCalculateArgs = {
  input: DraftOrderInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdraftOrderCompleteArgs = {
  id: Scalars['ID'],
  paymentPending?: Maybe<Scalars['Boolean']>
};


/** The schema's entry point for all mutation operations. */
export type MutationdraftOrderCreateArgs = {
  input: DraftOrderInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdraftOrderDeleteArgs = {
  input: DraftOrderDeleteInput
};


/** The schema's entry point for all mutation operations. */
export type MutationdraftOrderInvoicePreviewArgs = {
  id: Scalars['ID'],
  email?: Maybe<EmailInput>
};


/** The schema's entry point for all mutation operations. */
export type MutationdraftOrderInvoiceSendArgs = {
  id: Scalars['ID'],
  email?: Maybe<EmailInput>
};


/** The schema's entry point for all mutation operations. */
export type MutationdraftOrderUpdateArgs = {
  id: Scalars['ID'],
  input: DraftOrderInput
};


/** The schema's entry point for all mutation operations. */
export type MutationflowTriggerReceiveArgs = {
  body: Scalars['String']
};


/** The schema's entry point for all mutation operations. */
export type MutationfulfillmentCreateArgs = {
  input: FulfillmentInput
};


/** The schema's entry point for all mutation operations. */
export type MutationfulfillmentServiceCreateArgs = {
  name: Scalars['String'],
  callbackUrl?: Maybe<Scalars['URL']>,
  trackingSupport?: Maybe<Scalars['Boolean']>
};


/** The schema's entry point for all mutation operations. */
export type MutationfulfillmentServiceDeleteArgs = {
  id: Scalars['ID'],
  destinationLocationId?: Maybe<Scalars['ID']>
};


/** The schema's entry point for all mutation operations. */
export type MutationfulfillmentServiceUpdateArgs = {
  id: Scalars['ID'],
  name?: Maybe<Scalars['String']>,
  callbackUrl?: Maybe<Scalars['URL']>,
  trackingSupport?: Maybe<Scalars['Boolean']>
};


/** The schema's entry point for all mutation operations. */
export type MutationfulfillmentTrackingInfoUpdateArgs = {
  fulfillmentId: Scalars['ID'],
  trackingInfoUpdateInput: TrackingInfoUpdateInput
};


/** The schema's entry point for all mutation operations. */
export type MutationinventoryActivateArgs = {
  inventoryItemId: Scalars['ID'],
  locationId: Scalars['ID'],
  available?: Maybe<Scalars['Int']>
};


/** The schema's entry point for all mutation operations. */
export type MutationinventoryAdjustQuantityArgs = {
  input: InventoryAdjustQuantityInput
};


/** The schema's entry point for all mutation operations. */
export type MutationinventoryBulkAdjustQuantityAtLocationArgs = {
  inventoryItemAdjustments: Array<InventoryAdjustItemInput>,
  locationId: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationinventoryDeactivateArgs = {
  inventoryLevelId: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationinventoryItemUpdateArgs = {
  id: Scalars['ID'],
  input: InventoryItemUpdateInput
};


/** The schema's entry point for all mutation operations. */
export type MutationkitSkillTriggerRequestArgs = {
  id: Scalars['ID'],
  locale: KitSkillLocale,
  placeholders?: Maybe<Scalars['JSON']>
};


/** The schema's entry point for all mutation operations. */
export type MutationmarketingActivityUpdateArgs = {
  input: MarketingActivityUpdateInput
};


/** The schema's entry point for all mutation operations. */
export type MutationmarketingEngagementCreateArgs = {
  marketingActivityId: Scalars['ID'],
  marketingEngagement: MarketingEngagementInput
};


/** The schema's entry point for all mutation operations. */
export type MutationmetafieldDeleteArgs = {
  input: MetafieldDeleteInput
};


/** The schema's entry point for all mutation operations. */
export type MutationmetafieldStorefrontVisibilityCreateArgs = {
  input: MetafieldStorefrontVisibilityInput
};


/** The schema's entry point for all mutation operations. */
export type MutationmetafieldStorefrontVisibilityDeleteArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationorderCaptureArgs = {
  input: OrderCaptureInput
};


/** The schema's entry point for all mutation operations. */
export type MutationorderCloseArgs = {
  input: OrderCloseInput
};


/** The schema's entry point for all mutation operations. */
export type MutationorderMarkAsPaidArgs = {
  input: OrderMarkAsPaidInput
};


/** The schema's entry point for all mutation operations. */
export type MutationorderOpenArgs = {
  input: OrderOpenInput
};


/** The schema's entry point for all mutation operations. */
export type MutationorderUpdateArgs = {
  input: OrderInput
};


/** The schema's entry point for all mutation operations. */
export type MutationpriceRuleActivateArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationpriceRuleCreateArgs = {
  priceRule: PriceRuleInput,
  priceRuleDiscountCode?: Maybe<PriceRuleDiscountCodeInput>
};


/** The schema's entry point for all mutation operations. */
export type MutationpriceRuleDeactivateArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationpriceRuleDeleteArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationpriceRuleDiscountCodeCreateArgs = {
  priceRuleId: Scalars['ID'],
  code: Scalars['String']
};


/** The schema's entry point for all mutation operations. */
export type MutationpriceRuleDiscountCodeUpdateArgs = {
  priceRuleId: Scalars['ID'],
  code: Scalars['String']
};


/** The schema's entry point for all mutation operations. */
export type MutationpriceRuleUpdateArgs = {
  id: Scalars['ID'],
  priceRule: PriceRuleInput,
  priceRuleDiscountCode?: Maybe<PriceRuleDiscountCodeInput>
};


/** The schema's entry point for all mutation operations. */
export type MutationprivateMetafieldDeleteArgs = {
  input: PrivateMetafieldDeleteInput
};


/** The schema's entry point for all mutation operations. */
export type MutationprivateMetafieldUpsertArgs = {
  input: PrivateMetafieldInput
};


/** The schema's entry point for all mutation operations. */
export type MutationproductAppendImagesArgs = {
  input: ProductAppendImagesInput
};


/** The schema's entry point for all mutation operations. */
export type MutationproductCreateArgs = {
  input: ProductInput
};


/** The schema's entry point for all mutation operations. */
export type MutationproductDeleteArgs = {
  input: ProductDeleteInput
};


/** The schema's entry point for all mutation operations. */
export type MutationproductDeleteImagesArgs = {
  id: Scalars['ID'],
  imageIds: Array<Scalars['ID']>
};


/** The schema's entry point for all mutation operations. */
export type MutationproductDuplicateArgs = {
  productId: Scalars['ID'],
  newTitle: Scalars['String'],
  includeImages?: Maybe<Scalars['Boolean']>
};


/** The schema's entry point for all mutation operations. */
export type MutationproductImageUpdateArgs = {
  productId: Scalars['ID'],
  image: ImageInput
};


/** The schema's entry point for all mutation operations. */
export type MutationproductPublishArgs = {
  input: ProductPublishInput
};


/** The schema's entry point for all mutation operations. */
export type MutationproductReorderImagesArgs = {
  id: Scalars['ID'],
  moves: Array<MoveInput>
};


/** The schema's entry point for all mutation operations. */
export type MutationproductUnpublishArgs = {
  input: ProductUnpublishInput
};


/** The schema's entry point for all mutation operations. */
export type MutationproductUpdateArgs = {
  input: ProductInput
};


/** The schema's entry point for all mutation operations. */
export type MutationproductVariantCreateArgs = {
  input: ProductVariantInput
};


/** The schema's entry point for all mutation operations. */
export type MutationproductVariantDeleteArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationproductVariantUpdateArgs = {
  input: ProductVariantInput
};


/** The schema's entry point for all mutation operations. */
export type MutationpublishablePublishArgs = {
  id: Scalars['ID'],
  input: Array<PublicationInput>
};


/** The schema's entry point for all mutation operations. */
export type MutationpublishablePublishToCurrentChannelArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationpublishableUnpublishArgs = {
  id: Scalars['ID'],
  input: Array<PublicationInput>
};


/** The schema's entry point for all mutation operations. */
export type MutationpublishableUnpublishToCurrentChannelArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationrefundCreateArgs = {
  input: RefundInput
};


/** The schema's entry point for all mutation operations. */
export type MutationsavedSearchCreateArgs = {
  input: SavedSearchCreateInput
};


/** The schema's entry point for all mutation operations. */
export type MutationsavedSearchDeleteArgs = {
  input: SavedSearchDeleteInput
};


/** The schema's entry point for all mutation operations. */
export type MutationsavedSearchUpdateArgs = {
  input: SavedSearchUpdateInput
};


/** The schema's entry point for all mutation operations. */
export type MutationscriptTagCreateArgs = {
  input: ScriptTagInput
};


/** The schema's entry point for all mutation operations. */
export type MutationscriptTagDeleteArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationscriptTagUpdateArgs = {
  id: Scalars['ID'],
  input: ScriptTagInput
};


/** The schema's entry point for all mutation operations. */
export type MutationshippingPackageDeleteArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationshippingPackageMakeDefaultArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationshippingPackageUpdateArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationshopLocaleDisableArgs = {
  locale: Scalars['String']
};


/** The schema's entry point for all mutation operations. */
export type MutationshopLocaleEnableArgs = {
  locale: Scalars['String']
};


/** The schema's entry point for all mutation operations. */
export type MutationshopLocaleUpdateArgs = {
  locale: Scalars['String'],
  shopLocale: ShopLocaleInput
};


/** The schema's entry point for all mutation operations. */
export type MutationstagedUploadTargetGenerateArgs = {
  input: StagedUploadTargetGenerateInput
};


/** The schema's entry point for all mutation operations. */
export type MutationstagedUploadTargetsGenerateArgs = {
  input: Array<StageImageInput>
};


/** The schema's entry point for all mutation operations. */
export type MutationstorefrontAccessTokenCreateArgs = {
  input: StorefrontAccessTokenInput
};


/** The schema's entry point for all mutation operations. */
export type MutationstorefrontAccessTokenDeleteArgs = {
  input: StorefrontAccessTokenDeleteInput
};


/** The schema's entry point for all mutation operations. */
export type MutationtagsAddArgs = {
  id: Scalars['ID'],
  tags: Array<Scalars['String']>
};


/** The schema's entry point for all mutation operations. */
export type MutationtagsRemoveArgs = {
  id: Scalars['ID'],
  tags: Array<Scalars['String']>
};


/** The schema's entry point for all mutation operations. */
export type MutationtranslationsRegisterArgs = {
  resourceId: Scalars['ID'],
  translations: Array<TranslationInput>
};


/** The schema's entry point for all mutation operations. */
export type MutationtranslationsRemoveArgs = {
  resourceId: Scalars['ID'],
  translationKeys: Array<Scalars['String']>,
  locales: Array<Scalars['String']>
};


/** The schema's entry point for all mutation operations. */
export type MutationwebhookSubscriptionCreateArgs = {
  topic: WebhookSubscriptionTopic,
  webhookSubscription: WebhookSubscriptionInput
};


/** The schema's entry point for all mutation operations. */
export type MutationwebhookSubscriptionDeleteArgs = {
  id: Scalars['ID']
};


/** The schema's entry point for all mutation operations. */
export type MutationwebhookSubscriptionUpdateArgs = {
  id: Scalars['ID'],
  webhookSubscription: WebhookSubscriptionInput
};

/** Device attributes to report. */
export type MutationsDeviceAttributesReportInput = {
  /** Canvas fingerprint. */
  canvasFingerprint: Scalars['String'],
  /** Cookies. */
  hasCookies: Scalars['Boolean'],
  /** Installed Fonts. */
  fonts: Array<Scalars['String']>,
  /** Default language. */
  lang?: Maybe<Scalars['String']>,
  /** Whether or not local storage is available. */
  hasLocalStorage: Scalars['Boolean'],
  /** Installed plugins. */
  plugins: Array<Scalars['String']>,
  /** Screen information. */
  screen?: Maybe<Scalars['String']>,
  /** Whether or not session storage is available. */
  hasSessionStorage: Scalars['Boolean'],
  /** Time zone offset. */
  tzOffset?: Maybe<Scalars['Int']>,
  /** User Agent string. */
  userAgent?: Maybe<Scalars['String']>,
};

/** A signed upload parameter for uploading an asset to Shopify. */
export type MutationsStagedUploadTargetGenerateUploadParameter = {
   __typename?: 'MutationsStagedUploadTargetGenerateUploadParameter',
  /** The upload parameter name. */
  name: Scalars['String'],
  /** The upload parameter value. */
  value: Scalars['String'],
};

/** 
 * A default cursor for use in pagination.
 * The default cursor can be used for next and previous navigation.
 */
export type Navigable = {
  /** A default cursor for use in pagination. */
  defaultCursor: Scalars['String'],
};

/** A navigation item, holding basic link attributes. */
export type NavigationItem = {
   __typename?: 'NavigationItem',
  /** The unique identifier of the navigation item. */
  id: Scalars['String'],
  /** The name of the navigation item. */
  title: Scalars['String'],
  /** The URL of the page that the navigation item links to. */
  url: Scalars['URL'],
};

/** A navigation item, holding basic link attributes, extra configuration, and nested navigation items. */
export type NavigationItemV2 = {
   __typename?: 'NavigationItemV2',
  /** Sub-navigation items for this navigation. */
  children: Array<NavigationItemV2>,
  /** Flag that indicates if the navigation is disabled or not. */
  disabled: Scalars['Boolean'],
  /** Extra paths that should be used to not highlight the navigation as selected. */
  excludePaths: Array<Scalars['String']>,
  /** Flag indicating that the store front link must be shown within this navigation. */
  hasStorefrontLink: Scalars['Boolean'],
  /** The SVG icon body to be displayed as the navigation's icon. */
  iconBody: Scalars['String'],
  /** The navigation's label to be displayed. */
  label: Scalars['String'],
  /** Flag indicating that an exact match of the path is required to highlight the navigation. */
  matchExactPath: Scalars['Boolean'],
  /** Extra paths that should be used to highlight the navigation as selected. */
  matchPaths: Array<Scalars['String']>,
  /** The URL that the navigation points to. */
  url: Scalars['URL'],
};

/** Types for navigation item. */
export enum NavigationItemV2Type {
  /** Navigation items for sales channels. */
  SALES_CHANNEL = 'SALES_CHANNEL',
  /** Primary navigation items for apps. */
  PRIMARY_NAVIGATION = 'PRIMARY_NAVIGATION'
}

/** An object with an ID to support global identification. */
export type Node = {
  /** Globally unique identifier. */
  id: Scalars['ID'],
};

export type NotificationSubscriptionInput = {
  /** Whether the subscription is enabled. */
  enabled: Scalars['Boolean'],
  /** ID of the subscription. */
  id: Scalars['ID'],
};

/** 
 * Represents an article in an OnlineStoreBlog object. Articles appear in reverse chronological order, with the
 * most recent entry at the top of the blog's page. A blog can contain any number of articles.
 */
export type OnlineStoreArticle = Node & Navigable & HasPublishedTranslations & {
   __typename?: 'OnlineStoreArticle',
  /** A default cursor for use in pagination. */
  defaultCursor: Scalars['String'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The translations associated with the resource. */
  translations: Array<PublishedTranslation>,
};


/** 
 * Represents an article in an OnlineStoreBlog object. Articles appear in reverse chronological order, with the
 * most recent entry at the top of the blog's page. A blog can contain any number of articles.
 */
export type OnlineStoreArticletranslationsArgs = {
  locale: Scalars['String']
};

export type OnlineStoreArticleEdge = {
   __typename?: 'OnlineStoreArticleEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of OnlineStoreArticleEdge. */
  node: OnlineStoreArticle,
};

/** Possible sort of tags. */
export enum OnlineStoreArticleTagSort {
  /** Alphabetical sort. */
  ALPHABETICAL = 'ALPHABETICAL',
  /** Popularity sort. */
  POPULAR = 'POPULAR'
}

/** 
 * Shopify stores come with a built-in blogging engine, allowing a shop to have one or more blogs.  Blogs are meant
 * to be used as a type of magazine or newsletter for the shop, with content that changes over time.
 */
export type OnlineStoreBlog = Node & HasPublishedTranslations & {
   __typename?: 'OnlineStoreBlog',
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The translations associated with the resource. */
  translations: Array<PublishedTranslation>,
};


/** 
 * Shopify stores come with a built-in blogging engine, allowing a shop to have one or more blogs.  Blogs are meant
 * to be used as a type of magazine or newsletter for the shop, with content that changes over time.
 */
export type OnlineStoreBlogtranslationsArgs = {
  locale: Scalars['String']
};

export type OnlineStoreBlogEdge = {
   __typename?: 'OnlineStoreBlogEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of OnlineStoreBlogEdge. */
  node: OnlineStoreBlog,
};

/** A custom page on the Online Store. */
export type OnlineStorePage = Node & Navigable & HasPublishedTranslations & {
   __typename?: 'OnlineStorePage',
  /** A default cursor for use in pagination. */
  defaultCursor: Scalars['String'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The translations associated with the resource. */
  translations: Array<PublishedTranslation>,
};


/** A custom page on the Online Store. */
export type OnlineStorePagetranslationsArgs = {
  locale: Scalars['String']
};

export type OnlineStorePageEdge = {
   __typename?: 'OnlineStorePageEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of OnlineStorePageEdge. */
  node: OnlineStorePage,
};

/** Online Store preview URL of the object. */
export type OnlineStorePreviewable = {
  /** The online store preview URL. */
  onlineStorePreviewUrl?: Maybe<Scalars['URL']>,
};

/** An order represents an agreement to do business between a customer and a merchant. */
export type Order = Node & CommentEventSubject & HasMetafields & LegacyInteroperability & HasEvents & {
   __typename?: 'Order',
  /** 
 * Generated messages that appear at the top of an order page in the Shopify admin.
   * For example, _this is a test order_.
 */
  alerts: Array<ResourceAlert>,
  /** 
 * Mailing address provided by the customer.
   * Not all orders have mailing addresses.
 */
  billingAddress?: Maybe<MailingAddress>,
  /** Whether the billing address matches the shipping address. */
  billingAddressMatchesShippingAddress: Scalars['Boolean'],
  /** Whether the order can be manually marked as paid. */
  canMarkAsPaid: Scalars['Boolean'],
  /** Whether notifications can be sent to the customer or not. */
  canNotifyCustomer: Scalars['Boolean'],
  /** 
 * Reason the order was canceled.
   * Returns null if the order wasn't canceled.
 */
  cancelReason?: Maybe<OrderCancelReason>,
  /** 
 * Date and time when the order was canceled.
   * Returns null if the order wasn't canceled.
 */
  cancelledAt?: Maybe<Scalars['DateTime']>,
  /** 
 * Whether payment for the order can be captured.
   * Returns true when the customer's credit card has been authorized for payment and the authorization period has not expired.
 */
  capturable: Scalars['Boolean'],
  /** Amount of the order-level discount (does not contain any line item discounts). */
  cartDiscountAmount?: Maybe<Scalars['Money']>,
  /** Amount of the order-level discount (does not contain any line item discounts) in shop and presentment currencies. */
  cartDiscountAmountSet?: Maybe<MoneyBag>,
  /** Channel that created the order. */
  channel?: Maybe<Channel>,
  /** The ip address of the client that is associated with this order. */
  clientIp?: Maybe<Scalars['String']>,
  /** Whether the order is closed. */
  closed: Scalars['Boolean'],
  /** 
 * Date and time when the order closed.
   * If the order is not closed, then this field is null.
 */
  closedAt?: Maybe<Scalars['DateTime']>,
  /** Whether inventory has been reserved for the order. */
  confirmed: Scalars['Boolean'],
  /** Date and time when the order was created in Shopify. */
  createdAt: Scalars['DateTime'],
  /** 
 * The currency of the store at the time of the order.
   * If payment hasn't occurred, then this field is null.
 */
  currencyCode: CurrencyCode,
  /** 
 * Custom information added to the order by your customer
   * (Also referred to as note attributes).
 */
  customAttributes: Array<Attribute>,
  /** 
 * Unique identifier of the customer who placed the order.
   * Not all orders have customers associated with them.
 */
  customer?: Maybe<Customer>,
  /** Whether the customer agreed to receive marketing materials. */
  customerAcceptsMarketing: Scalars['Boolean'],
  /** Description of the customer's experience with the store leading up to the order. */
  customerJourney?: Maybe<CustomerJourney>,
  /** 
 * A two-letter or three-letter language code, optionally followed by a region modifier.
   * Example values could be 'en', 'en-CA', 'en-PIRATE'.
 */
  customerLocale?: Maybe<Scalars['String']>,
  /** Discounts that have been applied on the order. */
  discountApplications: DiscountApplicationConnection,
  /** Discount code provided by the customer. */
  discountCode?: Maybe<Scalars['String']>,
  /** Primary address of the customer, which is shown on the order. */
  displayAddress?: Maybe<MailingAddress>,
  /** 
 * Financial status of the order that can be shown to the merchant.
   * This field does not capture all the possible details of an order's financial
   * state and should only be used for display summary purposes.
 */
  displayFinancialStatus?: Maybe<OrderDisplayFinancialStatus>,
  /** 
 * Fulfillment status for the order that can be shown to the merchant.
   * This field does not capture all the possible details of an order's fulfillment
   * state. It should only be used for display summary purposes.
 */
  displayFulfillmentStatus: OrderDisplayFulfillmentStatus,
  /** Summary of each dispute associated with the order. Sorted in ascending (ASC) order by ID. */
  disputes: Array<OrderDisputeSummary>,
  /** List of possible fulfilments that can be made for the order (includes line items that can be partially fulfilled). */
  draftFulfillments: Array<DraftFulfillment>,
  /** Email address provided by the customer. */
  email?: Maybe<Scalars['String']>,
  /** List of internal events associated with the order. */
  events: EventConnection,
  /** 
 * Whether there are items that can be fulfilled.
   * After an order is completely fulfilled (or completely refunded without any fulfillments) then this field returns false.
 */
  fulfillable: Scalars['Boolean'],
  /** List of shipments for the order. */
  fulfillments: Array<Fulfillment>,
  /** Whether the order has been paid in full. */
  fullyPaid: Scalars['Boolean'],
  /** Whether the merchant added timeline comments to the order. */
  hasTimelineComment: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** First page of the online store that the customer visited before they submitted the order, for displaying to humans. */
  landingPageDisplayText?: Maybe<Scalars['String']>,
  /** First page of the online store that the customer visited before they submitted the order. */
  landingPageUrl?: Maybe<Scalars['URL']>,
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** List of the order's line items. */
  lineItems: LineItemConnection,
  /** If the order was processed using Shopify POS, then this is its location as provided by the merchant. */
  location?: Maybe<Scalars['String']>,
  /** Whether the order can be edited or not. */
  merchantEditable: Scalars['Boolean'],
  /** The metafield associated with the resource. */
  metafield?: Maybe<Metafield>,
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection,
  /** 
 * Unique identifier for the order that appears on the order.
   * For example, _#1000_ or _Store1001.
   * This value is not unique across multiple stores.
 */
  name: Scalars['String'],
  /** Net payment for the order, based on the total amount received - total amount refunded. */
  netPayment: Scalars['Money'],
  /** Net payment for the order, based on the total amount received - total amount refunded in shop and presentment currencies. */
  netPaymentSet: MoneyBag,
  /** 
 * Line items that can't be fulfilled.
   * For example, because some or all of the items have been refunded, or the item
   * is not one which can be fulfilled, such as a tip.
   * These line items would be 'lost' if you only considered the line items in draft fulfillments or fulfillments.
 */
  nonFulfillableLineItems: LineItemConnection,
  /** Contents of the note associated with the order. */
  note?: Maybe<Scalars['String']>,
  /** 
 * List of all payment gateways used for the order.
   * For example, _authorize_net_ and _Cash on Delivery (COD)_.
 */
  paymentGatewayNames: Array<Scalars['String']>,
  /** Phone number provided by the customer. */
  phone?: Maybe<Scalars['String']>,
  /** If the order was processed using Shopify POS, then this is its location as provided by the merchant. */
  physicalLocation?: Maybe<Location>,
  /** The payment currency of the customer for this order. */
  presentmentCurrencyCode: CurrencyCode,
  /** Returns a private metafield found by namespace and key. */
  privateMetafield?: Maybe<PrivateMetafield>,
  /** List of private metafields. */
  privateMetafields: PrivateMetafieldConnection,
  /** 
 * Date and time when the order was processed.
   * When orders are imported from an app, this date and time may not match the date and time when the order was created.
 */
  processedAt: Scalars['DateTime'],
  /** Publication that created the order. */
  publication?: Maybe<Publication>,
  /** 
 * Marketing referral code from the link that the customer clicked to visit your store.
   * Supports the following URL attributes: _ref_, _source_, or _r_. For example,
   * if the URL is myshopifystore.com/products/slide?ref=j2tj1tn2, then this value is j2tj1tn2.
 */
  referralCode?: Maybe<Scalars['String']>,
  /** Website that sent the customer to your online store. */
  referrerDisplayText?: Maybe<Scalars['String']>,
  /** 
 * Webpage where the customer clicked a link that sent them to your online store.
   * For example, _Google_ or _randomblog.com/page1_.
 */
  referrerUrl?: Maybe<Scalars['URL']>,
  /** Whether the order can be refunded. */
  refundable: Scalars['Boolean'],
  /** List of refunds that have been applied to the order. */
  refunds: Array<Refund>,
  /** Whether any line item in the order requires physical shipping. */
  requiresShipping: Scalars['Boolean'],
  /** Whether the order can be restocked. */
  restockable: Scalars['Boolean'],
  /** Fraud risk level of the order. */
  riskLevel: OrderRiskLevel,
  /** The order risks associated with this order. */
  risks: Array<OrderRisk>,
  /** Mailing address for shipping provided by the customer. */
  shippingAddress?: Maybe<MailingAddress>,
  /** Line item that contains the shipping costs. */
  shippingLine?: Maybe<ShippingLine>,
  /** The sum of the quantities for the line items that contribute to the order's subtotal. */
  subtotalLineItemsQuantity: Scalars['Int'],
  /** 
 * Subtotal of the line items and their discounts (does not contain shipping
   * costs, shipping discounts, and order-level discounts).
 */
  subtotalPrice?: Maybe<Scalars['Money']>,
  /** 
 * Subtotal of the line items and their discounts (does not contain shipping
   * costs, shipping discounts, and order-level discounts) in shop and presentment currencies.
 */
  subtotalPriceSet?: Maybe<MoneyBag>,
  /** The details of the suggested refund. This response can be used to submit a RefundCreate mutation. */
  suggestedRefund?: Maybe<SuggestedRefund>,
  /** List of tags. */
  tags: Array<Scalars['String']>,
  /** Taxes charged for the line item. */
  taxLines: Array<TaxLine>,
  /** Whether taxes are included in the subtotal price of the order. */
  taxesIncluded: Scalars['Boolean'],
  /** 
 * Whether the order is a test.
   * Test orders are made using the Shopify Bogus Gateway or the Shopify Payments test mode.
 */
  test: Scalars['Boolean'],
  /** Amount authorized for the order, that is uncaptured or undercaptured. */
  totalCapturable: Scalars['Money'],
  /** Amount authorized for the order, that is uncaptured or undercaptured in shop and presentment currencies. */
  totalCapturableSet: MoneyBag,
  /** Total amount discounted from the order (includes order-level and line item discounts). */
  totalDiscounts?: Maybe<Scalars['Money']>,
  /** Total amount discounted from the order (includes order-level and line item discounts) in shop and presentment currencies. */
  totalDiscountsSet?: Maybe<MoneyBag>,
  /** Total amount of the order (includes taxes and discounts). */
  totalPrice: Scalars['Money'],
  /** Total amount of the order (includes taxes and discounts) in shop and presentment currencies. */
  totalPriceSet: MoneyBag,
  /** Total amount received by the customer for the order. */
  totalReceived: Scalars['Money'],
  /** Total amount received by the customer for the order in shop and presentment currencies. */
  totalReceivedSet: MoneyBag,
  /** Total amount refunded for the order. */
  totalRefunded: Scalars['Money'],
  /** Total amount refunded for the order in shop and presentment currencies. */
  totalRefundedSet: MoneyBag,
  /** Total amount refunded for shipping in shop and presentment currencies. */
  totalRefundedShippingSet: MoneyBag,
  /** Total amount charged for shipping the order. */
  totalShippingPrice: Scalars['Money'],
  /** Total amount charged for shipping the order in shop and presentment currencies. */
  totalShippingPriceSet: MoneyBag,
  /** Total of all taxes applied to the order. */
  totalTax?: Maybe<Scalars['Money']>,
  /** Total of all taxes applied to the order in shop and presentment currencies. */
  totalTaxSet?: Maybe<MoneyBag>,
  /** Total weight (grams) of the order. */
  totalWeight?: Maybe<Scalars['UnsignedInt64']>,
  /** List of all transactions associated with the order. */
  transactions: Array<OrderTransaction>,
  /** 
 * Whether no payments have been made for the order.
   * If no payments have been made for the order, then this returns true.
 */
  unpaid: Scalars['Boolean'],
  /** Date and time when the order was last modified. */
  updatedAt: Scalars['DateTime'],
};


/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderdiscountApplicationsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** An order represents an agreement to do business between a customer and a merchant. */
export type OrdereventsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<EventSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderfulfillmentsArgs = {
  first?: Maybe<Scalars['Int']>
};


/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderlineItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** An order represents an agreement to do business between a customer and a merchant. */
export type OrdermetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** An order represents an agreement to do business between a customer and a merchant. */
export type OrdermetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** An order represents an agreement to do business between a customer and a merchant. */
export type OrdernonFulfillableLineItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderprivateMetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderprivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderrefundsArgs = {
  first?: Maybe<Scalars['Int']>
};


/** An order represents an agreement to do business between a customer and a merchant. */
export type OrderrisksArgs = {
  first?: Maybe<Scalars['Int']>
};


/** An order represents an agreement to do business between a customer and a merchant. */
export type OrdersuggestedRefundArgs = {
  shippingAmount?: Maybe<Scalars['Money']>,
  refundShipping?: Maybe<Scalars['Boolean']>,
  refundLineItems?: Maybe<Array<RefundLineItemInput>>,
  suggestFullRefund?: Maybe<Scalars['Boolean']>
};


/** An order represents an agreement to do business between a customer and a merchant. */
export type OrdertransactionsArgs = {
  first?: Maybe<Scalars['Int']>,
  capturable?: Maybe<Scalars['Boolean']>,
  manuallyResolvable?: Maybe<Scalars['Boolean']>
};

/** Represents the reason that the order is being canceled. Valid values are: customer, fraud, inventory, declined, other. */
export enum OrderCancelReason {
  /** The customer wanted to cancel the order. */
  CUSTOMER = 'CUSTOMER',
  /** The order was fraudulent. */
  FRAUD = 'FRAUD',
  /** There was insufficient inventory. */
  INVENTORY = 'INVENTORY',
  /** Payment was declined. */
  DECLINED = 'DECLINED',
  /** Some other reason not listed. */
  OTHER = 'OTHER'
}

/** Specifies the authorized transaction to capture and the total amount to capture from it. */
export type OrderCaptureInput = {
  /** The ID of the order to capture. */
  id: Scalars['ID'],
  /** The ID of the authorized transaction to capture. */
  parentTransactionId: Scalars['ID'],
  /** The amount to capture. */
  amount: Scalars['Money'],
  /** 
 * The currency (in ISO format) that is used to capture the order. This must be
   * the presentment currency (the currency used by the customer) and is a required
   * field for orders where the currency and presentment currency differ.
 */
  currency?: Maybe<CurrencyCode>,
};

/** Return type for `orderCapture` mutation. */
export type OrderCapturePayload = {
   __typename?: 'OrderCapturePayload',
  /** The transaction of the capture. */
  transaction?: Maybe<OrderTransaction>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Specifies an open order to close. */
export type OrderCloseInput = {
  /** The ID of the order to close. */
  id: Scalars['ID'],
};

/** Return type for `orderClose` mutation. */
export type OrderClosePayload = {
   __typename?: 'OrderClosePayload',
  /** The closed order. */
  order?: Maybe<Order>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type OrderConnection = {
   __typename?: 'OrderConnection',
  /** A list of edges. */
  edges: Array<OrderEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Represents the order's current financial status. */
export enum OrderDisplayFinancialStatus {
  /** Displayed as **Pending**. */
  PENDING = 'PENDING',
  /** Displayed as **Authorized**. */
  AUTHORIZED = 'AUTHORIZED',
  /** Displayed as **Partially paid**. */
  PARTIALLY_PAID = 'PARTIALLY_PAID',
  /** Displayed as **Partially refunded**. */
  PARTIALLY_REFUNDED = 'PARTIALLY_REFUNDED',
  /** Displayed as **Voided**. */
  VOIDED = 'VOIDED',
  /** Displayed as **Paid**. */
  PAID = 'PAID',
  /** Displayed as **Refunded**. */
  REFUNDED = 'REFUNDED'
}

/** Represents the order's current fulfillment status. Valid values are: unfulfilled, partial, fulfilled, restocked. */
export enum OrderDisplayFulfillmentStatus {
  /** Displayed as **Unfulfilled**. */
  UNFULFILLED = 'UNFULFILLED',
  /** Displayed as **Partially fulfilled**. */
  PARTIALLY_FULFILLED = 'PARTIALLY_FULFILLED',
  /** Displayed as **Fulfilled**. */
  FULFILLED = 'FULFILLED',
  /** Displayed as **Restocked**. */
  RESTOCKED = 'RESTOCKED',
  /** Displayed as **Pending fulfillment**. */
  PENDING_FULFILLMENT = 'PENDING_FULFILLMENT',
  /** Displayed as **Open**. */
  OPEN = 'OPEN'
}

/** A summary of the important details for a dispute on an order. */
export type OrderDisputeSummary = Node & {
   __typename?: 'OrderDisputeSummary',
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The type that the dispute was initiated as. */
  initiatedAs: DisputeType,
  /** The current status of the dispute. */
  status: DisputeStatus,
};

export type OrderEdge = {
   __typename?: 'OrderEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of OrderEdge. */
  node: Order,
};

/** Specifies the information to be updated on the requested order. */
export type OrderInput = {
  /** The email address associated with the order. */
  email?: Maybe<Scalars['String']>,
  /** The ID of the order to update. */
  id: Scalars['ID'],
  /** The order note. */
  note?: Maybe<Scalars['String']>,
  /** The order tags. */
  tags?: Maybe<Array<Scalars['String']>>,
  /** The shipping address associated with the order. */
  shippingAddress?: Maybe<MailingAddressInput>,
  /** Custom information to add to the order, represented as a key value pair. Also referred to as note attributes. */
  customAttributes?: Maybe<Array<AttributeInput>>,
  /** The metafields to associate with this order. */
  metafields?: Maybe<Array<MetafieldInput>>,
};

/** Specifies the order to mark as paid. */
export type OrderMarkAsPaidInput = {
  /** The ID of the order to mark as paid. */
  id: Scalars['ID'],
};

/** Return type for `orderMarkAsPaid` mutation. */
export type OrderMarkAsPaidPayload = {
   __typename?: 'OrderMarkAsPaidPayload',
  /** The order marked as paid. */
  order?: Maybe<Order>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Specifies a closed order to open. */
export type OrderOpenInput = {
  /** The ID of the order to open. */
  id: Scalars['ID'],
};

/** Return type for `orderOpen` mutation. */
export type OrderOpenPayload = {
   __typename?: 'OrderOpenPayload',
  /** The opened order. */
  order?: Maybe<Order>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Represents a fraud check on an order. */
export type OrderRisk = {
   __typename?: 'OrderRisk',
  /** 
 * Whether the risk level is shown in the Shopify admin. If false, then this
   * order risk is ignored when Shopify determines the overall risk level for the order.
 */
  display: Scalars['Boolean'],
  /** 
 * The likelihood that an order is fraudulent, based on this order risk.
   * 
   * The level can be set by Shopify risk analysis or by an app.
 */
  level?: Maybe<OrderRiskLevel>,
  /** The risk message that's shown to the merchant in the Shopify admin. */
  message?: Maybe<Scalars['String']>,
};

/** The likelihood that an order is fraudulent. */
export enum OrderRiskLevel {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH'
}

/** List of possible values for an OrderRiskRecommendation recommendation. */
export enum OrderRiskRecommendationResult {
  CANCEL = 'CANCEL',
  INVESTIGATE = 'INVESTIGATE',
  ACCEPT = 'ACCEPT',
  NONE = 'NONE'
}

/** The set of valid sort keys for the orders query. */
export enum OrderSortKeys {
  /** Sort by the `order_number` value. */
  ORDER_NUMBER = 'ORDER_NUMBER',
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `updated_at` value. */
  UPDATED_AT = 'UPDATED_AT',
  /** Sort by the `financial_status` value. */
  FINANCIAL_STATUS = 'FINANCIAL_STATUS',
  /** Sort by the `fulfillment_status` value. */
  FULFILLMENT_STATUS = 'FULFILLMENT_STATUS',
  /** Sort by the `total_price` value. */
  TOTAL_PRICE = 'TOTAL_PRICE',
  /** Sort by the `customer_name` value. */
  CUSTOMER_NAME = 'CUSTOMER_NAME',
  /** Sort by the `processed_at` value. */
  PROCESSED_AT = 'PROCESSED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** A transaction represents an exchange of money as part of an order. */
export type OrderTransaction = Node & {
   __typename?: 'OrderTransaction',
  /** The masked account number associated with the payment method. */
  accountNumber?: Maybe<Scalars['String']>,
  /** The amount of money. */
  amount: Scalars['Money'],
  /** The amount and currency of the transaction in shop and presentment currencies. */
  amountSet: MoneyBag,
  /** The amount and currency of the transaction. */
  amountV2: MoneyV2,
  /** Authorization code associated with the transaction. */
  authorizationCode?: Maybe<Scalars['String']>,
  /** Date and time when the transaction was created. */
  createdAt: Scalars['DateTime'],
  /** A standardized error code, independent of the payment provider. */
  errorCode?: Maybe<OrderTransactionErrorCode>,
  /** The human-readable payment gateway name used to process the transaction. */
  formattedGateway?: Maybe<Scalars['String']>,
  /** The payment gateway used to process the transaction. */
  gateway?: Maybe<Scalars['String']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The kind of transaction. */
  kind: OrderTransactionKind,
  /** Whether the transaction can be manually captured. */
  manuallyCapturable?: Maybe<Scalars['Boolean']>,
  /** Specifies the available amount to refund on the gateway. Only available within SuggestedRefund. */
  maximumRefundable?: Maybe<Scalars['Money']>,
  /** 
 * Specifies the available amount with currency to refund on the gateway.
   * Only available within SuggestedRefund.
 */
  maximumRefundableV2?: Maybe<MoneyV2>,
  /** The associated order. */
  order?: Maybe<Order>,
  /** The associated parent transaction, for example the authorization of a capture. */
  parentTransaction?: Maybe<OrderTransaction>,
  /** Specifies the payment icon to display for this transaction. */
  paymentIcon?: Maybe<Image>,
  /** Specifies the credit card company used to pay for this transaction. */
  paymentMethod?: Maybe<PaymentMethods>,
  /** Date and time when the transaction was processed. */
  processedAt?: Maybe<Scalars['DateTime']>,
  /** 
 * A transaction receipt attached to the transaction by the gateway.
   * The value of this field depends on which gateway processed the transaction.
 */
  receipt?: Maybe<Scalars['String']>,
  /** The status of this transaction. */
  status: OrderTransactionStatus,
  /** Whether the transaction is a test transaction. */
  test: Scalars['Boolean'],
  /** 
 * Specifies the available amount to capture on the gateway.
   * Only available when an amount is capturable or manually mark as paid.
 */
  totalUnsettled?: Maybe<Scalars['Money']>,
  /** 
 * Specifies the available amount with currency to capture on the gateway in shop and presentment currencies.
   * Only available when an amount is capturable or manually mark as paid.
 */
  totalUnsettledSet?: Maybe<MoneyBag>,
  /** 
 * Specifies the available amount with currency to capture on the gateway.
   * Only available when an amount is capturable or manually mark as paid.
 */
  totalUnsettledV2?: Maybe<MoneyV2>,
};


/** A transaction represents an exchange of money as part of an order. */
export type OrderTransactionpaymentIconArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  crop?: Maybe<CropRegion>,
  scale?: Maybe<Scalars['Int']>
};

export type OrderTransactionConnection = {
   __typename?: 'OrderTransactionConnection',
  /** A list of edges. */
  edges: Array<OrderTransactionEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type OrderTransactionEdge = {
   __typename?: 'OrderTransactionEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of OrderTransactionEdge. */
  node: OrderTransaction,
};

/** A standardized error code, independent of the payment provider. */
export enum OrderTransactionErrorCode {
  /** The card number is incorrect. */
  INCORRECT_NUMBER = 'INCORRECT_NUMBER',
  /** The format of the card number is incorrect. */
  INVALID_NUMBER = 'INVALID_NUMBER',
  /** The format of the expiry date is incorrect. */
  INVALID_EXPIRY_DATE = 'INVALID_EXPIRY_DATE',
  /** The format of the CVC is incorrect. */
  INVALID_CVC = 'INVALID_CVC',
  /** The card is expired. */
  EXPIRED_CARD = 'EXPIRED_CARD',
  /** The CVC does not match the card number. */
  INCORRECT_CVC = 'INCORRECT_CVC',
  /** The ZIP or postal code does not match the card number. */
  INCORRECT_ZIP = 'INCORRECT_ZIP',
  /** The address does not match the card number. */
  INCORRECT_ADDRESS = 'INCORRECT_ADDRESS',
  /** The entered PIN is incorrect. */
  INCORRECT_PIN = 'INCORRECT_PIN',
  /** The card was declined. */
  CARD_DECLINED = 'CARD_DECLINED',
  /** There was an error while processing the payment. */
  PROCESSING_ERROR = 'PROCESSING_ERROR',
  /** Call the card issuer. */
  CALL_ISSUER = 'CALL_ISSUER',
  /** 
 * The card has been reported as lost or stolen, and the card issuer has
   * requested that the merchant keep the card and call the number on the back.
 */
  PICK_UP_CARD = 'PICK_UP_CARD',
  /** There is an error in the gateway or merchant configuration. */
  CONFIG_ERROR = 'CONFIG_ERROR',
  /** A real card was used but the gateway was in test mode. */
  TEST_MODE_LIVE_CARD = 'TEST_MODE_LIVE_CARD',
  /** The gateway or merchant configuration doesn't support a feature, such as network tokenization. */
  UNSUPPORTED_FEATURE = 'UNSUPPORTED_FEATURE',
  /** There was an unknown error with processing the payment. */
  GENERIC_ERROR = 'GENERIC_ERROR',
  /** The payment method is not available in the customer's country. */
  INVALID_COUNTRY = 'INVALID_COUNTRY',
  /** The amount is either too high or too low for the provider. */
  INVALID_AMOUNT = 'INVALID_AMOUNT',
  /** The payment method is momentarily unavailable. */
  PAYMENT_METHOD_UNAVAILABLE = 'PAYMENT_METHOD_UNAVAILABLE',
  /** The payment method was invalid. */
  AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD = 'AMAZON_PAYMENTS_INVALID_PAYMENT_METHOD',
  /** The maximum amount has been captured. */
  AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED = 'AMAZON_PAYMENTS_MAX_AMOUNT_CHARGED',
  /** The maximum amount has been refunded. */
  AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED = 'AMAZON_PAYMENTS_MAX_AMOUNT_REFUNDED',
  /** The maximum of 10 authorizations has been captured for an order. */
  AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED = 'AMAZON_PAYMENTS_MAX_AUTHORIZATIONS_CAPTURED',
  /** The maximum of 10 refunds has been processed for an order. */
  AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED = 'AMAZON_PAYMENTS_MAX_REFUNDS_PROCESSED',
  /** The order was canceled, which canceled all open authorizations. */
  AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED = 'AMAZON_PAYMENTS_ORDER_REFERENCE_CANCELED',
  /** The order was not confirmed within three hours. */
  AMAZON_PAYMENTS_STALE = 'AMAZON_PAYMENTS_STALE'
}

/** Specifies the information needed to create an order transaction. */
export type OrderTransactionInput = {
  /** The amount of money for this transaction. */
  amount: Scalars['Money'],
  /** The payment gateway to use for this transaction. */
  gateway: Scalars['String'],
  /** The kind of transaction. */
  kind: OrderTransactionKind,
  /** The ID of the order associated with the transaction. */
  orderId: Scalars['ID'],
  /** The ID of the optional parent transaction, for example the authorization of a capture. */
  parentId?: Maybe<Scalars['ID']>,
};

/** The different kinds of order transactions. */
export enum OrderTransactionKind {
  /** An authorization and capture performed together in a single step. */
  SALE = 'SALE',
  /** A transfer of the money that was reserved during the authorization stage. */
  CAPTURE = 'CAPTURE',
  /** 
 * An amount reserved against the cardholder's funding source.
   * Money does not change hands until the authorization is captured.
 */
  AUTHORIZATION = 'AUTHORIZATION',
  /** A cancellation of a pending authorization or capture. */
  VOID = 'VOID',
  /** 
 * A partial or full return of captured funds to the cardholder.
   * A refund can happen only after a capture is processed.
 */
  REFUND = 'REFUND',
  /** Money returned to the customer when they have paid too much. */
  CHANGE = 'CHANGE',
  /** An authorization for a payment taken with an EMV credit card reader. */
  EMV_AUTHORIZATION = 'EMV_AUTHORIZATION',
  /** A suggested refund transaction that can be used to create a refund. */
  SUGGESTED_REFUND = 'SUGGESTED_REFUND'
}

/** Transaction status' describe the status of a transaction. */
export enum OrderTransactionStatus {
  /** The transaction succeeded. */
  SUCCESS = 'SUCCESS',
  /** The transaction failed. */
  FAILURE = 'FAILURE',
  /** The transaction is pending. */
  PENDING = 'PENDING',
  /** There was an error while processing the transaction. */
  ERROR = 'ERROR',
  /** Awaiting a response. */
  AWAITING_RESPONSE = 'AWAITING_RESPONSE',
  /** The transaction status is unknown. */
  UNKNOWN = 'UNKNOWN'
}

/** Return type for `orderUpdate` mutation. */
export type OrderUpdatePayload = {
   __typename?: 'OrderUpdatePayload',
  /** The updated order. */
  order?: Maybe<Order>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Information about pagination in a connection. */
export type PageInfo = {
   __typename?: 'PageInfo',
  /** Indicates if there are more pages to fetch. */
  hasNextPage: Scalars['Boolean'],
  /** Indicates if there are any pages prior to the current page. */
  hasPreviousPage: Scalars['Boolean'],
};

/** Page size for a printable asset (eg: shipping label). */
export enum PageSize {
  PAGE_8_X_11 = 'PAGE_8_X_11',
  PAGE_4_X_6 = 'PAGE_4_X_6'
}

/** List of payment methods used in Shopify. */
export enum PaymentMethods {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
  DISCOVER = 'DISCOVER',
  AMERICAN_EXPRESS = 'AMERICAN_EXPRESS',
  DINERS_CLUB = 'DINERS_CLUB',
  JCB = 'JCB',
  DANKORT = 'DANKORT',
  MAESTRO = 'MAESTRO',
  FORBRUGSFORENINGEN = 'FORBRUGSFORENINGEN',
  PAYPAL = 'PAYPAL',
  BOGUS = 'BOGUS',
  BITCOIN = 'BITCOIN',
  LITECOIN = 'LITECOIN',
  DOGECOIN = 'DOGECOIN'
}

/** Settings related to payments. */
export type PaymentSettings = {
   __typename?: 'PaymentSettings',
  /** List of the digital wallets which the shop supports. */
  supportedDigitalWallets: Array<DigitalWallet>,
};

/** Available layouts for a POS link. */
export enum PosLinkLayout {
  MODAL = 'MODAL',
  FULLSCREEN = 'FULLSCREEN'
}

/** Resource locations for a POS link. */
export enum PosLinkResourceLocation {
  EDIT = 'EDIT',
  COMPLETE = 'COMPLETE'
}

/** Resource types for a POS link. */
export enum PosLinkResourceType {
  CARTS = 'CARTS',
  ORDERS = 'ORDERS'
}

/** 
 * Price rules are a set of conditions, including entitlements and prerequisites,
 * that must be met in order for a discount code to apply.
 */
export type PriceRule = Node & CommentEventSubject & LegacyInteroperability & HasEvents & {
   __typename?: 'PriceRule',
  /** The maximum number of times the price rule will be allocated onto an order. */
  allocationLimit?: Maybe<Scalars['Int']>,
  /** The method by which the price rule's value is allocated to its entitled items. */
  allocationMethod: PriceRuleAllocationMethod,
  /** The application that created the price rule. */
  app?: Maybe<App>,
  /** When the price rule was created. */
  createdAt: Scalars['DateTime'],
  /** A selection of customers for whom the price rule applies. */
  customerSelection: PriceRuleCustomerSelection,
  /** List of the price rule's discount codes. */
  discountCodes: PriceRuleDiscountCodeConnection,
  /** How many discount codes associated with the price rule. */
  discountCodesCount: Scalars['Int'],
  /** When the price rule expires, or never if null. */
  endsAt?: Maybe<Scalars['DateTime']>,
  /** Quantity of prerequisite items required for the price rule to be applicable,  compared to quantity of entitled items. */
  entitlementToPrerequisiteQuantityRatio?: Maybe<PriceRuleEntitlementToPrerequisiteQuantityRatio>,
  /** The paginated list of events associated with the price rule. */
  events: EventConnection,
  /** A list of features used by the price rule. */
  features: Array<PriceRuleFeature>,
  /** Indicates whether or not any timeline comments have been made on the price rule. */
  hasTimelineComment: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The items to which the price rule applies. */
  itemEntitlements: PriceRuleItemEntitlements,
  /** The line item objects required for the price rule to be applicable. */
  itemPrerequisites: PriceRuleLineItemPrerequisites,
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** Whether the price rule can be applied only once per customer. */
  oncePerCustomer: Scalars['Boolean'],
  /** The number of the entitled items must fall within this range for the price rule to be applicable. */
  prerequisiteQuantityRange?: Maybe<PriceRuleQuantityRange>,
  /** The shipping cost must fall within this range for the price rule to be applicable. */
  prerequisiteShippingPriceRange?: Maybe<PriceRuleMoneyRange>,
  /** The sum of the entitled items subtotal prices must fall within this range for the price rule to be applicable. */
  prerequisiteSubtotalRange?: Maybe<PriceRuleMoneyRange>,
  /** Quantity of prerequisite items required for the price rule to be applicable,  compared to quantity of entitled items. */
  prerequisiteToEntitlementQuantityRatio?: Maybe<PriceRulePrerequisiteToEntitlementQuantityRatio>,
  /** URLs that can be used to share the discount. */
  shareableUrls: Array<PriceRuleShareableUrl>,
  /** The shipping lines to which the price rule applies. */
  shippingEntitlements: PriceRuleShippingLineEntitlements,
  /** When the price rule is starting to be active. */
  startsAt: Scalars['DateTime'],
  /** The status of the price rule. */
  status: PriceRuleStatus,
  /** A summary of the price rule. */
  summary?: Maybe<Scalars['String']>,
  /** The type of lines (line_item or shipping_line) to which the price rule applies. */
  target: PriceRuleTarget,
  /** The title of the price rule. */
  title: Scalars['String'],
  /** The total sales brought by the price rule. */
  totalSales?: Maybe<MoneyV2>,
  /** A list of features used by the price rule. */
  traits: Array<PriceRuleTrait>,
  /** How many times the price rule has been used. */
  usageCount: Scalars['Int'],
  /** The maximum number of times the price rule can be applied. */
  usageLimit?: Maybe<Scalars['Int']>,
  /** A time period during which a price rule is applicable. */
  validityPeriod: PriceRuleValidityPeriod,
  /** The value of the price rule. */
  value: PriceRuleValue,
  /** The value of the price rule. */
  valueV2: PricingValue,
};


/** 
 * Price rules are a set of conditions, including entitlements and prerequisites,
 * that must be met in order for a discount code to apply.
 */
export type PriceRulediscountCodesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<DiscountCodeSortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};


/** 
 * Price rules are a set of conditions, including entitlements and prerequisites,
 * that must be met in order for a discount code to apply.
 */
export type PriceRuleeventsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<EventSortKeys>,
  query?: Maybe<Scalars['String']>
};

/** Return type for `priceRuleActivate` mutation. */
export type PriceRuleActivatePayload = {
   __typename?: 'PriceRuleActivatePayload',
  /** The activated price rule. */
  priceRule?: Maybe<PriceRule>,
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** The method by which the price rule's value is allocated to its entitled items. */
export enum PriceRuleAllocationMethod {
  /** The value will be applied to each of the entitled items. */
  EACH = 'EACH',
  /** The value will be applied once across the entitled items. */
  ACROSS = 'ACROSS'
}

export type PriceRuleConnection = {
   __typename?: 'PriceRuleConnection',
  /** A list of edges. */
  edges: Array<PriceRuleEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `priceRuleCreate` mutation. */
export type PriceRuleCreatePayload = {
   __typename?: 'PriceRuleCreatePayload',
  /** The newly created price rule. */
  priceRule?: Maybe<PriceRule>,
  /** The newly created discount code. */
  priceRuleDiscountCode?: Maybe<PriceRuleDiscountCode>,
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** A selection of customers for whom the price rule applies. */
export type PriceRuleCustomerSelection = {
   __typename?: 'PriceRuleCustomerSelection',
  /** List of customers to whom the price rule applies. */
  customers: CustomerConnection,
  /** Whether the price rule applies to all customers. */
  forAllCustomers: Scalars['Boolean'],
  /** List of customer saved searches that contain the customers to whom the price rule applies. */
  savedSearches: Array<SavedSearch>,
};


/** A selection of customers for whom the price rule applies. */
export type PriceRuleCustomerSelectioncustomersArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<CustomerSortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};

/** Specifies the input fields to update a price rule customer selection. */
export type PriceRuleCustomerSelectionInput = {
  /** Whether the price rule applies to all customers. */
  forAllCustomers?: Maybe<Scalars['Boolean']>,
  /** 
 * List of customer saved searches that contain the customers to whom the price
   * rule applies. No single customer IDs may be present.
 */
  savedSearchIds?: Maybe<Array<Scalars['ID']>>,
  /** List of customers to add to the current list of customers to whom the price rule applies. `savedSearchIds` must be empty. */
  customerIdsToAdd?: Maybe<Array<Scalars['ID']>>,
  /** A list of customers to remove from the current list of customers to whom the price rule applies. */
  customerIdsToRemove?: Maybe<Array<Scalars['ID']>>,
};

/** Return type for `priceRuleDeactivate` mutation. */
export type PriceRuleDeactivatePayload = {
   __typename?: 'PriceRuleDeactivatePayload',
  /** The deactivated price rule. */
  priceRule?: Maybe<PriceRule>,
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `priceRuleDelete` mutation. */
export type PriceRuleDeletePayload = {
   __typename?: 'PriceRuleDeletePayload',
  /** The id price of the deleted price rule. */
  deletedPriceRuleId?: Maybe<Scalars['ID']>,
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>,
  /** The shop of the deleted price rule. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** A discount code of a price rule. */
export type PriceRuleDiscountCode = Node & {
   __typename?: 'PriceRuleDiscountCode',
  /** The application that created the discount code. */
  app?: Maybe<App>,
  /** The code of a discount. */
  code: Scalars['String'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The usage count of the discount code. */
  usageCount: Scalars['Int'],
};

export type PriceRuleDiscountCodeConnection = {
   __typename?: 'PriceRuleDiscountCodeConnection',
  /** A list of edges. */
  edges: Array<PriceRuleDiscountCodeEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `priceRuleDiscountCodeCreate` mutation. */
export type PriceRuleDiscountCodeCreatePayload = {
   __typename?: 'PriceRuleDiscountCodeCreatePayload',
  /** The updated price rule. */
  priceRule?: Maybe<PriceRule>,
  /** The newly created discount code. */
  priceRuleDiscountCode?: Maybe<PriceRuleDiscountCode>,
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type PriceRuleDiscountCodeEdge = {
   __typename?: 'PriceRuleDiscountCodeEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of PriceRuleDiscountCodeEdge. */
  node: PriceRuleDiscountCode,
};

/** Specifies the input fields to manipulate a discount code. */
export type PriceRuleDiscountCodeInput = {
  /** The code of a discount. */
  code?: Maybe<Scalars['String']>,
};

/** Return type for `priceRuleDiscountCodeUpdate` mutation. */
export type PriceRuleDiscountCodeUpdatePayload = {
   __typename?: 'PriceRuleDiscountCodeUpdatePayload',
  /** The updated price rule. */
  priceRule?: Maybe<PriceRule>,
  /** The updated discount code. */
  priceRuleDiscountCode?: Maybe<PriceRuleDiscountCode>,
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type PriceRuleEdge = {
   __typename?: 'PriceRuleEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of PriceRuleEdge. */
  node: PriceRule,
};

/** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
export type PriceRuleEntitlementToPrerequisiteQuantityRatio = {
   __typename?: 'PriceRuleEntitlementToPrerequisiteQuantityRatio',
  /** The quantity of entitlements in the ratio. */
  entitlementQuantity: Scalars['Int'],
  /** The quantity of prerequisites in the ratio. */
  prerequisiteQuantity: Scalars['Int'],
};

/** 
 * Specifies the quantity of prerequisite items required for the price rule to be
 * applicable, compared to quantity of entitled items.
 */
export type PriceRuleEntitlementToPrerequisiteQuantityRatioInput = {
  /** The quantity of entitlements in the ratio. */
  entitlementQuantity?: Maybe<Scalars['Int']>,
  /** The quantity of prerequisites in the ratio. */
  prerequisiteQuantity?: Maybe<Scalars['Int']>,
};

/** Possible error codes that could be returned by a price rule mutation. */
export enum PriceRuleErrorCode {
  /** Input value is blank. */
  BLANK = 'BLANK',
  /** Input value should be equal to allowed value. */
  EQUAL_TO = 'EQUAL_TO',
  /** Input value should be greater than minimum allowed value. */
  GREATER_THAN = 'GREATER_THAN',
  /** Input value should be greater than or equal to minimum allowed value. */
  GREATER_THAN_OR_EQUAL_TO = 'GREATER_THAN_OR_EQUAL_TO',
  /** Input value is invalid. */
  INVALID = 'INVALID',
  /** Input value should be less than maximum allowed value. */
  LESS_THAN = 'LESS_THAN',
  /** Input value should be less or equal to maximum allowed value. */
  LESS_THAN_OR_EQUAL_TO = 'LESS_THAN_OR_EQUAL_TO',
  /** Input value is already taken. */
  TAKEN = 'TAKEN',
  /** Input value is too long. */
  TOO_LONG = 'TOO_LONG',
  /** Input value is too short. */
  TOO_SHORT = 'TOO_SHORT',
  /** Unexpected internal error happened. */
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  /** Too many arguments provided. */
  TOO_MANY_ARGUMENTS = 'TOO_MANY_ARGUMENTS',
  /** Missing a required argument. */
  MISSING_ARGUMENT = 'MISSING_ARGUMENT',
  /** Duplicate customer prerequisite id present. */
  CUSTOMER_PREREQUISITE_DUPLICATE = 'CUSTOMER_PREREQUISITE_DUPLICATE',
  CANNOT_ENTITLE_COLLECTIONS_WITH_PRODUCTS_OR_VARIANTS = 'CANNOT_ENTITLE_COLLECTIONS_WITH_PRODUCTS_OR_VARIANTS',
  ITEM_ENTITLEMENT_INVALID_TYPE = 'ITEM_ENTITLEMENT_INVALID_TYPE',
  ITEM_ENTITLEMENTS_DUPLICATE_COLLECTION = 'ITEM_ENTITLEMENTS_DUPLICATE_COLLECTION',
  ITEM_ENTITLEMENTS_DUPLICATE_PRODUCT = 'ITEM_ENTITLEMENTS_DUPLICATE_PRODUCT',
  ITEM_ENTITLEMENTS_DUPLICATE_VARIANT = 'ITEM_ENTITLEMENTS_DUPLICATE_VARIANT',
  ITEM_ENTITLEMENTS_EXCEEDED_MAX_COLLECTION = 'ITEM_ENTITLEMENTS_EXCEEDED_MAX_COLLECTION',
  ITEM_ENTITLEMENTS_EXCEEDED_MAX_PRODUCT = 'ITEM_ENTITLEMENTS_EXCEEDED_MAX_PRODUCT',
  ITEM_ENTITLEMENTS_EXCEEDED_MAX_VARIANT = 'ITEM_ENTITLEMENTS_EXCEEDED_MAX_VARIANT',
  ITEM_ENTITLEMENTS_INVALID_COLLECTION = 'ITEM_ENTITLEMENTS_INVALID_COLLECTION',
  ITEM_ENTITLEMENTS_INVALID_PRODUCT = 'ITEM_ENTITLEMENTS_INVALID_PRODUCT',
  ITEM_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION = 'ITEM_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION',
  ITEM_ENTITLEMENTS_INVALID_VARIANT = 'ITEM_ENTITLEMENTS_INVALID_VARIANT',
  ITEM_ENTITLEMENTS_MISSING = 'ITEM_ENTITLEMENTS_MISSING',
  VARIANT_ALREADY_ENTITLED_THROUGH_PRODUCT = 'VARIANT_ALREADY_ENTITLED_THROUGH_PRODUCT',
  CANNOT_PREREQUISITE_COLLECTION_WITH_PRODUCT_OR_VARIANTS = 'CANNOT_PREREQUISITE_COLLECTION_WITH_PRODUCT_OR_VARIANTS',
  ITEM_PREREQUISITES_DUPLICATE_COLLECTION = 'ITEM_PREREQUISITES_DUPLICATE_COLLECTION',
  ITEM_PREREQUISITES_DUPLICATE_PRODUCT = 'ITEM_PREREQUISITES_DUPLICATE_PRODUCT',
  ITEM_PREREQUISITES_DUPLICATE_VARIANT = 'ITEM_PREREQUISITES_DUPLICATE_VARIANT',
  ITEM_PREREQUISITES_EXCEEDED_MAX = 'ITEM_PREREQUISITES_EXCEEDED_MAX',
  ITEM_PREREQUISITES_INVALID_COLLECTION = 'ITEM_PREREQUISITES_INVALID_COLLECTION',
  ITEM_PREREQUISITES_INVALID_PRODUCT = 'ITEM_PREREQUISITES_INVALID_PRODUCT',
  ITEM_PREREQUISITES_INVALID_TYPE = 'ITEM_PREREQUISITES_INVALID_TYPE',
  ITEM_PREREQUISITES_INVALID_VARIANT = 'ITEM_PREREQUISITES_INVALID_VARIANT',
  ITEM_PREREQUISITES_MISSING = 'ITEM_PREREQUISITES_MISSING',
  ITEM_PREREQUISITES_MUST_BE_EMPTY = 'ITEM_PREREQUISITES_MUST_BE_EMPTY',
  INVALID_TARGET_TYPE_PREREQUISITE_SHIPPING_PRICE_RANGE = 'INVALID_TARGET_TYPE_PREREQUISITE_SHIPPING_PRICE_RANGE',
  SHIPPING_ENTITLEMENTS_DUPLICATE_COUNTRY = 'SHIPPING_ENTITLEMENTS_DUPLICATE_COUNTRY',
  SHIPPING_ENTITLEMENTS_EXCEEDED_MAX = 'SHIPPING_ENTITLEMENTS_EXCEEDED_MAX',
  SHIPPING_ENTITLEMENTS_INVALID_COUNTRY = 'SHIPPING_ENTITLEMENTS_INVALID_COUNTRY',
  SHIPPING_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION = 'SHIPPING_ENTITLEMENTS_INVALID_TARGET_TYPE_OR_SELECTION',
  SHIPPING_ENTITLEMENTS_MISSING = 'SHIPPING_ENTITLEMENTS_MISSING',
  SHIPPING_ENTITLEMENTS_UNSUPPORTED_DESTINATION_TYPE = 'SHIPPING_ENTITLEMENTS_UNSUPPORTED_DESTINATION_TYPE',
  BOTH_CUSTOMER_AND_SAVED_SEARCH_PREREQUISITES_SELECTED = 'BOTH_CUSTOMER_AND_SAVED_SEARCH_PREREQUISITES_SELECTED',
  CUSTOMER_PREREQUISITES_EXCEEDED_MAX = 'CUSTOMER_PREREQUISITES_EXCEEDED_MAX',
  CUSTOMER_PREREQUISITES_INVALID_SELECTION = 'CUSTOMER_PREREQUISITES_INVALID_SELECTION',
  CUSTOMER_PREREQUISITES_MISSING = 'CUSTOMER_PREREQUISITES_MISSING',
  CUSTOMER_SAVED_SEARCH_DUPLICATE = 'CUSTOMER_SAVED_SEARCH_DUPLICATE',
  CUSTOMER_SAVED_SEARCH_EXCEEDED_MAX = 'CUSTOMER_SAVED_SEARCH_EXCEEDED_MAX',
  CUSTOMER_SAVED_SEARCH_INVALID = 'CUSTOMER_SAVED_SEARCH_INVALID',
  DISCOUNT_CODE_DUPLICATE = 'DISCOUNT_CODE_DUPLICATE',
  BOGO_INVALID_TARGET_SELECTION = 'BOGO_INVALID_TARGET_SELECTION',
  BOGO_INVALID_TARGET_TYPE = 'BOGO_INVALID_TARGET_TYPE',
  BOGO_INVALID_VALUE_TYPE = 'BOGO_INVALID_VALUE_TYPE',
  ALLOCATION_METHOD_MUST_BE_ACROSS_FOR_GIVEN_TARGET_SELECTION = 'ALLOCATION_METHOD_MUST_BE_ACROSS_FOR_GIVEN_TARGET_SELECTION',
  END_DATE_BEFORE_START_DATE = 'END_DATE_BEFORE_START_DATE',
  PREREQUISITE_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT = 'PREREQUISITE_SUBTOTAL_AND_QUANTITY_RANGE_BOTH_PRESENT',
  PRICE_RULE_ALLOCATION_LIMIT_IS_ZERO = 'PRICE_RULE_ALLOCATION_LIMIT_IS_ZERO',
  PRICE_RULE_ALLOCATION_LIMIT_ON_NON_BOGO = 'PRICE_RULE_ALLOCATION_LIMIT_ON_NON_BOGO',
  PRICE_RULE_EXCEEDED_MAX_DISCOUNT_CODE = 'PRICE_RULE_EXCEEDED_MAX_DISCOUNT_CODE',
  PRICE_RULE_PERCENTAGE_VALUE_OUTSIDE_RANGE = 'PRICE_RULE_PERCENTAGE_VALUE_OUTSIDE_RANGE',
  SHOP_EXCEEDED_MAX_PRICE_RULES = 'SHOP_EXCEEDED_MAX_PRICE_RULES'
}

/** A list of features used by the price rule. */
export enum PriceRuleFeature {
  /** The price rule supports quantity BXGY discounts. */
  BUY_ONE_GET_ONE = 'BUY_ONE_GET_ONE',
  /** The price rule supports BXGY discounts using custom allocation limit. */
  BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT = 'BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT',
  /** The price rule supports bulk discounts. */
  BULK = 'BULK',
  /** The price rule supports specific customers. */
  SPECIFIC_CUSTOMERS = 'SPECIFIC_CUSTOMERS',
  /** The price rule supports quantity discounts. */
  QUANTITY_DISCOUNTS = 'QUANTITY_DISCOUNTS'
}

/** The value of a fixed amount price rule. */
export type PriceRuleFixedAmountValue = {
   __typename?: 'PriceRuleFixedAmountValue',
  /** The monetary value of the price rule. */
  amount: Scalars['Money'],
};

/** Specifies the input fields to manipulate a price rule. */
export type PriceRuleInput = {
  /** PriceRuleValidityPeriod for the price rule. */
  validityPeriod?: Maybe<PriceRuleValidityPeriodInput>,
  /** Whether the price rule can be applied only once per customer. */
  oncePerCustomer?: Maybe<Scalars['Boolean']>,
  /** A selection of customers for whom the price rule applies. */
  customerSelection?: Maybe<PriceRuleCustomerSelectionInput>,
  /** The maximum number of times the price rule can be applied. */
  usageLimit?: Maybe<Scalars['Int']>,
  /** Title of the price rule. */
  title?: Maybe<Scalars['String']>,
  /** The maximum number of times the price rule will be allocated onto an order. */
  allocationLimit?: Maybe<Scalars['Int']>,
  /** The method (each or across) by which the price rule's value is allocated to its entitled items. */
  allocationMethod?: Maybe<PriceRuleAllocationMethod>,
  /** The value of the price rule. */
  value?: Maybe<PriceRuleValueInput>,
  /** The type of lines (line_item or shipping_line) to which the price rule applies. */
  target?: Maybe<PriceRuleTarget>,
  /** The sum of the entitled items subtotal prices must fall within this range for the price rule to be applicable. */
  prerequisiteSubtotalRange?: Maybe<PriceRuleMoneyRangeInput>,
  /** The number of the entitled items must fall within this range for the price rule to be applicable. */
  prerequisiteQuantityRange?: Maybe<PriceRuleQuantityRangeInput>,
  /** The shipping cost must fall within this range for the price rule to be applicable. */
  prerequisiteShippingPriceRange?: Maybe<PriceRuleMoneyRangeInput>,
  /** The items to which the price rule applies. */
  itemEntitlements?: Maybe<PriceRuleItemEntitlementsInput>,
  /** The items needed to apply the price rule. */
  itemPrerequisites?: Maybe<PriceRuleItemPrerequisitesInput>,
  /** The shipping lines to which the price rule applies. */
  shippingEntitlements?: Maybe<PriceRuleShippingEntitlementsInput>,
  /** 
 * Quantity of prerequisite items required for the price rule to be applicable,
   * compared to quantity of entitled items. This argument is deprecated: Use
   * `prerequisiteToEntitlementQuantityRatio` instead.
 */
  entitlementToPrerequisiteQuantityRatio?: Maybe<PriceRuleEntitlementToPrerequisiteQuantityRatioInput>,
  /** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
  prerequisiteToEntitlementQuantityRatio?: Maybe<PriceRulePrerequisiteToEntitlementQuantityRatioInput>,
};

/** 
 * The items to which this price rule applies. This may be multiple products,
 * product variants, collections or combinations of the aforementioned.
 */
export type PriceRuleItemEntitlements = {
   __typename?: 'PriceRuleItemEntitlements',
  /** The collections to which the price rule applies. */
  collections: CollectionConnection,
  /** The product variants to which the price rule applies. */
  productVariants: ProductVariantConnection,
  /** The products to which the price rule applies. */
  products: ProductConnection,
  /** Whether the price rule applies to all line items. */
  targetAllLineItems: Scalars['Boolean'],
};


/** 
 * The items to which this price rule applies. This may be multiple products,
 * product variants, collections or combinations of the aforementioned.
 */
export type PriceRuleItemEntitlementscollectionsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * The items to which this price rule applies. This may be multiple products,
 * product variants, collections or combinations of the aforementioned.
 */
export type PriceRuleItemEntitlementsproductVariantsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * The items to which this price rule applies. This may be multiple products,
 * product variants, collections or combinations of the aforementioned.
 */
export type PriceRuleItemEntitlementsproductsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** Specifies the input fields to update a price rule line item entitlement. */
export type PriceRuleItemEntitlementsInput = {
  /** Whether the price rule applies to all items. */
  targetAllLineItems?: Maybe<Scalars['Boolean']>,
  /** The products to which the price rule applies. */
  productIds?: Maybe<Array<Scalars['ID']>>,
  /** The product variants to which the price rule applies. */
  productVariantIds?: Maybe<Array<Scalars['ID']>>,
  /** The collections to which the price rule applies. */
  collectionIds?: Maybe<Array<Scalars['ID']>>,
};

/** Specifies the input fields to update a price rule's item prerequisites. */
export type PriceRuleItemPrerequisitesInput = {
  /** The products needed for the price rule to be applied. */
  productIds?: Maybe<Array<Scalars['ID']>>,
  /** The product variants needed for the price rule to be applied. */
  productVariantIds?: Maybe<Array<Scalars['ID']>>,
  /** The collections needed for the price rule to be applied. */
  collectionIds?: Maybe<Array<Scalars['ID']>>,
};

/** 
 * Single or multiple line item products, product variants or collections required
 * for the price rule to be applicable, can also be provided in combination.
 */
export type PriceRuleLineItemPrerequisites = {
   __typename?: 'PriceRuleLineItemPrerequisites',
  /** The collections required for the price rule to be applicable. */
  collections: CollectionConnection,
  /** The product variants required for the price rule to be applicable. */
  productVariants: ProductVariantConnection,
  /** The products required for the price rule to be applicable. */
  products: ProductConnection,
};


/** 
 * Single or multiple line item products, product variants or collections required
 * for the price rule to be applicable, can also be provided in combination.
 */
export type PriceRuleLineItemPrerequisitescollectionsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * Single or multiple line item products, product variants or collections required
 * for the price rule to be applicable, can also be provided in combination.
 */
export type PriceRuleLineItemPrerequisitesproductVariantsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * Single or multiple line item products, product variants or collections required
 * for the price rule to be applicable, can also be provided in combination.
 */
export type PriceRuleLineItemPrerequisitesproductsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** A money range within which the price rule is applicable. */
export type PriceRuleMoneyRange = {
   __typename?: 'PriceRuleMoneyRange',
  /** The lower bound of the money range. */
  greaterThan?: Maybe<Scalars['Money']>,
  /** The lower bound or equal of the money range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Money']>,
  /** The upper bound of the money range. */
  lessThan?: Maybe<Scalars['Money']>,
  /** The upper bound or equal of the money range. */
  lessThanOrEqualTo?: Maybe<Scalars['Money']>,
};

/** Specifies the input fields to update the money range within which the price rule is applicable. */
export type PriceRuleMoneyRangeInput = {
  /** The upper bound of the money range. */
  lessThan?: Maybe<Scalars['Money']>,
  /** The upper or equal bound of the money range. */
  lessThanOrEqualTo?: Maybe<Scalars['Money']>,
  /** The lower bound of the money range. */
  greaterThan?: Maybe<Scalars['Money']>,
  /** The lower or equal bound of the money range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Money']>,
};

/** The value of a percent price rule. */
export type PriceRulePercentValue = {
   __typename?: 'PriceRulePercentValue',
  /** The percent value of the price rule. */
  percentage: Scalars['Float'],
};

/** Quantity of prerequisite items required for the price rule to be applicable, compared to quantity of entitled items. */
export type PriceRulePrerequisiteToEntitlementQuantityRatio = {
   __typename?: 'PriceRulePrerequisiteToEntitlementQuantityRatio',
  /** The quantity of entitlements in the ratio. */
  entitlementQuantity: Scalars['Int'],
  /** The quantity of prerequisites in the ratio. */
  prerequisiteQuantity: Scalars['Int'],
};

/** 
 * Specifies the quantity of prerequisite items required for the price rule to be
 * applicable, compared to quantity of entitled items.
 */
export type PriceRulePrerequisiteToEntitlementQuantityRatioInput = {
  /** The quantity of entitlements in the ratio. */
  entitlementQuantity?: Maybe<Scalars['Int']>,
  /** The quantity of prerequisites in the ratio. */
  prerequisiteQuantity?: Maybe<Scalars['Int']>,
};

/** A quantity range within which the price rule is applicable. */
export type PriceRuleQuantityRange = {
   __typename?: 'PriceRuleQuantityRange',
  /** The lower bound of the quantity range. */
  greaterThan?: Maybe<Scalars['Int']>,
  /** The lower bound or equal of the quantity range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>,
  /** The upper bound of the quantity range. */
  lessThan?: Maybe<Scalars['Int']>,
  /** The upper bound or equal of the quantity range. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>,
};

/** Specifies the input fields to update the quantity range within which the price rule is applicable. */
export type PriceRuleQuantityRangeInput = {
  /** The upper bound of the quantity range. */
  lessThan?: Maybe<Scalars['Int']>,
  /** The upper or equal bound of the quantity range. */
  lessThanOrEqualTo?: Maybe<Scalars['Int']>,
  /** The lower bound of the quantity range. */
  greaterThan?: Maybe<Scalars['Int']>,
  /** The lower or equal bound of the quantity range. */
  greaterThanOrEqualTo?: Maybe<Scalars['Int']>,
};

/** Shareable URL for the discount code associated with the price rule. */
export type PriceRuleShareableUrl = {
   __typename?: 'PriceRuleShareableUrl',
  /** Image URL of the item (product or collection) to which discount applies. */
  targetItemImage?: Maybe<Image>,
  /** Type of page where URL lands. */
  targetType: PriceRuleShareableUrlTargetType,
  /** Title for the page where URL lands. */
  title: Scalars['String'],
  /** Actual URL for the discount code. */
  url: Scalars['URL'],
};

/** Page type where shareable URL lands. */
export enum PriceRuleShareableUrlTargetType {
  HOME = 'HOME',
  PRODUCT = 'PRODUCT',
  COLLECTION = 'COLLECTION'
}

/** Specifies the input fields to update a price rule shipping entitlement. */
export type PriceRuleShippingEntitlementsInput = {
  /** Whether the price rule applies to all shipping lines. */
  targetAllShippingLines?: Maybe<Scalars['Boolean']>,
  /** The codes for the countries to which the price rule applies to. */
  countryCodes?: Maybe<Array<CountryCode>>,
  /** Whether the price rule is applicable to countries that have not been defined in the shop's shipping zones. */
  includeRestOfWorld?: Maybe<Scalars['Boolean']>,
};

/** The shipping lines to which the price rule applies to. */
export type PriceRuleShippingLineEntitlements = {
   __typename?: 'PriceRuleShippingLineEntitlements',
  /** The codes for the countries to which the price rule applies to. */
  countryCodes: Array<CountryCode>,
  /** Whether the price rule is applicable to countries that have not been defined in the shop's shipping zones. */
  includeRestOfWorld: Scalars['Boolean'],
  /** Whether the price rule applies to all shipping lines. */
  targetAllShippingLines: Scalars['Boolean'],
};

/** The set of valid sort keys for the priceRules query. */
export enum PriceRuleSortKeys {
  /** Sort by the `starts_at` value. */
  STARTS_AT = 'STARTS_AT',
  /** Sort by the `ends_at` value. */
  ENDS_AT = 'ENDS_AT',
  /** Sort by the `title` value. */
  TITLE = 'TITLE',
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `updated_at` value. */
  UPDATED_AT = 'UPDATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** The status of the price rule. */
export enum PriceRuleStatus {
  ACTIVE = 'ACTIVE',
  EXPIRED = 'EXPIRED',
  SCHEDULED = 'SCHEDULED'
}

/** The type of lines (line_item or shipping_line) to which the price rule applies. */
export enum PriceRuleTarget {
  /** The price rule applies to line items. */
  LINE_ITEM = 'LINE_ITEM',
  /** The price rule applies to shipping lines. */
  SHIPPING_LINE = 'SHIPPING_LINE'
}

/** A list of features used by the price rule. */
export enum PriceRuleTrait {
  /** The price rule supports quantity BXGY discounts. */
  BUY_ONE_GET_ONE = 'BUY_ONE_GET_ONE',
  /** The price rule supports BXGY discounts using custom allocation limit. */
  BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT = 'BUY_ONE_GET_ONE_WITH_ALLOCATION_LIMIT',
  /** The price rule supports bulk discounts. */
  BULK = 'BULK',
  /** The price rule supports specific customers. */
  SPECIFIC_CUSTOMERS = 'SPECIFIC_CUSTOMERS',
  /** The price rule supports quantity discounts. */
  QUANTITY_DISCOUNTS = 'QUANTITY_DISCOUNTS'
}

/** Return type for `priceRuleUpdate` mutation. */
export type PriceRuleUpdatePayload = {
   __typename?: 'PriceRuleUpdatePayload',
  /** The updated price rule. */
  priceRule?: Maybe<PriceRule>,
  /** The updated discount code. */
  priceRuleDiscountCode?: Maybe<PriceRuleDiscountCode>,
  /** List of errors that occurred executing the mutation. */
  priceRuleUserErrors: Array<PriceRuleUserError>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Represents an error that happens during execution of a price rule mutation. */
export type PriceRuleUserError = DisplayableError & {
   __typename?: 'PriceRuleUserError',
  /** Error code to uniquely identify the error. */
  code?: Maybe<PriceRuleErrorCode>,
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>,
  /** The error message. */
  message: Scalars['String'],
};

/** A time period during which a price rule is applicable. */
export type PriceRuleValidityPeriod = {
   __typename?: 'PriceRuleValidityPeriod',
  /** The time after which the price rule becomes invalid. */
  end?: Maybe<Scalars['DateTime']>,
  /** The time after which the price rule is valid. */
  start: Scalars['DateTime'],
};

/** Specifies the input fields to update the validity period of a price rule. */
export type PriceRuleValidityPeriodInput = {
  start: Scalars['DateTime'],
  end?: Maybe<Scalars['DateTime']>,
};

/** The value of the price rule. */
export type PriceRuleValue = PriceRulePercentValue | PriceRuleFixedAmountValue;

/** Specifies the input fields to update a price rule. */
export type PriceRuleValueInput = {
  /** The percentage value of the price rule. */
  percentageValue?: Maybe<Scalars['Float']>,
  /** The fixed amount value of the price rule. */
  fixedAmountValue?: Maybe<Scalars['Money']>,
};

/** The value of the percentage pricing object. */
export type PricingPercentageValue = {
   __typename?: 'PricingPercentageValue',
  /** The percentage value of the object. */
  percentage: Scalars['Float'],
};

/** The value of the pricing object. */
export type PricingValue = PricingPercentageValue | MoneyV2;

/** 
 * Private metafields represent custom metadata that is attached to a resource.
 * Private metafields are private to the application that creates them on a shop's resources.
 */
export type PrivateMetafield = Node & {
   __typename?: 'PrivateMetafield',
  /** The id of the private metafield. */
  id: Scalars['ID'],
  /** The key name for a private metafield. */
  key: Scalars['String'],
  /** The namespace for a private metafield. */
  namespace: Scalars['String'],
  /** The value of a private metafield. */
  value: Scalars['String'],
  /** Represents the private metafield value type. */
  valueType: PrivateMetafieldValueType,
};

export type PrivateMetafieldConnection = {
   __typename?: 'PrivateMetafieldConnection',
  /** A list of edges. */
  edges: Array<PrivateMetafieldEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Specifies the input fields for a PrivateMetafield. */
export type PrivateMetafieldDeleteInput = {
  /** The ID of the owning resource. */
  owner?: Maybe<Scalars['ID']>,
  /** The namespace for the private metafield. */
  namespace: Scalars['String'],
  /** The key for the private metafield. */
  key: Scalars['String'],
};

/** Return type for `privateMetafieldDelete` mutation. */
export type PrivateMetafieldDeletePayload = {
   __typename?: 'PrivateMetafieldDeletePayload',
  /** The ID of private metafield that was deleted. */
  deletedPrivateMetafieldId?: Maybe<Scalars['ID']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type PrivateMetafieldEdge = {
   __typename?: 'PrivateMetafieldEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of PrivateMetafieldEdge. */
  node: PrivateMetafield,
};

/** Specifies the input fields for a PrivateMetafield. */
export type PrivateMetafieldInput = {
  /** The owning resource. */
  owner?: Maybe<Scalars['ID']>,
  /** The namespace for the private metafield. */
  namespace: Scalars['String'],
  /** The key for the private metafield. */
  key: Scalars['String'],
  /** The value and value type of the metafield, wrapped in a ValueInput object. */
  valueInput: PrivateMetafieldValueInput,
};

/** Return type for `privateMetafieldUpsert` mutation. */
export type PrivateMetafieldUpsertPayload = {
   __typename?: 'PrivateMetafieldUpsertPayload',
  /** The private metafield that was created or updated. */
  privateMetafield?: Maybe<PrivateMetafield>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Value Input wraps two fields of Private Metafields into one. Those fields are value and value_type. */
export type PrivateMetafieldValueInput = {
  /** The value of a private metafield. */
  value: Scalars['String'],
  /** Represents the private metafield value type. */
  valueType: PrivateMetafieldValueType,
};

/** Private Metafield value types. */
export enum PrivateMetafieldValueType {
  /** A private metafield value type. */
  STRING = 'STRING',
  /** A private metafield value type. */
  INTEGER = 'INTEGER',
  /** A private metafield value type. */
  JSON_STRING = 'JSON_STRING'
}

/** Represents a product, including information about related collections and product variants. */
export type Product = Node & Navigable & HasMetafields & HasPublishedTranslations & Publishable & OnlineStorePreviewable & LegacyInteroperability & {
   __typename?: 'Product',
  /** The number of publications a resource is published to without feedback errors. */
  availablePublicationCount: Scalars['Int'],
  /** The description of the product, complete with HTML formatting. */
  bodyHtml?: Maybe<Scalars['String']>,
  /** A list of the collections that include the product. */
  collections: CollectionConnection,
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was created. */
  createdAt: Scalars['DateTime'],
  /** A default cursor for use in pagination. */
  defaultCursor: Scalars['String'],
  /** A stripped description of the product, single line with HTML tags removed. */
  description: Scalars['String'],
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml: Scalars['HTML'],
  /** 
 * Stripped description of the product, single line with HTML tags removed.
   * Truncated to 60 characters.
 */
  descriptionPlainSummary: Scalars['String'],
  /** The featured image for the product. */
  featuredImage?: Maybe<Image>,
  /** Information about the product that's provided through resource feedback. */
  feedback?: Maybe<ResourceFeedback>,
  /** The theme template used when viewing the gift card in a store. */
  giftCardTemplateSuffix?: Maybe<Scalars['String']>,
  /** A unique human-friendly string of the product's title. */
  handle: Scalars['String'],
  /** Whether the product has only a single variant with the default option and value. */
  hasOnlyDefaultVariant: Scalars['Boolean'],
  /** Whether the product has out of stock variants. */
  hasOutOfStockVariants: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The images associated with the product. */
  images: ImageConnection,
  /** Whether the product is in a given collection. */
  inCollection: Scalars['Boolean'],
  /** Whether the product is a gift card. */
  isGiftCard: Scalars['Boolean'],
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** The metafield associated with the resource. */
  metafield?: Maybe<Metafield>,
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection,
  /** The online store preview URL. */
  onlineStorePreviewUrl?: Maybe<Scalars['URL']>,
  /** 
 * The online store URL for the product.
   * A value of `null` indicates that the product is not published to the Online Store sales channel.
 */
  onlineStoreUrl?: Maybe<Scalars['URL']>,
  /** A list of custom product options (maximum of 3 per product). */
  options: Array<ProductOption>,
  /** The price range of the product. */
  priceRange: ProductPriceRange,
  /** Returns a private metafield found by namespace and key. */
  privateMetafield?: Maybe<PrivateMetafield>,
  /** List of private metafields. */
  privateMetafields: PrivateMetafieldConnection,
  /** A list of the channels where the product is published. */
  productPublications: ProductPublicationConnection,
  /** The product type specified by the merchant. */
  productType: Scalars['String'],
  /** The number of publications a resource is published on. */
  publicationCount: Scalars['Int'],
  /** A list of the channels where the product is published. */
  publications: ProductPublicationConnection,
  /** 
 * The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601))
   * when the product was published to the Online Store.
 */
  publishedAt?: Maybe<Scalars['DateTime']>,
  /** Check to see whether the resource is published to a given channel. */
  publishedOnChannel: Scalars['Boolean'],
  /** Check to see whether the resource is published to the calling app's channel. */
  publishedOnCurrentChannel: Scalars['Boolean'],
  /** Check to see whether the resource is published to the calling app's publication. */
  publishedOnCurrentPublication: Scalars['Boolean'],
  /** Check to see whether the resource is published to a given publication. */
  publishedOnPublication: Scalars['Boolean'],
  /** The list of resources that are published to a publication. */
  resourcePublications: ResourcePublicationConnection,
  /** SEO information of the product. */
  seo: SEO,
  /** The storefront ID of the product. */
  storefrontId: Scalars['StorefrontID'],
  /** A list of the tags that have been added to the product. */
  tags: Array<Scalars['String']>,
  /** The theme template used when viewing the product in a store. */
  templateSuffix?: Maybe<Scalars['String']>,
  /** The title of the product. */
  title: Scalars['String'],
  /** The quantity of inventory in stock. */
  totalInventory: Scalars['Int'],
  /** The number of variants that are associated with the product. */
  totalVariants: Scalars['Int'],
  /** Whether inventory tracking has been enabled for the product. */
  tracksInventory: Scalars['Boolean'],
  /** The translations associated with the resource. */
  translations: Array<PublishedTranslation>,
  /** The list of channels that the resource is not published to. */
  unpublishedChannels: ChannelConnection,
  /** The list of publications that the resource is not published to. */
  unpublishedPublications: PublicationConnection,
  /** The date and time ([ISO 8601 format](http://en.wikipedia.org/wiki/ISO_8601)) when the product was last modified. */
  updatedAt: Scalars['DateTime'],
  /** A list of variants associated with the product. */
  variants: ProductVariantConnection,
  /** The name of the product's vendor. */
  vendor: Scalars['String'],
};


/** Represents a product, including information about related collections and product variants. */
export type ProductcollectionsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<CollectionSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** Represents a product, including information about related collections and product variants. */
export type ProductdescriptionArgs = {
  truncateAt?: Maybe<Scalars['Int']>
};


/** Represents a product, including information about related collections and product variants. */
export type ProductimagesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<ProductImageSortKeys>,
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  crop?: Maybe<CropRegion>,
  scale?: Maybe<Scalars['Int']>
};


/** Represents a product, including information about related collections and product variants. */
export type ProductinCollectionArgs = {
  id: Scalars['ID']
};


/** Represents a product, including information about related collections and product variants. */
export type ProductmetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents a product, including information about related collections and product variants. */
export type ProductmetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a product, including information about related collections and product variants. */
export type ProductoptionsArgs = {
  first?: Maybe<Scalars['Int']>
};


/** Represents a product, including information about related collections and product variants. */
export type ProductprivateMetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents a product, including information about related collections and product variants. */
export type ProductprivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a product, including information about related collections and product variants. */
export type ProductproductPublicationsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a product, including information about related collections and product variants. */
export type ProductpublicationCountArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>
};


/** Represents a product, including information about related collections and product variants. */
export type ProductpublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a product, including information about related collections and product variants. */
export type ProductpublishedOnChannelArgs = {
  channelId: Scalars['ID']
};


/** Represents a product, including information about related collections and product variants. */
export type ProductpublishedOnPublicationArgs = {
  publicationId: Scalars['ID']
};


/** Represents a product, including information about related collections and product variants. */
export type ProductresourcePublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a product, including information about related collections and product variants. */
export type ProducttranslationsArgs = {
  locale: Scalars['String']
};


/** Represents a product, including information about related collections and product variants. */
export type ProductunpublishedChannelsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a product, including information about related collections and product variants. */
export type ProductunpublishedPublicationsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a product, including information about related collections and product variants. */
export type ProductvariantsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<ProductVariantSortKeys>
};

/** Specifies product images to append. */
export type ProductAppendImagesInput = {
  /** The ID of the product. */
  id: Scalars['ID'],
  /** The images to be appended to the product. */
  images: Array<ImageInput>,
};

/** Return type for `productAppendImages` mutation. */
export type ProductAppendImagesPayload = {
   __typename?: 'ProductAppendImagesPayload',
  /** List of new images appended to the product. */
  newImages?: Maybe<Array<Image>>,
  /** The product object. */
  product?: Maybe<Product>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};


/** Return type for `productAppendImages` mutation. */
export type ProductAppendImagesPayloadnewImagesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  crop?: Maybe<CropRegion>,
  scale?: Maybe<Scalars['Int']>
};

/** The set of valid sort keys for the products query. */
export enum ProductCollectionSortKeys {
  /** Sort by the `title` value. */
  TITLE = 'TITLE',
  /** Sort by the `price` value. */
  PRICE = 'PRICE',
  /** Sort by the `best-selling` value. */
  BEST_SELLING = 'BEST_SELLING',
  /** Sort by the `created` value. */
  CREATED = 'CREATED',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** Sort by the `manual` value. */
  MANUAL = 'MANUAL',
  /** Sort by the `collection-default` value. */
  COLLECTION_DEFAULT = 'COLLECTION_DEFAULT',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

export type ProductConnection = {
   __typename?: 'ProductConnection',
  /** A list of edges. */
  edges: Array<ProductEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `productCreate` mutation. */
export type ProductCreatePayload = {
   __typename?: 'ProductCreatePayload',
  /** The product object. */
  product?: Maybe<Product>,
  /** The shop associated with the product. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `productDeleteImages` mutation. */
export type ProductDeleteImagesPayload = {
   __typename?: 'ProductDeleteImagesPayload',
  /** This is an array of IDs of images to delete. */
  deletedImageIds: Array<Scalars['ID']>,
  /** This is the product object. */
  product?: Maybe<Product>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Specifies the product to delete. */
export type ProductDeleteInput = {
  /** The ID of the product. */
  id: Scalars['ID'],
};

/** Return type for `productDelete` mutation. */
export type ProductDeletePayload = {
   __typename?: 'ProductDeletePayload',
  /** The ID of the deleted product. */
  deletedProductId?: Maybe<Scalars['ID']>,
  /** The shop associated with the product. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `productDuplicate` mutation. */
export type ProductDuplicatePayload = {
   __typename?: 'ProductDuplicatePayload',
  /** The asynchronous job duplicating the product images. */
  imageJob?: Maybe<Job>,
  /** The duplicated product. */
  newProduct?: Maybe<Product>,
  /** The user's shop. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type ProductEdge = {
   __typename?: 'ProductEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of ProductEdge. */
  node: Product,
};

/** The set of valid sort keys for the images query. */
export enum ProductImageSortKeys {
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `position` value. */
  POSITION = 'POSITION',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** Return type for `productImageUpdate` mutation. */
export type ProductImageUpdatePayload = {
   __typename?: 'ProductImageUpdatePayload',
  /** Image updated. */
  image?: Maybe<Image>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};


/** Return type for `productImageUpdate` mutation. */
export type ProductImageUpdatePayloadimageArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  crop?: Maybe<CropRegion>,
  scale?: Maybe<Scalars['Int']>
};

/** Specifies the input fields required to create a product. */
export type ProductInput = {
  /** The description of the product, complete with HTML formatting. */
  descriptionHtml?: Maybe<Scalars['String']>,
  /** A unique human-friendly string for the product. Automatically generated from the product's title. */
  handle?: Maybe<Scalars['String']>,
  /** 
 * Whether a redirect is required after a new handle has been provided.
   * If true, then the old handle is redirected to the new one automatically.
 */
  redirectNewHandle?: Maybe<Scalars['Boolean']>,
  /** The SEO information associated with the product. */
  seo?: Maybe<SEOInput>,
  /** The product type specified by the merchant. */
  productType?: Maybe<Scalars['String']>,
  /** A list of the tags that have been added to the product. */
  tags?: Maybe<Array<Scalars['String']>>,
  /** The theme template used when viewing the product in a store. */
  templateSuffix?: Maybe<Scalars['String']>,
  /** Whether the product is a gift card. */
  giftCard?: Maybe<Scalars['Boolean']>,
  /** The theme template used when viewing the gift card in a store. */
  giftCardTemplateSuffix?: Maybe<Scalars['String']>,
  /** The title of the product. */
  title?: Maybe<Scalars['String']>,
  /** The name of the product's vendor. */
  vendor?: Maybe<Scalars['String']>,
  /** A description of the product. Supports HTML formatting. This argument is deprecated: Use `descriptionHtml` instead. */
  bodyHtml?: Maybe<Scalars['String']>,
  /** The IDs of the collections that this product will be added to. */
  collectionsToJoin?: Maybe<Array<Scalars['ID']>>,
  /** The IDs of collections that will no longer include the product. */
  collectionsToLeave?: Maybe<Array<Scalars['ID']>>,
  /** Specifies the product to update or create a new product if absent. */
  id?: Maybe<Scalars['ID']>,
  /** The images to associate with the product. */
  images?: Maybe<Array<ImageInput>>,
  /** The metafields to associate with this product. */
  metafields?: Maybe<Array<MetafieldInput>>,
  /** The private metafields to associated with this product. */
  privateMetafields?: Maybe<Array<PrivateMetafieldInput>>,
  /** List of custom product options (maximum of 3 per product). */
  options?: Maybe<Array<Scalars['String']>>,
  /** A list of the channels where the product is published. This argument is deprecated: Use `PublishablePublish` instead. */
  productPublications?: Maybe<Array<ProductPublicationInput>>,
  /** A list of the channels where the product is published. This argument is deprecated: Use `PublishablePublish` instead. */
  publications?: Maybe<Array<ProductPublicationInput>>,
  /** This argument is deprecated: Use `PublishablePublish` instead. */
  publishDate?: Maybe<Scalars['DateTime']>,
  /** This argument is deprecated: Use `PublishablePublish` instead. */
  publishOn?: Maybe<Scalars['DateTime']>,
  /** This argument is deprecated: Use `PublishablePublish` instead. */
  published?: Maybe<Scalars['Boolean']>,
  /** This argument is deprecated: Use `PublishablePublish` instead. */
  publishedAt?: Maybe<Scalars['DateTime']>,
  /** A list of variants associated with the product. */
  variants?: Maybe<Array<ProductVariantInput>>,
};

/** 
 * Custom product property names like "Size", "Color", and "Material".
 * Products are based on permutations of these options.
 * A product may have a maximum of 3 options.
 * 255 characters limit each.
 */
export type ProductOption = Node & HasPublishedTranslations & {
   __typename?: 'ProductOption',
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The product option’s name. */
  name: Scalars['String'],
  /** The product option's position. */
  position: Scalars['Int'],
  /** The translations associated with the resource. */
  translations: Array<PublishedTranslation>,
  /** The corresponding value to the product option name. */
  values: Array<Scalars['String']>,
};


/** 
 * Custom product property names like "Size", "Color", and "Material".
 * Products are based on permutations of these options.
 * A product may have a maximum of 3 options.
 * 255 characters limit each.
 */
export type ProductOptiontranslationsArgs = {
  locale: Scalars['String']
};

/** The price range of the product. */
export type ProductPriceRange = {
   __typename?: 'ProductPriceRange',
  /** The highest variant's price. */
  maxVariantPrice: MoneyV2,
  /** The lowest variant's price. */
  minVariantPrice: MoneyV2,
};

/** Represents the channels where a product is published. */
export type ProductPublication = {
   __typename?: 'ProductPublication',
  /** The channel where the product was or is published. */
  channel: Channel,
  /** Whether the publication is published or not. */
  isPublished: Scalars['Boolean'],
  /** The product that was or is going to be published on the channel. */
  product: Product,
  /** The date that the product was or is going to be published on the channel. */
  publishDate?: Maybe<Scalars['DateTime']>,
};

export type ProductPublicationConnection = {
   __typename?: 'ProductPublicationConnection',
  /** A list of edges. */
  edges: Array<ProductPublicationEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type ProductPublicationEdge = {
   __typename?: 'ProductPublicationEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of ProductPublicationEdge. */
  node: ProductPublication,
};

/** Specifies a publication to which a product will be published. */
export type ProductPublicationInput = {
  /** ID of the publication. */
  publicationId?: Maybe<Scalars['ID']>,
  /** ID of the channel. This argument is deprecated: Use publicationId instead. */
  channelId?: Maybe<Scalars['ID']>,
  /** This argument is deprecated: Use publicationId instead. */
  channelHandle?: Maybe<Scalars['String']>,
  /** The date and time that the product was (or will be) published. */
  publishDate?: Maybe<Scalars['DateTime']>,
};

/** Specifies a product to publish and the channels to publish it to. */
export type ProductPublishInput = {
  /** The product to create or update publications for. */
  id: Scalars['ID'],
  /** The publication that the product is published to. */
  productPublications: Array<ProductPublicationInput>,
};

/** Return type for `productPublish` mutation. */
export type ProductPublishPayload = {
   __typename?: 'ProductPublishPayload',
  /** The product that has been published. */
  product?: Maybe<Product>,
  /** The channels where the product is published. */
  productPublications?: Maybe<Array<ProductPublication>>,
  /** The user's shop. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `productReorderImages` mutation. */
export type ProductReorderImagesPayload = {
   __typename?: 'ProductReorderImagesPayload',
  /** The asynchronous job reordering the images. */
  job?: Maybe<Job>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** The set of valid sort keys for the products query. */
export enum ProductSortKeys {
  /** Sort by the `title` value. */
  TITLE = 'TITLE',
  /** Sort by the `product_type` value. */
  PRODUCT_TYPE = 'PRODUCT_TYPE',
  /** Sort by the `vendor` value. */
  VENDOR = 'VENDOR',
  /** Sort by the `inventory_total` value. */
  INVENTORY_TOTAL = 'INVENTORY_TOTAL',
  /** Sort by the `updated_at` value. */
  UPDATED_AT = 'UPDATED_AT',
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `published_at` value. */
  PUBLISHED_AT = 'PUBLISHED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** Specifies a product to unpublish from a channel and the sales channels to unpublish it from. */
export type ProductUnpublishInput = {
  /** The ID of the product to create or update publications for. */
  id: Scalars['ID'],
  /** The channels to unpublish the product from. */
  productPublications: Array<ProductPublicationInput>,
};

/** Return type for `productUnpublish` mutation. */
export type ProductUnpublishPayload = {
   __typename?: 'ProductUnpublishPayload',
  /** The product that has been unpublished. */
  product?: Maybe<Product>,
  /** The user's shop. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `productUpdate` mutation. */
export type ProductUpdatePayload = {
   __typename?: 'ProductUpdatePayload',
  /** The updated product. */
  product?: Maybe<Product>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Represents a product variant. */
export type ProductVariant = Node & HasMetafields & HasPublishedTranslations & Navigable & LegacyInteroperability & {
   __typename?: 'ProductVariant',
  /** Whether the product variant is available for sale. */
  availableForSale: Scalars['Boolean'],
  /** The value of the barcode associated with the product. */
  barcode?: Maybe<Scalars['String']>,
  /** The compare-at price of the variant in the default shop currency. */
  compareAtPrice?: Maybe<Scalars['Money']>,
  /** The date and time when the variant was created. */
  createdAt: Scalars['DateTime'],
  /** A default cursor for use in pagination. */
  defaultCursor: Scalars['String'],
  /** The delivery profile for the variant. */
  deliveryProfile?: Maybe<DeliveryProfile>,
  /** Display name of the variant, based on product's title + variant's title. */
  displayName: Scalars['String'],
  /** The fulfillment service associated with the product. */
  fulfillmentService?: Maybe<FulfillmentService>,
  /** Whether changes to the fulfillment service for the product variant are allowed. */
  fulfillmentServiceEditable: EditableProperty,
  /** The Harmonized System Code (or HS Tariff Code) for the variant. */
  harmonizedSystemCode?: Maybe<Scalars['String']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The featured image for the variant. */
  image?: Maybe<Image>,
  /** The featured image for the variant. */
  images: Array<Image>,
  /** The ID for the inventory item, which is used to query for inventory information. */
  inventoryItem: InventoryItem,
  /** The fulfillment service that tracks the number of items in stock for the product variant. */
  inventoryManagement: ProductVariantInventoryManagement,
  /** Whether customers are allowed to place an order for the product variant when it's out of stock. */
  inventoryPolicy: ProductVariantInventoryPolicy,
  /** The total sellable quantity of the variant. */
  inventoryQuantity?: Maybe<Scalars['Int']>,
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** The metafield associated with the resource. */
  metafield?: Maybe<Metafield>,
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection,
  /** The order of the product variant in the list of product variants. The first position in the list is 1. */
  position: Scalars['Int'],
  /** List of prices and compare-at prices in the presentment currencies for this shop. */
  presentmentPrices: ProductVariantPricePairConnection,
  /** The price of the product variant in the default shop currency. */
  price: Scalars['Money'],
  /** Returns a private metafield found by namespace and key. */
  privateMetafield?: Maybe<PrivateMetafield>,
  /** List of private metafields. */
  privateMetafields: PrivateMetafieldConnection,
  /** The product that this variant belongs to. */
  product: Product,
  /** Whether a customer needs to provide a shipping address when placing an order for the product variant. */
  requiresShipping: Scalars['Boolean'],
  /** List of product options applied to the variant. */
  selectedOptions: Array<SelectedOption>,
  /** An identifier for the product variant in the shop. Required in order to connect to a fulfillment service. */
  sku?: Maybe<Scalars['String']>,
  /** The storefront ID of the product variant. */
  storefrontId: Scalars['StorefrontID'],
  /** The tax code for the product variant. */
  taxCode?: Maybe<Scalars['String']>,
  /** Whether a tax is charged when the product variant is sold. */
  taxable: Scalars['Boolean'],
  /** The title of the product variant. */
  title: Scalars['String'],
  /** The translations associated with the resource. */
  translations: Array<PublishedTranslation>,
  /** The date and time (ISO 8601 format) when the product variant was last modified. */
  updatedAt: Scalars['DateTime'],
  /** The weight of the product variant in the unit system specified with weight_unit. */
  weight?: Maybe<Scalars['Float']>,
  /** 
 * The unit of measurement that applies to the product variant's weight. If you
   * don't specify a value for weight_unit, then the shop's default unit of
   * measurement is applied. Valid values: `g`, `kg`, `oz`, `lb`.
 */
  weightUnit: WeightUnit,
};


/** Represents a product variant. */
export type ProductVariantimageArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  crop?: Maybe<CropRegion>,
  scale?: Maybe<Scalars['Int']>
};


/** Represents a product variant. */
export type ProductVariantimagesArgs = {
  first?: Maybe<Scalars['Int']>,
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  crop?: Maybe<CropRegion>,
  scale?: Maybe<Scalars['Int']>
};


/** Represents a product variant. */
export type ProductVariantmetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents a product variant. */
export type ProductVariantmetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a product variant. */
export type ProductVariantpresentmentPricesArgs = {
  presentmentCurrencies?: Maybe<Array<CurrencyCode>>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a product variant. */
export type ProductVariantprivateMetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents a product variant. */
export type ProductVariantprivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a product variant. */
export type ProductVarianttranslationsArgs = {
  locale: Scalars['String']
};

export type ProductVariantConnection = {
   __typename?: 'ProductVariantConnection',
  /** A list of edges. */
  edges: Array<ProductVariantEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `productVariantCreate` mutation. */
export type ProductVariantCreatePayload = {
   __typename?: 'ProductVariantCreatePayload',
  /** The product associated with the variant. */
  product?: Maybe<Product>,
  /** The successfully created variant. */
  productVariant?: Maybe<ProductVariant>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `productVariantDelete` mutation. */
export type ProductVariantDeletePayload = {
   __typename?: 'ProductVariantDeletePayload',
  /** ID of the deleted product variant. */
  deletedProductVariantId?: Maybe<Scalars['ID']>,
  /** Product of the deleted product variant. */
  product?: Maybe<Product>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type ProductVariantEdge = {
   __typename?: 'ProductVariantEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of ProductVariantEdge. */
  node: ProductVariant,
};

/** Specifies a product variant to create or update. */
export type ProductVariantInput = {
  /** The value of the barcode associated with the product. */
  barcode?: Maybe<Scalars['String']>,
  /** The compare-at price of the variant. */
  compareAtPrice?: Maybe<Scalars['Money']>,
  /** The ID of the fulfillment service associated with the variant. */
  fulfillmentServiceId?: Maybe<Scalars['ID']>,
  /** The Harmonized System Code (or HS Tariff Code) for the variant. */
  harmonizedSystemCode?: Maybe<Scalars['String']>,
  /** Specifies the product variant to update or create a new variant if absent. */
  id?: Maybe<Scalars['ID']>,
  /** The ID of the image that's associated with the variant. */
  imageId?: Maybe<Scalars['ID']>,
  /** 
 * The URL of an image to associate with the variant.  This field can only be
   * used through mutations that create product images and must match one of the
   * URLs being created on the product.
 */
  imageSrc?: Maybe<Scalars['String']>,
  /** 
 * The fulfillment service that tracks the number of items in stock for the
   * product variant. If you track the inventory yourself using the admin, then set
   * the value to `shopify`. Valid values: `shopify` or the handle of a fulfillment
   * service that has inventory management enabled.
   *  This argument is deprecated: Use tracked attribute on `inventoryItem` instead.
 */
  inventoryManagement?: Maybe<ProductVariantInventoryManagement>,
  /** Whether customers are allowed to place an order for the product variant when it's out of stock. */
  inventoryPolicy?: Maybe<ProductVariantInventoryPolicy>,
  /** Create only field. The inventory quantities at each location where the variant is stocked. */
  inventoryQuantities?: Maybe<Array<InventoryLevelInput>>,
  /** Inventory Item associated with the variant, used for unit cost. */
  inventoryItem?: Maybe<InventoryItemInput>,
  /** Additional customizable information about the product variant. */
  metafields?: Maybe<Array<MetafieldInput>>,
  /** The private metafields to associated with this product. */
  privateMetafields?: Maybe<Array<PrivateMetafieldInput>>,
  /** The custom properties that a shop owner uses to define product variants. */
  options?: Maybe<Array<Scalars['String']>>,
  /** The order of the product variant in the list of product variants. The first position in the list is 1. */
  position?: Maybe<Scalars['Int']>,
  /** The price of the variant. */
  price?: Maybe<Scalars['Money']>,
  /** Create only required field. Specifies the product on which to create the variant. */
  productId?: Maybe<Scalars['ID']>,
  /** Whether the variant requires shipping. */
  requiresShipping?: Maybe<Scalars['Boolean']>,
  /** The SKU for the variant. */
  sku?: Maybe<Scalars['String']>,
  /** Whether the variant is taxable. */
  taxable?: Maybe<Scalars['Boolean']>,
  /** This argument is deprecated: Variant title is not a writable field; it is generated from the selected variant options. */
  title?: Maybe<Scalars['String']>,
  /** The tax code associated with the variant. */
  taxCode?: Maybe<Scalars['String']>,
  /** The weight of the variant. */
  weight?: Maybe<Scalars['Float']>,
  /** The unit of weight that's used to measure the variant. */
  weightUnit?: Maybe<WeightUnit>,
};

/** The method of inventory tracking for a product variant. */
export enum ProductVariantInventoryManagement {
  SHOPIFY = 'SHOPIFY',
  NOT_MANAGED = 'NOT_MANAGED',
  FULFILLMENT_SERVICE = 'FULFILLMENT_SERVICE'
}

/** 
 * The inventory policy for a product variant controls whether customers can continue to buy the variant when it
 * is out of stock. When the value is <code>continue</code>, customers are able to buy the variant when it's out of stock.
 * When the value is <code>deny</code>, customers can't buy the variant when it's out of stock.
 */
export enum ProductVariantInventoryPolicy {
  DENY = 'DENY',
  CONTINUE = 'CONTINUE'
}

/** The compare-at price and price of a variant sharing a currency. */
export type ProductVariantPricePair = {
   __typename?: 'ProductVariantPricePair',
  /** The compare-at price of the variant with associated currency. */
  compareAtPrice?: Maybe<MoneyV2>,
  /** The price of the variant with associated currency. */
  price: MoneyV2,
};

export type ProductVariantPricePairConnection = {
   __typename?: 'ProductVariantPricePairConnection',
  /** A list of edges. */
  edges: Array<ProductVariantPricePairEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type ProductVariantPricePairEdge = {
   __typename?: 'ProductVariantPricePairEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of ProductVariantPricePairEdge. */
  node: ProductVariantPricePair,
};

/** The set of valid sort keys for the variants query. */
export enum ProductVariantSortKeys {
  /** Sort by the `title` value. */
  TITLE = 'TITLE',
  /** Sort by the `name` value. */
  NAME = 'NAME',
  /** Sort by the `sku` value. */
  SKU = 'SKU',
  /** Sort by the `inventory_quantity` value. */
  INVENTORY_QUANTITY = 'INVENTORY_QUANTITY',
  /** Sort by the `inventory_management` value. */
  INVENTORY_MANAGEMENT = 'INVENTORY_MANAGEMENT',
  /** Sort by the `inventory_levels.available` value. */
  INVENTORY_LEVELS_AVAILABLE = 'INVENTORY_LEVELS_AVAILABLE',
  /** Sort by the `inventory_policy` value. */
  INVENTORY_POLICY = 'INVENTORY_POLICY',
  /** Sort by the `full_title` value. */
  FULL_TITLE = 'FULL_TITLE',
  /** Sort by the `popular` value. */
  POPULAR = 'POPULAR',
  /** Sort by the `position` value. */
  POSITION = 'POSITION',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** Return type for `productVariantUpdate` mutation. */
export type ProductVariantUpdatePayload = {
   __typename?: 'ProductVariantUpdatePayload',
  /** The product associated with the variant. */
  product?: Maybe<Product>,
  /** The updated variant. */
  productVariant?: Maybe<ProductVariant>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** The set of valid sort keys for the profileItems query. */
export enum ProfileItemSortKeys {
  /** Sort by the `title` value. */
  TITLE = 'TITLE',
  /** Sort by the `product_type` value. */
  PRODUCT_TYPE = 'PRODUCT_TYPE',
  /** Sort by the `vendor` value. */
  VENDOR = 'VENDOR',
  /** Sort by the `inventory_total` value. */
  INVENTORY_TOTAL = 'INVENTORY_TOTAL',
  /** Sort by the `updated_at` value. */
  UPDATED_AT = 'UPDATED_AT',
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `published_at` value. */
  PUBLISHED_AT = 'PUBLISHED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** 
 * A publication is a group of products and collections that is published to an
 * app. A publication can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type Publication = Node & {
   __typename?: 'Publication',
  /** The app associated with the publication. */
  app: App,
  /** The collection publications for the list of collections published to the publication. */
  collectionPublicationsV3: ResourcePublicationConnection,
  /** The list of collections published to the publication. */
  collections: CollectionConnection,
  /** Whether the collection is available to the publication. */
  hasCollection: Scalars['Boolean'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Name of the publication. */
  name: Scalars['String'],
  /** The product publications for the list of products published to the publication. */
  productPublicationsV3: ResourcePublicationConnection,
  /** The list of products published to the publication. */
  products: ProductConnection,
  /** Whether or not this publication supports future publishing. */
  supportsFuturePublishing: Scalars['Boolean'],
};


/** 
 * A publication is a group of products and collections that is published to an
 * app. A publication can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type PublicationcollectionPublicationsV3Args = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * A publication is a group of products and collections that is published to an
 * app. A publication can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type PublicationcollectionsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * A publication is a group of products and collections that is published to an
 * app. A publication can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type PublicationhasCollectionArgs = {
  id: Scalars['ID']
};


/** 
 * A publication is a group of products and collections that is published to an
 * app. A publication can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type PublicationproductPublicationsV3Args = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * A publication is a group of products and collections that is published to an
 * app. A publication can be a platform or marketplace such
 * as Facebook or Pinterest, an online store, or POS.
 */
export type PublicationproductsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

export type PublicationConnection = {
   __typename?: 'PublicationConnection',
  /** A list of edges. */
  edges: Array<PublicationEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type PublicationEdge = {
   __typename?: 'PublicationEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of PublicationEdge. */
  node: Publication,
};

/** Specifies the input fields required to publish a resource. */
export type PublicationInput = {
  /** ID of the channel. This argument is deprecated: Use publicationId instead. */
  channelId?: Maybe<Scalars['ID']>,
  /** ID of the publication. */
  publicationId?: Maybe<Scalars['ID']>,
  /** The date and time that the product was (or will be) published. */
  publishDate?: Maybe<Scalars['DateTime']>,
};

/** 
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type Publishable = {
  /** The number of publications a resource is published to without feedback errors. */
  availablePublicationCount: Scalars['Int'],
  /** The number of publications a resource is published on. */
  publicationCount: Scalars['Int'],
  /** Check to see whether the resource is published to a given channel. */
  publishedOnChannel: Scalars['Boolean'],
  /** Check to see whether the resource is published to the calling app's channel. */
  publishedOnCurrentChannel: Scalars['Boolean'],
  /** Check to see whether the resource is published to the calling app's publication. */
  publishedOnCurrentPublication: Scalars['Boolean'],
  /** Check to see whether the resource is published to a given publication. */
  publishedOnPublication: Scalars['Boolean'],
  /** The list of resources that are published to a publication. */
  resourcePublications: ResourcePublicationConnection,
  /** The list of channels that the resource is not published to. */
  unpublishedChannels: ChannelConnection,
  /** The list of publications that the resource is not published to. */
  unpublishedPublications: PublicationConnection,
};


/** 
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type PublishablepublicationCountArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>
};


/** 
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type PublishablepublishedOnChannelArgs = {
  channelId: Scalars['ID']
};


/** 
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type PublishablepublishedOnPublicationArgs = {
  publicationId: Scalars['ID']
};


/** 
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type PublishableresourcePublicationsArgs = {
  onlyPublished?: Maybe<Scalars['Boolean']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type PublishableunpublishedChannelsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * Represents a resource that can be published to a channel.
 * A publishable resource can be either a Product or Collection.
 */
export type PublishableunpublishedPublicationsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** Return type for `publishablePublish` mutation. */
export type PublishablePublishPayload = {
   __typename?: 'PublishablePublishPayload',
  /** Resource that has been published. */
  publishable?: Maybe<Publishable>,
  /** The user's shop. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `publishablePublishToCurrentChannel` mutation. */
export type PublishablePublishToCurrentChannelPayload = {
   __typename?: 'PublishablePublishToCurrentChannelPayload',
  /** Resource that has been published. */
  publishable?: Maybe<Publishable>,
  /** The user's shop. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `publishableUnpublish` mutation. */
export type PublishableUnpublishPayload = {
   __typename?: 'PublishableUnpublishPayload',
  /** Resource that has been unpublished. */
  publishable?: Maybe<Publishable>,
  /** The user's shop. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `publishableUnpublishToCurrentChannel` mutation. */
export type PublishableUnpublishToCurrentChannelPayload = {
   __typename?: 'PublishableUnpublishToCurrentChannelPayload',
  /** Resource that has been published. */
  publishable?: Maybe<Publishable>,
  /** The user's shop. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Published translation of a field of a resource. */
export type PublishedTranslation = {
   __typename?: 'PublishedTranslation',
  /** Translation key. */
  key: Scalars['String'],
  /** Translation locale. */
  locale: Scalars['String'],
  /** Translation value. */
  value?: Maybe<Scalars['String']>,
};

/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRoot = {
   __typename?: 'QueryRoot',
  /** Lookup an App by ID or return the currently authenticated App. */
  app?: Maybe<App>,
  /** 
 * Fetches app by handle.
   * Returns null if the app doesn't exist.
 */
  appByHandle?: Maybe<App>,
  /** 
 * Fetches app by apiKey.
   * Returns null if the app doesn't exist.
 */
  appByKey?: Maybe<App>,
  /** Lookup an AppInstallation by ID or return the AppInstallation for the currently authenticated App. */
  appInstallation?: Maybe<AppInstallation>,
  /** List of app installations. */
  appInstallations: AppInstallationConnection,
  /** Returns an automatic discount resource by ID. */
  automaticDiscount?: Maybe<DiscountAutomatic>,
  /** Returns an automatic discount resource by ID. */
  automaticDiscountNode?: Maybe<DiscountAutomaticNode>,
  /** List of automatic discounts. */
  automaticDiscountNodes: DiscountAutomaticNodeConnection,
  /** List of the shop's automatic discount saved searches. */
  automaticDiscountSavedSearches: SavedSearchConnection,
  /** List of automatic discounts. */
  automaticDiscounts: DiscountAutomaticConnection,
  /** List of activated carrier services and which shop locations support them. */
  availableCarrierServices: Array<DeliveryCarrierServiceAndLocations>,
  /** Lookup a carrier service by ID. */
  carrierService?: Maybe<DeliveryCarrierService>,
  /** Lookup a channel by ID. */
  channel?: Maybe<Channel>,
  /** List of the active sales channels. */
  channels: ChannelConnection,
  /** Returns a code discount resource by ID. */
  codeDiscountNode?: Maybe<DiscountCodeNode>,
  /** Returns a code discount identified by its code. */
  codeDiscountNodeByCode?: Maybe<DiscountCodeNode>,
  /** 
 * List of code discounts. Special fields for query params:
   *  * status: active, expired, scheduled
   *  * type: bxgy, fixed_amount, free_shipping, percentage.
 */
  codeDiscountNodes: DiscountCodeNodeConnection,
  /** List of the shop's code discount saved searches. */
  codeDiscountSavedSearches: SavedSearchConnection,
  /** Returns a Collection resource by ID. */
  collection?: Maybe<Collection>,
  /** Return a collection by its handle. */
  collectionByHandle?: Maybe<Collection>,
  /** A list of rule conditions to define how collections with rules can be created. */
  collectionRulesConditions: Array<CollectionRuleConditions>,
  /** List of the shop's collection saved searches. */
  collectionSavedSearches: SavedSearchConnection,
  /** List of collections. */
  collections: CollectionConnection,
  /** Return the AppInstallation for the currently authenticated App. */
  currentAppInstallation: AppInstallation,
  /** Returns the current app's most recent BulkOperation. */
  currentBulkOperation?: Maybe<BulkOperation>,
  /** Returns a Customer resource by ID. */
  customer?: Maybe<Customer>,
  /** List of the shop's customer saved searches. */
  customerSavedSearches: SavedSearchConnection,
  /** List of customers. */
  customers: CustomerConnection,
  /** The paginated list of deletion events. */
  deletionEvents: DeletionEventConnection,
  /** Lookup a Delivery Profile by ID. */
  deliveryProfile?: Maybe<DeliveryProfile>,
  /** List of saved delivery profiles. */
  deliveryProfiles: DeliveryProfileConnection,
  /** The shop-wide shipping settings. */
  deliverySettings?: Maybe<DeliverySetting>,
  /** Lookup a Domain by ID. */
  domain?: Maybe<Domain>,
  /** Returns a DraftOrder resource by ID. */
  draftOrder?: Maybe<DraftOrder>,
  /** List of the shop's draft order saved searches. */
  draftOrderSavedSearches: SavedSearchConnection,
  /** List of saved draft orders. */
  draftOrders: DraftOrderConnection,
  /** Returns a Fulfillment resource by ID. */
  fulfillment?: Maybe<Fulfillment>,
  /** Returns an InventoryItem resource by ID. */
  inventoryItem?: Maybe<InventoryItem>,
  /** List of inventory items. */
  inventoryItems: InventoryItemConnection,
  /** Returns an InventoryLevel resource by ID. */
  inventoryLevel?: Maybe<InventoryLevel>,
  /** Returns a Job resource by ID. Used to check the status of internal jobs and any applicable changes. */
  job?: Maybe<Job>,
  /** Returns an inventory Location resource by ID. */
  location?: Maybe<Location>,
  /** List of active locations. */
  locations: LocationConnection,
  /** Returns a list of all origin locations available for a delivery profile. */
  locationsAvailableForDeliveryProfiles?: Maybe<Array<Location>>,
  /** Returns a list of all origin locations available for a delivery profile. */
  locationsAvailableForDeliveryProfilesConnection: LocationConnection,
  /** List of a campaign's marketing activities. */
  marketingActivities: MarketingActivityConnection,
  /** Returns a MarketingActivity resource by ID. */
  marketingActivity?: Maybe<MarketingActivity>,
  /** Returns a MarketingEvent resource by ID. */
  marketingEvent?: Maybe<MarketingEvent>,
  /** List of marketing events. */
  marketingEvents: MarketingEventConnection,
  /** List of metafield namespaces and keys visible to the Storefront API. */
  metafieldStorefrontVisibilities: MetafieldStorefrontVisibilityConnection,
  /** Returns metafield storefront visibility by ID. */
  metafieldStorefrontVisibility?: Maybe<MetafieldStorefrontVisibility>,
  /** Returns a specific node by ID. */
  node?: Maybe<Node>,
  /** Returns the list of nodes with the given IDs. */
  nodes: Array<Maybe<Node>>,
  /** Returns an Order resource by ID. */
  order?: Maybe<Order>,
  /** List of the shop's order saved searches. */
  orderSavedSearches: SavedSearchConnection,
  /** List of orders placed. */
  orders: OrderConnection,
  /** Lookup a price rule by ID. */
  priceRule?: Maybe<PriceRule>,
  /** List of the shop's price rule saved searches. */
  priceRuleSavedSearches: SavedSearchConnection,
  /** List of price rules. */
  priceRules: PriceRuleConnection,
  /** Returns a private metafield by ID. */
  privateMetafield?: Maybe<PrivateMetafield>,
  /** List of private metafields. */
  privateMetafields: PrivateMetafieldConnection,
  /** Returns a Product resource by ID. */
  product?: Maybe<Product>,
  /** Return a product by its handle. */
  productByHandle?: Maybe<Product>,
  /** List of the shop's product saved searches. */
  productSavedSearches: SavedSearchConnection,
  /** Returns a ProductVariant resource by ID. */
  productVariant?: Maybe<ProductVariant>,
  /** List of the product variants. */
  productVariants: ProductVariantConnection,
  /** List of products. */
  products: ProductConnection,
  /** The list of public Admin API versions, including supported, release candidate and unstable versions. */
  publicApiVersions: Array<ApiVersion>,
  /** Lookup a publication by ID. */
  publication?: Maybe<Publication>,
  /** List of the active publications. */
  publications: PublicationConnection,
  /** Returns a Refund resource by ID. */
  refund?: Maybe<Refund>,
  /** Lookup a script tag resource by ID. */
  scriptTag?: Maybe<ScriptTag>,
  /** List of script tags. */
  scriptTags: ScriptTagConnection,
  /** Returns a Shop resource corresponding to access token used in request. */
  shop: Shop,
  /** List of locales available on a shop. */
  shopLocales: Array<ShopLocale>,
  /** Shopify Payments account information, including balances and payouts. */
  shopifyPaymentsAccount?: Maybe<ShopifyPaymentsAccount>,
  /** List of TenderTransactions associated with the Shop. */
  tenderTransactions: TenderTransactionConnection,
  /** Translatable resource. */
  translatableResource?: Maybe<TranslatableResource>,
  /** List of translatable resources. */
  translatableResources: TranslatableResourceConnection,
  /** Returns a webhook subscription by ID. */
  webhookSubscription?: Maybe<WebhookSubscription>,
  /** List of webhook subscriptions. */
  webhookSubscriptions: WebhookSubscriptionConnection,
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootappArgs = {
  id?: Maybe<Scalars['ID']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootappByHandleArgs = {
  handle: Scalars['String']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootappByKeyArgs = {
  apiKey: Scalars['String']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootappInstallationArgs = {
  id?: Maybe<Scalars['ID']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootappInstallationsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<AppInstallationSortKeys>,
  category?: Maybe<AppInstallationCategory>,
  privacy?: Maybe<AppInstallationPrivacy>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootautomaticDiscountArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootautomaticDiscountNodeArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootautomaticDiscountNodesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<AutomaticDiscountSortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootautomaticDiscountSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootautomaticDiscountsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<AutomaticDiscountSortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootcarrierServiceArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootchannelArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootchannelsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootcodeDiscountNodeArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootcodeDiscountNodeByCodeArgs = {
  code: Scalars['String']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootcodeDiscountNodesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<CodeDiscountSortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootcodeDiscountSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootcollectionArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootcollectionByHandleArgs = {
  handle: Scalars['String']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootcollectionSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootcollectionsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<CollectionSortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootcustomerArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootcustomerSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<CustomerSavedSearchSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootcustomersArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<CustomerSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootdeletionEventsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<DeletionEventSortKeys>,
  query?: Maybe<Scalars['String']>,
  subjectTypes?: Maybe<Array<DeletionEventSubjectType>>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootdeliveryProfileArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootdeliveryProfilesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootdomainArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootdraftOrderArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootdraftOrderSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootdraftOrdersArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<DraftOrderSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootfulfillmentArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootinventoryItemArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootinventoryItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  query?: Maybe<Scalars['String']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootinventoryLevelArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootjobArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootlocationArgs = {
  id?: Maybe<Scalars['ID']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootlocationsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<LocationSortKeys>,
  query?: Maybe<Scalars['String']>,
  includeLegacy?: Maybe<Scalars['Boolean']>,
  includeInactive?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootlocationsAvailableForDeliveryProfilesConnectionArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootmarketingActivitiesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<MarketingActivitySortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootmarketingActivityArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootmarketingEventArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootmarketingEventsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<MarketingEventSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootmetafieldStorefrontVisibilitiesArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootmetafieldStorefrontVisibilityArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootnodeArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootnodesArgs = {
  ids: Array<Scalars['ID']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootorderArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootorderSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootordersArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<OrderSortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootpriceRuleArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootpriceRuleSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootpriceRulesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<PriceRuleSortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootprivateMetafieldArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootprivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  owner: Scalars['ID'],
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootproductArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootproductByHandleArgs = {
  handle: Scalars['String']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootproductSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootproductVariantArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootproductVariantsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<ProductVariantSortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootproductsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<ProductSortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootpublicationArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootpublicationsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootrefundArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootscriptTagArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootscriptTagsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  src?: Maybe<Scalars['URL']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootshopLocalesArgs = {
  published?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRoottenderTransactionsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  query?: Maybe<Scalars['String']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRoottranslatableResourceArgs = {
  resourceId: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRoottranslatableResourcesArgs = {
  resourceType: TranslatableResourceType,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootwebhookSubscriptionArgs = {
  id: Scalars['ID']
};


/** The schema's entry-point for queries. This acts as the public, top-level API from which all queries must start. */
export type QueryRootwebhookSubscriptionsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<WebhookSubscriptionSortKeys>,
  query?: Maybe<Scalars['String']>,
  callbackUrl?: Maybe<Scalars['URL']>,
  format?: Maybe<WebhookSubscriptionFormat>,
  topics?: Maybe<Array<WebhookSubscriptionTopic>>
};

/** Represents a refund of items or transactions in an order. */
export type Refund = Node & LegacyInteroperability & {
   __typename?: 'Refund',
  /** When the refund was created. */
  createdAt?: Maybe<Scalars['DateTime']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** Note associated with the refund. */
  note?: Maybe<Scalars['String']>,
  /** The RefundLineItem resources attached to the refund. */
  refundLineItems: RefundLineItemConnection,
  /** Whether the RefundLineItem resources were restocked when the refund was created. */
  restocked: Scalars['Boolean'],
  /** Total amount refunded across all the transactions for this refund. */
  totalRefunded: MoneyV2,
  /** Total amount refunded across all the transactions for this refund in shop and presentment currencies. */
  totalRefundedSet: MoneyBag,
  /** Transactions associated with the refund. */
  transactions: OrderTransactionConnection,
  /** When the refund was last updated. */
  updatedAt: Scalars['DateTime'],
};


/** Represents a refund of items or transactions in an order. */
export type RefundrefundLineItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents a refund of items or transactions in an order. */
export type RefundtransactionsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** Return type for `refundCreate` mutation. */
export type RefundCreatePayload = {
   __typename?: 'RefundCreatePayload',
  /** The order associated with the created refund. */
  order?: Maybe<Order>,
  /** The created refund. */
  refund?: Maybe<Refund>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Specifies the fields to create a refund. */
export type RefundInput = {
  /** 
 * The currency (in ISO format) that is used to refund the order. This must be
   * the presentment currency (the currency used by the customer) and is a required
   * field for orders where the currency and presentment currency differ.
 */
  currency?: Maybe<CurrencyCode>,
  /** Order ID for which the refund is created. */
  orderId: Scalars['ID'],
  /** An optional note attached to a refund. */
  note?: Maybe<Scalars['String']>,
  /** Whether to send a refund notification to the customer. */
  notify?: Maybe<Scalars['Boolean']>,
  /** Specifies how much of the shipping cost to refund. */
  shipping?: Maybe<ShippingRefundInput>,
  /** A list of line items to refund. */
  refundLineItems?: Maybe<Array<RefundLineItemInput>>,
  /** A list of transactions involved in the refund. */
  transactions?: Maybe<Array<OrderTransactionInput>>,
};

/** Represents the details about a refunded line item. */
export type RefundLineItem = {
   __typename?: 'RefundLineItem',
  /** Returns a LineItem resource. This represents the LineItem in the non-refund context. */
  lineItem: LineItem,
  /** The inventory restock location. */
  location?: Maybe<Location>,
  /** Returns the price of a refunded line item. */
  price: Scalars['Money'],
  /** Returns the price of a refunded line item in shop and presentment currencies. */
  priceSet: MoneyBag,
  /** Returns the quantity of a refunded line item. */
  quantity: Scalars['Int'],
  /** Represents the type of restock for the refunded line item. */
  refundType: RefundLineItemRefundType,
  /** Represents the type of restock for the refunded line item. */
  restockType: RefundLineItemRestockType,
  /** Whether the refunded line item was restocked. Not applicable in the context of a SuggestedRefund. */
  restocked: Scalars['Boolean'],
  /** Returns the subtotal price of a refunded line item. */
  subtotal: Scalars['Money'],
  /** Returns the subtotal price of a refunded line item in shop and presentment currencies. */
  subtotalSet: MoneyBag,
  /** Returns the total tax charged on a refunded line item. */
  totalTax: Scalars['Money'],
  /** Returns the total tax charged on a refunded line item in shop and presentment currencies. */
  totalTaxSet: MoneyBag,
};

export type RefundLineItemConnection = {
   __typename?: 'RefundLineItemConnection',
  /** A list of edges. */
  edges: Array<RefundLineItemEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type RefundLineItemEdge = {
   __typename?: 'RefundLineItemEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of RefundLineItemEdge. */
  node: RefundLineItem,
};

/** Specifies the fields required to return line items on a refund. */
export type RefundLineItemInput = {
  /** The ID of the line item in the refund. */
  lineItemId: Scalars['ID'],
  /** The quantity of the associated line item that was returned. */
  quantity: Scalars['Int'],
  /** The type of restock for this line item. */
  restockType?: Maybe<RefundLineItemRestockType>,
  /** The intended location for restocking if `refundType` is not `NO_RESTOCK` */
  locationId?: Maybe<Scalars['ID']>,
};

/** The type of restock performed for a particular refund line item. */
export enum RefundLineItemRefundType {
  /** Refund line item was returned. */
  RETURN = 'RETURN',
  /** Refund line item was canceled. */
  CANCEL = 'CANCEL',
  /** Refund line item was restocked, without specifically being identified as a return or cancelation. */
  LEGACY_RESTOCK = 'LEGACY_RESTOCK',
  /** Refund line item was not restocked. */
  NO_RESTOCK = 'NO_RESTOCK'
}

/** The type of restock performed for a particular refund line item. */
export enum RefundLineItemRestockType {
  /** Refund line item was returned. */
  RETURN = 'RETURN',
  /** Refund line item was canceled. */
  CANCEL = 'CANCEL',
  /** Refund line item was restocked, without specifically being identified as a return or cancelation. */
  LEGACY_RESTOCK = 'LEGACY_RESTOCK',
  /** Refund line item was not restocked. */
  NO_RESTOCK = 'NO_RESTOCK'
}

/** 
 * Presents information or problems to merchants, with 1 or more actions that they can take.
 * They can optionally have a specific icon and be dismissed by merchants.
 */
export type ResourceAlert = {
   __typename?: 'ResourceAlert',
  /** 
 * Buttons in the alert that link to related information.
   * For example, _View risk assessment_.
 */
  actions: Array<ResourceAlertAction>,
  /** Details about the alert. */
  content: Scalars['HTML'],
  /** 
 * Unique identifier that appears when an alert is manually closed by the merchant.
   * Most alerts cannot be manually closed.
 */
  dismissibleHandle?: Maybe<Scalars['String']>,
  /** Icon that displays with the alert. */
  icon?: Maybe<ResourceAlertIcon>,
  /** Indication of how important the alert is. */
  severity: ResourceAlertSeverity,
  /** The name of the alert. */
  title: Scalars['String'],
};

/** An action associated to a resource alert. */
export type ResourceAlertAction = {
   __typename?: 'ResourceAlertAction',
  /** Whether the action is primary or not. */
  primary: Scalars['Boolean'],
  /** Resource for the action to show. */
  show?: Maybe<Scalars['String']>,
  /** Action title. */
  title: Scalars['String'],
  /** Action target URL. */
  url: Scalars['URL'],
};

/** The available icons for resource alerts. */
export enum ResourceAlertIcon {
  CHECKMARK_CIRCLE = 'CHECKMARK_CIRCLE',
  INFORMATION_CIRCLE = 'INFORMATION_CIRCLE'
}

/** The possible severity levels for a resource alert. */
export enum ResourceAlertSeverity {
  DEFAULT = 'DEFAULT',
  INFO = 'INFO',
  WARNING = 'WARNING',
  SUCCESS = 'SUCCESS',
  CRITICAL = 'CRITICAL',
  ERROR = 'ERROR'
}

/** List of resources available for export. */
export enum ResourceExportableType {
  /** The Automatic Discount resource. */
  DISCOUNTS_AUTOMATIC = 'DISCOUNTS_AUTOMATIC',
  /** The Order resource. */
  ORDERS = 'ORDERS',
  /** The Product resource. */
  PRODUCTS = 'PRODUCTS',
  /** The PriceRule resource. */
  PRICE_RULES = 'PRICE_RULES'
}

/** Represents feedback from apps about a resource, and the steps required to set up the apps on the shop. */
export type ResourceFeedback = {
   __typename?: 'ResourceFeedback',
  appFeedback: Array<AppFeedback>,
  /** List of AppFeedback detailing issues regarding a resource. */
  details: Array<AppFeedback>,
  /** Summary of resource feedback pertaining to the resource. */
  summary: Scalars['String'],
};

/** A resource limit represents the limits that the resource has. */
export type ResourceLimit = {
   __typename?: 'ResourceLimit',
  /** Whether or not the resource is available. */
  available: Scalars['Boolean'],
  /** Quantity available. If null the quantity available is unlimited. */
  quantityAvailable?: Maybe<Scalars['Int']>,
  /** Quantity limit of the resource. If null the quantity is unlimited. */
  quantityLimit?: Maybe<Scalars['Int']>,
  /** Quantity used of the resource. If null the quantity used cannot be retrieved. */
  quantityUsed?: Maybe<Scalars['Int']>,
};

/** Resource locations in admin. */
export enum ResourceLocation {
  ACTION = 'ACTION',
  INDEX = 'INDEX',
  SHOW = 'SHOW',
  NEW = 'NEW'
}

/** A resource publication represents that a resource has been published to a publication. */
export type ResourcePublication = {
   __typename?: 'ResourcePublication',
  /** The channel the resource publication is published to. */
  channel: Channel,
  /** 
 * Whether the resource publication is published. Also returns true if the resource publication is scheduled to be published.
   * If false, then the resource publication is neither published nor scheduled to be published.
 */
  isPublished: Scalars['Boolean'],
  /** The publication the resource publication is published to. */
  publication: Publication,
  /** The date that the resource publication was or is going to be published to the publication. */
  publishDate: Scalars['DateTime'],
  /** The resource published to the publication. */
  publishable: Publishable,
};

export type ResourcePublicationConnection = {
   __typename?: 'ResourcePublicationConnection',
  /** A list of edges. */
  edges: Array<ResourcePublicationEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type ResourcePublicationEdge = {
   __typename?: 'ResourcePublicationEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of ResourcePublicationEdge. */
  node: ResourcePublication,
};

/** Resource types in admin. */
export enum ResourceType {
  ORDERS = 'ORDERS',
  DRAFT_ORDERS = 'DRAFT_ORDERS',
  PRODUCTS = 'PRODUCTS',
  VARIANTS = 'VARIANTS',
  COLLECTIONS = 'COLLECTIONS',
  PAGES = 'PAGES',
  BLOGS = 'BLOGS',
  ARTICLES = 'ARTICLES',
  CUSTOMERS = 'CUSTOMERS',
  PRICE_RULES = 'PRICE_RULES',
  ABANDONED_CHECKOUTS = 'ABANDONED_CHECKOUTS',
  /** Resource type for Apps. */
  APPS = 'APPS',
  /** Resource type for automatic discounts. */
  DISCOUNTS_AUTOMATIC = 'DISCOUNTS_AUTOMATIC',
  CHECKOUTS = 'CHECKOUTS',
  DISCOUNTS = 'DISCOUNTS',
  MARKETING = 'MARKETING'
}

/** List of possible values for a RiskAssessment result. */
export enum RiskAssessmentResult {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
  NONE = 'NONE',
  PENDING = 'PENDING'
}

/** List of possible values for a RiskFact sentiment. */
export enum RiskFactSentiment {
  POSITIVE = 'POSITIVE',
  NEUTRAL = 'NEUTRAL',
  NEGATIVE = 'NEGATIVE'
}

/** A saved search is a representation of a search query saved in the admin. */
export type SavedSearch = Node & LegacyInteroperability & {
   __typename?: 'SavedSearch',
  /** The filters of a saved search. */
  filters: Array<SearchFilter>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** The name of a saved search. */
  name: Scalars['String'],
  /** The query string of a saved search. This includes search terms and filters. */
  query: Scalars['String'],
  /** The type of resource this saved search is searching in. */
  resourceType: SearchResultType,
  /** The search terms of a saved search. */
  searchTerms: Scalars['String'],
};

export type SavedSearchConnection = {
   __typename?: 'SavedSearchConnection',
  /** A list of edges. */
  edges: Array<SavedSearchEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Specifies the fields required to create a saved search. */
export type SavedSearchCreateInput = {
  /** The type of resouce this saved search is searching in. */
  resourceType: SearchResultType,
  /** A descriptive name of the saved search. */
  name: Scalars['String'],
  /** The query string of a saved search. This includes search terms and filters. */
  query: Scalars['String'],
};

/** Return type for `savedSearchCreate` mutation. */
export type SavedSearchCreatePayload = {
   __typename?: 'SavedSearchCreatePayload',
  /** The saved search that was created. */
  savedSearch?: Maybe<SavedSearch>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Specifies the fields to delete a saved search. */
export type SavedSearchDeleteInput = {
  /** ID of the saved search to delete. */
  id: Scalars['ID'],
};

/** Return type for `savedSearchDelete` mutation. */
export type SavedSearchDeletePayload = {
   __typename?: 'SavedSearchDeletePayload',
  /** The id of the saved search that was deleted. */
  deletedSavedSearchId?: Maybe<Scalars['ID']>,
  /** The shop of the saved search that was deleted. */
  shop: Shop,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type SavedSearchEdge = {
   __typename?: 'SavedSearchEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of SavedSearchEdge. */
  node: SavedSearch,
};

/** Specifies the fields required to update a saved search. */
export type SavedSearchUpdateInput = {
  /** ID of the saved search to update. */
  id: Scalars['ID'],
  /** A descriptive name of the saved search. */
  name?: Maybe<Scalars['String']>,
  /** The query string of a saved search. This included search terms and filters. */
  query?: Maybe<Scalars['String']>,
};

/** Return type for `savedSearchUpdate` mutation. */
export type SavedSearchUpdatePayload = {
   __typename?: 'SavedSearchUpdatePayload',
  /** The saved search that was updated. */
  savedSearch?: Maybe<SavedSearch>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** 
 * Script discount applications capture the intentions of a discount that
 * was created by a Shopify Script for an order's line item or shipping line.
 */
export type ScriptDiscountApplication = DiscountApplication & {
   __typename?: 'ScriptDiscountApplication',
  /** The method by which the discount's value is allocated to its entitled items. */
  allocationMethod: DiscountApplicationAllocationMethod,
  /** The description of the application as defined by the Script. */
  description: Scalars['String'],
  /** 
 * An ordered index that can be used to identify the discount application and indicate the precedence
   * of the discount application for calculations.
 */
  index: Scalars['Int'],
  /** How the discount amount is distributed on the discounted lines. */
  targetSelection: DiscountApplicationTargetSelection,
  /** Whether the discount is applied on line items or shipping lines. */
  targetType: DiscountApplicationTargetType,
  /** The title of the application as defined by the Script. */
  title: Scalars['String'],
  /** The value of the discount application. */
  value: PricingValue,
};

/** 
 * A script tag represents remote JavaScript code that is loaded into the pages of
 * a shop's storefront or the order status page of checkout.
 */
export type ScriptTag = Node & LegacyInteroperability & {
   __typename?: 'ScriptTag',
  /** The date and time when the script tag was created. */
  createdAt: Scalars['DateTime'],
  /** The page or pages on the online store that the script should be included. */
  displayScope: ScriptTagDisplayScope,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** The URL to the remote script. */
  src: Scalars['URL'],
  /** The date and time when the script tag was last updated. */
  updatedAt: Scalars['DateTime'],
};

export type ScriptTagConnection = {
   __typename?: 'ScriptTagConnection',
  /** A list of edges. */
  edges: Array<ScriptTagEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `scriptTagCreate` mutation. */
export type ScriptTagCreatePayload = {
   __typename?: 'ScriptTagCreatePayload',
  /** The script tag that was created. */
  scriptTag?: Maybe<ScriptTag>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `scriptTagDelete` mutation. */
export type ScriptTagDeletePayload = {
   __typename?: 'ScriptTagDeletePayload',
  /** The ID of the deleted script tag. */
  deletedScriptTagId?: Maybe<Scalars['ID']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** The page or pages on the online store where the script should be included. */
export enum ScriptTagDisplayScope {
  /** Include the script on both the web storefront and the order status page. */
  ALL = 'ALL',
  /** Include the script only on the order status page. */
  ORDER_STATUS = 'ORDER_STATUS',
  /** Include the script only on the web storefront. */
  ONLINE_STORE = 'ONLINE_STORE'
}

export type ScriptTagEdge = {
   __typename?: 'ScriptTagEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of ScriptTagEdge. */
  node: ScriptTag,
};

/** Specifies the input fields for a script tag. */
export type ScriptTagInput = {
  /** The URL of the remote script. */
  src?: Maybe<Scalars['URL']>,
  /** The page or pages on the online store where the script should be included. */
  displayScope?: Maybe<ScriptTagDisplayScope>,
};

/** Return type for `scriptTagUpdate` mutation. */
export type ScriptTagUpdatePayload = {
   __typename?: 'ScriptTagUpdatePayload',
  /** The script tag that was updated. */
  scriptTag?: Maybe<ScriptTag>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** A filter in a search query represented by a key value pair. */
export type SearchFilter = {
   __typename?: 'SearchFilter',
  /** The key of the search filter. */
  key: Scalars['String'],
  /** The value of the search filter. */
  value: Scalars['String'],
};

/** A list of search filters along with their specific options in value and label pair for filtering. */
export type SearchFilterOptions = {
   __typename?: 'SearchFilterOptions',
  /** A list of options that can be use to filter product availability. */
  productAvailability: Array<FilterOption>,
};

/** Represents an individual result returned from a search. */
export type SearchResult = {
   __typename?: 'SearchResult',
  /** Returns the search result description text. */
  description?: Maybe<Scalars['String']>,
  /** Returns the Image resource presented to accompany a search result. */
  image?: Maybe<Image>,
  /** Returns the ID of the resource returned in the search result. */
  reference: Node,
  /** Returns the resource title. */
  title: Scalars['String'],
  /** Returns the absolute URL to the resource in the search result. */
  url: Scalars['URL'],
};

/** The connection type for SearchResult. */
export type SearchResultConnection = {
   __typename?: 'SearchResultConnection',
  /** A list of edges. */
  edges: Array<SearchResultEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
  /** Information to aid in pagination. */
  resultsAfterCount: Scalars['Int'],
};

export type SearchResultEdge = {
   __typename?: 'SearchResultEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of SearchResultEdge. */
  node: SearchResult,
};

/** Specifies the type of resources to be returned from a search. */
export enum SearchResultType {
  ORDER = 'ORDER',
  CUSTOMER = 'CUSTOMER',
  PRODUCT = 'PRODUCT',
  ONLINE_STORE_PAGE = 'ONLINE_STORE_PAGE',
  ONLINE_STORE_BLOG = 'ONLINE_STORE_BLOG',
  ONLINE_STORE_ARTICLE = 'ONLINE_STORE_ARTICLE',
  COLLECTION = 'COLLECTION',
  DRAFT_ORDER = 'DRAFT_ORDER',
  PRICE_RULE = 'PRICE_RULE'
}

/** 
 * Custom properties that a shop owner can use to define product variants.
 * Multiple options can exist. Options are represented as: option1, option2, option3, etc.
 */
export type SelectedOption = {
   __typename?: 'SelectedOption',
  /** The product option’s name. */
  name: Scalars['String'],
  /** The product option’s value. */
  value: Scalars['String'],
};

/** SEO information. */
export type SEO = {
   __typename?: 'SEO',
  /** SEO Description. */
  description?: Maybe<Scalars['String']>,
  /** SEO Title. */
  title?: Maybe<Scalars['String']>,
};

/** SEO information. */
export type SEOInput = {
  /** SEO title of the product. */
  title?: Maybe<Scalars['String']>,
  /** SEO description of the product. */
  description?: Maybe<Scalars['String']>,
};

/** Reasons for cancelling a shipping label. */
export enum ShippingLabelCancellationReason {
  /** Wrong mail service */
  WRONG_MAIL_SERVICE = 'WRONG_MAIL_SERVICE',
  /** Wrong package size */
  WRONG_PACKAGE_SIZE = 'WRONG_PACKAGE_SIZE',
  /** Wrong shipment weight */
  WRONG_WEIGHT = 'WRONG_WEIGHT',
  /** Can't mail by ship date */
  WRONG_SHIP_DATE = 'WRONG_SHIP_DATE',
  /** Can't download label */
  ERROR_DOWNLOADING_LABEL = 'ERROR_DOWNLOADING_LABEL',
  /** Can't print label */
  ERROR_PRINTING_LABEL = 'ERROR_PRINTING_LABEL',
  /** Wrong label format */
  WRONG_LABEL_FORMAT = 'WRONG_LABEL_FORMAT',
  /** Label is too expensive */
  LABEL_TOO_EXPENSIVE = 'LABEL_TOO_EXPENSIVE',
  /** Other */
  OTHER = 'OTHER'
}

/** Represents the shipping details that the customer chose for their order. */
export type ShippingLine = {
   __typename?: 'ShippingLine',
  /** 
 * A reference to the carrier service that provided the rate.
   * Present when the rate was computed by a third-party carrier service.
 */
  carrierIdentifier?: Maybe<Scalars['String']>,
  /** A reference to the shipping method. */
  code?: Maybe<Scalars['String']>,
  /** Whether the shipping line is custom or not. */
  custom: Scalars['Boolean'],
  /** The general classification of the delivery method. */
  deliveryCategory?: Maybe<Scalars['String']>,
  /** The discounts that have been allocated to the shipping line. */
  discountAllocations: Array<DiscountAllocation>,
  /** The pre-tax shipping price with discounts applied. */
  discountedPrice: MoneyV2,
  /** The pre-tax shipping price with discounts applied. */
  discountedPriceSet: MoneyBag,
  /** Globally unique identifier. */
  id?: Maybe<Scalars['ID']>,
  /** The pre-tax shipping price without any discounts applied. */
  originalPrice: MoneyV2,
  /** The pre-tax shipping price without any discounts applied. */
  originalPriceSet: MoneyBag,
  /** The phone number at the shipping address. */
  phone?: Maybe<Scalars['String']>,
  /** Returns the price of the shipping line. */
  price: Scalars['Money'],
  /** 
 * The fulfillment service requested for the shipping method.
   * Present if the shipping method requires processing by a third party fulfillment service.
 */
  requestedFulfillmentService?: Maybe<FulfillmentService>,
  /** A unique identifier for the shipping rate. The format can change without notice and is not meant to be shown to users. */
  shippingRateHandle?: Maybe<Scalars['String']>,
  /** Returns the rate source for the shipping line. */
  source?: Maybe<Scalars['String']>,
  /** The TaxLine objects connected to this shipping line. */
  taxLines: Array<TaxLine>,
  /** Returns the title of the shipping line. */
  title: Scalars['String'],
};

/** Specifies the shipping details for the order. */
export type ShippingLineInput = {
  /** Price of the shipping rate. */
  price?: Maybe<Scalars['Money']>,
  /** A unique identifier for the shipping rate. */
  shippingRateHandle?: Maybe<Scalars['String']>,
  /** Title of the shipping rate. */
  title?: Maybe<Scalars['String']>,
};

/** The shipping method for the delivery. */
export type ShippingMethod = {
   __typename?: 'ShippingMethod',
  /** A unique code associated with the rate. For example: `expedited_mail` */
  code: Scalars['String'],
  /** 
 * A description of the rate, which customers will see at checkout.
   * For example: `Includes tracking and insurance`.
 */
  label: Scalars['String'],
};

/** Return type for `shippingPackageDelete` mutation. */
export type ShippingPackageDeletePayload = {
   __typename?: 'ShippingPackageDeletePayload',
  /** The ID of the deleted shipping package. */
  deletedId?: Maybe<Scalars['ID']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `shippingPackageMakeDefault` mutation. */
export type ShippingPackageMakeDefaultPayload = {
   __typename?: 'ShippingPackageMakeDefaultPayload',
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Type of a shipping package. */
export enum ShippingPackageType {
  /** A shipping box. */
  BOX = 'BOX',
  /** A flat rate packaging supplied by a carrier. */
  FLAT_RATE = 'FLAT_RATE',
  /** An envelope. */
  ENVELOPE = 'ENVELOPE',
  /** A soft-pack, bubble-wrap or vinyl envelope. */
  SOFT_PACK = 'SOFT_PACK',
  /** A mailing tube use for documents, posters, etc. */
  TUBE = 'TUBE'
}

/** Return type for `shippingPackageUpdate` mutation. */
export type ShippingPackageUpdatePayload = {
   __typename?: 'ShippingPackageUpdatePayload',
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** A shipping rate to be applied to an order. */
export type ShippingRate = {
   __typename?: 'ShippingRate',
  /** Human-readable unique identifier for this shipping rate. */
  handle: Scalars['String'],
  /** Price of this shipping rate. */
  price: MoneyV2,
  /** Title of this shipping rate. */
  title: Scalars['String'],
};

/** Represents the shipping costs refunded on the Refund. */
export type ShippingRefund = {
   __typename?: 'ShippingRefund',
  /** The monetary value of the shipping fees to be returned. */
  amount: Scalars['Money'],
  /** The monetary value of the shipping fees to be returned in shop and presentment currencies. */
  amountSet: MoneyBag,
  /** The maximum amount of shipping fees currently refundable. */
  maximumRefundable: Scalars['Money'],
  /** The maximum amount of shipping fees currently refundable in shop and presentment currencies. */
  maximumRefundableSet: MoneyBag,
  /** The monetary value of the tax allocated to shipping fees to be returned. */
  tax: Scalars['Money'],
  /** The monetary value of the tax allocated to shipping fees to be returned in shop and presentment currencies. */
  taxSet: MoneyBag,
};

/** Specifies the fields required to return shipping costs on a Refund. */
export type ShippingRefundInput = {
  /** The monetary value of the shipping fees to be returned. */
  amount?: Maybe<Scalars['Money']>,
  /** Whether a full refund is provided. */
  fullRefund?: Maybe<Scalars['Boolean']>,
};

/** Represents the shop object. */
export type Shop = Node & HasPublishedTranslations & HasMetafields & {
   __typename?: 'Shop',
  /** Alert message that appears in the Shopify admin. */
  alerts: Array<ShopAlert>,
  /** The token required to query the shop's reports or dashboards. */
  analyticsToken: Scalars['String'],
  /** List of app installations on the shop. */
  appInstallations: AppInstallationConnection,
  /** List of sales channels not currently installed on the shop. */
  availableChannelApps: AppConnection,
  /** The shop's billing address information. */
  billingAddress: MailingAddress,
  /** List of channel app installations on the shop. */
  channelAppInstallations: AppInstallationConnection,
  /** Exposes the number of channels. */
  channelCount: Scalars['Int'],
  /** List of the shop's active sales channels. */
  channels: ChannelConnection,
  /** Specifies whether the shop supports checkouts via Checkout API. */
  checkoutApiSupported: Scalars['Boolean'],
  /** Return a collection by its handle. */
  collectionByHandle?: Maybe<Collection>,
  /** List of the shop's collection saved searches. */
  collectionSavedSearches: SavedSearchConnection,
  /** List of the shop's collections. */
  collections: CollectionConnection,
  /** 
 * The public-facing contact email address for the shop.
   * Customers will use this email to communicate with the shop owner.
 */
  contactEmail: Scalars['String'],
  /** Countries that have been defined in shipping zones for the shop. */
  countriesInShippingZones: CountriesInShippingZones,
  /** The three letter code for the shop's currency. */
  currencyCode: CurrencyCode,
  /** How currencies are displayed on your store. */
  currencyFormats: CurrencyFormats,
  /** The currency settings for the shop. */
  currencySettings: CurrencySettingConnection,
  /** The shop's customer account requirement preference. */
  customerAccounts: ShopCustomerAccountsSetting,
  /** List of the shop's customer saved searches. */
  customerSavedSearches: SavedSearchConnection,
  /** Tags added to customer accounts. */
  customerTags: StringConnection,
  /** Customer accounts associated to the shop. */
  customers: CustomerConnection,
  /** The shop's meta description used in search engine results. */
  description?: Maybe<Scalars['String']>,
  /** List of the shop's draft order saved searches. */
  draftOrderSavedSearches: SavedSearchConnection,
  /** Tags added to draft orders. */
  draftOrderTags: StringConnection,
  /** List of saved draft orders on the shop. */
  draftOrders: DraftOrderConnection,
  /** 
 * The shop owner's email address.
   * Shopify will use this email address to communicate with the shop owner.
 */
  email: Scalars['String'],
  /** The presentment currencies enabled for the shop. */
  enabledPresentmentCurrencies: Array<CurrencyCode>,
  /** The shop's features. */
  features: ShopFeatures,
  /** List of the shop's installed fulfillment services. */
  fulfillmentServices: Array<FulfillmentService>,
  /** The shop's time zone as defined by the IANA. */
  ianaTimezone: Scalars['String'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** List of apps that are installed on the shop. */
  installedApps: AppConnection,
  /** List of the shop's inventory items. */
  inventoryItems: InventoryItemConnection,
  /** 
 * The number of pendings orders on the shop.
   * Limited to a maximum of 10000.
 */
  limitedPendingOrderCount: LimitedPendingOrderCount,
  /** List of active locations of the shop. */
  locations: LocationConnection,
  /** List of a shop's marketing events. */
  marketingEvents: MarketingEventConnection,
  /** The metafield associated with the resource. */
  metafield?: Maybe<Metafield>,
  /** A paginated list of metafields associated with the resource. */
  metafields: MetafieldConnection,
  /** The shop's .myshopify.com domain name. */
  myshopifyDomain: Scalars['String'],
  /** The shop's name. */
  name: Scalars['String'],
  /** The navigation settings of the shop. */
  navigationSettings: Array<NavigationItem>,
  /** The prefix that appears before order numbers. */
  orderNumberFormatPrefix: Scalars['String'],
  /** The suffix that appears after order numbers. */
  orderNumberFormatSuffix: Scalars['String'],
  /** List of the shop's order saved searches. */
  orderSavedSearches: SavedSearchConnection,
  /** Tags added to orders. */
  orderTags: StringConnection,
  /** List of orders placed on the shop. */
  orders: OrderConnection,
  /** Settings related to payments. */
  paymentSettings: PaymentSettings,
  /** Number of pending orders on the shop. */
  pendingOrderCount: Scalars['Int'],
  /** The shop's plan. */
  plan: ShopPlan,
  /** List of the shop's price rule saved searches. */
  priceRuleSavedSearches: SavedSearchConnection,
  /** List of the shop’s price rules. */
  priceRules: PriceRuleConnection,
  /** The shop's primary domain name. */
  primaryDomain: Domain,
  /** Returns a private metafield found by namespace and key. */
  privateMetafield?: Maybe<PrivateMetafield>,
  /** List of private metafields. */
  privateMetafields: PrivateMetafieldConnection,
  /** Return a product by its handle. */
  productByHandle?: Maybe<Product>,
  /** All images of all products of the shop. */
  productImages: ImageConnection,
  /** List of the shop's product saved searches. */
  productSavedSearches: SavedSearchConnection,
  /** Tags added to products. */
  productTags: StringConnection,
  /** Types added to products. */
  productTypes: StringConnection,
  /** List of the shop's product variants. */
  productVariants: ProductVariantConnection,
  /** Vendors added to products. */
  productVendors: StringConnection,
  /** List of the shop's products. */
  products: ProductConnection,
  /** Exposes the number of publications. */
  publicationCount: Scalars['Int'],
  /** Resource limits of a shop. */
  resourceLimits: ShopResourceLimits,
  /** The URL of the rich text editor. */
  richTextEditorUrl: Scalars['URL'],
  /** Return admin search results. */
  search: SearchResultConnection,
  /** List of search filter options. */
  searchFilters: SearchFilterOptions,
  /** Whether the shop has outstanding setup steps. */
  setupRequired: Scalars['Boolean'],
  /** Countries that the shop ships to. */
  shipsToCountries: Array<CountryCode>,
  /** Shopify Payments account information, including balances and payouts. */
  shopifyPaymentsAccount?: Maybe<ShopifyPaymentsAccount>,
  /** Storefront access token of a private application. Scoped per-application. */
  storefrontAccessTokens: StorefrontAccessTokenConnection,
  /** The URL of the shop's storefront. */
  storefrontUrl: Scalars['URL'],
  /** Specifies whether or not taxes are charged for shipping. */
  taxShipping: Scalars['Boolean'],
  /** The setting for whether applicable taxes are included in product prices. */
  taxesIncluded: Scalars['Boolean'],
  /** The shop's time zone abbreviation. */
  timezoneAbbreviation: Scalars['String'],
  /** The shop's time zone offset. */
  timezoneOffset: Scalars['String'],
  /** The shop's time zone offset expressed in number of minutes. */
  timezoneOffsetMinutes: Scalars['Int'],
  /** The translations associated with the resource. */
  translations: Array<PublishedTranslation>,
  /** The shop's unit system. */
  unitSystem: UnitSystem,
  /** All images uploaded to the shop. */
  uploadedImages: ImageConnection,
  /** Fetch list of images uploaded to shop by ids. */
  uploadedImagesByIds: Array<Image>,
  /** The URL of the shop's storefront. */
  url: Scalars['URL'],
  /** The shop's primary unit of weight for products and shipping. */
  weightUnit: WeightUnit,
};


/** Represents the shop object. */
export type ShopappInstallationsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<AppInstallationSortKeys>,
  category?: Maybe<AppInstallationCategory>,
  privacy?: Maybe<AppInstallationPrivacy>
};


/** Represents the shop object. */
export type ShopavailableChannelAppsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents the shop object. */
export type ShopchannelAppInstallationsArgs = {
  excludePrivateApps?: Maybe<Scalars['Boolean']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<AppInstallationSortKeys>
};


/** Represents the shop object. */
export type ShopchannelsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents the shop object. */
export type ShopcollectionByHandleArgs = {
  handle: Scalars['String']
};


/** Represents the shop object. */
export type ShopcollectionSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents the shop object. */
export type ShopcollectionsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<CollectionSortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};


/** Represents the shop object. */
export type ShopcurrencySettingsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents the shop object. */
export type ShopcustomerSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<CustomerSavedSearchSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** Represents the shop object. */
export type ShopcustomerTagsArgs = {
  first: Scalars['Int']
};


/** Represents the shop object. */
export type ShopcustomersArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<CustomerSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** Represents the shop object. */
export type ShopdraftOrderSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents the shop object. */
export type ShopdraftOrderTagsArgs = {
  first: Scalars['Int']
};


/** Represents the shop object. */
export type ShopdraftOrdersArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<DraftOrderSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** Represents the shop object. */
export type ShopinstalledAppsArgs = {
  visibleOnly?: Maybe<Scalars['Boolean']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<AppsSortKeys>
};


/** Represents the shop object. */
export type ShopinventoryItemsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  query?: Maybe<Scalars['String']>
};


/** Represents the shop object. */
export type ShoplocationsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<LocationSortKeys>,
  query?: Maybe<Scalars['String']>,
  includeLegacy?: Maybe<Scalars['Boolean']>,
  includeInactive?: Maybe<Scalars['Boolean']>
};


/** Represents the shop object. */
export type ShopmarketingEventsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<MarketingEventSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** Represents the shop object. */
export type ShopmetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents the shop object. */
export type ShopmetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents the shop object. */
export type ShoporderSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents the shop object. */
export type ShoporderTagsArgs = {
  first: Scalars['Int'],
  sort?: Maybe<ShopTagSort>
};


/** Represents the shop object. */
export type ShopordersArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<OrderSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** Represents the shop object. */
export type ShoppriceRuleSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents the shop object. */
export type ShoppriceRulesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<PriceRuleSortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};


/** Represents the shop object. */
export type ShopprivateMetafieldArgs = {
  namespace: Scalars['String'],
  key: Scalars['String']
};


/** Represents the shop object. */
export type ShopprivateMetafieldsArgs = {
  namespace?: Maybe<Scalars['String']>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents the shop object. */
export type ShopproductByHandleArgs = {
  handle: Scalars['String']
};


/** Represents the shop object. */
export type ShopproductImagesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<ProductImageSortKeys>,
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  crop?: Maybe<CropRegion>,
  scale?: Maybe<Scalars['Int']>
};


/** Represents the shop object. */
export type ShopproductSavedSearchesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents the shop object. */
export type ShopproductTagsArgs = {
  first: Scalars['Int']
};


/** Represents the shop object. */
export type ShopproductTypesArgs = {
  first: Scalars['Int']
};


/** Represents the shop object. */
export type ShopproductVariantsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<ProductVariantSortKeys>,
  query?: Maybe<Scalars['String']>
};


/** Represents the shop object. */
export type ShopproductVendorsArgs = {
  first: Scalars['Int']
};


/** Represents the shop object. */
export type ShopproductsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<ProductSortKeys>,
  query?: Maybe<Scalars['String']>,
  savedSearchId?: Maybe<Scalars['ID']>
};


/** Represents the shop object. */
export type ShopsearchArgs = {
  query: Scalars['String'],
  types?: Maybe<Array<SearchResultType>>,
  first: Scalars['Int'],
  after?: Maybe<Scalars['String']>
};


/** Represents the shop object. */
export type ShopstorefrontAccessTokensArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** Represents the shop object. */
export type ShoptranslationsArgs = {
  locale: Scalars['String']
};


/** Represents the shop object. */
export type ShopuploadedImagesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  sortKey?: Maybe<ShopImageSortKeys>,
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  crop?: Maybe<CropRegion>,
  scale?: Maybe<Scalars['Int']>
};


/** Represents the shop object. */
export type ShopuploadedImagesByIdsArgs = {
  imageIds: Array<Scalars['ID']>
};

/** Alert message that appears in the Shopify admin. */
export type ShopAlert = {
   __typename?: 'ShopAlert',
  /** Button in the alert that links to related information. */
  action: ShopAlertAction,
  /** Description of the alert. */
  description: Scalars['String'],
};

/** An action associated to a shop alert. */
export type ShopAlertAction = {
   __typename?: 'ShopAlertAction',
  /** Action title. */
  title: Scalars['String'],
  /** Action target URL. */
  url: Scalars['URL'],
};

/** 
 * Possible branding of a shop.
 * Branding can be used to define the look of a shop including its styling and logo in the Shopify Admin.
 */
export enum ShopBranding {
  SHOPIFY_GOLD = 'SHOPIFY_GOLD',
  SHOPIFY_PLUS = 'SHOPIFY_PLUS',
  ROGERS = 'ROGERS',
  SHOPIFY = 'SHOPIFY'
}

/** Represents the shop's customer account requirement preference. */
export enum ShopCustomerAccountsSetting {
  REQUIRED = 'REQUIRED',
  OPTIONAL = 'OPTIONAL',
  DISABLED = 'DISABLED'
}

/** Represents the feature set available to the shop. */
export type ShopFeatures = {
   __typename?: 'ShopFeatures',
  /** Whether a shop has access to avalara avatax. */
  avalaraAvatax: Scalars['Boolean'],
  /** Branding of the shop. */
  branding: ShopBranding,
  /** Whether a shop's storefront can have CAPTCHA protection. */
  captcha: Scalars['Boolean'],
  /** Whether a shop's storefront can have CAPTCHA protection for domains not managed by Shopify. */
  captchaExternalDomains: Scalars['Boolean'],
  /** Whether the delivery profiles functionality is enabled for this shop. */
  deliveryProfiles: Scalars['Boolean'],
  /** Whether a shop has access to the dynamic remarketing feature. */
  dynamicRemarketing: Scalars['Boolean'],
  /** Whether a shop can create gift cards. */
  giftCards: Scalars['Boolean'],
  /** Display Harmonized System codes on products.  Used for customs when shipping cross-border. */
  harmonizedSystemCode: Scalars['Boolean'],
  /** Whether to show the live view. Live view is hidden from merchants that are on a trial or don't have a storefront. */
  liveView: Scalars['Boolean'],
  /** Whether the multi-location functionality is enabled for this shop. */
  multiLocation: Scalars['Boolean'],
  /** Whether a shop has access to the onboarding visual. */
  onboardingVisual: Scalars['Boolean'],
  /** Whether a shop has access to all reporting features. */
  reports: Scalars['Boolean'],
  /** Whether the shop has a Shopify Plus subscription. */
  shopifyPlus: Scalars['Boolean'],
  /** Whether to show metrics. Metrics are hidden for new merchants until they become meaningful. */
  showMetrics: Scalars['Boolean'],
  /** Whether the shop has an online storefront. */
  storefront: Scalars['Boolean'],
};

/** 
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type ShopifyPaymentsAccount = Node & {
   __typename?: 'ShopifyPaymentsAccount',
  /** Whether the Shopify Payments setup is completed. */
  activated: Scalars['Boolean'],
  /** Current balances in all currencies for the account. */
  balance: Array<MoneyV2>,
  /** All bank accounts configured for the Shopify Payments account. */
  bankAccounts: ShopifyPaymentsBankAccountConnection,
  /** 
 * Statement descriptor used for charges.
   * 
   * This is what buyers will see on their credit card or bank statements when making a purchase.
 */
  chargeStatementDescriptor?: Maybe<Scalars['String']>,
  /** 
 * Statement descriptors used for charges.
   * 
   * This is what buyers will see on their credit card or bank statements when making a purchase.
 */
  chargeStatementDescriptors?: Maybe<ShopifyPaymentsChargeStatementDescriptor>,
  /** The Shopify Payments account country. */
  country: Scalars['String'],
  /** The default payout currency for the Shopify Payments account. */
  defaultCurrency: CurrencyCode,
  /** All disputes related to the Shopify Payments account. */
  disputes: ShopifyPaymentsDisputeConnection,
  /** The fraud settings of the Shopify Payments account. */
  fraudSettings: ShopifyPaymentsFraudSettings,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The notifications settings for the account. */
  notificationSettings: ShopifyPaymentsNotificationSettings,
  /** Whether the Shopify Payments account can be onboarded. */
  onboardable: Scalars['Boolean'],
  /** Payout schedule for the account. */
  payoutSchedule: ShopifyPaymentsPayoutSchedule,
  /** 
 * Descriptor used for payouts.
   * 
   * This is what merchants will see on their bank statement when receiving a payout.
 */
  payoutStatementDescriptor?: Maybe<Scalars['String']>,
  /** All current and previous payouts made between the account and the bank account. */
  payouts: ShopifyPaymentsPayoutConnection,
  /** The permitted documents for identity verification. */
  permittedVerificationDocuments: Array<ShopifyPaymentsVerificationDocument>,
  /** The verifications necessary for this account. */
  verifications: Array<ShopifyPaymentsVerification>,
};


/** 
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type ShopifyPaymentsAccountbankAccountsArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};


/** 
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type ShopifyPaymentsAccountdisputesArgs = {
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>,
  query?: Maybe<Scalars['String']>
};


/** 
 * Balance and payout information for a
 * [Shopify Payments](https://help.shopify.com/manual/payments/shopify-payments/getting-paid-with-shopify-payments)
 * account. Balance includes all balances for the currencies supported by the shop.
 * You can also query for a list of payouts, where each payout includes the corresponding currencyCode field.
 */
export type ShopifyPaymentsAccountpayoutsArgs = {
  transactionType?: Maybe<ShopifyPaymentsPayoutTransactionType>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

/** A bank account that can receive payouts. */
export type ShopifyPaymentsBankAccount = Node & {
   __typename?: 'ShopifyPaymentsBankAccount',
  /** The account number of the bank account. */
  accountNumber: Scalars['String'],
  /** The last digits of the account number (the rest is redacted). */
  accountNumberLastDigits: Scalars['String'],
  /** The name of the bank. */
  bankName?: Maybe<Scalars['String']>,
  /** The country of the bank. */
  country: CountryCode,
  /** The date that the bank account was created. */
  createdAt: Scalars['DateTime'],
  /** The currency of the bank account. */
  currency: CurrencyCode,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** All current and previous payouts made between the account and the bank account. */
  payouts: ShopifyPaymentsPayoutConnection,
  /** The routing number of the bank account. */
  routingNumber: Scalars['String'],
  /** The status of the bank account. */
  status: ShopifyPaymentsBankAccountStatus,
};


/** A bank account that can receive payouts. */
export type ShopifyPaymentsBankAccountpayoutsArgs = {
  transactionType?: Maybe<ShopifyPaymentsPayoutTransactionType>,
  first?: Maybe<Scalars['Int']>,
  after?: Maybe<Scalars['String']>,
  last?: Maybe<Scalars['Int']>,
  before?: Maybe<Scalars['String']>,
  reverse?: Maybe<Scalars['Boolean']>
};

export type ShopifyPaymentsBankAccountConnection = {
   __typename?: 'ShopifyPaymentsBankAccountConnection',
  /** A list of edges. */
  edges: Array<ShopifyPaymentsBankAccountEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type ShopifyPaymentsBankAccountEdge = {
   __typename?: 'ShopifyPaymentsBankAccountEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of ShopifyPaymentsBankAccountEdge. */
  node: ShopifyPaymentsBankAccount,
};

/** The bank account status. */
export enum ShopifyPaymentsBankAccountStatus {
  /** A bank account that hasn't had any activity and that's not validated. */
  NEW = 'NEW',
  /** It was determined that the bank account exists. */
  VALIDATED = 'VALIDATED',
  /** Bank account validation was successful. */
  VERIFIED = 'VERIFIED',
  /** A payout to the bank account failed. */
  ERRORED = 'ERRORED'
}

/** The charge descriptors for a payments account. */
export type ShopifyPaymentsChargeStatementDescriptor = {
  /** The default charge statement descriptor. */
  default?: Maybe<Scalars['String']>,
  /** The prefix of the statement descriptor. */
  prefix: Scalars['String'],
};

/** The charge descriptors for a payments account. */
export type ShopifyPaymentsDefaultChargeStatementDescriptor = ShopifyPaymentsChargeStatementDescriptor & {
   __typename?: 'ShopifyPaymentsDefaultChargeStatementDescriptor',
  /** The default charge statement descriptor. */
  default?: Maybe<Scalars['String']>,
  /** The prefix of the statement descriptor. */
  prefix: Scalars['String'],
};

/** A dispute occurs when a buyer questions the legitimacy of a charge with their financial institution. */
export type ShopifyPaymentsDispute = LegacyInteroperability & Node & {
   __typename?: 'ShopifyPaymentsDispute',
  /** The total amount disputed by the cardholder. */
  amount: MoneyV2,
  /** The deadline for evidence submission. */
  evidenceDueBy?: Maybe<Scalars['Date']>,
  /** The date when evidence was sent. Returns null if evidence has not yet been sent. */
  evidenceSentOn?: Maybe<Scalars['Date']>,
  /** The date when this dispute was resolved. Returns null if the dispute is not yet resolved. */
  finalizedOn?: Maybe<Scalars['Date']>,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The date when this dispute was initiated. */
  initiatedAt: Scalars['DateTime'],
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** The order that contains the charge that is under dispute. */
  order?: Maybe<Order>,
  /** The reason of the dispute. */
  reasonDetails: ShopifyPaymentsDisputeReasonDetails,
  /** The current state of the dispute. */
  status: DisputeStatus,
  /** Indicates if this dispute is still in the inquiry phase or has turned into a chargeback. */
  type: DisputeType,
};

export type ShopifyPaymentsDisputeConnection = {
   __typename?: 'ShopifyPaymentsDisputeConnection',
  /** A list of edges. */
  edges: Array<ShopifyPaymentsDisputeEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type ShopifyPaymentsDisputeEdge = {
   __typename?: 'ShopifyPaymentsDisputeEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of ShopifyPaymentsDisputeEdge. */
  node: ShopifyPaymentsDispute,
};

/** The reason for the dispute provided by the cardholder's bank. */
export enum ShopifyPaymentsDisputeReason {
  /** The cardholder claims that they didn’t authorize the payment. */
  FRAUDULENT = 'FRAUDULENT',
  /** 
 * The dispute is uncategorized, so you should contact the customer for
   * additional details to find out why the payment was disputed.
 */
  GENERAL = 'GENERAL',
  /** The customer doesn’t recognize the payment appearing on their card statement. */
  UNRECOGNIZED = 'UNRECOGNIZED',
  /** The customer claims they were charged multiple times for the same product or service. */
  DUPLICATE = 'DUPLICATE',
  /** The customer claims that you continued to charge them after a subscription was canceled. */
  SUBSCRIPTION_CANCELLED = 'SUBSCRIPTION_CANCELLED',
  /** The product or service was received but was defective, damaged, or not as described. */
  PRODUCT_UNACCEPTABLE = 'PRODUCT_UNACCEPTABLE',
  /** The customer claims they did not receive the products or services purchased. */
  PRODUCT_NOT_RECEIVED = 'PRODUCT_NOT_RECEIVED',
  /** 
 * The customer claims that the purchased product was returned or the transaction
   * was otherwise canceled, but you have not yet provided a refund or credit.
 */
  CREDIT_NOT_PROCESSED = 'CREDIT_NOT_PROCESSED',
  /** The customer account associated with the purchase is incorrect. */
  INCORRECT_ACCOUNT_DETAILS = 'INCORRECT_ACCOUNT_DETAILS',
  /** The customer's bank account has insufficient funds. */
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  /** The customer's bank cannot process the charge. */
  BANK_CANNOT_PROCESS = 'BANK_CANNOT_PROCESS',
  /** The customer's bank cannot proceed with the debit since it has not been authorized. */
  DEBIT_NOT_AUTHORIZED = 'DEBIT_NOT_AUTHORIZED',
  /** 
 * The customer initiated the dispute, so you should contact the customer for
   * additional details to find out why the payment was disputed.
 */
  CUSTOMER_INITIATED = 'CUSTOMER_INITIATED'
}

/** Details regarding a dispute reason. */
export type ShopifyPaymentsDisputeReasonDetails = {
   __typename?: 'ShopifyPaymentsDisputeReasonDetails',
  /** The raw code provided by the payment network. */
  networkReasonCode?: Maybe<Scalars['String']>,
  /** The reason for the dispute provided by the cardholder's banks. */
  reason: ShopifyPaymentsDisputeReason,
};

/** The fraud settings of a payments account. */
export type ShopifyPaymentsFraudSettings = {
   __typename?: 'ShopifyPaymentsFraudSettings',
  /** Decline a charge if there is an AVS failure. */
  declineChargeOnAvsFailure: Scalars['Boolean'],
  /** Decline a charge if there is an CVC failure. */
  declineChargeOnCvcFailure: Scalars['Boolean'],
};

/** The charge descriptors for a Japanese payments account. */
export type ShopifyPaymentsJpChargeStatementDescriptor = ShopifyPaymentsChargeStatementDescriptor & {
   __typename?: 'ShopifyPaymentsJpChargeStatementDescriptor',
  /** The default charge statement descriptor. */
  default?: Maybe<Scalars['String']>,
  /** The charge statement descriptor in kana. */
  kana?: Maybe<Scalars['String']>,
  /** The charge statement descriptor in kanji. */
  kanji?: Maybe<Scalars['String']>,
  /** The prefix of the statement descriptor. */
  prefix: Scalars['String'],
};

/** The notification settings for the account. */
export type ShopifyPaymentsNotificationSettings = {
   __typename?: 'ShopifyPaymentsNotificationSettings',
  /** Receive email notifications when new payouts are sent or payouts fail. */
  payouts: Scalars['Boolean'],
};

/** 
 * Payouts represent the movement of money between a merchant's Shopify
 * Payments balance and their bank account.
 */
export type ShopifyPaymentsPayout = LegacyInteroperability & Node & {
   __typename?: 'ShopifyPaymentsPayout',
  /** The bank account for the payout. */
  bankAccount: ShopifyPaymentsBankAccount,
  /** The total amount and currency of the payout. */
  gross: MoneyV2,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** 
 * The exact time when the payout was issued. The payout only contains
   * balance transactions that were available at this time.
 */
  issuedAt: Scalars['DateTime'],
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** The total amount and currency of the payout. */
  net: MoneyV2,
  /** The transfer status of the payout. */
  status: ShopifyPaymentsPayoutStatus,
  /** The summary of the payout. */
  summary: ShopifyPaymentsPayoutSummary,
  /** The direction of the payout. */
  transactionType: ShopifyPaymentsPayoutTransactionType,
};

export type ShopifyPaymentsPayoutConnection = {
   __typename?: 'ShopifyPaymentsPayoutConnection',
  /** A list of edges. */
  edges: Array<ShopifyPaymentsPayoutEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type ShopifyPaymentsPayoutEdge = {
   __typename?: 'ShopifyPaymentsPayoutEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of ShopifyPaymentsPayoutEdge. */
  node: ShopifyPaymentsPayout,
};

/** The interval at which payouts are sent to the connected bank account. */
export enum ShopifyPaymentsPayoutInterval {
  /** Each business day. */
  DAILY = 'DAILY',
  /** Each week, on the day of week specified by weeklyAnchor. */
  WEEKLY = 'WEEKLY',
  /** Each month, on the day of month specified by monthlyAnchor. */
  MONTHLY = 'MONTHLY',
  /** Payouts will not be automatically made. */
  MANUAL = 'MANUAL'
}

/** The payment schedule for a payments account. */
export type ShopifyPaymentsPayoutSchedule = {
   __typename?: 'ShopifyPaymentsPayoutSchedule',
  /** The interval at which payouts are sent to the connected bank account. */
  interval: ShopifyPaymentsPayoutInterval,
  /** 
 * The day of the month funds will be paid out.
   * 
   * The value can be any day of the month from the 1st to the 31st.
   * If the payment interval is set to monthly, this value will be used.
   * Payouts scheduled between 29-31st of the month are sent on the last day of shorter months.
 */
  monthlyAnchor?: Maybe<Scalars['Int']>,
  /** 
 * The day of the week funds will be paid out.
   * 
   * The value can be any weekday from Monday to Friday.
   * If the payment interval is set to weekly, this value will be used.
 */
  weeklyAnchor?: Maybe<DayOfTheWeek>,
};

/** The transfer status of the payout. */
export enum ShopifyPaymentsPayoutStatus {
  /** 
 * The payout has been created and had transactions assigned to it, but
   * it has not yet been submitted to the bank.
 */
  SCHEDULED = 'SCHEDULED',
  /** The payout has been submitted to the bank. */
  IN_TRANSIT = 'IN_TRANSIT',
  /** The payout has been successfully deposited into the bank. */
  PAID = 'PAID',
  /** The payout has been declined by the bank. */
  FAILED = 'FAILED',
  /** The payout has been canceled by Shopify. */
  CANCELED = 'CANCELED'
}

/** 
 * Breakdown of the total fees and gross of each of the different types of transactions associated
 * with the payout.
 */
export type ShopifyPaymentsPayoutSummary = {
   __typename?: 'ShopifyPaymentsPayoutSummary',
  /** Total fees for all adjustments including disputes. */
  adjustmentsFee: MoneyV2,
  /** Total gross amount for all adjustments including disputes. */
  adjustmentsGross: MoneyV2,
  /** Total fees for all charges. */
  chargesFee: MoneyV2,
  /** Total gross amount for all charges. */
  chargesGross: MoneyV2,
  /** Total fees for all refunds. */
  refundsFee: MoneyV2,
  /** Total gross amount for all refunds. */
  refundsFeeGross: MoneyV2,
  /** Total fees for all reserved funds. */
  reservedFundsFee: MoneyV2,
  /** Total gross amount for all reserved funds. */
  reservedFundsGross: MoneyV2,
  /** Total fees for all retried payouts. */
  retriedPayoutsFee: MoneyV2,
  /** Total gross amount for all retried payouts. */
  retriedPayoutsGross: MoneyV2,
};

/** The possible transaction types for a payout. */
export enum ShopifyPaymentsPayoutTransactionType {
  /** The payout is a deposit. */
  DEPOSIT = 'DEPOSIT',
  /** The payout is a withdrawal. */
  WITHDRAWAL = 'WITHDRAWAL'
}

/** 
 * Each subject (individual) of an account has a verification object giving
 *  information about the verification state.
 */
export type ShopifyPaymentsVerification = Node & {
   __typename?: 'ShopifyPaymentsVerification',
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The status of the verification. */
  status: ShopifyPaymentsVerificationStatus,
  /** The subject/individual who has to be verified. */
  subject: ShopifyPaymentsVerificationSubject,
};

/** A document which can be used to verify an individual. */
export type ShopifyPaymentsVerificationDocument = {
   __typename?: 'ShopifyPaymentsVerificationDocument',
  /** True if the back side of the document is required. */
  backRequired: Scalars['Boolean'],
  /** True if the front side of the document is required. */
  frontRequired: Scalars['Boolean'],
  /** The type of the document which can be used for verification. */
  type: ShopifyPaymentsVerificationDocumentType,
};

/** The types of possible verification documents. */
export enum ShopifyPaymentsVerificationDocumentType {
  /** The subject's driver's license. */
  DRIVERS_LICENSE = 'DRIVERS_LICENSE',
  /** A government's identification document of the subject. */
  GOVERNMENT_IDENTIFICATION = 'GOVERNMENT_IDENTIFICATION',
  /** The subject's passport. */
  PASSPORT = 'PASSPORT'
}

/** The status of a verification. */
export enum ShopifyPaymentsVerificationStatus {
  /** The verification has been verified. */
  VERIFIED = 'VERIFIED',
  /** The verification has not yet been verified. */
  UNVERIFIED = 'UNVERIFIED',
  /** The verification request has been submitted but a response has not yet been given. */
  PENDING = 'PENDING'
}

/** The verification subject represents an individual that has to be verified. */
export type ShopifyPaymentsVerificationSubject = {
   __typename?: 'ShopifyPaymentsVerificationSubject',
  /** The family name of the individual to verify. */
  familyName: Scalars['String'],
  /** The given name of the individual to verify. */
  givenName: Scalars['String'],
};

/** The set of valid sort keys for the uploadedImages query. */
export enum ShopImageSortKeys {
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** Available locale for a shop. */
export type ShopLocale = {
   __typename?: 'ShopLocale',
  /** Locale identifier. */
  locale: Scalars['String'],
  /** Locale name. */
  name: Scalars['String'],
  /** Whether or not this is the default locale for the shop. */
  primary: Scalars['Boolean'],
  /** Whether or not the locale is published. */
  published: Scalars['Boolean'],
};

/** Return type for `shopLocaleDisable` mutation. */
export type ShopLocaleDisablePayload = {
   __typename?: 'ShopLocaleDisablePayload',
  /** The locale identifier that was disabled. */
  locale?: Maybe<Scalars['String']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `shopLocaleEnable` mutation. */
export type ShopLocaleEnablePayload = {
   __typename?: 'ShopLocaleEnablePayload',
  /** The locale that was enabled. */
  shopLocale?: Maybe<ShopLocale>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Specifies the input fields for a shop locale. */
export type ShopLocaleInput = {
  /** Specifies the publication state of the locale. */
  published?: Maybe<Scalars['Boolean']>,
};

/** Return type for `shopLocaleUpdate` mutation. */
export type ShopLocaleUpdatePayload = {
   __typename?: 'ShopLocaleUpdatePayload',
  /** The locale that was updated. */
  shopLocale?: Maybe<ShopLocale>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Represents the billing plan of the shop. */
export type ShopPlan = {
   __typename?: 'ShopPlan',
  /** The name of the shop's billing plan. */
  displayName: Scalars['String'],
  /** Whether the shop is a partner development shop for testing purposes. */
  partnerDevelopment: Scalars['Boolean'],
  /** Whether the shop has a Shopify Plus subscription. */
  shopifyPlus: Scalars['Boolean'],
};

/** Resource limits of a shop. */
export type ShopResourceLimits = {
   __typename?: 'ShopResourceLimits',
  /** Maximum number of locations allowed. */
  locationLimit: Scalars['Int'],
  /** Maximum number of product options allowed. */
  maxProductOptions: Scalars['Int'],
  /** Maximum number of variants allowed. */
  maxProductVariants: Scalars['Int'],
  /** Whether the shop has reached the limit of the number of URL redirects it can make for resources. */
  redirectLimitReached: Scalars['Boolean'],
  /** SKU limits. If the shop has unlimited skus the quantity used cannot be retrieved. */
  skuResourceLimits: ResourceLimit,
};

/** Possible sort of tags. */
export enum ShopTagSort {
  /** Alphabetical sort. */
  ALPHABETICAL = 'ALPHABETICAL',
  /** Popularity sort. */
  POPULAR = 'POPULAR'
}

/** Possible resource type of a template. */
export enum ShopTemplateResource {
  PRODUCT = 'PRODUCT',
  GIFT_CARD = 'GIFT_CARD'
}

/** Default image. This parameter is valid when the user has no image. */
export enum StaffMemberDefaultImage {
  /** Returns a default image. */
  DEFAULT = 'DEFAULT',
  /** Returns a transparent image. */
  TRANSPARENT = 'TRANSPARENT',
  /** Returns a URL that returns a 404 error if the image is not present. */
  NOT_FOUND = 'NOT_FOUND'
}

/** The input fields used to update a staff member. */
export type StaffMemberInput = {
  /** The staff member's email address. */
  email?: Maybe<Scalars['String']>,
  /** The staff member's first name. */
  firstName?: Maybe<Scalars['String']>,
  /** The staff member's last name. */
  lastName?: Maybe<Scalars['String']>,
  /** The staff member's access permissions for the Shopify admin. */
  permissions?: Maybe<Array<StaffMemberPermission>>,
};

/** The input fields used to invite a staff member. */
export type StaffMemberInviteInput = {
  /** The staff member's email address. */
  email: Scalars['String'],
  /** The staff member's first name. */
  firstName?: Maybe<Scalars['String']>,
  /** The staff member's last name. */
  lastName?: Maybe<Scalars['String']>,
  /** The staff member's access permissions for the Shopify admin. */
  permissions?: Maybe<Array<StaffMemberPermission>>,
};

/** Access permissions for staff. */
export enum StaffMemberPermission {
  /** Viewing/adding Apps. */
  APPLICATIONS = 'APPLICATIONS',
  /** Viewing/adding Sales Channels. */
  CHANNELS = 'CHANNELS',
  /** Viewing/adding Customers. */
  CUSTOMERS = 'CUSTOMERS',
  /** Access to Home. */
  DASHBOARD = 'DASHBOARD',
  /** Buying/connecting domains to Online Store. */
  DOMAINS = 'DOMAINS',
  /** Viewing/creating Draft Orders. */
  DRAFT_ORDERS = 'DRAFT_ORDERS',
  /** Full permissions. */
  FULL = 'FULL',
  /** Selling Gift cards. */
  GIFT_CARDS = 'GIFT_CARDS',
  /** Viewing/modifying Online Store navigation. */
  LINKS = 'LINKS',
  /** Modifying locations. */
  LOCATIONS = 'LOCATIONS',
  /** Viewing/creating Discounts. */
  MARKETING = 'MARKETING',
  /** Viewing/creating marketing campaigns and performance metrics. */
  MARKETING_SECTION = 'MARKETING_SECTION',
  /** Viewing Orders and Abandoned checkouts. Can still create Draft Orders without this permission. */
  ORDERS = 'ORDERS',
  /** Viewing Analytics Dashboards & Live View. */
  OVERVIEWS = 'OVERVIEWS',
  /** Viewing/creating Pages and Blog posts on the Online Store. */
  PAGES = 'PAGES',
  /** Viewing/modifying account settings. */
  PREFERENCES = 'PREFERENCES',
  /** Viewing/creating products, transfers, inventory, and collections. */
  PRODUCTS = 'PRODUCTS',
  /** Viewing/creating Reports. */
  REPORTS = 'REPORTS',
  /** Viewing/modifying Online Store themes. */
  THEMES = 'THEMES'
}

/** Data used to customize the Shopify admin for a logged-in staff member. */
export type StaffMemberPrivateData = {
   __typename?: 'StaffMemberPrivateData',
  /** URL to the user's account settings page. */
  accountSettingsUrl: Scalars['URL'],
  /** Paginated list of activities. */
  activityFeed: ActivityConnection,
  /** The date when the user was created. */
  createdAt: Scalars['DateTime'],
  /** Access permisions for the staff member. */
  permissions: Array<StaffMemberPermission>,
};


/** Data used to customize the Shopify admin for a logged-in staff member. */
export type StaffMemberPrivateDataactivityFeedArgs = {
  first: Scalars['Int']
};

/** Possible HTTP method of a staged upload target. */
export enum StagedUploadHttpMethodType {
  /** The POST HTTP method. */
  POST = 'POST',
  /** The PUT HTTP method. */
  PUT = 'PUT'
}

/** Staged target information. */
export type StagedUploadTarget = {
   __typename?: 'StagedUploadTarget',
  /** Parameters of an image to be uploaded. */
  parameters: Array<ImageUploadParameter>,
  /** Image URL. */
  url: Scalars['String'],
};

/** Specifies the fields required to generate the URL and parameters needed to upload an asset to Shopify. */
export type StagedUploadTargetGenerateInput = {
  /** The resource type being uploaded. */
  resource: StagedUploadTargetGenerateUploadResource,
  /** The filename of the asset being uploaded. */
  filename: Scalars['String'],
  /** The MIME type of the asset being uploaded. */
  mimeType: Scalars['String'],
  /** The HTTP method to be used by the staged upload. */
  httpMethod?: Maybe<StagedUploadHttpMethodType>,
};

/** Return type for `stagedUploadTargetGenerate` mutation. */
export type StagedUploadTargetGeneratePayload = {
   __typename?: 'StagedUploadTargetGeneratePayload',
  /** The signed parameters that can be used to upload the asset. */
  parameters: Array<MutationsStagedUploadTargetGenerateUploadParameter>,
  /** The signed URL where the asset can be uploaded. */
  url: Scalars['String'],
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Specifies the resource type to receive. */
export enum StagedUploadTargetGenerateUploadResource {
  /** A timeline event. */
  TIMELINE = 'TIMELINE',
  /** A product image. */
  PRODUCT_IMAGE = 'PRODUCT_IMAGE',
  /** A collection image. */
  COLLECTION_IMAGE = 'COLLECTION_IMAGE',
  /** A shop image. */
  SHOP_IMAGE = 'SHOP_IMAGE'
}

/** Return type for `stagedUploadTargetsGenerate` mutation. */
export type StagedUploadTargetsGeneratePayload = {
   __typename?: 'StagedUploadTargetsGeneratePayload',
  /** The staged upload targets that were generated. */
  urls?: Maybe<Array<StagedUploadTarget>>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Image to be uploaded. */
export type StageImageInput = {
  /** Image resource. */
  resource: StagedUploadTargetGenerateUploadResource,
  /** Image filename. */
  filename: Scalars['String'],
  /** Image MIME type. */
  mimeType: Scalars['String'],
  /** HTTP method to be used by the Staged Upload. */
  httpMethod?: Maybe<StagedUploadHttpMethodType>,
};

/** Token used to delegate unauthenticated access scopes to clients that need to access the unautheticated Storefront API. */
export type StorefrontAccessToken = Node & {
   __typename?: 'StorefrontAccessToken',
  /** List of permissions associated with the token. */
  accessScopes: Array<AccessScope>,
  /** The issued public access token. */
  accessToken: Scalars['String'],
  /** The date and time when the public access token was created. */
  createdAt: Scalars['DateTime'],
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** An arbitrary title for each token determined by the developer, used for reference         purposes. */
  title: Scalars['String'],
  /** The date and time when the storefront access token was updated. */
  updatedAt: Scalars['DateTime'],
};

export type StorefrontAccessTokenConnection = {
   __typename?: 'StorefrontAccessTokenConnection',
  /** A list of edges. */
  edges: Array<StorefrontAccessTokenEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `storefrontAccessTokenCreate` mutation. */
export type StorefrontAccessTokenCreatePayload = {
   __typename?: 'StorefrontAccessTokenCreatePayload',
  /** The user's shop. */
  shop: Shop,
  /** The storefront access token. */
  storefrontAccessToken?: Maybe<StorefrontAccessToken>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Specifies the input fields to delete a storefront access token. */
export type StorefrontAccessTokenDeleteInput = {
  /** The ID of the storefront access token to delete. */
  id: Scalars['ID'],
};

/** Return type for `storefrontAccessTokenDelete` mutation. */
export type StorefrontAccessTokenDeletePayload = {
   __typename?: 'StorefrontAccessTokenDeletePayload',
  /** The ID of the deleted storefront access token. */
  deletedStorefrontAccessTokenId?: Maybe<Scalars['ID']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type StorefrontAccessTokenEdge = {
   __typename?: 'StorefrontAccessTokenEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of StorefrontAccessTokenEdge. */
  node: StorefrontAccessToken,
};

/** Specifies the input fields for a storefront access token. */
export type StorefrontAccessTokenInput = {
  /** A title for the storefront access token. */
  title: Scalars['String'],
};


export type StringConnection = {
   __typename?: 'StringConnection',
  /** A list of edges. */
  edges: Array<StringEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type StringEdge = {
   __typename?: 'StringEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of StringEdge. */
  node: Scalars['String'],
};

/** Represents a suggested transaction. */
export type SuggestedOrderTransaction = {
   __typename?: 'SuggestedOrderTransaction',
  /** The masked account number associated with the payment method. */
  accountNumber?: Maybe<Scalars['String']>,
  /** The amount of the transaction. */
  amount: Scalars['Money'],
  /** The amount on the order transaction in applicable currencies. */
  amountSet: MoneyBag,
  /** The human-readable payment gateway name used to process the transaction. */
  formattedGateway?: Maybe<Scalars['String']>,
  /** The payment gateway used to process the transaction. */
  gateway?: Maybe<Scalars['String']>,
  /** Specifies the kind of the suggested order transaction. */
  kind: SuggestedOrderTransactionKind,
  /** Specifies the available amount to refund on the gateway. Only available within SuggestedRefund. */
  maximumRefundable?: Maybe<Scalars['Money']>,
  /** 
 * Specifies the available amount to refund on the gateway in shop and
   * presentment currencies. Only available within SuggestedRefund.
 */
  maximumRefundableSet?: Maybe<MoneyBag>,
  /** The associated parent transaction, for example the authorization of a capture. */
  parentTransaction?: Maybe<OrderTransaction>,
};

/** Specifies the kind of the suggested order transaction. */
export enum SuggestedOrderTransactionKind {
  /** A suggested refund transaction for an order. */
  SUGGESTED_REFUND = 'SUGGESTED_REFUND'
}

/** Represents the suggested refund to be submitted based on the items being returned. */
export type SuggestedRefund = {
   __typename?: 'SuggestedRefund',
  /** The total monetary value to be refunded. */
  amount: Scalars['Money'],
  /** The total monetary value to be refunded in shop and presentment currencies. */
  amountSet: MoneyBag,
  /** The sum of all the discounted prices of the line items being refunded. */
  discountedSubtotalSet: MoneyBag,
  /** The total monetary value available to refund. */
  maximumRefundable: Scalars['Money'],
  /** The total monetary value available to refund in shop and presentment currencies. */
  maximumRefundableSet: MoneyBag,
  /** Array of returned line items. */
  refundLineItems: Array<RefundLineItem>,
  /** Refund details for shipping costs paid by customer. */
  shipping: ShippingRefund,
  /** The sum of all the prices of the line items being refunded. */
  subtotal: Scalars['Money'],
  /** The sum of all the prices of the line items being refunded in shop and presentment currencies. */
  subtotalSet: MoneyBag,
  /** Array of SuggestedOrderTransaction items. */
  suggestedTransactions: Array<SuggestedOrderTransaction>,
  /** The total cart discount amount that was applied to all line items in this refund. */
  totalCartDiscountAmountSet: MoneyBag,
  /** The sum of all the taxes being refunded from the order (must be positive) in shop and presentment currencies. */
  totalTaxSet: MoneyBag,
  /** The sum of all the taxes being refunded from the order (must be positive). */
  totalTaxes: Scalars['Money'],
};

/** Return type for `tagsAdd` mutation. */
export type TagsAddPayload = {
   __typename?: 'TagsAddPayload',
  /** The object that was updated. */
  node?: Maybe<Node>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Return type for `tagsRemove` mutation. */
export type TagsRemovePayload = {
   __typename?: 'TagsRemovePayload',
  /** The object that was updated. */
  node?: Maybe<Node>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

/** Available customer tax exemptions. */
export enum TaxExemption {
  /** This customer is exempt from specific taxes for holding a valid STATUS_CARD_EXEMPTION in Canada. */
  CA_STATUS_CARD_EXEMPTION = 'CA_STATUS_CARD_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in British Columbia. */
  CA_BC_RESELLER_EXEMPTION = 'CA_BC_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Manitoba. */
  CA_MB_RESELLER_EXEMPTION = 'CA_MB_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid RESELLER_EXEMPTION in Saskatchewan. */
  CA_SK_RESELLER_EXEMPTION = 'CA_SK_RESELLER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid DIPLOMAT_EXEMPTION in Canada. */
  CA_DIPLOMAT_EXEMPTION = 'CA_DIPLOMAT_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in British Columbia. */
  CA_BC_COMMERCIAL_FISHERY_EXEMPTION = 'CA_BC_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Manitoba. */
  CA_MB_COMMERCIAL_FISHERY_EXEMPTION = 'CA_MB_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Nova Scotia. */
  CA_NS_COMMERCIAL_FISHERY_EXEMPTION = 'CA_NS_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Prince Edward Island. */
  CA_PE_COMMERCIAL_FISHERY_EXEMPTION = 'CA_PE_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid COMMERCIAL_FISHERY_EXEMPTION in Saskatchewan. */
  CA_SK_COMMERCIAL_FISHERY_EXEMPTION = 'CA_SK_COMMERCIAL_FISHERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in British Columbia. */
  CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION = 'CA_BC_PRODUCTION_AND_MACHINERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid PRODUCTION_AND_MACHINERY_EXEMPTION in Saskatchewan. */
  CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION = 'CA_SK_PRODUCTION_AND_MACHINERY_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in British Columbia. */
  CA_BC_SUB_CONTRACTOR_EXEMPTION = 'CA_BC_SUB_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid SUB_CONTRACTOR_EXEMPTION in Saskatchewan. */
  CA_SK_SUB_CONTRACTOR_EXEMPTION = 'CA_SK_SUB_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in British Columbia. */
  CA_BC_CONTRACTOR_EXEMPTION = 'CA_BC_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid CONTRACTOR_EXEMPTION in Saskatchewan. */
  CA_SK_CONTRACTOR_EXEMPTION = 'CA_SK_CONTRACTOR_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid PURCHASE_EXEMPTION in Ontario. */
  CA_ON_PURCHASE_EXEMPTION = 'CA_ON_PURCHASE_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Manitoba. */
  CA_MB_FARMER_EXEMPTION = 'CA_MB_FARMER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Nova Scotia. */
  CA_NS_FARMER_EXEMPTION = 'CA_NS_FARMER_EXEMPTION',
  /** This customer is exempt from specific taxes for holding a valid FARMER_EXEMPTION in Saskatchewan. */
  CA_SK_FARMER_EXEMPTION = 'CA_SK_FARMER_EXEMPTION'
}

/** Represents the information about the tax charged on the associated line item. */
export type TaxLine = {
   __typename?: 'TaxLine',
  /** The amount of tax to be charged. */
  price: Scalars['Money'],
  /** The amount of tax to be charged in shop and presentment currencies. */
  priceSet: MoneyBag,
  /** The tax rate to be applied. */
  rate?: Maybe<Scalars['Float']>,
  /** The percentage of the price that the tax rate represents. */
  ratePercentage?: Maybe<Scalars['Float']>,
  /** The name of the tax. */
  title: Scalars['String'],
};

/** A tender transaction represents a transaction which modifies the shop's balance. */
export type TenderTransaction = Node & {
   __typename?: 'TenderTransaction',
  /** The amount and currency of the tender transaction. */
  amount: MoneyV2,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** Information about the payment method used for this transaction. */
  paymentMethod?: Maybe<Scalars['String']>,
  /** Date and time when the transaction was processed. */
  processedAt?: Maybe<Scalars['DateTime']>,
  /** The remote gateway reference associated with the tender transaction. */
  remoteReference?: Maybe<Scalars['String']>,
  /** Whether the transaction is a test transaction. */
  test: Scalars['Boolean'],
  /** Information about the payment instrument used for this transaction. */
  transactionDetails?: Maybe<TenderTransactionDetails>,
};

export type TenderTransactionConnection = {
   __typename?: 'TenderTransactionConnection',
  /** A list of edges. */
  edges: Array<TenderTransactionEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Information about the credit card used for this transaction. */
export type TenderTransactionCreditCardDetails = {
   __typename?: 'TenderTransactionCreditCardDetails',
  /** The name of the company that issued the customer's credit card. */
  creditCardCompany?: Maybe<Scalars['String']>,
  /** The customer's credit card number, with most of the leading digits redacted. */
  creditCardNumber?: Maybe<Scalars['String']>,
};

/** Information about the payment instrument used for this transaction. */
export type TenderTransactionDetails = TenderTransactionCreditCardDetails;

export type TenderTransactionEdge = {
   __typename?: 'TenderTransactionEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of TenderTransactionEdge. */
  node: TenderTransaction,
};

/** Specifies the fields for tracking information. */
export type TrackingInfoInput = {
  /** The tracking number of the fulfillment. */
  number?: Maybe<Scalars['String']>,
  /** The URL to track the fulfillment. */
  url?: Maybe<Scalars['String']>,
};

/** Specifies all possible fields for updating tracking information. */
export type TrackingInfoUpdateInput = {
  /** Tracking information consisting of one or more tracking URLs and numbers associated with the fulfillment. */
  trackingDetails?: Maybe<Array<TrackingInfoInput>>,
  /** The name of the tracking company. */
  trackingCompany?: Maybe<Scalars['String']>,
  /** Indicates whether the customer will be notified of this update and future updates for this fulfillment. */
  notifyCustomer?: Maybe<Scalars['Boolean']>,
};

/** Translatable content of a resource's field. */
export type TranslatableContent = {
   __typename?: 'TranslatableContent',
  /** Digest (hash) of the content. */
  digest?: Maybe<Scalars['String']>,
  /** Content key. */
  key: Scalars['String'],
  /** Content locale. */
  locale: Scalars['String'],
  /** Content value. */
  value?: Maybe<Scalars['String']>,
};

/** A resource that has translatable fields. */
export type TranslatableResource = {
   __typename?: 'TranslatableResource',
  /** GID of the resource. */
  resourceId: Scalars['ID'],
  /** Translatable content. */
  translatableContent: Array<TranslatableContent>,
  /** Translatable content translations. */
  translations: Array<Translation>,
};


/** A resource that has translatable fields. */
export type TranslatableResourcetranslationsArgs = {
  locale: Scalars['String'],
  outdated?: Maybe<Scalars['Boolean']>
};

export type TranslatableResourceConnection = {
   __typename?: 'TranslatableResourceConnection',
  /** A list of edges. */
  edges: Array<TranslatableResourceEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

export type TranslatableResourceEdge = {
   __typename?: 'TranslatableResourceEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of TranslatableResourceEdge. */
  node: TranslatableResource,
};

/** Specifies the type of resources that are translatable. */
export enum TranslatableResourceType {
  /** Represents a product. */
  PRODUCT = 'PRODUCT',
  /** Represents a product variant. */
  PRODUCT_VARIANT = 'PRODUCT_VARIANT',
  /** Represents an email template. */
  EMAIL_TEMPLATE = 'EMAIL_TEMPLATE',
  /** Represents an online store theme. */
  ONLINE_STORE_THEME = 'ONLINE_STORE_THEME',
  /** Represents an article. */
  ONLINE_STORE_ARTICLE = 'ONLINE_STORE_ARTICLE',
  /** Represents an online store blog. */
  ONLINE_STORE_BLOG = 'ONLINE_STORE_BLOG',
  /** Represents an online store page. */
  ONLINE_STORE_PAGE = 'ONLINE_STORE_PAGE',
  /** Represents a collection of products. */
  COLLECTION = 'COLLECTION',
  /** Represents a link to direct users to. */
  LINK = 'LINK',
  /** Represents a metafield. */
  METAFIELD = 'METAFIELD',
  /** Represents an SMS template. */
  SMS_TEMPLATE = 'SMS_TEMPLATE',
  /** Represents a shop. */
  SHOP = 'SHOP',
  /** Represents a shop policy. */
  SHOP_POLICY = 'SHOP_POLICY',
  /** Represents a payment gateway. */
  PAYMENT_GATEWAY = 'PAYMENT_GATEWAY',
  /** Represents a custom product property name like "Size", "Color", and "Material". */
  PRODUCT_OPTION = 'PRODUCT_OPTION'
}

/** Translation of a field of a resource. */
export type Translation = {
   __typename?: 'Translation',
  /** Translation key. */
  key: Scalars['String'],
  /** Translation locale. */
  locale: Scalars['String'],
  /** Marked as outdated. */
  outdated: Scalars['Boolean'],
  /** Translation value. */
  value?: Maybe<Scalars['String']>,
};

/** Possible error codes that could be returned by a translation mutation. */
export enum TranslationErrorCode {
  /** Input value is blank. */
  BLANK = 'BLANK',
  /** Input value is invalid. */
  INVALID = 'INVALID',
  /** Resource does not exist. */
  RESOURCE_NOT_FOUND = 'RESOURCE_NOT_FOUND',
  /** Too many translation keys for resource. */
  TOO_MANY_KEYS_FOR_RESOURCE = 'TOO_MANY_KEYS_FOR_RESOURCE',
  /** Translation key is invalid. */
  INVALID_KEY_FOR_MODEL = 'INVALID_KEY_FOR_MODEL',
  /** Translation value is invalid. */
  FAILS_RESOURCE_VALIDATION = 'FAILS_RESOURCE_VALIDATION',
  /** Translatable content is invalid. */
  INVALID_TRANSLATABLE_CONTENT = 'INVALID_TRANSLATABLE_CONTENT',
  /** Locale language code is invalid. */
  INVALID_CODE = 'INVALID_CODE',
  /** Locale code format is invalid. */
  INVALID_FORMAT = 'INVALID_FORMAT'
}

/** Provides the fields and values to use when creating or updating a translation. */
export type TranslationInput = {
  /** The locale of the translation. */
  locale: Scalars['String'],
  /** The key of the translation. */
  key: Scalars['String'],
  /** The value of the translation. */
  value: Scalars['String'],
  /** The digest (hash) of the content being translated. */
  translatableContentDigest: Scalars['String'],
};

/** Return type for `translationsRegister` mutation. */
export type TranslationsRegisterPayload = {
   __typename?: 'TranslationsRegisterPayload',
  /** The translations that were created or updated. */
  translations?: Maybe<Array<Translation>>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<TranslationUserError>,
};

/** Return type for `translationsRemove` mutation. */
export type TranslationsRemovePayload = {
   __typename?: 'TranslationsRemovePayload',
  /** The translations that were deleted. */
  translations?: Maybe<Array<Translation>>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<TranslationUserError>,
};

/** Represents an error that happens during the execution of a translation mutation. */
export type TranslationUserError = DisplayableError & {
   __typename?: 'TranslationUserError',
  /** Error code to uniquely identify the error. */
  code?: Maybe<TranslationErrorCode>,
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>,
  /** The error message. */
  message: Scalars['String'],
};

/** Systems of weights and measures. */
export enum UnitSystem {
  /** Imperial system of weights and measures. */
  IMPERIAL_SYSTEM = 'IMPERIAL_SYSTEM',
  /** Metric system of weights and measures. */
  METRIC_SYSTEM = 'METRIC_SYSTEM'
}

/** Possible strategies for handling unprotected orders. */
export enum UnprotectedOrderAction {
  /** Automatically cancel unprotected orders. */
  AUTO_CANCEL_UNPROTECTED_ORDERS = 'AUTO_CANCEL_UNPROTECTED_ORDERS',
  /** Automatically capture unprotected orders. */
  AUTO_CAPTURE_UNPROTECTED_ORDERS = 'AUTO_CAPTURE_UNPROTECTED_ORDERS',
  /** Take no special action for unprotected orders. */
  NO_ACTION_FOR_UNPROTECTED_ORDERS = 'NO_ACTION_FOR_UNPROTECTED_ORDERS',
  /** Action has not been set because Fraud Protect is not enabled. */
  NOT_SET = 'NOT_SET'
}



/** Represents an error in the input of a mutation. */
export type UserError = DisplayableError & {
   __typename?: 'UserError',
  /** Path to the input field which caused the error. */
  field?: Maybe<Array<Scalars['String']>>,
  /** The error message. */
  message: Scalars['String'],
};


/** 
 * Specifies the
 * [Urchin Traffic Module (UTM) parameters](https://en.wikipedia.org/wiki/UTM_parameters)
 * that are associated with a related marketing campaign.
 */
export type UTMInput = {
  /** The name of the UTM campaign. */
  campaign: Scalars['String'],
  /** The name of the website or application where the referral link exists. */
  source: Scalars['String'],
  /** The UTM campaign medium. */
  medium: Scalars['String'],
};

/** Represents a set of UTM parameters. */
export type UTMParameters = {
   __typename?: 'UTMParameters',
  campaign?: Maybe<Scalars['String']>,
  content?: Maybe<Scalars['String']>,
  medium?: Maybe<Scalars['String']>,
  source?: Maybe<Scalars['String']>,
  term?: Maybe<Scalars['String']>,
};

/** Represents a subscription to a webhook. */
export type WebhookSubscription = Node & LegacyInteroperability & {
   __typename?: 'WebhookSubscription',
  /** URL where the webhook subscription should send the POST request when the event occurs. */
  callbackUrl: Scalars['URL'],
  /** The date and time when the webhook subscription was created. */
  createdAt: Scalars['DateTime'],
  /** The format in which the webhook subscription should send the data. */
  format: WebhookSubscriptionFormat,
  /** Globally unique identifier. */
  id: Scalars['ID'],
  /** The list of fields to be included in the webhook subscription. */
  includeFields: Array<Scalars['String']>,
  /** The ID of the corresponding resource in the REST Admin API. */
  legacyResourceId: Scalars['UnsignedInt64'],
  /** The list of namespaces for any metafields that should be included in the webhook subscription. */
  metafieldNamespaces: Array<Scalars['String']>,
  /** The type of event that triggers the webhook. */
  topic: WebhookSubscriptionTopic,
  /** The date and time when the webhook subscription was updated. */
  updatedAt: Scalars['DateTime'],
};

export type WebhookSubscriptionConnection = {
   __typename?: 'WebhookSubscriptionConnection',
  /** A list of edges. */
  edges: Array<WebhookSubscriptionEdge>,
  /** Information to aid in pagination. */
  pageInfo: PageInfo,
};

/** Return type for `webhookSubscriptionCreate` mutation. */
export type WebhookSubscriptionCreatePayload = {
   __typename?: 'WebhookSubscriptionCreatePayload',
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
  /** The webhook subscription that was created. */
  webhookSubscription?: Maybe<WebhookSubscription>,
};

/** Return type for `webhookSubscriptionDelete` mutation. */
export type WebhookSubscriptionDeletePayload = {
   __typename?: 'WebhookSubscriptionDeletePayload',
  /** The ID of the deleted webhook subscription. */
  deletedWebhookSubscriptionId?: Maybe<Scalars['ID']>,
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
};

export type WebhookSubscriptionEdge = {
   __typename?: 'WebhookSubscriptionEdge',
  /** A cursor for use in pagination. */
  cursor: Scalars['String'],
  /** The item at the end of WebhookSubscriptionEdge. */
  node: WebhookSubscription,
};

/** The supported formats for webhook subscriptions. */
export enum WebhookSubscriptionFormat {
  JSON = 'JSON',
  XML = 'XML'
}

/** Specifies the input fields for a webhook subscription. */
export type WebhookSubscriptionInput = {
  /** URL where the webhook subscription should send the POST request when the event occurs. */
  callbackUrl?: Maybe<Scalars['URL']>,
  /** The format in which the webhook subscription should send the data. */
  format?: Maybe<WebhookSubscriptionFormat>,
  /** The list of fields to be included in the webhook subscription. */
  includeFields?: Maybe<Array<Scalars['String']>>,
  /** The list of namespaces for any metafields that should be included in the webhook subscription. */
  metafieldNamespaces?: Maybe<Array<Scalars['String']>>,
};

/** The set of valid sort keys for the webhookSubscriptions query. */
export enum WebhookSubscriptionSortKeys {
  /** Sort by the `created_at` value. */
  CREATED_AT = 'CREATED_AT',
  /** Sort by the `id` value. */
  ID = 'ID',
  /** 
 * During a search (i.e. when the `query` parameter has been specified on the connection) this sorts the
   * results by relevance to the search term(s). When no search query is specified, this sort key is not
   * deterministic and should not be used.
 */
  RELEVANCE = 'RELEVANCE'
}

/** The supported topics for webhook subscriptions. */
export enum WebhookSubscriptionTopic {
  /** The webhook topic for `app/uninstalled` events. */
  APP_UNINSTALLED = 'APP_UNINSTALLED',
  /** The webhook topic for `carts/create` events. */
  CARTS_CREATE = 'CARTS_CREATE',
  /** The webhook topic for `carts/update` events. */
  CARTS_UPDATE = 'CARTS_UPDATE',
  /** The webhook topic for `channels/delete` events. */
  CHANNELS_DELETE = 'CHANNELS_DELETE',
  /** The webhook topic for `checkouts/create` events. */
  CHECKOUTS_CREATE = 'CHECKOUTS_CREATE',
  /** The webhook topic for `checkouts/delete` events. */
  CHECKOUTS_DELETE = 'CHECKOUTS_DELETE',
  /** The webhook topic for `checkouts/update` events. */
  CHECKOUTS_UPDATE = 'CHECKOUTS_UPDATE',
  /** The webhook topic for `collection_listings/add` events. */
  COLLECTION_LISTINGS_ADD = 'COLLECTION_LISTINGS_ADD',
  /** The webhook topic for `collection_listings/remove` events. */
  COLLECTION_LISTINGS_REMOVE = 'COLLECTION_LISTINGS_REMOVE',
  /** The webhook topic for `collection_listings/update` events. */
  COLLECTION_LISTINGS_UPDATE = 'COLLECTION_LISTINGS_UPDATE',
  /** The webhook topic for `collection_publications/create` events. */
  COLLECTION_PUBLICATIONS_CREATE = 'COLLECTION_PUBLICATIONS_CREATE',
  /** The webhook topic for `collection_publications/delete` events. */
  COLLECTION_PUBLICATIONS_DELETE = 'COLLECTION_PUBLICATIONS_DELETE',
  /** The webhook topic for `collection_publications/update` events. */
  COLLECTION_PUBLICATIONS_UPDATE = 'COLLECTION_PUBLICATIONS_UPDATE',
  /** The webhook topic for `collections/create` events. */
  COLLECTIONS_CREATE = 'COLLECTIONS_CREATE',
  /** The webhook topic for `collections/delete` events. */
  COLLECTIONS_DELETE = 'COLLECTIONS_DELETE',
  /** The webhook topic for `collections/update` events. */
  COLLECTIONS_UPDATE = 'COLLECTIONS_UPDATE',
  /** The webhook topic for `customer_groups/create` events. */
  CUSTOMER_GROUPS_CREATE = 'CUSTOMER_GROUPS_CREATE',
  /** The webhook topic for `customer_groups/delete` events. */
  CUSTOMER_GROUPS_DELETE = 'CUSTOMER_GROUPS_DELETE',
  /** The webhook topic for `customer_groups/update` events. */
  CUSTOMER_GROUPS_UPDATE = 'CUSTOMER_GROUPS_UPDATE',
  /** The webhook topic for `customers/create` events. */
  CUSTOMERS_CREATE = 'CUSTOMERS_CREATE',
  /** The webhook topic for `customers/delete` events. */
  CUSTOMERS_DELETE = 'CUSTOMERS_DELETE',
  /** The webhook topic for `customers/disable` events. */
  CUSTOMERS_DISABLE = 'CUSTOMERS_DISABLE',
  /** The webhook topic for `customers/enable` events. */
  CUSTOMERS_ENABLE = 'CUSTOMERS_ENABLE',
  /** The webhook topic for `customers/update` events. */
  CUSTOMERS_UPDATE = 'CUSTOMERS_UPDATE',
  /** The webhook topic for `disputes/create` events. */
  DISPUTES_CREATE = 'DISPUTES_CREATE',
  /** The webhook topic for `disputes/update` events. */
  DISPUTES_UPDATE = 'DISPUTES_UPDATE',
  /** The webhook topic for `draft_orders/create` events. */
  DRAFT_ORDERS_CREATE = 'DRAFT_ORDERS_CREATE',
  /** The webhook topic for `draft_orders/delete` events. */
  DRAFT_ORDERS_DELETE = 'DRAFT_ORDERS_DELETE',
  /** The webhook topic for `draft_orders/update` events. */
  DRAFT_ORDERS_UPDATE = 'DRAFT_ORDERS_UPDATE',
  /** The webhook topic for `fulfillment_events/create` events. */
  FULFILLMENT_EVENTS_CREATE = 'FULFILLMENT_EVENTS_CREATE',
  /** The webhook topic for `fulfillment_events/delete` events. */
  FULFILLMENT_EVENTS_DELETE = 'FULFILLMENT_EVENTS_DELETE',
  /** The webhook topic for `fulfillments/create` events. */
  FULFILLMENTS_CREATE = 'FULFILLMENTS_CREATE',
  /** The webhook topic for `fulfillments/update` events. */
  FULFILLMENTS_UPDATE = 'FULFILLMENTS_UPDATE',
  /** The webhook topic for `attributed_sessions/first` events. */
  ATTRIBUTED_SESSIONS_FIRST = 'ATTRIBUTED_SESSIONS_FIRST',
  /** The webhook topic for `attributed_sessions/last` events. */
  ATTRIBUTED_SESSIONS_LAST = 'ATTRIBUTED_SESSIONS_LAST',
  /** The webhook topic for `order_transactions/create` events. */
  ORDER_TRANSACTIONS_CREATE = 'ORDER_TRANSACTIONS_CREATE',
  /** The webhook topic for `orders/cancelled` events. */
  ORDERS_CANCELLED = 'ORDERS_CANCELLED',
  /** The webhook topic for `orders/create` events. */
  ORDERS_CREATE = 'ORDERS_CREATE',
  /** The webhook topic for `orders/delete` events. */
  ORDERS_DELETE = 'ORDERS_DELETE',
  /** The webhook topic for `orders/fulfilled` events. */
  ORDERS_FULFILLED = 'ORDERS_FULFILLED',
  /** The webhook topic for `orders/paid` events. */
  ORDERS_PAID = 'ORDERS_PAID',
  /** The webhook topic for `orders/partially_fulfilled` events. */
  ORDERS_PARTIALLY_FULFILLED = 'ORDERS_PARTIALLY_FULFILLED',
  /** The webhook topic for `orders/updated` events. */
  ORDERS_UPDATED = 'ORDERS_UPDATED',
  /** The webhook topic for `product_listings/add` events. */
  PRODUCT_LISTINGS_ADD = 'PRODUCT_LISTINGS_ADD',
  /** The webhook topic for `product_listings/remove` events. */
  PRODUCT_LISTINGS_REMOVE = 'PRODUCT_LISTINGS_REMOVE',
  /** The webhook topic for `product_listings/update` events. */
  PRODUCT_LISTINGS_UPDATE = 'PRODUCT_LISTINGS_UPDATE',
  /** The webhook topic for `product_publications/create` events. */
  PRODUCT_PUBLICATIONS_CREATE = 'PRODUCT_PUBLICATIONS_CREATE',
  /** The webhook topic for `product_publications/delete` events. */
  PRODUCT_PUBLICATIONS_DELETE = 'PRODUCT_PUBLICATIONS_DELETE',
  /** The webhook topic for `product_publications/update` events. */
  PRODUCT_PUBLICATIONS_UPDATE = 'PRODUCT_PUBLICATIONS_UPDATE',
  /** The webhook topic for `products/create` events. */
  PRODUCTS_CREATE = 'PRODUCTS_CREATE',
  /** The webhook topic for `products/delete` events. */
  PRODUCTS_DELETE = 'PRODUCTS_DELETE',
  /** The webhook topic for `products/update` events. */
  PRODUCTS_UPDATE = 'PRODUCTS_UPDATE',
  /** The webhook topic for `refunds/create` events. */
  REFUNDS_CREATE = 'REFUNDS_CREATE',
  /** The webhook topic for `shipping_addresses/create` events. */
  SHIPPING_ADDRESSES_CREATE = 'SHIPPING_ADDRESSES_CREATE',
  /** The webhook topic for `shipping_addresses/update` events. */
  SHIPPING_ADDRESSES_UPDATE = 'SHIPPING_ADDRESSES_UPDATE',
  /** The webhook topic for `shop/update` events. */
  SHOP_UPDATE = 'SHOP_UPDATE',
  /** The webhook topic for `tax_services/create` events. */
  TAX_SERVICES_CREATE = 'TAX_SERVICES_CREATE',
  /** The webhook topic for `tax_services/update` events. */
  TAX_SERVICES_UPDATE = 'TAX_SERVICES_UPDATE',
  /** The webhook topic for `themes/create` events. */
  THEMES_CREATE = 'THEMES_CREATE',
  /** The webhook topic for `themes/delete` events. */
  THEMES_DELETE = 'THEMES_DELETE',
  /** The webhook topic for `themes/publish` events. */
  THEMES_PUBLISH = 'THEMES_PUBLISH',
  /** The webhook topic for `themes/update` events. */
  THEMES_UPDATE = 'THEMES_UPDATE',
  /** The webhook topic for `variants/in_stock` events. */
  VARIANTS_IN_STOCK = 'VARIANTS_IN_STOCK',
  /** The webhook topic for `variants/out_of_stock` events. */
  VARIANTS_OUT_OF_STOCK = 'VARIANTS_OUT_OF_STOCK',
  /** The webhook topic for `inventory_levels/connect` events. */
  INVENTORY_LEVELS_CONNECT = 'INVENTORY_LEVELS_CONNECT',
  /** The webhook topic for `inventory_levels/update` events. */
  INVENTORY_LEVELS_UPDATE = 'INVENTORY_LEVELS_UPDATE',
  /** The webhook topic for `inventory_levels/disconnect` events. */
  INVENTORY_LEVELS_DISCONNECT = 'INVENTORY_LEVELS_DISCONNECT',
  /** The webhook topic for `attribution/risk` events. */
  ATTRIBUTION_RISK = 'ATTRIBUTION_RISK',
  /** The webhook topic for `inventory_items/create` events. */
  INVENTORY_ITEMS_CREATE = 'INVENTORY_ITEMS_CREATE',
  /** The webhook topic for `inventory_items/update` events. */
  INVENTORY_ITEMS_UPDATE = 'INVENTORY_ITEMS_UPDATE',
  /** The webhook topic for `inventory_items/delete` events. */
  INVENTORY_ITEMS_DELETE = 'INVENTORY_ITEMS_DELETE',
  /** The webhook topic for `locations/create` events. */
  LOCATIONS_CREATE = 'LOCATIONS_CREATE',
  /** The webhook topic for `locations/update` events. */
  LOCATIONS_UPDATE = 'LOCATIONS_UPDATE',
  /** The webhook topic for `locations/delete` events. */
  LOCATIONS_DELETE = 'LOCATIONS_DELETE',
  /** The webhook topic for `tender_transactions/create` events. */
  TENDER_TRANSACTIONS_CREATE = 'TENDER_TRANSACTIONS_CREATE',
  /** The webhook topic for `app_purchases_one_time/update` events. */
  APP_PURCHASES_ONE_TIME_UPDATE = 'APP_PURCHASES_ONE_TIME_UPDATE',
  /** The webhook topic for `app_subscriptions/update` events. */
  APP_SUBSCRIPTIONS_UPDATE = 'APP_SUBSCRIPTIONS_UPDATE',
  /** The webhook topic for `locales/create` events. */
  LOCALES_CREATE = 'LOCALES_CREATE',
  /** The webhook topic for `locales/update` events. */
  LOCALES_UPDATE = 'LOCALES_UPDATE'
}

/** Return type for `webhookSubscriptionUpdate` mutation. */
export type WebhookSubscriptionUpdatePayload = {
   __typename?: 'WebhookSubscriptionUpdatePayload',
  /** List of errors that occurred executing the mutation. */
  userErrors: Array<UserError>,
  /** The webhook subscription that was updated. */
  webhookSubscription?: Maybe<WebhookSubscription>,
};

/** Represents weight unit and value. */
export type Weight = {
   __typename?: 'Weight',
  /** Unit of measurement for `value`. */
  unit: WeightUnit,
  /** The weight using the unit system specified with `unit`. */
  value: Scalars['Float'],
};

/** Specifies the weight unit and value inputs. */
export type WeightInput = {
  /** The weight value using the unit system specified with `weight_unit`. */
  value: Scalars['Float'],
  /** Unit of measurement for `value`. */
  unit: WeightUnit,
};

/** Units of measurement for weight. */
export enum WeightUnit {
  /** 1 kilogram equals 1000 grams. */
  KILOGRAMS = 'KILOGRAMS',
  /** Metric system unit of mass. */
  GRAMS = 'GRAMS',
  /** 1 pound equals 16 ounces. */
  POUNDS = 'POUNDS',
  /** Imperial system unit of mass. */
  OUNCES = 'OUNCES'
}

export type getProductVariantsQueryVariables = {
  first: Scalars['Int'],
  after?: Maybe<Scalars['String']>
};


export type getProductVariantsQuery = (
  { __typename?: 'QueryRoot' }
  & { result: (
    { __typename?: 'ProductVariantConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage'>
    ), edges: Array<(
      { __typename?: 'ProductVariantEdge' }
      & Pick<ProductVariantEdge, 'cursor'>
      & { node: (
        { __typename?: 'ProductVariant' }
        & Pick<ProductVariant, 'id' | 'price' | 'compareAtPrice' | 'inventoryQuantity' | 'availableForSale'>
        & { product: (
          { __typename?: 'Product' }
          & Pick<Product, 'id'>
        ), selectedOptions: Array<(
          { __typename?: 'SelectedOption' }
          & Pick<SelectedOption, 'name' | 'value'>
        )>, image: Maybe<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'src' | 'altText'>
        )>, images: Array<(
          { __typename?: 'Image' }
          & Pick<Image, 'id' | 'src' | 'altText'>
        )> }
      ) }
    )> }
  ) }
);

export type getProductsQueryVariables = {
  first: Scalars['Int'],
  after?: Maybe<Scalars['String']>
};


export type getProductsQuery = (
  { __typename?: 'QueryRoot' }
  & { result: (
    { __typename?: 'ProductConnection' }
    & { pageInfo: (
      { __typename?: 'PageInfo' }
      & Pick<PageInfo, 'hasNextPage'>
    ), edges: Array<(
      { __typename?: 'ProductEdge' }
      & Pick<ProductEdge, 'cursor'>
      & { node: (
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'handle' | 'description' | 'productType'>
        & { options: Array<(
          { __typename?: 'ProductOption' }
          & Pick<ProductOption, 'id' | 'name' | 'position' | 'values'>
        )> }
      ) }
    )> }
  ) }
);

export type getShopQueryVariables = {};


export type getShopQuery = (
  { __typename?: 'QueryRoot' }
  & { shop: (
    { __typename?: 'Shop' }
    & Pick<Shop, 'id' | 'name' | 'email' | 'myshopifyDomain' | 'url'>
  ) }
);


export const getProductVariantsDocument = gql`
    query getProductVariants($first: Int!, $after: String) {
  result: productVariants(first: $first, after: $after) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        product {
          id
        }
        price
        compareAtPrice
        inventoryQuantity
        availableForSale
        selectedOptions {
          name
          value
        }
        image {
          id
          src
          altText
        }
        images {
          id
          src
          altText
        }
      }
    }
  }
}
    `;
export const getProductsDocument = gql`
    query getProducts($first: Int!, $after: String) {
  result: products(first: $first, after: $after) {
    pageInfo {
      hasNextPage
    }
    edges {
      cursor
      node {
        id
        handle
        description
        productType
        options {
          id
          name
          position
          values
        }
      }
    }
  }
}
    `;
export const getShopDocument = gql`
    query getShop {
  shop {
    id
    name
    email
    myshopifyDomain
    url
  }
}
    `;
export function getSdk(client: GraphQLClient) {
  return {
    getProductVariants(variables: getProductVariantsQueryVariables): Promise<getProductVariantsQuery> {
      return client.request<getProductVariantsQuery>(print(getProductVariantsDocument), variables);
    },
    getProducts(variables: getProductsQueryVariables): Promise<getProductsQuery> {
      return client.request<getProductsQuery>(print(getProductsDocument), variables);
    },
    getShop(variables?: getShopQueryVariables): Promise<getShopQuery> {
      return client.request<getShopQuery>(print(getShopDocument), variables);
    }
  };
}