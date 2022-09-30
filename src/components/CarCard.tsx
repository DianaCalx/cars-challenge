import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAppContext } from '../context/appContext';
import {
  useAddFavoriteCarMutation,
  useRemoveFavoriteCarMutation,
} from '../generated/graphql';
import { getCondition } from '../utils/getCondition';
import Button from './Button';
import { CarItem } from './CarsList';
import Image from './Image';

interface CarCardProps {
  car: CarItem;
  setFavorites: React.Dispatch<React.SetStateAction<number[]>>;
  dataFavorites: {
    __typename: 'user_cars';
    id: number;
    car_id: number;
  }[];
}

const CarContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
  padding: 1rem;
  width: 100%;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 32%);
  border-radius: 5px 0 0 5px;
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }
`;

const CarImage = styled.div`
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
    span {
      font-weight: lighter;
    }
  }
`;

const VehicleDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 15%;
  p {
    display: flex;
    flex-direction: column;
    font-weight: bold;
    span {
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
    span {
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

interface userCar {
  __ref?: string;
  __typename?: string;
  id?: number;
  car_id?: number;
}

const CarCard = ({ car, setFavorites, dataFavorites }: CarCardProps) => {
  const navigate = useNavigate();
  const { user, openLoginModal } = useAppContext();

  const [addFavorite, { loading: loadingAddFavorite }] =
    useAddFavoriteCarMutation({
      optimisticResponse: {
        insert_user_cars_one: {
          id: Number((Math.random() * 100).toFixed(0)),
          car_id: car.id,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            user_cars: (existingFieldsData) => {
              return [...existingFieldsData, data?.insert_user_cars_one];
            },
          },
          optimistic: true,
        });
      },
    });

  const [removeFavorite, { loading: loadingRemoveFavorite }] =
    useRemoveFavoriteCarMutation({
      optimisticResponse: {
        delete_user_cars: {
          affected_rows: 1,
          returning: [
            {
              car_id: car.id,
            },
          ],
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            user_cars: (existingFieldsData) => {
              const favoriteId = dataFavorites.find(
                (dataFavorite) => dataFavorite.car_id === car.id
              )?.id;
              return existingFieldsData.filter((favorites: userCar) => {
                if (favorites.__ref) {
                  return favorites.__ref !== `user_cars:${favoriteId}`;
                }
                return favorites.id !== favoriteId;
              });
            },
          },
          optimistic: true,
        });
      },
    });

  const handleFavoriteButton = () => {
    if (!user) {
      openLoginModal();
      return;
    }
    if (!loadingAddFavorite && !loadingRemoveFavorite) {
      if (car.isFavorite) {
        setFavorites((prevFav) => prevFav.filter((fav) => fav !== car.id));
        removeFavorite({
          variables: {
            where: {
              _and: [
                {
                  user_id: {
                    _eq: user?.id,
                  },
                  car_id: {
                    _eq: car.id,
                  },
                },
              ],
            },
          },
        });
      } else {
        setFavorites((prevFav) => [...prevFav, car.id]);
        addFavorite({
          variables: {
            object: {
              car_id: car.id,
              user_id: user?.id,
            },
          },
        });
      }
    }
  };

  return (
    <CarContainer>
      <CarImage>
        <Image />
      </CarImage>
      <InformationLot>
        <p>{car.title}</p>
        <p>
          Batch number <span>{car.batch}</span>
        </p>
        <p>
          Vin number <span>{car.vin}</span>
        </p>
        <Button
          styleButton={car.isFavorite ? 'FillStar' : 'OutlineStar'}
          onClick={handleFavoriteButton}
        />
      </InformationLot>
      <VehicleDescription>
        <p>
          Odometer <span>{car.odometer}</span>
        </p>
        <p>
          Price <span>{car.price}</span>
        </p>
      </VehicleDescription>
      <BrandModel>
        <p>
          Brand <span>{car.model.name}</span>
        </p>
        <p>
          Model <span>{car.model.brand.name}</span>
        </p>
      </BrandModel>
      <Conditions>{getCondition(car.condition)}</Conditions>
      <Sales>
        <p>
          {car.city.state.name} - {car.city.name}
        </p>
        <p data-testid={'sale-date-testid'}>{car.sale_date}</p>
      </Sales>
      <Button
        styleButton="DetailsButton"
        onClick={() => navigate(`/car-details/${car.id}`)}
      >
        Details
      </Button>
    </CarContainer>
  );
};

export default CarCard;
