import { useCarsQuery } from '../generated/graphql';
import CarCard from './CarCard';
import { Cars } from '../generated/graphql';
import Description from './Description';
import { useAppContext } from '../context/appContext';
import Filters from './Filters';
import Spinner from './Spinner';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';
import { getVariablesQueryCars } from '../utils/getVariablesQueryCars';

export interface CarItem extends Cars {
  isFavorite: boolean
};

const FavoritesContainer = styled.div`
  background-color: ${props => props.theme.colors.neutralColor};
  border-radius: 0.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Error = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
`;

const NotFound = styled.p`
  color:  ${props => props.theme.colors.successColor2};
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

const Favorites = () => {
  
  const { user, favorites } = useAppContext();
  const [search] = useSearchParams();
  const { orderBy, whereCars } = getVariablesQueryCars(search, user?.id);

  const { loading: loadingCars, data: dataCars, error: errorCars} = useCarsQuery({
    variables: {
      orderBy,
      whereCars: {
        ...whereCars,
        id: {
          _in: favorites
        }
      }
    }
  });
  
  return (
    <>
      <Filters/>
      <FavoritesContainer>    
        <Description/>
        {errorCars && <Error>There was an error</Error>}
        {loadingCars ?  <Spinner/> 
        : dataCars?.cars.map(car => {
            const carWithFavorite = {
              ...car,
              isFavorite: favorites.includes(car.id)
            }
            if(carWithFavorite.isFavorite){
              return <CarCard key={car.id} car={carWithFavorite as CarItem}/>
            }
            return null;
          })}
          {
            (!favorites.length && !loadingCars )  && <NotFound>Favorite cars were not found</NotFound>
          }     
      </FavoritesContainer>
    </>
  )
}

export default Favorites