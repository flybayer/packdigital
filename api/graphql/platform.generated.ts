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
  bigint: any,
  timestamptz: any,
};


/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type bigint_comparison_exp = {
  _eq?: Maybe<Scalars['bigint']>,
  _gt?: Maybe<Scalars['bigint']>,
  _gte?: Maybe<Scalars['bigint']>,
  _in?: Maybe<Array<Scalars['bigint']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['bigint']>,
  _lte?: Maybe<Scalars['bigint']>,
  _neq?: Maybe<Scalars['bigint']>,
  _nin?: Maybe<Array<Scalars['bigint']>>,
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_comparison_exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};

/** mutation root */
export type mutation_root = {
   __typename?: 'mutation_root',
  /** delete data from the table: "shopifyStores" */
  deleteShopifyStores?: Maybe<shopifyStores_mutation_response>,
  /** delete data from the table: "users" */
  deleteUsers?: Maybe<users_mutation_response>,
  /** delete data from the table: "tests" */
  delete_tests?: Maybe<tests_mutation_response>,
  /** insert data into the table: "shopifyStores" */
  insertShopifyStores?: Maybe<shopifyStores_mutation_response>,
  /** insert data into the table: "users" */
  insertUsers?: Maybe<users_mutation_response>,
  /** insert data into the table: "tests" */
  insert_tests?: Maybe<tests_mutation_response>,
  /** update data of the table: "shopifyStores" */
  updateShopifyStores?: Maybe<shopifyStores_mutation_response>,
  /** update data of the table: "users" */
  updateUsers?: Maybe<users_mutation_response>,
  /** update data of the table: "tests" */
  update_tests?: Maybe<tests_mutation_response>,
};


/** mutation root */
export type mutation_rootdeleteShopifyStoresArgs = {
  where: shopifyStores_bool_exp
};


/** mutation root */
export type mutation_rootdeleteUsersArgs = {
  where: users_bool_exp
};


/** mutation root */
export type mutation_rootdelete_testsArgs = {
  where: tests_bool_exp
};


/** mutation root */
export type mutation_rootinsertShopifyStoresArgs = {
  objects: Array<shopifyStores_insert_input>,
  on_conflict?: Maybe<shopifyStores_on_conflict>
};


/** mutation root */
export type mutation_rootinsertUsersArgs = {
  objects: Array<users_insert_input>,
  on_conflict?: Maybe<users_on_conflict>
};


/** mutation root */
export type mutation_rootinsert_testsArgs = {
  objects: Array<tests_insert_input>,
  on_conflict?: Maybe<tests_on_conflict>
};


/** mutation root */
export type mutation_rootupdateShopifyStoresArgs = {
  _inc?: Maybe<shopifyStores_inc_input>,
  _set?: Maybe<shopifyStores_set_input>,
  where: shopifyStores_bool_exp
};


/** mutation root */
export type mutation_rootupdateUsersArgs = {
  _inc?: Maybe<users_inc_input>,
  _set?: Maybe<users_set_input>,
  where: users_bool_exp
};


/** mutation root */
export type mutation_rootupdate_testsArgs = {
  _inc?: Maybe<tests_inc_input>,
  _set?: Maybe<tests_set_input>,
  where: tests_bool_exp
};

/** column ordering options */
export enum order_by {
  /** in the ascending order, nulls last */
  asc = 'asc',
  /** in the ascending order, nulls first */
  asc_nulls_first = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  asc_nulls_last = 'asc_nulls_last',
  /** in the descending order, nulls first */
  desc = 'desc',
  /** in the descending order, nulls first */
  desc_nulls_first = 'desc_nulls_first',
  /** in the descending order, nulls last */
  desc_nulls_last = 'desc_nulls_last'
}

/** query root */
export type query_root = {
   __typename?: 'query_root',
  /** fetch data from the table: "shopifyStores" using primary key columns */
  shopifyStore?: Maybe<shopifyStores>,
  /** fetch data from the table: "shopifyStores" */
  shopifyStores: Array<shopifyStores>,
  /** fetch aggregated fields from the table: "shopifyStores" */
  shopifyStoresAggregate: shopifyStores_aggregate,
  /** fetch data from the table: "tests" */
  tests: Array<tests>,
  /** fetch aggregated fields from the table: "tests" */
  tests_aggregate: tests_aggregate,
  /** fetch data from the table: "tests" using primary key columns */
  tests_by_pk?: Maybe<tests>,
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<users>,
  /** fetch data from the table: "users" */
  users: Array<users>,
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: users_aggregate,
};


/** query root */
export type query_rootshopifyStoreArgs = {
  id: Scalars['bigint']
};


/** query root */
export type query_rootshopifyStoresArgs = {
  distinct_on?: Maybe<Array<shopifyStores_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<shopifyStores_order_by>>,
  where?: Maybe<shopifyStores_bool_exp>
};


/** query root */
export type query_rootshopifyStoresAggregateArgs = {
  distinct_on?: Maybe<Array<shopifyStores_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<shopifyStores_order_by>>,
  where?: Maybe<shopifyStores_bool_exp>
};


/** query root */
export type query_roottestsArgs = {
  distinct_on?: Maybe<Array<tests_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<tests_order_by>>,
  where?: Maybe<tests_bool_exp>
};


/** query root */
export type query_roottests_aggregateArgs = {
  distinct_on?: Maybe<Array<tests_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<tests_order_by>>,
  where?: Maybe<tests_bool_exp>
};


/** query root */
export type query_roottests_by_pkArgs = {
  id: Scalars['Int']
};


/** query root */
export type query_rootuserArgs = {
  id: Scalars['Int']
};


/** query root */
export type query_rootusersArgs = {
  distinct_on?: Maybe<Array<users_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<users_order_by>>,
  where?: Maybe<users_bool_exp>
};


/** query root */
export type query_rootusersAggregateArgs = {
  distinct_on?: Maybe<Array<users_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<users_order_by>>,
  where?: Maybe<users_bool_exp>
};

/** columns and relationships of "shopifyStores" */
export type shopifyStores = {
   __typename?: 'shopifyStores',
  created_at: Scalars['timestamptz'],
  email?: Maybe<Scalars['String']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id: Scalars['bigint'],
  myshopifyDomain?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  shopifyId?: Maybe<Scalars['String']>,
  updated_at: Scalars['timestamptz'],
  url?: Maybe<Scalars['String']>,
};

/** aggregated selection of "shopifyStores" */
export type shopifyStores_aggregate = {
   __typename?: 'shopifyStores_aggregate',
  aggregate?: Maybe<shopifyStores_aggregate_fields>,
  nodes: Array<shopifyStores>,
};

/** aggregate fields of "shopifyStores" */
export type shopifyStores_aggregate_fields = {
   __typename?: 'shopifyStores_aggregate_fields',
  avg?: Maybe<shopifyStores_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<shopifyStores_max_fields>,
  min?: Maybe<shopifyStores_min_fields>,
  stddev?: Maybe<shopifyStores_stddev_fields>,
  stddev_pop?: Maybe<shopifyStores_stddev_pop_fields>,
  stddev_samp?: Maybe<shopifyStores_stddev_samp_fields>,
  sum?: Maybe<shopifyStores_sum_fields>,
  var_pop?: Maybe<shopifyStores_var_pop_fields>,
  var_samp?: Maybe<shopifyStores_var_samp_fields>,
  variance?: Maybe<shopifyStores_variance_fields>,
};


/** aggregate fields of "shopifyStores" */
export type shopifyStores_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<shopifyStores_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "shopifyStores" */
export type shopifyStores_aggregate_order_by = {
  avg?: Maybe<shopifyStores_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<shopifyStores_max_order_by>,
  min?: Maybe<shopifyStores_min_order_by>,
  stddev?: Maybe<shopifyStores_stddev_order_by>,
  stddev_pop?: Maybe<shopifyStores_stddev_pop_order_by>,
  stddev_samp?: Maybe<shopifyStores_stddev_samp_order_by>,
  sum?: Maybe<shopifyStores_sum_order_by>,
  var_pop?: Maybe<shopifyStores_var_pop_order_by>,
  var_samp?: Maybe<shopifyStores_var_samp_order_by>,
  variance?: Maybe<shopifyStores_variance_order_by>,
};

/** input type for inserting array relation for remote table "shopifyStores" */
export type shopifyStores_arr_rel_insert_input = {
  data: Array<shopifyStores_insert_input>,
  on_conflict?: Maybe<shopifyStores_on_conflict>,
};

/** aggregate avg on columns */
export type shopifyStores_avg_fields = {
   __typename?: 'shopifyStores_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "shopifyStores" */
export type shopifyStores_avg_order_by = {
  id?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "shopifyStores". All fields are combined with a logical 'AND'. */
export type shopifyStores_bool_exp = {
  _and?: Maybe<Array<Maybe<shopifyStores_bool_exp>>>,
  _not?: Maybe<shopifyStores_bool_exp>,
  _or?: Maybe<Array<Maybe<shopifyStores_bool_exp>>>,
  created_at?: Maybe<timestamptz_comparison_exp>,
  email?: Maybe<String_comparison_exp>,
  encryptedAccessToken?: Maybe<String_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  myshopifyDomain?: Maybe<String_comparison_exp>,
  name?: Maybe<String_comparison_exp>,
  shopifyId?: Maybe<String_comparison_exp>,
  updated_at?: Maybe<timestamptz_comparison_exp>,
  url?: Maybe<String_comparison_exp>,
};

/** unique or primary key constraints on table "shopifyStores" */
export enum shopifyStores_constraint {
  /** unique or primary key constraint */
  shopifyStores_pkey = 'shopifyStores_pkey',
  /** unique or primary key constraint */
  shopifyStores_shopifyId_key = 'shopifyStores_shopifyId_key'
}

/** input type for incrementing integer columne in table "shopifyStores" */
export type shopifyStores_inc_input = {
  id?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "shopifyStores" */
export type shopifyStores_insert_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  email?: Maybe<Scalars['String']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  shopifyId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  url?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type shopifyStores_max_fields = {
   __typename?: 'shopifyStores_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  email?: Maybe<Scalars['String']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  shopifyId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  url?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "shopifyStores" */
export type shopifyStores_max_order_by = {
  created_at?: Maybe<order_by>,
  email?: Maybe<order_by>,
  encryptedAccessToken?: Maybe<order_by>,
  id?: Maybe<order_by>,
  myshopifyDomain?: Maybe<order_by>,
  name?: Maybe<order_by>,
  shopifyId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
  url?: Maybe<order_by>,
};

/** aggregate min on columns */
export type shopifyStores_min_fields = {
   __typename?: 'shopifyStores_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  email?: Maybe<Scalars['String']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  shopifyId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  url?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "shopifyStores" */
export type shopifyStores_min_order_by = {
  created_at?: Maybe<order_by>,
  email?: Maybe<order_by>,
  encryptedAccessToken?: Maybe<order_by>,
  id?: Maybe<order_by>,
  myshopifyDomain?: Maybe<order_by>,
  name?: Maybe<order_by>,
  shopifyId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
  url?: Maybe<order_by>,
};

/** response of any mutation on the table "shopifyStores" */
export type shopifyStores_mutation_response = {
   __typename?: 'shopifyStores_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<shopifyStores>,
};

/** input type for inserting object relation for remote table "shopifyStores" */
export type shopifyStores_obj_rel_insert_input = {
  data: shopifyStores_insert_input,
  on_conflict?: Maybe<shopifyStores_on_conflict>,
};

/** on conflict condition type for table "shopifyStores" */
export type shopifyStores_on_conflict = {
  constraint: shopifyStores_constraint,
  update_columns: Array<shopifyStores_update_column>,
  where?: Maybe<shopifyStores_bool_exp>,
};

/** ordering options when selecting data from "shopifyStores" */
export type shopifyStores_order_by = {
  created_at?: Maybe<order_by>,
  email?: Maybe<order_by>,
  encryptedAccessToken?: Maybe<order_by>,
  id?: Maybe<order_by>,
  myshopifyDomain?: Maybe<order_by>,
  name?: Maybe<order_by>,
  shopifyId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
  url?: Maybe<order_by>,
};

/** select columns of table "shopifyStores" */
export enum shopifyStores_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  email = 'email',
  /** column name */
  encryptedAccessToken = 'encryptedAccessToken',
  /** column name */
  id = 'id',
  /** column name */
  myshopifyDomain = 'myshopifyDomain',
  /** column name */
  name = 'name',
  /** column name */
  shopifyId = 'shopifyId',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  url = 'url'
}

/** input type for updating data in table "shopifyStores" */
export type shopifyStores_set_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  email?: Maybe<Scalars['String']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  shopifyId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
  url?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type shopifyStores_stddev_fields = {
   __typename?: 'shopifyStores_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "shopifyStores" */
export type shopifyStores_stddev_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type shopifyStores_stddev_pop_fields = {
   __typename?: 'shopifyStores_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "shopifyStores" */
export type shopifyStores_stddev_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type shopifyStores_stddev_samp_fields = {
   __typename?: 'shopifyStores_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "shopifyStores" */
export type shopifyStores_stddev_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type shopifyStores_sum_fields = {
   __typename?: 'shopifyStores_sum_fields',
  id?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "shopifyStores" */
export type shopifyStores_sum_order_by = {
  id?: Maybe<order_by>,
};

/** update columns of table "shopifyStores" */
export enum shopifyStores_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  email = 'email',
  /** column name */
  encryptedAccessToken = 'encryptedAccessToken',
  /** column name */
  id = 'id',
  /** column name */
  myshopifyDomain = 'myshopifyDomain',
  /** column name */
  name = 'name',
  /** column name */
  shopifyId = 'shopifyId',
  /** column name */
  updated_at = 'updated_at',
  /** column name */
  url = 'url'
}

/** aggregate var_pop on columns */
export type shopifyStores_var_pop_fields = {
   __typename?: 'shopifyStores_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "shopifyStores" */
export type shopifyStores_var_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type shopifyStores_var_samp_fields = {
   __typename?: 'shopifyStores_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "shopifyStores" */
export type shopifyStores_var_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type shopifyStores_variance_fields = {
   __typename?: 'shopifyStores_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "shopifyStores" */
export type shopifyStores_variance_order_by = {
  id?: Maybe<order_by>,
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_comparison_exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

/** subscription root */
export type subscription_root = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "shopifyStores" using primary key columns */
  shopifyStore?: Maybe<shopifyStores>,
  /** fetch data from the table: "shopifyStores" */
  shopifyStores: Array<shopifyStores>,
  /** fetch aggregated fields from the table: "shopifyStores" */
  shopifyStoresAggregate: shopifyStores_aggregate,
  /** fetch data from the table: "tests" */
  tests: Array<tests>,
  /** fetch aggregated fields from the table: "tests" */
  tests_aggregate: tests_aggregate,
  /** fetch data from the table: "tests" using primary key columns */
  tests_by_pk?: Maybe<tests>,
  /** fetch data from the table: "users" using primary key columns */
  user?: Maybe<users>,
  /** fetch data from the table: "users" */
  users: Array<users>,
  /** fetch aggregated fields from the table: "users" */
  usersAggregate: users_aggregate,
};


/** subscription root */
export type subscription_rootshopifyStoreArgs = {
  id: Scalars['bigint']
};


/** subscription root */
export type subscription_rootshopifyStoresArgs = {
  distinct_on?: Maybe<Array<shopifyStores_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<shopifyStores_order_by>>,
  where?: Maybe<shopifyStores_bool_exp>
};


/** subscription root */
export type subscription_rootshopifyStoresAggregateArgs = {
  distinct_on?: Maybe<Array<shopifyStores_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<shopifyStores_order_by>>,
  where?: Maybe<shopifyStores_bool_exp>
};


/** subscription root */
export type subscription_roottestsArgs = {
  distinct_on?: Maybe<Array<tests_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<tests_order_by>>,
  where?: Maybe<tests_bool_exp>
};


/** subscription root */
export type subscription_roottests_aggregateArgs = {
  distinct_on?: Maybe<Array<tests_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<tests_order_by>>,
  where?: Maybe<tests_bool_exp>
};


/** subscription root */
export type subscription_roottests_by_pkArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type subscription_rootuserArgs = {
  id: Scalars['Int']
};


/** subscription root */
export type subscription_rootusersArgs = {
  distinct_on?: Maybe<Array<users_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<users_order_by>>,
  where?: Maybe<users_bool_exp>
};


/** subscription root */
export type subscription_rootusersAggregateArgs = {
  distinct_on?: Maybe<Array<users_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<users_order_by>>,
  where?: Maybe<users_bool_exp>
};

/** columns and relationships of "tests" */
export type tests = {
   __typename?: 'tests',
  id: Scalars['Int'],
};

/** aggregated selection of "tests" */
export type tests_aggregate = {
   __typename?: 'tests_aggregate',
  aggregate?: Maybe<tests_aggregate_fields>,
  nodes: Array<tests>,
};

/** aggregate fields of "tests" */
export type tests_aggregate_fields = {
   __typename?: 'tests_aggregate_fields',
  avg?: Maybe<tests_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<tests_max_fields>,
  min?: Maybe<tests_min_fields>,
  stddev?: Maybe<tests_stddev_fields>,
  stddev_pop?: Maybe<tests_stddev_pop_fields>,
  stddev_samp?: Maybe<tests_stddev_samp_fields>,
  sum?: Maybe<tests_sum_fields>,
  var_pop?: Maybe<tests_var_pop_fields>,
  var_samp?: Maybe<tests_var_samp_fields>,
  variance?: Maybe<tests_variance_fields>,
};


/** aggregate fields of "tests" */
export type tests_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<tests_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "tests" */
export type tests_aggregate_order_by = {
  avg?: Maybe<tests_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<tests_max_order_by>,
  min?: Maybe<tests_min_order_by>,
  stddev?: Maybe<tests_stddev_order_by>,
  stddev_pop?: Maybe<tests_stddev_pop_order_by>,
  stddev_samp?: Maybe<tests_stddev_samp_order_by>,
  sum?: Maybe<tests_sum_order_by>,
  var_pop?: Maybe<tests_var_pop_order_by>,
  var_samp?: Maybe<tests_var_samp_order_by>,
  variance?: Maybe<tests_variance_order_by>,
};

/** input type for inserting array relation for remote table "tests" */
export type tests_arr_rel_insert_input = {
  data: Array<tests_insert_input>,
  on_conflict?: Maybe<tests_on_conflict>,
};

/** aggregate avg on columns */
export type tests_avg_fields = {
   __typename?: 'tests_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "tests" */
export type tests_avg_order_by = {
  id?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "tests". All fields are combined with a logical 'AND'. */
export type tests_bool_exp = {
  _and?: Maybe<Array<Maybe<tests_bool_exp>>>,
  _not?: Maybe<tests_bool_exp>,
  _or?: Maybe<Array<Maybe<tests_bool_exp>>>,
  id?: Maybe<Int_comparison_exp>,
};

/** unique or primary key constraints on table "tests" */
export enum tests_constraint {
  /** unique or primary key constraint */
  tests_pkey = 'tests_pkey'
}

/** input type for incrementing integer columne in table "tests" */
export type tests_inc_input = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "tests" */
export type tests_insert_input = {
  id?: Maybe<Scalars['Int']>,
};

/** aggregate max on columns */
export type tests_max_fields = {
   __typename?: 'tests_max_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by max() on columns of table "tests" */
export type tests_max_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate min on columns */
export type tests_min_fields = {
   __typename?: 'tests_min_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by min() on columns of table "tests" */
export type tests_min_order_by = {
  id?: Maybe<order_by>,
};

/** response of any mutation on the table "tests" */
export type tests_mutation_response = {
   __typename?: 'tests_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<tests>,
};

/** input type for inserting object relation for remote table "tests" */
export type tests_obj_rel_insert_input = {
  data: tests_insert_input,
  on_conflict?: Maybe<tests_on_conflict>,
};

/** on conflict condition type for table "tests" */
export type tests_on_conflict = {
  constraint: tests_constraint,
  update_columns: Array<tests_update_column>,
  where?: Maybe<tests_bool_exp>,
};

/** ordering options when selecting data from "tests" */
export type tests_order_by = {
  id?: Maybe<order_by>,
};

/** select columns of table "tests" */
export enum tests_select_column {
  /** column name */
  id = 'id'
}

/** input type for updating data in table "tests" */
export type tests_set_input = {
  id?: Maybe<Scalars['Int']>,
};

/** aggregate stddev on columns */
export type tests_stddev_fields = {
   __typename?: 'tests_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "tests" */
export type tests_stddev_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type tests_stddev_pop_fields = {
   __typename?: 'tests_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "tests" */
export type tests_stddev_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type tests_stddev_samp_fields = {
   __typename?: 'tests_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "tests" */
export type tests_stddev_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type tests_sum_fields = {
   __typename?: 'tests_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "tests" */
export type tests_sum_order_by = {
  id?: Maybe<order_by>,
};

/** update columns of table "tests" */
export enum tests_update_column {
  /** column name */
  id = 'id'
}

/** aggregate var_pop on columns */
export type tests_var_pop_fields = {
   __typename?: 'tests_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "tests" */
export type tests_var_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type tests_var_samp_fields = {
   __typename?: 'tests_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "tests" */
export type tests_var_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type tests_variance_fields = {
   __typename?: 'tests_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "tests" */
export type tests_variance_order_by = {
  id?: Maybe<order_by>,
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type timestamptz_comparison_exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};

/** columns and relationships of "users" */
export type users = {
   __typename?: 'users',
  createdAt: Scalars['timestamptz'],
  firstName: Scalars['String'],
  id: Scalars['Int'],
  lastName?: Maybe<Scalars['String']>,
  updatedAt: Scalars['timestamptz'],
};

/** aggregated selection of "users" */
export type users_aggregate = {
   __typename?: 'users_aggregate',
  aggregate?: Maybe<users_aggregate_fields>,
  nodes: Array<users>,
};

/** aggregate fields of "users" */
export type users_aggregate_fields = {
   __typename?: 'users_aggregate_fields',
  avg?: Maybe<users_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<users_max_fields>,
  min?: Maybe<users_min_fields>,
  stddev?: Maybe<users_stddev_fields>,
  stddev_pop?: Maybe<users_stddev_pop_fields>,
  stddev_samp?: Maybe<users_stddev_samp_fields>,
  sum?: Maybe<users_sum_fields>,
  var_pop?: Maybe<users_var_pop_fields>,
  var_samp?: Maybe<users_var_samp_fields>,
  variance?: Maybe<users_variance_fields>,
};


/** aggregate fields of "users" */
export type users_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<users_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "users" */
export type users_aggregate_order_by = {
  avg?: Maybe<users_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<users_max_order_by>,
  min?: Maybe<users_min_order_by>,
  stddev?: Maybe<users_stddev_order_by>,
  stddev_pop?: Maybe<users_stddev_pop_order_by>,
  stddev_samp?: Maybe<users_stddev_samp_order_by>,
  sum?: Maybe<users_sum_order_by>,
  var_pop?: Maybe<users_var_pop_order_by>,
  var_samp?: Maybe<users_var_samp_order_by>,
  variance?: Maybe<users_variance_order_by>,
};

/** input type for inserting array relation for remote table "users" */
export type users_arr_rel_insert_input = {
  data: Array<users_insert_input>,
  on_conflict?: Maybe<users_on_conflict>,
};

/** aggregate avg on columns */
export type users_avg_fields = {
   __typename?: 'users_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "users" */
export type users_avg_order_by = {
  id?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type users_bool_exp = {
  _and?: Maybe<Array<Maybe<users_bool_exp>>>,
  _not?: Maybe<users_bool_exp>,
  _or?: Maybe<Array<Maybe<users_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  firstName?: Maybe<String_comparison_exp>,
  id?: Maybe<Int_comparison_exp>,
  lastName?: Maybe<String_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
};

/** unique or primary key constraints on table "users" */
export enum users_constraint {
  /** unique or primary key constraint */
  user_pkey = 'user_pkey'
}

/** input type for incrementing integer columne in table "users" */
export type users_inc_input = {
  id?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "users" */
export type users_insert_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  firstName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type users_max_fields = {
   __typename?: 'users_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  firstName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "users" */
export type users_max_order_by = {
  createdAt?: Maybe<order_by>,
  firstName?: Maybe<order_by>,
  id?: Maybe<order_by>,
  lastName?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type users_min_fields = {
   __typename?: 'users_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  firstName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "users" */
export type users_min_order_by = {
  createdAt?: Maybe<order_by>,
  firstName?: Maybe<order_by>,
  id?: Maybe<order_by>,
  lastName?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** response of any mutation on the table "users" */
export type users_mutation_response = {
   __typename?: 'users_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<users>,
};

/** input type for inserting object relation for remote table "users" */
export type users_obj_rel_insert_input = {
  data: users_insert_input,
  on_conflict?: Maybe<users_on_conflict>,
};

/** on conflict condition type for table "users" */
export type users_on_conflict = {
  constraint: users_constraint,
  update_columns: Array<users_update_column>,
  where?: Maybe<users_bool_exp>,
};

/** ordering options when selecting data from "users" */
export type users_order_by = {
  createdAt?: Maybe<order_by>,
  firstName?: Maybe<order_by>,
  id?: Maybe<order_by>,
  lastName?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** select columns of table "users" */
export enum users_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  firstName = 'firstName',
  /** column name */
  id = 'id',
  /** column name */
  lastName = 'lastName',
  /** column name */
  updatedAt = 'updatedAt'
}

/** input type for updating data in table "users" */
export type users_set_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  firstName?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['Int']>,
  lastName?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type users_stddev_fields = {
   __typename?: 'users_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "users" */
export type users_stddev_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type users_stddev_pop_fields = {
   __typename?: 'users_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "users" */
export type users_stddev_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type users_stddev_samp_fields = {
   __typename?: 'users_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "users" */
export type users_stddev_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type users_sum_fields = {
   __typename?: 'users_sum_fields',
  id?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "users" */
export type users_sum_order_by = {
  id?: Maybe<order_by>,
};

/** update columns of table "users" */
export enum users_update_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  firstName = 'firstName',
  /** column name */
  id = 'id',
  /** column name */
  lastName = 'lastName',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type users_var_pop_fields = {
   __typename?: 'users_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "users" */
export type users_var_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type users_var_samp_fields = {
   __typename?: 'users_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "users" */
export type users_var_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type users_variance_fields = {
   __typename?: 'users_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "users" */
export type users_variance_order_by = {
  id?: Maybe<order_by>,
};

export type insertUsersMutationVariables = {
  objects: Array<users_insert_input>,
  onConflict?: Maybe<users_on_conflict>
};


export type insertUsersMutation = (
  { __typename: 'mutation_root' }
  & { insertUsers: Maybe<(
    { __typename?: 'users_mutation_response' }
    & Pick<users_mutation_response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'users' }
      & Pick<users, 'id'>
    )> }
  )> }
);

export type getUsersQueryVariables = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Array<users_order_by>>,
  where?: Maybe<users_bool_exp>
};


export type getUsersQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<users, 'id' | 'createdAt' | 'updatedAt' | 'firstName' | 'lastName'>
  )> }
);

export type getUserQueryVariables = {
  id: Scalars['Int']
};


export type getUserQuery = (
  { __typename?: 'query_root' }
  & { user: Maybe<(
    { __typename?: 'users' }
    & Pick<users, 'id' | 'createdAt' | 'updatedAt' | 'firstName' | 'lastName'>
  )> }
);


export const insertUsersDocument = gql`
    mutation insertUsers($objects: [users_insert_input!]!, $onConflict: users_on_conflict) {
  __typename
  insertUsers(objects: $objects, on_conflict: $onConflict) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const getUsersDocument = gql`
    query getUsers($limit: Int, $offset: Int, $orderBy: [users_order_by!], $where: users_bool_exp) {
  users(limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
    id
    createdAt
    updatedAt
    firstName
    lastName
  }
}
    `;
export const getUserDocument = gql`
    query getUser($id: Int!) {
  user(id: $id) {
    id
    createdAt
    updatedAt
    firstName
    lastName
  }
}
    `;
export function getSdk(client: GraphQLClient) {
  return {
    insertUsers(variables: insertUsersMutationVariables): Promise<insertUsersMutation> {
      return client.request<insertUsersMutation>(print(insertUsersDocument), variables);
    },
    getUsers(variables?: getUsersQueryVariables): Promise<getUsersQuery> {
      return client.request<getUsersQuery>(print(getUsersDocument), variables);
    },
    getUser(variables: getUserQueryVariables): Promise<getUserQuery> {
      return client.request<getUserQuery>(print(getUserDocument), variables);
    }
  };
}