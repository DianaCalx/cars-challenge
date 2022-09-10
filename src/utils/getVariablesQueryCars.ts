import { validate } from 'uuid';
import { Order_By } from '../generated/graphql';

interface SearchParams {
  [k: string]: string;
}

export const getVariablesQueryCars = (searchParams: SearchParams) => {
  const orderBy = searchParams.sort ? { sale_date: searchParams.sort as Order_By } : {}
  const isBatch = validate(searchParams.search || '');
  const whereCars = isBatch
    ? {
        batch: {
          _eq: searchParams.search ? searchParams.search  : undefined
        }
      }
    : {
        _or: [
          {
            title: {
              _iregex: searchParams.search  ? searchParams.search  : undefined
            }
          },
          {
            vin: {
              _iregex: searchParams.search  ? searchParams.search  : undefined
            }
          }
        ]
      };

  return {
    orderBy,
    whereCars
  }
}