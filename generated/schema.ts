// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Int: number,
    Boolean: boolean,
    String: string,
    Float: number,
    uuid: any,
}


/** ordering argument of a cursor */
export type cursor_ordering = 'ASC' | 'DESC'


/** mutation root */
export interface mutation_root {
    /** delete data from the table: "sneakers.items" */
    delete_sneakers_items: (sneakers_items_mutation_response | null)
    /** delete single row from the table: "sneakers.items" */
    delete_sneakers_items_by_pk: (sneakers_items | null)
    /** insert data into the table: "sneakers.items" */
    insert_sneakers_items: (sneakers_items_mutation_response | null)
    /** insert a single row into the table: "sneakers.items" */
    insert_sneakers_items_one: (sneakers_items | null)
    /** update data of the table: "sneakers.items" */
    update_sneakers_items: (sneakers_items_mutation_response | null)
    /** update single row of the table: "sneakers.items" */
    update_sneakers_items_by_pk: (sneakers_items | null)
    /** update multiples rows of table: "sneakers.items" */
    update_sneakers_items_many: ((sneakers_items_mutation_response | null)[] | null)
    __typename: 'mutation_root'
}


/** column ordering options */
export type order_by = 'asc' | 'asc_nulls_first' | 'asc_nulls_last' | 'desc' | 'desc_nulls_first' | 'desc_nulls_last'

export interface query_root {
    /** fetch data from the table: "sneakers.items" */
    sneakers_items: sneakers_items[]
    /** fetch aggregated fields from the table: "sneakers.items" */
    sneakers_items_aggregate: sneakers_items_aggregate
    /** fetch data from the table: "sneakers.items" using primary key columns */
    sneakers_items_by_pk: (sneakers_items | null)
    __typename: 'query_root'
}


/** columns and relationships of "sneakers.items" */
export interface sneakers_items {
    id: Scalars['uuid']
    image_url: Scalars['String']
    price: Scalars['Int']
    title: Scalars['String']
    __typename: 'sneakers_items'
}


/** aggregated selection of "sneakers.items" */
export interface sneakers_items_aggregate {
    aggregate: (sneakers_items_aggregate_fields | null)
    nodes: sneakers_items[]
    __typename: 'sneakers_items_aggregate'
}


/** aggregate fields of "sneakers.items" */
export interface sneakers_items_aggregate_fields {
    avg: (sneakers_items_avg_fields | null)
    count: Scalars['Int']
    max: (sneakers_items_max_fields | null)
    min: (sneakers_items_min_fields | null)
    stddev: (sneakers_items_stddev_fields | null)
    stddev_pop: (sneakers_items_stddev_pop_fields | null)
    stddev_samp: (sneakers_items_stddev_samp_fields | null)
    sum: (sneakers_items_sum_fields | null)
    var_pop: (sneakers_items_var_pop_fields | null)
    var_samp: (sneakers_items_var_samp_fields | null)
    variance: (sneakers_items_variance_fields | null)
    __typename: 'sneakers_items_aggregate_fields'
}


/** aggregate avg on columns */
export interface sneakers_items_avg_fields {
    price: (Scalars['Float'] | null)
    __typename: 'sneakers_items_avg_fields'
}


/** unique or primary key constraints on table "sneakers.items" */
export type sneakers_items_constraint = 'items_pkey'


/** aggregate max on columns */
export interface sneakers_items_max_fields {
    id: (Scalars['uuid'] | null)
    image_url: (Scalars['String'] | null)
    price: (Scalars['Int'] | null)
    title: (Scalars['String'] | null)
    __typename: 'sneakers_items_max_fields'
}


/** aggregate min on columns */
export interface sneakers_items_min_fields {
    id: (Scalars['uuid'] | null)
    image_url: (Scalars['String'] | null)
    price: (Scalars['Int'] | null)
    title: (Scalars['String'] | null)
    __typename: 'sneakers_items_min_fields'
}


/** response of any mutation on the table "sneakers.items" */
export interface sneakers_items_mutation_response {
    /** number of rows affected by the mutation */
    affected_rows: Scalars['Int']
    /** data from the rows affected by the mutation */
    returning: sneakers_items[]
    __typename: 'sneakers_items_mutation_response'
}


/** select columns of table "sneakers.items" */
export type sneakers_items_select_column = 'id' | 'image_url' | 'price' | 'title'


/** aggregate stddev on columns */
export interface sneakers_items_stddev_fields {
    price: (Scalars['Float'] | null)
    __typename: 'sneakers_items_stddev_fields'
}


/** aggregate stddev_pop on columns */
export interface sneakers_items_stddev_pop_fields {
    price: (Scalars['Float'] | null)
    __typename: 'sneakers_items_stddev_pop_fields'
}


/** aggregate stddev_samp on columns */
export interface sneakers_items_stddev_samp_fields {
    price: (Scalars['Float'] | null)
    __typename: 'sneakers_items_stddev_samp_fields'
}


/** aggregate sum on columns */
export interface sneakers_items_sum_fields {
    price: (Scalars['Int'] | null)
    __typename: 'sneakers_items_sum_fields'
}


/** update columns of table "sneakers.items" */
export type sneakers_items_update_column = 'id' | 'image_url' | 'price' | 'title'


/** aggregate var_pop on columns */
export interface sneakers_items_var_pop_fields {
    price: (Scalars['Float'] | null)
    __typename: 'sneakers_items_var_pop_fields'
}


/** aggregate var_samp on columns */
export interface sneakers_items_var_samp_fields {
    price: (Scalars['Float'] | null)
    __typename: 'sneakers_items_var_samp_fields'
}


/** aggregate variance on columns */
export interface sneakers_items_variance_fields {
    price: (Scalars['Float'] | null)
    __typename: 'sneakers_items_variance_fields'
}

export interface subscription_root {
    /** fetch data from the table: "sneakers.items" */
    sneakers_items: sneakers_items[]
    /** fetch aggregated fields from the table: "sneakers.items" */
    sneakers_items_aggregate: sneakers_items_aggregate
    /** fetch data from the table: "sneakers.items" using primary key columns */
    sneakers_items_by_pk: (sneakers_items | null)
    /** fetch data from the table in a streaming manner: "sneakers.items" */
    sneakers_items_stream: sneakers_items[]
    __typename: 'subscription_root'
}

export type Query = query_root
export type Mutation = mutation_root
export type Subscription = subscription_root


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export interface Int_comparison_exp {_eq?: (Scalars['Int'] | null),_gt?: (Scalars['Int'] | null),_gte?: (Scalars['Int'] | null),_in?: (Scalars['Int'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['Int'] | null),_lte?: (Scalars['Int'] | null),_neq?: (Scalars['Int'] | null),_nin?: (Scalars['Int'][] | null)}


/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export interface String_comparison_exp {_eq?: (Scalars['String'] | null),_gt?: (Scalars['String'] | null),_gte?: (Scalars['String'] | null),
/** does the column match the given case-insensitive pattern */
_ilike?: (Scalars['String'] | null),_in?: (Scalars['String'][] | null),
/** does the column match the given POSIX regular expression, case insensitive */
_iregex?: (Scalars['String'] | null),_is_null?: (Scalars['Boolean'] | null),
/** does the column match the given pattern */
_like?: (Scalars['String'] | null),_lt?: (Scalars['String'] | null),_lte?: (Scalars['String'] | null),_neq?: (Scalars['String'] | null),
/** does the column NOT match the given case-insensitive pattern */
_nilike?: (Scalars['String'] | null),_nin?: (Scalars['String'][] | null),
/** does the column NOT match the given POSIX regular expression, case insensitive */
_niregex?: (Scalars['String'] | null),
/** does the column NOT match the given pattern */
_nlike?: (Scalars['String'] | null),
/** does the column NOT match the given POSIX regular expression, case sensitive */
_nregex?: (Scalars['String'] | null),
/** does the column NOT match the given SQL regular expression */
_nsimilar?: (Scalars['String'] | null),
/** does the column match the given POSIX regular expression, case sensitive */
_regex?: (Scalars['String'] | null),
/** does the column match the given SQL regular expression */
_similar?: (Scalars['String'] | null)}


/** mutation root */
export interface mutation_rootGenqlSelection{
    /** delete data from the table: "sneakers.items" */
    delete_sneakers_items?: (sneakers_items_mutation_responseGenqlSelection & { __args: {
    /** filter the rows which have to be deleted */
    where: sneakers_items_bool_exp} })
    /** delete single row from the table: "sneakers.items" */
    delete_sneakers_items_by_pk?: (sneakers_itemsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** insert data into the table: "sneakers.items" */
    insert_sneakers_items?: (sneakers_items_mutation_responseGenqlSelection & { __args: {
    /** the rows to be inserted */
    objects: sneakers_items_insert_input[], 
    /** upsert condition */
    on_conflict?: (sneakers_items_on_conflict | null)} })
    /** insert a single row into the table: "sneakers.items" */
    insert_sneakers_items_one?: (sneakers_itemsGenqlSelection & { __args: {
    /** the row to be inserted */
    object: sneakers_items_insert_input, 
    /** upsert condition */
    on_conflict?: (sneakers_items_on_conflict | null)} })
    /** update data of the table: "sneakers.items" */
    update_sneakers_items?: (sneakers_items_mutation_responseGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (sneakers_items_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (sneakers_items_set_input | null), 
    /** filter the rows which have to be updated */
    where: sneakers_items_bool_exp} })
    /** update single row of the table: "sneakers.items" */
    update_sneakers_items_by_pk?: (sneakers_itemsGenqlSelection & { __args: {
    /** increments the numeric columns with given value of the filtered values */
    _inc?: (sneakers_items_inc_input | null), 
    /** sets the columns of the filtered rows to the given values */
    _set?: (sneakers_items_set_input | null), pk_columns: sneakers_items_pk_columns_input} })
    /** update multiples rows of table: "sneakers.items" */
    update_sneakers_items_many?: (sneakers_items_mutation_responseGenqlSelection & { __args: {
    /** updates to execute, in order */
    updates: sneakers_items_updates[]} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface query_rootGenqlSelection{
    /** fetch data from the table: "sneakers.items" */
    sneakers_items?: (sneakers_itemsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sneakers_items_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sneakers_items_order_by[] | null), 
    /** filter the rows returned */
    where?: (sneakers_items_bool_exp | null)} })
    /** fetch aggregated fields from the table: "sneakers.items" */
    sneakers_items_aggregate?: (sneakers_items_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sneakers_items_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sneakers_items_order_by[] | null), 
    /** filter the rows returned */
    where?: (sneakers_items_bool_exp | null)} })
    /** fetch data from the table: "sneakers.items" using primary key columns */
    sneakers_items_by_pk?: (sneakers_itemsGenqlSelection & { __args: {id: Scalars['uuid']} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** columns and relationships of "sneakers.items" */
export interface sneakers_itemsGenqlSelection{
    id?: boolean | number
    image_url?: boolean | number
    price?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregated selection of "sneakers.items" */
export interface sneakers_items_aggregateGenqlSelection{
    aggregate?: sneakers_items_aggregate_fieldsGenqlSelection
    nodes?: sneakers_itemsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate fields of "sneakers.items" */
export interface sneakers_items_aggregate_fieldsGenqlSelection{
    avg?: sneakers_items_avg_fieldsGenqlSelection
    count?: { __args: {columns?: (sneakers_items_select_column[] | null), distinct?: (Scalars['Boolean'] | null)} } | boolean | number
    max?: sneakers_items_max_fieldsGenqlSelection
    min?: sneakers_items_min_fieldsGenqlSelection
    stddev?: sneakers_items_stddev_fieldsGenqlSelection
    stddev_pop?: sneakers_items_stddev_pop_fieldsGenqlSelection
    stddev_samp?: sneakers_items_stddev_samp_fieldsGenqlSelection
    sum?: sneakers_items_sum_fieldsGenqlSelection
    var_pop?: sneakers_items_var_pop_fieldsGenqlSelection
    var_samp?: sneakers_items_var_samp_fieldsGenqlSelection
    variance?: sneakers_items_variance_fieldsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate avg on columns */
export interface sneakers_items_avg_fieldsGenqlSelection{
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to filter rows from the table "sneakers.items". All fields are combined with a logical 'AND'. */
export interface sneakers_items_bool_exp {_and?: (sneakers_items_bool_exp[] | null),_not?: (sneakers_items_bool_exp | null),_or?: (sneakers_items_bool_exp[] | null),id?: (uuid_comparison_exp | null),image_url?: (String_comparison_exp | null),price?: (Int_comparison_exp | null),title?: (String_comparison_exp | null)}


/** input type for incrementing numeric columns in table "sneakers.items" */
export interface sneakers_items_inc_input {price?: (Scalars['Int'] | null)}


/** input type for inserting data into table "sneakers.items" */
export interface sneakers_items_insert_input {id?: (Scalars['uuid'] | null),image_url?: (Scalars['String'] | null),price?: (Scalars['Int'] | null),title?: (Scalars['String'] | null)}


/** aggregate max on columns */
export interface sneakers_items_max_fieldsGenqlSelection{
    id?: boolean | number
    image_url?: boolean | number
    price?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate min on columns */
export interface sneakers_items_min_fieldsGenqlSelection{
    id?: boolean | number
    image_url?: boolean | number
    price?: boolean | number
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** response of any mutation on the table "sneakers.items" */
export interface sneakers_items_mutation_responseGenqlSelection{
    /** number of rows affected by the mutation */
    affected_rows?: boolean | number
    /** data from the rows affected by the mutation */
    returning?: sneakers_itemsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** on_conflict condition type for table "sneakers.items" */
export interface sneakers_items_on_conflict {constraint: sneakers_items_constraint,update_columns?: sneakers_items_update_column[],where?: (sneakers_items_bool_exp | null)}


/** Ordering options when selecting data from "sneakers.items". */
export interface sneakers_items_order_by {id?: (order_by | null),image_url?: (order_by | null),price?: (order_by | null),title?: (order_by | null)}


/** primary key columns input for table: sneakers.items */
export interface sneakers_items_pk_columns_input {id: Scalars['uuid']}


/** input type for updating data in table "sneakers.items" */
export interface sneakers_items_set_input {id?: (Scalars['uuid'] | null),image_url?: (Scalars['String'] | null),price?: (Scalars['Int'] | null),title?: (Scalars['String'] | null)}


/** aggregate stddev on columns */
export interface sneakers_items_stddev_fieldsGenqlSelection{
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_pop on columns */
export interface sneakers_items_stddev_pop_fieldsGenqlSelection{
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate stddev_samp on columns */
export interface sneakers_items_stddev_samp_fieldsGenqlSelection{
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Streaming cursor of the table "sneakers_items" */
export interface sneakers_items_stream_cursor_input {
/** Stream column input with initial value */
initial_value: sneakers_items_stream_cursor_value_input,
/** cursor ordering */
ordering?: (cursor_ordering | null)}


/** Initial value of the column from where the streaming should start */
export interface sneakers_items_stream_cursor_value_input {id?: (Scalars['uuid'] | null),image_url?: (Scalars['String'] | null),price?: (Scalars['Int'] | null),title?: (Scalars['String'] | null)}


/** aggregate sum on columns */
export interface sneakers_items_sum_fieldsGenqlSelection{
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface sneakers_items_updates {
/** increments the numeric columns with given value of the filtered values */
_inc?: (sneakers_items_inc_input | null),
/** sets the columns of the filtered rows to the given values */
_set?: (sneakers_items_set_input | null),
/** filter the rows which have to be updated */
where: sneakers_items_bool_exp}


/** aggregate var_pop on columns */
export interface sneakers_items_var_pop_fieldsGenqlSelection{
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate var_samp on columns */
export interface sneakers_items_var_samp_fieldsGenqlSelection{
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** aggregate variance on columns */
export interface sneakers_items_variance_fieldsGenqlSelection{
    price?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface subscription_rootGenqlSelection{
    /** fetch data from the table: "sneakers.items" */
    sneakers_items?: (sneakers_itemsGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sneakers_items_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sneakers_items_order_by[] | null), 
    /** filter the rows returned */
    where?: (sneakers_items_bool_exp | null)} })
    /** fetch aggregated fields from the table: "sneakers.items" */
    sneakers_items_aggregate?: (sneakers_items_aggregateGenqlSelection & { __args?: {
    /** distinct select on columns */
    distinct_on?: (sneakers_items_select_column[] | null), 
    /** limit the number of rows returned */
    limit?: (Scalars['Int'] | null), 
    /** skip the first n rows. Use only with order_by */
    offset?: (Scalars['Int'] | null), 
    /** sort the rows by one or more columns */
    order_by?: (sneakers_items_order_by[] | null), 
    /** filter the rows returned */
    where?: (sneakers_items_bool_exp | null)} })
    /** fetch data from the table: "sneakers.items" using primary key columns */
    sneakers_items_by_pk?: (sneakers_itemsGenqlSelection & { __args: {id: Scalars['uuid']} })
    /** fetch data from the table in a streaming manner: "sneakers.items" */
    sneakers_items_stream?: (sneakers_itemsGenqlSelection & { __args: {
    /** maximum number of rows returned in a single batch */
    batch_size: Scalars['Int'], 
    /** cursor to stream the results returned by the query */
    cursor: (sneakers_items_stream_cursor_input | null)[], 
    /** filter the rows returned */
    where?: (sneakers_items_bool_exp | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export interface uuid_comparison_exp {_eq?: (Scalars['uuid'] | null),_gt?: (Scalars['uuid'] | null),_gte?: (Scalars['uuid'] | null),_in?: (Scalars['uuid'][] | null),_is_null?: (Scalars['Boolean'] | null),_lt?: (Scalars['uuid'] | null),_lte?: (Scalars['uuid'] | null),_neq?: (Scalars['uuid'] | null),_nin?: (Scalars['uuid'][] | null)}

export type QueryGenqlSelection = query_rootGenqlSelection
export type MutationGenqlSelection = mutation_rootGenqlSelection
export type SubscriptionGenqlSelection = subscription_rootGenqlSelection


    const mutation_root_possibleTypes: string[] = ['mutation_root']
    export const ismutation_root = (obj?: { __typename?: any } | null): obj is mutation_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "ismutation_root"')
      return mutation_root_possibleTypes.includes(obj.__typename)
    }
    


    const query_root_possibleTypes: string[] = ['query_root']
    export const isquery_root = (obj?: { __typename?: any } | null): obj is query_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isquery_root"')
      return query_root_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_possibleTypes: string[] = ['sneakers_items']
    export const issneakers_items = (obj?: { __typename?: any } | null): obj is sneakers_items => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items"')
      return sneakers_items_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_aggregate_possibleTypes: string[] = ['sneakers_items_aggregate']
    export const issneakers_items_aggregate = (obj?: { __typename?: any } | null): obj is sneakers_items_aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items_aggregate"')
      return sneakers_items_aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_aggregate_fields_possibleTypes: string[] = ['sneakers_items_aggregate_fields']
    export const issneakers_items_aggregate_fields = (obj?: { __typename?: any } | null): obj is sneakers_items_aggregate_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items_aggregate_fields"')
      return sneakers_items_aggregate_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_avg_fields_possibleTypes: string[] = ['sneakers_items_avg_fields']
    export const issneakers_items_avg_fields = (obj?: { __typename?: any } | null): obj is sneakers_items_avg_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items_avg_fields"')
      return sneakers_items_avg_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_max_fields_possibleTypes: string[] = ['sneakers_items_max_fields']
    export const issneakers_items_max_fields = (obj?: { __typename?: any } | null): obj is sneakers_items_max_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items_max_fields"')
      return sneakers_items_max_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_min_fields_possibleTypes: string[] = ['sneakers_items_min_fields']
    export const issneakers_items_min_fields = (obj?: { __typename?: any } | null): obj is sneakers_items_min_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items_min_fields"')
      return sneakers_items_min_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_mutation_response_possibleTypes: string[] = ['sneakers_items_mutation_response']
    export const issneakers_items_mutation_response = (obj?: { __typename?: any } | null): obj is sneakers_items_mutation_response => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items_mutation_response"')
      return sneakers_items_mutation_response_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_stddev_fields_possibleTypes: string[] = ['sneakers_items_stddev_fields']
    export const issneakers_items_stddev_fields = (obj?: { __typename?: any } | null): obj is sneakers_items_stddev_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items_stddev_fields"')
      return sneakers_items_stddev_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_stddev_pop_fields_possibleTypes: string[] = ['sneakers_items_stddev_pop_fields']
    export const issneakers_items_stddev_pop_fields = (obj?: { __typename?: any } | null): obj is sneakers_items_stddev_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items_stddev_pop_fields"')
      return sneakers_items_stddev_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_stddev_samp_fields_possibleTypes: string[] = ['sneakers_items_stddev_samp_fields']
    export const issneakers_items_stddev_samp_fields = (obj?: { __typename?: any } | null): obj is sneakers_items_stddev_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items_stddev_samp_fields"')
      return sneakers_items_stddev_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_sum_fields_possibleTypes: string[] = ['sneakers_items_sum_fields']
    export const issneakers_items_sum_fields = (obj?: { __typename?: any } | null): obj is sneakers_items_sum_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items_sum_fields"')
      return sneakers_items_sum_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_var_pop_fields_possibleTypes: string[] = ['sneakers_items_var_pop_fields']
    export const issneakers_items_var_pop_fields = (obj?: { __typename?: any } | null): obj is sneakers_items_var_pop_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items_var_pop_fields"')
      return sneakers_items_var_pop_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_var_samp_fields_possibleTypes: string[] = ['sneakers_items_var_samp_fields']
    export const issneakers_items_var_samp_fields = (obj?: { __typename?: any } | null): obj is sneakers_items_var_samp_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items_var_samp_fields"')
      return sneakers_items_var_samp_fields_possibleTypes.includes(obj.__typename)
    }
    


    const sneakers_items_variance_fields_possibleTypes: string[] = ['sneakers_items_variance_fields']
    export const issneakers_items_variance_fields = (obj?: { __typename?: any } | null): obj is sneakers_items_variance_fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issneakers_items_variance_fields"')
      return sneakers_items_variance_fields_possibleTypes.includes(obj.__typename)
    }
    


    const subscription_root_possibleTypes: string[] = ['subscription_root']
    export const issubscription_root = (obj?: { __typename?: any } | null): obj is subscription_root => {
      if (!obj?.__typename) throw new Error('__typename is missing in "issubscription_root"')
      return subscription_root_possibleTypes.includes(obj.__typename)
    }
    

export const enumCursorOrdering = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumOrderBy = {
   asc: 'asc' as const,
   asc_nulls_first: 'asc_nulls_first' as const,
   asc_nulls_last: 'asc_nulls_last' as const,
   desc: 'desc' as const,
   desc_nulls_first: 'desc_nulls_first' as const,
   desc_nulls_last: 'desc_nulls_last' as const
}

export const enumSneakersItemsConstraint = {
   items_pkey: 'items_pkey' as const
}

export const enumSneakersItemsSelectColumn = {
   id: 'id' as const,
   image_url: 'image_url' as const,
   price: 'price' as const,
   title: 'title' as const
}

export const enumSneakersItemsUpdateColumn = {
   id: 'id' as const,
   image_url: 'image_url' as const,
   price: 'price' as const,
   title: 'title' as const
}
