import Image from './Image';
import Condition from './Condition';
import styled from 'styled-components';
import { Cars } from '../generated/graphql';
import { HiDotsHorizontal, HiOutlineStar } from 'react-icons/hi';
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

const Sales = styled.div`
  display: flex;
  flex-direction: column;
  width: 20%;
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

const Favorite = styled(HiOutlineStar)`
  width: 5%;
  cursor: pointer;
  font-size: 5rem;
`;

const SelectButton = styled(HiDotsHorizontal)`
  width: 5%;
  cursor: pointer;
  font-size: 3rem;
`;


const Line = styled.div`
  width: 100%;
  border-bottom: 2px solid black;
  margin-bottom: 1rem;
`;

const CarCard = ({car}: CarCardProps) => {
  return (
    <>
      <Car>
          <ImageCar>
            <Image/>
          </ImageCar>
          <InformationLot>
            <p>{car.title}</p>
            <p>Batch number <span>{car.batch}</span></p>
            <Favorite/>
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
        <Line/>
    </>
  )
}

export default CarCard