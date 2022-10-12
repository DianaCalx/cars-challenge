 
import { MockedResponse } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import { GraphQLError } from 'graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { CarsDocument, FavoritesDocument } from '../generated/graphql';
import { carsDataTest, favoritesCars } from '../test/data-test';
import { renderMemory } from '../test/test-memory-router-provider';
import { render } from '../test/test-provider';
import CarsList from './cars-list';

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

const mocksFilterCar: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: CarsDocument,
      variables: {
        orderBy: {
          sale_date: 'desc',
        },
        whereCars: {
          _or: [
            {
              title: {
                _iregex: 'Rav 4 2017',
              },
            },
            {
              vin: {
                _iregex: 'Rav 4 2017',
              },
            },
          ],
        },
      },
    },
    result: {
      data: {
        cars: [carsDataTest[0], carsDataTest[1]],
      },
    },
  },
];

describe('Test in CarList Component', () => {
  it('Should show the cars', async () => {
    render(<CarsList favorites={[]} setFavorites={() => {}} />, mocksCars);
    expect(
      await screen.findByText(`${carsDataTest[3].title}`)
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

  it('Should show a filter cars', async () => {
    renderMemory(
      <MemoryRouter initialEntries={['/dashboard?search=Rav+4+2017&sort=desc']}>
        <Routes>
          <Route
            path="/dashboard"
            element={<CarsList favorites={[]} setFavorites={() => {}} />}
          />
        </Routes>
      </MemoryRouter>,
      mocksFilterCar
    );

    await waitFor(() => {
      const favoritesCars = screen.getAllByText('Rav 4 2017');
      expect(favoritesCars).toHaveLength(2);
    });
    const favoritesCarsSort = screen.getAllByTestId('sale-date-testid');
    expect(favoritesCarsSort[0]).toHaveTextContent(
      `${carsDataTest[0].sale_date}`
    );
    expect(favoritesCarsSort[1]).toHaveTextContent(
      `${carsDataTest[1].sale_date}`
    );
  });
});
