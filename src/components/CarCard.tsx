import Image from './Image';
import Condition from './Condition';
import styled from 'styled-components';
import { Cars } from '../generated/graphql';
import { HiDotsHorizontal } from 'react-icons/hi';

interface CarCardProps {
  car: Cars
}

const Car = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
`;

const ImageCar = styled.div`
  width: 20%;
  height: 100%;
  object-fit: cover;
`

const Sales = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
`;

const InformationLot = styled.div`
display: flex;
flex-direction: column;
width: 30%;
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
  width: 15%;
`;

const SelectButton = styled(HiDotsHorizontal)`
  width: 5%;
  margin: 1rem;
  cursor: pointer;
  font-size: 3rem;
`;

const FavoriteButton = styled.button`
  width: 10rem;
  background-color: ${props => props.theme.colors.darkColor};
  border: none;
  border-radius: 0.5rem;
  color: white;
  cursor: pointer;
`;


const CarCard = ({car}: CarCardProps) => {
  return (
   <Car>
      <ImageCar>
        <Image/>
      </ImageCar>
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
      <SelectButton/>
    </Car>
  )
}

export default CarCard