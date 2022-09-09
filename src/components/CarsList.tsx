import { Order_By, useCarsQuery } from '../generated/graphql';
import CarCard from './CarCard';
import { Cars } from '../generated/graphql';
import Description from './Description';
import { useAppContext } from '../context/appContext';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import Filters, { FilterFormInputs } from './Filters';
import { validate } from 'uuid';
import Spinner from './Spinner';
export interface CarItem extends Cars {
  isFavorite: boolean
}

const CarListContainer = styled.div`
  background-color: ${props => props.theme.colors.neutralColor};
  border-radius: 0.5rem;
`;
const CarsList = () => {
  const [filters, setFilters] = useState<FilterFormInputs>();
  const { user } = useAppContext();
  const [favorites, setFavorites] = useState<number[]>([]);

  const { loading, data, error, refetch } = useCarsQuery({
    variables: {
      whereUserCars: {
        user_id: {
          _eq: user?.id || 0
        }
      }
    },
    fetchPolicy: 'no-cache'
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
    if (data?.user_cars) {
      const favoriteCars = data.user_cars.map(favoriteCar => favoriteCar.car_id);
      setFavorites(favoriteCars);
    }
  }, [data?.user_cars]);

  return (
    <>
      <Filters setFilters={setFilters} />
      <CarListContainer>    
        <Description/>
        {loading && <Spinner/>}
        {error && <p>Was an error</p>}
        {data?.cars.map(car => {
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