import { useAppContext } from "../context/appContext";
import { useCarsQuery, useFavoritesLazyQuery , Cars } from "../generated/graphql";

import { getVariablesQueryCars } from "../utils/get-variables-query-cars";
import CarCard from "./car-card";
import Description from "./description";
import Error from "./error";
import Filters from "./filters";
import Spinner from "./spinner";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import styled from "styled-components";

export interface CarItem extends Cars {
  isFavorite: boolean;
}

export interface DataFavorites {
  __typename: "user_cars";
  id: number;
  car_id: number;
}

const CarListContainer = styled.div`
  background-color: ${(props) => props.theme.colors.neutralColor};
  border-radius: 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

interface PropsCarsList {
  favorites: number[];
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
}

const CarsList = ({ favorites, setFavorites }: PropsCarsList) => {
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
      whereCars
    },
  })

  if (!dataCars?.cars.length && !loadingCars && !errorCars) {
    return (
      <>
        <Filters />
        <CarListContainer>
          <Description />
          <Error type="normalError">There are no cars</Error>
        </CarListContainer>
      </>
    )
  }

  return (
    <>
      <Filters />
      <CarListContainer>
        <Description />
        {errorCars ? <Error type="normalError">There was an error</Error> : null}
        {loadingCars ? (
          <Spinner />
        ) : (
          dataCars?.cars.map((car) => {
            const carWithFavorite = {
              ...car,
              isFavorite: favorites.includes(car.id),
            };
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
          })
        )}
      </CarListContainer>
    </>
  );
};

export default CarsList;
