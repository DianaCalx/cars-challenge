import Image from './Image';
import Condition from './Condition';
import styled from 'styled-components';
import { HiDotsHorizontal, HiOutlineStar, HiStar } from 'react-icons/hi';
import Button from './Button';
import { CarItem } from './CarsList';
import { useAddFavoriteCarMutation, useRemoveFavoriteCarMutation } from '../generated/graphql';
import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
interface CarCardProps {
  car: CarItem,
  setCars: React.Dispatch<React.SetStateAction<CarItem[]>>
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

const FillStar = styled(HiStar)`
  cursor: pointer;
  font-size: 3rem;
  color:  ${props => props.theme.colors.starColor};
`;

const OutlineStar = styled(HiOutlineStar)`
  cursor: pointer;
  font-size: 3rem;
  color:  ${props => props.theme.colors.starColor};
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

const CarCard = ({ car, setCars }: CarCardProps) => {
  const { user, setIsLoginModalOpen } = useAppContext();
  const [addFavorite, { loading: loadingAddFavorite, data: dataAddFavorite }] = useAddFavoriteCarMutation();
  const [removeFavorite, { loading: loadingRemoveFavorite, data: dataRemoveFavorite }] = useRemoveFavoriteCarMutation();

  useEffect(() => {
    if (!loadingAddFavorite && !loadingRemoveFavorite && (dataAddFavorite || dataRemoveFavorite)) {
      setCars(cars => (
        cars.map(currentCar => {
          if (currentCar.id === car.id) {
            return {
              ...currentCar,
              isFavorite: !currentCar.isFavorite
            }
          }
          return currentCar
        })
      ));
    }
  }, [car.id, dataAddFavorite, dataRemoveFavorite, loadingAddFavorite, loadingRemoveFavorite, setCars]);

  const handleFavoriteButton = () => {
    if (!user) {
      setIsLoginModalOpen(true);
      return;
    }
    if (!loadingAddFavorite && !loadingRemoveFavorite) {
      if (car.isFavorite) {
        removeFavorite({
          variables: {
            where: {
              _and: [{
                user_id: {
                  _eq: user?.id
                },
                car_id: {
                  _eq: car.id
                }
              }]
            }
          }
        });
      } else {
        addFavorite({
          variables: {
            object: {
              car_id: car.id,
              user_id: user?.id
            }
          }
        });
      }
    }
  }

  return (
    <>
      <Car>
          <ImageCar>
            <Image/>
          </ImageCar>
          <InformationLot>
            <p>{car.title}</p>
            <p>Batch number <span>{car.batch}</span></p>
            <Button
              StyledButton={car.isFavorite ? FillStar : OutlineStar}
              onClick={handleFavoriteButton}
            />
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