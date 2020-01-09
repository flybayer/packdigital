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
  jsonb: any,
  bpchar: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
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

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type Boolean_comparison_exp = {
  _eq?: Maybe<Scalars['Boolean']>,
  _gt?: Maybe<Scalars['Boolean']>,
  _gte?: Maybe<Scalars['Boolean']>,
  _in?: Maybe<Array<Scalars['Boolean']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Boolean']>,
  _lte?: Maybe<Scalars['Boolean']>,
  _neq?: Maybe<Scalars['Boolean']>,
  _nin?: Maybe<Array<Scalars['Boolean']>>,
};


/** expression to compare columns of type bpchar. All fields are combined with logical 'AND'. */
export type bpchar_comparison_exp = {
  _eq?: Maybe<Scalars['bpchar']>,
  _gt?: Maybe<Scalars['bpchar']>,
  _gte?: Maybe<Scalars['bpchar']>,
  _in?: Maybe<Array<Scalars['bpchar']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['bpchar']>,
  _lte?: Maybe<Scalars['bpchar']>,
  _neq?: Maybe<Scalars['bpchar']>,
  _nin?: Maybe<Array<Scalars['bpchar']>>,
};

export enum CacheControlScope {
  PRIVATE = 'PRIVATE',
  PUBLIC = 'PUBLIC'
}

/** columns and relationships of "images" */
export type images = {
   __typename?: 'images',
  altText?: Maybe<Scalars['String']>,
  createdAt: Scalars['timestamptz'],
  foreignId?: Maybe<Scalars['String']>,
  id: Scalars['bigint'],
  /** An array relationship */
  productImages: Array<joinProductImages>,
  /** An aggregated array relationship */
  productImages_aggregate: joinProductImages_aggregate,
  /** An array relationship */
  productOptionValueImages: Array<joinOptionValueImages>,
  /** An aggregated array relationship */
  productOptionValueImages_aggregate: joinOptionValueImages_aggregate,
  /** An array relationship */
  productVariantImages: Array<joinVariantImages>,
  /** An aggregated array relationship */
  productVariantImages_aggregate: joinVariantImages_aggregate,
  src: Scalars['String'],
  /** An array relationship */
  swatchFor: Array<productOptionValues>,
  /** An aggregated array relationship */
  swatchFor_aggregate: productOptionValues_aggregate,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt: Scalars['timestamptz'],
};


/** columns and relationships of "images" */
export type imagesproductImagesArgs = {
  distinct_on?: Maybe<Array<joinProductImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductImages_order_by>>,
  where?: Maybe<joinProductImages_bool_exp>
};


/** columns and relationships of "images" */
export type imagesproductImages_aggregateArgs = {
  distinct_on?: Maybe<Array<joinProductImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductImages_order_by>>,
  where?: Maybe<joinProductImages_bool_exp>
};


/** columns and relationships of "images" */
export type imagesproductOptionValueImagesArgs = {
  distinct_on?: Maybe<Array<joinOptionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinOptionValueImages_order_by>>,
  where?: Maybe<joinOptionValueImages_bool_exp>
};


/** columns and relationships of "images" */
export type imagesproductOptionValueImages_aggregateArgs = {
  distinct_on?: Maybe<Array<joinOptionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinOptionValueImages_order_by>>,
  where?: Maybe<joinOptionValueImages_bool_exp>
};


/** columns and relationships of "images" */
export type imagesproductVariantImagesArgs = {
  distinct_on?: Maybe<Array<joinVariantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantImages_order_by>>,
  where?: Maybe<joinVariantImages_bool_exp>
};


/** columns and relationships of "images" */
export type imagesproductVariantImages_aggregateArgs = {
  distinct_on?: Maybe<Array<joinVariantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantImages_order_by>>,
  where?: Maybe<joinVariantImages_bool_exp>
};


/** columns and relationships of "images" */
export type imagesswatchForArgs = {
  distinct_on?: Maybe<Array<productOptionValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptionValues_order_by>>,
  where?: Maybe<productOptionValues_bool_exp>
};


/** columns and relationships of "images" */
export type imagesswatchFor_aggregateArgs = {
  distinct_on?: Maybe<Array<productOptionValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptionValues_order_by>>,
  where?: Maybe<productOptionValues_bool_exp>
};

/** aggregated selection of "images" */
export type images_aggregate = {
   __typename?: 'images_aggregate',
  aggregate?: Maybe<images_aggregate_fields>,
  nodes: Array<images>,
};

/** aggregate fields of "images" */
export type images_aggregate_fields = {
   __typename?: 'images_aggregate_fields',
  avg?: Maybe<images_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<images_max_fields>,
  min?: Maybe<images_min_fields>,
  stddev?: Maybe<images_stddev_fields>,
  stddev_pop?: Maybe<images_stddev_pop_fields>,
  stddev_samp?: Maybe<images_stddev_samp_fields>,
  sum?: Maybe<images_sum_fields>,
  var_pop?: Maybe<images_var_pop_fields>,
  var_samp?: Maybe<images_var_samp_fields>,
  variance?: Maybe<images_variance_fields>,
};


/** aggregate fields of "images" */
export type images_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<images_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "images" */
export type images_aggregate_order_by = {
  avg?: Maybe<images_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<images_max_order_by>,
  min?: Maybe<images_min_order_by>,
  stddev?: Maybe<images_stddev_order_by>,
  stddev_pop?: Maybe<images_stddev_pop_order_by>,
  stddev_samp?: Maybe<images_stddev_samp_order_by>,
  sum?: Maybe<images_sum_order_by>,
  var_pop?: Maybe<images_var_pop_order_by>,
  var_samp?: Maybe<images_var_samp_order_by>,
  variance?: Maybe<images_variance_order_by>,
};

/** input type for inserting array relation for remote table "images" */
export type images_arr_rel_insert_input = {
  data: Array<images_insert_input>,
  on_conflict?: Maybe<images_on_conflict>,
};

/** aggregate avg on columns */
export type images_avg_fields = {
   __typename?: 'images_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "images" */
export type images_avg_order_by = {
  id?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "images". All fields are combined with a logical 'AND'. */
export type images_bool_exp = {
  _and?: Maybe<Array<Maybe<images_bool_exp>>>,
  _not?: Maybe<images_bool_exp>,
  _or?: Maybe<Array<Maybe<images_bool_exp>>>,
  altText?: Maybe<String_comparison_exp>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  foreignId?: Maybe<String_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  productImages?: Maybe<joinProductImages_bool_exp>,
  productOptionValueImages?: Maybe<joinOptionValueImages_bool_exp>,
  productVariantImages?: Maybe<joinVariantImages_bool_exp>,
  src?: Maybe<String_comparison_exp>,
  swatchFor?: Maybe<productOptionValues_bool_exp>,
  thumbnailSrc?: Maybe<String_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
};

/** unique or primary key constraints on table "images" */
export enum images_constraint {
  /** unique or primary key constraint */
  images_foreignId_key = 'images_foreignId_key',
  /** unique or primary key constraint */
  images_pkey = 'images_pkey'
}

/** input type for incrementing integer columne in table "images" */
export type images_inc_input = {
  id?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "images" */
export type images_insert_input = {
  altText?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['timestamptz']>,
  foreignId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  productImages?: Maybe<joinProductImages_arr_rel_insert_input>,
  productOptionValueImages?: Maybe<joinOptionValueImages_arr_rel_insert_input>,
  productVariantImages?: Maybe<joinVariantImages_arr_rel_insert_input>,
  src?: Maybe<Scalars['String']>,
  swatchFor?: Maybe<productOptionValues_arr_rel_insert_input>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type images_max_fields = {
   __typename?: 'images_max_fields',
  altText?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['timestamptz']>,
  foreignId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "images" */
export type images_max_order_by = {
  altText?: Maybe<order_by>,
  createdAt?: Maybe<order_by>,
  foreignId?: Maybe<order_by>,
  id?: Maybe<order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type images_min_fields = {
   __typename?: 'images_min_fields',
  altText?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['timestamptz']>,
  foreignId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "images" */
export type images_min_order_by = {
  altText?: Maybe<order_by>,
  createdAt?: Maybe<order_by>,
  foreignId?: Maybe<order_by>,
  id?: Maybe<order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** response of any mutation on the table "images" */
export type images_mutation_response = {
   __typename?: 'images_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<images>,
};

/** input type for inserting object relation for remote table "images" */
export type images_obj_rel_insert_input = {
  data: images_insert_input,
  on_conflict?: Maybe<images_on_conflict>,
};

/** on conflict condition type for table "images" */
export type images_on_conflict = {
  constraint: images_constraint,
  update_columns: Array<images_update_column>,
  where?: Maybe<images_bool_exp>,
};

/** ordering options when selecting data from "images" */
export type images_order_by = {
  altText?: Maybe<order_by>,
  createdAt?: Maybe<order_by>,
  foreignId?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productImages_aggregate?: Maybe<joinProductImages_aggregate_order_by>,
  productOptionValueImages_aggregate?: Maybe<joinOptionValueImages_aggregate_order_by>,
  productVariantImages_aggregate?: Maybe<joinVariantImages_aggregate_order_by>,
  src?: Maybe<order_by>,
  swatchFor_aggregate?: Maybe<productOptionValues_aggregate_order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** select columns of table "images" */
export enum images_select_column {
  /** column name */
  altText = 'altText',
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  foreignId = 'foreignId',
  /** column name */
  id = 'id',
  /** column name */
  src = 'src',
  /** column name */
  thumbnailSrc = 'thumbnailSrc',
  /** column name */
  updatedAt = 'updatedAt'
}

/** input type for updating data in table "images" */
export type images_set_input = {
  altText?: Maybe<Scalars['String']>,
  createdAt?: Maybe<Scalars['timestamptz']>,
  foreignId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type images_stddev_fields = {
   __typename?: 'images_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "images" */
export type images_stddev_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type images_stddev_pop_fields = {
   __typename?: 'images_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "images" */
export type images_stddev_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type images_stddev_samp_fields = {
   __typename?: 'images_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "images" */
export type images_stddev_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type images_sum_fields = {
   __typename?: 'images_sum_fields',
  id?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "images" */
export type images_sum_order_by = {
  id?: Maybe<order_by>,
};

/** update columns of table "images" */
export enum images_update_column {
  /** column name */
  altText = 'altText',
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  foreignId = 'foreignId',
  /** column name */
  id = 'id',
  /** column name */
  src = 'src',
  /** column name */
  thumbnailSrc = 'thumbnailSrc',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type images_var_pop_fields = {
   __typename?: 'images_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "images" */
export type images_var_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type images_var_samp_fields = {
   __typename?: 'images_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "images" */
export type images_var_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type images_variance_fields = {
   __typename?: 'images_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "images" */
export type images_variance_order_by = {
  id?: Maybe<order_by>,
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

/** columns and relationships of "joinOptionValueImages" */
export type joinOptionValueImages = {
   __typename?: 'joinOptionValueImages',
  created_at: Scalars['timestamptz'],
  /** An object relationship */
  image: images,
  imageId: Scalars['bigint'],
  /** An object relationship */
  productOptionValue: productOptionValues,
  productOptionValueId: Scalars['bigint'],
};

/** aggregated selection of "joinOptionValueImages" */
export type joinOptionValueImages_aggregate = {
   __typename?: 'joinOptionValueImages_aggregate',
  aggregate?: Maybe<joinOptionValueImages_aggregate_fields>,
  nodes: Array<joinOptionValueImages>,
};

/** aggregate fields of "joinOptionValueImages" */
export type joinOptionValueImages_aggregate_fields = {
   __typename?: 'joinOptionValueImages_aggregate_fields',
  avg?: Maybe<joinOptionValueImages_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<joinOptionValueImages_max_fields>,
  min?: Maybe<joinOptionValueImages_min_fields>,
  stddev?: Maybe<joinOptionValueImages_stddev_fields>,
  stddev_pop?: Maybe<joinOptionValueImages_stddev_pop_fields>,
  stddev_samp?: Maybe<joinOptionValueImages_stddev_samp_fields>,
  sum?: Maybe<joinOptionValueImages_sum_fields>,
  var_pop?: Maybe<joinOptionValueImages_var_pop_fields>,
  var_samp?: Maybe<joinOptionValueImages_var_samp_fields>,
  variance?: Maybe<joinOptionValueImages_variance_fields>,
};


/** aggregate fields of "joinOptionValueImages" */
export type joinOptionValueImages_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<joinOptionValueImages_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "joinOptionValueImages" */
export type joinOptionValueImages_aggregate_order_by = {
  avg?: Maybe<joinOptionValueImages_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<joinOptionValueImages_max_order_by>,
  min?: Maybe<joinOptionValueImages_min_order_by>,
  stddev?: Maybe<joinOptionValueImages_stddev_order_by>,
  stddev_pop?: Maybe<joinOptionValueImages_stddev_pop_order_by>,
  stddev_samp?: Maybe<joinOptionValueImages_stddev_samp_order_by>,
  sum?: Maybe<joinOptionValueImages_sum_order_by>,
  var_pop?: Maybe<joinOptionValueImages_var_pop_order_by>,
  var_samp?: Maybe<joinOptionValueImages_var_samp_order_by>,
  variance?: Maybe<joinOptionValueImages_variance_order_by>,
};

/** input type for inserting array relation for remote table "joinOptionValueImages" */
export type joinOptionValueImages_arr_rel_insert_input = {
  data: Array<joinOptionValueImages_insert_input>,
  on_conflict?: Maybe<joinOptionValueImages_on_conflict>,
};

/** aggregate avg on columns */
export type joinOptionValueImages_avg_fields = {
   __typename?: 'joinOptionValueImages_avg_fields',
  imageId?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "joinOptionValueImages" */
export type joinOptionValueImages_avg_order_by = {
  imageId?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "joinOptionValueImages". All fields are combined with a logical 'AND'. */
export type joinOptionValueImages_bool_exp = {
  _and?: Maybe<Array<Maybe<joinOptionValueImages_bool_exp>>>,
  _not?: Maybe<joinOptionValueImages_bool_exp>,
  _or?: Maybe<Array<Maybe<joinOptionValueImages_bool_exp>>>,
  created_at?: Maybe<timestamptz_comparison_exp>,
  image?: Maybe<images_bool_exp>,
  imageId?: Maybe<bigint_comparison_exp>,
  productOptionValue?: Maybe<productOptionValues_bool_exp>,
  productOptionValueId?: Maybe<bigint_comparison_exp>,
};

/** unique or primary key constraints on table "joinOptionValueImages" */
export enum joinOptionValueImages_constraint {
  /** unique or primary key constraint */
  joinProductOptionValueImages_pkey = 'joinProductOptionValueImages_pkey'
}

/** input type for incrementing integer columne in table "joinOptionValueImages" */
export type joinOptionValueImages_inc_input = {
  imageId?: Maybe<Scalars['bigint']>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "joinOptionValueImages" */
export type joinOptionValueImages_insert_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  image?: Maybe<images_obj_rel_insert_input>,
  imageId?: Maybe<Scalars['bigint']>,
  productOptionValue?: Maybe<productOptionValues_obj_rel_insert_input>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
};

/** aggregate max on columns */
export type joinOptionValueImages_max_fields = {
   __typename?: 'joinOptionValueImages_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  imageId?: Maybe<Scalars['bigint']>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
};

/** order by max() on columns of table "joinOptionValueImages" */
export type joinOptionValueImages_max_order_by = {
  created_at?: Maybe<order_by>,
  imageId?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** aggregate min on columns */
export type joinOptionValueImages_min_fields = {
   __typename?: 'joinOptionValueImages_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  imageId?: Maybe<Scalars['bigint']>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
};

/** order by min() on columns of table "joinOptionValueImages" */
export type joinOptionValueImages_min_order_by = {
  created_at?: Maybe<order_by>,
  imageId?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** response of any mutation on the table "joinOptionValueImages" */
export type joinOptionValueImages_mutation_response = {
   __typename?: 'joinOptionValueImages_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<joinOptionValueImages>,
};

/** input type for inserting object relation for remote table "joinOptionValueImages" */
export type joinOptionValueImages_obj_rel_insert_input = {
  data: joinOptionValueImages_insert_input,
  on_conflict?: Maybe<joinOptionValueImages_on_conflict>,
};

/** on conflict condition type for table "joinOptionValueImages" */
export type joinOptionValueImages_on_conflict = {
  constraint: joinOptionValueImages_constraint,
  update_columns: Array<joinOptionValueImages_update_column>,
  where?: Maybe<joinOptionValueImages_bool_exp>,
};

/** ordering options when selecting data from "joinOptionValueImages" */
export type joinOptionValueImages_order_by = {
  created_at?: Maybe<order_by>,
  image?: Maybe<images_order_by>,
  imageId?: Maybe<order_by>,
  productOptionValue?: Maybe<productOptionValues_order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** select columns of table "joinOptionValueImages" */
export enum joinOptionValueImages_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  imageId = 'imageId',
  /** column name */
  productOptionValueId = 'productOptionValueId'
}

/** input type for updating data in table "joinOptionValueImages" */
export type joinOptionValueImages_set_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  imageId?: Maybe<Scalars['bigint']>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
};

/** aggregate stddev on columns */
export type joinOptionValueImages_stddev_fields = {
   __typename?: 'joinOptionValueImages_stddev_fields',
  imageId?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "joinOptionValueImages" */
export type joinOptionValueImages_stddev_order_by = {
  imageId?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type joinOptionValueImages_stddev_pop_fields = {
   __typename?: 'joinOptionValueImages_stddev_pop_fields',
  imageId?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "joinOptionValueImages" */
export type joinOptionValueImages_stddev_pop_order_by = {
  imageId?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type joinOptionValueImages_stddev_samp_fields = {
   __typename?: 'joinOptionValueImages_stddev_samp_fields',
  imageId?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "joinOptionValueImages" */
export type joinOptionValueImages_stddev_samp_order_by = {
  imageId?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type joinOptionValueImages_sum_fields = {
   __typename?: 'joinOptionValueImages_sum_fields',
  imageId?: Maybe<Scalars['bigint']>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "joinOptionValueImages" */
export type joinOptionValueImages_sum_order_by = {
  imageId?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** update columns of table "joinOptionValueImages" */
export enum joinOptionValueImages_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  imageId = 'imageId',
  /** column name */
  productOptionValueId = 'productOptionValueId'
}

/** aggregate var_pop on columns */
export type joinOptionValueImages_var_pop_fields = {
   __typename?: 'joinOptionValueImages_var_pop_fields',
  imageId?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "joinOptionValueImages" */
export type joinOptionValueImages_var_pop_order_by = {
  imageId?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type joinOptionValueImages_var_samp_fields = {
   __typename?: 'joinOptionValueImages_var_samp_fields',
  imageId?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "joinOptionValueImages" */
export type joinOptionValueImages_var_samp_order_by = {
  imageId?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type joinOptionValueImages_variance_fields = {
   __typename?: 'joinOptionValueImages_variance_fields',
  imageId?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "joinOptionValueImages" */
export type joinOptionValueImages_variance_order_by = {
  imageId?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** columns and relationships of "joinProductImages" */
export type joinProductImages = {
   __typename?: 'joinProductImages',
  createdAt?: Maybe<Scalars['timestamptz']>,
  /** An object relationship */
  image: images,
  imageId: Scalars['bigint'],
  /** An object relationship */
  product: products,
  productId: Scalars['bigint'],
};

/** aggregated selection of "joinProductImages" */
export type joinProductImages_aggregate = {
   __typename?: 'joinProductImages_aggregate',
  aggregate?: Maybe<joinProductImages_aggregate_fields>,
  nodes: Array<joinProductImages>,
};

/** aggregate fields of "joinProductImages" */
export type joinProductImages_aggregate_fields = {
   __typename?: 'joinProductImages_aggregate_fields',
  avg?: Maybe<joinProductImages_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<joinProductImages_max_fields>,
  min?: Maybe<joinProductImages_min_fields>,
  stddev?: Maybe<joinProductImages_stddev_fields>,
  stddev_pop?: Maybe<joinProductImages_stddev_pop_fields>,
  stddev_samp?: Maybe<joinProductImages_stddev_samp_fields>,
  sum?: Maybe<joinProductImages_sum_fields>,
  var_pop?: Maybe<joinProductImages_var_pop_fields>,
  var_samp?: Maybe<joinProductImages_var_samp_fields>,
  variance?: Maybe<joinProductImages_variance_fields>,
};


/** aggregate fields of "joinProductImages" */
export type joinProductImages_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<joinProductImages_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "joinProductImages" */
export type joinProductImages_aggregate_order_by = {
  avg?: Maybe<joinProductImages_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<joinProductImages_max_order_by>,
  min?: Maybe<joinProductImages_min_order_by>,
  stddev?: Maybe<joinProductImages_stddev_order_by>,
  stddev_pop?: Maybe<joinProductImages_stddev_pop_order_by>,
  stddev_samp?: Maybe<joinProductImages_stddev_samp_order_by>,
  sum?: Maybe<joinProductImages_sum_order_by>,
  var_pop?: Maybe<joinProductImages_var_pop_order_by>,
  var_samp?: Maybe<joinProductImages_var_samp_order_by>,
  variance?: Maybe<joinProductImages_variance_order_by>,
};

/** input type for inserting array relation for remote table "joinProductImages" */
export type joinProductImages_arr_rel_insert_input = {
  data: Array<joinProductImages_insert_input>,
  on_conflict?: Maybe<joinProductImages_on_conflict>,
};

/** aggregate avg on columns */
export type joinProductImages_avg_fields = {
   __typename?: 'joinProductImages_avg_fields',
  imageId?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "joinProductImages" */
export type joinProductImages_avg_order_by = {
  imageId?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "joinProductImages". All fields are combined with a logical 'AND'. */
export type joinProductImages_bool_exp = {
  _and?: Maybe<Array<Maybe<joinProductImages_bool_exp>>>,
  _not?: Maybe<joinProductImages_bool_exp>,
  _or?: Maybe<Array<Maybe<joinProductImages_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  image?: Maybe<images_bool_exp>,
  imageId?: Maybe<bigint_comparison_exp>,
  product?: Maybe<products_bool_exp>,
  productId?: Maybe<bigint_comparison_exp>,
};

/** unique or primary key constraints on table "joinProductImages" */
export enum joinProductImages_constraint {
  /** unique or primary key constraint */
  productImages_pkey = 'productImages_pkey'
}

/** input type for incrementing integer columne in table "joinProductImages" */
export type joinProductImages_inc_input = {
  imageId?: Maybe<Scalars['bigint']>,
  productId?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "joinProductImages" */
export type joinProductImages_insert_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  image?: Maybe<images_obj_rel_insert_input>,
  imageId?: Maybe<Scalars['bigint']>,
  product?: Maybe<products_obj_rel_insert_input>,
  productId?: Maybe<Scalars['bigint']>,
};

/** aggregate max on columns */
export type joinProductImages_max_fields = {
   __typename?: 'joinProductImages_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  imageId?: Maybe<Scalars['bigint']>,
  productId?: Maybe<Scalars['bigint']>,
};

/** order by max() on columns of table "joinProductImages" */
export type joinProductImages_max_order_by = {
  createdAt?: Maybe<order_by>,
  imageId?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate min on columns */
export type joinProductImages_min_fields = {
   __typename?: 'joinProductImages_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  imageId?: Maybe<Scalars['bigint']>,
  productId?: Maybe<Scalars['bigint']>,
};

/** order by min() on columns of table "joinProductImages" */
export type joinProductImages_min_order_by = {
  createdAt?: Maybe<order_by>,
  imageId?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** response of any mutation on the table "joinProductImages" */
export type joinProductImages_mutation_response = {
   __typename?: 'joinProductImages_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<joinProductImages>,
};

/** input type for inserting object relation for remote table "joinProductImages" */
export type joinProductImages_obj_rel_insert_input = {
  data: joinProductImages_insert_input,
  on_conflict?: Maybe<joinProductImages_on_conflict>,
};

/** on conflict condition type for table "joinProductImages" */
export type joinProductImages_on_conflict = {
  constraint: joinProductImages_constraint,
  update_columns: Array<joinProductImages_update_column>,
  where?: Maybe<joinProductImages_bool_exp>,
};

/** ordering options when selecting data from "joinProductImages" */
export type joinProductImages_order_by = {
  createdAt?: Maybe<order_by>,
  image?: Maybe<images_order_by>,
  imageId?: Maybe<order_by>,
  product?: Maybe<products_order_by>,
  productId?: Maybe<order_by>,
};

/** select columns of table "joinProductImages" */
export enum joinProductImages_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  imageId = 'imageId',
  /** column name */
  productId = 'productId'
}

/** input type for updating data in table "joinProductImages" */
export type joinProductImages_set_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  imageId?: Maybe<Scalars['bigint']>,
  productId?: Maybe<Scalars['bigint']>,
};

/** aggregate stddev on columns */
export type joinProductImages_stddev_fields = {
   __typename?: 'joinProductImages_stddev_fields',
  imageId?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "joinProductImages" */
export type joinProductImages_stddev_order_by = {
  imageId?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type joinProductImages_stddev_pop_fields = {
   __typename?: 'joinProductImages_stddev_pop_fields',
  imageId?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "joinProductImages" */
export type joinProductImages_stddev_pop_order_by = {
  imageId?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type joinProductImages_stddev_samp_fields = {
   __typename?: 'joinProductImages_stddev_samp_fields',
  imageId?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "joinProductImages" */
export type joinProductImages_stddev_samp_order_by = {
  imageId?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type joinProductImages_sum_fields = {
   __typename?: 'joinProductImages_sum_fields',
  imageId?: Maybe<Scalars['bigint']>,
  productId?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "joinProductImages" */
export type joinProductImages_sum_order_by = {
  imageId?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** update columns of table "joinProductImages" */
export enum joinProductImages_update_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  imageId = 'imageId',
  /** column name */
  productId = 'productId'
}

/** aggregate var_pop on columns */
export type joinProductImages_var_pop_fields = {
   __typename?: 'joinProductImages_var_pop_fields',
  imageId?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "joinProductImages" */
export type joinProductImages_var_pop_order_by = {
  imageId?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type joinProductImages_var_samp_fields = {
   __typename?: 'joinProductImages_var_samp_fields',
  imageId?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "joinProductImages" */
export type joinProductImages_var_samp_order_by = {
  imageId?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type joinProductImages_variance_fields = {
   __typename?: 'joinProductImages_variance_fields',
  imageId?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "joinProductImages" */
export type joinProductImages_variance_order_by = {
  imageId?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** columns and relationships of "joinProductVideos" */
export type joinProductVideos = {
   __typename?: 'joinProductVideos',
  created_at: Scalars['timestamptz'],
  /** An object relationship */
  product: products,
  productId: Scalars['bigint'],
  /** An object relationship */
  video: videos,
  videoId: Scalars['bigint'],
};

/** aggregated selection of "joinProductVideos" */
export type joinProductVideos_aggregate = {
   __typename?: 'joinProductVideos_aggregate',
  aggregate?: Maybe<joinProductVideos_aggregate_fields>,
  nodes: Array<joinProductVideos>,
};

/** aggregate fields of "joinProductVideos" */
export type joinProductVideos_aggregate_fields = {
   __typename?: 'joinProductVideos_aggregate_fields',
  avg?: Maybe<joinProductVideos_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<joinProductVideos_max_fields>,
  min?: Maybe<joinProductVideos_min_fields>,
  stddev?: Maybe<joinProductVideos_stddev_fields>,
  stddev_pop?: Maybe<joinProductVideos_stddev_pop_fields>,
  stddev_samp?: Maybe<joinProductVideos_stddev_samp_fields>,
  sum?: Maybe<joinProductVideos_sum_fields>,
  var_pop?: Maybe<joinProductVideos_var_pop_fields>,
  var_samp?: Maybe<joinProductVideos_var_samp_fields>,
  variance?: Maybe<joinProductVideos_variance_fields>,
};


/** aggregate fields of "joinProductVideos" */
export type joinProductVideos_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<joinProductVideos_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "joinProductVideos" */
export type joinProductVideos_aggregate_order_by = {
  avg?: Maybe<joinProductVideos_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<joinProductVideos_max_order_by>,
  min?: Maybe<joinProductVideos_min_order_by>,
  stddev?: Maybe<joinProductVideos_stddev_order_by>,
  stddev_pop?: Maybe<joinProductVideos_stddev_pop_order_by>,
  stddev_samp?: Maybe<joinProductVideos_stddev_samp_order_by>,
  sum?: Maybe<joinProductVideos_sum_order_by>,
  var_pop?: Maybe<joinProductVideos_var_pop_order_by>,
  var_samp?: Maybe<joinProductVideos_var_samp_order_by>,
  variance?: Maybe<joinProductVideos_variance_order_by>,
};

/** input type for inserting array relation for remote table "joinProductVideos" */
export type joinProductVideos_arr_rel_insert_input = {
  data: Array<joinProductVideos_insert_input>,
  on_conflict?: Maybe<joinProductVideos_on_conflict>,
};

/** aggregate avg on columns */
export type joinProductVideos_avg_fields = {
   __typename?: 'joinProductVideos_avg_fields',
  productId?: Maybe<Scalars['Float']>,
  videoId?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "joinProductVideos" */
export type joinProductVideos_avg_order_by = {
  productId?: Maybe<order_by>,
  videoId?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "joinProductVideos". All fields are combined with a logical 'AND'. */
export type joinProductVideos_bool_exp = {
  _and?: Maybe<Array<Maybe<joinProductVideos_bool_exp>>>,
  _not?: Maybe<joinProductVideos_bool_exp>,
  _or?: Maybe<Array<Maybe<joinProductVideos_bool_exp>>>,
  created_at?: Maybe<timestamptz_comparison_exp>,
  product?: Maybe<products_bool_exp>,
  productId?: Maybe<bigint_comparison_exp>,
  video?: Maybe<videos_bool_exp>,
  videoId?: Maybe<bigint_comparison_exp>,
};

/** unique or primary key constraints on table "joinProductVideos" */
export enum joinProductVideos_constraint {
  /** unique or primary key constraint */
  joinProductVideos_pkey = 'joinProductVideos_pkey'
}

/** input type for incrementing integer columne in table "joinProductVideos" */
export type joinProductVideos_inc_input = {
  productId?: Maybe<Scalars['bigint']>,
  videoId?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "joinProductVideos" */
export type joinProductVideos_insert_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  product?: Maybe<products_obj_rel_insert_input>,
  productId?: Maybe<Scalars['bigint']>,
  video?: Maybe<videos_obj_rel_insert_input>,
  videoId?: Maybe<Scalars['bigint']>,
};

/** aggregate max on columns */
export type joinProductVideos_max_fields = {
   __typename?: 'joinProductVideos_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  productId?: Maybe<Scalars['bigint']>,
  videoId?: Maybe<Scalars['bigint']>,
};

/** order by max() on columns of table "joinProductVideos" */
export type joinProductVideos_max_order_by = {
  created_at?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  videoId?: Maybe<order_by>,
};

/** aggregate min on columns */
export type joinProductVideos_min_fields = {
   __typename?: 'joinProductVideos_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  productId?: Maybe<Scalars['bigint']>,
  videoId?: Maybe<Scalars['bigint']>,
};

/** order by min() on columns of table "joinProductVideos" */
export type joinProductVideos_min_order_by = {
  created_at?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  videoId?: Maybe<order_by>,
};

/** response of any mutation on the table "joinProductVideos" */
export type joinProductVideos_mutation_response = {
   __typename?: 'joinProductVideos_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<joinProductVideos>,
};

/** input type for inserting object relation for remote table "joinProductVideos" */
export type joinProductVideos_obj_rel_insert_input = {
  data: joinProductVideos_insert_input,
  on_conflict?: Maybe<joinProductVideos_on_conflict>,
};

/** on conflict condition type for table "joinProductVideos" */
export type joinProductVideos_on_conflict = {
  constraint: joinProductVideos_constraint,
  update_columns: Array<joinProductVideos_update_column>,
  where?: Maybe<joinProductVideos_bool_exp>,
};

/** ordering options when selecting data from "joinProductVideos" */
export type joinProductVideos_order_by = {
  created_at?: Maybe<order_by>,
  product?: Maybe<products_order_by>,
  productId?: Maybe<order_by>,
  video?: Maybe<videos_order_by>,
  videoId?: Maybe<order_by>,
};

/** select columns of table "joinProductVideos" */
export enum joinProductVideos_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  productId = 'productId',
  /** column name */
  videoId = 'videoId'
}

/** input type for updating data in table "joinProductVideos" */
export type joinProductVideos_set_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  productId?: Maybe<Scalars['bigint']>,
  videoId?: Maybe<Scalars['bigint']>,
};

/** aggregate stddev on columns */
export type joinProductVideos_stddev_fields = {
   __typename?: 'joinProductVideos_stddev_fields',
  productId?: Maybe<Scalars['Float']>,
  videoId?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "joinProductVideos" */
export type joinProductVideos_stddev_order_by = {
  productId?: Maybe<order_by>,
  videoId?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type joinProductVideos_stddev_pop_fields = {
   __typename?: 'joinProductVideos_stddev_pop_fields',
  productId?: Maybe<Scalars['Float']>,
  videoId?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "joinProductVideos" */
export type joinProductVideos_stddev_pop_order_by = {
  productId?: Maybe<order_by>,
  videoId?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type joinProductVideos_stddev_samp_fields = {
   __typename?: 'joinProductVideos_stddev_samp_fields',
  productId?: Maybe<Scalars['Float']>,
  videoId?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "joinProductVideos" */
export type joinProductVideos_stddev_samp_order_by = {
  productId?: Maybe<order_by>,
  videoId?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type joinProductVideos_sum_fields = {
   __typename?: 'joinProductVideos_sum_fields',
  productId?: Maybe<Scalars['bigint']>,
  videoId?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "joinProductVideos" */
export type joinProductVideos_sum_order_by = {
  productId?: Maybe<order_by>,
  videoId?: Maybe<order_by>,
};

/** update columns of table "joinProductVideos" */
export enum joinProductVideos_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  productId = 'productId',
  /** column name */
  videoId = 'videoId'
}

/** aggregate var_pop on columns */
export type joinProductVideos_var_pop_fields = {
   __typename?: 'joinProductVideos_var_pop_fields',
  productId?: Maybe<Scalars['Float']>,
  videoId?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "joinProductVideos" */
export type joinProductVideos_var_pop_order_by = {
  productId?: Maybe<order_by>,
  videoId?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type joinProductVideos_var_samp_fields = {
   __typename?: 'joinProductVideos_var_samp_fields',
  productId?: Maybe<Scalars['Float']>,
  videoId?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "joinProductVideos" */
export type joinProductVideos_var_samp_order_by = {
  productId?: Maybe<order_by>,
  videoId?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type joinProductVideos_variance_fields = {
   __typename?: 'joinProductVideos_variance_fields',
  productId?: Maybe<Scalars['Float']>,
  videoId?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "joinProductVideos" */
export type joinProductVideos_variance_order_by = {
  productId?: Maybe<order_by>,
  videoId?: Maybe<order_by>,
};

/** columns and relationships of "joinVariantImages" */
export type joinVariantImages = {
   __typename?: 'joinVariantImages',
  created_at: Scalars['timestamptz'],
  /** An object relationship */
  image: images,
  imageId: Scalars['bigint'],
  /** An object relationship */
  productVariant: productVariants,
  productVariantId: Scalars['bigint'],
};

/** aggregated selection of "joinVariantImages" */
export type joinVariantImages_aggregate = {
   __typename?: 'joinVariantImages_aggregate',
  aggregate?: Maybe<joinVariantImages_aggregate_fields>,
  nodes: Array<joinVariantImages>,
};

/** aggregate fields of "joinVariantImages" */
export type joinVariantImages_aggregate_fields = {
   __typename?: 'joinVariantImages_aggregate_fields',
  avg?: Maybe<joinVariantImages_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<joinVariantImages_max_fields>,
  min?: Maybe<joinVariantImages_min_fields>,
  stddev?: Maybe<joinVariantImages_stddev_fields>,
  stddev_pop?: Maybe<joinVariantImages_stddev_pop_fields>,
  stddev_samp?: Maybe<joinVariantImages_stddev_samp_fields>,
  sum?: Maybe<joinVariantImages_sum_fields>,
  var_pop?: Maybe<joinVariantImages_var_pop_fields>,
  var_samp?: Maybe<joinVariantImages_var_samp_fields>,
  variance?: Maybe<joinVariantImages_variance_fields>,
};


/** aggregate fields of "joinVariantImages" */
export type joinVariantImages_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<joinVariantImages_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "joinVariantImages" */
export type joinVariantImages_aggregate_order_by = {
  avg?: Maybe<joinVariantImages_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<joinVariantImages_max_order_by>,
  min?: Maybe<joinVariantImages_min_order_by>,
  stddev?: Maybe<joinVariantImages_stddev_order_by>,
  stddev_pop?: Maybe<joinVariantImages_stddev_pop_order_by>,
  stddev_samp?: Maybe<joinVariantImages_stddev_samp_order_by>,
  sum?: Maybe<joinVariantImages_sum_order_by>,
  var_pop?: Maybe<joinVariantImages_var_pop_order_by>,
  var_samp?: Maybe<joinVariantImages_var_samp_order_by>,
  variance?: Maybe<joinVariantImages_variance_order_by>,
};

/** input type for inserting array relation for remote table "joinVariantImages" */
export type joinVariantImages_arr_rel_insert_input = {
  data: Array<joinVariantImages_insert_input>,
  on_conflict?: Maybe<joinVariantImages_on_conflict>,
};

/** aggregate avg on columns */
export type joinVariantImages_avg_fields = {
   __typename?: 'joinVariantImages_avg_fields',
  imageId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "joinVariantImages" */
export type joinVariantImages_avg_order_by = {
  imageId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "joinVariantImages". All fields are combined with a logical 'AND'. */
export type joinVariantImages_bool_exp = {
  _and?: Maybe<Array<Maybe<joinVariantImages_bool_exp>>>,
  _not?: Maybe<joinVariantImages_bool_exp>,
  _or?: Maybe<Array<Maybe<joinVariantImages_bool_exp>>>,
  created_at?: Maybe<timestamptz_comparison_exp>,
  image?: Maybe<images_bool_exp>,
  imageId?: Maybe<bigint_comparison_exp>,
  productVariant?: Maybe<productVariants_bool_exp>,
  productVariantId?: Maybe<bigint_comparison_exp>,
};

/** unique or primary key constraints on table "joinVariantImages" */
export enum joinVariantImages_constraint {
  /** unique or primary key constraint */
  joinVariantImages_pkey = 'joinVariantImages_pkey'
}

/** input type for incrementing integer columne in table "joinVariantImages" */
export type joinVariantImages_inc_input = {
  imageId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "joinVariantImages" */
export type joinVariantImages_insert_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  image?: Maybe<images_obj_rel_insert_input>,
  imageId?: Maybe<Scalars['bigint']>,
  productVariant?: Maybe<productVariants_obj_rel_insert_input>,
  productVariantId?: Maybe<Scalars['bigint']>,
};

/** aggregate max on columns */
export type joinVariantImages_max_fields = {
   __typename?: 'joinVariantImages_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  imageId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
};

/** order by max() on columns of table "joinVariantImages" */
export type joinVariantImages_max_order_by = {
  created_at?: Maybe<order_by>,
  imageId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate min on columns */
export type joinVariantImages_min_fields = {
   __typename?: 'joinVariantImages_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  imageId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
};

/** order by min() on columns of table "joinVariantImages" */
export type joinVariantImages_min_order_by = {
  created_at?: Maybe<order_by>,
  imageId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** response of any mutation on the table "joinVariantImages" */
export type joinVariantImages_mutation_response = {
   __typename?: 'joinVariantImages_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<joinVariantImages>,
};

/** input type for inserting object relation for remote table "joinVariantImages" */
export type joinVariantImages_obj_rel_insert_input = {
  data: joinVariantImages_insert_input,
  on_conflict?: Maybe<joinVariantImages_on_conflict>,
};

/** on conflict condition type for table "joinVariantImages" */
export type joinVariantImages_on_conflict = {
  constraint: joinVariantImages_constraint,
  update_columns: Array<joinVariantImages_update_column>,
  where?: Maybe<joinVariantImages_bool_exp>,
};

/** ordering options when selecting data from "joinVariantImages" */
export type joinVariantImages_order_by = {
  created_at?: Maybe<order_by>,
  image?: Maybe<images_order_by>,
  imageId?: Maybe<order_by>,
  productVariant?: Maybe<productVariants_order_by>,
  productVariantId?: Maybe<order_by>,
};

/** select columns of table "joinVariantImages" */
export enum joinVariantImages_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  imageId = 'imageId',
  /** column name */
  productVariantId = 'productVariantId'
}

/** input type for updating data in table "joinVariantImages" */
export type joinVariantImages_set_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  imageId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
};

/** aggregate stddev on columns */
export type joinVariantImages_stddev_fields = {
   __typename?: 'joinVariantImages_stddev_fields',
  imageId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "joinVariantImages" */
export type joinVariantImages_stddev_order_by = {
  imageId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type joinVariantImages_stddev_pop_fields = {
   __typename?: 'joinVariantImages_stddev_pop_fields',
  imageId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "joinVariantImages" */
export type joinVariantImages_stddev_pop_order_by = {
  imageId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type joinVariantImages_stddev_samp_fields = {
   __typename?: 'joinVariantImages_stddev_samp_fields',
  imageId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "joinVariantImages" */
export type joinVariantImages_stddev_samp_order_by = {
  imageId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type joinVariantImages_sum_fields = {
   __typename?: 'joinVariantImages_sum_fields',
  imageId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "joinVariantImages" */
export type joinVariantImages_sum_order_by = {
  imageId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** update columns of table "joinVariantImages" */
export enum joinVariantImages_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  imageId = 'imageId',
  /** column name */
  productVariantId = 'productVariantId'
}

/** aggregate var_pop on columns */
export type joinVariantImages_var_pop_fields = {
   __typename?: 'joinVariantImages_var_pop_fields',
  imageId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "joinVariantImages" */
export type joinVariantImages_var_pop_order_by = {
  imageId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type joinVariantImages_var_samp_fields = {
   __typename?: 'joinVariantImages_var_samp_fields',
  imageId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "joinVariantImages" */
export type joinVariantImages_var_samp_order_by = {
  imageId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type joinVariantImages_variance_fields = {
   __typename?: 'joinVariantImages_variance_fields',
  imageId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "joinVariantImages" */
export type joinVariantImages_variance_order_by = {
  imageId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** columns and relationships of "joinVariantValues" */
export type joinVariantValues = {
   __typename?: 'joinVariantValues',
  createdAt: Scalars['timestamptz'],
  productOptionValueId: Scalars['bigint'],
  productVariantId: Scalars['bigint'],
  /** An object relationship */
  value: productOptionValues,
  /** An object relationship */
  variant: productVariants,
};

/** aggregated selection of "joinVariantValues" */
export type joinVariantValues_aggregate = {
   __typename?: 'joinVariantValues_aggregate',
  aggregate?: Maybe<joinVariantValues_aggregate_fields>,
  nodes: Array<joinVariantValues>,
};

/** aggregate fields of "joinVariantValues" */
export type joinVariantValues_aggregate_fields = {
   __typename?: 'joinVariantValues_aggregate_fields',
  avg?: Maybe<joinVariantValues_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<joinVariantValues_max_fields>,
  min?: Maybe<joinVariantValues_min_fields>,
  stddev?: Maybe<joinVariantValues_stddev_fields>,
  stddev_pop?: Maybe<joinVariantValues_stddev_pop_fields>,
  stddev_samp?: Maybe<joinVariantValues_stddev_samp_fields>,
  sum?: Maybe<joinVariantValues_sum_fields>,
  var_pop?: Maybe<joinVariantValues_var_pop_fields>,
  var_samp?: Maybe<joinVariantValues_var_samp_fields>,
  variance?: Maybe<joinVariantValues_variance_fields>,
};


/** aggregate fields of "joinVariantValues" */
export type joinVariantValues_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<joinVariantValues_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "joinVariantValues" */
export type joinVariantValues_aggregate_order_by = {
  avg?: Maybe<joinVariantValues_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<joinVariantValues_max_order_by>,
  min?: Maybe<joinVariantValues_min_order_by>,
  stddev?: Maybe<joinVariantValues_stddev_order_by>,
  stddev_pop?: Maybe<joinVariantValues_stddev_pop_order_by>,
  stddev_samp?: Maybe<joinVariantValues_stddev_samp_order_by>,
  sum?: Maybe<joinVariantValues_sum_order_by>,
  var_pop?: Maybe<joinVariantValues_var_pop_order_by>,
  var_samp?: Maybe<joinVariantValues_var_samp_order_by>,
  variance?: Maybe<joinVariantValues_variance_order_by>,
};

/** input type for inserting array relation for remote table "joinVariantValues" */
export type joinVariantValues_arr_rel_insert_input = {
  data: Array<joinVariantValues_insert_input>,
  on_conflict?: Maybe<joinVariantValues_on_conflict>,
};

/** aggregate avg on columns */
export type joinVariantValues_avg_fields = {
   __typename?: 'joinVariantValues_avg_fields',
  productOptionValueId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "joinVariantValues" */
export type joinVariantValues_avg_order_by = {
  productOptionValueId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "joinVariantValues". All fields are combined with a logical 'AND'. */
export type joinVariantValues_bool_exp = {
  _and?: Maybe<Array<Maybe<joinVariantValues_bool_exp>>>,
  _not?: Maybe<joinVariantValues_bool_exp>,
  _or?: Maybe<Array<Maybe<joinVariantValues_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  productOptionValueId?: Maybe<bigint_comparison_exp>,
  productVariantId?: Maybe<bigint_comparison_exp>,
  value?: Maybe<productOptionValues_bool_exp>,
  variant?: Maybe<productVariants_bool_exp>,
};

/** unique or primary key constraints on table "joinVariantValues" */
export enum joinVariantValues_constraint {
  /** unique or primary key constraint */
  variantOptionValues_pkey = 'variantOptionValues_pkey'
}

/** input type for incrementing integer columne in table "joinVariantValues" */
export type joinVariantValues_inc_input = {
  productOptionValueId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "joinVariantValues" */
export type joinVariantValues_insert_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
  value?: Maybe<productOptionValues_obj_rel_insert_input>,
  variant?: Maybe<productVariants_obj_rel_insert_input>,
};

/** aggregate max on columns */
export type joinVariantValues_max_fields = {
   __typename?: 'joinVariantValues_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
};

/** order by max() on columns of table "joinVariantValues" */
export type joinVariantValues_max_order_by = {
  createdAt?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate min on columns */
export type joinVariantValues_min_fields = {
   __typename?: 'joinVariantValues_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
};

/** order by min() on columns of table "joinVariantValues" */
export type joinVariantValues_min_order_by = {
  createdAt?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** response of any mutation on the table "joinVariantValues" */
export type joinVariantValues_mutation_response = {
   __typename?: 'joinVariantValues_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<joinVariantValues>,
};

/** input type for inserting object relation for remote table "joinVariantValues" */
export type joinVariantValues_obj_rel_insert_input = {
  data: joinVariantValues_insert_input,
  on_conflict?: Maybe<joinVariantValues_on_conflict>,
};

/** on conflict condition type for table "joinVariantValues" */
export type joinVariantValues_on_conflict = {
  constraint: joinVariantValues_constraint,
  update_columns: Array<joinVariantValues_update_column>,
  where?: Maybe<joinVariantValues_bool_exp>,
};

/** ordering options when selecting data from "joinVariantValues" */
export type joinVariantValues_order_by = {
  createdAt?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  value?: Maybe<productOptionValues_order_by>,
  variant?: Maybe<productVariants_order_by>,
};

/** select columns of table "joinVariantValues" */
export enum joinVariantValues_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  productOptionValueId = 'productOptionValueId',
  /** column name */
  productVariantId = 'productVariantId'
}

/** input type for updating data in table "joinVariantValues" */
export type joinVariantValues_set_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
};

/** aggregate stddev on columns */
export type joinVariantValues_stddev_fields = {
   __typename?: 'joinVariantValues_stddev_fields',
  productOptionValueId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "joinVariantValues" */
export type joinVariantValues_stddev_order_by = {
  productOptionValueId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type joinVariantValues_stddev_pop_fields = {
   __typename?: 'joinVariantValues_stddev_pop_fields',
  productOptionValueId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "joinVariantValues" */
export type joinVariantValues_stddev_pop_order_by = {
  productOptionValueId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type joinVariantValues_stddev_samp_fields = {
   __typename?: 'joinVariantValues_stddev_samp_fields',
  productOptionValueId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "joinVariantValues" */
export type joinVariantValues_stddev_samp_order_by = {
  productOptionValueId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type joinVariantValues_sum_fields = {
   __typename?: 'joinVariantValues_sum_fields',
  productOptionValueId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "joinVariantValues" */
export type joinVariantValues_sum_order_by = {
  productOptionValueId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** update columns of table "joinVariantValues" */
export enum joinVariantValues_update_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  productOptionValueId = 'productOptionValueId',
  /** column name */
  productVariantId = 'productVariantId'
}

/** aggregate var_pop on columns */
export type joinVariantValues_var_pop_fields = {
   __typename?: 'joinVariantValues_var_pop_fields',
  productOptionValueId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "joinVariantValues" */
export type joinVariantValues_var_pop_order_by = {
  productOptionValueId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type joinVariantValues_var_samp_fields = {
   __typename?: 'joinVariantValues_var_samp_fields',
  productOptionValueId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "joinVariantValues" */
export type joinVariantValues_var_samp_order_by = {
  productOptionValueId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type joinVariantValues_variance_fields = {
   __typename?: 'joinVariantValues_variance_fields',
  productOptionValueId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "joinVariantValues" */
export type joinVariantValues_variance_order_by = {
  productOptionValueId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};


/** expression to compare columns of type jsonb. All fields are combined with logical 'AND'. */
export type jsonb_comparison_exp = {
  /** is the column contained in the given json value */
  _contained_in?: Maybe<Scalars['jsonb']>,
  /** does the column contain the given json value at the top level */
  _contains?: Maybe<Scalars['jsonb']>,
  _eq?: Maybe<Scalars['jsonb']>,
  _gt?: Maybe<Scalars['jsonb']>,
  _gte?: Maybe<Scalars['jsonb']>,
  /** does the string exist as a top-level key in the column */
  _has_key?: Maybe<Scalars['String']>,
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: Maybe<Array<Scalars['String']>>,
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: Maybe<Array<Scalars['String']>>,
  _in?: Maybe<Array<Scalars['jsonb']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['jsonb']>,
  _lte?: Maybe<Scalars['jsonb']>,
  _neq?: Maybe<Scalars['jsonb']>,
  _nin?: Maybe<Array<Scalars['jsonb']>>,
};

export type Mutation = {
   __typename?: 'Mutation',
  setShopifyAccountAccessToken?: Maybe<MutationResponse>,
};


export type MutationsetShopifyAccountAccessTokenArgs = {
  accessToken: Scalars['String'],
  id: Scalars['String']
};

/** mutation root */
export type mutation_root = {
   __typename?: 'mutation_root',
  /** delete data from the table: "images" */
  deleteImages?: Maybe<images_mutation_response>,
  /** delete data from the table: "joinProductImages" */
  deleteJoinProductImages?: Maybe<joinProductImages_mutation_response>,
  /** delete data from the table: "joinOptionValueImages" */
  deleteJoinProductOptionValueImages?: Maybe<joinOptionValueImages_mutation_response>,
  /** delete data from the table: "joinProductVideos" */
  deleteJoinProductVideos?: Maybe<joinProductVideos_mutation_response>,
  /** delete data from the table: "joinVariantImages" */
  deleteJoinVariantImages?: Maybe<joinVariantImages_mutation_response>,
  /** delete data from the table: "joinVariantValues" */
  deleteJoinVariantValues?: Maybe<joinVariantValues_mutation_response>,
  /** delete data from the table: "productOptionValues" */
  deleteProductOptionValues?: Maybe<productOptionValues_mutation_response>,
  /** delete data from the table: "productOptions" */
  deleteProductOptions?: Maybe<productOptions_mutation_response>,
  /** delete data from the table: "productVariants" */
  deleteProductVariants?: Maybe<productVariants_mutation_response>,
  /** delete data from the table: "products" */
  deleteProducts?: Maybe<products_mutation_response>,
  /** delete data from the table: "shopifyAccounts" */
  deleteShopifyAccounts?: Maybe<shopifyAccounts_mutation_response>,
  /** delete data from the table: "shops" */
  deleteShops?: Maybe<shops_mutation_response>,
  /** delete data from the table: "videos" */
  delete_videos?: Maybe<videos_mutation_response>,
  /** delete data from the table: "x_cache_shopify_productVariants" */
  delete_x_cache_shopify_productVariants?: Maybe<x_cache_shopify_productVariants_mutation_response>,
  /** delete data from the table: "x_cache_shopify_products" */
  delete_x_cache_shopify_products?: Maybe<x_cache_shopify_products_mutation_response>,
  /** delete data from the table: "x_queue_shopify_fetchProductVariants" */
  delete_x_queue_shopify_fetchProductVariants?: Maybe<x_queue_shopify_fetchProductVariants_mutation_response>,
  /** delete data from the table: "x_queue_shopify_fetchProducts" */
  delete_x_queue_shopify_fetchProducts?: Maybe<x_queue_shopify_fetchProducts_mutation_response>,
  /** delete data from the table: "x_queue_shopify_saveToPlatform" */
  delete_x_queue_shopify_saveToPlatform?: Maybe<x_queue_shopify_saveToPlatform_mutation_response>,
  /** delete data from the table: "x_queue_shopify_transformToPlatform" */
  delete_x_queue_shopify_transformToPlatform?: Maybe<x_queue_shopify_transformToPlatform_mutation_response>,
  /** delete data from the table: "x_standalone_event_triggers" */
  delete_x_standalone_event_triggers?: Maybe<x_standalone_event_triggers_mutation_response>,
  /** insert data into the table: "images" */
  insertImages?: Maybe<images_mutation_response>,
  /** insert data into the table: "joinProductImages" */
  insertJoinProductImages?: Maybe<joinProductImages_mutation_response>,
  /** insert data into the table: "joinOptionValueImages" */
  insertJoinProductOptionValueImages?: Maybe<joinOptionValueImages_mutation_response>,
  /** insert data into the table: "joinProductVideos" */
  insertJoinProductVideos?: Maybe<joinProductVideos_mutation_response>,
  /** insert data into the table: "joinVariantImages" */
  insertJoinVariantImages?: Maybe<joinVariantImages_mutation_response>,
  /** insert data into the table: "joinVariantValues" */
  insertJoinVariantValues?: Maybe<joinVariantValues_mutation_response>,
  /** insert data into the table: "productOptionValues" */
  insertProductOptionValues?: Maybe<productOptionValues_mutation_response>,
  /** insert data into the table: "productOptions" */
  insertProductOptions?: Maybe<productOptions_mutation_response>,
  /** insert data into the table: "productVariants" */
  insertProductVariants?: Maybe<productVariants_mutation_response>,
  /** insert data into the table: "products" */
  insertProducts?: Maybe<products_mutation_response>,
  /** insert data into the table: "shopifyAccounts" */
  insertShopifyAccounts?: Maybe<shopifyAccounts_mutation_response>,
  /** insert data into the table: "shops" */
  insertShops?: Maybe<shops_mutation_response>,
  /** insert data into the table: "videos" */
  insert_videos?: Maybe<videos_mutation_response>,
  /** insert data into the table: "x_cache_shopify_productVariants" */
  insert_x_cache_shopify_productVariants?: Maybe<x_cache_shopify_productVariants_mutation_response>,
  /** insert data into the table: "x_cache_shopify_products" */
  insert_x_cache_shopify_products?: Maybe<x_cache_shopify_products_mutation_response>,
  /** insert data into the table: "x_queue_shopify_fetchProductVariants" */
  insert_x_queue_shopify_fetchProductVariants?: Maybe<x_queue_shopify_fetchProductVariants_mutation_response>,
  /** insert data into the table: "x_queue_shopify_fetchProducts" */
  insert_x_queue_shopify_fetchProducts?: Maybe<x_queue_shopify_fetchProducts_mutation_response>,
  /** insert data into the table: "x_queue_shopify_saveToPlatform" */
  insert_x_queue_shopify_saveToPlatform?: Maybe<x_queue_shopify_saveToPlatform_mutation_response>,
  /** insert data into the table: "x_queue_shopify_transformToPlatform" */
  insert_x_queue_shopify_transformToPlatform?: Maybe<x_queue_shopify_transformToPlatform_mutation_response>,
  /** insert data into the table: "x_standalone_event_triggers" */
  insert_x_standalone_event_triggers?: Maybe<x_standalone_event_triggers_mutation_response>,
  setShopifyAccountAccessToken?: Maybe<MutationResponse>,
  /** update data of the table: "images" */
  updateImages?: Maybe<images_mutation_response>,
  /** update data of the table: "joinProductImages" */
  updateJoinProductImages?: Maybe<joinProductImages_mutation_response>,
  /** update data of the table: "joinOptionValueImages" */
  updateJoinProductOptionValueImages?: Maybe<joinOptionValueImages_mutation_response>,
  /** update data of the table: "joinProductVideos" */
  updateJoinProductVideos?: Maybe<joinProductVideos_mutation_response>,
  /** update data of the table: "joinVariantImages" */
  updateJoinVariantImages?: Maybe<joinVariantImages_mutation_response>,
  /** update data of the table: "joinVariantValues" */
  updateJoinVariantValues?: Maybe<joinVariantValues_mutation_response>,
  /** update data of the table: "productOptionValues" */
  updateProductOptionValues?: Maybe<productOptionValues_mutation_response>,
  /** update data of the table: "productOptions" */
  updateProductOptions?: Maybe<productOptions_mutation_response>,
  /** update data of the table: "productVariants" */
  updateProductVariants?: Maybe<productVariants_mutation_response>,
  /** update data of the table: "products" */
  updateProducts?: Maybe<products_mutation_response>,
  /** update data of the table: "shopifyAccounts" */
  updateShopifyAccounts?: Maybe<shopifyAccounts_mutation_response>,
  /** update data of the table: "shops" */
  updateShops?: Maybe<shops_mutation_response>,
  /** update data of the table: "videos" */
  update_videos?: Maybe<videos_mutation_response>,
  /** update data of the table: "x_cache_shopify_productVariants" */
  update_x_cache_shopify_productVariants?: Maybe<x_cache_shopify_productVariants_mutation_response>,
  /** update data of the table: "x_cache_shopify_products" */
  update_x_cache_shopify_products?: Maybe<x_cache_shopify_products_mutation_response>,
  /** update data of the table: "x_queue_shopify_fetchProductVariants" */
  update_x_queue_shopify_fetchProductVariants?: Maybe<x_queue_shopify_fetchProductVariants_mutation_response>,
  /** update data of the table: "x_queue_shopify_fetchProducts" */
  update_x_queue_shopify_fetchProducts?: Maybe<x_queue_shopify_fetchProducts_mutation_response>,
  /** update data of the table: "x_queue_shopify_saveToPlatform" */
  update_x_queue_shopify_saveToPlatform?: Maybe<x_queue_shopify_saveToPlatform_mutation_response>,
  /** update data of the table: "x_queue_shopify_transformToPlatform" */
  update_x_queue_shopify_transformToPlatform?: Maybe<x_queue_shopify_transformToPlatform_mutation_response>,
  /** update data of the table: "x_standalone_event_triggers" */
  update_x_standalone_event_triggers?: Maybe<x_standalone_event_triggers_mutation_response>,
};


/** mutation root */
export type mutation_rootdeleteImagesArgs = {
  where: images_bool_exp
};


/** mutation root */
export type mutation_rootdeleteJoinProductImagesArgs = {
  where: joinProductImages_bool_exp
};


/** mutation root */
export type mutation_rootdeleteJoinProductOptionValueImagesArgs = {
  where: joinOptionValueImages_bool_exp
};


/** mutation root */
export type mutation_rootdeleteJoinProductVideosArgs = {
  where: joinProductVideos_bool_exp
};


/** mutation root */
export type mutation_rootdeleteJoinVariantImagesArgs = {
  where: joinVariantImages_bool_exp
};


/** mutation root */
export type mutation_rootdeleteJoinVariantValuesArgs = {
  where: joinVariantValues_bool_exp
};


/** mutation root */
export type mutation_rootdeleteProductOptionValuesArgs = {
  where: productOptionValues_bool_exp
};


/** mutation root */
export type mutation_rootdeleteProductOptionsArgs = {
  where: productOptions_bool_exp
};


/** mutation root */
export type mutation_rootdeleteProductVariantsArgs = {
  where: productVariants_bool_exp
};


/** mutation root */
export type mutation_rootdeleteProductsArgs = {
  where: products_bool_exp
};


/** mutation root */
export type mutation_rootdeleteShopifyAccountsArgs = {
  where: shopifyAccounts_bool_exp
};


/** mutation root */
export type mutation_rootdeleteShopsArgs = {
  where: shops_bool_exp
};


/** mutation root */
export type mutation_rootdelete_videosArgs = {
  where: videos_bool_exp
};


/** mutation root */
export type mutation_rootdelete_x_cache_shopify_productVariantsArgs = {
  where: x_cache_shopify_productVariants_bool_exp
};


/** mutation root */
export type mutation_rootdelete_x_cache_shopify_productsArgs = {
  where: x_cache_shopify_products_bool_exp
};


/** mutation root */
export type mutation_rootdelete_x_queue_shopify_fetchProductVariantsArgs = {
  where: x_queue_shopify_fetchProductVariants_bool_exp
};


/** mutation root */
export type mutation_rootdelete_x_queue_shopify_fetchProductsArgs = {
  where: x_queue_shopify_fetchProducts_bool_exp
};


/** mutation root */
export type mutation_rootdelete_x_queue_shopify_saveToPlatformArgs = {
  where: x_queue_shopify_saveToPlatform_bool_exp
};


/** mutation root */
export type mutation_rootdelete_x_queue_shopify_transformToPlatformArgs = {
  where: x_queue_shopify_transformToPlatform_bool_exp
};


/** mutation root */
export type mutation_rootdelete_x_standalone_event_triggersArgs = {
  where: x_standalone_event_triggers_bool_exp
};


/** mutation root */
export type mutation_rootinsertImagesArgs = {
  objects: Array<images_insert_input>,
  on_conflict?: Maybe<images_on_conflict>
};


/** mutation root */
export type mutation_rootinsertJoinProductImagesArgs = {
  objects: Array<joinProductImages_insert_input>,
  on_conflict?: Maybe<joinProductImages_on_conflict>
};


/** mutation root */
export type mutation_rootinsertJoinProductOptionValueImagesArgs = {
  objects: Array<joinOptionValueImages_insert_input>,
  on_conflict?: Maybe<joinOptionValueImages_on_conflict>
};


/** mutation root */
export type mutation_rootinsertJoinProductVideosArgs = {
  objects: Array<joinProductVideos_insert_input>,
  on_conflict?: Maybe<joinProductVideos_on_conflict>
};


/** mutation root */
export type mutation_rootinsertJoinVariantImagesArgs = {
  objects: Array<joinVariantImages_insert_input>,
  on_conflict?: Maybe<joinVariantImages_on_conflict>
};


/** mutation root */
export type mutation_rootinsertJoinVariantValuesArgs = {
  objects: Array<joinVariantValues_insert_input>,
  on_conflict?: Maybe<joinVariantValues_on_conflict>
};


/** mutation root */
export type mutation_rootinsertProductOptionValuesArgs = {
  objects: Array<productOptionValues_insert_input>,
  on_conflict?: Maybe<productOptionValues_on_conflict>
};


/** mutation root */
export type mutation_rootinsertProductOptionsArgs = {
  objects: Array<productOptions_insert_input>,
  on_conflict?: Maybe<productOptions_on_conflict>
};


/** mutation root */
export type mutation_rootinsertProductVariantsArgs = {
  objects: Array<productVariants_insert_input>,
  on_conflict?: Maybe<productVariants_on_conflict>
};


/** mutation root */
export type mutation_rootinsertProductsArgs = {
  objects: Array<products_insert_input>,
  on_conflict?: Maybe<products_on_conflict>
};


/** mutation root */
export type mutation_rootinsertShopifyAccountsArgs = {
  objects: Array<shopifyAccounts_insert_input>,
  on_conflict?: Maybe<shopifyAccounts_on_conflict>
};


/** mutation root */
export type mutation_rootinsertShopsArgs = {
  objects: Array<shops_insert_input>,
  on_conflict?: Maybe<shops_on_conflict>
};


/** mutation root */
export type mutation_rootinsert_videosArgs = {
  objects: Array<videos_insert_input>,
  on_conflict?: Maybe<videos_on_conflict>
};


/** mutation root */
export type mutation_rootinsert_x_cache_shopify_productVariantsArgs = {
  objects: Array<x_cache_shopify_productVariants_insert_input>,
  on_conflict?: Maybe<x_cache_shopify_productVariants_on_conflict>
};


/** mutation root */
export type mutation_rootinsert_x_cache_shopify_productsArgs = {
  objects: Array<x_cache_shopify_products_insert_input>,
  on_conflict?: Maybe<x_cache_shopify_products_on_conflict>
};


/** mutation root */
export type mutation_rootinsert_x_queue_shopify_fetchProductVariantsArgs = {
  objects: Array<x_queue_shopify_fetchProductVariants_insert_input>,
  on_conflict?: Maybe<x_queue_shopify_fetchProductVariants_on_conflict>
};


/** mutation root */
export type mutation_rootinsert_x_queue_shopify_fetchProductsArgs = {
  objects: Array<x_queue_shopify_fetchProducts_insert_input>,
  on_conflict?: Maybe<x_queue_shopify_fetchProducts_on_conflict>
};


/** mutation root */
export type mutation_rootinsert_x_queue_shopify_saveToPlatformArgs = {
  objects: Array<x_queue_shopify_saveToPlatform_insert_input>,
  on_conflict?: Maybe<x_queue_shopify_saveToPlatform_on_conflict>
};


/** mutation root */
export type mutation_rootinsert_x_queue_shopify_transformToPlatformArgs = {
  objects: Array<x_queue_shopify_transformToPlatform_insert_input>,
  on_conflict?: Maybe<x_queue_shopify_transformToPlatform_on_conflict>
};


/** mutation root */
export type mutation_rootinsert_x_standalone_event_triggersArgs = {
  objects: Array<x_standalone_event_triggers_insert_input>,
  on_conflict?: Maybe<x_standalone_event_triggers_on_conflict>
};


/** mutation root */
export type mutation_rootsetShopifyAccountAccessTokenArgs = {
  accessToken: Scalars['String'],
  id: Scalars['String']
};


/** mutation root */
export type mutation_rootupdateImagesArgs = {
  _inc?: Maybe<images_inc_input>,
  _set?: Maybe<images_set_input>,
  where: images_bool_exp
};


/** mutation root */
export type mutation_rootupdateJoinProductImagesArgs = {
  _inc?: Maybe<joinProductImages_inc_input>,
  _set?: Maybe<joinProductImages_set_input>,
  where: joinProductImages_bool_exp
};


/** mutation root */
export type mutation_rootupdateJoinProductOptionValueImagesArgs = {
  _inc?: Maybe<joinOptionValueImages_inc_input>,
  _set?: Maybe<joinOptionValueImages_set_input>,
  where: joinOptionValueImages_bool_exp
};


/** mutation root */
export type mutation_rootupdateJoinProductVideosArgs = {
  _inc?: Maybe<joinProductVideos_inc_input>,
  _set?: Maybe<joinProductVideos_set_input>,
  where: joinProductVideos_bool_exp
};


/** mutation root */
export type mutation_rootupdateJoinVariantImagesArgs = {
  _inc?: Maybe<joinVariantImages_inc_input>,
  _set?: Maybe<joinVariantImages_set_input>,
  where: joinVariantImages_bool_exp
};


/** mutation root */
export type mutation_rootupdateJoinVariantValuesArgs = {
  _inc?: Maybe<joinVariantValues_inc_input>,
  _set?: Maybe<joinVariantValues_set_input>,
  where: joinVariantValues_bool_exp
};


/** mutation root */
export type mutation_rootupdateProductOptionValuesArgs = {
  _inc?: Maybe<productOptionValues_inc_input>,
  _set?: Maybe<productOptionValues_set_input>,
  where: productOptionValues_bool_exp
};


/** mutation root */
export type mutation_rootupdateProductOptionsArgs = {
  _inc?: Maybe<productOptions_inc_input>,
  _set?: Maybe<productOptions_set_input>,
  where: productOptions_bool_exp
};


/** mutation root */
export type mutation_rootupdateProductVariantsArgs = {
  _inc?: Maybe<productVariants_inc_input>,
  _set?: Maybe<productVariants_set_input>,
  where: productVariants_bool_exp
};


/** mutation root */
export type mutation_rootupdateProductsArgs = {
  _append?: Maybe<products_append_input>,
  _delete_at_path?: Maybe<products_delete_at_path_input>,
  _delete_elem?: Maybe<products_delete_elem_input>,
  _delete_key?: Maybe<products_delete_key_input>,
  _inc?: Maybe<products_inc_input>,
  _prepend?: Maybe<products_prepend_input>,
  _set?: Maybe<products_set_input>,
  where: products_bool_exp
};


/** mutation root */
export type mutation_rootupdateShopifyAccountsArgs = {
  _inc?: Maybe<shopifyAccounts_inc_input>,
  _set?: Maybe<shopifyAccounts_set_input>,
  where: shopifyAccounts_bool_exp
};


/** mutation root */
export type mutation_rootupdateShopsArgs = {
  _inc?: Maybe<shops_inc_input>,
  _set?: Maybe<shops_set_input>,
  where: shops_bool_exp
};


/** mutation root */
export type mutation_rootupdate_videosArgs = {
  _inc?: Maybe<videos_inc_input>,
  _set?: Maybe<videos_set_input>,
  where: videos_bool_exp
};


/** mutation root */
export type mutation_rootupdate_x_cache_shopify_productVariantsArgs = {
  _append?: Maybe<x_cache_shopify_productVariants_append_input>,
  _delete_at_path?: Maybe<x_cache_shopify_productVariants_delete_at_path_input>,
  _delete_elem?: Maybe<x_cache_shopify_productVariants_delete_elem_input>,
  _delete_key?: Maybe<x_cache_shopify_productVariants_delete_key_input>,
  _inc?: Maybe<x_cache_shopify_productVariants_inc_input>,
  _prepend?: Maybe<x_cache_shopify_productVariants_prepend_input>,
  _set?: Maybe<x_cache_shopify_productVariants_set_input>,
  where: x_cache_shopify_productVariants_bool_exp
};


/** mutation root */
export type mutation_rootupdate_x_cache_shopify_productsArgs = {
  _append?: Maybe<x_cache_shopify_products_append_input>,
  _delete_at_path?: Maybe<x_cache_shopify_products_delete_at_path_input>,
  _delete_elem?: Maybe<x_cache_shopify_products_delete_elem_input>,
  _delete_key?: Maybe<x_cache_shopify_products_delete_key_input>,
  _prepend?: Maybe<x_cache_shopify_products_prepend_input>,
  _set?: Maybe<x_cache_shopify_products_set_input>,
  where: x_cache_shopify_products_bool_exp
};


/** mutation root */
export type mutation_rootupdate_x_queue_shopify_fetchProductVariantsArgs = {
  _inc?: Maybe<x_queue_shopify_fetchProductVariants_inc_input>,
  _set?: Maybe<x_queue_shopify_fetchProductVariants_set_input>,
  where: x_queue_shopify_fetchProductVariants_bool_exp
};


/** mutation root */
export type mutation_rootupdate_x_queue_shopify_fetchProductsArgs = {
  _inc?: Maybe<x_queue_shopify_fetchProducts_inc_input>,
  _set?: Maybe<x_queue_shopify_fetchProducts_set_input>,
  where: x_queue_shopify_fetchProducts_bool_exp
};


/** mutation root */
export type mutation_rootupdate_x_queue_shopify_saveToPlatformArgs = {
  _append?: Maybe<x_queue_shopify_saveToPlatform_append_input>,
  _delete_at_path?: Maybe<x_queue_shopify_saveToPlatform_delete_at_path_input>,
  _delete_elem?: Maybe<x_queue_shopify_saveToPlatform_delete_elem_input>,
  _delete_key?: Maybe<x_queue_shopify_saveToPlatform_delete_key_input>,
  _inc?: Maybe<x_queue_shopify_saveToPlatform_inc_input>,
  _prepend?: Maybe<x_queue_shopify_saveToPlatform_prepend_input>,
  _set?: Maybe<x_queue_shopify_saveToPlatform_set_input>,
  where: x_queue_shopify_saveToPlatform_bool_exp
};


/** mutation root */
export type mutation_rootupdate_x_queue_shopify_transformToPlatformArgs = {
  _inc?: Maybe<x_queue_shopify_transformToPlatform_inc_input>,
  _set?: Maybe<x_queue_shopify_transformToPlatform_set_input>,
  where: x_queue_shopify_transformToPlatform_bool_exp
};


/** mutation root */
export type mutation_rootupdate_x_standalone_event_triggersArgs = {
  _inc?: Maybe<x_standalone_event_triggers_inc_input>,
  _set?: Maybe<x_standalone_event_triggers_set_input>,
  where: x_standalone_event_triggers_bool_exp
};

export type MutationResponse = {
   __typename?: 'MutationResponse',
  affectedRows: Scalars['Int'],
};

/** columns and relationships of "optionValueImages" */
export type optionValueImages = {
   __typename?: 'optionValueImages',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregated selection of "optionValueImages" */
export type optionValueImages_aggregate = {
   __typename?: 'optionValueImages_aggregate',
  aggregate?: Maybe<optionValueImages_aggregate_fields>,
  nodes: Array<optionValueImages>,
};

/** aggregate fields of "optionValueImages" */
export type optionValueImages_aggregate_fields = {
   __typename?: 'optionValueImages_aggregate_fields',
  avg?: Maybe<optionValueImages_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<optionValueImages_max_fields>,
  min?: Maybe<optionValueImages_min_fields>,
  stddev?: Maybe<optionValueImages_stddev_fields>,
  stddev_pop?: Maybe<optionValueImages_stddev_pop_fields>,
  stddev_samp?: Maybe<optionValueImages_stddev_samp_fields>,
  sum?: Maybe<optionValueImages_sum_fields>,
  var_pop?: Maybe<optionValueImages_var_pop_fields>,
  var_samp?: Maybe<optionValueImages_var_samp_fields>,
  variance?: Maybe<optionValueImages_variance_fields>,
};


/** aggregate fields of "optionValueImages" */
export type optionValueImages_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<optionValueImages_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "optionValueImages" */
export type optionValueImages_aggregate_order_by = {
  avg?: Maybe<optionValueImages_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<optionValueImages_max_order_by>,
  min?: Maybe<optionValueImages_min_order_by>,
  stddev?: Maybe<optionValueImages_stddev_order_by>,
  stddev_pop?: Maybe<optionValueImages_stddev_pop_order_by>,
  stddev_samp?: Maybe<optionValueImages_stddev_samp_order_by>,
  sum?: Maybe<optionValueImages_sum_order_by>,
  var_pop?: Maybe<optionValueImages_var_pop_order_by>,
  var_samp?: Maybe<optionValueImages_var_samp_order_by>,
  variance?: Maybe<optionValueImages_variance_order_by>,
};

/** aggregate avg on columns */
export type optionValueImages_avg_fields = {
   __typename?: 'optionValueImages_avg_fields',
  id?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "optionValueImages" */
export type optionValueImages_avg_order_by = {
  id?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "optionValueImages". All fields are combined with a logical 'AND'. */
export type optionValueImages_bool_exp = {
  _and?: Maybe<Array<Maybe<optionValueImages_bool_exp>>>,
  _not?: Maybe<optionValueImages_bool_exp>,
  _or?: Maybe<Array<Maybe<optionValueImages_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  productOptionValueId?: Maybe<bigint_comparison_exp>,
  src?: Maybe<String_comparison_exp>,
  thumbnailSrc?: Maybe<String_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
};

/** aggregate max on columns */
export type optionValueImages_max_fields = {
   __typename?: 'optionValueImages_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "optionValueImages" */
export type optionValueImages_max_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type optionValueImages_min_fields = {
   __typename?: 'optionValueImages_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "optionValueImages" */
export type optionValueImages_min_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** ordering options when selecting data from "optionValueImages" */
export type optionValueImages_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** select columns of table "optionValueImages" */
export enum optionValueImages_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  id = 'id',
  /** column name */
  productOptionValueId = 'productOptionValueId',
  /** column name */
  src = 'src',
  /** column name */
  thumbnailSrc = 'thumbnailSrc',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type optionValueImages_stddev_fields = {
   __typename?: 'optionValueImages_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "optionValueImages" */
export type optionValueImages_stddev_order_by = {
  id?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type optionValueImages_stddev_pop_fields = {
   __typename?: 'optionValueImages_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "optionValueImages" */
export type optionValueImages_stddev_pop_order_by = {
  id?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type optionValueImages_stddev_samp_fields = {
   __typename?: 'optionValueImages_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "optionValueImages" */
export type optionValueImages_stddev_samp_order_by = {
  id?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type optionValueImages_sum_fields = {
   __typename?: 'optionValueImages_sum_fields',
  id?: Maybe<Scalars['bigint']>,
  productOptionValueId?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "optionValueImages" */
export type optionValueImages_sum_order_by = {
  id?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** aggregate var_pop on columns */
export type optionValueImages_var_pop_fields = {
   __typename?: 'optionValueImages_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "optionValueImages" */
export type optionValueImages_var_pop_order_by = {
  id?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type optionValueImages_var_samp_fields = {
   __typename?: 'optionValueImages_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "optionValueImages" */
export type optionValueImages_var_samp_order_by = {
  id?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type optionValueImages_variance_fields = {
   __typename?: 'optionValueImages_variance_fields',
  id?: Maybe<Scalars['Float']>,
  productOptionValueId?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "optionValueImages" */
export type optionValueImages_variance_order_by = {
  id?: Maybe<order_by>,
  productOptionValueId?: Maybe<order_by>,
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

/** columns and relationships of "productImages" */
export type productImages = {
   __typename?: 'productImages',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  productId?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregated selection of "productImages" */
export type productImages_aggregate = {
   __typename?: 'productImages_aggregate',
  aggregate?: Maybe<productImages_aggregate_fields>,
  nodes: Array<productImages>,
};

/** aggregate fields of "productImages" */
export type productImages_aggregate_fields = {
   __typename?: 'productImages_aggregate_fields',
  avg?: Maybe<productImages_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<productImages_max_fields>,
  min?: Maybe<productImages_min_fields>,
  stddev?: Maybe<productImages_stddev_fields>,
  stddev_pop?: Maybe<productImages_stddev_pop_fields>,
  stddev_samp?: Maybe<productImages_stddev_samp_fields>,
  sum?: Maybe<productImages_sum_fields>,
  var_pop?: Maybe<productImages_var_pop_fields>,
  var_samp?: Maybe<productImages_var_samp_fields>,
  variance?: Maybe<productImages_variance_fields>,
};


/** aggregate fields of "productImages" */
export type productImages_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<productImages_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "productImages" */
export type productImages_aggregate_order_by = {
  avg?: Maybe<productImages_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<productImages_max_order_by>,
  min?: Maybe<productImages_min_order_by>,
  stddev?: Maybe<productImages_stddev_order_by>,
  stddev_pop?: Maybe<productImages_stddev_pop_order_by>,
  stddev_samp?: Maybe<productImages_stddev_samp_order_by>,
  sum?: Maybe<productImages_sum_order_by>,
  var_pop?: Maybe<productImages_var_pop_order_by>,
  var_samp?: Maybe<productImages_var_samp_order_by>,
  variance?: Maybe<productImages_variance_order_by>,
};

/** aggregate avg on columns */
export type productImages_avg_fields = {
   __typename?: 'productImages_avg_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "productImages" */
export type productImages_avg_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "productImages". All fields are combined with a logical 'AND'. */
export type productImages_bool_exp = {
  _and?: Maybe<Array<Maybe<productImages_bool_exp>>>,
  _not?: Maybe<productImages_bool_exp>,
  _or?: Maybe<Array<Maybe<productImages_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  productId?: Maybe<bigint_comparison_exp>,
  src?: Maybe<String_comparison_exp>,
  thumbnailSrc?: Maybe<String_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
};

/** aggregate max on columns */
export type productImages_max_fields = {
   __typename?: 'productImages_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  productId?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "productImages" */
export type productImages_max_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type productImages_min_fields = {
   __typename?: 'productImages_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  productId?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "productImages" */
export type productImages_min_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** ordering options when selecting data from "productImages" */
export type productImages_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** select columns of table "productImages" */
export enum productImages_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  id = 'id',
  /** column name */
  productId = 'productId',
  /** column name */
  src = 'src',
  /** column name */
  thumbnailSrc = 'thumbnailSrc',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type productImages_stddev_fields = {
   __typename?: 'productImages_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "productImages" */
export type productImages_stddev_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type productImages_stddev_pop_fields = {
   __typename?: 'productImages_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "productImages" */
export type productImages_stddev_pop_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type productImages_stddev_samp_fields = {
   __typename?: 'productImages_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "productImages" */
export type productImages_stddev_samp_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type productImages_sum_fields = {
   __typename?: 'productImages_sum_fields',
  id?: Maybe<Scalars['bigint']>,
  productId?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "productImages" */
export type productImages_sum_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate var_pop on columns */
export type productImages_var_pop_fields = {
   __typename?: 'productImages_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "productImages" */
export type productImages_var_pop_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type productImages_var_samp_fields = {
   __typename?: 'productImages_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "productImages" */
export type productImages_var_samp_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type productImages_variance_fields = {
   __typename?: 'productImages_variance_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "productImages" */
export type productImages_variance_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** columns and relationships of "productOptions" */
export type productOptions = {
   __typename?: 'productOptions',
  createdAt: Scalars['timestamptz'],
  foreignId?: Maybe<Scalars['String']>,
  id: Scalars['bigint'],
  position: Scalars['Int'],
  /** An object relationship */
  product?: Maybe<products>,
  productId?: Maybe<Scalars['bigint']>,
  title: Scalars['String'],
  updatedAt: Scalars['timestamptz'],
  /** An array relationship */
  values: Array<productOptionValues>,
  /** An aggregated array relationship */
  values_aggregate: productOptionValues_aggregate,
};


/** columns and relationships of "productOptions" */
export type productOptionsvaluesArgs = {
  distinct_on?: Maybe<Array<productOptionValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptionValues_order_by>>,
  where?: Maybe<productOptionValues_bool_exp>
};


/** columns and relationships of "productOptions" */
export type productOptionsvalues_aggregateArgs = {
  distinct_on?: Maybe<Array<productOptionValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptionValues_order_by>>,
  where?: Maybe<productOptionValues_bool_exp>
};

/** aggregated selection of "productOptions" */
export type productOptions_aggregate = {
   __typename?: 'productOptions_aggregate',
  aggregate?: Maybe<productOptions_aggregate_fields>,
  nodes: Array<productOptions>,
};

/** aggregate fields of "productOptions" */
export type productOptions_aggregate_fields = {
   __typename?: 'productOptions_aggregate_fields',
  avg?: Maybe<productOptions_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<productOptions_max_fields>,
  min?: Maybe<productOptions_min_fields>,
  stddev?: Maybe<productOptions_stddev_fields>,
  stddev_pop?: Maybe<productOptions_stddev_pop_fields>,
  stddev_samp?: Maybe<productOptions_stddev_samp_fields>,
  sum?: Maybe<productOptions_sum_fields>,
  var_pop?: Maybe<productOptions_var_pop_fields>,
  var_samp?: Maybe<productOptions_var_samp_fields>,
  variance?: Maybe<productOptions_variance_fields>,
};


/** aggregate fields of "productOptions" */
export type productOptions_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<productOptions_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "productOptions" */
export type productOptions_aggregate_order_by = {
  avg?: Maybe<productOptions_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<productOptions_max_order_by>,
  min?: Maybe<productOptions_min_order_by>,
  stddev?: Maybe<productOptions_stddev_order_by>,
  stddev_pop?: Maybe<productOptions_stddev_pop_order_by>,
  stddev_samp?: Maybe<productOptions_stddev_samp_order_by>,
  sum?: Maybe<productOptions_sum_order_by>,
  var_pop?: Maybe<productOptions_var_pop_order_by>,
  var_samp?: Maybe<productOptions_var_samp_order_by>,
  variance?: Maybe<productOptions_variance_order_by>,
};

/** input type for inserting array relation for remote table "productOptions" */
export type productOptions_arr_rel_insert_input = {
  data: Array<productOptions_insert_input>,
  on_conflict?: Maybe<productOptions_on_conflict>,
};

/** aggregate avg on columns */
export type productOptions_avg_fields = {
   __typename?: 'productOptions_avg_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "productOptions" */
export type productOptions_avg_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "productOptions". All fields are combined with a logical 'AND'. */
export type productOptions_bool_exp = {
  _and?: Maybe<Array<Maybe<productOptions_bool_exp>>>,
  _not?: Maybe<productOptions_bool_exp>,
  _or?: Maybe<Array<Maybe<productOptions_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  foreignId?: Maybe<String_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  position?: Maybe<Int_comparison_exp>,
  product?: Maybe<products_bool_exp>,
  productId?: Maybe<bigint_comparison_exp>,
  title?: Maybe<String_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
  values?: Maybe<productOptionValues_bool_exp>,
};

/** unique or primary key constraints on table "productOptions" */
export enum productOptions_constraint {
  /** unique or primary key constraint */
  productOptions_foreignId_key = 'productOptions_foreignId_key',
  /** unique or primary key constraint */
  productOptions_pkey = 'productOptions_pkey',
  /** unique or primary key constraint */
  productOptions_position_productId_key = 'productOptions_position_productId_key'
}

/** input type for incrementing integer columne in table "productOptions" */
export type productOptions_inc_input = {
  id?: Maybe<Scalars['bigint']>,
  position?: Maybe<Scalars['Int']>,
  productId?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "productOptions" */
export type productOptions_insert_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  foreignId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  position?: Maybe<Scalars['Int']>,
  product?: Maybe<products_obj_rel_insert_input>,
  productId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
  values?: Maybe<productOptionValues_arr_rel_insert_input>,
};

/** aggregate max on columns */
export type productOptions_max_fields = {
   __typename?: 'productOptions_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  foreignId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  position?: Maybe<Scalars['Int']>,
  productId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "productOptions" */
export type productOptions_max_order_by = {
  createdAt?: Maybe<order_by>,
  foreignId?: Maybe<order_by>,
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  title?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type productOptions_min_fields = {
   __typename?: 'productOptions_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  foreignId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  position?: Maybe<Scalars['Int']>,
  productId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "productOptions" */
export type productOptions_min_order_by = {
  createdAt?: Maybe<order_by>,
  foreignId?: Maybe<order_by>,
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  title?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** response of any mutation on the table "productOptions" */
export type productOptions_mutation_response = {
   __typename?: 'productOptions_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<productOptions>,
};

/** input type for inserting object relation for remote table "productOptions" */
export type productOptions_obj_rel_insert_input = {
  data: productOptions_insert_input,
  on_conflict?: Maybe<productOptions_on_conflict>,
};

/** on conflict condition type for table "productOptions" */
export type productOptions_on_conflict = {
  constraint: productOptions_constraint,
  update_columns: Array<productOptions_update_column>,
  where?: Maybe<productOptions_bool_exp>,
};

/** ordering options when selecting data from "productOptions" */
export type productOptions_order_by = {
  createdAt?: Maybe<order_by>,
  foreignId?: Maybe<order_by>,
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  product?: Maybe<products_order_by>,
  productId?: Maybe<order_by>,
  title?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
  values_aggregate?: Maybe<productOptionValues_aggregate_order_by>,
};

/** select columns of table "productOptions" */
export enum productOptions_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  foreignId = 'foreignId',
  /** column name */
  id = 'id',
  /** column name */
  position = 'position',
  /** column name */
  productId = 'productId',
  /** column name */
  title = 'title',
  /** column name */
  updatedAt = 'updatedAt'
}

/** input type for updating data in table "productOptions" */
export type productOptions_set_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  foreignId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  position?: Maybe<Scalars['Int']>,
  productId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type productOptions_stddev_fields = {
   __typename?: 'productOptions_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "productOptions" */
export type productOptions_stddev_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type productOptions_stddev_pop_fields = {
   __typename?: 'productOptions_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "productOptions" */
export type productOptions_stddev_pop_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type productOptions_stddev_samp_fields = {
   __typename?: 'productOptions_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "productOptions" */
export type productOptions_stddev_samp_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type productOptions_sum_fields = {
   __typename?: 'productOptions_sum_fields',
  id?: Maybe<Scalars['bigint']>,
  position?: Maybe<Scalars['Int']>,
  productId?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "productOptions" */
export type productOptions_sum_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** update columns of table "productOptions" */
export enum productOptions_update_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  foreignId = 'foreignId',
  /** column name */
  id = 'id',
  /** column name */
  position = 'position',
  /** column name */
  productId = 'productId',
  /** column name */
  title = 'title',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type productOptions_var_pop_fields = {
   __typename?: 'productOptions_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "productOptions" */
export type productOptions_var_pop_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type productOptions_var_samp_fields = {
   __typename?: 'productOptions_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "productOptions" */
export type productOptions_var_samp_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type productOptions_variance_fields = {
   __typename?: 'productOptions_variance_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "productOptions" */
export type productOptions_variance_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** columns and relationships of "productOptionValues" */
export type productOptionValues = {
   __typename?: 'productOptionValues',
  createdAt: Scalars['timestamptz'],
  id: Scalars['bigint'],
  /** An array relationship */
  images: Array<joinOptionValueImages>,
  /** An aggregated array relationship */
  images_aggregate: joinOptionValueImages_aggregate,
  /** An array relationship */
  joinOptionValueImages: Array<joinOptionValueImages>,
  /** An aggregated array relationship */
  joinOptionValueImages_aggregate: joinOptionValueImages_aggregate,
  /** An object relationship */
  option?: Maybe<productOptions>,
  position: Scalars['Int'],
  productOptionId?: Maybe<Scalars['bigint']>,
  /** An object relationship */
  swatch?: Maybe<images>,
  swatch_id?: Maybe<Scalars['bigint']>,
  title: Scalars['String'],
  updatedAt: Scalars['timestamptz'],
  /** An array relationship */
  variantOptionValues: Array<joinVariantValues>,
  /** An aggregated array relationship */
  variantOptionValues_aggregate: joinVariantValues_aggregate,
};


/** columns and relationships of "productOptionValues" */
export type productOptionValuesimagesArgs = {
  distinct_on?: Maybe<Array<joinOptionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinOptionValueImages_order_by>>,
  where?: Maybe<joinOptionValueImages_bool_exp>
};


/** columns and relationships of "productOptionValues" */
export type productOptionValuesimages_aggregateArgs = {
  distinct_on?: Maybe<Array<joinOptionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinOptionValueImages_order_by>>,
  where?: Maybe<joinOptionValueImages_bool_exp>
};


/** columns and relationships of "productOptionValues" */
export type productOptionValuesjoinOptionValueImagesArgs = {
  distinct_on?: Maybe<Array<joinOptionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinOptionValueImages_order_by>>,
  where?: Maybe<joinOptionValueImages_bool_exp>
};


/** columns and relationships of "productOptionValues" */
export type productOptionValuesjoinOptionValueImages_aggregateArgs = {
  distinct_on?: Maybe<Array<joinOptionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinOptionValueImages_order_by>>,
  where?: Maybe<joinOptionValueImages_bool_exp>
};


/** columns and relationships of "productOptionValues" */
export type productOptionValuesvariantOptionValuesArgs = {
  distinct_on?: Maybe<Array<joinVariantValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantValues_order_by>>,
  where?: Maybe<joinVariantValues_bool_exp>
};


/** columns and relationships of "productOptionValues" */
export type productOptionValuesvariantOptionValues_aggregateArgs = {
  distinct_on?: Maybe<Array<joinVariantValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantValues_order_by>>,
  where?: Maybe<joinVariantValues_bool_exp>
};

/** aggregated selection of "productOptionValues" */
export type productOptionValues_aggregate = {
   __typename?: 'productOptionValues_aggregate',
  aggregate?: Maybe<productOptionValues_aggregate_fields>,
  nodes: Array<productOptionValues>,
};

/** aggregate fields of "productOptionValues" */
export type productOptionValues_aggregate_fields = {
   __typename?: 'productOptionValues_aggregate_fields',
  avg?: Maybe<productOptionValues_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<productOptionValues_max_fields>,
  min?: Maybe<productOptionValues_min_fields>,
  stddev?: Maybe<productOptionValues_stddev_fields>,
  stddev_pop?: Maybe<productOptionValues_stddev_pop_fields>,
  stddev_samp?: Maybe<productOptionValues_stddev_samp_fields>,
  sum?: Maybe<productOptionValues_sum_fields>,
  var_pop?: Maybe<productOptionValues_var_pop_fields>,
  var_samp?: Maybe<productOptionValues_var_samp_fields>,
  variance?: Maybe<productOptionValues_variance_fields>,
};


/** aggregate fields of "productOptionValues" */
export type productOptionValues_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<productOptionValues_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "productOptionValues" */
export type productOptionValues_aggregate_order_by = {
  avg?: Maybe<productOptionValues_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<productOptionValues_max_order_by>,
  min?: Maybe<productOptionValues_min_order_by>,
  stddev?: Maybe<productOptionValues_stddev_order_by>,
  stddev_pop?: Maybe<productOptionValues_stddev_pop_order_by>,
  stddev_samp?: Maybe<productOptionValues_stddev_samp_order_by>,
  sum?: Maybe<productOptionValues_sum_order_by>,
  var_pop?: Maybe<productOptionValues_var_pop_order_by>,
  var_samp?: Maybe<productOptionValues_var_samp_order_by>,
  variance?: Maybe<productOptionValues_variance_order_by>,
};

/** input type for inserting array relation for remote table "productOptionValues" */
export type productOptionValues_arr_rel_insert_input = {
  data: Array<productOptionValues_insert_input>,
  on_conflict?: Maybe<productOptionValues_on_conflict>,
};

/** aggregate avg on columns */
export type productOptionValues_avg_fields = {
   __typename?: 'productOptionValues_avg_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  swatch_id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "productOptionValues" */
export type productOptionValues_avg_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  swatch_id?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "productOptionValues". All fields are combined with a logical 'AND'. */
export type productOptionValues_bool_exp = {
  _and?: Maybe<Array<Maybe<productOptionValues_bool_exp>>>,
  _not?: Maybe<productOptionValues_bool_exp>,
  _or?: Maybe<Array<Maybe<productOptionValues_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  images?: Maybe<joinOptionValueImages_bool_exp>,
  joinOptionValueImages?: Maybe<joinOptionValueImages_bool_exp>,
  option?: Maybe<productOptions_bool_exp>,
  position?: Maybe<Int_comparison_exp>,
  productOptionId?: Maybe<bigint_comparison_exp>,
  swatch?: Maybe<images_bool_exp>,
  swatch_id?: Maybe<bigint_comparison_exp>,
  title?: Maybe<String_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
  variantOptionValues?: Maybe<joinVariantValues_bool_exp>,
};

/** unique or primary key constraints on table "productOptionValues" */
export enum productOptionValues_constraint {
  /** unique or primary key constraint */
  productOptionValues_pkey = 'productOptionValues_pkey',
  /** unique or primary key constraint */
  productOptionValues_position_productOptionId_key = 'productOptionValues_position_productOptionId_key'
}

/** input type for incrementing integer columne in table "productOptionValues" */
export type productOptionValues_inc_input = {
  id?: Maybe<Scalars['bigint']>,
  position?: Maybe<Scalars['Int']>,
  productOptionId?: Maybe<Scalars['bigint']>,
  swatch_id?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "productOptionValues" */
export type productOptionValues_insert_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  images?: Maybe<joinOptionValueImages_arr_rel_insert_input>,
  joinOptionValueImages?: Maybe<joinOptionValueImages_arr_rel_insert_input>,
  option?: Maybe<productOptions_obj_rel_insert_input>,
  position?: Maybe<Scalars['Int']>,
  productOptionId?: Maybe<Scalars['bigint']>,
  swatch?: Maybe<images_obj_rel_insert_input>,
  swatch_id?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
  variantOptionValues?: Maybe<joinVariantValues_arr_rel_insert_input>,
};

/** aggregate max on columns */
export type productOptionValues_max_fields = {
   __typename?: 'productOptionValues_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  position?: Maybe<Scalars['Int']>,
  productOptionId?: Maybe<Scalars['bigint']>,
  swatch_id?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "productOptionValues" */
export type productOptionValues_max_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  swatch_id?: Maybe<order_by>,
  title?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type productOptionValues_min_fields = {
   __typename?: 'productOptionValues_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  position?: Maybe<Scalars['Int']>,
  productOptionId?: Maybe<Scalars['bigint']>,
  swatch_id?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "productOptionValues" */
export type productOptionValues_min_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  swatch_id?: Maybe<order_by>,
  title?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** response of any mutation on the table "productOptionValues" */
export type productOptionValues_mutation_response = {
   __typename?: 'productOptionValues_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<productOptionValues>,
};

/** input type for inserting object relation for remote table "productOptionValues" */
export type productOptionValues_obj_rel_insert_input = {
  data: productOptionValues_insert_input,
  on_conflict?: Maybe<productOptionValues_on_conflict>,
};

/** on conflict condition type for table "productOptionValues" */
export type productOptionValues_on_conflict = {
  constraint: productOptionValues_constraint,
  update_columns: Array<productOptionValues_update_column>,
  where?: Maybe<productOptionValues_bool_exp>,
};

/** ordering options when selecting data from "productOptionValues" */
export type productOptionValues_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  images_aggregate?: Maybe<joinOptionValueImages_aggregate_order_by>,
  joinOptionValueImages_aggregate?: Maybe<joinOptionValueImages_aggregate_order_by>,
  option?: Maybe<productOptions_order_by>,
  position?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  swatch?: Maybe<images_order_by>,
  swatch_id?: Maybe<order_by>,
  title?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
  variantOptionValues_aggregate?: Maybe<joinVariantValues_aggregate_order_by>,
};

/** select columns of table "productOptionValues" */
export enum productOptionValues_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  id = 'id',
  /** column name */
  position = 'position',
  /** column name */
  productOptionId = 'productOptionId',
  /** column name */
  swatch_id = 'swatch_id',
  /** column name */
  title = 'title',
  /** column name */
  updatedAt = 'updatedAt'
}

/** input type for updating data in table "productOptionValues" */
export type productOptionValues_set_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  position?: Maybe<Scalars['Int']>,
  productOptionId?: Maybe<Scalars['bigint']>,
  swatch_id?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type productOptionValues_stddev_fields = {
   __typename?: 'productOptionValues_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  swatch_id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "productOptionValues" */
export type productOptionValues_stddev_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  swatch_id?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type productOptionValues_stddev_pop_fields = {
   __typename?: 'productOptionValues_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  swatch_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "productOptionValues" */
export type productOptionValues_stddev_pop_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  swatch_id?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type productOptionValues_stddev_samp_fields = {
   __typename?: 'productOptionValues_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  swatch_id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "productOptionValues" */
export type productOptionValues_stddev_samp_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  swatch_id?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type productOptionValues_sum_fields = {
   __typename?: 'productOptionValues_sum_fields',
  id?: Maybe<Scalars['bigint']>,
  position?: Maybe<Scalars['Int']>,
  productOptionId?: Maybe<Scalars['bigint']>,
  swatch_id?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "productOptionValues" */
export type productOptionValues_sum_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  swatch_id?: Maybe<order_by>,
};

/** update columns of table "productOptionValues" */
export enum productOptionValues_update_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  id = 'id',
  /** column name */
  position = 'position',
  /** column name */
  productOptionId = 'productOptionId',
  /** column name */
  swatch_id = 'swatch_id',
  /** column name */
  title = 'title',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type productOptionValues_var_pop_fields = {
   __typename?: 'productOptionValues_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  swatch_id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "productOptionValues" */
export type productOptionValues_var_pop_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  swatch_id?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type productOptionValues_var_samp_fields = {
   __typename?: 'productOptionValues_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  swatch_id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "productOptionValues" */
export type productOptionValues_var_samp_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  swatch_id?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type productOptionValues_variance_fields = {
   __typename?: 'productOptionValues_variance_fields',
  id?: Maybe<Scalars['Float']>,
  position?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  swatch_id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "productOptionValues" */
export type productOptionValues_variance_order_by = {
  id?: Maybe<order_by>,
  position?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  swatch_id?: Maybe<order_by>,
};

/** columns and relationships of "products" */
export type products = {
   __typename?: 'products',
  available: Scalars['Boolean'],
  /** A computed field, executes function "product_variants_max_compare_at_price" */
  compareAtPriceMax?: Maybe<Scalars['Int']>,
  /** A computed field, executes function "product_variants_min_compare_at_price" */
  compareAtPriceMin?: Maybe<Scalars['Int']>,
  createdAt: Scalars['timestamptz'],
  description?: Maybe<Scalars['String']>,
  foreignId?: Maybe<Scalars['String']>,
  handle: Scalars['String'],
  id: Scalars['bigint'],
  /** An array relationship */
  images: Array<productImages>,
  /** An aggregated array relationship */
  images_aggregate: productImages_aggregate,
  /** An array relationship */
  joinProductImages: Array<joinProductImages>,
  /** An aggregated array relationship */
  joinProductImages_aggregate: joinProductImages_aggregate,
  /** An array relationship */
  joinProductVideos: Array<joinProductVideos>,
  /** An aggregated array relationship */
  joinProductVideos_aggregate: joinProductVideos_aggregate,
  metadata?: Maybe<Scalars['jsonb']>,
  /** An array relationship */
  options: Array<productOptions>,
  /** An aggregated array relationship */
  options_aggregate: productOptions_aggregate,
  /** A computed field, executes function "product_variants_max_price" */
  priceMax?: Maybe<Scalars['Int']>,
  /** A computed field, executes function "product_variants_min_price" */
  priceMin?: Maybe<Scalars['Int']>,
  /** An object relationship */
  shop?: Maybe<shops>,
  shopId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  updatedAt: Scalars['timestamptz'],
  /** An array relationship */
  variants: Array<productVariants>,
  /** An aggregated array relationship */
  variants_aggregate: productVariants_aggregate,
  /** An array relationship */
  videos: Array<productVideos>,
  /** An aggregated array relationship */
  videos_aggregate: productVideos_aggregate,
};


/** columns and relationships of "products" */
export type productsimagesArgs = {
  distinct_on?: Maybe<Array<productImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productImages_order_by>>,
  where?: Maybe<productImages_bool_exp>
};


/** columns and relationships of "products" */
export type productsimages_aggregateArgs = {
  distinct_on?: Maybe<Array<productImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productImages_order_by>>,
  where?: Maybe<productImages_bool_exp>
};


/** columns and relationships of "products" */
export type productsjoinProductImagesArgs = {
  distinct_on?: Maybe<Array<joinProductImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductImages_order_by>>,
  where?: Maybe<joinProductImages_bool_exp>
};


/** columns and relationships of "products" */
export type productsjoinProductImages_aggregateArgs = {
  distinct_on?: Maybe<Array<joinProductImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductImages_order_by>>,
  where?: Maybe<joinProductImages_bool_exp>
};


/** columns and relationships of "products" */
export type productsjoinProductVideosArgs = {
  distinct_on?: Maybe<Array<joinProductVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductVideos_order_by>>,
  where?: Maybe<joinProductVideos_bool_exp>
};


/** columns and relationships of "products" */
export type productsjoinProductVideos_aggregateArgs = {
  distinct_on?: Maybe<Array<joinProductVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductVideos_order_by>>,
  where?: Maybe<joinProductVideos_bool_exp>
};


/** columns and relationships of "products" */
export type productsmetadataArgs = {
  path?: Maybe<Scalars['String']>
};


/** columns and relationships of "products" */
export type productsoptionsArgs = {
  distinct_on?: Maybe<Array<productOptions_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptions_order_by>>,
  where?: Maybe<productOptions_bool_exp>
};


/** columns and relationships of "products" */
export type productsoptions_aggregateArgs = {
  distinct_on?: Maybe<Array<productOptions_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptions_order_by>>,
  where?: Maybe<productOptions_bool_exp>
};


/** columns and relationships of "products" */
export type productsvariantsArgs = {
  distinct_on?: Maybe<Array<productVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productVariants_order_by>>,
  where?: Maybe<productVariants_bool_exp>
};


/** columns and relationships of "products" */
export type productsvariants_aggregateArgs = {
  distinct_on?: Maybe<Array<productVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productVariants_order_by>>,
  where?: Maybe<productVariants_bool_exp>
};


/** columns and relationships of "products" */
export type productsvideosArgs = {
  distinct_on?: Maybe<Array<productVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productVideos_order_by>>,
  where?: Maybe<productVideos_bool_exp>
};


/** columns and relationships of "products" */
export type productsvideos_aggregateArgs = {
  distinct_on?: Maybe<Array<productVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productVideos_order_by>>,
  where?: Maybe<productVideos_bool_exp>
};

/** aggregated selection of "products" */
export type products_aggregate = {
   __typename?: 'products_aggregate',
  aggregate?: Maybe<products_aggregate_fields>,
  nodes: Array<products>,
};

/** aggregate fields of "products" */
export type products_aggregate_fields = {
   __typename?: 'products_aggregate_fields',
  avg?: Maybe<products_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<products_max_fields>,
  min?: Maybe<products_min_fields>,
  stddev?: Maybe<products_stddev_fields>,
  stddev_pop?: Maybe<products_stddev_pop_fields>,
  stddev_samp?: Maybe<products_stddev_samp_fields>,
  sum?: Maybe<products_sum_fields>,
  var_pop?: Maybe<products_var_pop_fields>,
  var_samp?: Maybe<products_var_samp_fields>,
  variance?: Maybe<products_variance_fields>,
};


/** aggregate fields of "products" */
export type products_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<products_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "products" */
export type products_aggregate_order_by = {
  avg?: Maybe<products_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<products_max_order_by>,
  min?: Maybe<products_min_order_by>,
  stddev?: Maybe<products_stddev_order_by>,
  stddev_pop?: Maybe<products_stddev_pop_order_by>,
  stddev_samp?: Maybe<products_stddev_samp_order_by>,
  sum?: Maybe<products_sum_order_by>,
  var_pop?: Maybe<products_var_pop_order_by>,
  var_samp?: Maybe<products_var_samp_order_by>,
  variance?: Maybe<products_variance_order_by>,
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type products_append_input = {
  metadata?: Maybe<Scalars['jsonb']>,
};

/** input type for inserting array relation for remote table "products" */
export type products_arr_rel_insert_input = {
  data: Array<products_insert_input>,
  on_conflict?: Maybe<products_on_conflict>,
};

/** aggregate avg on columns */
export type products_avg_fields = {
   __typename?: 'products_avg_fields',
  id?: Maybe<Scalars['Float']>,
  shopId?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "products" */
export type products_avg_order_by = {
  id?: Maybe<order_by>,
  shopId?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "products". All fields are combined with a logical 'AND'. */
export type products_bool_exp = {
  _and?: Maybe<Array<Maybe<products_bool_exp>>>,
  _not?: Maybe<products_bool_exp>,
  _or?: Maybe<Array<Maybe<products_bool_exp>>>,
  available?: Maybe<Boolean_comparison_exp>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  description?: Maybe<String_comparison_exp>,
  foreignId?: Maybe<String_comparison_exp>,
  handle?: Maybe<String_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  images?: Maybe<productImages_bool_exp>,
  joinProductImages?: Maybe<joinProductImages_bool_exp>,
  joinProductVideos?: Maybe<joinProductVideos_bool_exp>,
  metadata?: Maybe<jsonb_comparison_exp>,
  options?: Maybe<productOptions_bool_exp>,
  shop?: Maybe<shops_bool_exp>,
  shopId?: Maybe<bigint_comparison_exp>,
  title?: Maybe<String_comparison_exp>,
  type?: Maybe<String_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
  variants?: Maybe<productVariants_bool_exp>,
  videos?: Maybe<productVideos_bool_exp>,
};

/** unique or primary key constraints on table "products" */
export enum products_constraint {
  /** unique or primary key constraint */
  products_foreignId_key = 'products_foreignId_key',
  /** unique or primary key constraint */
  products_handle_key = 'products_handle_key',
  /** unique or primary key constraint */
  products_id_key = 'products_id_key',
  /** unique or primary key constraint */
  products_pkey = 'products_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type products_delete_at_path_input = {
  metadata?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** 
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type products_delete_elem_input = {
  metadata?: Maybe<Scalars['Int']>,
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type products_delete_key_input = {
  metadata?: Maybe<Scalars['String']>,
};

/** input type for incrementing integer columne in table "products" */
export type products_inc_input = {
  id?: Maybe<Scalars['bigint']>,
  shopId?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "products" */
export type products_insert_input = {
  available?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  foreignId?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  joinProductImages?: Maybe<joinProductImages_arr_rel_insert_input>,
  joinProductVideos?: Maybe<joinProductVideos_arr_rel_insert_input>,
  metadata?: Maybe<Scalars['jsonb']>,
  options?: Maybe<productOptions_arr_rel_insert_input>,
  shop?: Maybe<shops_obj_rel_insert_input>,
  shopId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
  variants?: Maybe<productVariants_arr_rel_insert_input>,
};

/** aggregate max on columns */
export type products_max_fields = {
   __typename?: 'products_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  foreignId?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  shopId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "products" */
export type products_max_order_by = {
  createdAt?: Maybe<order_by>,
  description?: Maybe<order_by>,
  foreignId?: Maybe<order_by>,
  handle?: Maybe<order_by>,
  id?: Maybe<order_by>,
  shopId?: Maybe<order_by>,
  title?: Maybe<order_by>,
  type?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type products_min_fields = {
   __typename?: 'products_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  foreignId?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  shopId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "products" */
export type products_min_order_by = {
  createdAt?: Maybe<order_by>,
  description?: Maybe<order_by>,
  foreignId?: Maybe<order_by>,
  handle?: Maybe<order_by>,
  id?: Maybe<order_by>,
  shopId?: Maybe<order_by>,
  title?: Maybe<order_by>,
  type?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** response of any mutation on the table "products" */
export type products_mutation_response = {
   __typename?: 'products_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<products>,
};

/** input type for inserting object relation for remote table "products" */
export type products_obj_rel_insert_input = {
  data: products_insert_input,
  on_conflict?: Maybe<products_on_conflict>,
};

/** on conflict condition type for table "products" */
export type products_on_conflict = {
  constraint: products_constraint,
  update_columns: Array<products_update_column>,
  where?: Maybe<products_bool_exp>,
};

/** ordering options when selecting data from "products" */
export type products_order_by = {
  available?: Maybe<order_by>,
  createdAt?: Maybe<order_by>,
  description?: Maybe<order_by>,
  foreignId?: Maybe<order_by>,
  handle?: Maybe<order_by>,
  id?: Maybe<order_by>,
  images_aggregate?: Maybe<productImages_aggregate_order_by>,
  joinProductImages_aggregate?: Maybe<joinProductImages_aggregate_order_by>,
  joinProductVideos_aggregate?: Maybe<joinProductVideos_aggregate_order_by>,
  metadata?: Maybe<order_by>,
  options_aggregate?: Maybe<productOptions_aggregate_order_by>,
  shop?: Maybe<shops_order_by>,
  shopId?: Maybe<order_by>,
  title?: Maybe<order_by>,
  type?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
  variants_aggregate?: Maybe<productVariants_aggregate_order_by>,
  videos_aggregate?: Maybe<productVideos_aggregate_order_by>,
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type products_prepend_input = {
  metadata?: Maybe<Scalars['jsonb']>,
};

/** select columns of table "products" */
export enum products_select_column {
  /** column name */
  available = 'available',
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  description = 'description',
  /** column name */
  foreignId = 'foreignId',
  /** column name */
  handle = 'handle',
  /** column name */
  id = 'id',
  /** column name */
  metadata = 'metadata',
  /** column name */
  shopId = 'shopId',
  /** column name */
  title = 'title',
  /** column name */
  type = 'type',
  /** column name */
  updatedAt = 'updatedAt'
}

/** input type for updating data in table "products" */
export type products_set_input = {
  available?: Maybe<Scalars['Boolean']>,
  createdAt?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  foreignId?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  metadata?: Maybe<Scalars['jsonb']>,
  shopId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  type?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type products_stddev_fields = {
   __typename?: 'products_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  shopId?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "products" */
export type products_stddev_order_by = {
  id?: Maybe<order_by>,
  shopId?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type products_stddev_pop_fields = {
   __typename?: 'products_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  shopId?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "products" */
export type products_stddev_pop_order_by = {
  id?: Maybe<order_by>,
  shopId?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type products_stddev_samp_fields = {
   __typename?: 'products_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  shopId?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "products" */
export type products_stddev_samp_order_by = {
  id?: Maybe<order_by>,
  shopId?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type products_sum_fields = {
   __typename?: 'products_sum_fields',
  id?: Maybe<Scalars['bigint']>,
  shopId?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "products" */
export type products_sum_order_by = {
  id?: Maybe<order_by>,
  shopId?: Maybe<order_by>,
};

/** update columns of table "products" */
export enum products_update_column {
  /** column name */
  available = 'available',
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  description = 'description',
  /** column name */
  foreignId = 'foreignId',
  /** column name */
  handle = 'handle',
  /** column name */
  id = 'id',
  /** column name */
  metadata = 'metadata',
  /** column name */
  shopId = 'shopId',
  /** column name */
  title = 'title',
  /** column name */
  type = 'type',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type products_var_pop_fields = {
   __typename?: 'products_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  shopId?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "products" */
export type products_var_pop_order_by = {
  id?: Maybe<order_by>,
  shopId?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type products_var_samp_fields = {
   __typename?: 'products_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  shopId?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "products" */
export type products_var_samp_order_by = {
  id?: Maybe<order_by>,
  shopId?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type products_variance_fields = {
   __typename?: 'products_variance_fields',
  id?: Maybe<Scalars['Float']>,
  shopId?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "products" */
export type products_variance_order_by = {
  id?: Maybe<order_by>,
  shopId?: Maybe<order_by>,
};

/** columns and relationships of "productVariants" */
export type productVariants = {
   __typename?: 'productVariants',
  available: Scalars['Boolean'],
  compareAtPrice?: Maybe<Scalars['Int']>,
  createdAt: Scalars['timestamptz'],
  foreignId?: Maybe<Scalars['String']>,
  id: Scalars['bigint'],
  /** An array relationship */
  images: Array<joinVariantImages>,
  /** An aggregated array relationship */
  images_aggregate: joinVariantImages_aggregate,
  inventory?: Maybe<Scalars['Int']>,
  /** An array relationship */
  joinVariantImages: Array<joinVariantImages>,
  /** An aggregated array relationship */
  joinVariantImages_aggregate: joinVariantImages_aggregate,
  /** An array relationship */
  joinVariantOptionValues: Array<joinVariantValues>,
  /** An aggregated array relationship */
  joinVariantOptionValues_aggregate: joinVariantValues_aggregate,
  price: Scalars['Int'],
  /** An object relationship */
  product?: Maybe<products>,
  productId?: Maybe<Scalars['bigint']>,
  /** An array relationship */
  selectedOptions: Array<selectedOptions>,
  /** An aggregated array relationship */
  selectedOptions_aggregate: selectedOptions_aggregate,
  title?: Maybe<Scalars['String']>,
  updatedAt: Scalars['timestamptz'],
};


/** columns and relationships of "productVariants" */
export type productVariantsimagesArgs = {
  distinct_on?: Maybe<Array<joinVariantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantImages_order_by>>,
  where?: Maybe<joinVariantImages_bool_exp>
};


/** columns and relationships of "productVariants" */
export type productVariantsimages_aggregateArgs = {
  distinct_on?: Maybe<Array<joinVariantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantImages_order_by>>,
  where?: Maybe<joinVariantImages_bool_exp>
};


/** columns and relationships of "productVariants" */
export type productVariantsjoinVariantImagesArgs = {
  distinct_on?: Maybe<Array<joinVariantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantImages_order_by>>,
  where?: Maybe<joinVariantImages_bool_exp>
};


/** columns and relationships of "productVariants" */
export type productVariantsjoinVariantImages_aggregateArgs = {
  distinct_on?: Maybe<Array<joinVariantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantImages_order_by>>,
  where?: Maybe<joinVariantImages_bool_exp>
};


/** columns and relationships of "productVariants" */
export type productVariantsjoinVariantOptionValuesArgs = {
  distinct_on?: Maybe<Array<joinVariantValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantValues_order_by>>,
  where?: Maybe<joinVariantValues_bool_exp>
};


/** columns and relationships of "productVariants" */
export type productVariantsjoinVariantOptionValues_aggregateArgs = {
  distinct_on?: Maybe<Array<joinVariantValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantValues_order_by>>,
  where?: Maybe<joinVariantValues_bool_exp>
};


/** columns and relationships of "productVariants" */
export type productVariantsselectedOptionsArgs = {
  distinct_on?: Maybe<Array<selectedOptions_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<selectedOptions_order_by>>,
  where?: Maybe<selectedOptions_bool_exp>
};


/** columns and relationships of "productVariants" */
export type productVariantsselectedOptions_aggregateArgs = {
  distinct_on?: Maybe<Array<selectedOptions_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<selectedOptions_order_by>>,
  where?: Maybe<selectedOptions_bool_exp>
};

/** aggregated selection of "productVariants" */
export type productVariants_aggregate = {
   __typename?: 'productVariants_aggregate',
  aggregate?: Maybe<productVariants_aggregate_fields>,
  nodes: Array<productVariants>,
};

/** aggregate fields of "productVariants" */
export type productVariants_aggregate_fields = {
   __typename?: 'productVariants_aggregate_fields',
  avg?: Maybe<productVariants_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<productVariants_max_fields>,
  min?: Maybe<productVariants_min_fields>,
  stddev?: Maybe<productVariants_stddev_fields>,
  stddev_pop?: Maybe<productVariants_stddev_pop_fields>,
  stddev_samp?: Maybe<productVariants_stddev_samp_fields>,
  sum?: Maybe<productVariants_sum_fields>,
  var_pop?: Maybe<productVariants_var_pop_fields>,
  var_samp?: Maybe<productVariants_var_samp_fields>,
  variance?: Maybe<productVariants_variance_fields>,
};


/** aggregate fields of "productVariants" */
export type productVariants_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<productVariants_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "productVariants" */
export type productVariants_aggregate_order_by = {
  avg?: Maybe<productVariants_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<productVariants_max_order_by>,
  min?: Maybe<productVariants_min_order_by>,
  stddev?: Maybe<productVariants_stddev_order_by>,
  stddev_pop?: Maybe<productVariants_stddev_pop_order_by>,
  stddev_samp?: Maybe<productVariants_stddev_samp_order_by>,
  sum?: Maybe<productVariants_sum_order_by>,
  var_pop?: Maybe<productVariants_var_pop_order_by>,
  var_samp?: Maybe<productVariants_var_samp_order_by>,
  variance?: Maybe<productVariants_variance_order_by>,
};

/** input type for inserting array relation for remote table "productVariants" */
export type productVariants_arr_rel_insert_input = {
  data: Array<productVariants_insert_input>,
  on_conflict?: Maybe<productVariants_on_conflict>,
};

/** aggregate avg on columns */
export type productVariants_avg_fields = {
   __typename?: 'productVariants_avg_fields',
  compareAtPrice?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  inventory?: Maybe<Scalars['Float']>,
  price?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "productVariants" */
export type productVariants_avg_order_by = {
  compareAtPrice?: Maybe<order_by>,
  id?: Maybe<order_by>,
  inventory?: Maybe<order_by>,
  price?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "productVariants". All fields are combined with a logical 'AND'. */
export type productVariants_bool_exp = {
  _and?: Maybe<Array<Maybe<productVariants_bool_exp>>>,
  _not?: Maybe<productVariants_bool_exp>,
  _or?: Maybe<Array<Maybe<productVariants_bool_exp>>>,
  available?: Maybe<Boolean_comparison_exp>,
  compareAtPrice?: Maybe<Int_comparison_exp>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  foreignId?: Maybe<String_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  images?: Maybe<joinVariantImages_bool_exp>,
  inventory?: Maybe<Int_comparison_exp>,
  joinVariantImages?: Maybe<joinVariantImages_bool_exp>,
  joinVariantOptionValues?: Maybe<joinVariantValues_bool_exp>,
  price?: Maybe<Int_comparison_exp>,
  product?: Maybe<products_bool_exp>,
  productId?: Maybe<bigint_comparison_exp>,
  selectedOptions?: Maybe<selectedOptions_bool_exp>,
  title?: Maybe<String_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
};

/** unique or primary key constraints on table "productVariants" */
export enum productVariants_constraint {
  /** unique or primary key constraint */
  productVariants_foreignId_key = 'productVariants_foreignId_key',
  /** unique or primary key constraint */
  productVariants_pkey = 'productVariants_pkey'
}

/** input type for incrementing integer columne in table "productVariants" */
export type productVariants_inc_input = {
  compareAtPrice?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['bigint']>,
  inventory?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['Int']>,
  productId?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "productVariants" */
export type productVariants_insert_input = {
  available?: Maybe<Scalars['Boolean']>,
  compareAtPrice?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['timestamptz']>,
  foreignId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  images?: Maybe<joinVariantImages_arr_rel_insert_input>,
  inventory?: Maybe<Scalars['Int']>,
  joinVariantImages?: Maybe<joinVariantImages_arr_rel_insert_input>,
  joinVariantOptionValues?: Maybe<joinVariantValues_arr_rel_insert_input>,
  price?: Maybe<Scalars['Int']>,
  product?: Maybe<products_obj_rel_insert_input>,
  productId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type productVariants_max_fields = {
   __typename?: 'productVariants_max_fields',
  compareAtPrice?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['timestamptz']>,
  foreignId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  inventory?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['Int']>,
  productId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "productVariants" */
export type productVariants_max_order_by = {
  compareAtPrice?: Maybe<order_by>,
  createdAt?: Maybe<order_by>,
  foreignId?: Maybe<order_by>,
  id?: Maybe<order_by>,
  inventory?: Maybe<order_by>,
  price?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  title?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type productVariants_min_fields = {
   __typename?: 'productVariants_min_fields',
  compareAtPrice?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['timestamptz']>,
  foreignId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  inventory?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['Int']>,
  productId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "productVariants" */
export type productVariants_min_order_by = {
  compareAtPrice?: Maybe<order_by>,
  createdAt?: Maybe<order_by>,
  foreignId?: Maybe<order_by>,
  id?: Maybe<order_by>,
  inventory?: Maybe<order_by>,
  price?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  title?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** response of any mutation on the table "productVariants" */
export type productVariants_mutation_response = {
   __typename?: 'productVariants_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<productVariants>,
};

/** input type for inserting object relation for remote table "productVariants" */
export type productVariants_obj_rel_insert_input = {
  data: productVariants_insert_input,
  on_conflict?: Maybe<productVariants_on_conflict>,
};

/** on conflict condition type for table "productVariants" */
export type productVariants_on_conflict = {
  constraint: productVariants_constraint,
  update_columns: Array<productVariants_update_column>,
  where?: Maybe<productVariants_bool_exp>,
};

/** ordering options when selecting data from "productVariants" */
export type productVariants_order_by = {
  available?: Maybe<order_by>,
  compareAtPrice?: Maybe<order_by>,
  createdAt?: Maybe<order_by>,
  foreignId?: Maybe<order_by>,
  id?: Maybe<order_by>,
  images_aggregate?: Maybe<joinVariantImages_aggregate_order_by>,
  inventory?: Maybe<order_by>,
  joinVariantImages_aggregate?: Maybe<joinVariantImages_aggregate_order_by>,
  joinVariantOptionValues_aggregate?: Maybe<joinVariantValues_aggregate_order_by>,
  price?: Maybe<order_by>,
  product?: Maybe<products_order_by>,
  productId?: Maybe<order_by>,
  selectedOptions_aggregate?: Maybe<selectedOptions_aggregate_order_by>,
  title?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** select columns of table "productVariants" */
export enum productVariants_select_column {
  /** column name */
  available = 'available',
  /** column name */
  compareAtPrice = 'compareAtPrice',
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  foreignId = 'foreignId',
  /** column name */
  id = 'id',
  /** column name */
  inventory = 'inventory',
  /** column name */
  price = 'price',
  /** column name */
  productId = 'productId',
  /** column name */
  title = 'title',
  /** column name */
  updatedAt = 'updatedAt'
}

/** input type for updating data in table "productVariants" */
export type productVariants_set_input = {
  available?: Maybe<Scalars['Boolean']>,
  compareAtPrice?: Maybe<Scalars['Int']>,
  createdAt?: Maybe<Scalars['timestamptz']>,
  foreignId?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  inventory?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['Int']>,
  productId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type productVariants_stddev_fields = {
   __typename?: 'productVariants_stddev_fields',
  compareAtPrice?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  inventory?: Maybe<Scalars['Float']>,
  price?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "productVariants" */
export type productVariants_stddev_order_by = {
  compareAtPrice?: Maybe<order_by>,
  id?: Maybe<order_by>,
  inventory?: Maybe<order_by>,
  price?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type productVariants_stddev_pop_fields = {
   __typename?: 'productVariants_stddev_pop_fields',
  compareAtPrice?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  inventory?: Maybe<Scalars['Float']>,
  price?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "productVariants" */
export type productVariants_stddev_pop_order_by = {
  compareAtPrice?: Maybe<order_by>,
  id?: Maybe<order_by>,
  inventory?: Maybe<order_by>,
  price?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type productVariants_stddev_samp_fields = {
   __typename?: 'productVariants_stddev_samp_fields',
  compareAtPrice?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  inventory?: Maybe<Scalars['Float']>,
  price?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "productVariants" */
export type productVariants_stddev_samp_order_by = {
  compareAtPrice?: Maybe<order_by>,
  id?: Maybe<order_by>,
  inventory?: Maybe<order_by>,
  price?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type productVariants_sum_fields = {
   __typename?: 'productVariants_sum_fields',
  compareAtPrice?: Maybe<Scalars['Int']>,
  id?: Maybe<Scalars['bigint']>,
  inventory?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['Int']>,
  productId?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "productVariants" */
export type productVariants_sum_order_by = {
  compareAtPrice?: Maybe<order_by>,
  id?: Maybe<order_by>,
  inventory?: Maybe<order_by>,
  price?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** update columns of table "productVariants" */
export enum productVariants_update_column {
  /** column name */
  available = 'available',
  /** column name */
  compareAtPrice = 'compareAtPrice',
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  foreignId = 'foreignId',
  /** column name */
  id = 'id',
  /** column name */
  inventory = 'inventory',
  /** column name */
  price = 'price',
  /** column name */
  productId = 'productId',
  /** column name */
  title = 'title',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type productVariants_var_pop_fields = {
   __typename?: 'productVariants_var_pop_fields',
  compareAtPrice?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  inventory?: Maybe<Scalars['Float']>,
  price?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "productVariants" */
export type productVariants_var_pop_order_by = {
  compareAtPrice?: Maybe<order_by>,
  id?: Maybe<order_by>,
  inventory?: Maybe<order_by>,
  price?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type productVariants_var_samp_fields = {
   __typename?: 'productVariants_var_samp_fields',
  compareAtPrice?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  inventory?: Maybe<Scalars['Float']>,
  price?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "productVariants" */
export type productVariants_var_samp_order_by = {
  compareAtPrice?: Maybe<order_by>,
  id?: Maybe<order_by>,
  inventory?: Maybe<order_by>,
  price?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type productVariants_variance_fields = {
   __typename?: 'productVariants_variance_fields',
  compareAtPrice?: Maybe<Scalars['Float']>,
  id?: Maybe<Scalars['Float']>,
  inventory?: Maybe<Scalars['Float']>,
  price?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "productVariants" */
export type productVariants_variance_order_by = {
  compareAtPrice?: Maybe<order_by>,
  id?: Maybe<order_by>,
  inventory?: Maybe<order_by>,
  price?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** columns and relationships of "productVideos" */
export type productVideos = {
   __typename?: 'productVideos',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  productId?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregated selection of "productVideos" */
export type productVideos_aggregate = {
   __typename?: 'productVideos_aggregate',
  aggregate?: Maybe<productVideos_aggregate_fields>,
  nodes: Array<productVideos>,
};

/** aggregate fields of "productVideos" */
export type productVideos_aggregate_fields = {
   __typename?: 'productVideos_aggregate_fields',
  avg?: Maybe<productVideos_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<productVideos_max_fields>,
  min?: Maybe<productVideos_min_fields>,
  stddev?: Maybe<productVideos_stddev_fields>,
  stddev_pop?: Maybe<productVideos_stddev_pop_fields>,
  stddev_samp?: Maybe<productVideos_stddev_samp_fields>,
  sum?: Maybe<productVideos_sum_fields>,
  var_pop?: Maybe<productVideos_var_pop_fields>,
  var_samp?: Maybe<productVideos_var_samp_fields>,
  variance?: Maybe<productVideos_variance_fields>,
};


/** aggregate fields of "productVideos" */
export type productVideos_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<productVideos_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "productVideos" */
export type productVideos_aggregate_order_by = {
  avg?: Maybe<productVideos_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<productVideos_max_order_by>,
  min?: Maybe<productVideos_min_order_by>,
  stddev?: Maybe<productVideos_stddev_order_by>,
  stddev_pop?: Maybe<productVideos_stddev_pop_order_by>,
  stddev_samp?: Maybe<productVideos_stddev_samp_order_by>,
  sum?: Maybe<productVideos_sum_order_by>,
  var_pop?: Maybe<productVideos_var_pop_order_by>,
  var_samp?: Maybe<productVideos_var_samp_order_by>,
  variance?: Maybe<productVideos_variance_order_by>,
};

/** aggregate avg on columns */
export type productVideos_avg_fields = {
   __typename?: 'productVideos_avg_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "productVideos" */
export type productVideos_avg_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "productVideos". All fields are combined with a logical 'AND'. */
export type productVideos_bool_exp = {
  _and?: Maybe<Array<Maybe<productVideos_bool_exp>>>,
  _not?: Maybe<productVideos_bool_exp>,
  _or?: Maybe<Array<Maybe<productVideos_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  productId?: Maybe<bigint_comparison_exp>,
  src?: Maybe<String_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
};

/** aggregate max on columns */
export type productVideos_max_fields = {
   __typename?: 'productVideos_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  productId?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "productVideos" */
export type productVideos_max_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  src?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type productVideos_min_fields = {
   __typename?: 'productVideos_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  productId?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "productVideos" */
export type productVideos_min_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  src?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** ordering options when selecting data from "productVideos" */
export type productVideos_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  src?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** select columns of table "productVideos" */
export enum productVideos_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  id = 'id',
  /** column name */
  productId = 'productId',
  /** column name */
  src = 'src',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type productVideos_stddev_fields = {
   __typename?: 'productVideos_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "productVideos" */
export type productVideos_stddev_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type productVideos_stddev_pop_fields = {
   __typename?: 'productVideos_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "productVideos" */
export type productVideos_stddev_pop_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type productVideos_stddev_samp_fields = {
   __typename?: 'productVideos_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "productVideos" */
export type productVideos_stddev_samp_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type productVideos_sum_fields = {
   __typename?: 'productVideos_sum_fields',
  id?: Maybe<Scalars['bigint']>,
  productId?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "productVideos" */
export type productVideos_sum_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate var_pop on columns */
export type productVideos_var_pop_fields = {
   __typename?: 'productVideos_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "productVideos" */
export type productVideos_var_pop_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type productVideos_var_samp_fields = {
   __typename?: 'productVideos_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "productVideos" */
export type productVideos_var_samp_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type productVideos_variance_fields = {
   __typename?: 'productVideos_variance_fields',
  id?: Maybe<Scalars['Float']>,
  productId?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "productVideos" */
export type productVideos_variance_order_by = {
  id?: Maybe<order_by>,
  productId?: Maybe<order_by>,
};

export type Query = {
   __typename?: 'Query',
  getShopifyAccountAccessToken?: Maybe<Scalars['String']>,
};


export type QuerygetShopifyAccountAccessTokenArgs = {
  id: Scalars['String']
};

/** query root */
export type query_root = {
   __typename?: 'query_root',
  getShopifyAccountAccessToken?: Maybe<Scalars['String']>,
  /** fetch data from the table: "images" using primary key columns */
  image?: Maybe<images>,
  /** fetch data from the table: "images" */
  images: Array<images>,
  /** fetch aggregated fields from the table: "images" */
  imagesAggregate: images_aggregate,
  /** fetch data from the table: "joinOptionValueImages" */
  joinOptionValueImages: Array<joinOptionValueImages>,
  /** fetch data from the table: "joinProductImages" using primary key columns */
  joinProductImage?: Maybe<joinProductImages>,
  /** fetch data from the table: "joinProductImages" */
  joinProductImages: Array<joinProductImages>,
  /** fetch aggregated fields from the table: "joinProductImages" */
  joinProductImagesAggregate: joinProductImages_aggregate,
  /** fetch data from the table: "joinOptionValueImages" using primary key columns */
  joinProductOptionValueImage?: Maybe<joinOptionValueImages>,
  /** fetch aggregated fields from the table: "joinOptionValueImages" */
  joinProductOptionValueImagesAggregate: joinOptionValueImages_aggregate,
  /** fetch data from the table: "joinProductVideos" using primary key columns */
  joinProductVideo?: Maybe<joinProductVideos>,
  /** fetch data from the table: "joinProductVideos" */
  joinProductVideos: Array<joinProductVideos>,
  /** fetch aggregated fields from the table: "joinProductVideos" */
  joinProductVideosAggregate: joinProductVideos_aggregate,
  /** fetch data from the table: "joinVariantImages" using primary key columns */
  joinVariantImage?: Maybe<joinVariantImages>,
  /** fetch data from the table: "joinVariantImages" */
  joinVariantImages: Array<joinVariantImages>,
  /** fetch aggregated fields from the table: "joinVariantImages" */
  joinVariantImagesAggregate: joinVariantImages_aggregate,
  /** fetch data from the table: "joinVariantValues" using primary key columns */
  joinVariantValue?: Maybe<joinVariantValues>,
  /** fetch data from the table: "joinVariantValues" */
  joinVariantValues: Array<joinVariantValues>,
  /** fetch aggregated fields from the table: "joinVariantValues" */
  joinVariantValuesAggregate: joinVariantValues_aggregate,
  /** fetch data from the table: "optionValueImages" */
  optionValueImages: Array<optionValueImages>,
  /** fetch aggregated fields from the table: "optionValueImages" */
  optionValueImages_aggregate: optionValueImages_aggregate,
  /** fetch data from the table: "products" using primary key columns */
  product?: Maybe<products>,
  /** fetch data from the table: "productImages" */
  productImages: Array<productImages>,
  /** fetch aggregated fields from the table: "productImages" */
  productImages_aggregate: productImages_aggregate,
  /** fetch data from the table: "productOptions" using primary key columns */
  productOption?: Maybe<productOptions>,
  /** fetch data from the table: "productOptionValues" using primary key columns */
  productOptionValue?: Maybe<productOptionValues>,
  /** fetch data from the table: "productOptionValues" */
  productOptionValues: Array<productOptionValues>,
  /** fetch aggregated fields from the table: "productOptionValues" */
  productOptionValuesAggregate: productOptionValues_aggregate,
  /** fetch data from the table: "productOptions" */
  productOptions: Array<productOptions>,
  /** fetch aggregated fields from the table: "productOptions" */
  productOptionsAggregate: productOptions_aggregate,
  /** fetch data from the table: "productVariants" using primary key columns */
  productVariant?: Maybe<productVariants>,
  /** fetch data from the table: "productVariants" */
  productVariants: Array<productVariants>,
  /** fetch aggregated fields from the table: "productVariants" */
  productVariantsAggregate: productVariants_aggregate,
  /** fetch data from the table: "productVideos" */
  productVideos: Array<productVideos>,
  /** fetch aggregated fields from the table: "productVideos" */
  productVideos_aggregate: productVideos_aggregate,
  /** fetch data from the table: "products" */
  products: Array<products>,
  /** fetch aggregated fields from the table: "products" */
  productsAggregate: products_aggregate,
  /** fetch data from the table: "selectedOptions" */
  selectedOptions: Array<selectedOptions>,
  /** fetch aggregated fields from the table: "selectedOptions" */
  selectedOptions_aggregate: selectedOptions_aggregate,
  /** fetch data from the table: "shops" using primary key columns */
  shop?: Maybe<shops>,
  /** fetch data from the table: "shopifyAccounts" using primary key columns */
  shopifyAccount?: Maybe<shopifyAccounts>,
  /** fetch data from the table: "shopifyAccounts" */
  shopifyAccounts: Array<shopifyAccounts>,
  /** fetch aggregated fields from the table: "shopifyAccounts" */
  shopifyAccountsAggregate: shopifyAccounts_aggregate,
  /** fetch data from the table: "shops" */
  shops: Array<shops>,
  /** fetch aggregated fields from the table: "shops" */
  shopsAggregate: shops_aggregate,
  /** fetch data from the table: "variantImages" */
  variantImages: Array<variantImages>,
  /** fetch aggregated fields from the table: "variantImages" */
  variantImages_aggregate: variantImages_aggregate,
  /** fetch data from the table: "videos" */
  videos: Array<videos>,
  /** fetch aggregated fields from the table: "videos" */
  videos_aggregate: videos_aggregate,
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<videos>,
  /** fetch data from the table: "x_cache_shopify_productVariants" */
  x_cache_shopify_productVariants: Array<x_cache_shopify_productVariants>,
  /** fetch aggregated fields from the table: "x_cache_shopify_productVariants" */
  x_cache_shopify_productVariants_aggregate: x_cache_shopify_productVariants_aggregate,
  /** fetch data from the table: "x_cache_shopify_productVariants" using primary key columns */
  x_cache_shopify_productVariants_by_pk?: Maybe<x_cache_shopify_productVariants>,
  /** fetch data from the table: "x_cache_shopify_products" */
  x_cache_shopify_products: Array<x_cache_shopify_products>,
  /** fetch aggregated fields from the table: "x_cache_shopify_products" */
  x_cache_shopify_products_aggregate: x_cache_shopify_products_aggregate,
  /** fetch data from the table: "x_cache_shopify_products" using primary key columns */
  x_cache_shopify_products_by_pk?: Maybe<x_cache_shopify_products>,
  /** fetch data from the table: "x_queue_shopify_fetchProductVariants" */
  x_queue_shopify_fetchProductVariants: Array<x_queue_shopify_fetchProductVariants>,
  /** fetch aggregated fields from the table: "x_queue_shopify_fetchProductVariants" */
  x_queue_shopify_fetchProductVariants_aggregate: x_queue_shopify_fetchProductVariants_aggregate,
  /** fetch data from the table: "x_queue_shopify_fetchProductVariants" using primary key columns */
  x_queue_shopify_fetchProductVariants_by_pk?: Maybe<x_queue_shopify_fetchProductVariants>,
  /** fetch data from the table: "x_queue_shopify_fetchProducts" */
  x_queue_shopify_fetchProducts: Array<x_queue_shopify_fetchProducts>,
  /** fetch aggregated fields from the table: "x_queue_shopify_fetchProducts" */
  x_queue_shopify_fetchProducts_aggregate: x_queue_shopify_fetchProducts_aggregate,
  /** fetch data from the table: "x_queue_shopify_fetchProducts" using primary key columns */
  x_queue_shopify_fetchProducts_by_pk?: Maybe<x_queue_shopify_fetchProducts>,
  /** fetch data from the table: "x_queue_shopify_saveToPlatform" */
  x_queue_shopify_saveToPlatform: Array<x_queue_shopify_saveToPlatform>,
  /** fetch aggregated fields from the table: "x_queue_shopify_saveToPlatform" */
  x_queue_shopify_saveToPlatform_aggregate: x_queue_shopify_saveToPlatform_aggregate,
  /** fetch data from the table: "x_queue_shopify_saveToPlatform" using primary key columns */
  x_queue_shopify_saveToPlatform_by_pk?: Maybe<x_queue_shopify_saveToPlatform>,
  /** fetch data from the table: "x_queue_shopify_transformToPlatform" */
  x_queue_shopify_transformToPlatform: Array<x_queue_shopify_transformToPlatform>,
  /** fetch aggregated fields from the table: "x_queue_shopify_transformToPlatform" */
  x_queue_shopify_transformToPlatform_aggregate: x_queue_shopify_transformToPlatform_aggregate,
  /** fetch data from the table: "x_queue_shopify_transformToPlatform" using primary key columns */
  x_queue_shopify_transformToPlatform_by_pk?: Maybe<x_queue_shopify_transformToPlatform>,
  /** fetch data from the table: "x_standalone_event_triggers" */
  x_standalone_event_triggers: Array<x_standalone_event_triggers>,
  /** fetch aggregated fields from the table: "x_standalone_event_triggers" */
  x_standalone_event_triggers_aggregate: x_standalone_event_triggers_aggregate,
  /** fetch data from the table: "x_standalone_event_triggers" using primary key columns */
  x_standalone_event_triggers_by_pk?: Maybe<x_standalone_event_triggers>,
};


/** query root */
export type query_rootgetShopifyAccountAccessTokenArgs = {
  id: Scalars['String']
};


/** query root */
export type query_rootimageArgs = {
  id: Scalars['bigint']
};


/** query root */
export type query_rootimagesArgs = {
  distinct_on?: Maybe<Array<images_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<images_order_by>>,
  where?: Maybe<images_bool_exp>
};


/** query root */
export type query_rootimagesAggregateArgs = {
  distinct_on?: Maybe<Array<images_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<images_order_by>>,
  where?: Maybe<images_bool_exp>
};


/** query root */
export type query_rootjoinOptionValueImagesArgs = {
  distinct_on?: Maybe<Array<joinOptionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinOptionValueImages_order_by>>,
  where?: Maybe<joinOptionValueImages_bool_exp>
};


/** query root */
export type query_rootjoinProductImageArgs = {
  imageId: Scalars['bigint'],
  productId: Scalars['bigint']
};


/** query root */
export type query_rootjoinProductImagesArgs = {
  distinct_on?: Maybe<Array<joinProductImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductImages_order_by>>,
  where?: Maybe<joinProductImages_bool_exp>
};


/** query root */
export type query_rootjoinProductImagesAggregateArgs = {
  distinct_on?: Maybe<Array<joinProductImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductImages_order_by>>,
  where?: Maybe<joinProductImages_bool_exp>
};


/** query root */
export type query_rootjoinProductOptionValueImageArgs = {
  imageId: Scalars['bigint'],
  productOptionValueId: Scalars['bigint']
};


/** query root */
export type query_rootjoinProductOptionValueImagesAggregateArgs = {
  distinct_on?: Maybe<Array<joinOptionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinOptionValueImages_order_by>>,
  where?: Maybe<joinOptionValueImages_bool_exp>
};


/** query root */
export type query_rootjoinProductVideoArgs = {
  productId: Scalars['bigint'],
  videoId: Scalars['bigint']
};


/** query root */
export type query_rootjoinProductVideosArgs = {
  distinct_on?: Maybe<Array<joinProductVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductVideos_order_by>>,
  where?: Maybe<joinProductVideos_bool_exp>
};


/** query root */
export type query_rootjoinProductVideosAggregateArgs = {
  distinct_on?: Maybe<Array<joinProductVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductVideos_order_by>>,
  where?: Maybe<joinProductVideos_bool_exp>
};


/** query root */
export type query_rootjoinVariantImageArgs = {
  imageId: Scalars['bigint'],
  productVariantId: Scalars['bigint']
};


/** query root */
export type query_rootjoinVariantImagesArgs = {
  distinct_on?: Maybe<Array<joinVariantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantImages_order_by>>,
  where?: Maybe<joinVariantImages_bool_exp>
};


/** query root */
export type query_rootjoinVariantImagesAggregateArgs = {
  distinct_on?: Maybe<Array<joinVariantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantImages_order_by>>,
  where?: Maybe<joinVariantImages_bool_exp>
};


/** query root */
export type query_rootjoinVariantValueArgs = {
  productOptionValueId: Scalars['bigint'],
  productVariantId: Scalars['bigint']
};


/** query root */
export type query_rootjoinVariantValuesArgs = {
  distinct_on?: Maybe<Array<joinVariantValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantValues_order_by>>,
  where?: Maybe<joinVariantValues_bool_exp>
};


/** query root */
export type query_rootjoinVariantValuesAggregateArgs = {
  distinct_on?: Maybe<Array<joinVariantValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantValues_order_by>>,
  where?: Maybe<joinVariantValues_bool_exp>
};


/** query root */
export type query_rootoptionValueImagesArgs = {
  distinct_on?: Maybe<Array<optionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<optionValueImages_order_by>>,
  where?: Maybe<optionValueImages_bool_exp>
};


/** query root */
export type query_rootoptionValueImages_aggregateArgs = {
  distinct_on?: Maybe<Array<optionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<optionValueImages_order_by>>,
  where?: Maybe<optionValueImages_bool_exp>
};


/** query root */
export type query_rootproductArgs = {
  id: Scalars['bigint']
};


/** query root */
export type query_rootproductImagesArgs = {
  distinct_on?: Maybe<Array<productImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productImages_order_by>>,
  where?: Maybe<productImages_bool_exp>
};


/** query root */
export type query_rootproductImages_aggregateArgs = {
  distinct_on?: Maybe<Array<productImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productImages_order_by>>,
  where?: Maybe<productImages_bool_exp>
};


/** query root */
export type query_rootproductOptionArgs = {
  id: Scalars['bigint']
};


/** query root */
export type query_rootproductOptionValueArgs = {
  id: Scalars['bigint']
};


/** query root */
export type query_rootproductOptionValuesArgs = {
  distinct_on?: Maybe<Array<productOptionValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptionValues_order_by>>,
  where?: Maybe<productOptionValues_bool_exp>
};


/** query root */
export type query_rootproductOptionValuesAggregateArgs = {
  distinct_on?: Maybe<Array<productOptionValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptionValues_order_by>>,
  where?: Maybe<productOptionValues_bool_exp>
};


/** query root */
export type query_rootproductOptionsArgs = {
  distinct_on?: Maybe<Array<productOptions_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptions_order_by>>,
  where?: Maybe<productOptions_bool_exp>
};


/** query root */
export type query_rootproductOptionsAggregateArgs = {
  distinct_on?: Maybe<Array<productOptions_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptions_order_by>>,
  where?: Maybe<productOptions_bool_exp>
};


/** query root */
export type query_rootproductVariantArgs = {
  id: Scalars['bigint']
};


/** query root */
export type query_rootproductVariantsArgs = {
  distinct_on?: Maybe<Array<productVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productVariants_order_by>>,
  where?: Maybe<productVariants_bool_exp>
};


/** query root */
export type query_rootproductVariantsAggregateArgs = {
  distinct_on?: Maybe<Array<productVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productVariants_order_by>>,
  where?: Maybe<productVariants_bool_exp>
};


/** query root */
export type query_rootproductVideosArgs = {
  distinct_on?: Maybe<Array<productVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productVideos_order_by>>,
  where?: Maybe<productVideos_bool_exp>
};


/** query root */
export type query_rootproductVideos_aggregateArgs = {
  distinct_on?: Maybe<Array<productVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productVideos_order_by>>,
  where?: Maybe<productVideos_bool_exp>
};


/** query root */
export type query_rootproductsArgs = {
  distinct_on?: Maybe<Array<products_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<products_order_by>>,
  where?: Maybe<products_bool_exp>
};


/** query root */
export type query_rootproductsAggregateArgs = {
  distinct_on?: Maybe<Array<products_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<products_order_by>>,
  where?: Maybe<products_bool_exp>
};


/** query root */
export type query_rootselectedOptionsArgs = {
  distinct_on?: Maybe<Array<selectedOptions_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<selectedOptions_order_by>>,
  where?: Maybe<selectedOptions_bool_exp>
};


/** query root */
export type query_rootselectedOptions_aggregateArgs = {
  distinct_on?: Maybe<Array<selectedOptions_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<selectedOptions_order_by>>,
  where?: Maybe<selectedOptions_bool_exp>
};


/** query root */
export type query_rootshopArgs = {
  id: Scalars['bigint']
};


/** query root */
export type query_rootshopifyAccountArgs = {
  id: Scalars['String']
};


/** query root */
export type query_rootshopifyAccountsArgs = {
  distinct_on?: Maybe<Array<shopifyAccounts_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<shopifyAccounts_order_by>>,
  where?: Maybe<shopifyAccounts_bool_exp>
};


/** query root */
export type query_rootshopifyAccountsAggregateArgs = {
  distinct_on?: Maybe<Array<shopifyAccounts_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<shopifyAccounts_order_by>>,
  where?: Maybe<shopifyAccounts_bool_exp>
};


/** query root */
export type query_rootshopsArgs = {
  distinct_on?: Maybe<Array<shops_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<shops_order_by>>,
  where?: Maybe<shops_bool_exp>
};


/** query root */
export type query_rootshopsAggregateArgs = {
  distinct_on?: Maybe<Array<shops_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<shops_order_by>>,
  where?: Maybe<shops_bool_exp>
};


/** query root */
export type query_rootvariantImagesArgs = {
  distinct_on?: Maybe<Array<variantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<variantImages_order_by>>,
  where?: Maybe<variantImages_bool_exp>
};


/** query root */
export type query_rootvariantImages_aggregateArgs = {
  distinct_on?: Maybe<Array<variantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<variantImages_order_by>>,
  where?: Maybe<variantImages_bool_exp>
};


/** query root */
export type query_rootvideosArgs = {
  distinct_on?: Maybe<Array<videos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<videos_order_by>>,
  where?: Maybe<videos_bool_exp>
};


/** query root */
export type query_rootvideos_aggregateArgs = {
  distinct_on?: Maybe<Array<videos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<videos_order_by>>,
  where?: Maybe<videos_bool_exp>
};


/** query root */
export type query_rootvideos_by_pkArgs = {
  id: Scalars['bigint']
};


/** query root */
export type query_rootx_cache_shopify_productVariantsArgs = {
  distinct_on?: Maybe<Array<x_cache_shopify_productVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_cache_shopify_productVariants_order_by>>,
  where?: Maybe<x_cache_shopify_productVariants_bool_exp>
};


/** query root */
export type query_rootx_cache_shopify_productVariants_aggregateArgs = {
  distinct_on?: Maybe<Array<x_cache_shopify_productVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_cache_shopify_productVariants_order_by>>,
  where?: Maybe<x_cache_shopify_productVariants_bool_exp>
};


/** query root */
export type query_rootx_cache_shopify_productVariants_by_pkArgs = {
  id: Scalars['String']
};


/** query root */
export type query_rootx_cache_shopify_productsArgs = {
  distinct_on?: Maybe<Array<x_cache_shopify_products_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_cache_shopify_products_order_by>>,
  where?: Maybe<x_cache_shopify_products_bool_exp>
};


/** query root */
export type query_rootx_cache_shopify_products_aggregateArgs = {
  distinct_on?: Maybe<Array<x_cache_shopify_products_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_cache_shopify_products_order_by>>,
  where?: Maybe<x_cache_shopify_products_bool_exp>
};


/** query root */
export type query_rootx_cache_shopify_products_by_pkArgs = {
  id: Scalars['String']
};


/** query root */
export type query_rootx_queue_shopify_fetchProductVariantsArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_fetchProductVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_fetchProductVariants_order_by>>,
  where?: Maybe<x_queue_shopify_fetchProductVariants_bool_exp>
};


/** query root */
export type query_rootx_queue_shopify_fetchProductVariants_aggregateArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_fetchProductVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_fetchProductVariants_order_by>>,
  where?: Maybe<x_queue_shopify_fetchProductVariants_bool_exp>
};


/** query root */
export type query_rootx_queue_shopify_fetchProductVariants_by_pkArgs = {
  id: Scalars['bigint']
};


/** query root */
export type query_rootx_queue_shopify_fetchProductsArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_fetchProducts_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_fetchProducts_order_by>>,
  where?: Maybe<x_queue_shopify_fetchProducts_bool_exp>
};


/** query root */
export type query_rootx_queue_shopify_fetchProducts_aggregateArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_fetchProducts_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_fetchProducts_order_by>>,
  where?: Maybe<x_queue_shopify_fetchProducts_bool_exp>
};


/** query root */
export type query_rootx_queue_shopify_fetchProducts_by_pkArgs = {
  id: Scalars['bigint']
};


/** query root */
export type query_rootx_queue_shopify_saveToPlatformArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_saveToPlatform_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_saveToPlatform_order_by>>,
  where?: Maybe<x_queue_shopify_saveToPlatform_bool_exp>
};


/** query root */
export type query_rootx_queue_shopify_saveToPlatform_aggregateArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_saveToPlatform_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_saveToPlatform_order_by>>,
  where?: Maybe<x_queue_shopify_saveToPlatform_bool_exp>
};


/** query root */
export type query_rootx_queue_shopify_saveToPlatform_by_pkArgs = {
  id: Scalars['bigint']
};


/** query root */
export type query_rootx_queue_shopify_transformToPlatformArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_transformToPlatform_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_transformToPlatform_order_by>>,
  where?: Maybe<x_queue_shopify_transformToPlatform_bool_exp>
};


/** query root */
export type query_rootx_queue_shopify_transformToPlatform_aggregateArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_transformToPlatform_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_transformToPlatform_order_by>>,
  where?: Maybe<x_queue_shopify_transformToPlatform_bool_exp>
};


/** query root */
export type query_rootx_queue_shopify_transformToPlatform_by_pkArgs = {
  id: Scalars['bigint']
};


/** query root */
export type query_rootx_standalone_event_triggersArgs = {
  distinct_on?: Maybe<Array<x_standalone_event_triggers_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_standalone_event_triggers_order_by>>,
  where?: Maybe<x_standalone_event_triggers_bool_exp>
};


/** query root */
export type query_rootx_standalone_event_triggers_aggregateArgs = {
  distinct_on?: Maybe<Array<x_standalone_event_triggers_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_standalone_event_triggers_order_by>>,
  where?: Maybe<x_standalone_event_triggers_bool_exp>
};


/** query root */
export type query_rootx_standalone_event_triggers_by_pkArgs = {
  id: Scalars['bigint']
};

/** columns and relationships of "selectedOptions" */
export type selectedOptions = {
   __typename?: 'selectedOptions',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  /** An object relationship */
  option?: Maybe<productOptions>,
  optionPosition?: Maybe<Scalars['Int']>,
  productOptionId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
  value?: Maybe<Scalars['String']>,
  valuePosition?: Maybe<Scalars['Int']>,
  /** An object relationship */
  variant?: Maybe<productVariants>,
};

/** aggregated selection of "selectedOptions" */
export type selectedOptions_aggregate = {
   __typename?: 'selectedOptions_aggregate',
  aggregate?: Maybe<selectedOptions_aggregate_fields>,
  nodes: Array<selectedOptions>,
};

/** aggregate fields of "selectedOptions" */
export type selectedOptions_aggregate_fields = {
   __typename?: 'selectedOptions_aggregate_fields',
  avg?: Maybe<selectedOptions_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<selectedOptions_max_fields>,
  min?: Maybe<selectedOptions_min_fields>,
  stddev?: Maybe<selectedOptions_stddev_fields>,
  stddev_pop?: Maybe<selectedOptions_stddev_pop_fields>,
  stddev_samp?: Maybe<selectedOptions_stddev_samp_fields>,
  sum?: Maybe<selectedOptions_sum_fields>,
  var_pop?: Maybe<selectedOptions_var_pop_fields>,
  var_samp?: Maybe<selectedOptions_var_samp_fields>,
  variance?: Maybe<selectedOptions_variance_fields>,
};


/** aggregate fields of "selectedOptions" */
export type selectedOptions_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<selectedOptions_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "selectedOptions" */
export type selectedOptions_aggregate_order_by = {
  avg?: Maybe<selectedOptions_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<selectedOptions_max_order_by>,
  min?: Maybe<selectedOptions_min_order_by>,
  stddev?: Maybe<selectedOptions_stddev_order_by>,
  stddev_pop?: Maybe<selectedOptions_stddev_pop_order_by>,
  stddev_samp?: Maybe<selectedOptions_stddev_samp_order_by>,
  sum?: Maybe<selectedOptions_sum_order_by>,
  var_pop?: Maybe<selectedOptions_var_pop_order_by>,
  var_samp?: Maybe<selectedOptions_var_samp_order_by>,
  variance?: Maybe<selectedOptions_variance_order_by>,
};

/** aggregate avg on columns */
export type selectedOptions_avg_fields = {
   __typename?: 'selectedOptions_avg_fields',
  id?: Maybe<Scalars['Float']>,
  optionPosition?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
  valuePosition?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "selectedOptions" */
export type selectedOptions_avg_order_by = {
  id?: Maybe<order_by>,
  optionPosition?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  valuePosition?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "selectedOptions". All fields are combined with a logical 'AND'. */
export type selectedOptions_bool_exp = {
  _and?: Maybe<Array<Maybe<selectedOptions_bool_exp>>>,
  _not?: Maybe<selectedOptions_bool_exp>,
  _or?: Maybe<Array<Maybe<selectedOptions_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  option?: Maybe<productOptions_bool_exp>,
  optionPosition?: Maybe<Int_comparison_exp>,
  productOptionId?: Maybe<bigint_comparison_exp>,
  productVariantId?: Maybe<bigint_comparison_exp>,
  title?: Maybe<String_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
  value?: Maybe<String_comparison_exp>,
  valuePosition?: Maybe<Int_comparison_exp>,
  variant?: Maybe<productVariants_bool_exp>,
};

/** aggregate max on columns */
export type selectedOptions_max_fields = {
   __typename?: 'selectedOptions_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  optionPosition?: Maybe<Scalars['Int']>,
  productOptionId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
  value?: Maybe<Scalars['String']>,
  valuePosition?: Maybe<Scalars['Int']>,
};

/** order by max() on columns of table "selectedOptions" */
export type selectedOptions_max_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  optionPosition?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  title?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
  value?: Maybe<order_by>,
  valuePosition?: Maybe<order_by>,
};

/** aggregate min on columns */
export type selectedOptions_min_fields = {
   __typename?: 'selectedOptions_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  optionPosition?: Maybe<Scalars['Int']>,
  productOptionId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
  title?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
  value?: Maybe<Scalars['String']>,
  valuePosition?: Maybe<Scalars['Int']>,
};

/** order by min() on columns of table "selectedOptions" */
export type selectedOptions_min_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  optionPosition?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  title?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
  value?: Maybe<order_by>,
  valuePosition?: Maybe<order_by>,
};

/** ordering options when selecting data from "selectedOptions" */
export type selectedOptions_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  option?: Maybe<productOptions_order_by>,
  optionPosition?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  title?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
  value?: Maybe<order_by>,
  valuePosition?: Maybe<order_by>,
  variant?: Maybe<productVariants_order_by>,
};

/** select columns of table "selectedOptions" */
export enum selectedOptions_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  id = 'id',
  /** column name */
  optionPosition = 'optionPosition',
  /** column name */
  productOptionId = 'productOptionId',
  /** column name */
  productVariantId = 'productVariantId',
  /** column name */
  title = 'title',
  /** column name */
  updatedAt = 'updatedAt',
  /** column name */
  value = 'value',
  /** column name */
  valuePosition = 'valuePosition'
}

/** aggregate stddev on columns */
export type selectedOptions_stddev_fields = {
   __typename?: 'selectedOptions_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  optionPosition?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
  valuePosition?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "selectedOptions" */
export type selectedOptions_stddev_order_by = {
  id?: Maybe<order_by>,
  optionPosition?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  valuePosition?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type selectedOptions_stddev_pop_fields = {
   __typename?: 'selectedOptions_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  optionPosition?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
  valuePosition?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "selectedOptions" */
export type selectedOptions_stddev_pop_order_by = {
  id?: Maybe<order_by>,
  optionPosition?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  valuePosition?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type selectedOptions_stddev_samp_fields = {
   __typename?: 'selectedOptions_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  optionPosition?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
  valuePosition?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "selectedOptions" */
export type selectedOptions_stddev_samp_order_by = {
  id?: Maybe<order_by>,
  optionPosition?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  valuePosition?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type selectedOptions_sum_fields = {
   __typename?: 'selectedOptions_sum_fields',
  id?: Maybe<Scalars['bigint']>,
  optionPosition?: Maybe<Scalars['Int']>,
  productOptionId?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
  valuePosition?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "selectedOptions" */
export type selectedOptions_sum_order_by = {
  id?: Maybe<order_by>,
  optionPosition?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  valuePosition?: Maybe<order_by>,
};

/** aggregate var_pop on columns */
export type selectedOptions_var_pop_fields = {
   __typename?: 'selectedOptions_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  optionPosition?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
  valuePosition?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "selectedOptions" */
export type selectedOptions_var_pop_order_by = {
  id?: Maybe<order_by>,
  optionPosition?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  valuePosition?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type selectedOptions_var_samp_fields = {
   __typename?: 'selectedOptions_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  optionPosition?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
  valuePosition?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "selectedOptions" */
export type selectedOptions_var_samp_order_by = {
  id?: Maybe<order_by>,
  optionPosition?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  valuePosition?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type selectedOptions_variance_fields = {
   __typename?: 'selectedOptions_variance_fields',
  id?: Maybe<Scalars['Float']>,
  optionPosition?: Maybe<Scalars['Float']>,
  productOptionId?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
  valuePosition?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "selectedOptions" */
export type selectedOptions_variance_order_by = {
  id?: Maybe<order_by>,
  optionPosition?: Maybe<order_by>,
  productOptionId?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  valuePosition?: Maybe<order_by>,
};

/** columns and relationships of "shopifyAccounts" */
export type shopifyAccounts = {
   __typename?: 'shopifyAccounts',
  createdAt: Scalars['timestamptz'],
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id: Scalars['String'],
  initialSyncState: Scalars['String'],
  myshopifyDomain?: Maybe<Scalars['String']>,
  /** An object relationship */
  shop?: Maybe<shops>,
  shopId?: Maybe<Scalars['bigint']>,
  updatedAt: Scalars['timestamptz'],
};

/** aggregated selection of "shopifyAccounts" */
export type shopifyAccounts_aggregate = {
   __typename?: 'shopifyAccounts_aggregate',
  aggregate?: Maybe<shopifyAccounts_aggregate_fields>,
  nodes: Array<shopifyAccounts>,
};

/** aggregate fields of "shopifyAccounts" */
export type shopifyAccounts_aggregate_fields = {
   __typename?: 'shopifyAccounts_aggregate_fields',
  avg?: Maybe<shopifyAccounts_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<shopifyAccounts_max_fields>,
  min?: Maybe<shopifyAccounts_min_fields>,
  stddev?: Maybe<shopifyAccounts_stddev_fields>,
  stddev_pop?: Maybe<shopifyAccounts_stddev_pop_fields>,
  stddev_samp?: Maybe<shopifyAccounts_stddev_samp_fields>,
  sum?: Maybe<shopifyAccounts_sum_fields>,
  var_pop?: Maybe<shopifyAccounts_var_pop_fields>,
  var_samp?: Maybe<shopifyAccounts_var_samp_fields>,
  variance?: Maybe<shopifyAccounts_variance_fields>,
};


/** aggregate fields of "shopifyAccounts" */
export type shopifyAccounts_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<shopifyAccounts_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "shopifyAccounts" */
export type shopifyAccounts_aggregate_order_by = {
  avg?: Maybe<shopifyAccounts_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<shopifyAccounts_max_order_by>,
  min?: Maybe<shopifyAccounts_min_order_by>,
  stddev?: Maybe<shopifyAccounts_stddev_order_by>,
  stddev_pop?: Maybe<shopifyAccounts_stddev_pop_order_by>,
  stddev_samp?: Maybe<shopifyAccounts_stddev_samp_order_by>,
  sum?: Maybe<shopifyAccounts_sum_order_by>,
  var_pop?: Maybe<shopifyAccounts_var_pop_order_by>,
  var_samp?: Maybe<shopifyAccounts_var_samp_order_by>,
  variance?: Maybe<shopifyAccounts_variance_order_by>,
};

/** input type for inserting array relation for remote table "shopifyAccounts" */
export type shopifyAccounts_arr_rel_insert_input = {
  data: Array<shopifyAccounts_insert_input>,
  on_conflict?: Maybe<shopifyAccounts_on_conflict>,
};

/** aggregate avg on columns */
export type shopifyAccounts_avg_fields = {
   __typename?: 'shopifyAccounts_avg_fields',
  shopId?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "shopifyAccounts" */
export type shopifyAccounts_avg_order_by = {
  shopId?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "shopifyAccounts". All fields are combined with a logical 'AND'. */
export type shopifyAccounts_bool_exp = {
  _and?: Maybe<Array<Maybe<shopifyAccounts_bool_exp>>>,
  _not?: Maybe<shopifyAccounts_bool_exp>,
  _or?: Maybe<Array<Maybe<shopifyAccounts_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  encryptedAccessToken?: Maybe<String_comparison_exp>,
  id?: Maybe<String_comparison_exp>,
  initialSyncState?: Maybe<String_comparison_exp>,
  myshopifyDomain?: Maybe<String_comparison_exp>,
  shop?: Maybe<shops_bool_exp>,
  shopId?: Maybe<bigint_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
};

/** unique or primary key constraints on table "shopifyAccounts" */
export enum shopifyAccounts_constraint {
  /** unique or primary key constraint */
  shopifyAccount_pkey = 'shopifyAccount_pkey',
  /** unique or primary key constraint */
  shopifyAccount_shopId_key = 'shopifyAccount_shopId_key'
}

/** input type for incrementing integer columne in table "shopifyAccounts" */
export type shopifyAccounts_inc_input = {
  shopId?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "shopifyAccounts" */
export type shopifyAccounts_insert_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  initialSyncState?: Maybe<Scalars['String']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  shop?: Maybe<shops_obj_rel_insert_input>,
  shopId?: Maybe<Scalars['bigint']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type shopifyAccounts_max_fields = {
   __typename?: 'shopifyAccounts_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  initialSyncState?: Maybe<Scalars['String']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  shopId?: Maybe<Scalars['bigint']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "shopifyAccounts" */
export type shopifyAccounts_max_order_by = {
  createdAt?: Maybe<order_by>,
  encryptedAccessToken?: Maybe<order_by>,
  id?: Maybe<order_by>,
  initialSyncState?: Maybe<order_by>,
  myshopifyDomain?: Maybe<order_by>,
  shopId?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type shopifyAccounts_min_fields = {
   __typename?: 'shopifyAccounts_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  initialSyncState?: Maybe<Scalars['String']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  shopId?: Maybe<Scalars['bigint']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "shopifyAccounts" */
export type shopifyAccounts_min_order_by = {
  createdAt?: Maybe<order_by>,
  encryptedAccessToken?: Maybe<order_by>,
  id?: Maybe<order_by>,
  initialSyncState?: Maybe<order_by>,
  myshopifyDomain?: Maybe<order_by>,
  shopId?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** response of any mutation on the table "shopifyAccounts" */
export type shopifyAccounts_mutation_response = {
   __typename?: 'shopifyAccounts_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<shopifyAccounts>,
};

/** input type for inserting object relation for remote table "shopifyAccounts" */
export type shopifyAccounts_obj_rel_insert_input = {
  data: shopifyAccounts_insert_input,
  on_conflict?: Maybe<shopifyAccounts_on_conflict>,
};

/** on conflict condition type for table "shopifyAccounts" */
export type shopifyAccounts_on_conflict = {
  constraint: shopifyAccounts_constraint,
  update_columns: Array<shopifyAccounts_update_column>,
  where?: Maybe<shopifyAccounts_bool_exp>,
};

/** ordering options when selecting data from "shopifyAccounts" */
export type shopifyAccounts_order_by = {
  createdAt?: Maybe<order_by>,
  encryptedAccessToken?: Maybe<order_by>,
  id?: Maybe<order_by>,
  initialSyncState?: Maybe<order_by>,
  myshopifyDomain?: Maybe<order_by>,
  shop?: Maybe<shops_order_by>,
  shopId?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** select columns of table "shopifyAccounts" */
export enum shopifyAccounts_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  encryptedAccessToken = 'encryptedAccessToken',
  /** column name */
  id = 'id',
  /** column name */
  initialSyncState = 'initialSyncState',
  /** column name */
  myshopifyDomain = 'myshopifyDomain',
  /** column name */
  shopId = 'shopId',
  /** column name */
  updatedAt = 'updatedAt'
}

/** input type for updating data in table "shopifyAccounts" */
export type shopifyAccounts_set_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  initialSyncState?: Maybe<Scalars['String']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  shopId?: Maybe<Scalars['bigint']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type shopifyAccounts_stddev_fields = {
   __typename?: 'shopifyAccounts_stddev_fields',
  shopId?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "shopifyAccounts" */
export type shopifyAccounts_stddev_order_by = {
  shopId?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type shopifyAccounts_stddev_pop_fields = {
   __typename?: 'shopifyAccounts_stddev_pop_fields',
  shopId?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "shopifyAccounts" */
export type shopifyAccounts_stddev_pop_order_by = {
  shopId?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type shopifyAccounts_stddev_samp_fields = {
   __typename?: 'shopifyAccounts_stddev_samp_fields',
  shopId?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "shopifyAccounts" */
export type shopifyAccounts_stddev_samp_order_by = {
  shopId?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type shopifyAccounts_sum_fields = {
   __typename?: 'shopifyAccounts_sum_fields',
  shopId?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "shopifyAccounts" */
export type shopifyAccounts_sum_order_by = {
  shopId?: Maybe<order_by>,
};

/** update columns of table "shopifyAccounts" */
export enum shopifyAccounts_update_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  encryptedAccessToken = 'encryptedAccessToken',
  /** column name */
  id = 'id',
  /** column name */
  initialSyncState = 'initialSyncState',
  /** column name */
  myshopifyDomain = 'myshopifyDomain',
  /** column name */
  shopId = 'shopId',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type shopifyAccounts_var_pop_fields = {
   __typename?: 'shopifyAccounts_var_pop_fields',
  shopId?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "shopifyAccounts" */
export type shopifyAccounts_var_pop_order_by = {
  shopId?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type shopifyAccounts_var_samp_fields = {
   __typename?: 'shopifyAccounts_var_samp_fields',
  shopId?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "shopifyAccounts" */
export type shopifyAccounts_var_samp_order_by = {
  shopId?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type shopifyAccounts_variance_fields = {
   __typename?: 'shopifyAccounts_variance_fields',
  shopId?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "shopifyAccounts" */
export type shopifyAccounts_variance_order_by = {
  shopId?: Maybe<order_by>,
};

/** columns and relationships of "shops" */
export type shops = {
   __typename?: 'shops',
  createdAt: Scalars['timestamptz'],
  currencycode?: Maybe<Scalars['bpchar']>,
  id: Scalars['bigint'],
  name?: Maybe<Scalars['String']>,
  /** An array relationship */
  products: Array<products>,
  /** An aggregated array relationship */
  products_aggregate: products_aggregate,
  /** An object relationship */
  shopifyAccount?: Maybe<shopifyAccounts>,
  updatedAt: Scalars['timestamptz'],
};


/** columns and relationships of "shops" */
export type shopsproductsArgs = {
  distinct_on?: Maybe<Array<products_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<products_order_by>>,
  where?: Maybe<products_bool_exp>
};


/** columns and relationships of "shops" */
export type shopsproducts_aggregateArgs = {
  distinct_on?: Maybe<Array<products_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<products_order_by>>,
  where?: Maybe<products_bool_exp>
};

/** aggregated selection of "shops" */
export type shops_aggregate = {
   __typename?: 'shops_aggregate',
  aggregate?: Maybe<shops_aggregate_fields>,
  nodes: Array<shops>,
};

/** aggregate fields of "shops" */
export type shops_aggregate_fields = {
   __typename?: 'shops_aggregate_fields',
  avg?: Maybe<shops_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<shops_max_fields>,
  min?: Maybe<shops_min_fields>,
  stddev?: Maybe<shops_stddev_fields>,
  stddev_pop?: Maybe<shops_stddev_pop_fields>,
  stddev_samp?: Maybe<shops_stddev_samp_fields>,
  sum?: Maybe<shops_sum_fields>,
  var_pop?: Maybe<shops_var_pop_fields>,
  var_samp?: Maybe<shops_var_samp_fields>,
  variance?: Maybe<shops_variance_fields>,
};


/** aggregate fields of "shops" */
export type shops_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<shops_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "shops" */
export type shops_aggregate_order_by = {
  avg?: Maybe<shops_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<shops_max_order_by>,
  min?: Maybe<shops_min_order_by>,
  stddev?: Maybe<shops_stddev_order_by>,
  stddev_pop?: Maybe<shops_stddev_pop_order_by>,
  stddev_samp?: Maybe<shops_stddev_samp_order_by>,
  sum?: Maybe<shops_sum_order_by>,
  var_pop?: Maybe<shops_var_pop_order_by>,
  var_samp?: Maybe<shops_var_samp_order_by>,
  variance?: Maybe<shops_variance_order_by>,
};

/** input type for inserting array relation for remote table "shops" */
export type shops_arr_rel_insert_input = {
  data: Array<shops_insert_input>,
  on_conflict?: Maybe<shops_on_conflict>,
};

/** aggregate avg on columns */
export type shops_avg_fields = {
   __typename?: 'shops_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "shops" */
export type shops_avg_order_by = {
  id?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "shops". All fields are combined with a logical 'AND'. */
export type shops_bool_exp = {
  _and?: Maybe<Array<Maybe<shops_bool_exp>>>,
  _not?: Maybe<shops_bool_exp>,
  _or?: Maybe<Array<Maybe<shops_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  currencycode?: Maybe<bpchar_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  name?: Maybe<String_comparison_exp>,
  products?: Maybe<products_bool_exp>,
  shopifyAccount?: Maybe<shopifyAccounts_bool_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
};

/** unique or primary key constraints on table "shops" */
export enum shops_constraint {
  /** unique or primary key constraint */
  shops_id_key = 'shops_id_key',
  /** unique or primary key constraint */
  shops_pkey = 'shops_pkey'
}

/** input type for incrementing integer columne in table "shops" */
export type shops_inc_input = {
  id?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "shops" */
export type shops_insert_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  currencycode?: Maybe<Scalars['bpchar']>,
  id?: Maybe<Scalars['bigint']>,
  name?: Maybe<Scalars['String']>,
  products?: Maybe<products_arr_rel_insert_input>,
  shopifyAccount?: Maybe<shopifyAccounts_obj_rel_insert_input>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type shops_max_fields = {
   __typename?: 'shops_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  name?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "shops" */
export type shops_max_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  name?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type shops_min_fields = {
   __typename?: 'shops_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  name?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "shops" */
export type shops_min_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  name?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** response of any mutation on the table "shops" */
export type shops_mutation_response = {
   __typename?: 'shops_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<shops>,
};

/** input type for inserting object relation for remote table "shops" */
export type shops_obj_rel_insert_input = {
  data: shops_insert_input,
  on_conflict?: Maybe<shops_on_conflict>,
};

/** on conflict condition type for table "shops" */
export type shops_on_conflict = {
  constraint: shops_constraint,
  update_columns: Array<shops_update_column>,
  where?: Maybe<shops_bool_exp>,
};

/** ordering options when selecting data from "shops" */
export type shops_order_by = {
  createdAt?: Maybe<order_by>,
  currencycode?: Maybe<order_by>,
  id?: Maybe<order_by>,
  name?: Maybe<order_by>,
  products_aggregate?: Maybe<products_aggregate_order_by>,
  shopifyAccount?: Maybe<shopifyAccounts_order_by>,
  updatedAt?: Maybe<order_by>,
};

/** select columns of table "shops" */
export enum shops_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  currencycode = 'currencycode',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updatedAt = 'updatedAt'
}

/** input type for updating data in table "shops" */
export type shops_set_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  currencycode?: Maybe<Scalars['bpchar']>,
  id?: Maybe<Scalars['bigint']>,
  name?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type shops_stddev_fields = {
   __typename?: 'shops_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "shops" */
export type shops_stddev_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type shops_stddev_pop_fields = {
   __typename?: 'shops_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "shops" */
export type shops_stddev_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type shops_stddev_samp_fields = {
   __typename?: 'shops_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "shops" */
export type shops_stddev_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type shops_sum_fields = {
   __typename?: 'shops_sum_fields',
  id?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "shops" */
export type shops_sum_order_by = {
  id?: Maybe<order_by>,
};

/** update columns of table "shops" */
export enum shops_update_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  currencycode = 'currencycode',
  /** column name */
  id = 'id',
  /** column name */
  name = 'name',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type shops_var_pop_fields = {
   __typename?: 'shops_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "shops" */
export type shops_var_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type shops_var_samp_fields = {
   __typename?: 'shops_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "shops" */
export type shops_var_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type shops_variance_fields = {
   __typename?: 'shops_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "shops" */
export type shops_variance_order_by = {
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
  /** fetch data from the table: "images" using primary key columns */
  image?: Maybe<images>,
  /** fetch data from the table: "images" */
  images: Array<images>,
  /** fetch aggregated fields from the table: "images" */
  imagesAggregate: images_aggregate,
  /** fetch data from the table: "joinOptionValueImages" */
  joinOptionValueImages: Array<joinOptionValueImages>,
  /** fetch data from the table: "joinProductImages" using primary key columns */
  joinProductImage?: Maybe<joinProductImages>,
  /** fetch data from the table: "joinProductImages" */
  joinProductImages: Array<joinProductImages>,
  /** fetch aggregated fields from the table: "joinProductImages" */
  joinProductImagesAggregate: joinProductImages_aggregate,
  /** fetch data from the table: "joinOptionValueImages" using primary key columns */
  joinProductOptionValueImage?: Maybe<joinOptionValueImages>,
  /** fetch aggregated fields from the table: "joinOptionValueImages" */
  joinProductOptionValueImagesAggregate: joinOptionValueImages_aggregate,
  /** fetch data from the table: "joinProductVideos" using primary key columns */
  joinProductVideo?: Maybe<joinProductVideos>,
  /** fetch data from the table: "joinProductVideos" */
  joinProductVideos: Array<joinProductVideos>,
  /** fetch aggregated fields from the table: "joinProductVideos" */
  joinProductVideosAggregate: joinProductVideos_aggregate,
  /** fetch data from the table: "joinVariantImages" using primary key columns */
  joinVariantImage?: Maybe<joinVariantImages>,
  /** fetch data from the table: "joinVariantImages" */
  joinVariantImages: Array<joinVariantImages>,
  /** fetch aggregated fields from the table: "joinVariantImages" */
  joinVariantImagesAggregate: joinVariantImages_aggregate,
  /** fetch data from the table: "joinVariantValues" using primary key columns */
  joinVariantValue?: Maybe<joinVariantValues>,
  /** fetch data from the table: "joinVariantValues" */
  joinVariantValues: Array<joinVariantValues>,
  /** fetch aggregated fields from the table: "joinVariantValues" */
  joinVariantValuesAggregate: joinVariantValues_aggregate,
  /** fetch data from the table: "optionValueImages" */
  optionValueImages: Array<optionValueImages>,
  /** fetch aggregated fields from the table: "optionValueImages" */
  optionValueImages_aggregate: optionValueImages_aggregate,
  /** fetch data from the table: "products" using primary key columns */
  product?: Maybe<products>,
  /** fetch data from the table: "productImages" */
  productImages: Array<productImages>,
  /** fetch aggregated fields from the table: "productImages" */
  productImages_aggregate: productImages_aggregate,
  /** fetch data from the table: "productOptions" using primary key columns */
  productOption?: Maybe<productOptions>,
  /** fetch data from the table: "productOptionValues" using primary key columns */
  productOptionValue?: Maybe<productOptionValues>,
  /** fetch data from the table: "productOptionValues" */
  productOptionValues: Array<productOptionValues>,
  /** fetch aggregated fields from the table: "productOptionValues" */
  productOptionValuesAggregate: productOptionValues_aggregate,
  /** fetch data from the table: "productOptions" */
  productOptions: Array<productOptions>,
  /** fetch aggregated fields from the table: "productOptions" */
  productOptionsAggregate: productOptions_aggregate,
  /** fetch data from the table: "productVariants" using primary key columns */
  productVariant?: Maybe<productVariants>,
  /** fetch data from the table: "productVariants" */
  productVariants: Array<productVariants>,
  /** fetch aggregated fields from the table: "productVariants" */
  productVariantsAggregate: productVariants_aggregate,
  /** fetch data from the table: "productVideos" */
  productVideos: Array<productVideos>,
  /** fetch aggregated fields from the table: "productVideos" */
  productVideos_aggregate: productVideos_aggregate,
  /** fetch data from the table: "products" */
  products: Array<products>,
  /** fetch aggregated fields from the table: "products" */
  productsAggregate: products_aggregate,
  /** fetch data from the table: "selectedOptions" */
  selectedOptions: Array<selectedOptions>,
  /** fetch aggregated fields from the table: "selectedOptions" */
  selectedOptions_aggregate: selectedOptions_aggregate,
  /** fetch data from the table: "shops" using primary key columns */
  shop?: Maybe<shops>,
  /** fetch data from the table: "shopifyAccounts" using primary key columns */
  shopifyAccount?: Maybe<shopifyAccounts>,
  /** fetch data from the table: "shopifyAccounts" */
  shopifyAccounts: Array<shopifyAccounts>,
  /** fetch aggregated fields from the table: "shopifyAccounts" */
  shopifyAccountsAggregate: shopifyAccounts_aggregate,
  /** fetch data from the table: "shops" */
  shops: Array<shops>,
  /** fetch aggregated fields from the table: "shops" */
  shopsAggregate: shops_aggregate,
  /** fetch data from the table: "variantImages" */
  variantImages: Array<variantImages>,
  /** fetch aggregated fields from the table: "variantImages" */
  variantImages_aggregate: variantImages_aggregate,
  /** fetch data from the table: "videos" */
  videos: Array<videos>,
  /** fetch aggregated fields from the table: "videos" */
  videos_aggregate: videos_aggregate,
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<videos>,
  /** fetch data from the table: "x_cache_shopify_productVariants" */
  x_cache_shopify_productVariants: Array<x_cache_shopify_productVariants>,
  /** fetch aggregated fields from the table: "x_cache_shopify_productVariants" */
  x_cache_shopify_productVariants_aggregate: x_cache_shopify_productVariants_aggregate,
  /** fetch data from the table: "x_cache_shopify_productVariants" using primary key columns */
  x_cache_shopify_productVariants_by_pk?: Maybe<x_cache_shopify_productVariants>,
  /** fetch data from the table: "x_cache_shopify_products" */
  x_cache_shopify_products: Array<x_cache_shopify_products>,
  /** fetch aggregated fields from the table: "x_cache_shopify_products" */
  x_cache_shopify_products_aggregate: x_cache_shopify_products_aggregate,
  /** fetch data from the table: "x_cache_shopify_products" using primary key columns */
  x_cache_shopify_products_by_pk?: Maybe<x_cache_shopify_products>,
  /** fetch data from the table: "x_queue_shopify_fetchProductVariants" */
  x_queue_shopify_fetchProductVariants: Array<x_queue_shopify_fetchProductVariants>,
  /** fetch aggregated fields from the table: "x_queue_shopify_fetchProductVariants" */
  x_queue_shopify_fetchProductVariants_aggregate: x_queue_shopify_fetchProductVariants_aggregate,
  /** fetch data from the table: "x_queue_shopify_fetchProductVariants" using primary key columns */
  x_queue_shopify_fetchProductVariants_by_pk?: Maybe<x_queue_shopify_fetchProductVariants>,
  /** fetch data from the table: "x_queue_shopify_fetchProducts" */
  x_queue_shopify_fetchProducts: Array<x_queue_shopify_fetchProducts>,
  /** fetch aggregated fields from the table: "x_queue_shopify_fetchProducts" */
  x_queue_shopify_fetchProducts_aggregate: x_queue_shopify_fetchProducts_aggregate,
  /** fetch data from the table: "x_queue_shopify_fetchProducts" using primary key columns */
  x_queue_shopify_fetchProducts_by_pk?: Maybe<x_queue_shopify_fetchProducts>,
  /** fetch data from the table: "x_queue_shopify_saveToPlatform" */
  x_queue_shopify_saveToPlatform: Array<x_queue_shopify_saveToPlatform>,
  /** fetch aggregated fields from the table: "x_queue_shopify_saveToPlatform" */
  x_queue_shopify_saveToPlatform_aggregate: x_queue_shopify_saveToPlatform_aggregate,
  /** fetch data from the table: "x_queue_shopify_saveToPlatform" using primary key columns */
  x_queue_shopify_saveToPlatform_by_pk?: Maybe<x_queue_shopify_saveToPlatform>,
  /** fetch data from the table: "x_queue_shopify_transformToPlatform" */
  x_queue_shopify_transformToPlatform: Array<x_queue_shopify_transformToPlatform>,
  /** fetch aggregated fields from the table: "x_queue_shopify_transformToPlatform" */
  x_queue_shopify_transformToPlatform_aggregate: x_queue_shopify_transformToPlatform_aggregate,
  /** fetch data from the table: "x_queue_shopify_transformToPlatform" using primary key columns */
  x_queue_shopify_transformToPlatform_by_pk?: Maybe<x_queue_shopify_transformToPlatform>,
  /** fetch data from the table: "x_standalone_event_triggers" */
  x_standalone_event_triggers: Array<x_standalone_event_triggers>,
  /** fetch aggregated fields from the table: "x_standalone_event_triggers" */
  x_standalone_event_triggers_aggregate: x_standalone_event_triggers_aggregate,
  /** fetch data from the table: "x_standalone_event_triggers" using primary key columns */
  x_standalone_event_triggers_by_pk?: Maybe<x_standalone_event_triggers>,
};


/** subscription root */
export type subscription_rootimageArgs = {
  id: Scalars['bigint']
};


/** subscription root */
export type subscription_rootimagesArgs = {
  distinct_on?: Maybe<Array<images_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<images_order_by>>,
  where?: Maybe<images_bool_exp>
};


/** subscription root */
export type subscription_rootimagesAggregateArgs = {
  distinct_on?: Maybe<Array<images_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<images_order_by>>,
  where?: Maybe<images_bool_exp>
};


/** subscription root */
export type subscription_rootjoinOptionValueImagesArgs = {
  distinct_on?: Maybe<Array<joinOptionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinOptionValueImages_order_by>>,
  where?: Maybe<joinOptionValueImages_bool_exp>
};


/** subscription root */
export type subscription_rootjoinProductImageArgs = {
  imageId: Scalars['bigint'],
  productId: Scalars['bigint']
};


/** subscription root */
export type subscription_rootjoinProductImagesArgs = {
  distinct_on?: Maybe<Array<joinProductImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductImages_order_by>>,
  where?: Maybe<joinProductImages_bool_exp>
};


/** subscription root */
export type subscription_rootjoinProductImagesAggregateArgs = {
  distinct_on?: Maybe<Array<joinProductImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductImages_order_by>>,
  where?: Maybe<joinProductImages_bool_exp>
};


/** subscription root */
export type subscription_rootjoinProductOptionValueImageArgs = {
  imageId: Scalars['bigint'],
  productOptionValueId: Scalars['bigint']
};


/** subscription root */
export type subscription_rootjoinProductOptionValueImagesAggregateArgs = {
  distinct_on?: Maybe<Array<joinOptionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinOptionValueImages_order_by>>,
  where?: Maybe<joinOptionValueImages_bool_exp>
};


/** subscription root */
export type subscription_rootjoinProductVideoArgs = {
  productId: Scalars['bigint'],
  videoId: Scalars['bigint']
};


/** subscription root */
export type subscription_rootjoinProductVideosArgs = {
  distinct_on?: Maybe<Array<joinProductVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductVideos_order_by>>,
  where?: Maybe<joinProductVideos_bool_exp>
};


/** subscription root */
export type subscription_rootjoinProductVideosAggregateArgs = {
  distinct_on?: Maybe<Array<joinProductVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductVideos_order_by>>,
  where?: Maybe<joinProductVideos_bool_exp>
};


/** subscription root */
export type subscription_rootjoinVariantImageArgs = {
  imageId: Scalars['bigint'],
  productVariantId: Scalars['bigint']
};


/** subscription root */
export type subscription_rootjoinVariantImagesArgs = {
  distinct_on?: Maybe<Array<joinVariantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantImages_order_by>>,
  where?: Maybe<joinVariantImages_bool_exp>
};


/** subscription root */
export type subscription_rootjoinVariantImagesAggregateArgs = {
  distinct_on?: Maybe<Array<joinVariantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantImages_order_by>>,
  where?: Maybe<joinVariantImages_bool_exp>
};


/** subscription root */
export type subscription_rootjoinVariantValueArgs = {
  productOptionValueId: Scalars['bigint'],
  productVariantId: Scalars['bigint']
};


/** subscription root */
export type subscription_rootjoinVariantValuesArgs = {
  distinct_on?: Maybe<Array<joinVariantValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantValues_order_by>>,
  where?: Maybe<joinVariantValues_bool_exp>
};


/** subscription root */
export type subscription_rootjoinVariantValuesAggregateArgs = {
  distinct_on?: Maybe<Array<joinVariantValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinVariantValues_order_by>>,
  where?: Maybe<joinVariantValues_bool_exp>
};


/** subscription root */
export type subscription_rootoptionValueImagesArgs = {
  distinct_on?: Maybe<Array<optionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<optionValueImages_order_by>>,
  where?: Maybe<optionValueImages_bool_exp>
};


/** subscription root */
export type subscription_rootoptionValueImages_aggregateArgs = {
  distinct_on?: Maybe<Array<optionValueImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<optionValueImages_order_by>>,
  where?: Maybe<optionValueImages_bool_exp>
};


/** subscription root */
export type subscription_rootproductArgs = {
  id: Scalars['bigint']
};


/** subscription root */
export type subscription_rootproductImagesArgs = {
  distinct_on?: Maybe<Array<productImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productImages_order_by>>,
  where?: Maybe<productImages_bool_exp>
};


/** subscription root */
export type subscription_rootproductImages_aggregateArgs = {
  distinct_on?: Maybe<Array<productImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productImages_order_by>>,
  where?: Maybe<productImages_bool_exp>
};


/** subscription root */
export type subscription_rootproductOptionArgs = {
  id: Scalars['bigint']
};


/** subscription root */
export type subscription_rootproductOptionValueArgs = {
  id: Scalars['bigint']
};


/** subscription root */
export type subscription_rootproductOptionValuesArgs = {
  distinct_on?: Maybe<Array<productOptionValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptionValues_order_by>>,
  where?: Maybe<productOptionValues_bool_exp>
};


/** subscription root */
export type subscription_rootproductOptionValuesAggregateArgs = {
  distinct_on?: Maybe<Array<productOptionValues_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptionValues_order_by>>,
  where?: Maybe<productOptionValues_bool_exp>
};


/** subscription root */
export type subscription_rootproductOptionsArgs = {
  distinct_on?: Maybe<Array<productOptions_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptions_order_by>>,
  where?: Maybe<productOptions_bool_exp>
};


/** subscription root */
export type subscription_rootproductOptionsAggregateArgs = {
  distinct_on?: Maybe<Array<productOptions_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productOptions_order_by>>,
  where?: Maybe<productOptions_bool_exp>
};


/** subscription root */
export type subscription_rootproductVariantArgs = {
  id: Scalars['bigint']
};


/** subscription root */
export type subscription_rootproductVariantsArgs = {
  distinct_on?: Maybe<Array<productVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productVariants_order_by>>,
  where?: Maybe<productVariants_bool_exp>
};


/** subscription root */
export type subscription_rootproductVariantsAggregateArgs = {
  distinct_on?: Maybe<Array<productVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productVariants_order_by>>,
  where?: Maybe<productVariants_bool_exp>
};


/** subscription root */
export type subscription_rootproductVideosArgs = {
  distinct_on?: Maybe<Array<productVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productVideos_order_by>>,
  where?: Maybe<productVideos_bool_exp>
};


/** subscription root */
export type subscription_rootproductVideos_aggregateArgs = {
  distinct_on?: Maybe<Array<productVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<productVideos_order_by>>,
  where?: Maybe<productVideos_bool_exp>
};


/** subscription root */
export type subscription_rootproductsArgs = {
  distinct_on?: Maybe<Array<products_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<products_order_by>>,
  where?: Maybe<products_bool_exp>
};


/** subscription root */
export type subscription_rootproductsAggregateArgs = {
  distinct_on?: Maybe<Array<products_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<products_order_by>>,
  where?: Maybe<products_bool_exp>
};


/** subscription root */
export type subscription_rootselectedOptionsArgs = {
  distinct_on?: Maybe<Array<selectedOptions_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<selectedOptions_order_by>>,
  where?: Maybe<selectedOptions_bool_exp>
};


/** subscription root */
export type subscription_rootselectedOptions_aggregateArgs = {
  distinct_on?: Maybe<Array<selectedOptions_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<selectedOptions_order_by>>,
  where?: Maybe<selectedOptions_bool_exp>
};


/** subscription root */
export type subscription_rootshopArgs = {
  id: Scalars['bigint']
};


/** subscription root */
export type subscription_rootshopifyAccountArgs = {
  id: Scalars['String']
};


/** subscription root */
export type subscription_rootshopifyAccountsArgs = {
  distinct_on?: Maybe<Array<shopifyAccounts_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<shopifyAccounts_order_by>>,
  where?: Maybe<shopifyAccounts_bool_exp>
};


/** subscription root */
export type subscription_rootshopifyAccountsAggregateArgs = {
  distinct_on?: Maybe<Array<shopifyAccounts_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<shopifyAccounts_order_by>>,
  where?: Maybe<shopifyAccounts_bool_exp>
};


/** subscription root */
export type subscription_rootshopsArgs = {
  distinct_on?: Maybe<Array<shops_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<shops_order_by>>,
  where?: Maybe<shops_bool_exp>
};


/** subscription root */
export type subscription_rootshopsAggregateArgs = {
  distinct_on?: Maybe<Array<shops_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<shops_order_by>>,
  where?: Maybe<shops_bool_exp>
};


/** subscription root */
export type subscription_rootvariantImagesArgs = {
  distinct_on?: Maybe<Array<variantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<variantImages_order_by>>,
  where?: Maybe<variantImages_bool_exp>
};


/** subscription root */
export type subscription_rootvariantImages_aggregateArgs = {
  distinct_on?: Maybe<Array<variantImages_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<variantImages_order_by>>,
  where?: Maybe<variantImages_bool_exp>
};


/** subscription root */
export type subscription_rootvideosArgs = {
  distinct_on?: Maybe<Array<videos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<videos_order_by>>,
  where?: Maybe<videos_bool_exp>
};


/** subscription root */
export type subscription_rootvideos_aggregateArgs = {
  distinct_on?: Maybe<Array<videos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<videos_order_by>>,
  where?: Maybe<videos_bool_exp>
};


/** subscription root */
export type subscription_rootvideos_by_pkArgs = {
  id: Scalars['bigint']
};


/** subscription root */
export type subscription_rootx_cache_shopify_productVariantsArgs = {
  distinct_on?: Maybe<Array<x_cache_shopify_productVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_cache_shopify_productVariants_order_by>>,
  where?: Maybe<x_cache_shopify_productVariants_bool_exp>
};


/** subscription root */
export type subscription_rootx_cache_shopify_productVariants_aggregateArgs = {
  distinct_on?: Maybe<Array<x_cache_shopify_productVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_cache_shopify_productVariants_order_by>>,
  where?: Maybe<x_cache_shopify_productVariants_bool_exp>
};


/** subscription root */
export type subscription_rootx_cache_shopify_productVariants_by_pkArgs = {
  id: Scalars['String']
};


/** subscription root */
export type subscription_rootx_cache_shopify_productsArgs = {
  distinct_on?: Maybe<Array<x_cache_shopify_products_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_cache_shopify_products_order_by>>,
  where?: Maybe<x_cache_shopify_products_bool_exp>
};


/** subscription root */
export type subscription_rootx_cache_shopify_products_aggregateArgs = {
  distinct_on?: Maybe<Array<x_cache_shopify_products_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_cache_shopify_products_order_by>>,
  where?: Maybe<x_cache_shopify_products_bool_exp>
};


/** subscription root */
export type subscription_rootx_cache_shopify_products_by_pkArgs = {
  id: Scalars['String']
};


/** subscription root */
export type subscription_rootx_queue_shopify_fetchProductVariantsArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_fetchProductVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_fetchProductVariants_order_by>>,
  where?: Maybe<x_queue_shopify_fetchProductVariants_bool_exp>
};


/** subscription root */
export type subscription_rootx_queue_shopify_fetchProductVariants_aggregateArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_fetchProductVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_fetchProductVariants_order_by>>,
  where?: Maybe<x_queue_shopify_fetchProductVariants_bool_exp>
};


/** subscription root */
export type subscription_rootx_queue_shopify_fetchProductVariants_by_pkArgs = {
  id: Scalars['bigint']
};


/** subscription root */
export type subscription_rootx_queue_shopify_fetchProductsArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_fetchProducts_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_fetchProducts_order_by>>,
  where?: Maybe<x_queue_shopify_fetchProducts_bool_exp>
};


/** subscription root */
export type subscription_rootx_queue_shopify_fetchProducts_aggregateArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_fetchProducts_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_fetchProducts_order_by>>,
  where?: Maybe<x_queue_shopify_fetchProducts_bool_exp>
};


/** subscription root */
export type subscription_rootx_queue_shopify_fetchProducts_by_pkArgs = {
  id: Scalars['bigint']
};


/** subscription root */
export type subscription_rootx_queue_shopify_saveToPlatformArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_saveToPlatform_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_saveToPlatform_order_by>>,
  where?: Maybe<x_queue_shopify_saveToPlatform_bool_exp>
};


/** subscription root */
export type subscription_rootx_queue_shopify_saveToPlatform_aggregateArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_saveToPlatform_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_saveToPlatform_order_by>>,
  where?: Maybe<x_queue_shopify_saveToPlatform_bool_exp>
};


/** subscription root */
export type subscription_rootx_queue_shopify_saveToPlatform_by_pkArgs = {
  id: Scalars['bigint']
};


/** subscription root */
export type subscription_rootx_queue_shopify_transformToPlatformArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_transformToPlatform_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_transformToPlatform_order_by>>,
  where?: Maybe<x_queue_shopify_transformToPlatform_bool_exp>
};


/** subscription root */
export type subscription_rootx_queue_shopify_transformToPlatform_aggregateArgs = {
  distinct_on?: Maybe<Array<x_queue_shopify_transformToPlatform_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_queue_shopify_transformToPlatform_order_by>>,
  where?: Maybe<x_queue_shopify_transformToPlatform_bool_exp>
};


/** subscription root */
export type subscription_rootx_queue_shopify_transformToPlatform_by_pkArgs = {
  id: Scalars['bigint']
};


/** subscription root */
export type subscription_rootx_standalone_event_triggersArgs = {
  distinct_on?: Maybe<Array<x_standalone_event_triggers_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_standalone_event_triggers_order_by>>,
  where?: Maybe<x_standalone_event_triggers_bool_exp>
};


/** subscription root */
export type subscription_rootx_standalone_event_triggers_aggregateArgs = {
  distinct_on?: Maybe<Array<x_standalone_event_triggers_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_standalone_event_triggers_order_by>>,
  where?: Maybe<x_standalone_event_triggers_bool_exp>
};


/** subscription root */
export type subscription_rootx_standalone_event_triggers_by_pkArgs = {
  id: Scalars['bigint']
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


/** columns and relationships of "variantImages" */
export type variantImages = {
   __typename?: 'variantImages',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregated selection of "variantImages" */
export type variantImages_aggregate = {
   __typename?: 'variantImages_aggregate',
  aggregate?: Maybe<variantImages_aggregate_fields>,
  nodes: Array<variantImages>,
};

/** aggregate fields of "variantImages" */
export type variantImages_aggregate_fields = {
   __typename?: 'variantImages_aggregate_fields',
  avg?: Maybe<variantImages_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<variantImages_max_fields>,
  min?: Maybe<variantImages_min_fields>,
  stddev?: Maybe<variantImages_stddev_fields>,
  stddev_pop?: Maybe<variantImages_stddev_pop_fields>,
  stddev_samp?: Maybe<variantImages_stddev_samp_fields>,
  sum?: Maybe<variantImages_sum_fields>,
  var_pop?: Maybe<variantImages_var_pop_fields>,
  var_samp?: Maybe<variantImages_var_samp_fields>,
  variance?: Maybe<variantImages_variance_fields>,
};


/** aggregate fields of "variantImages" */
export type variantImages_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<variantImages_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "variantImages" */
export type variantImages_aggregate_order_by = {
  avg?: Maybe<variantImages_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<variantImages_max_order_by>,
  min?: Maybe<variantImages_min_order_by>,
  stddev?: Maybe<variantImages_stddev_order_by>,
  stddev_pop?: Maybe<variantImages_stddev_pop_order_by>,
  stddev_samp?: Maybe<variantImages_stddev_samp_order_by>,
  sum?: Maybe<variantImages_sum_order_by>,
  var_pop?: Maybe<variantImages_var_pop_order_by>,
  var_samp?: Maybe<variantImages_var_samp_order_by>,
  variance?: Maybe<variantImages_variance_order_by>,
};

/** aggregate avg on columns */
export type variantImages_avg_fields = {
   __typename?: 'variantImages_avg_fields',
  id?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "variantImages" */
export type variantImages_avg_order_by = {
  id?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "variantImages". All fields are combined with a logical 'AND'. */
export type variantImages_bool_exp = {
  _and?: Maybe<Array<Maybe<variantImages_bool_exp>>>,
  _not?: Maybe<variantImages_bool_exp>,
  _or?: Maybe<Array<Maybe<variantImages_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  productVariantId?: Maybe<bigint_comparison_exp>,
  src?: Maybe<String_comparison_exp>,
  thumbnailSrc?: Maybe<String_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
};

/** aggregate max on columns */
export type variantImages_max_fields = {
   __typename?: 'variantImages_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "variantImages" */
export type variantImages_max_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type variantImages_min_fields = {
   __typename?: 'variantImages_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "variantImages" */
export type variantImages_min_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** ordering options when selecting data from "variantImages" */
export type variantImages_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** select columns of table "variantImages" */
export enum variantImages_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  id = 'id',
  /** column name */
  productVariantId = 'productVariantId',
  /** column name */
  src = 'src',
  /** column name */
  thumbnailSrc = 'thumbnailSrc',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate stddev on columns */
export type variantImages_stddev_fields = {
   __typename?: 'variantImages_stddev_fields',
  id?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "variantImages" */
export type variantImages_stddev_order_by = {
  id?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type variantImages_stddev_pop_fields = {
   __typename?: 'variantImages_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "variantImages" */
export type variantImages_stddev_pop_order_by = {
  id?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type variantImages_stddev_samp_fields = {
   __typename?: 'variantImages_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "variantImages" */
export type variantImages_stddev_samp_order_by = {
  id?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type variantImages_sum_fields = {
   __typename?: 'variantImages_sum_fields',
  id?: Maybe<Scalars['bigint']>,
  productVariantId?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "variantImages" */
export type variantImages_sum_order_by = {
  id?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate var_pop on columns */
export type variantImages_var_pop_fields = {
   __typename?: 'variantImages_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "variantImages" */
export type variantImages_var_pop_order_by = {
  id?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type variantImages_var_samp_fields = {
   __typename?: 'variantImages_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "variantImages" */
export type variantImages_var_samp_order_by = {
  id?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type variantImages_variance_fields = {
   __typename?: 'variantImages_variance_fields',
  id?: Maybe<Scalars['Float']>,
  productVariantId?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "variantImages" */
export type variantImages_variance_order_by = {
  id?: Maybe<order_by>,
  productVariantId?: Maybe<order_by>,
};

/** columns and relationships of "videos" */
export type videos = {
   __typename?: 'videos',
  createdAt: Scalars['timestamptz'],
  id: Scalars['bigint'],
  /** An array relationship */
  joinProductVideos: Array<joinProductVideos>,
  /** An aggregated array relationship */
  joinProductVideos_aggregate: joinProductVideos_aggregate,
  src: Scalars['String'],
  thumbnailSrc: Scalars['String'],
  updatedAt: Scalars['timestamptz'],
};


/** columns and relationships of "videos" */
export type videosjoinProductVideosArgs = {
  distinct_on?: Maybe<Array<joinProductVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductVideos_order_by>>,
  where?: Maybe<joinProductVideos_bool_exp>
};


/** columns and relationships of "videos" */
export type videosjoinProductVideos_aggregateArgs = {
  distinct_on?: Maybe<Array<joinProductVideos_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<joinProductVideos_order_by>>,
  where?: Maybe<joinProductVideos_bool_exp>
};

/** aggregated selection of "videos" */
export type videos_aggregate = {
   __typename?: 'videos_aggregate',
  aggregate?: Maybe<videos_aggregate_fields>,
  nodes: Array<videos>,
};

/** aggregate fields of "videos" */
export type videos_aggregate_fields = {
   __typename?: 'videos_aggregate_fields',
  avg?: Maybe<videos_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<videos_max_fields>,
  min?: Maybe<videos_min_fields>,
  stddev?: Maybe<videos_stddev_fields>,
  stddev_pop?: Maybe<videos_stddev_pop_fields>,
  stddev_samp?: Maybe<videos_stddev_samp_fields>,
  sum?: Maybe<videos_sum_fields>,
  var_pop?: Maybe<videos_var_pop_fields>,
  var_samp?: Maybe<videos_var_samp_fields>,
  variance?: Maybe<videos_variance_fields>,
};


/** aggregate fields of "videos" */
export type videos_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<videos_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "videos" */
export type videos_aggregate_order_by = {
  avg?: Maybe<videos_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<videos_max_order_by>,
  min?: Maybe<videos_min_order_by>,
  stddev?: Maybe<videos_stddev_order_by>,
  stddev_pop?: Maybe<videos_stddev_pop_order_by>,
  stddev_samp?: Maybe<videos_stddev_samp_order_by>,
  sum?: Maybe<videos_sum_order_by>,
  var_pop?: Maybe<videos_var_pop_order_by>,
  var_samp?: Maybe<videos_var_samp_order_by>,
  variance?: Maybe<videos_variance_order_by>,
};

/** input type for inserting array relation for remote table "videos" */
export type videos_arr_rel_insert_input = {
  data: Array<videos_insert_input>,
  on_conflict?: Maybe<videos_on_conflict>,
};

/** aggregate avg on columns */
export type videos_avg_fields = {
   __typename?: 'videos_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "videos" */
export type videos_avg_order_by = {
  id?: Maybe<order_by>,
};

/** Boolean expression to filter rows from the table "videos". All fields are combined with a logical 'AND'. */
export type videos_bool_exp = {
  _and?: Maybe<Array<Maybe<videos_bool_exp>>>,
  _not?: Maybe<videos_bool_exp>,
  _or?: Maybe<Array<Maybe<videos_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  joinProductVideos?: Maybe<joinProductVideos_bool_exp>,
  src?: Maybe<String_comparison_exp>,
  thumbnailSrc?: Maybe<String_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
};

/** unique or primary key constraints on table "videos" */
export enum videos_constraint {
  /** unique or primary key constraint */
  videos_pkey = 'videos_pkey'
}

/** input type for incrementing integer columne in table "videos" */
export type videos_inc_input = {
  id?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "videos" */
export type videos_insert_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  joinProductVideos?: Maybe<joinProductVideos_arr_rel_insert_input>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type videos_max_fields = {
   __typename?: 'videos_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "videos" */
export type videos_max_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type videos_min_fields = {
   __typename?: 'videos_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "videos" */
export type videos_min_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** response of any mutation on the table "videos" */
export type videos_mutation_response = {
   __typename?: 'videos_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<videos>,
};

/** input type for inserting object relation for remote table "videos" */
export type videos_obj_rel_insert_input = {
  data: videos_insert_input,
  on_conflict?: Maybe<videos_on_conflict>,
};

/** on conflict condition type for table "videos" */
export type videos_on_conflict = {
  constraint: videos_constraint,
  update_columns: Array<videos_update_column>,
  where?: Maybe<videos_bool_exp>,
};

/** ordering options when selecting data from "videos" */
export type videos_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  joinProductVideos_aggregate?: Maybe<joinProductVideos_aggregate_order_by>,
  src?: Maybe<order_by>,
  thumbnailSrc?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** select columns of table "videos" */
export enum videos_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  id = 'id',
  /** column name */
  src = 'src',
  /** column name */
  thumbnailSrc = 'thumbnailSrc',
  /** column name */
  updatedAt = 'updatedAt'
}

/** input type for updating data in table "videos" */
export type videos_set_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  src?: Maybe<Scalars['String']>,
  thumbnailSrc?: Maybe<Scalars['String']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type videos_stddev_fields = {
   __typename?: 'videos_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "videos" */
export type videos_stddev_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type videos_stddev_pop_fields = {
   __typename?: 'videos_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "videos" */
export type videos_stddev_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type videos_stddev_samp_fields = {
   __typename?: 'videos_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "videos" */
export type videos_stddev_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type videos_sum_fields = {
   __typename?: 'videos_sum_fields',
  id?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "videos" */
export type videos_sum_order_by = {
  id?: Maybe<order_by>,
};

/** update columns of table "videos" */
export enum videos_update_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  id = 'id',
  /** column name */
  src = 'src',
  /** column name */
  thumbnailSrc = 'thumbnailSrc',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type videos_var_pop_fields = {
   __typename?: 'videos_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "videos" */
export type videos_var_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type videos_var_samp_fields = {
   __typename?: 'videos_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "videos" */
export type videos_var_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type videos_variance_fields = {
   __typename?: 'videos_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "videos" */
export type videos_variance_order_by = {
  id?: Maybe<order_by>,
};

/** columns and relationships of "x_cache_shopify_products" */
export type x_cache_shopify_products = {
   __typename?: 'x_cache_shopify_products',
  description?: Maybe<Scalars['String']>,
  handle: Scalars['String'],
  id: Scalars['String'],
  images?: Maybe<Scalars['jsonb']>,
  options?: Maybe<Scalars['jsonb']>,
  productType?: Maybe<Scalars['String']>,
  /** An object relationship */
  shopifyAccount: shopifyAccounts,
  shopifyAccountId: Scalars['String'],
  title?: Maybe<Scalars['String']>,
  /** An array relationship */
  variants: Array<x_cache_shopify_productVariants>,
  /** An aggregated array relationship */
  variants_aggregate: x_cache_shopify_productVariants_aggregate,
};


/** columns and relationships of "x_cache_shopify_products" */
export type x_cache_shopify_productsimagesArgs = {
  path?: Maybe<Scalars['String']>
};


/** columns and relationships of "x_cache_shopify_products" */
export type x_cache_shopify_productsoptionsArgs = {
  path?: Maybe<Scalars['String']>
};


/** columns and relationships of "x_cache_shopify_products" */
export type x_cache_shopify_productsvariantsArgs = {
  distinct_on?: Maybe<Array<x_cache_shopify_productVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_cache_shopify_productVariants_order_by>>,
  where?: Maybe<x_cache_shopify_productVariants_bool_exp>
};


/** columns and relationships of "x_cache_shopify_products" */
export type x_cache_shopify_productsvariants_aggregateArgs = {
  distinct_on?: Maybe<Array<x_cache_shopify_productVariants_select_column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<x_cache_shopify_productVariants_order_by>>,
  where?: Maybe<x_cache_shopify_productVariants_bool_exp>
};

/** aggregated selection of "x_cache_shopify_products" */
export type x_cache_shopify_products_aggregate = {
   __typename?: 'x_cache_shopify_products_aggregate',
  aggregate?: Maybe<x_cache_shopify_products_aggregate_fields>,
  nodes: Array<x_cache_shopify_products>,
};

/** aggregate fields of "x_cache_shopify_products" */
export type x_cache_shopify_products_aggregate_fields = {
   __typename?: 'x_cache_shopify_products_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<x_cache_shopify_products_max_fields>,
  min?: Maybe<x_cache_shopify_products_min_fields>,
};


/** aggregate fields of "x_cache_shopify_products" */
export type x_cache_shopify_products_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<x_cache_shopify_products_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "x_cache_shopify_products" */
export type x_cache_shopify_products_aggregate_order_by = {
  count?: Maybe<order_by>,
  max?: Maybe<x_cache_shopify_products_max_order_by>,
  min?: Maybe<x_cache_shopify_products_min_order_by>,
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type x_cache_shopify_products_append_input = {
  images?: Maybe<Scalars['jsonb']>,
  options?: Maybe<Scalars['jsonb']>,
};

/** input type for inserting array relation for remote table "x_cache_shopify_products" */
export type x_cache_shopify_products_arr_rel_insert_input = {
  data: Array<x_cache_shopify_products_insert_input>,
  on_conflict?: Maybe<x_cache_shopify_products_on_conflict>,
};

/** Boolean expression to filter rows from the table "x_cache_shopify_products". All fields are combined with a logical 'AND'. */
export type x_cache_shopify_products_bool_exp = {
  _and?: Maybe<Array<Maybe<x_cache_shopify_products_bool_exp>>>,
  _not?: Maybe<x_cache_shopify_products_bool_exp>,
  _or?: Maybe<Array<Maybe<x_cache_shopify_products_bool_exp>>>,
  description?: Maybe<String_comparison_exp>,
  handle?: Maybe<String_comparison_exp>,
  id?: Maybe<String_comparison_exp>,
  images?: Maybe<jsonb_comparison_exp>,
  options?: Maybe<jsonb_comparison_exp>,
  productType?: Maybe<String_comparison_exp>,
  shopifyAccount?: Maybe<shopifyAccounts_bool_exp>,
  shopifyAccountId?: Maybe<String_comparison_exp>,
  title?: Maybe<String_comparison_exp>,
  variants?: Maybe<x_cache_shopify_productVariants_bool_exp>,
};

/** unique or primary key constraints on table "x_cache_shopify_products" */
export enum x_cache_shopify_products_constraint {
  /** unique or primary key constraint */
  x_cache_shopify_products_pkey = 'x_cache_shopify_products_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type x_cache_shopify_products_delete_at_path_input = {
  images?: Maybe<Array<Maybe<Scalars['String']>>>,
  options?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** 
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type x_cache_shopify_products_delete_elem_input = {
  images?: Maybe<Scalars['Int']>,
  options?: Maybe<Scalars['Int']>,
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type x_cache_shopify_products_delete_key_input = {
  images?: Maybe<Scalars['String']>,
  options?: Maybe<Scalars['String']>,
};

/** input type for inserting data into table "x_cache_shopify_products" */
export type x_cache_shopify_products_insert_input = {
  description?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  images?: Maybe<Scalars['jsonb']>,
  options?: Maybe<Scalars['jsonb']>,
  productType?: Maybe<Scalars['String']>,
  shopifyAccount?: Maybe<shopifyAccounts_obj_rel_insert_input>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  variants?: Maybe<x_cache_shopify_productVariants_arr_rel_insert_input>,
};

/** aggregate max on columns */
export type x_cache_shopify_products_max_fields = {
   __typename?: 'x_cache_shopify_products_max_fields',
  description?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  productType?: Maybe<Scalars['String']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "x_cache_shopify_products" */
export type x_cache_shopify_products_max_order_by = {
  description?: Maybe<order_by>,
  handle?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productType?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  title?: Maybe<order_by>,
};

/** aggregate min on columns */
export type x_cache_shopify_products_min_fields = {
   __typename?: 'x_cache_shopify_products_min_fields',
  description?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  productType?: Maybe<Scalars['String']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "x_cache_shopify_products" */
export type x_cache_shopify_products_min_order_by = {
  description?: Maybe<order_by>,
  handle?: Maybe<order_by>,
  id?: Maybe<order_by>,
  productType?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  title?: Maybe<order_by>,
};

/** response of any mutation on the table "x_cache_shopify_products" */
export type x_cache_shopify_products_mutation_response = {
   __typename?: 'x_cache_shopify_products_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<x_cache_shopify_products>,
};

/** input type for inserting object relation for remote table "x_cache_shopify_products" */
export type x_cache_shopify_products_obj_rel_insert_input = {
  data: x_cache_shopify_products_insert_input,
  on_conflict?: Maybe<x_cache_shopify_products_on_conflict>,
};

/** on conflict condition type for table "x_cache_shopify_products" */
export type x_cache_shopify_products_on_conflict = {
  constraint: x_cache_shopify_products_constraint,
  update_columns: Array<x_cache_shopify_products_update_column>,
  where?: Maybe<x_cache_shopify_products_bool_exp>,
};

/** ordering options when selecting data from "x_cache_shopify_products" */
export type x_cache_shopify_products_order_by = {
  description?: Maybe<order_by>,
  handle?: Maybe<order_by>,
  id?: Maybe<order_by>,
  images?: Maybe<order_by>,
  options?: Maybe<order_by>,
  productType?: Maybe<order_by>,
  shopifyAccount?: Maybe<shopifyAccounts_order_by>,
  shopifyAccountId?: Maybe<order_by>,
  title?: Maybe<order_by>,
  variants_aggregate?: Maybe<x_cache_shopify_productVariants_aggregate_order_by>,
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type x_cache_shopify_products_prepend_input = {
  images?: Maybe<Scalars['jsonb']>,
  options?: Maybe<Scalars['jsonb']>,
};

/** select columns of table "x_cache_shopify_products" */
export enum x_cache_shopify_products_select_column {
  /** column name */
  description = 'description',
  /** column name */
  handle = 'handle',
  /** column name */
  id = 'id',
  /** column name */
  images = 'images',
  /** column name */
  options = 'options',
  /** column name */
  productType = 'productType',
  /** column name */
  shopifyAccountId = 'shopifyAccountId',
  /** column name */
  title = 'title'
}

/** input type for updating data in table "x_cache_shopify_products" */
export type x_cache_shopify_products_set_input = {
  description?: Maybe<Scalars['String']>,
  handle?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  images?: Maybe<Scalars['jsonb']>,
  options?: Maybe<Scalars['jsonb']>,
  productType?: Maybe<Scalars['String']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

/** update columns of table "x_cache_shopify_products" */
export enum x_cache_shopify_products_update_column {
  /** column name */
  description = 'description',
  /** column name */
  handle = 'handle',
  /** column name */
  id = 'id',
  /** column name */
  images = 'images',
  /** column name */
  options = 'options',
  /** column name */
  productType = 'productType',
  /** column name */
  shopifyAccountId = 'shopifyAccountId',
  /** column name */
  title = 'title'
}

/** columns and relationships of "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants = {
   __typename?: 'x_cache_shopify_productVariants',
  availableForSale: Scalars['Boolean'],
  compareAtPrice?: Maybe<Scalars['String']>,
  id: Scalars['String'],
  images?: Maybe<Scalars['jsonb']>,
  inventoryQuantity: Scalars['Int'],
  price?: Maybe<Scalars['String']>,
  /** An object relationship */
  product: x_cache_shopify_products,
  productId: Scalars['String'],
  selectedOptions?: Maybe<Scalars['jsonb']>,
  /** An object relationship */
  shopifyAccount: shopifyAccounts,
  shopifyAccountId: Scalars['String'],
  title?: Maybe<Scalars['String']>,
};


/** columns and relationships of "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariantsimagesArgs = {
  path?: Maybe<Scalars['String']>
};


/** columns and relationships of "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariantsselectedOptionsArgs = {
  path?: Maybe<Scalars['String']>
};

/** aggregated selection of "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_aggregate = {
   __typename?: 'x_cache_shopify_productVariants_aggregate',
  aggregate?: Maybe<x_cache_shopify_productVariants_aggregate_fields>,
  nodes: Array<x_cache_shopify_productVariants>,
};

/** aggregate fields of "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_aggregate_fields = {
   __typename?: 'x_cache_shopify_productVariants_aggregate_fields',
  avg?: Maybe<x_cache_shopify_productVariants_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<x_cache_shopify_productVariants_max_fields>,
  min?: Maybe<x_cache_shopify_productVariants_min_fields>,
  stddev?: Maybe<x_cache_shopify_productVariants_stddev_fields>,
  stddev_pop?: Maybe<x_cache_shopify_productVariants_stddev_pop_fields>,
  stddev_samp?: Maybe<x_cache_shopify_productVariants_stddev_samp_fields>,
  sum?: Maybe<x_cache_shopify_productVariants_sum_fields>,
  var_pop?: Maybe<x_cache_shopify_productVariants_var_pop_fields>,
  var_samp?: Maybe<x_cache_shopify_productVariants_var_samp_fields>,
  variance?: Maybe<x_cache_shopify_productVariants_variance_fields>,
};


/** aggregate fields of "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<x_cache_shopify_productVariants_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_aggregate_order_by = {
  avg?: Maybe<x_cache_shopify_productVariants_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<x_cache_shopify_productVariants_max_order_by>,
  min?: Maybe<x_cache_shopify_productVariants_min_order_by>,
  stddev?: Maybe<x_cache_shopify_productVariants_stddev_order_by>,
  stddev_pop?: Maybe<x_cache_shopify_productVariants_stddev_pop_order_by>,
  stddev_samp?: Maybe<x_cache_shopify_productVariants_stddev_samp_order_by>,
  sum?: Maybe<x_cache_shopify_productVariants_sum_order_by>,
  var_pop?: Maybe<x_cache_shopify_productVariants_var_pop_order_by>,
  var_samp?: Maybe<x_cache_shopify_productVariants_var_samp_order_by>,
  variance?: Maybe<x_cache_shopify_productVariants_variance_order_by>,
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type x_cache_shopify_productVariants_append_input = {
  images?: Maybe<Scalars['jsonb']>,
  selectedOptions?: Maybe<Scalars['jsonb']>,
};

/** input type for inserting array relation for remote table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_arr_rel_insert_input = {
  data: Array<x_cache_shopify_productVariants_insert_input>,
  on_conflict?: Maybe<x_cache_shopify_productVariants_on_conflict>,
};

/** aggregate avg on columns */
export type x_cache_shopify_productVariants_avg_fields = {
   __typename?: 'x_cache_shopify_productVariants_avg_fields',
  inventoryQuantity?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_avg_order_by = {
  inventoryQuantity?: Maybe<order_by>,
};

/** 
 * Boolean expression to filter rows from the table
 * "x_cache_shopify_productVariants". All fields are combined with a logical 'AND'.
 */
export type x_cache_shopify_productVariants_bool_exp = {
  _and?: Maybe<Array<Maybe<x_cache_shopify_productVariants_bool_exp>>>,
  _not?: Maybe<x_cache_shopify_productVariants_bool_exp>,
  _or?: Maybe<Array<Maybe<x_cache_shopify_productVariants_bool_exp>>>,
  availableForSale?: Maybe<Boolean_comparison_exp>,
  compareAtPrice?: Maybe<String_comparison_exp>,
  id?: Maybe<String_comparison_exp>,
  images?: Maybe<jsonb_comparison_exp>,
  inventoryQuantity?: Maybe<Int_comparison_exp>,
  price?: Maybe<String_comparison_exp>,
  product?: Maybe<x_cache_shopify_products_bool_exp>,
  productId?: Maybe<String_comparison_exp>,
  selectedOptions?: Maybe<jsonb_comparison_exp>,
  shopifyAccount?: Maybe<shopifyAccounts_bool_exp>,
  shopifyAccountId?: Maybe<String_comparison_exp>,
  title?: Maybe<String_comparison_exp>,
};

/** unique or primary key constraints on table "x_cache_shopify_productVariants" */
export enum x_cache_shopify_productVariants_constraint {
  /** unique or primary key constraint */
  x_cache_shopify_productVariants_pkey = 'x_cache_shopify_productVariants_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type x_cache_shopify_productVariants_delete_at_path_input = {
  images?: Maybe<Array<Maybe<Scalars['String']>>>,
  selectedOptions?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** 
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type x_cache_shopify_productVariants_delete_elem_input = {
  images?: Maybe<Scalars['Int']>,
  selectedOptions?: Maybe<Scalars['Int']>,
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type x_cache_shopify_productVariants_delete_key_input = {
  images?: Maybe<Scalars['String']>,
  selectedOptions?: Maybe<Scalars['String']>,
};

/** input type for incrementing integer columne in table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_inc_input = {
  inventoryQuantity?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_insert_input = {
  availableForSale?: Maybe<Scalars['Boolean']>,
  compareAtPrice?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  images?: Maybe<Scalars['jsonb']>,
  inventoryQuantity?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['String']>,
  product?: Maybe<x_cache_shopify_products_obj_rel_insert_input>,
  productId?: Maybe<Scalars['String']>,
  selectedOptions?: Maybe<Scalars['jsonb']>,
  shopifyAccount?: Maybe<shopifyAccounts_obj_rel_insert_input>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type x_cache_shopify_productVariants_max_fields = {
   __typename?: 'x_cache_shopify_productVariants_max_fields',
  compareAtPrice?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  inventoryQuantity?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['String']>,
  productId?: Maybe<Scalars['String']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_max_order_by = {
  compareAtPrice?: Maybe<order_by>,
  id?: Maybe<order_by>,
  inventoryQuantity?: Maybe<order_by>,
  price?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  title?: Maybe<order_by>,
};

/** aggregate min on columns */
export type x_cache_shopify_productVariants_min_fields = {
   __typename?: 'x_cache_shopify_productVariants_min_fields',
  compareAtPrice?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  inventoryQuantity?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['String']>,
  productId?: Maybe<Scalars['String']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_min_order_by = {
  compareAtPrice?: Maybe<order_by>,
  id?: Maybe<order_by>,
  inventoryQuantity?: Maybe<order_by>,
  price?: Maybe<order_by>,
  productId?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  title?: Maybe<order_by>,
};

/** response of any mutation on the table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_mutation_response = {
   __typename?: 'x_cache_shopify_productVariants_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<x_cache_shopify_productVariants>,
};

/** input type for inserting object relation for remote table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_obj_rel_insert_input = {
  data: x_cache_shopify_productVariants_insert_input,
  on_conflict?: Maybe<x_cache_shopify_productVariants_on_conflict>,
};

/** on conflict condition type for table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_on_conflict = {
  constraint: x_cache_shopify_productVariants_constraint,
  update_columns: Array<x_cache_shopify_productVariants_update_column>,
  where?: Maybe<x_cache_shopify_productVariants_bool_exp>,
};

/** ordering options when selecting data from "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_order_by = {
  availableForSale?: Maybe<order_by>,
  compareAtPrice?: Maybe<order_by>,
  id?: Maybe<order_by>,
  images?: Maybe<order_by>,
  inventoryQuantity?: Maybe<order_by>,
  price?: Maybe<order_by>,
  product?: Maybe<x_cache_shopify_products_order_by>,
  productId?: Maybe<order_by>,
  selectedOptions?: Maybe<order_by>,
  shopifyAccount?: Maybe<shopifyAccounts_order_by>,
  shopifyAccountId?: Maybe<order_by>,
  title?: Maybe<order_by>,
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type x_cache_shopify_productVariants_prepend_input = {
  images?: Maybe<Scalars['jsonb']>,
  selectedOptions?: Maybe<Scalars['jsonb']>,
};

/** select columns of table "x_cache_shopify_productVariants" */
export enum x_cache_shopify_productVariants_select_column {
  /** column name */
  availableForSale = 'availableForSale',
  /** column name */
  compareAtPrice = 'compareAtPrice',
  /** column name */
  id = 'id',
  /** column name */
  images = 'images',
  /** column name */
  inventoryQuantity = 'inventoryQuantity',
  /** column name */
  price = 'price',
  /** column name */
  productId = 'productId',
  /** column name */
  selectedOptions = 'selectedOptions',
  /** column name */
  shopifyAccountId = 'shopifyAccountId',
  /** column name */
  title = 'title'
}

/** input type for updating data in table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_set_input = {
  availableForSale?: Maybe<Scalars['Boolean']>,
  compareAtPrice?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['String']>,
  images?: Maybe<Scalars['jsonb']>,
  inventoryQuantity?: Maybe<Scalars['Int']>,
  price?: Maybe<Scalars['String']>,
  productId?: Maybe<Scalars['String']>,
  selectedOptions?: Maybe<Scalars['jsonb']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type x_cache_shopify_productVariants_stddev_fields = {
   __typename?: 'x_cache_shopify_productVariants_stddev_fields',
  inventoryQuantity?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_stddev_order_by = {
  inventoryQuantity?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type x_cache_shopify_productVariants_stddev_pop_fields = {
   __typename?: 'x_cache_shopify_productVariants_stddev_pop_fields',
  inventoryQuantity?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_stddev_pop_order_by = {
  inventoryQuantity?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type x_cache_shopify_productVariants_stddev_samp_fields = {
   __typename?: 'x_cache_shopify_productVariants_stddev_samp_fields',
  inventoryQuantity?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_stddev_samp_order_by = {
  inventoryQuantity?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type x_cache_shopify_productVariants_sum_fields = {
   __typename?: 'x_cache_shopify_productVariants_sum_fields',
  inventoryQuantity?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_sum_order_by = {
  inventoryQuantity?: Maybe<order_by>,
};

/** update columns of table "x_cache_shopify_productVariants" */
export enum x_cache_shopify_productVariants_update_column {
  /** column name */
  availableForSale = 'availableForSale',
  /** column name */
  compareAtPrice = 'compareAtPrice',
  /** column name */
  id = 'id',
  /** column name */
  images = 'images',
  /** column name */
  inventoryQuantity = 'inventoryQuantity',
  /** column name */
  price = 'price',
  /** column name */
  productId = 'productId',
  /** column name */
  selectedOptions = 'selectedOptions',
  /** column name */
  shopifyAccountId = 'shopifyAccountId',
  /** column name */
  title = 'title'
}

/** aggregate var_pop on columns */
export type x_cache_shopify_productVariants_var_pop_fields = {
   __typename?: 'x_cache_shopify_productVariants_var_pop_fields',
  inventoryQuantity?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_var_pop_order_by = {
  inventoryQuantity?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type x_cache_shopify_productVariants_var_samp_fields = {
   __typename?: 'x_cache_shopify_productVariants_var_samp_fields',
  inventoryQuantity?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_var_samp_order_by = {
  inventoryQuantity?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type x_cache_shopify_productVariants_variance_fields = {
   __typename?: 'x_cache_shopify_productVariants_variance_fields',
  inventoryQuantity?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "x_cache_shopify_productVariants" */
export type x_cache_shopify_productVariants_variance_order_by = {
  inventoryQuantity?: Maybe<order_by>,
};

/** columns and relationships of "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts = {
   __typename?: 'x_queue_shopify_fetchProducts',
  created_at: Scalars['timestamptz'],
  cursor?: Maybe<Scalars['String']>,
  encryptedAccessToken: Scalars['String'],
  id: Scalars['bigint'],
  myshopifyDomain: Scalars['String'],
  processed: Scalars['Boolean'],
  shopifyAccountId: Scalars['String'],
  updated_at: Scalars['timestamptz'],
};

/** aggregated selection of "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_aggregate = {
   __typename?: 'x_queue_shopify_fetchProducts_aggregate',
  aggregate?: Maybe<x_queue_shopify_fetchProducts_aggregate_fields>,
  nodes: Array<x_queue_shopify_fetchProducts>,
};

/** aggregate fields of "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_aggregate_fields = {
   __typename?: 'x_queue_shopify_fetchProducts_aggregate_fields',
  avg?: Maybe<x_queue_shopify_fetchProducts_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<x_queue_shopify_fetchProducts_max_fields>,
  min?: Maybe<x_queue_shopify_fetchProducts_min_fields>,
  stddev?: Maybe<x_queue_shopify_fetchProducts_stddev_fields>,
  stddev_pop?: Maybe<x_queue_shopify_fetchProducts_stddev_pop_fields>,
  stddev_samp?: Maybe<x_queue_shopify_fetchProducts_stddev_samp_fields>,
  sum?: Maybe<x_queue_shopify_fetchProducts_sum_fields>,
  var_pop?: Maybe<x_queue_shopify_fetchProducts_var_pop_fields>,
  var_samp?: Maybe<x_queue_shopify_fetchProducts_var_samp_fields>,
  variance?: Maybe<x_queue_shopify_fetchProducts_variance_fields>,
};


/** aggregate fields of "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<x_queue_shopify_fetchProducts_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_aggregate_order_by = {
  avg?: Maybe<x_queue_shopify_fetchProducts_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<x_queue_shopify_fetchProducts_max_order_by>,
  min?: Maybe<x_queue_shopify_fetchProducts_min_order_by>,
  stddev?: Maybe<x_queue_shopify_fetchProducts_stddev_order_by>,
  stddev_pop?: Maybe<x_queue_shopify_fetchProducts_stddev_pop_order_by>,
  stddev_samp?: Maybe<x_queue_shopify_fetchProducts_stddev_samp_order_by>,
  sum?: Maybe<x_queue_shopify_fetchProducts_sum_order_by>,
  var_pop?: Maybe<x_queue_shopify_fetchProducts_var_pop_order_by>,
  var_samp?: Maybe<x_queue_shopify_fetchProducts_var_samp_order_by>,
  variance?: Maybe<x_queue_shopify_fetchProducts_variance_order_by>,
};

/** input type for inserting array relation for remote table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_arr_rel_insert_input = {
  data: Array<x_queue_shopify_fetchProducts_insert_input>,
  on_conflict?: Maybe<x_queue_shopify_fetchProducts_on_conflict>,
};

/** aggregate avg on columns */
export type x_queue_shopify_fetchProducts_avg_fields = {
   __typename?: 'x_queue_shopify_fetchProducts_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_avg_order_by = {
  id?: Maybe<order_by>,
};

/** 
 * Boolean expression to filter rows from the table
 * "x_queue_shopify_fetchProducts". All fields are combined with a logical 'AND'.
 */
export type x_queue_shopify_fetchProducts_bool_exp = {
  _and?: Maybe<Array<Maybe<x_queue_shopify_fetchProducts_bool_exp>>>,
  _not?: Maybe<x_queue_shopify_fetchProducts_bool_exp>,
  _or?: Maybe<Array<Maybe<x_queue_shopify_fetchProducts_bool_exp>>>,
  created_at?: Maybe<timestamptz_comparison_exp>,
  cursor?: Maybe<String_comparison_exp>,
  encryptedAccessToken?: Maybe<String_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  myshopifyDomain?: Maybe<String_comparison_exp>,
  processed?: Maybe<Boolean_comparison_exp>,
  shopifyAccountId?: Maybe<String_comparison_exp>,
  updated_at?: Maybe<timestamptz_comparison_exp>,
};

/** unique or primary key constraints on table "x_queue_shopify_fetchProducts" */
export enum x_queue_shopify_fetchProducts_constraint {
  /** unique or primary key constraint */
  queue_shopify_fetchProducts_pkey = 'queue_shopify_fetchProducts_pkey'
}

/** input type for incrementing integer columne in table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_inc_input = {
  id?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_insert_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  cursor?: Maybe<Scalars['String']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  processed?: Maybe<Scalars['Boolean']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type x_queue_shopify_fetchProducts_max_fields = {
   __typename?: 'x_queue_shopify_fetchProducts_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  cursor?: Maybe<Scalars['String']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_max_order_by = {
  created_at?: Maybe<order_by>,
  cursor?: Maybe<order_by>,
  encryptedAccessToken?: Maybe<order_by>,
  id?: Maybe<order_by>,
  myshopifyDomain?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
};

/** aggregate min on columns */
export type x_queue_shopify_fetchProducts_min_fields = {
   __typename?: 'x_queue_shopify_fetchProducts_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  cursor?: Maybe<Scalars['String']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_min_order_by = {
  created_at?: Maybe<order_by>,
  cursor?: Maybe<order_by>,
  encryptedAccessToken?: Maybe<order_by>,
  id?: Maybe<order_by>,
  myshopifyDomain?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
};

/** response of any mutation on the table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_mutation_response = {
   __typename?: 'x_queue_shopify_fetchProducts_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<x_queue_shopify_fetchProducts>,
};

/** input type for inserting object relation for remote table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_obj_rel_insert_input = {
  data: x_queue_shopify_fetchProducts_insert_input,
  on_conflict?: Maybe<x_queue_shopify_fetchProducts_on_conflict>,
};

/** on conflict condition type for table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_on_conflict = {
  constraint: x_queue_shopify_fetchProducts_constraint,
  update_columns: Array<x_queue_shopify_fetchProducts_update_column>,
  where?: Maybe<x_queue_shopify_fetchProducts_bool_exp>,
};

/** ordering options when selecting data from "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_order_by = {
  created_at?: Maybe<order_by>,
  cursor?: Maybe<order_by>,
  encryptedAccessToken?: Maybe<order_by>,
  id?: Maybe<order_by>,
  myshopifyDomain?: Maybe<order_by>,
  processed?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
};

/** select columns of table "x_queue_shopify_fetchProducts" */
export enum x_queue_shopify_fetchProducts_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  cursor = 'cursor',
  /** column name */
  encryptedAccessToken = 'encryptedAccessToken',
  /** column name */
  id = 'id',
  /** column name */
  myshopifyDomain = 'myshopifyDomain',
  /** column name */
  processed = 'processed',
  /** column name */
  shopifyAccountId = 'shopifyAccountId',
  /** column name */
  updated_at = 'updated_at'
}

/** input type for updating data in table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_set_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  cursor?: Maybe<Scalars['String']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  processed?: Maybe<Scalars['Boolean']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type x_queue_shopify_fetchProducts_stddev_fields = {
   __typename?: 'x_queue_shopify_fetchProducts_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_stddev_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type x_queue_shopify_fetchProducts_stddev_pop_fields = {
   __typename?: 'x_queue_shopify_fetchProducts_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_stddev_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type x_queue_shopify_fetchProducts_stddev_samp_fields = {
   __typename?: 'x_queue_shopify_fetchProducts_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_stddev_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type x_queue_shopify_fetchProducts_sum_fields = {
   __typename?: 'x_queue_shopify_fetchProducts_sum_fields',
  id?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_sum_order_by = {
  id?: Maybe<order_by>,
};

/** update columns of table "x_queue_shopify_fetchProducts" */
export enum x_queue_shopify_fetchProducts_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  cursor = 'cursor',
  /** column name */
  encryptedAccessToken = 'encryptedAccessToken',
  /** column name */
  id = 'id',
  /** column name */
  myshopifyDomain = 'myshopifyDomain',
  /** column name */
  processed = 'processed',
  /** column name */
  shopifyAccountId = 'shopifyAccountId',
  /** column name */
  updated_at = 'updated_at'
}

/** aggregate var_pop on columns */
export type x_queue_shopify_fetchProducts_var_pop_fields = {
   __typename?: 'x_queue_shopify_fetchProducts_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_var_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type x_queue_shopify_fetchProducts_var_samp_fields = {
   __typename?: 'x_queue_shopify_fetchProducts_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_var_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type x_queue_shopify_fetchProducts_variance_fields = {
   __typename?: 'x_queue_shopify_fetchProducts_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "x_queue_shopify_fetchProducts" */
export type x_queue_shopify_fetchProducts_variance_order_by = {
  id?: Maybe<order_by>,
};

/** columns and relationships of "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants = {
   __typename?: 'x_queue_shopify_fetchProductVariants',
  created_at: Scalars['timestamptz'],
  cursor?: Maybe<Scalars['String']>,
  encryptedAccessToken: Scalars['String'],
  id: Scalars['bigint'],
  myshopifyDomain: Scalars['String'],
  processed: Scalars['Boolean'],
  shopifyAccountId: Scalars['String'],
  updated_at: Scalars['timestamptz'],
};

/** aggregated selection of "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_aggregate = {
   __typename?: 'x_queue_shopify_fetchProductVariants_aggregate',
  aggregate?: Maybe<x_queue_shopify_fetchProductVariants_aggregate_fields>,
  nodes: Array<x_queue_shopify_fetchProductVariants>,
};

/** aggregate fields of "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_aggregate_fields = {
   __typename?: 'x_queue_shopify_fetchProductVariants_aggregate_fields',
  avg?: Maybe<x_queue_shopify_fetchProductVariants_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<x_queue_shopify_fetchProductVariants_max_fields>,
  min?: Maybe<x_queue_shopify_fetchProductVariants_min_fields>,
  stddev?: Maybe<x_queue_shopify_fetchProductVariants_stddev_fields>,
  stddev_pop?: Maybe<x_queue_shopify_fetchProductVariants_stddev_pop_fields>,
  stddev_samp?: Maybe<x_queue_shopify_fetchProductVariants_stddev_samp_fields>,
  sum?: Maybe<x_queue_shopify_fetchProductVariants_sum_fields>,
  var_pop?: Maybe<x_queue_shopify_fetchProductVariants_var_pop_fields>,
  var_samp?: Maybe<x_queue_shopify_fetchProductVariants_var_samp_fields>,
  variance?: Maybe<x_queue_shopify_fetchProductVariants_variance_fields>,
};


/** aggregate fields of "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<x_queue_shopify_fetchProductVariants_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_aggregate_order_by = {
  avg?: Maybe<x_queue_shopify_fetchProductVariants_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<x_queue_shopify_fetchProductVariants_max_order_by>,
  min?: Maybe<x_queue_shopify_fetchProductVariants_min_order_by>,
  stddev?: Maybe<x_queue_shopify_fetchProductVariants_stddev_order_by>,
  stddev_pop?: Maybe<x_queue_shopify_fetchProductVariants_stddev_pop_order_by>,
  stddev_samp?: Maybe<x_queue_shopify_fetchProductVariants_stddev_samp_order_by>,
  sum?: Maybe<x_queue_shopify_fetchProductVariants_sum_order_by>,
  var_pop?: Maybe<x_queue_shopify_fetchProductVariants_var_pop_order_by>,
  var_samp?: Maybe<x_queue_shopify_fetchProductVariants_var_samp_order_by>,
  variance?: Maybe<x_queue_shopify_fetchProductVariants_variance_order_by>,
};

/** input type for inserting array relation for remote table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_arr_rel_insert_input = {
  data: Array<x_queue_shopify_fetchProductVariants_insert_input>,
  on_conflict?: Maybe<x_queue_shopify_fetchProductVariants_on_conflict>,
};

/** aggregate avg on columns */
export type x_queue_shopify_fetchProductVariants_avg_fields = {
   __typename?: 'x_queue_shopify_fetchProductVariants_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_avg_order_by = {
  id?: Maybe<order_by>,
};

/** 
 * Boolean expression to filter rows from the table
 * "x_queue_shopify_fetchProductVariants". All fields are combined with a logical 'AND'.
 */
export type x_queue_shopify_fetchProductVariants_bool_exp = {
  _and?: Maybe<Array<Maybe<x_queue_shopify_fetchProductVariants_bool_exp>>>,
  _not?: Maybe<x_queue_shopify_fetchProductVariants_bool_exp>,
  _or?: Maybe<Array<Maybe<x_queue_shopify_fetchProductVariants_bool_exp>>>,
  created_at?: Maybe<timestamptz_comparison_exp>,
  cursor?: Maybe<String_comparison_exp>,
  encryptedAccessToken?: Maybe<String_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  myshopifyDomain?: Maybe<String_comparison_exp>,
  processed?: Maybe<Boolean_comparison_exp>,
  shopifyAccountId?: Maybe<String_comparison_exp>,
  updated_at?: Maybe<timestamptz_comparison_exp>,
};

/** unique or primary key constraints on table "x_queue_shopify_fetchProductVariants" */
export enum x_queue_shopify_fetchProductVariants_constraint {
  /** unique or primary key constraint */
  x_queue_shopify_fetchProductVariants_pkey = 'x_queue_shopify_fetchProductVariants_pkey'
}

/** input type for incrementing integer columne in table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_inc_input = {
  id?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_insert_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  cursor?: Maybe<Scalars['String']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  processed?: Maybe<Scalars['Boolean']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type x_queue_shopify_fetchProductVariants_max_fields = {
   __typename?: 'x_queue_shopify_fetchProductVariants_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  cursor?: Maybe<Scalars['String']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_max_order_by = {
  created_at?: Maybe<order_by>,
  cursor?: Maybe<order_by>,
  encryptedAccessToken?: Maybe<order_by>,
  id?: Maybe<order_by>,
  myshopifyDomain?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
};

/** aggregate min on columns */
export type x_queue_shopify_fetchProductVariants_min_fields = {
   __typename?: 'x_queue_shopify_fetchProductVariants_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  cursor?: Maybe<Scalars['String']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_min_order_by = {
  created_at?: Maybe<order_by>,
  cursor?: Maybe<order_by>,
  encryptedAccessToken?: Maybe<order_by>,
  id?: Maybe<order_by>,
  myshopifyDomain?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
};

/** response of any mutation on the table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_mutation_response = {
   __typename?: 'x_queue_shopify_fetchProductVariants_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<x_queue_shopify_fetchProductVariants>,
};

/** input type for inserting object relation for remote table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_obj_rel_insert_input = {
  data: x_queue_shopify_fetchProductVariants_insert_input,
  on_conflict?: Maybe<x_queue_shopify_fetchProductVariants_on_conflict>,
};

/** on conflict condition type for table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_on_conflict = {
  constraint: x_queue_shopify_fetchProductVariants_constraint,
  update_columns: Array<x_queue_shopify_fetchProductVariants_update_column>,
  where?: Maybe<x_queue_shopify_fetchProductVariants_bool_exp>,
};

/** ordering options when selecting data from "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_order_by = {
  created_at?: Maybe<order_by>,
  cursor?: Maybe<order_by>,
  encryptedAccessToken?: Maybe<order_by>,
  id?: Maybe<order_by>,
  myshopifyDomain?: Maybe<order_by>,
  processed?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
};

/** select columns of table "x_queue_shopify_fetchProductVariants" */
export enum x_queue_shopify_fetchProductVariants_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  cursor = 'cursor',
  /** column name */
  encryptedAccessToken = 'encryptedAccessToken',
  /** column name */
  id = 'id',
  /** column name */
  myshopifyDomain = 'myshopifyDomain',
  /** column name */
  processed = 'processed',
  /** column name */
  shopifyAccountId = 'shopifyAccountId',
  /** column name */
  updated_at = 'updated_at'
}

/** input type for updating data in table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_set_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  cursor?: Maybe<Scalars['String']>,
  encryptedAccessToken?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['bigint']>,
  myshopifyDomain?: Maybe<Scalars['String']>,
  processed?: Maybe<Scalars['Boolean']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type x_queue_shopify_fetchProductVariants_stddev_fields = {
   __typename?: 'x_queue_shopify_fetchProductVariants_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_stddev_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type x_queue_shopify_fetchProductVariants_stddev_pop_fields = {
   __typename?: 'x_queue_shopify_fetchProductVariants_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_stddev_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type x_queue_shopify_fetchProductVariants_stddev_samp_fields = {
   __typename?: 'x_queue_shopify_fetchProductVariants_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_stddev_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type x_queue_shopify_fetchProductVariants_sum_fields = {
   __typename?: 'x_queue_shopify_fetchProductVariants_sum_fields',
  id?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_sum_order_by = {
  id?: Maybe<order_by>,
};

/** update columns of table "x_queue_shopify_fetchProductVariants" */
export enum x_queue_shopify_fetchProductVariants_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  cursor = 'cursor',
  /** column name */
  encryptedAccessToken = 'encryptedAccessToken',
  /** column name */
  id = 'id',
  /** column name */
  myshopifyDomain = 'myshopifyDomain',
  /** column name */
  processed = 'processed',
  /** column name */
  shopifyAccountId = 'shopifyAccountId',
  /** column name */
  updated_at = 'updated_at'
}

/** aggregate var_pop on columns */
export type x_queue_shopify_fetchProductVariants_var_pop_fields = {
   __typename?: 'x_queue_shopify_fetchProductVariants_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_var_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type x_queue_shopify_fetchProductVariants_var_samp_fields = {
   __typename?: 'x_queue_shopify_fetchProductVariants_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_var_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type x_queue_shopify_fetchProductVariants_variance_fields = {
   __typename?: 'x_queue_shopify_fetchProductVariants_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "x_queue_shopify_fetchProductVariants" */
export type x_queue_shopify_fetchProductVariants_variance_order_by = {
  id?: Maybe<order_by>,
};

/** columns and relationships of "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform = {
   __typename?: 'x_queue_shopify_saveToPlatform',
  created_at: Scalars['timestamptz'],
  id: Scalars['bigint'],
  processed: Scalars['Boolean'],
  products: Scalars['jsonb'],
  shopifyAccountId: Scalars['String'],
  updated_at: Scalars['timestamptz'],
};


/** columns and relationships of "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatformproductsArgs = {
  path?: Maybe<Scalars['String']>
};

/** aggregated selection of "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_aggregate = {
   __typename?: 'x_queue_shopify_saveToPlatform_aggregate',
  aggregate?: Maybe<x_queue_shopify_saveToPlatform_aggregate_fields>,
  nodes: Array<x_queue_shopify_saveToPlatform>,
};

/** aggregate fields of "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_aggregate_fields = {
   __typename?: 'x_queue_shopify_saveToPlatform_aggregate_fields',
  avg?: Maybe<x_queue_shopify_saveToPlatform_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<x_queue_shopify_saveToPlatform_max_fields>,
  min?: Maybe<x_queue_shopify_saveToPlatform_min_fields>,
  stddev?: Maybe<x_queue_shopify_saveToPlatform_stddev_fields>,
  stddev_pop?: Maybe<x_queue_shopify_saveToPlatform_stddev_pop_fields>,
  stddev_samp?: Maybe<x_queue_shopify_saveToPlatform_stddev_samp_fields>,
  sum?: Maybe<x_queue_shopify_saveToPlatform_sum_fields>,
  var_pop?: Maybe<x_queue_shopify_saveToPlatform_var_pop_fields>,
  var_samp?: Maybe<x_queue_shopify_saveToPlatform_var_samp_fields>,
  variance?: Maybe<x_queue_shopify_saveToPlatform_variance_fields>,
};


/** aggregate fields of "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<x_queue_shopify_saveToPlatform_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_aggregate_order_by = {
  avg?: Maybe<x_queue_shopify_saveToPlatform_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<x_queue_shopify_saveToPlatform_max_order_by>,
  min?: Maybe<x_queue_shopify_saveToPlatform_min_order_by>,
  stddev?: Maybe<x_queue_shopify_saveToPlatform_stddev_order_by>,
  stddev_pop?: Maybe<x_queue_shopify_saveToPlatform_stddev_pop_order_by>,
  stddev_samp?: Maybe<x_queue_shopify_saveToPlatform_stddev_samp_order_by>,
  sum?: Maybe<x_queue_shopify_saveToPlatform_sum_order_by>,
  var_pop?: Maybe<x_queue_shopify_saveToPlatform_var_pop_order_by>,
  var_samp?: Maybe<x_queue_shopify_saveToPlatform_var_samp_order_by>,
  variance?: Maybe<x_queue_shopify_saveToPlatform_variance_order_by>,
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type x_queue_shopify_saveToPlatform_append_input = {
  products?: Maybe<Scalars['jsonb']>,
};

/** input type for inserting array relation for remote table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_arr_rel_insert_input = {
  data: Array<x_queue_shopify_saveToPlatform_insert_input>,
  on_conflict?: Maybe<x_queue_shopify_saveToPlatform_on_conflict>,
};

/** aggregate avg on columns */
export type x_queue_shopify_saveToPlatform_avg_fields = {
   __typename?: 'x_queue_shopify_saveToPlatform_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_avg_order_by = {
  id?: Maybe<order_by>,
};

/** 
 * Boolean expression to filter rows from the table
 * "x_queue_shopify_saveToPlatform". All fields are combined with a logical 'AND'.
 */
export type x_queue_shopify_saveToPlatform_bool_exp = {
  _and?: Maybe<Array<Maybe<x_queue_shopify_saveToPlatform_bool_exp>>>,
  _not?: Maybe<x_queue_shopify_saveToPlatform_bool_exp>,
  _or?: Maybe<Array<Maybe<x_queue_shopify_saveToPlatform_bool_exp>>>,
  created_at?: Maybe<timestamptz_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  processed?: Maybe<Boolean_comparison_exp>,
  products?: Maybe<jsonb_comparison_exp>,
  shopifyAccountId?: Maybe<String_comparison_exp>,
  updated_at?: Maybe<timestamptz_comparison_exp>,
};

/** unique or primary key constraints on table "x_queue_shopify_saveToPlatform" */
export enum x_queue_shopify_saveToPlatform_constraint {
  /** unique or primary key constraint */
  x_queue_shopify_saveToPlatform_pkey = 'x_queue_shopify_saveToPlatform_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type x_queue_shopify_saveToPlatform_delete_at_path_input = {
  products?: Maybe<Array<Maybe<Scalars['String']>>>,
};

/** 
 * delete the array element with specified index (negative integers count from the
 * end). throws an error if top level container is not an array
 */
export type x_queue_shopify_saveToPlatform_delete_elem_input = {
  products?: Maybe<Scalars['Int']>,
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type x_queue_shopify_saveToPlatform_delete_key_input = {
  products?: Maybe<Scalars['String']>,
};

/** input type for incrementing integer columne in table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_inc_input = {
  id?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_insert_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  processed?: Maybe<Scalars['Boolean']>,
  products?: Maybe<Scalars['jsonb']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type x_queue_shopify_saveToPlatform_max_fields = {
   __typename?: 'x_queue_shopify_saveToPlatform_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_max_order_by = {
  created_at?: Maybe<order_by>,
  id?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
};

/** aggregate min on columns */
export type x_queue_shopify_saveToPlatform_min_fields = {
   __typename?: 'x_queue_shopify_saveToPlatform_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_min_order_by = {
  created_at?: Maybe<order_by>,
  id?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
};

/** response of any mutation on the table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_mutation_response = {
   __typename?: 'x_queue_shopify_saveToPlatform_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<x_queue_shopify_saveToPlatform>,
};

/** input type for inserting object relation for remote table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_obj_rel_insert_input = {
  data: x_queue_shopify_saveToPlatform_insert_input,
  on_conflict?: Maybe<x_queue_shopify_saveToPlatform_on_conflict>,
};

/** on conflict condition type for table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_on_conflict = {
  constraint: x_queue_shopify_saveToPlatform_constraint,
  update_columns: Array<x_queue_shopify_saveToPlatform_update_column>,
  where?: Maybe<x_queue_shopify_saveToPlatform_bool_exp>,
};

/** ordering options when selecting data from "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_order_by = {
  created_at?: Maybe<order_by>,
  id?: Maybe<order_by>,
  processed?: Maybe<order_by>,
  products?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type x_queue_shopify_saveToPlatform_prepend_input = {
  products?: Maybe<Scalars['jsonb']>,
};

/** select columns of table "x_queue_shopify_saveToPlatform" */
export enum x_queue_shopify_saveToPlatform_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  processed = 'processed',
  /** column name */
  products = 'products',
  /** column name */
  shopifyAccountId = 'shopifyAccountId',
  /** column name */
  updated_at = 'updated_at'
}

/** input type for updating data in table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_set_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  processed?: Maybe<Scalars['Boolean']>,
  products?: Maybe<Scalars['jsonb']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type x_queue_shopify_saveToPlatform_stddev_fields = {
   __typename?: 'x_queue_shopify_saveToPlatform_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_stddev_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type x_queue_shopify_saveToPlatform_stddev_pop_fields = {
   __typename?: 'x_queue_shopify_saveToPlatform_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_stddev_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type x_queue_shopify_saveToPlatform_stddev_samp_fields = {
   __typename?: 'x_queue_shopify_saveToPlatform_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_stddev_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type x_queue_shopify_saveToPlatform_sum_fields = {
   __typename?: 'x_queue_shopify_saveToPlatform_sum_fields',
  id?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_sum_order_by = {
  id?: Maybe<order_by>,
};

/** update columns of table "x_queue_shopify_saveToPlatform" */
export enum x_queue_shopify_saveToPlatform_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  processed = 'processed',
  /** column name */
  products = 'products',
  /** column name */
  shopifyAccountId = 'shopifyAccountId',
  /** column name */
  updated_at = 'updated_at'
}

/** aggregate var_pop on columns */
export type x_queue_shopify_saveToPlatform_var_pop_fields = {
   __typename?: 'x_queue_shopify_saveToPlatform_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_var_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type x_queue_shopify_saveToPlatform_var_samp_fields = {
   __typename?: 'x_queue_shopify_saveToPlatform_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_var_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type x_queue_shopify_saveToPlatform_variance_fields = {
   __typename?: 'x_queue_shopify_saveToPlatform_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "x_queue_shopify_saveToPlatform" */
export type x_queue_shopify_saveToPlatform_variance_order_by = {
  id?: Maybe<order_by>,
};

/** columns and relationships of "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform = {
   __typename?: 'x_queue_shopify_transformToPlatform',
  created_at: Scalars['timestamptz'],
  id: Scalars['bigint'],
  processed: Scalars['Boolean'],
  shopifyAccountId: Scalars['String'],
  updated_at: Scalars['timestamptz'],
};

/** aggregated selection of "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_aggregate = {
   __typename?: 'x_queue_shopify_transformToPlatform_aggregate',
  aggregate?: Maybe<x_queue_shopify_transformToPlatform_aggregate_fields>,
  nodes: Array<x_queue_shopify_transformToPlatform>,
};

/** aggregate fields of "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_aggregate_fields = {
   __typename?: 'x_queue_shopify_transformToPlatform_aggregate_fields',
  avg?: Maybe<x_queue_shopify_transformToPlatform_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<x_queue_shopify_transformToPlatform_max_fields>,
  min?: Maybe<x_queue_shopify_transformToPlatform_min_fields>,
  stddev?: Maybe<x_queue_shopify_transformToPlatform_stddev_fields>,
  stddev_pop?: Maybe<x_queue_shopify_transformToPlatform_stddev_pop_fields>,
  stddev_samp?: Maybe<x_queue_shopify_transformToPlatform_stddev_samp_fields>,
  sum?: Maybe<x_queue_shopify_transformToPlatform_sum_fields>,
  var_pop?: Maybe<x_queue_shopify_transformToPlatform_var_pop_fields>,
  var_samp?: Maybe<x_queue_shopify_transformToPlatform_var_samp_fields>,
  variance?: Maybe<x_queue_shopify_transformToPlatform_variance_fields>,
};


/** aggregate fields of "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<x_queue_shopify_transformToPlatform_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_aggregate_order_by = {
  avg?: Maybe<x_queue_shopify_transformToPlatform_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<x_queue_shopify_transformToPlatform_max_order_by>,
  min?: Maybe<x_queue_shopify_transformToPlatform_min_order_by>,
  stddev?: Maybe<x_queue_shopify_transformToPlatform_stddev_order_by>,
  stddev_pop?: Maybe<x_queue_shopify_transformToPlatform_stddev_pop_order_by>,
  stddev_samp?: Maybe<x_queue_shopify_transformToPlatform_stddev_samp_order_by>,
  sum?: Maybe<x_queue_shopify_transformToPlatform_sum_order_by>,
  var_pop?: Maybe<x_queue_shopify_transformToPlatform_var_pop_order_by>,
  var_samp?: Maybe<x_queue_shopify_transformToPlatform_var_samp_order_by>,
  variance?: Maybe<x_queue_shopify_transformToPlatform_variance_order_by>,
};

/** input type for inserting array relation for remote table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_arr_rel_insert_input = {
  data: Array<x_queue_shopify_transformToPlatform_insert_input>,
  on_conflict?: Maybe<x_queue_shopify_transformToPlatform_on_conflict>,
};

/** aggregate avg on columns */
export type x_queue_shopify_transformToPlatform_avg_fields = {
   __typename?: 'x_queue_shopify_transformToPlatform_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_avg_order_by = {
  id?: Maybe<order_by>,
};

/** 
 * Boolean expression to filter rows from the table
 * "x_queue_shopify_transformToPlatform". All fields are combined with a logical 'AND'.
 */
export type x_queue_shopify_transformToPlatform_bool_exp = {
  _and?: Maybe<Array<Maybe<x_queue_shopify_transformToPlatform_bool_exp>>>,
  _not?: Maybe<x_queue_shopify_transformToPlatform_bool_exp>,
  _or?: Maybe<Array<Maybe<x_queue_shopify_transformToPlatform_bool_exp>>>,
  created_at?: Maybe<timestamptz_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  processed?: Maybe<Boolean_comparison_exp>,
  shopifyAccountId?: Maybe<String_comparison_exp>,
  updated_at?: Maybe<timestamptz_comparison_exp>,
};

/** unique or primary key constraints on table "x_queue_shopify_transformToPlatform" */
export enum x_queue_shopify_transformToPlatform_constraint {
  /** unique or primary key constraint */
  x_queue_shopify_transformToPlatform_pkey = 'x_queue_shopify_transformToPlatform_pkey'
}

/** input type for incrementing integer columne in table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_inc_input = {
  id?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_insert_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  processed?: Maybe<Scalars['Boolean']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type x_queue_shopify_transformToPlatform_max_fields = {
   __typename?: 'x_queue_shopify_transformToPlatform_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_max_order_by = {
  created_at?: Maybe<order_by>,
  id?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
};

/** aggregate min on columns */
export type x_queue_shopify_transformToPlatform_min_fields = {
   __typename?: 'x_queue_shopify_transformToPlatform_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_min_order_by = {
  created_at?: Maybe<order_by>,
  id?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
};

/** response of any mutation on the table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_mutation_response = {
   __typename?: 'x_queue_shopify_transformToPlatform_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<x_queue_shopify_transformToPlatform>,
};

/** input type for inserting object relation for remote table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_obj_rel_insert_input = {
  data: x_queue_shopify_transformToPlatform_insert_input,
  on_conflict?: Maybe<x_queue_shopify_transformToPlatform_on_conflict>,
};

/** on conflict condition type for table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_on_conflict = {
  constraint: x_queue_shopify_transformToPlatform_constraint,
  update_columns: Array<x_queue_shopify_transformToPlatform_update_column>,
  where?: Maybe<x_queue_shopify_transformToPlatform_bool_exp>,
};

/** ordering options when selecting data from "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_order_by = {
  created_at?: Maybe<order_by>,
  id?: Maybe<order_by>,
  processed?: Maybe<order_by>,
  shopifyAccountId?: Maybe<order_by>,
  updated_at?: Maybe<order_by>,
};

/** select columns of table "x_queue_shopify_transformToPlatform" */
export enum x_queue_shopify_transformToPlatform_select_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  processed = 'processed',
  /** column name */
  shopifyAccountId = 'shopifyAccountId',
  /** column name */
  updated_at = 'updated_at'
}

/** input type for updating data in table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_set_input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  processed?: Maybe<Scalars['Boolean']>,
  shopifyAccountId?: Maybe<Scalars['String']>,
  updated_at?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type x_queue_shopify_transformToPlatform_stddev_fields = {
   __typename?: 'x_queue_shopify_transformToPlatform_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_stddev_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type x_queue_shopify_transformToPlatform_stddev_pop_fields = {
   __typename?: 'x_queue_shopify_transformToPlatform_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_stddev_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type x_queue_shopify_transformToPlatform_stddev_samp_fields = {
   __typename?: 'x_queue_shopify_transformToPlatform_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_stddev_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type x_queue_shopify_transformToPlatform_sum_fields = {
   __typename?: 'x_queue_shopify_transformToPlatform_sum_fields',
  id?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_sum_order_by = {
  id?: Maybe<order_by>,
};

/** update columns of table "x_queue_shopify_transformToPlatform" */
export enum x_queue_shopify_transformToPlatform_update_column {
  /** column name */
  created_at = 'created_at',
  /** column name */
  id = 'id',
  /** column name */
  processed = 'processed',
  /** column name */
  shopifyAccountId = 'shopifyAccountId',
  /** column name */
  updated_at = 'updated_at'
}

/** aggregate var_pop on columns */
export type x_queue_shopify_transformToPlatform_var_pop_fields = {
   __typename?: 'x_queue_shopify_transformToPlatform_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_var_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type x_queue_shopify_transformToPlatform_var_samp_fields = {
   __typename?: 'x_queue_shopify_transformToPlatform_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_var_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type x_queue_shopify_transformToPlatform_variance_fields = {
   __typename?: 'x_queue_shopify_transformToPlatform_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "x_queue_shopify_transformToPlatform" */
export type x_queue_shopify_transformToPlatform_variance_order_by = {
  id?: Maybe<order_by>,
};

/** columns and relationships of "x_standalone_event_triggers" */
export type x_standalone_event_triggers = {
   __typename?: 'x_standalone_event_triggers',
  createdAt: Scalars['timestamptz'],
  id: Scalars['bigint'],
  updatedAt: Scalars['timestamptz'],
};

/** aggregated selection of "x_standalone_event_triggers" */
export type x_standalone_event_triggers_aggregate = {
   __typename?: 'x_standalone_event_triggers_aggregate',
  aggregate?: Maybe<x_standalone_event_triggers_aggregate_fields>,
  nodes: Array<x_standalone_event_triggers>,
};

/** aggregate fields of "x_standalone_event_triggers" */
export type x_standalone_event_triggers_aggregate_fields = {
   __typename?: 'x_standalone_event_triggers_aggregate_fields',
  avg?: Maybe<x_standalone_event_triggers_avg_fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<x_standalone_event_triggers_max_fields>,
  min?: Maybe<x_standalone_event_triggers_min_fields>,
  stddev?: Maybe<x_standalone_event_triggers_stddev_fields>,
  stddev_pop?: Maybe<x_standalone_event_triggers_stddev_pop_fields>,
  stddev_samp?: Maybe<x_standalone_event_triggers_stddev_samp_fields>,
  sum?: Maybe<x_standalone_event_triggers_sum_fields>,
  var_pop?: Maybe<x_standalone_event_triggers_var_pop_fields>,
  var_samp?: Maybe<x_standalone_event_triggers_var_samp_fields>,
  variance?: Maybe<x_standalone_event_triggers_variance_fields>,
};


/** aggregate fields of "x_standalone_event_triggers" */
export type x_standalone_event_triggers_aggregate_fieldscountArgs = {
  columns?: Maybe<Array<x_standalone_event_triggers_select_column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_aggregate_order_by = {
  avg?: Maybe<x_standalone_event_triggers_avg_order_by>,
  count?: Maybe<order_by>,
  max?: Maybe<x_standalone_event_triggers_max_order_by>,
  min?: Maybe<x_standalone_event_triggers_min_order_by>,
  stddev?: Maybe<x_standalone_event_triggers_stddev_order_by>,
  stddev_pop?: Maybe<x_standalone_event_triggers_stddev_pop_order_by>,
  stddev_samp?: Maybe<x_standalone_event_triggers_stddev_samp_order_by>,
  sum?: Maybe<x_standalone_event_triggers_sum_order_by>,
  var_pop?: Maybe<x_standalone_event_triggers_var_pop_order_by>,
  var_samp?: Maybe<x_standalone_event_triggers_var_samp_order_by>,
  variance?: Maybe<x_standalone_event_triggers_variance_order_by>,
};

/** input type for inserting array relation for remote table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_arr_rel_insert_input = {
  data: Array<x_standalone_event_triggers_insert_input>,
  on_conflict?: Maybe<x_standalone_event_triggers_on_conflict>,
};

/** aggregate avg on columns */
export type x_standalone_event_triggers_avg_fields = {
   __typename?: 'x_standalone_event_triggers_avg_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_avg_order_by = {
  id?: Maybe<order_by>,
};

/** 
 * Boolean expression to filter rows from the table "x_standalone_event_triggers".
 * All fields are combined with a logical 'AND'.
 */
export type x_standalone_event_triggers_bool_exp = {
  _and?: Maybe<Array<Maybe<x_standalone_event_triggers_bool_exp>>>,
  _not?: Maybe<x_standalone_event_triggers_bool_exp>,
  _or?: Maybe<Array<Maybe<x_standalone_event_triggers_bool_exp>>>,
  createdAt?: Maybe<timestamptz_comparison_exp>,
  id?: Maybe<bigint_comparison_exp>,
  updatedAt?: Maybe<timestamptz_comparison_exp>,
};

/** unique or primary key constraints on table "x_standalone_event_triggers" */
export enum x_standalone_event_triggers_constraint {
  /** unique or primary key constraint */
  _standalone_event_triggers_pkey = '_standalone_event_triggers_pkey'
}

/** input type for incrementing integer columne in table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_inc_input = {
  id?: Maybe<Scalars['bigint']>,
};

/** input type for inserting data into table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_insert_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate max on columns */
export type x_standalone_event_triggers_max_fields = {
   __typename?: 'x_standalone_event_triggers_max_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by max() on columns of table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_max_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** aggregate min on columns */
export type x_standalone_event_triggers_min_fields = {
   __typename?: 'x_standalone_event_triggers_min_fields',
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** order by min() on columns of table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_min_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** response of any mutation on the table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_mutation_response = {
   __typename?: 'x_standalone_event_triggers_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<x_standalone_event_triggers>,
};

/** input type for inserting object relation for remote table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_obj_rel_insert_input = {
  data: x_standalone_event_triggers_insert_input,
  on_conflict?: Maybe<x_standalone_event_triggers_on_conflict>,
};

/** on conflict condition type for table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_on_conflict = {
  constraint: x_standalone_event_triggers_constraint,
  update_columns: Array<x_standalone_event_triggers_update_column>,
  where?: Maybe<x_standalone_event_triggers_bool_exp>,
};

/** ordering options when selecting data from "x_standalone_event_triggers" */
export type x_standalone_event_triggers_order_by = {
  createdAt?: Maybe<order_by>,
  id?: Maybe<order_by>,
  updatedAt?: Maybe<order_by>,
};

/** select columns of table "x_standalone_event_triggers" */
export enum x_standalone_event_triggers_select_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  id = 'id',
  /** column name */
  updatedAt = 'updatedAt'
}

/** input type for updating data in table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_set_input = {
  createdAt?: Maybe<Scalars['timestamptz']>,
  id?: Maybe<Scalars['bigint']>,
  updatedAt?: Maybe<Scalars['timestamptz']>,
};

/** aggregate stddev on columns */
export type x_standalone_event_triggers_stddev_fields = {
   __typename?: 'x_standalone_event_triggers_stddev_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_stddev_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_pop on columns */
export type x_standalone_event_triggers_stddev_pop_fields = {
   __typename?: 'x_standalone_event_triggers_stddev_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_stddev_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate stddev_samp on columns */
export type x_standalone_event_triggers_stddev_samp_fields = {
   __typename?: 'x_standalone_event_triggers_stddev_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_stddev_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate sum on columns */
export type x_standalone_event_triggers_sum_fields = {
   __typename?: 'x_standalone_event_triggers_sum_fields',
  id?: Maybe<Scalars['bigint']>,
};

/** order by sum() on columns of table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_sum_order_by = {
  id?: Maybe<order_by>,
};

/** update columns of table "x_standalone_event_triggers" */
export enum x_standalone_event_triggers_update_column {
  /** column name */
  createdAt = 'createdAt',
  /** column name */
  id = 'id',
  /** column name */
  updatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type x_standalone_event_triggers_var_pop_fields = {
   __typename?: 'x_standalone_event_triggers_var_pop_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_var_pop_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate var_samp on columns */
export type x_standalone_event_triggers_var_samp_fields = {
   __typename?: 'x_standalone_event_triggers_var_samp_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_var_samp_order_by = {
  id?: Maybe<order_by>,
};

/** aggregate variance on columns */
export type x_standalone_event_triggers_variance_fields = {
   __typename?: 'x_standalone_event_triggers_variance_fields',
  id?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "x_standalone_event_triggers" */
export type x_standalone_event_triggers_variance_order_by = {
  id?: Maybe<order_by>,
};

export type upsertProductVariantsMutationVariables = {
  objects: Array<productVariants_insert_input>
};


export type upsertProductVariantsMutation = (
  { __typename?: 'mutation_root' }
  & { result: Maybe<(
    { __typename?: 'productVariants_mutation_response' }
    & Pick<productVariants_mutation_response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'productVariants' }
      & Pick<productVariants, 'id' | 'foreignId' | 'productId' | 'price' | 'compareAtPrice'>
      & { selectedOptions: Array<(
        { __typename?: 'selectedOptions' }
        & Pick<selectedOptions, 'title' | 'value'>
      )> }
    )> }
  )> }
);

export type upsertProductsMutationVariables = {
  objects: Array<products_insert_input>
};


export type upsertProductsMutation = (
  { __typename?: 'mutation_root' }
  & { result: Maybe<(
    { __typename?: 'products_mutation_response' }
    & Pick<products_mutation_response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'products' }
      & Pick<products, 'id' | 'foreignId' | 'shopId' | 'handle'>
      & { options: Array<(
        { __typename?: 'productOptions' }
        & Pick<productOptions, 'id' | 'foreignId' | 'title' | 'position'>
        & { values: Array<(
          { __typename?: 'productOptionValues' }
          & Pick<productOptionValues, 'id' | 'title' | 'position'>
        )> }
      )> }
    )> }
  )> }
);

export type enqueueShopifyFetchProductsMutationVariables = {
  shopifyAccountId: Scalars['String'],
  myshopifyDomain: Scalars['String'],
  encryptedAccessToken: Scalars['String'],
  cursor?: Maybe<Scalars['String']>
};


export type enqueueShopifyFetchProductsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_x_queue_shopify_fetchProducts: Maybe<(
    { __typename?: 'x_queue_shopify_fetchProducts_mutation_response' }
    & { returning: Array<(
      { __typename?: 'x_queue_shopify_fetchProducts' }
      & Pick<x_queue_shopify_fetchProducts, 'id'>
    )> }
  )> }
);

export type enqueueShopifyFetchProductVariantsMutationVariables = {
  shopifyAccountId: Scalars['String'],
  myshopifyDomain: Scalars['String'],
  encryptedAccessToken: Scalars['String'],
  cursor?: Maybe<Scalars['String']>
};


export type enqueueShopifyFetchProductVariantsMutation = (
  { __typename?: 'mutation_root' }
  & { insert_x_queue_shopify_fetchProductVariants: Maybe<(
    { __typename?: 'x_queue_shopify_fetchProductVariants_mutation_response' }
    & { returning: Array<(
      { __typename?: 'x_queue_shopify_fetchProductVariants' }
      & Pick<x_queue_shopify_fetchProductVariants, 'id'>
    )> }
  )> }
);

export type enqueueShopifyTransformToPlatformMutationVariables = {
  shopifyAccountId: Scalars['String']
};


export type enqueueShopifyTransformToPlatformMutation = (
  { __typename?: 'mutation_root' }
  & { insert_x_queue_shopify_transformToPlatform: Maybe<(
    { __typename?: 'x_queue_shopify_transformToPlatform_mutation_response' }
    & { returning: Array<(
      { __typename?: 'x_queue_shopify_transformToPlatform' }
      & Pick<x_queue_shopify_transformToPlatform, 'id'>
    )> }
  )> }
);

export type enqueueShopifySaveToPlatformMutationVariables = {
  products: Scalars['jsonb'],
  shopifyAccountId: Scalars['String']
};


export type enqueueShopifySaveToPlatformMutation = (
  { __typename?: 'mutation_root' }
  & { insert_x_queue_shopify_saveToPlatform: Maybe<(
    { __typename?: 'x_queue_shopify_saveToPlatform_mutation_response' }
    & { returning: Array<(
      { __typename?: 'x_queue_shopify_saveToPlatform' }
      & Pick<x_queue_shopify_saveToPlatform, 'id'>
    )> }
  )> }
);

export type processedQueueShopifyFetchProductsMutationVariables = {
  id: Scalars['bigint']
};


export type processedQueueShopifyFetchProductsMutation = (
  { __typename?: 'mutation_root' }
  & { update_x_queue_shopify_fetchProducts: Maybe<(
    { __typename?: 'x_queue_shopify_fetchProducts_mutation_response' }
    & Pick<x_queue_shopify_fetchProducts_mutation_response, 'affected_rows'>
  )> }
);

export type processedQueueShopifyFetchProductVariantsMutationVariables = {
  id: Scalars['bigint']
};


export type processedQueueShopifyFetchProductVariantsMutation = (
  { __typename?: 'mutation_root' }
  & { update_x_queue_shopify_fetchProductVariants: Maybe<(
    { __typename?: 'x_queue_shopify_fetchProductVariants_mutation_response' }
    & Pick<x_queue_shopify_fetchProductVariants_mutation_response, 'affected_rows'>
  )> }
);

export type processedQueueShopifyTransformToPlatformMutationVariables = {
  id: Scalars['bigint']
};


export type processedQueueShopifyTransformToPlatformMutation = (
  { __typename?: 'mutation_root' }
  & { update_x_queue_shopify_transformToPlatform: Maybe<(
    { __typename?: 'x_queue_shopify_transformToPlatform_mutation_response' }
    & Pick<x_queue_shopify_transformToPlatform_mutation_response, 'affected_rows'>
  )> }
);

export type processedQueueShopifySaveToPlatformMutationVariables = {
  id: Scalars['bigint']
};


export type processedQueueShopifySaveToPlatformMutation = (
  { __typename?: 'mutation_root' }
  & { update_x_queue_shopify_saveToPlatform: Maybe<(
    { __typename?: 'x_queue_shopify_saveToPlatform_mutation_response' }
    & Pick<x_queue_shopify_saveToPlatform_mutation_response, 'affected_rows'>
  )> }
);

export type updateShopifyAccountMutationVariables = {
  id: Scalars['String'],
  _set?: Maybe<shopifyAccounts_set_input>
};


export type updateShopifyAccountMutation = (
  { __typename?: 'mutation_root' }
  & { result: Maybe<(
    { __typename?: 'shopifyAccounts_mutation_response' }
    & { affectedRows: shopifyAccounts_mutation_response['affected_rows'] }
  )> }
);

export type setShopifyAccountInitialSyncStateMutationVariables = {
  id: Scalars['String'],
  state: Scalars['String']
};


export type setShopifyAccountInitialSyncStateMutation = (
  { __typename?: 'mutation_root' }
  & { result: Maybe<(
    { __typename?: 'shopifyAccounts_mutation_response' }
    & { affectedRows: shopifyAccounts_mutation_response['affected_rows'] }
  )> }
);

export type insertCacheShopifyProductVariantsMutationVariables = {
  objects: Array<x_cache_shopify_productVariants_insert_input>
};


export type insertCacheShopifyProductVariantsMutation = (
  { __typename?: 'mutation_root' }
  & { result: Maybe<(
    { __typename?: 'x_cache_shopify_productVariants_mutation_response' }
    & Pick<x_cache_shopify_productVariants_mutation_response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'x_cache_shopify_productVariants' }
      & Pick<x_cache_shopify_productVariants, 'id'>
    )> }
  )> }
);

export type upsertCacheShopifyProductVariantsMutationVariables = {
  objects: Array<x_cache_shopify_productVariants_insert_input>
};


export type upsertCacheShopifyProductVariantsMutation = (
  { __typename?: 'mutation_root' }
  & { result: Maybe<(
    { __typename?: 'x_cache_shopify_productVariants_mutation_response' }
    & Pick<x_cache_shopify_productVariants_mutation_response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'x_cache_shopify_productVariants' }
      & Pick<x_cache_shopify_productVariants, 'id'>
    )> }
  )> }
);

export type insertCacheShopifyProductsMutationVariables = {
  objects: Array<x_cache_shopify_products_insert_input>
};


export type insertCacheShopifyProductsMutation = (
  { __typename?: 'mutation_root' }
  & { result: Maybe<(
    { __typename?: 'x_cache_shopify_products_mutation_response' }
    & Pick<x_cache_shopify_products_mutation_response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'x_cache_shopify_products' }
      & Pick<x_cache_shopify_products, 'id'>
    )> }
  )> }
);

export type upsertCacheShopifyProductsMutationVariables = {
  objects: Array<x_cache_shopify_products_insert_input>
};


export type upsertCacheShopifyProductsMutation = (
  { __typename?: 'mutation_root' }
  & { result: Maybe<(
    { __typename?: 'x_cache_shopify_products_mutation_response' }
    & Pick<x_cache_shopify_products_mutation_response, 'affected_rows'>
    & { returning: Array<(
      { __typename?: 'x_cache_shopify_products' }
      & Pick<x_cache_shopify_products, 'id'>
    )> }
  )> }
);

export type getProductsQueryVariables = {
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  orderBy?: Maybe<Array<products_order_by>>,
  where?: Maybe<products_bool_exp>
};


export type getProductsQuery = (
  { __typename?: 'query_root' }
  & { products: Array<(
    { __typename?: 'products' }
    & Pick<products, 'id' | 'createdAt' | 'updatedAt' | 'title'>
  )> }
);

export type getProductQueryVariables = {
  id: Scalars['bigint']
};


export type getProductQuery = (
  { __typename?: 'query_root' }
  & { product: Maybe<(
    { __typename?: 'products' }
    & Pick<products, 'id' | 'createdAt' | 'updatedAt' | 'title'>
  )> }
);

export type getShopifyAccountQueryVariables = {
  id: Scalars['String']
};


export type getShopifyAccountQuery = (
  { __typename?: 'query_root' }
  & { shopifyAccount: Maybe<(
    { __typename?: 'shopifyAccounts' }
    & Pick<shopifyAccounts, 'encryptedAccessToken'>
  )> }
);

export type getShopIdForShopifyAccountQueryVariables = {
  shopifyAccountId: Scalars['String']
};


export type getShopIdForShopifyAccountQuery = (
  { __typename?: 'query_root' }
  & { shopifyAccount: Maybe<(
    { __typename?: 'shopifyAccounts' }
    & Pick<shopifyAccounts, 'shopId'>
  )> }
);

export type getCachedShopifyProductVariantsQueryVariables = {
  shopifyAccountId: Scalars['String'],
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type getCachedShopifyProductVariantsQuery = (
  { __typename?: 'query_root' }
  & { total: (
    { __typename?: 'x_cache_shopify_productVariants_aggregate' }
    & { aggregate: Maybe<(
      { __typename?: 'x_cache_shopify_productVariants_aggregate_fields' }
      & Pick<x_cache_shopify_productVariants_aggregate_fields, 'count'>
    )> }
  ), result: Array<(
    { __typename?: 'x_cache_shopify_productVariants' }
    & Pick<x_cache_shopify_productVariants, 'id' | 'productId' | 'title' | 'price' | 'compareAtPrice' | 'availableForSale' | 'inventoryQuantity' | 'images' | 'selectedOptions'>
  )> }
);

export type getCachedShopifyProductsQueryVariables = {
  shopifyAccountId: Scalars['String'],
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>
};


export type getCachedShopifyProductsQuery = (
  { __typename?: 'query_root' }
  & { total: (
    { __typename?: 'x_cache_shopify_products_aggregate' }
    & { aggregate: Maybe<(
      { __typename?: 'x_cache_shopify_products_aggregate_fields' }
      & Pick<x_cache_shopify_products_aggregate_fields, 'count'>
    )> }
  ), result: Array<(
    { __typename?: 'x_cache_shopify_products' }
    & Pick<x_cache_shopify_products, 'id' | 'title' | 'handle' | 'description' | 'productType' | 'options' | 'images'>
  )> }
);


export const upsertProductVariantsDocument = gql`
    mutation upsertProductVariants($objects: [productVariants_insert_input!]!) {
  result: insertProductVariants(objects: $objects, on_conflict: {constraint: productVariants_foreignId_key, update_columns: [available, foreignId, productId, price, compareAtPrice, inventory, title]}) {
    affected_rows
    returning {
      id
      foreignId
      productId
      price
      compareAtPrice
      selectedOptions {
        title
        value
      }
    }
  }
}
    `;
export const upsertProductsDocument = gql`
    mutation upsertProducts($objects: [products_insert_input!]!) {
  result: insertProducts(objects: $objects, on_conflict: {constraint: products_foreignId_key, update_columns: [description, foreignId, shopId, handle, metadata, title, type]}) {
    affected_rows
    returning {
      id
      foreignId
      shopId
      handle
      options {
        id
        foreignId
        title
        position
        values {
          id
          title
          position
        }
      }
    }
  }
}
    `;
export const enqueueShopifyFetchProductsDocument = gql`
    mutation enqueueShopifyFetchProducts($shopifyAccountId: String!, $myshopifyDomain: String!, $encryptedAccessToken: String!, $cursor: String) {
  insert_x_queue_shopify_fetchProducts(objects: {shopifyAccountId: $shopifyAccountId, myshopifyDomain: $myshopifyDomain, encryptedAccessToken: $encryptedAccessToken, cursor: $cursor}) {
    returning {
      id
    }
  }
}
    `;
export const enqueueShopifyFetchProductVariantsDocument = gql`
    mutation enqueueShopifyFetchProductVariants($shopifyAccountId: String!, $myshopifyDomain: String!, $encryptedAccessToken: String!, $cursor: String) {
  insert_x_queue_shopify_fetchProductVariants(objects: {shopifyAccountId: $shopifyAccountId, myshopifyDomain: $myshopifyDomain, encryptedAccessToken: $encryptedAccessToken, cursor: $cursor}) {
    returning {
      id
    }
  }
}
    `;
export const enqueueShopifyTransformToPlatformDocument = gql`
    mutation enqueueShopifyTransformToPlatform($shopifyAccountId: String!) {
  insert_x_queue_shopify_transformToPlatform(objects: {shopifyAccountId: $shopifyAccountId}) {
    returning {
      id
    }
  }
}
    `;
export const enqueueShopifySaveToPlatformDocument = gql`
    mutation enqueueShopifySaveToPlatform($products: jsonb!, $shopifyAccountId: String!) {
  insert_x_queue_shopify_saveToPlatform(objects: {products: $products, shopifyAccountId: $shopifyAccountId}) {
    returning {
      id
    }
  }
}
    `;
export const processedQueueShopifyFetchProductsDocument = gql`
    mutation processedQueueShopifyFetchProducts($id: bigint!) {
  update_x_queue_shopify_fetchProducts(where: {id: {_eq: $id}}, _set: {processed: true}) {
    affected_rows
  }
}
    `;
export const processedQueueShopifyFetchProductVariantsDocument = gql`
    mutation processedQueueShopifyFetchProductVariants($id: bigint!) {
  update_x_queue_shopify_fetchProductVariants(where: {id: {_eq: $id}}, _set: {processed: true}) {
    affected_rows
  }
}
    `;
export const processedQueueShopifyTransformToPlatformDocument = gql`
    mutation processedQueueShopifyTransformToPlatform($id: bigint!) {
  update_x_queue_shopify_transformToPlatform(where: {id: {_eq: $id}}, _set: {processed: true}) {
    affected_rows
  }
}
    `;
export const processedQueueShopifySaveToPlatformDocument = gql`
    mutation processedQueueShopifySaveToPlatform($id: bigint!) {
  update_x_queue_shopify_saveToPlatform(where: {id: {_eq: $id}}, _set: {processed: true}) {
    affected_rows
  }
}
    `;
export const updateShopifyAccountDocument = gql`
    mutation updateShopifyAccount($id: String!, $_set: shopifyAccounts_set_input) {
  result: updateShopifyAccounts(where: {id: {_eq: $id}}, _set: $_set) {
    affectedRows: affected_rows
  }
}
    `;
export const setShopifyAccountInitialSyncStateDocument = gql`
    mutation setShopifyAccountInitialSyncState($id: String!, $state: String!) {
  result: updateShopifyAccounts(where: {id: {_eq: $id}}, _set: {initialSyncState: $state}) {
    affectedRows: affected_rows
  }
}
    `;
export const insertCacheShopifyProductVariantsDocument = gql`
    mutation insertCacheShopifyProductVariants($objects: [x_cache_shopify_productVariants_insert_input!]!) {
  result: insert_x_cache_shopify_productVariants(objects: $objects) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const upsertCacheShopifyProductVariantsDocument = gql`
    mutation upsertCacheShopifyProductVariants($objects: [x_cache_shopify_productVariants_insert_input!]!) {
  result: insert_x_cache_shopify_productVariants(objects: $objects, on_conflict: {constraint: x_cache_shopify_productVariants_pkey, update_columns: [title, availableForSale, price, compareAtPrice, images, inventoryQuantity, productId, selectedOptions]}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const insertCacheShopifyProductsDocument = gql`
    mutation insertCacheShopifyProducts($objects: [x_cache_shopify_products_insert_input!]!) {
  result: insert_x_cache_shopify_products(objects: $objects) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const upsertCacheShopifyProductsDocument = gql`
    mutation upsertCacheShopifyProducts($objects: [x_cache_shopify_products_insert_input!]!) {
  result: insert_x_cache_shopify_products(objects: $objects, on_conflict: {constraint: x_cache_shopify_products_pkey, update_columns: [description, title, handle, options, productType, images]}) {
    affected_rows
    returning {
      id
    }
  }
}
    `;
export const getProductsDocument = gql`
    query getProducts($limit: Int, $offset: Int, $orderBy: [products_order_by!], $where: products_bool_exp) {
  products(limit: $limit, offset: $offset, order_by: $orderBy, where: $where) {
    id
    createdAt
    updatedAt
    title
  }
}
    `;
export const getProductDocument = gql`
    query getProduct($id: bigint!) {
  product(id: $id) {
    id
    createdAt
    updatedAt
    title
  }
}
    `;
export const getShopifyAccountDocument = gql`
    query getShopifyAccount($id: String!) {
  shopifyAccount(id: $id) {
    encryptedAccessToken
  }
}
    `;
export const getShopIdForShopifyAccountDocument = gql`
    query getShopIdForShopifyAccount($shopifyAccountId: String!) {
  shopifyAccount(id: $shopifyAccountId) {
    shopId
  }
}
    `;
export const getCachedShopifyProductVariantsDocument = gql`
    query getCachedShopifyProductVariants($shopifyAccountId: String!, $limit: Int, $offset: Int) {
  total: x_cache_shopify_productVariants_aggregate(where: {shopifyAccountId: {_eq: $shopifyAccountId}}) {
    aggregate {
      count
    }
  }
  result: x_cache_shopify_productVariants(where: {shopifyAccountId: {_eq: $shopifyAccountId}}, limit: $limit, offset: $offset) {
    id
    productId
    title
    price
    compareAtPrice
    availableForSale
    inventoryQuantity
    images
    selectedOptions
  }
}
    `;
export const getCachedShopifyProductsDocument = gql`
    query getCachedShopifyProducts($shopifyAccountId: String!, $limit: Int, $offset: Int) {
  total: x_cache_shopify_products_aggregate(where: {shopifyAccountId: {_eq: $shopifyAccountId}}) {
    aggregate {
      count
    }
  }
  result: x_cache_shopify_products(where: {shopifyAccountId: {_eq: $shopifyAccountId}}, limit: $limit, offset: $offset) {
    id
    title
    handle
    description
    productType
    options
    images
  }
}
    `;
export function getSdk(client: GraphQLClient) {
  return {
    upsertProductVariants(variables: upsertProductVariantsMutationVariables): Promise<upsertProductVariantsMutation> {
      return client.request<upsertProductVariantsMutation>(print(upsertProductVariantsDocument), variables);
    },
    upsertProducts(variables: upsertProductsMutationVariables): Promise<upsertProductsMutation> {
      return client.request<upsertProductsMutation>(print(upsertProductsDocument), variables);
    },
    enqueueShopifyFetchProducts(variables: enqueueShopifyFetchProductsMutationVariables): Promise<enqueueShopifyFetchProductsMutation> {
      return client.request<enqueueShopifyFetchProductsMutation>(print(enqueueShopifyFetchProductsDocument), variables);
    },
    enqueueShopifyFetchProductVariants(variables: enqueueShopifyFetchProductVariantsMutationVariables): Promise<enqueueShopifyFetchProductVariantsMutation> {
      return client.request<enqueueShopifyFetchProductVariantsMutation>(print(enqueueShopifyFetchProductVariantsDocument), variables);
    },
    enqueueShopifyTransformToPlatform(variables: enqueueShopifyTransformToPlatformMutationVariables): Promise<enqueueShopifyTransformToPlatformMutation> {
      return client.request<enqueueShopifyTransformToPlatformMutation>(print(enqueueShopifyTransformToPlatformDocument), variables);
    },
    enqueueShopifySaveToPlatform(variables: enqueueShopifySaveToPlatformMutationVariables): Promise<enqueueShopifySaveToPlatformMutation> {
      return client.request<enqueueShopifySaveToPlatformMutation>(print(enqueueShopifySaveToPlatformDocument), variables);
    },
    processedQueueShopifyFetchProducts(variables: processedQueueShopifyFetchProductsMutationVariables): Promise<processedQueueShopifyFetchProductsMutation> {
      return client.request<processedQueueShopifyFetchProductsMutation>(print(processedQueueShopifyFetchProductsDocument), variables);
    },
    processedQueueShopifyFetchProductVariants(variables: processedQueueShopifyFetchProductVariantsMutationVariables): Promise<processedQueueShopifyFetchProductVariantsMutation> {
      return client.request<processedQueueShopifyFetchProductVariantsMutation>(print(processedQueueShopifyFetchProductVariantsDocument), variables);
    },
    processedQueueShopifyTransformToPlatform(variables: processedQueueShopifyTransformToPlatformMutationVariables): Promise<processedQueueShopifyTransformToPlatformMutation> {
      return client.request<processedQueueShopifyTransformToPlatformMutation>(print(processedQueueShopifyTransformToPlatformDocument), variables);
    },
    processedQueueShopifySaveToPlatform(variables: processedQueueShopifySaveToPlatformMutationVariables): Promise<processedQueueShopifySaveToPlatformMutation> {
      return client.request<processedQueueShopifySaveToPlatformMutation>(print(processedQueueShopifySaveToPlatformDocument), variables);
    },
    updateShopifyAccount(variables: updateShopifyAccountMutationVariables): Promise<updateShopifyAccountMutation> {
      return client.request<updateShopifyAccountMutation>(print(updateShopifyAccountDocument), variables);
    },
    setShopifyAccountInitialSyncState(variables: setShopifyAccountInitialSyncStateMutationVariables): Promise<setShopifyAccountInitialSyncStateMutation> {
      return client.request<setShopifyAccountInitialSyncStateMutation>(print(setShopifyAccountInitialSyncStateDocument), variables);
    },
    insertCacheShopifyProductVariants(variables: insertCacheShopifyProductVariantsMutationVariables): Promise<insertCacheShopifyProductVariantsMutation> {
      return client.request<insertCacheShopifyProductVariantsMutation>(print(insertCacheShopifyProductVariantsDocument), variables);
    },
    upsertCacheShopifyProductVariants(variables: upsertCacheShopifyProductVariantsMutationVariables): Promise<upsertCacheShopifyProductVariantsMutation> {
      return client.request<upsertCacheShopifyProductVariantsMutation>(print(upsertCacheShopifyProductVariantsDocument), variables);
    },
    insertCacheShopifyProducts(variables: insertCacheShopifyProductsMutationVariables): Promise<insertCacheShopifyProductsMutation> {
      return client.request<insertCacheShopifyProductsMutation>(print(insertCacheShopifyProductsDocument), variables);
    },
    upsertCacheShopifyProducts(variables: upsertCacheShopifyProductsMutationVariables): Promise<upsertCacheShopifyProductsMutation> {
      return client.request<upsertCacheShopifyProductsMutation>(print(upsertCacheShopifyProductsDocument), variables);
    },
    getProducts(variables?: getProductsQueryVariables): Promise<getProductsQuery> {
      return client.request<getProductsQuery>(print(getProductsDocument), variables);
    },
    getProduct(variables: getProductQueryVariables): Promise<getProductQuery> {
      return client.request<getProductQuery>(print(getProductDocument), variables);
    },
    getShopifyAccount(variables: getShopifyAccountQueryVariables): Promise<getShopifyAccountQuery> {
      return client.request<getShopifyAccountQuery>(print(getShopifyAccountDocument), variables);
    },
    getShopIdForShopifyAccount(variables: getShopIdForShopifyAccountQueryVariables): Promise<getShopIdForShopifyAccountQuery> {
      return client.request<getShopIdForShopifyAccountQuery>(print(getShopIdForShopifyAccountDocument), variables);
    },
    getCachedShopifyProductVariants(variables: getCachedShopifyProductVariantsQueryVariables): Promise<getCachedShopifyProductVariantsQuery> {
      return client.request<getCachedShopifyProductVariantsQuery>(print(getCachedShopifyProductVariantsDocument), variables);
    },
    getCachedShopifyProducts(variables: getCachedShopifyProductsQueryVariables): Promise<getCachedShopifyProductsQuery> {
      return client.request<getCachedShopifyProductsQuery>(print(getCachedShopifyProductsDocument), variables);
    }
  };
}