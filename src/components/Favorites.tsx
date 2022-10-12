import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { useAppContext } from '../context/appContext';
import { useCarsQuery, useFavoritesLazyQuery , Cars } from '../generated/graphql';

import { getVariablesQueryCars } from '../utils/get-variables-query-cars';
import CarCard from './car-card';
import Description from './description';
import Error from './error';
import Filters from './filters';
import Spinner from './spinner';

export interface CarItem extends Cars {
  isFavorite: boolean;
}

interface DataFavorites {
  __typename: 'user_cars';
  id: number;
  car_id: number;
}

const FavoritesContainer = styled.div`
  background-color: ${(props) => props.theme.colors.neutralColor};
  border-radius: 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const NotFound = styled.p`
  color: ${(props) => props.theme.colors.successColor2};
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

interface PropsFavorites {
  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
}

const Favorites = ({ favorites, setFavorites }: PropsFavorites) => {
  const { user } = useAppContext();
  const [search] = useSearchParams();
  const { orderBy, whereCars, whereUserCars } = getVariablesQueryCars(
    search,
    user?.id
  );
  const [refectchFavorites, { data: dataFavorites }] = useFavoritesLazyQuery();

  useEffect(() => {
    if (user) {
      refectchFavorites({
        variables: {
          whereUserCars,
        },
      });
    }
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (!user) {
      setFavorites([]);
    } else if (dataFavorites?.user_cars) {
      const favoriteCars = dataFavorites.user_cars.map(
        (favoriteCar) => favoriteCar.car_id
      );
      setFavorites(favoriteCars);
    }
  }, [dataFavorites?.user_cars, setFavorites, user]);

  const {
    loading: loadingCars,
    data: dataCars,
    error: errorCars,
  } = useCarsQuery({
    variables: {
      orderBy,
      whereCars: {
        ...whereCars,
        id: {
          _in: favorites,
        },
      },
    },
  });

  if (errorCars) {
    return (
      <>
        <Filters />
        <FavoritesContainer>
          <Description />
          <Error type="normalError">There was an error</Error>
        </FavoritesContainer>
      </>
    );
  }

  if (loadingCars) {
    return (
      <>
        <Filters />
        <FavoritesContainer>
          <Description />
          <Spinner />
        </FavoritesContainer>
      </>
    );
  }

  return (
    <>
      <Filters />
      <FavoritesContainer>
        <Description />
        {dataCars?.cars.map((car) => {
          const carWithFavorite = {
            ...car,
            isFavorite: favorites.includes(car.id),
          };
          if (carWithFavorite.isFavorite) {
            return (
              <CarCard
                key={car.id}
                car={carWithFavorite as CarItem}
                setFavorites={setFavorites}
                dataFavorites={
                  (dataFavorites?.user_cars as DataFavorites[]) || []
                }
              />
            );
          }
          return null;
        })}
        {favorites.length === 0 && !loadingCars ? <NotFound>Favorite cars were not found</NotFound> : null}
      </FavoritesContainer>
    </>
  );
};

export default Favorites;
