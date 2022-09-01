import { useCarsQuery } from '../generated/graphql';
import CarCard from './CarCard';
import { Cars } from '../generated/graphql';

const CarsList = () => {
  const { loading, data, error } = useCarsQuery();

  return (
    <div>
      {data?.cars?.map(car => 
        <CarCard key={car.id} car={car as Cars}/>
      )}
    </div>
  )
}

export default CarsList