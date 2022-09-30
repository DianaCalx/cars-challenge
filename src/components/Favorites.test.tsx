import { MockedResponse } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { GraphQLError } from 'graphql';

import { CarsDocument, FavoritesDocument } from '../generated/graphql';
import { carsDataTest } from '../test/dataTest';
import { renderUserContext } from '../test/testUserContextProvider';
import Favorites from './Favorites';

const mocksCars: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: FavoritesDocument,
      variables: { whereUserCars: { user_id: { _eq: 7 } } },
    },
    result: {
      data: {
        user_cars: [
          {
            id: 1225,
            car_id: 236,
            __typename: 'user_cars',
          },
        ],
      },
    },
  },
  {
    request: {
      query: CarsDocument,
      variables: {
        orderBy: {},
        whereCars: {
          _or: [
            {
              title: {},
            },
            {
              vin: {},
            },
          ],
          id: {
            _in: [236],
          },
        },
      },
    },
    result: {
      data: {
        cars: [carsDataTest[0]],
      },
    },
  },
];

const mocksEmptyData: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: FavoritesDocument,
      variables: { whereUserCars: { user_id: { _eq: 7 } } },
    },
    result: {
      data: {
        user_cars: [],
      },
    },
  },
  {
    request: {
      query: CarsDocument,
      variables: {
        orderBy: {},
        whereCars: {
          _or: [
            {
              title: {},
            },
            {
              vin: {},
            },
          ],
          id: {
            _in: [],
          },
        },
      },
    },
    result: {
      data: {
        cars: [],
      },
    },
  },
];

const mocksError: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: CarsDocument,
      variables: {
        orderBy: {},
        whereCars: {
          _or: [
            {
              title: {},
            },
            {
              vin: {},
            },
          ],
          id: {
            _in: [236],
          },
        },
      },
    },
    result: {
      errors: [new GraphQLError('Error!')],
    },
  },
];

describe('Test in Favorites Component', () => {
  it('Should show the cars', async () => {
    renderUserContext(
      <Favorites favorites={[236]} setFavorites={() => {}} />,
      mocksCars
    );
    expect(await screen.findByText('Rav 4 2017')).toBeInTheDocument();
  });

  it('Should show a Spinner and a message of Empty Data', async () => {
    renderUserContext(
      <Favorites favorites={[]} setFavorites={() => {}} />,
      mocksEmptyData
    );
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(
      await screen.findByText('Favorite cars were not found')
    ).toBeInTheDocument();
  });

  it('Should show an error message', async () => {
    renderUserContext(
      <Favorites favorites={[]} setFavorites={() => {}} />,
      mocksError
    );
    expect(await screen.findByText('There was an error')).toBeInTheDocument();
  });
});
