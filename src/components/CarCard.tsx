import Image from './Image';
import Condition from './Condition';
import styled from 'styled-components';
import { HiOutlineStar, HiStar } from 'react-icons/hi';
import Button from './Button';
import { CarItem } from './CarsList';
import { useAddFavoriteCarMutation, useRemoveFavoriteCarMutation } from '../generated/graphql';
import { useAppContext } from '../context/appContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
interface CarCardProps {
  car: CarItem,
  setCars: React.Dispatch<React.SetStateAction<CarItem[]>>
}

const CarContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0 1rem;
  width: 100%;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 32%);
  border-radius: 5px 0 0 5px;
`;

const ImageCar = styled.div`
  width: 20%;
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

const Sales = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
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

const DetailsButton = styled.button`
  width: 5%;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.7rem;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.darkColor};
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.darkColor}; 

  &:hover{
    background: ${props => props.theme.colors.darkColor2};
  }
`;

const CarCard = ({ car, setCars }: CarCardProps) => {
  const navigate = useNavigate();
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
    <CarContainer>
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
        <p>{car.city.state.name} - {car.city.name}</p>
        <p>{car.sale_date}</p>
      </Sales>
      <Button StyledButton={DetailsButton} onClick={()=>navigate(`/car-details/${car.id}`)}>
        Details
      </Button>
      </CarContainer>
   
  )
}

export default CarCard
