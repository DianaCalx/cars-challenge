import { MockedResponse } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { GraphQLError } from 'graphql';

import { CarsDocument } from '../generated/graphql';
import { carsDataTest } from '../test/dataTest';
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

describe('Test in CarList Component', () => {
  it('Should show the cars', async () => {
    render(<CarsList favorites={[]} setFavorites={() => {}} />, mocksCars);
    expect(await screen.findByText('Ford Mustang 2021')).toBeInTheDocument();
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
});
