import { MockedProvider } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { GraphQLError } from 'graphql';

import { CarsDocument } from '../generated/graphql';
import { render } from '../test/testProvider';
import CarsList from './CarsList';

const mocksCars: any = [
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
        cars: [
          {
            batch: '521161a4-0022-452c-92c6-76fcfde50e4f',
            city: {
              __typename: 'cities',
              name: 'San Diego',
              id: 6,
              state: {
                __typename: 'states',
                id: 2,
                name: 'CALIFORNIA',
              },
            },
            color: {
              __typename: 'colors',
              id: 3,
              name: 'Black',
            },
            condition: 'N',
            id: 236,
            model: {
              __typename: 'models',
              id: 6,
              name: 'Rav4',
              brand: {
                __typename: 'brands',
                id: 2,
                name: 'Toyota',
              },
            },
            odometer: 45000,
            price: '$10,600.00',
            sale_date: '2022-09-23',
            title: 'Rav 4 2017',
            vin: 'MTE4584',
            year: 2017,
            __typename: 'cars',
          },
          {
            __typename: 'cars',
            id: 238,
            title: 'Ford Mustang 2021',
            model: {
              __typename: 'models',
              id: 25,
              name: 'Mustang',
              brand: {
                __typename: 'brands',
                id: 4,
                name: 'Ford',
              },
            },
            color: {
              __typename: 'colors',
              id: 5,
              name: 'Gray',
            },
            odometer: 10000,
            sale_date: '2022-10-25',
            city: {
              __typename: 'cities',
              name: 'Orlando',
              id: 9,
              state: {
                __typename: 'states',
                id: 3,
                name: 'FLORIDA',
              },
            },
            year: 2021,
            condition: 'A',
            price: '$9,750.00',
            batch: 'b58c2373-a2b2-49cb-9578-b0dd18593372',
            vin: '123512341234',
          },
          {
            __typename: 'cars',
            id: 248,
            title: 'BMW M4 2022',
            model: {
              __typename: 'models',
              id: 24,
              name: 'M4',
              brand: {
                __typename: 'brands',
                id: 6,
                name: 'BMW',
              },
            },
            color: {
              __typename: 'colors',
              id: 1,
              name: 'Red',
            },
            odometer: 8000,
            sale_date: '2022-09-24',
            city: {
              __typename: 'cities',
              name: 'Los Angeles',
              id: 5,
              state: {
                __typename: 'states',
                id: 2,
                name: 'CALIFORNIA',
              },
            },
            year: 2022,
            condition: 'A',
            price: '$15,000.00',
            batch: '3bd90848-9654-4be7-9ed9-0e57787b8222',
            vin: '1M8GDM9A_KP042711',
          },
        ],
      },
    },
  },
];

const mocksEmptyData: any = [
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

const mocksError: any = [
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
    render(
      <MockedProvider mocks={mocksCars} addTypename={false}>
        <CarsList favorites={[]} setFavorites={() => {}} />
      </MockedProvider>
    );
    expect(await screen.findByText('Ford Mustang 2021')).toBeInTheDocument();
  });

  it('Should show a Spinner and a message of Empty Data', async () => {
    render(
      <MockedProvider mocks={mocksEmptyData} addTypename={false}>
        <CarsList favorites={[]} setFavorites={() => {}} />
      </MockedProvider>
    );
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(await screen.findByText('There are no cars')).toBeInTheDocument();
  });

  it('Should show an error message', async () => {
    render(
      <MockedProvider mocks={mocksError} addTypename={false}>
        <CarsList favorites={[]} setFavorites={() => {}} />
      </MockedProvider>
    );
    expect(await screen.findByText('There was an error')).toBeInTheDocument();
  });
});
