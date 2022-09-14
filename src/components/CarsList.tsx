import { useEffect, useState } from 'react';
import { useCarsQuery } from '../generated/graphql';
import CarCard from './CarCard';
import { Cars } from '../generated/graphql';
import Description from './Description';
import { useAppContext } from '../context/appContext';
import Filters from './Filters';
import Spinner from './Spinner';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { getVariablesQueryCars } from '../utils/getVariablesQueryCars';
export interface CarItem extends Cars {
  isFavorite: boolean
};

const CarListContainer = styled.div`
  background-color: ${props => props.theme.colors.neutralColor};
  border-radius: 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Error = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;

const CarsList = () => {

  const { user } = useAppContext();
  const [favorites, setFavorites] = useState<number[]>([]);
  const [search] = useSearchParams();
  const variables = getVariablesQueryCars(search, user?.id);

  const { loading, data, error, refetch } = useCarsQuery({
    variables,
    fetchPolicy: 'no-cache'
  });

  useEffect(() => {
    if (data?.user_cars) {
      const favoriteCars = data.user_cars.map(favoriteCar => favoriteCar.car_id);
      setFavorites(favoriteCars);
    }
  }, [data?.user_cars, user]);

  return (
    <>
      <Filters/>
      <CarListContainer>    
        <Description/>
        {error && <Error>There was an error</Error>}
        {loading ?  <Spinner/> 
        : data?.cars.map(car => {
            const carWithFavorite = {
              ...car,
              isFavorite: favorites.includes(car.id)
            }
            return <CarCard key={car.id} car={carWithFavorite as CarItem} refetchCars={refetch} />
          })}      
      </CarListContainer>
    </>
  )
}

export default CarsList