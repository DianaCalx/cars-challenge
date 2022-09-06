import { useCarsQuery } from '../generated/graphql';
import CarCard from './CarCard';
import { Cars } from '../generated/graphql';
import Description from './Description';
import { useAppContext } from '../context/appContext';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

export interface CarItem extends Cars {
  isFavorite: boolean
}


const CarListContainer = styled.div`
  background-color: ${props => props.theme.colors.neutralColor};
  border-radius: 0.5rem;
`;
const CarsList = () => {
  const [cars, setCars] = useState<CarItem[]>([]);
  const { pathname } = useLocation();
  const { user } = useAppContext();

  const { loading, data, error } = useCarsQuery({
    variables: {
      where: {
        user_id: {
          _eq: user?.id || 0
        }
      }
    }
  });

  useEffect(() => {
    if (data?.cars) {
      const carsWithFavoriteAttribute = data.cars.map(car => ({
        ...car,
        isFavorite: data.user_cars.some(userCar => userCar.car_id === car.id)
      }));

      setCars(carsWithFavoriteAttribute as CarItem[]);
    }
  }, [data]);

  return (
    <CarListContainer>
      <Description/>
      {pathname === '/favorites'
        ? cars.filter(car => car.isFavorite).map(car => 
            <CarCard key={car.id} car={car} setCars={setCars} />   
          )
        : cars.map(car => 
            <CarCard key={car.id} car={car} setCars={setCars} />   
          )
      }
    </CarListContainer>
  )
}

export default CarsList