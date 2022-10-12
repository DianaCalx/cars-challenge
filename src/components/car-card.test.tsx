/* eslint-disable camelcase */
import { MockedResponse } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import {
  AddFavoriteCarDocument,
  RemoveFavoriteCarDocument,
} from '../generated/graphql';
import { carFavorite, carNotFavorite, favoritesCars } from '../test/data-test';
import { renderUserContext } from '../test/test-user-context-provider';
import CarCard from './car-card';
import { DataFavorites } from './cars-list';
import { CarItem } from './favorites';

let addMutationFavoriteCalled = false;
let removeMutationFavoriteCalled = false;

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
const mocksCar: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: RemoveFavoriteCarDocument,
      variables: {
        where: {
          _and: [
            {
              user_id: {
                _eq: 7,
              },
              car_id: {
                _eq: 236,
              },
            },
          ],
        },
      },
    },
    result: () => {
      removeMutationFavoriteCalled = true;
      return {
        data: {
          delete_user_cars: {
            affected_rows: 1,
            returning: [
              {
                car_id: 236,
                __typename: 'user_cars',
              },
            ],
            __typename: 'user_cars_mutation_response',
          },
        },
      };
    },
  },
  {
    request: {
      query: AddFavoriteCarDocument,
      variables: {
        object: {
          car_id: 236,
          user_id: 7,
        },
      },
    },
    result: () => {
      addMutationFavoriteCalled = true;
      return {
        data: {
          insert_user_cars_one: {
            id: 1252,
            car_id: 236,
            __typename: 'user_cars',
          },
        },
      };
    },
  },
];

describe('Test in CarCard Component', () => {
  it('Should show the car', async () => {
    renderUserContext(
      <CarCard
        key="testkey"
        car={carFavorite as CarItem}
        // eslint-disable-next-line   @typescript-eslint/no-empty-function
        setFavorites={() => {}}
        dataFavorites={favoritesCars as DataFavorites[]}
      />,
      mocksCar
    );
    expect(await screen.findByText('Rav 4 2017')).toBeInTheDocument();
  });

  it('Should add favorite car', async () => {
    renderUserContext(
      <CarCard
        key="testkey"
        car={carNotFavorite as CarItem}
        // eslint-disable-next-line   @typescript-eslint/no-empty-function
        setFavorites={() => {}}
        dataFavorites={[]}
      />,
      mocksCar
    );
    expect(await screen.findByText('Rav 4 2017')).toBeInTheDocument();

    expect(screen.getByTestId('outline-star')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('outline-star'));

    await waitFor(() => {
      expect(addMutationFavoriteCalled).toBe(true);
    });
  });

  it('Should remove favorite car', async () => {
    renderUserContext(
      <CarCard
        key="testkey"
        car={carFavorite as CarItem}
        // eslint-disable-next-line   @typescript-eslint/no-empty-function
        setFavorites={() => {}}
        dataFavorites={favoritesCars}
      />,
      mocksCar
    );
    expect(await screen.findByText('Rav 4 2017')).toBeInTheDocument();

    expect(await screen.findByTestId('fill-star')).toBeInTheDocument();

    userEvent.click(screen.getByTestId('fill-star'));

    await waitFor(() => {
      expect(removeMutationFavoriteCalled).toBe(true);
    });
  });
});
