import { useCarsQuery } from '../generated/graphql';
import Image from './Image';
import styled from 'styled-components';
import Condition from './Condition';

const Car = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin-bottom: 2rem;
`;

const InformationLot = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  p {
    display: flex;
    flex-direction: column;
    font-weight: bold;
      span{
        font-weight: lighter;
      }
    }
`;

const DescriptionVehicle = styled.div`
    display: flex;
    flex-direction: column;
    width: 15%;
    p {
      display: flex;
      flex-direction: column;
      font-weight: bold;
      span{
        font-weight: lighter;
      }
    }
  `;

const Conditions = styled.div`
  width: 10%;
`;

const FavoriteButton = styled.button`
  width: 15rem;
`;

const Sales = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`
const CarsList = () => {
  const { loading, data, error } = useCarsQuery();

  return (
    <div>
      {data?.cars?.map(car => 
        <Car key={car.id}>
          <Image/>
          <InformationLot>
            <p>{car.title}</p>
            <p>Batch number <span>{car.batch}</span></p>
            <FavoriteButton>Favorite</FavoriteButton>
          </InformationLot>
          <DescriptionVehicle>
            <p>Odometer <span>{car.odometer}</span></p>
            <p>Price <span>{car.price}</span></p>
          </DescriptionVehicle>
          <Conditions>
            <Condition condition={car.condition}/>
          </Conditions>
          <Sales>
            <p>{car.city.name} - {car.city.state.name}</p>
            <p>{car.sale_date}</p>
          </Sales>
        </Car>
      )}
    </div>
  )
}

export default CarsList