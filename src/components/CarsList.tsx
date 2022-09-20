import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import { useAppContext } from '../context/appContext';
import { useCarsQuery } from '../generated/graphql';
import { Cars } from '../generated/graphql';
import { getVariablesQueryCars } from '../utils/getVariablesQueryCars';
import CarCard from './CarCard';
import Description from './Description';
import Error from './Error';
import Filters from './Filters';
import Spinner from './Spinner';

export interface CarItem extends Cars {
  isFavorite: boolean;
}

const CarListContainer = styled.div`
  background-color: ${(props) => props.theme.colors.neutralColor};
  border-radius: 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CarsList = () => {
  const { user, favorites } = useAppContext();
  const [search] = useSearchParams();
  const { orderBy, whereCars } = getVariablesQueryCars(search, user?.id);

  const {
    loading: loadingCars,
    data: dataCars,
    error: errorCars,
  } = useCarsQuery({
    variables: {
      orderBy,
      whereCars,
    },
  });

  if (!dataCars?.cars.length && !loadingCars) {
    return (
      <>
        <Filters />
        <CarListContainer>
          <Description />
          <Error type="normalError">There are no cars</Error>
        </CarListContainer>
      </>
    );
  }

  return (
    <>
      <Filters />
      <CarListContainer>
        <Description />
        {errorCars && <Error type="normalError">There was an error</Error>}
        {loadingCars ? (
          <Spinner />
        ) : (
          dataCars?.cars.map((car) => {
            const carWithFavorite = {
              ...car,
              isFavorite: favorites.includes(car.id),
            };
            return <CarCard key={car.id} car={carWithFavorite as CarItem} />;
          })
        )}
      </CarListContainer>
    </>
  );
};

export default CarsList;
