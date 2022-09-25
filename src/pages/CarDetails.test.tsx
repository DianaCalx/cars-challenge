import { MockedResponse } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { GraphQLError } from 'graphql';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import { CarDocument, DeleteCarDocument } from '../generated/graphql';
import { carsDataTest } from '../test/dataTest';
import { renderMemory } from '../test/testMemoryRouterProvider';
import CarDetails from './CarDetails';
import Dashboard from './Dashboard';

window.scrollTo = jest.fn();

const mocksCarDetail: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: CarDocument,
      variables: {
        where: {
          id: {
            _eq: 236,
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

const mocksCarDetailsEmpty: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: CarDocument,
      variables: {
        where: {
          id: {
            _eq: 9000,
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

const mocksCarDetailsError: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: CarDocument,
      variables: {
        where: {
          id: {
            _eq: 236,
          },
        },
      },
    },
    result: {
      errors: [new GraphQLError('Error!')],
    },
  },
];

const mocksDeleteCar: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: CarDocument,
      variables: {
        where: {
          id: {
            _eq: 236,
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
  {
    request: {
      query: DeleteCarDocument,
      variables: { delete_cars_by_pk: 236 },
    },
    result: {
      data: {
        id: 236,
      },
    },
  },
];

describe('Test in CarDetail Component', () => {
  it('Should show car details information', async () => {
    renderMemory(
      <MemoryRouter initialEntries={['/car-details/236']}>
        <Routes>
          <Route path="/car-details/:id" element={<CarDetails />} />
        </Routes>
      </MemoryRouter>,
      mocksCarDetail
    );

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(await screen.findByText('Car Details')).toBeInTheDocument();
  });

  it('Should redirect to dashboard component when the car does not exist', async () => {
    renderMemory(
      <MemoryRouter initialEntries={['/car-details/9000']}>
        <Routes>
          <Route path="/car-details/:id" element={<CarDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MemoryRouter>,
      mocksCarDetailsEmpty
    );

    expect(await screen.findByTestId('dashboard-test')).toBeInTheDocument();
  });

  it('Should show an error message when the query has a error', async () => {
    renderMemory(
      <MemoryRouter initialEntries={['/car-details/236']}>
        <Routes>
          <Route path="/car-details/:id" element={<CarDetails />} />
        </Routes>
      </MemoryRouter>,
      mocksCarDetailsError
    );

    expect(await screen.findByText('There was an error')).toBeInTheDocument();
  });

  it('Should render loading and success states on delete', async () => {
    renderMemory(
      <MemoryRouter initialEntries={['/car-details/236']}>
        <Routes>
          <Route path="/car-details/:id" element={<CarDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </MemoryRouter>,
      mocksDeleteCar
    );

    expect(await screen.findByText('Car Details')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Delete Car'));
    fireEvent.click(screen.getByText('Delete'));
    expect(await screen.findByTestId('dashboard-test')).toBeInTheDocument();
  });
});
