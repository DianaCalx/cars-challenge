/* eslint-disable testing-library/no-wait-for-side-effects */
import { MockedResponse } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { GraphQLError } from 'graphql';

import { CarsDocument, FavoritesDocument } from '../generated/graphql';
import { carsDataTest, favoritesCars } from '../test/dataTest';
import { render } from '../test/testProvider';
import CarsList from './CarsList';

const mocksCars: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: CarsDocument,
      variables: {
        whereCars: {
          _or: [
            {
              title: {},
            },
            {
              vin: {},
            },
          ],
        },
        orderBy: {},
      },
    },
    result: {
      data: {
        cars: carsDataTest,
      },
    },
  },
];

const mocksEmptyData: MockedResponse<Record<string, any>>[] = [
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
        whereCars: {
          _or: [
            {
              title: {},
            },
            {
              vin: {},
            },
          ],
        },
        orderBy: {},
      },
    },
    result: {
      errors: [new GraphQLError('Error!')],
    },
  },
];

const mocksCarsFavorites: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: CarsDocument,
      variables: {
        whereCars: {
          _or: [
            {
              title: {},
            },
            {
              vin: {},
            },
          ],
        },
        orderBy: {},
      },
    },
    result: {
      data: {
        cars: [carsDataTest[0]],
      },
    },
  },
  {
    request: {
      query: FavoritesDocument,
      variables: { whereUserCars: { user_id: { _eq: 7 } } },
    },
    result: {
      data: {
        user_cars: favoritesCars,
      },
    },
  },
];

describe('Test in CarList Component', () => {
  it('Should show the cars', async () => {
    render(<CarsList favorites={[]} setFavorites={() => {}} />, mocksCars);
    expect(
      await screen.findByText(`${carsDataTest[0].title}`)
    ).toBeInTheDocument();
  });

  it('Should show a Spinner and a message of Empty Data', async () => {
    render(<CarsList favorites={[]} setFavorites={() => {}} />, mocksEmptyData);
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(await screen.findByText('There are no cars')).toBeInTheDocument();
  });

  it('Should show an error message', async () => {
    render(<CarsList favorites={[]} setFavorites={() => {}} />, mocksError);
    expect(await screen.findByText('There was an error')).toBeInTheDocument();
  });

  it('Should show a fill star', async () => {
    render(
      <CarsList favorites={[236]} setFavorites={() => {}} />,
      mocksCarsFavorites
    );

    expect(
      await screen.findByText(`${carsDataTest[0].title}`)
    ).toBeInTheDocument();

    expect(screen.getByTestId('fill-star')).toBeInTheDocument();
  });

  it('Should show a outline star', async () => {
    render(
      <CarsList favorites={[]} setFavorites={() => {}} />,
      mocksCarsFavorites
    );
    expect(
      await screen.findByText(`${carsDataTest[0].title}`)
    ).toBeInTheDocument();
    expect(screen.getByTestId('outline-star')).toBeInTheDocument();
  });
});
