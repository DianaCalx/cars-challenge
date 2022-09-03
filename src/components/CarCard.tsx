import Image from './Image';
import Condition from './Condition';
import styled from 'styled-components';
import { Cars } from '../generated/graphql';
import { HiDotsHorizontal, HiOutlineStar } from 'react-icons/hi';
import Button from './Button';
interface CarCardProps {
  car: Cars
}

const Car = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 1rem;
`;

const ImageCar = styled.div`
  width: 15%;
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

const BrandModel = styled.div`
  width: 10%;
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
  cursor: pointer;
  font-size: 3rem;
  color: #ecc861;
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
            <Button StyledButton={Favorite} onClick={() => console.log('favorite clicked')} />
          </InformationLot>
          <DescriptionVehicle>
            <p>Odometer <span>{car.odometer}</span></p>
            <p>Price <span>{car.price}</span></p>
          </DescriptionVehicle>
          <BrandModel>
            <p>Brand <span>{car.model.name}</span></p>
            <p>Model <span>{car.model.brand.name}</span></p>
          </BrandModel>
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