import { Order_By, useCarsQuery } from '../generated/graphql';
import CarCard from './CarCard';
import { Cars } from '../generated/graphql';
import Description from './Description';
import { useAppContext } from '../context/appContext';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Filters, { FilterFormInputs } from './Filters';
import { validate } from 'uuid';

export interface CarItem extends Cars {
  isFavorite: boolean
}


const CarListContainer = styled.div`
  background-color: ${props => props.theme.colors.neutralColor};
  border-radius: 0.5rem;
`;
const CarsList = () => {
  const [cars, setCars] = useState<CarItem[]>([]);
  const [filters, setFilters] = useState<FilterFormInputs>();
  const { pathname } = useLocation();
  const { user } = useAppContext();


  const { loading, data, error, refetch } = useCarsQuery({
    variables: {
      whereUserCars: {
        user_id: {
          _eq: user?.id || 0
        }
      }
    }
  });

  useEffect(() => {
    if (filters) {
      const orderBy = filters.sale_date ? { sale_date: String(filters.sale_date) as Order_By } : {}
      const isBatch = validate(filters?.search || '');
      const whereCars = isBatch ? {
        batch: {
          _eq: filters?.search
        }
      } : {
        _or: [
          {
            title: {
              _iregex: filters?.search
            }
          },
          {
            vin: {
              _iregex: filters?.search
            }
          }
        ]
      }
      refetch({
        orderBy,
        whereCars,
        whereUserCars: {
          user_id: {
            _eq: user?.id || 0
          }
        }
      });
    }
  }, [filters, refetch, user?.id]);

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
    <>
    <Filters setFilters={setFilters} />
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
    </>
  )
}

export default CarsList