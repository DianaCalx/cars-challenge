import { useCarsQuery } from '../generated/graphql';
import CarCard from './CarCard';
import { Cars } from '../generated/graphql';
import Description from './Description';

const CarsList = () => {
  const { loading, data, error } = useCarsQuery();

  return (
    <div>
      <Description/>
      {data?.cars?.map(car => 
        <CarCard key={car.id} car={car as Cars}/>   
      )}
    </div>
  )
}

export default CarsList