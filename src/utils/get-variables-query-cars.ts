/* eslint-disable camelcase */
/* eslint-disable unicorn/prefer-logical-operator-over-ternary */
import { validate } from 'uuid';
import { Order_By } from '../generated/graphql';

export const getVariablesQueryCars = (search: URLSearchParams, userId: number | undefined) => {
  const searchParams = Object.fromEntries(search);
  const orderBy = searchParams.sort ? { sale_date: searchParams.sort as Order_By } : {}
  const isBatch = validate(searchParams.search || '');
  const whereCars = isBatch
    ? {
      batch: {
        _eq: searchParams.search ? searchParams.search : undefined
      }
    }
    : {
      _or: [
        {
          title: {
            _iregex: searchParams.search ? searchParams.search : undefined
          }
        },
        {
          vin: {
            _iregex: searchParams.search ? searchParams.search : undefined
          }
        }
      ]
    };

  const whereUserCars = userId
    ? {
      user_id: {
        _eq: userId
      }
    }
    : {
      user_id: {
        _is_null: true
      }
    };

  return {
    orderBy,
    whereCars,
    whereUserCars
  }
}