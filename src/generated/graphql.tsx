import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bpchar: any;
  date: any;
  money: any;
  smallint: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "bpchar". All fields are combined with logical 'AND'. */
export type Bpchar_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bpchar']>;
  _gt?: InputMaybe<Scalars['bpchar']>;
  _gte?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['bpchar']>;
  _in?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['bpchar']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['bpchar']>;
  _lt?: InputMaybe<Scalars['bpchar']>;
  _lte?: InputMaybe<Scalars['bpchar']>;
  _neq?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['bpchar']>;
  _nin?: InputMaybe<Array<Scalars['bpchar']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['bpchar']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['bpchar']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['bpchar']>;
};

/** columns and relationships of "brands" */
export type Brands = {
  __typename?: 'brands';
  /** An array relationship */
  cars: Array<Cars>;
  /** An aggregate relationship */
  cars_aggregate: Cars_Aggregate;
  cars_count: Scalars['smallint'];
  id: Scalars['Int'];
  /** An array relationship */
  models: Array<Models>;
  /** An aggregate relationship */
  models_aggregate: Models_Aggregate;
  name: Scalars['String'];
  uuid: Scalars['uuid'];
};


/** columns and relationships of "brands" */
export type BrandsCarsArgs = {
  distinct_on?: InputMaybe<Array<Cars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Order_By>>;
  where?: InputMaybe<Cars_Bool_Exp>;
};


/** columns and relationships of "brands" */
export type BrandsCars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Order_By>>;
  where?: InputMaybe<Cars_Bool_Exp>;
};


/** columns and relationships of "brands" */
export type BrandsModelsArgs = {
  distinct_on?: InputMaybe<Array<Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Models_Order_By>>;
  where?: InputMaybe<Models_Bool_Exp>;
};


/** columns and relationships of "brands" */
export type BrandsModels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Models_Order_By>>;
  where?: InputMaybe<Models_Bool_Exp>;
};

/** aggregated selection of "brands" */
export type Brands_Aggregate = {
  __typename?: 'brands_aggregate';
  aggregate?: Maybe<Brands_Aggregate_Fields>;
  nodes: Array<Brands>;
};

/** aggregate fields of "brands" */
export type Brands_Aggregate_Fields = {
  __typename?: 'brands_aggregate_fields';
  avg?: Maybe<Brands_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Brands_Max_Fields>;
  min?: Maybe<Brands_Min_Fields>;
  stddev?: Maybe<Brands_Stddev_Fields>;
  stddev_pop?: Maybe<Brands_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Brands_Stddev_Samp_Fields>;
  sum?: Maybe<Brands_Sum_Fields>;
  var_pop?: Maybe<Brands_Var_Pop_Fields>;
  var_samp?: Maybe<Brands_Var_Samp_Fields>;
  variance?: Maybe<Brands_Variance_Fields>;
};


/** aggregate fields of "brands" */
export type Brands_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Brands_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Brands_Avg_Fields = {
  __typename?: 'brands_avg_fields';
  cars_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "brands". All fields are combined with a logical 'AND'. */
export type Brands_Bool_Exp = {
  _and?: InputMaybe<Array<Brands_Bool_Exp>>;
  _not?: InputMaybe<Brands_Bool_Exp>;
  _or?: InputMaybe<Array<Brands_Bool_Exp>>;
  cars?: InputMaybe<Cars_Bool_Exp>;
  cars_count?: InputMaybe<Smallint_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  models?: InputMaybe<Models_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "brands" */
export enum Brands_Constraint {
  /** unique or primary key constraint on columns "id" */
  BrandsPkey = 'brands_pkey',
  /** unique or primary key constraint on columns "uuid" */
  BrandsUuidKey = 'brands_uuid_key'
}

/** input type for incrementing numeric columns in table "brands" */
export type Brands_Inc_Input = {
  cars_count?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "brands" */
export type Brands_Insert_Input = {
  cars?: InputMaybe<Cars_Arr_Rel_Insert_Input>;
  cars_count?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['Int']>;
  models?: InputMaybe<Models_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Brands_Max_Fields = {
  __typename?: 'brands_max_fields';
  cars_count?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Brands_Min_Fields = {
  __typename?: 'brands_min_fields';
  cars_count?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "brands" */
export type Brands_Mutation_Response = {
  __typename?: 'brands_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Brands>;
};

/** input type for inserting object relation for remote table "brands" */
export type Brands_Obj_Rel_Insert_Input = {
  data: Brands_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Brands_On_Conflict>;
};

/** on_conflict condition type for table "brands" */
export type Brands_On_Conflict = {
  constraint: Brands_Constraint;
  update_columns?: Array<Brands_Update_Column>;
  where?: InputMaybe<Brands_Bool_Exp>;
};

/** Ordering options when selecting data from "brands". */
export type Brands_Order_By = {
  cars_aggregate?: InputMaybe<Cars_Aggregate_Order_By>;
  cars_count?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  models_aggregate?: InputMaybe<Models_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: brands */
export type Brands_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "brands" */
export enum Brands_Select_Column {
  /** column name */
  CarsCount = 'cars_count',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "brands" */
export type Brands_Set_Input = {
  cars_count?: InputMaybe<Scalars['smallint']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Brands_Stddev_Fields = {
  __typename?: 'brands_stddev_fields';
  cars_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Brands_Stddev_Pop_Fields = {
  __typename?: 'brands_stddev_pop_fields';
  cars_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Brands_Stddev_Samp_Fields = {
  __typename?: 'brands_stddev_samp_fields';
  cars_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Brands_Sum_Fields = {
  __typename?: 'brands_sum_fields';
  cars_count?: Maybe<Scalars['smallint']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "brands" */
export enum Brands_Update_Column {
  /** column name */
  CarsCount = 'cars_count',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

export type Brands_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Brands_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Brands_Set_Input>;
  where: Brands_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Brands_Var_Pop_Fields = {
  __typename?: 'brands_var_pop_fields';
  cars_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Brands_Var_Samp_Fields = {
  __typename?: 'brands_var_samp_fields';
  cars_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Brands_Variance_Fields = {
  __typename?: 'brands_variance_fields';
  cars_count?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "cars" */
export type Cars = {
  __typename?: 'cars';
  batch: Scalars['uuid'];
  brand_id: Scalars['Int'];
  /** An object relationship */
  city: Cities;
  city_id: Scalars['Int'];
  /** An object relationship */
  color: Colors;
  color_id: Scalars['Int'];
  condition: Scalars['bpchar'];
  create_date: Scalars['date'];
  damage_type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  /** An object relationship */
  model: Models;
  model_id: Scalars['Int'];
  odometer?: Maybe<Scalars['Int']>;
  price: Scalars['money'];
  sale_date: Scalars['date'];
  state_id: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  update_date: Scalars['date'];
  uuid: Scalars['uuid'];
  vin: Scalars['String'];
  year?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "cars" */
export type Cars_Aggregate = {
  __typename?: 'cars_aggregate';
  aggregate?: Maybe<Cars_Aggregate_Fields>;
  nodes: Array<Cars>;
};

/** aggregate fields of "cars" */
export type Cars_Aggregate_Fields = {
  __typename?: 'cars_aggregate_fields';
  avg?: Maybe<Cars_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cars_Max_Fields>;
  min?: Maybe<Cars_Min_Fields>;
  stddev?: Maybe<Cars_Stddev_Fields>;
  stddev_pop?: Maybe<Cars_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cars_Stddev_Samp_Fields>;
  sum?: Maybe<Cars_Sum_Fields>;
  var_pop?: Maybe<Cars_Var_Pop_Fields>;
  var_samp?: Maybe<Cars_Var_Samp_Fields>;
  variance?: Maybe<Cars_Variance_Fields>;
};


/** aggregate fields of "cars" */
export type Cars_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cars_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cars" */
export type Cars_Aggregate_Order_By = {
  avg?: InputMaybe<Cars_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cars_Max_Order_By>;
  min?: InputMaybe<Cars_Min_Order_By>;
  stddev?: InputMaybe<Cars_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Cars_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Cars_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Cars_Sum_Order_By>;
  var_pop?: InputMaybe<Cars_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Cars_Var_Samp_Order_By>;
  variance?: InputMaybe<Cars_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cars" */
export type Cars_Arr_Rel_Insert_Input = {
  data: Array<Cars_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cars_On_Conflict>;
};

/** aggregate avg on columns */
export type Cars_Avg_Fields = {
  __typename?: 'cars_avg_fields';
  brand_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
  odometer?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "cars" */
export type Cars_Avg_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
  odometer?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cars". All fields are combined with a logical 'AND'. */
export type Cars_Bool_Exp = {
  _and?: InputMaybe<Array<Cars_Bool_Exp>>;
  _not?: InputMaybe<Cars_Bool_Exp>;
  _or?: InputMaybe<Array<Cars_Bool_Exp>>;
  batch?: InputMaybe<Uuid_Comparison_Exp>;
  brand_id?: InputMaybe<Int_Comparison_Exp>;
  city?: InputMaybe<Cities_Bool_Exp>;
  city_id?: InputMaybe<Int_Comparison_Exp>;
  color?: InputMaybe<Colors_Bool_Exp>;
  color_id?: InputMaybe<Int_Comparison_Exp>;
  condition?: InputMaybe<Bpchar_Comparison_Exp>;
  create_date?: InputMaybe<Date_Comparison_Exp>;
  damage_type?: InputMaybe<String_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  model?: InputMaybe<Models_Bool_Exp>;
  model_id?: InputMaybe<Int_Comparison_Exp>;
  odometer?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Money_Comparison_Exp>;
  sale_date?: InputMaybe<Date_Comparison_Exp>;
  state_id?: InputMaybe<Int_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  update_date?: InputMaybe<Date_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
  vin?: InputMaybe<String_Comparison_Exp>;
  year?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "cars" */
export enum Cars_Constraint {
  /** unique or primary key constraint on columns "batch" */
  CarsBatchKey = 'cars_batch_key',
  /** unique or primary key constraint on columns "id" */
  CarsPkey = 'cars_pkey',
  /** unique or primary key constraint on columns "uuid" */
  CarsUuidKey = 'cars_uuid_key',
  /** unique or primary key constraint on columns "vin" */
  CarsVinKey = 'cars_vin_key'
}

/** input type for incrementing numeric columns in table "cars" */
export type Cars_Inc_Input = {
  brand_id?: InputMaybe<Scalars['Int']>;
  city_id?: InputMaybe<Scalars['Int']>;
  color_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  model_id?: InputMaybe<Scalars['Int']>;
  odometer?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
  state_id?: InputMaybe<Scalars['Int']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "cars" */
export type Cars_Insert_Input = {
  batch?: InputMaybe<Scalars['uuid']>;
  brand_id?: InputMaybe<Scalars['Int']>;
  city?: InputMaybe<Cities_Obj_Rel_Insert_Input>;
  city_id?: InputMaybe<Scalars['Int']>;
  color?: InputMaybe<Colors_Obj_Rel_Insert_Input>;
  color_id?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<Scalars['bpchar']>;
  create_date?: InputMaybe<Scalars['date']>;
  damage_type?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  model?: InputMaybe<Models_Obj_Rel_Insert_Input>;
  model_id?: InputMaybe<Scalars['Int']>;
  odometer?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
  sale_date?: InputMaybe<Scalars['date']>;
  state_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  update_date?: InputMaybe<Scalars['date']>;
  uuid?: InputMaybe<Scalars['uuid']>;
  vin?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Cars_Max_Fields = {
  __typename?: 'cars_max_fields';
  batch?: Maybe<Scalars['uuid']>;
  brand_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  color_id?: Maybe<Scalars['Int']>;
  condition?: Maybe<Scalars['bpchar']>;
  create_date?: Maybe<Scalars['date']>;
  damage_type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  model_id?: Maybe<Scalars['Int']>;
  odometer?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
  sale_date?: Maybe<Scalars['date']>;
  state_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  update_date?: Maybe<Scalars['date']>;
  uuid?: Maybe<Scalars['uuid']>;
  vin?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "cars" */
export type Cars_Max_Order_By = {
  batch?: InputMaybe<Order_By>;
  brand_id?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  color_id?: InputMaybe<Order_By>;
  condition?: InputMaybe<Order_By>;
  create_date?: InputMaybe<Order_By>;
  damage_type?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
  odometer?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  sale_date?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  update_date?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
  vin?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cars_Min_Fields = {
  __typename?: 'cars_min_fields';
  batch?: Maybe<Scalars['uuid']>;
  brand_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  color_id?: Maybe<Scalars['Int']>;
  condition?: Maybe<Scalars['bpchar']>;
  create_date?: Maybe<Scalars['date']>;
  damage_type?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  model_id?: Maybe<Scalars['Int']>;
  odometer?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
  sale_date?: Maybe<Scalars['date']>;
  state_id?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  update_date?: Maybe<Scalars['date']>;
  uuid?: Maybe<Scalars['uuid']>;
  vin?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "cars" */
export type Cars_Min_Order_By = {
  batch?: InputMaybe<Order_By>;
  brand_id?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  color_id?: InputMaybe<Order_By>;
  condition?: InputMaybe<Order_By>;
  create_date?: InputMaybe<Order_By>;
  damage_type?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
  odometer?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  sale_date?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  update_date?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
  vin?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cars" */
export type Cars_Mutation_Response = {
  __typename?: 'cars_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cars>;
};

/** on_conflict condition type for table "cars" */
export type Cars_On_Conflict = {
  constraint: Cars_Constraint;
  update_columns?: Array<Cars_Update_Column>;
  where?: InputMaybe<Cars_Bool_Exp>;
};

/** Ordering options when selecting data from "cars". */
export type Cars_Order_By = {
  batch?: InputMaybe<Order_By>;
  brand_id?: InputMaybe<Order_By>;
  city?: InputMaybe<Cities_Order_By>;
  city_id?: InputMaybe<Order_By>;
  color?: InputMaybe<Colors_Order_By>;
  color_id?: InputMaybe<Order_By>;
  condition?: InputMaybe<Order_By>;
  create_date?: InputMaybe<Order_By>;
  damage_type?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model?: InputMaybe<Models_Order_By>;
  model_id?: InputMaybe<Order_By>;
  odometer?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  sale_date?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  update_date?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
  vin?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cars */
export type Cars_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "cars" */
export enum Cars_Select_Column {
  /** column name */
  Batch = 'batch',
  /** column name */
  BrandId = 'brand_id',
  /** column name */
  CityId = 'city_id',
  /** column name */
  ColorId = 'color_id',
  /** column name */
  Condition = 'condition',
  /** column name */
  CreateDate = 'create_date',
  /** column name */
  DamageType = 'damage_type',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  Odometer = 'odometer',
  /** column name */
  Price = 'price',
  /** column name */
  SaleDate = 'sale_date',
  /** column name */
  StateId = 'state_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdateDate = 'update_date',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  Vin = 'vin',
  /** column name */
  Year = 'year'
}

/** input type for updating data in table "cars" */
export type Cars_Set_Input = {
  batch?: InputMaybe<Scalars['uuid']>;
  brand_id?: InputMaybe<Scalars['Int']>;
  city_id?: InputMaybe<Scalars['Int']>;
  color_id?: InputMaybe<Scalars['Int']>;
  condition?: InputMaybe<Scalars['bpchar']>;
  create_date?: InputMaybe<Scalars['date']>;
  damage_type?: InputMaybe<Scalars['String']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  model_id?: InputMaybe<Scalars['Int']>;
  odometer?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['money']>;
  sale_date?: InputMaybe<Scalars['date']>;
  state_id?: InputMaybe<Scalars['Int']>;
  title?: InputMaybe<Scalars['String']>;
  update_date?: InputMaybe<Scalars['date']>;
  uuid?: InputMaybe<Scalars['uuid']>;
  vin?: InputMaybe<Scalars['String']>;
  year?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Cars_Stddev_Fields = {
  __typename?: 'cars_stddev_fields';
  brand_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
  odometer?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "cars" */
export type Cars_Stddev_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
  odometer?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cars_Stddev_Pop_Fields = {
  __typename?: 'cars_stddev_pop_fields';
  brand_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
  odometer?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "cars" */
export type Cars_Stddev_Pop_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
  odometer?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cars_Stddev_Samp_Fields = {
  __typename?: 'cars_stddev_samp_fields';
  brand_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
  odometer?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "cars" */
export type Cars_Stddev_Samp_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
  odometer?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Cars_Sum_Fields = {
  __typename?: 'cars_sum_fields';
  brand_id?: Maybe<Scalars['Int']>;
  city_id?: Maybe<Scalars['Int']>;
  color_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  model_id?: Maybe<Scalars['Int']>;
  odometer?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['money']>;
  state_id?: Maybe<Scalars['Int']>;
  year?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "cars" */
export type Cars_Sum_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
  odometer?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** update columns of table "cars" */
export enum Cars_Update_Column {
  /** column name */
  Batch = 'batch',
  /** column name */
  BrandId = 'brand_id',
  /** column name */
  CityId = 'city_id',
  /** column name */
  ColorId = 'color_id',
  /** column name */
  Condition = 'condition',
  /** column name */
  CreateDate = 'create_date',
  /** column name */
  DamageType = 'damage_type',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  Odometer = 'odometer',
  /** column name */
  Price = 'price',
  /** column name */
  SaleDate = 'sale_date',
  /** column name */
  StateId = 'state_id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdateDate = 'update_date',
  /** column name */
  Uuid = 'uuid',
  /** column name */
  Vin = 'vin',
  /** column name */
  Year = 'year'
}

export type Cars_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cars_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cars_Set_Input>;
  where: Cars_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cars_Var_Pop_Fields = {
  __typename?: 'cars_var_pop_fields';
  brand_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
  odometer?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "cars" */
export type Cars_Var_Pop_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
  odometer?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cars_Var_Samp_Fields = {
  __typename?: 'cars_var_samp_fields';
  brand_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
  odometer?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "cars" */
export type Cars_Var_Samp_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
  odometer?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Cars_Variance_Fields = {
  __typename?: 'cars_variance_fields';
  brand_id?: Maybe<Scalars['Float']>;
  city_id?: Maybe<Scalars['Float']>;
  color_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
  odometer?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  year?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "cars" */
export type Cars_Variance_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  city_id?: InputMaybe<Order_By>;
  color_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
  odometer?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  year?: InputMaybe<Order_By>;
};

/** columns and relationships of "cities" */
export type Cities = {
  __typename?: 'cities';
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  state: States;
  state_id: Scalars['Int'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "cities" */
export type Cities_Aggregate = {
  __typename?: 'cities_aggregate';
  aggregate?: Maybe<Cities_Aggregate_Fields>;
  nodes: Array<Cities>;
};

/** aggregate fields of "cities" */
export type Cities_Aggregate_Fields = {
  __typename?: 'cities_aggregate_fields';
  avg?: Maybe<Cities_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Cities_Max_Fields>;
  min?: Maybe<Cities_Min_Fields>;
  stddev?: Maybe<Cities_Stddev_Fields>;
  stddev_pop?: Maybe<Cities_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Cities_Stddev_Samp_Fields>;
  sum?: Maybe<Cities_Sum_Fields>;
  var_pop?: Maybe<Cities_Var_Pop_Fields>;
  var_samp?: Maybe<Cities_Var_Samp_Fields>;
  variance?: Maybe<Cities_Variance_Fields>;
};


/** aggregate fields of "cities" */
export type Cities_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Cities_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "cities" */
export type Cities_Aggregate_Order_By = {
  avg?: InputMaybe<Cities_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Cities_Max_Order_By>;
  min?: InputMaybe<Cities_Min_Order_By>;
  stddev?: InputMaybe<Cities_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Cities_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Cities_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Cities_Sum_Order_By>;
  var_pop?: InputMaybe<Cities_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Cities_Var_Samp_Order_By>;
  variance?: InputMaybe<Cities_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "cities" */
export type Cities_Arr_Rel_Insert_Input = {
  data: Array<Cities_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Cities_On_Conflict>;
};

/** aggregate avg on columns */
export type Cities_Avg_Fields = {
  __typename?: 'cities_avg_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "cities" */
export type Cities_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "cities". All fields are combined with a logical 'AND'. */
export type Cities_Bool_Exp = {
  _and?: InputMaybe<Array<Cities_Bool_Exp>>;
  _not?: InputMaybe<Cities_Bool_Exp>;
  _or?: InputMaybe<Array<Cities_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  state?: InputMaybe<States_Bool_Exp>;
  state_id?: InputMaybe<Int_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "cities" */
export enum Cities_Constraint {
  /** unique or primary key constraint on columns "id" */
  CitiesPkey = 'cities_pkey'
}

/** input type for incrementing numeric columns in table "cities" */
export type Cities_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  state_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "cities" */
export type Cities_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<States_Obj_Rel_Insert_Input>;
  state_id?: InputMaybe<Scalars['Int']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Cities_Max_Fields = {
  __typename?: 'cities_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "cities" */
export type Cities_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Cities_Min_Fields = {
  __typename?: 'cities_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "cities" */
export type Cities_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "cities" */
export type Cities_Mutation_Response = {
  __typename?: 'cities_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Cities>;
};

/** input type for inserting object relation for remote table "cities" */
export type Cities_Obj_Rel_Insert_Input = {
  data: Cities_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Cities_On_Conflict>;
};

/** on_conflict condition type for table "cities" */
export type Cities_On_Conflict = {
  constraint: Cities_Constraint;
  update_columns?: Array<Cities_Update_Column>;
  where?: InputMaybe<Cities_Bool_Exp>;
};

/** Ordering options when selecting data from "cities". */
export type Cities_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  state?: InputMaybe<States_Order_By>;
  state_id?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: cities */
export type Cities_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "cities" */
export enum Cities_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StateId = 'state_id',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "cities" */
export type Cities_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  state_id?: InputMaybe<Scalars['Int']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Cities_Stddev_Fields = {
  __typename?: 'cities_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "cities" */
export type Cities_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Cities_Stddev_Pop_Fields = {
  __typename?: 'cities_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "cities" */
export type Cities_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Cities_Stddev_Samp_Fields = {
  __typename?: 'cities_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "cities" */
export type Cities_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Cities_Sum_Fields = {
  __typename?: 'cities_sum_fields';
  id?: Maybe<Scalars['Int']>;
  state_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "cities" */
export type Cities_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
};

/** update columns of table "cities" */
export enum Cities_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StateId = 'state_id',
  /** column name */
  Uuid = 'uuid'
}

export type Cities_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Cities_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Cities_Set_Input>;
  where: Cities_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Cities_Var_Pop_Fields = {
  __typename?: 'cities_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "cities" */
export type Cities_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Cities_Var_Samp_Fields = {
  __typename?: 'cities_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "cities" */
export type Cities_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Cities_Variance_Fields = {
  __typename?: 'cities_variance_fields';
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "cities" */
export type Cities_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "colors" */
export type Colors = {
  __typename?: 'colors';
  id: Scalars['Int'];
  name: Scalars['String'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "colors" */
export type Colors_Aggregate = {
  __typename?: 'colors_aggregate';
  aggregate?: Maybe<Colors_Aggregate_Fields>;
  nodes: Array<Colors>;
};

/** aggregate fields of "colors" */
export type Colors_Aggregate_Fields = {
  __typename?: 'colors_aggregate_fields';
  avg?: Maybe<Colors_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Colors_Max_Fields>;
  min?: Maybe<Colors_Min_Fields>;
  stddev?: Maybe<Colors_Stddev_Fields>;
  stddev_pop?: Maybe<Colors_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Colors_Stddev_Samp_Fields>;
  sum?: Maybe<Colors_Sum_Fields>;
  var_pop?: Maybe<Colors_Var_Pop_Fields>;
  var_samp?: Maybe<Colors_Var_Samp_Fields>;
  variance?: Maybe<Colors_Variance_Fields>;
};


/** aggregate fields of "colors" */
export type Colors_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Colors_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Colors_Avg_Fields = {
  __typename?: 'colors_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "colors". All fields are combined with a logical 'AND'. */
export type Colors_Bool_Exp = {
  _and?: InputMaybe<Array<Colors_Bool_Exp>>;
  _not?: InputMaybe<Colors_Bool_Exp>;
  _or?: InputMaybe<Array<Colors_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "colors" */
export enum Colors_Constraint {
  /** unique or primary key constraint on columns "name" */
  ColorsNameKey = 'colors_name_key',
  /** unique or primary key constraint on columns "id" */
  ColorsPkey = 'colors_pkey',
  /** unique or primary key constraint on columns "uuid" */
  ColorsUuidKey = 'colors_uuid_key'
}

/** input type for incrementing numeric columns in table "colors" */
export type Colors_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "colors" */
export type Colors_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Colors_Max_Fields = {
  __typename?: 'colors_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Colors_Min_Fields = {
  __typename?: 'colors_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "colors" */
export type Colors_Mutation_Response = {
  __typename?: 'colors_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Colors>;
};

/** input type for inserting object relation for remote table "colors" */
export type Colors_Obj_Rel_Insert_Input = {
  data: Colors_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Colors_On_Conflict>;
};

/** on_conflict condition type for table "colors" */
export type Colors_On_Conflict = {
  constraint: Colors_Constraint;
  update_columns?: Array<Colors_Update_Column>;
  where?: InputMaybe<Colors_Bool_Exp>;
};

/** Ordering options when selecting data from "colors". */
export type Colors_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: colors */
export type Colors_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "colors" */
export enum Colors_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "colors" */
export type Colors_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Colors_Stddev_Fields = {
  __typename?: 'colors_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Colors_Stddev_Pop_Fields = {
  __typename?: 'colors_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Colors_Stddev_Samp_Fields = {
  __typename?: 'colors_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Colors_Sum_Fields = {
  __typename?: 'colors_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "colors" */
export enum Colors_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

export type Colors_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Colors_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Colors_Set_Input>;
  where: Colors_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Colors_Var_Pop_Fields = {
  __typename?: 'colors_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Colors_Var_Samp_Fields = {
  __typename?: 'colors_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Colors_Variance_Fields = {
  __typename?: 'colors_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "models" */
export type Models = {
  __typename?: 'models';
  /** An object relationship */
  brand: Brands;
  brand_id: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "models" */
export type Models_Aggregate = {
  __typename?: 'models_aggregate';
  aggregate?: Maybe<Models_Aggregate_Fields>;
  nodes: Array<Models>;
};

/** aggregate fields of "models" */
export type Models_Aggregate_Fields = {
  __typename?: 'models_aggregate_fields';
  avg?: Maybe<Models_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Models_Max_Fields>;
  min?: Maybe<Models_Min_Fields>;
  stddev?: Maybe<Models_Stddev_Fields>;
  stddev_pop?: Maybe<Models_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Models_Stddev_Samp_Fields>;
  sum?: Maybe<Models_Sum_Fields>;
  var_pop?: Maybe<Models_Var_Pop_Fields>;
  var_samp?: Maybe<Models_Var_Samp_Fields>;
  variance?: Maybe<Models_Variance_Fields>;
};


/** aggregate fields of "models" */
export type Models_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Models_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "models" */
export type Models_Aggregate_Order_By = {
  avg?: InputMaybe<Models_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Models_Max_Order_By>;
  min?: InputMaybe<Models_Min_Order_By>;
  stddev?: InputMaybe<Models_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Models_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Models_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Models_Sum_Order_By>;
  var_pop?: InputMaybe<Models_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Models_Var_Samp_Order_By>;
  variance?: InputMaybe<Models_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "models" */
export type Models_Arr_Rel_Insert_Input = {
  data: Array<Models_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Models_On_Conflict>;
};

/** aggregate avg on columns */
export type Models_Avg_Fields = {
  __typename?: 'models_avg_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "models" */
export type Models_Avg_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "models". All fields are combined with a logical 'AND'. */
export type Models_Bool_Exp = {
  _and?: InputMaybe<Array<Models_Bool_Exp>>;
  _not?: InputMaybe<Models_Bool_Exp>;
  _or?: InputMaybe<Array<Models_Bool_Exp>>;
  brand?: InputMaybe<Brands_Bool_Exp>;
  brand_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "models" */
export enum Models_Constraint {
  /** unique or primary key constraint on columns "id" */
  ModelsPkey = 'models_pkey',
  /** unique or primary key constraint on columns "uuid" */
  ModelsUuidKey = 'models_uuid_key'
}

/** input type for incrementing numeric columns in table "models" */
export type Models_Inc_Input = {
  brand_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "models" */
export type Models_Insert_Input = {
  brand?: InputMaybe<Brands_Obj_Rel_Insert_Input>;
  brand_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Models_Max_Fields = {
  __typename?: 'models_max_fields';
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "models" */
export type Models_Max_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Models_Min_Fields = {
  __typename?: 'models_min_fields';
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "models" */
export type Models_Min_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "models" */
export type Models_Mutation_Response = {
  __typename?: 'models_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Models>;
};

/** input type for inserting object relation for remote table "models" */
export type Models_Obj_Rel_Insert_Input = {
  data: Models_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Models_On_Conflict>;
};

/** on_conflict condition type for table "models" */
export type Models_On_Conflict = {
  constraint: Models_Constraint;
  update_columns?: Array<Models_Update_Column>;
  where?: InputMaybe<Models_Bool_Exp>;
};

/** Ordering options when selecting data from "models". */
export type Models_Order_By = {
  brand?: InputMaybe<Brands_Order_By>;
  brand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: models */
export type Models_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "models" */
export enum Models_Select_Column {
  /** column name */
  BrandId = 'brand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "models" */
export type Models_Set_Input = {
  brand_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Models_Stddev_Fields = {
  __typename?: 'models_stddev_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "models" */
export type Models_Stddev_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Models_Stddev_Pop_Fields = {
  __typename?: 'models_stddev_pop_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "models" */
export type Models_Stddev_Pop_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Models_Stddev_Samp_Fields = {
  __typename?: 'models_stddev_samp_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "models" */
export type Models_Stddev_Samp_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Models_Sum_Fields = {
  __typename?: 'models_sum_fields';
  brand_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "models" */
export type Models_Sum_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "models" */
export enum Models_Update_Column {
  /** column name */
  BrandId = 'brand_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

export type Models_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Models_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Models_Set_Input>;
  where: Models_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Models_Var_Pop_Fields = {
  __typename?: 'models_var_pop_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "models" */
export type Models_Var_Pop_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Models_Var_Samp_Fields = {
  __typename?: 'models_var_samp_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "models" */
export type Models_Var_Samp_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Models_Variance_Fields = {
  __typename?: 'models_variance_fields';
  brand_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "models" */
export type Models_Variance_Order_By = {
  brand_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "brands" */
  delete_brands?: Maybe<Brands_Mutation_Response>;
  /** delete single row from the table: "brands" */
  delete_brands_by_pk?: Maybe<Brands>;
  /** delete data from the table: "cars" */
  delete_cars?: Maybe<Cars_Mutation_Response>;
  /** delete single row from the table: "cars" */
  delete_cars_by_pk?: Maybe<Cars>;
  /** delete data from the table: "cities" */
  delete_cities?: Maybe<Cities_Mutation_Response>;
  /** delete single row from the table: "cities" */
  delete_cities_by_pk?: Maybe<Cities>;
  /** delete data from the table: "colors" */
  delete_colors?: Maybe<Colors_Mutation_Response>;
  /** delete single row from the table: "colors" */
  delete_colors_by_pk?: Maybe<Colors>;
  /** delete data from the table: "models" */
  delete_models?: Maybe<Models_Mutation_Response>;
  /** delete single row from the table: "models" */
  delete_models_by_pk?: Maybe<Models>;
  /** delete data from the table: "states" */
  delete_states?: Maybe<States_Mutation_Response>;
  /** delete single row from the table: "states" */
  delete_states_by_pk?: Maybe<States>;
  /** delete data from the table: "user_cars" */
  delete_user_cars?: Maybe<User_Cars_Mutation_Response>;
  /** delete single row from the table: "user_cars" */
  delete_user_cars_by_pk?: Maybe<User_Cars>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "brands" */
  insert_brands?: Maybe<Brands_Mutation_Response>;
  /** insert a single row into the table: "brands" */
  insert_brands_one?: Maybe<Brands>;
  /** insert data into the table: "cars" */
  insert_cars?: Maybe<Cars_Mutation_Response>;
  /** insert a single row into the table: "cars" */
  insert_cars_one?: Maybe<Cars>;
  /** insert data into the table: "cities" */
  insert_cities?: Maybe<Cities_Mutation_Response>;
  /** insert a single row into the table: "cities" */
  insert_cities_one?: Maybe<Cities>;
  /** insert data into the table: "colors" */
  insert_colors?: Maybe<Colors_Mutation_Response>;
  /** insert a single row into the table: "colors" */
  insert_colors_one?: Maybe<Colors>;
  /** insert data into the table: "models" */
  insert_models?: Maybe<Models_Mutation_Response>;
  /** insert a single row into the table: "models" */
  insert_models_one?: Maybe<Models>;
  /** insert data into the table: "states" */
  insert_states?: Maybe<States_Mutation_Response>;
  /** insert a single row into the table: "states" */
  insert_states_one?: Maybe<States>;
  /** insert data into the table: "user_cars" */
  insert_user_cars?: Maybe<User_Cars_Mutation_Response>;
  /** insert a single row into the table: "user_cars" */
  insert_user_cars_one?: Maybe<User_Cars>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "brands" */
  update_brands?: Maybe<Brands_Mutation_Response>;
  /** update single row of the table: "brands" */
  update_brands_by_pk?: Maybe<Brands>;
  /** update multiples rows of table: "brands" */
  update_brands_many?: Maybe<Array<Maybe<Brands_Mutation_Response>>>;
  /** update data of the table: "cars" */
  update_cars?: Maybe<Cars_Mutation_Response>;
  /** update single row of the table: "cars" */
  update_cars_by_pk?: Maybe<Cars>;
  /** update multiples rows of table: "cars" */
  update_cars_many?: Maybe<Array<Maybe<Cars_Mutation_Response>>>;
  /** update data of the table: "cities" */
  update_cities?: Maybe<Cities_Mutation_Response>;
  /** update single row of the table: "cities" */
  update_cities_by_pk?: Maybe<Cities>;
  /** update multiples rows of table: "cities" */
  update_cities_many?: Maybe<Array<Maybe<Cities_Mutation_Response>>>;
  /** update data of the table: "colors" */
  update_colors?: Maybe<Colors_Mutation_Response>;
  /** update single row of the table: "colors" */
  update_colors_by_pk?: Maybe<Colors>;
  /** update multiples rows of table: "colors" */
  update_colors_many?: Maybe<Array<Maybe<Colors_Mutation_Response>>>;
  /** update data of the table: "models" */
  update_models?: Maybe<Models_Mutation_Response>;
  /** update single row of the table: "models" */
  update_models_by_pk?: Maybe<Models>;
  /** update multiples rows of table: "models" */
  update_models_many?: Maybe<Array<Maybe<Models_Mutation_Response>>>;
  /** update data of the table: "states" */
  update_states?: Maybe<States_Mutation_Response>;
  /** update single row of the table: "states" */
  update_states_by_pk?: Maybe<States>;
  /** update multiples rows of table: "states" */
  update_states_many?: Maybe<Array<Maybe<States_Mutation_Response>>>;
  /** update data of the table: "user_cars" */
  update_user_cars?: Maybe<User_Cars_Mutation_Response>;
  /** update single row of the table: "user_cars" */
  update_user_cars_by_pk?: Maybe<User_Cars>;
  /** update multiples rows of table: "user_cars" */
  update_user_cars_many?: Maybe<Array<Maybe<User_Cars_Mutation_Response>>>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update multiples rows of table: "users" */
  update_users_many?: Maybe<Array<Maybe<Users_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_BrandsArgs = {
  where: Brands_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Brands_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CarsArgs = {
  where: Cars_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cars_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CitiesArgs = {
  where: Cities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Cities_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ColorsArgs = {
  where: Colors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Colors_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_ModelsArgs = {
  where: Models_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Models_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_StatesArgs = {
  where: States_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_States_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_User_CarsArgs = {
  where: User_Cars_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Cars_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_BrandsArgs = {
  objects: Array<Brands_Insert_Input>;
  on_conflict?: InputMaybe<Brands_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Brands_OneArgs = {
  object: Brands_Insert_Input;
  on_conflict?: InputMaybe<Brands_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CarsArgs = {
  objects: Array<Cars_Insert_Input>;
  on_conflict?: InputMaybe<Cars_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cars_OneArgs = {
  object: Cars_Insert_Input;
  on_conflict?: InputMaybe<Cars_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CitiesArgs = {
  objects: Array<Cities_Insert_Input>;
  on_conflict?: InputMaybe<Cities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Cities_OneArgs = {
  object: Cities_Insert_Input;
  on_conflict?: InputMaybe<Cities_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ColorsArgs = {
  objects: Array<Colors_Insert_Input>;
  on_conflict?: InputMaybe<Colors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Colors_OneArgs = {
  object: Colors_Insert_Input;
  on_conflict?: InputMaybe<Colors_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ModelsArgs = {
  objects: Array<Models_Insert_Input>;
  on_conflict?: InputMaybe<Models_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Models_OneArgs = {
  object: Models_Insert_Input;
  on_conflict?: InputMaybe<Models_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_StatesArgs = {
  objects: Array<States_Insert_Input>;
  on_conflict?: InputMaybe<States_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_States_OneArgs = {
  object: States_Insert_Input;
  on_conflict?: InputMaybe<States_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_CarsArgs = {
  objects: Array<User_Cars_Insert_Input>;
  on_conflict?: InputMaybe<User_Cars_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Cars_OneArgs = {
  object: User_Cars_Insert_Input;
  on_conflict?: InputMaybe<User_Cars_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BrandsArgs = {
  _inc?: InputMaybe<Brands_Inc_Input>;
  _set?: InputMaybe<Brands_Set_Input>;
  where: Brands_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Brands_By_PkArgs = {
  _inc?: InputMaybe<Brands_Inc_Input>;
  _set?: InputMaybe<Brands_Set_Input>;
  pk_columns: Brands_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Brands_ManyArgs = {
  updates: Array<Brands_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CarsArgs = {
  _inc?: InputMaybe<Cars_Inc_Input>;
  _set?: InputMaybe<Cars_Set_Input>;
  where: Cars_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_By_PkArgs = {
  _inc?: InputMaybe<Cars_Inc_Input>;
  _set?: InputMaybe<Cars_Set_Input>;
  pk_columns: Cars_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cars_ManyArgs = {
  updates: Array<Cars_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CitiesArgs = {
  _inc?: InputMaybe<Cities_Inc_Input>;
  _set?: InputMaybe<Cities_Set_Input>;
  where: Cities_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Cities_By_PkArgs = {
  _inc?: InputMaybe<Cities_Inc_Input>;
  _set?: InputMaybe<Cities_Set_Input>;
  pk_columns: Cities_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Cities_ManyArgs = {
  updates: Array<Cities_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ColorsArgs = {
  _inc?: InputMaybe<Colors_Inc_Input>;
  _set?: InputMaybe<Colors_Set_Input>;
  where: Colors_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Colors_By_PkArgs = {
  _inc?: InputMaybe<Colors_Inc_Input>;
  _set?: InputMaybe<Colors_Set_Input>;
  pk_columns: Colors_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Colors_ManyArgs = {
  updates: Array<Colors_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ModelsArgs = {
  _inc?: InputMaybe<Models_Inc_Input>;
  _set?: InputMaybe<Models_Set_Input>;
  where: Models_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Models_By_PkArgs = {
  _inc?: InputMaybe<Models_Inc_Input>;
  _set?: InputMaybe<Models_Set_Input>;
  pk_columns: Models_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Models_ManyArgs = {
  updates: Array<Models_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_StatesArgs = {
  _inc?: InputMaybe<States_Inc_Input>;
  _set?: InputMaybe<States_Set_Input>;
  where: States_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_States_By_PkArgs = {
  _inc?: InputMaybe<States_Inc_Input>;
  _set?: InputMaybe<States_Set_Input>;
  pk_columns: States_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_States_ManyArgs = {
  updates: Array<States_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_User_CarsArgs = {
  _inc?: InputMaybe<User_Cars_Inc_Input>;
  _set?: InputMaybe<User_Cars_Set_Input>;
  where: User_Cars_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Cars_By_PkArgs = {
  _inc?: InputMaybe<User_Cars_Inc_Input>;
  _set?: InputMaybe<User_Cars_Set_Input>;
  pk_columns: User_Cars_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Cars_ManyArgs = {
  updates: Array<User_Cars_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: InputMaybe<Users_Inc_Input>;
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Users_ManyArgs = {
  updates: Array<Users_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "brands" */
  brands: Array<Brands>;
  /** fetch aggregated fields from the table: "brands" */
  brands_aggregate: Brands_Aggregate;
  /** fetch data from the table: "brands" using primary key columns */
  brands_by_pk?: Maybe<Brands>;
  /** An array relationship */
  cars: Array<Cars>;
  /** An aggregate relationship */
  cars_aggregate: Cars_Aggregate;
  /** fetch data from the table: "cars" using primary key columns */
  cars_by_pk?: Maybe<Cars>;
  /** An array relationship */
  cities: Array<Cities>;
  /** An aggregate relationship */
  cities_aggregate: Cities_Aggregate;
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>;
  /** fetch data from the table: "colors" */
  colors: Array<Colors>;
  /** fetch aggregated fields from the table: "colors" */
  colors_aggregate: Colors_Aggregate;
  /** fetch data from the table: "colors" using primary key columns */
  colors_by_pk?: Maybe<Colors>;
  /** An array relationship */
  models: Array<Models>;
  /** An aggregate relationship */
  models_aggregate: Models_Aggregate;
  /** fetch data from the table: "models" using primary key columns */
  models_by_pk?: Maybe<Models>;
  /** fetch data from the table: "states" */
  states: Array<States>;
  /** fetch aggregated fields from the table: "states" */
  states_aggregate: States_Aggregate;
  /** fetch data from the table: "states" using primary key columns */
  states_by_pk?: Maybe<States>;
  /** fetch data from the table: "user_cars" */
  user_cars: Array<User_Cars>;
  /** fetch aggregated fields from the table: "user_cars" */
  user_cars_aggregate: User_Cars_Aggregate;
  /** fetch data from the table: "user_cars" using primary key columns */
  user_cars_by_pk?: Maybe<User_Cars>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootBrandsArgs = {
  distinct_on?: InputMaybe<Array<Brands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brands_Order_By>>;
  where?: InputMaybe<Brands_Bool_Exp>;
};


export type Query_RootBrands_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Brands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brands_Order_By>>;
  where?: InputMaybe<Brands_Bool_Exp>;
};


export type Query_RootBrands_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCarsArgs = {
  distinct_on?: InputMaybe<Array<Cars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Order_By>>;
  where?: InputMaybe<Cars_Bool_Exp>;
};


export type Query_RootCars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Order_By>>;
  where?: InputMaybe<Cars_Bool_Exp>;
};


export type Query_RootCars_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCitiesArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Query_RootCities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Query_RootCities_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootColorsArgs = {
  distinct_on?: InputMaybe<Array<Colors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Colors_Order_By>>;
  where?: InputMaybe<Colors_Bool_Exp>;
};


export type Query_RootColors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Colors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Colors_Order_By>>;
  where?: InputMaybe<Colors_Bool_Exp>;
};


export type Query_RootColors_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootModelsArgs = {
  distinct_on?: InputMaybe<Array<Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Models_Order_By>>;
  where?: InputMaybe<Models_Bool_Exp>;
};


export type Query_RootModels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Models_Order_By>>;
  where?: InputMaybe<Models_Bool_Exp>;
};


export type Query_RootModels_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootStatesArgs = {
  distinct_on?: InputMaybe<Array<States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<States_Order_By>>;
  where?: InputMaybe<States_Bool_Exp>;
};


export type Query_RootStates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<States_Order_By>>;
  where?: InputMaybe<States_Bool_Exp>;
};


export type Query_RootStates_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUser_CarsArgs = {
  distinct_on?: InputMaybe<Array<User_Cars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Cars_Order_By>>;
  where?: InputMaybe<User_Cars_Bool_Exp>;
};


export type Query_RootUser_Cars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Cars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Cars_Order_By>>;
  where?: InputMaybe<User_Cars_Bool_Exp>;
};


export type Query_RootUser_Cars_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "smallint". All fields are combined with logical 'AND'. */
export type Smallint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['smallint']>;
  _gt?: InputMaybe<Scalars['smallint']>;
  _gte?: InputMaybe<Scalars['smallint']>;
  _in?: InputMaybe<Array<Scalars['smallint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['smallint']>;
  _lte?: InputMaybe<Scalars['smallint']>;
  _neq?: InputMaybe<Scalars['smallint']>;
  _nin?: InputMaybe<Array<Scalars['smallint']>>;
};

/** columns and relationships of "states" */
export type States = {
  __typename?: 'states';
  /** An array relationship */
  cities: Array<Cities>;
  /** An aggregate relationship */
  cities_aggregate: Cities_Aggregate;
  id: Scalars['Int'];
  name: Scalars['String'];
  uuid: Scalars['uuid'];
};


/** columns and relationships of "states" */
export type StatesCitiesArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


/** columns and relationships of "states" */
export type StatesCities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};

/** aggregated selection of "states" */
export type States_Aggregate = {
  __typename?: 'states_aggregate';
  aggregate?: Maybe<States_Aggregate_Fields>;
  nodes: Array<States>;
};

/** aggregate fields of "states" */
export type States_Aggregate_Fields = {
  __typename?: 'states_aggregate_fields';
  avg?: Maybe<States_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<States_Max_Fields>;
  min?: Maybe<States_Min_Fields>;
  stddev?: Maybe<States_Stddev_Fields>;
  stddev_pop?: Maybe<States_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<States_Stddev_Samp_Fields>;
  sum?: Maybe<States_Sum_Fields>;
  var_pop?: Maybe<States_Var_Pop_Fields>;
  var_samp?: Maybe<States_Var_Samp_Fields>;
  variance?: Maybe<States_Variance_Fields>;
};


/** aggregate fields of "states" */
export type States_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<States_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type States_Avg_Fields = {
  __typename?: 'states_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "states". All fields are combined with a logical 'AND'. */
export type States_Bool_Exp = {
  _and?: InputMaybe<Array<States_Bool_Exp>>;
  _not?: InputMaybe<States_Bool_Exp>;
  _or?: InputMaybe<Array<States_Bool_Exp>>;
  cities?: InputMaybe<Cities_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "states" */
export enum States_Constraint {
  /** unique or primary key constraint on columns "id" */
  StatesPkey = 'states_pkey',
  /** unique or primary key constraint on columns "uuid" */
  StatesUuidKey = 'states_uuid_key'
}

/** input type for incrementing numeric columns in table "states" */
export type States_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "states" */
export type States_Insert_Input = {
  cities?: InputMaybe<Cities_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type States_Max_Fields = {
  __typename?: 'states_max_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type States_Min_Fields = {
  __typename?: 'states_min_fields';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "states" */
export type States_Mutation_Response = {
  __typename?: 'states_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<States>;
};

/** input type for inserting object relation for remote table "states" */
export type States_Obj_Rel_Insert_Input = {
  data: States_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<States_On_Conflict>;
};

/** on_conflict condition type for table "states" */
export type States_On_Conflict = {
  constraint: States_Constraint;
  update_columns?: Array<States_Update_Column>;
  where?: InputMaybe<States_Bool_Exp>;
};

/** Ordering options when selecting data from "states". */
export type States_Order_By = {
  cities_aggregate?: InputMaybe<Cities_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: states */
export type States_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "states" */
export enum States_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "states" */
export type States_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type States_Stddev_Fields = {
  __typename?: 'states_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type States_Stddev_Pop_Fields = {
  __typename?: 'states_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type States_Stddev_Samp_Fields = {
  __typename?: 'states_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type States_Sum_Fields = {
  __typename?: 'states_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "states" */
export enum States_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Uuid = 'uuid'
}

export type States_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<States_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<States_Set_Input>;
  where: States_Bool_Exp;
};

/** aggregate var_pop on columns */
export type States_Var_Pop_Fields = {
  __typename?: 'states_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type States_Var_Samp_Fields = {
  __typename?: 'states_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type States_Variance_Fields = {
  __typename?: 'states_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "brands" */
  brands: Array<Brands>;
  /** fetch aggregated fields from the table: "brands" */
  brands_aggregate: Brands_Aggregate;
  /** fetch data from the table: "brands" using primary key columns */
  brands_by_pk?: Maybe<Brands>;
  /** An array relationship */
  cars: Array<Cars>;
  /** An aggregate relationship */
  cars_aggregate: Cars_Aggregate;
  /** fetch data from the table: "cars" using primary key columns */
  cars_by_pk?: Maybe<Cars>;
  /** An array relationship */
  cities: Array<Cities>;
  /** An aggregate relationship */
  cities_aggregate: Cities_Aggregate;
  /** fetch data from the table: "cities" using primary key columns */
  cities_by_pk?: Maybe<Cities>;
  /** fetch data from the table: "colors" */
  colors: Array<Colors>;
  /** fetch aggregated fields from the table: "colors" */
  colors_aggregate: Colors_Aggregate;
  /** fetch data from the table: "colors" using primary key columns */
  colors_by_pk?: Maybe<Colors>;
  /** An array relationship */
  models: Array<Models>;
  /** An aggregate relationship */
  models_aggregate: Models_Aggregate;
  /** fetch data from the table: "models" using primary key columns */
  models_by_pk?: Maybe<Models>;
  /** fetch data from the table: "states" */
  states: Array<States>;
  /** fetch aggregated fields from the table: "states" */
  states_aggregate: States_Aggregate;
  /** fetch data from the table: "states" using primary key columns */
  states_by_pk?: Maybe<States>;
  /** fetch data from the table: "user_cars" */
  user_cars: Array<User_Cars>;
  /** fetch aggregated fields from the table: "user_cars" */
  user_cars_aggregate: User_Cars_Aggregate;
  /** fetch data from the table: "user_cars" using primary key columns */
  user_cars_by_pk?: Maybe<User_Cars>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootBrandsArgs = {
  distinct_on?: InputMaybe<Array<Brands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brands_Order_By>>;
  where?: InputMaybe<Brands_Bool_Exp>;
};


export type Subscription_RootBrands_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Brands_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Brands_Order_By>>;
  where?: InputMaybe<Brands_Bool_Exp>;
};


export type Subscription_RootBrands_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCarsArgs = {
  distinct_on?: InputMaybe<Array<Cars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Order_By>>;
  where?: InputMaybe<Cars_Bool_Exp>;
};


export type Subscription_RootCars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cars_Order_By>>;
  where?: InputMaybe<Cars_Bool_Exp>;
};


export type Subscription_RootCars_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCitiesArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Subscription_RootCities_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Cities_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Cities_Order_By>>;
  where?: InputMaybe<Cities_Bool_Exp>;
};


export type Subscription_RootCities_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootColorsArgs = {
  distinct_on?: InputMaybe<Array<Colors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Colors_Order_By>>;
  where?: InputMaybe<Colors_Bool_Exp>;
};


export type Subscription_RootColors_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Colors_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Colors_Order_By>>;
  where?: InputMaybe<Colors_Bool_Exp>;
};


export type Subscription_RootColors_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootModelsArgs = {
  distinct_on?: InputMaybe<Array<Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Models_Order_By>>;
  where?: InputMaybe<Models_Bool_Exp>;
};


export type Subscription_RootModels_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Models_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Models_Order_By>>;
  where?: InputMaybe<Models_Bool_Exp>;
};


export type Subscription_RootModels_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootStatesArgs = {
  distinct_on?: InputMaybe<Array<States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<States_Order_By>>;
  where?: InputMaybe<States_Bool_Exp>;
};


export type Subscription_RootStates_AggregateArgs = {
  distinct_on?: InputMaybe<Array<States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<States_Order_By>>;
  where?: InputMaybe<States_Bool_Exp>;
};


export type Subscription_RootStates_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUser_CarsArgs = {
  distinct_on?: InputMaybe<Array<User_Cars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Cars_Order_By>>;
  where?: InputMaybe<User_Cars_Bool_Exp>;
};


export type Subscription_RootUser_Cars_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Cars_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Cars_Order_By>>;
  where?: InputMaybe<User_Cars_Bool_Exp>;
};


export type Subscription_RootUser_Cars_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "user_cars" */
export type User_Cars = {
  __typename?: 'user_cars';
  car_id: Scalars['Int'];
  id: Scalars['Int'];
  user_id: Scalars['Int'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "user_cars" */
export type User_Cars_Aggregate = {
  __typename?: 'user_cars_aggregate';
  aggregate?: Maybe<User_Cars_Aggregate_Fields>;
  nodes: Array<User_Cars>;
};

/** aggregate fields of "user_cars" */
export type User_Cars_Aggregate_Fields = {
  __typename?: 'user_cars_aggregate_fields';
  avg?: Maybe<User_Cars_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Cars_Max_Fields>;
  min?: Maybe<User_Cars_Min_Fields>;
  stddev?: Maybe<User_Cars_Stddev_Fields>;
  stddev_pop?: Maybe<User_Cars_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Cars_Stddev_Samp_Fields>;
  sum?: Maybe<User_Cars_Sum_Fields>;
  var_pop?: Maybe<User_Cars_Var_Pop_Fields>;
  var_samp?: Maybe<User_Cars_Var_Samp_Fields>;
  variance?: Maybe<User_Cars_Variance_Fields>;
};


/** aggregate fields of "user_cars" */
export type User_Cars_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Cars_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Cars_Avg_Fields = {
  __typename?: 'user_cars_avg_fields';
  car_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user_cars". All fields are combined with a logical 'AND'. */
export type User_Cars_Bool_Exp = {
  _and?: InputMaybe<Array<User_Cars_Bool_Exp>>;
  _not?: InputMaybe<User_Cars_Bool_Exp>;
  _or?: InputMaybe<Array<User_Cars_Bool_Exp>>;
  car_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_cars" */
export enum User_Cars_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserCarsPkey = 'user_cars_pkey',
  /** unique or primary key constraint on columns "uuid" */
  UserCarsUuidKey = 'user_cars_uuid_key'
}

/** input type for incrementing numeric columns in table "user_cars" */
export type User_Cars_Inc_Input = {
  car_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_cars" */
export type User_Cars_Insert_Input = {
  car_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Cars_Max_Fields = {
  __typename?: 'user_cars_max_fields';
  car_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type User_Cars_Min_Fields = {
  __typename?: 'user_cars_min_fields';
  car_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "user_cars" */
export type User_Cars_Mutation_Response = {
  __typename?: 'user_cars_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Cars>;
};

/** on_conflict condition type for table "user_cars" */
export type User_Cars_On_Conflict = {
  constraint: User_Cars_Constraint;
  update_columns?: Array<User_Cars_Update_Column>;
  where?: InputMaybe<User_Cars_Bool_Exp>;
};

/** Ordering options when selecting data from "user_cars". */
export type User_Cars_Order_By = {
  car_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_cars */
export type User_Cars_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user_cars" */
export enum User_Cars_Select_Column {
  /** column name */
  CarId = 'car_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "user_cars" */
export type User_Cars_Set_Input = {
  car_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type User_Cars_Stddev_Fields = {
  __typename?: 'user_cars_stddev_fields';
  car_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Cars_Stddev_Pop_Fields = {
  __typename?: 'user_cars_stddev_pop_fields';
  car_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Cars_Stddev_Samp_Fields = {
  __typename?: 'user_cars_stddev_samp_fields';
  car_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Cars_Sum_Fields = {
  __typename?: 'user_cars_sum_fields';
  car_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user_cars" */
export enum User_Cars_Update_Column {
  /** column name */
  CarId = 'car_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id',
  /** column name */
  Uuid = 'uuid'
}

export type User_Cars_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<User_Cars_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<User_Cars_Set_Input>;
  where: User_Cars_Bool_Exp;
};

/** aggregate var_pop on columns */
export type User_Cars_Var_Pop_Fields = {
  __typename?: 'user_cars_var_pop_fields';
  car_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Cars_Var_Samp_Fields = {
  __typename?: 'user_cars_var_samp_fields';
  car_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Cars_Variance_Fields = {
  __typename?: 'user_cars_variance_fields';
  car_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  uuid: Scalars['uuid'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  uuid?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey',
  /** unique or primary key constraint on columns "uuid" */
  UsersUuidKey = 'users_uuid_key'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  uuid?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  uuid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Uuid = 'uuid'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  uuid?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  Uuid = 'uuid'
}

export type Users_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Users_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type UserQueryVariables = Exact<{
  where?: InputMaybe<Users_Bool_Exp>;
}>;


export type UserQuery = { __typename?: 'query_root', users: Array<{ __typename?: 'users', id: number, first_name: string, last_name: string, email: string, uuid: any }> };

export type CarsQueryVariables = Exact<{ [key: string]: never; }>;


export type CarsQuery = { __typename?: 'query_root', cars: Array<{ __typename?: 'cars', id: number, title?: string | null, year?: number | null, batch: any, odometer?: number | null, price: any, damage_type?: string | null, sale_date: any, condition: any, model: { __typename?: 'models', name: string }, city: { __typename?: 'cities', name: string, state: { __typename?: 'states', name: string } }, color: { __typename?: 'colors', name: string } }> };


export const UserDocument = gql`
    query User($where: users_bool_exp) {
  users(where: $where) {
    id
    first_name
    last_name
    email
    uuid
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const CarsDocument = gql`
    query Cars {
  cars {
    id
    title
    model {
      name
    }
    year
    batch
    odometer
    price
    damage_type
    sale_date
    city {
      name
      state {
        name
      }
    }
    color {
      name
    }
    condition
  }
}
    `;

/**
 * __useCarsQuery__
 *
 * To run a query within a React component, call `useCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCarsQuery({
 *   variables: {
 *   },
 * });
 */
export function useCarsQuery(baseOptions?: Apollo.QueryHookOptions<CarsQuery, CarsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CarsQuery, CarsQueryVariables>(CarsDocument, options);
      }
export function useCarsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CarsQuery, CarsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CarsQuery, CarsQueryVariables>(CarsDocument, options);
        }
export type CarsQueryHookResult = ReturnType<typeof useCarsQuery>;
export type CarsLazyQueryHookResult = ReturnType<typeof useCarsLazyQuery>;
export type CarsQueryResult = Apollo.QueryResult<CarsQuery, CarsQueryVariables>;