import { Navigate, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import CarsList from '../components/CarsList';
import Header from '../components/Header'
import Login from '../components/Login';
import { useAppContext } from '../context/appContext';
import useLocalStorage from '../hooks/useLocalStorage';
import Favorites from '../components/Favorites';
import { useEffect } from 'react';
import { getVariablesQueryCars } from '../utils/getVariablesQueryCars';
import { useFavoritesLazyQuery } from '../generated/graphql';

const DashboardPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const DashboarHeader = styled.div`
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 60%, rgba(0,95,255,1) 100%);
  width: 100%;
  padding: 2rem;
`;

const Dashboard = () => {
  const { isLoginModalOpen, user, setFavorites } = useAppContext();
  const [search] = useSearchParams();
  const { whereUserCars} = getVariablesQueryCars(search, user?.id);  
  const { getLocalStorage } = useLocalStorage();
  const { pathname } = useLocation();
  const [refectchFavorites,  { data: dataFavorites}] = useFavoritesLazyQuery();

  useEffect(() => {
    if(user){
      refectchFavorites({
        variables: {
          whereUserCars
        }
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  
  useEffect(() => {
    if (dataFavorites?.user_cars) {
      const favoriteCars = dataFavorites.user_cars.map(favoriteCar => favoriteCar.car_id);
      setFavorites(favoriteCars);
    } else{
      setFavorites([]);
    }
  }, [dataFavorites?.user_cars, setFavorites, user]);

 
  if (!user && pathname === '/favorites' && !getLocalStorage('user')) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
    <DashboarHeader>
        <Header />
    </DashboarHeader>
    <DashboardPage>
      {isLoginModalOpen && <Login />}
      {pathname === '/favorites' && <Favorites/>}
      {pathname === '/dashboard' && <CarsList />}     
    </DashboardPage>
    </>
  )
}

export default Dashboard