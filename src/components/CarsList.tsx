import { useCarsQuery } from '../generated/graphql';
import CarCard from './CarCard';
import { Cars } from '../generated/graphql';
import Description from './Description';
import { useAppContext } from '../context/appContext';
import { useEffect, useState } from 'react';

export interface CarItem extends Cars {
  isFavorite: boolean
}

const CarsList = () => {
  const [cars, setCars] = useState<CarItem[]>([]);
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
    <div style={{ backgroundColor: '#eee' }}>
      <Description/>
      {cars.map(car => 
        <CarCard key={car.id} car={car} setCars={setCars} />   
      )}
    </div>
  )
}

export default CarsList