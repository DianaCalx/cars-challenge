import { useEffect } from 'react';
import { Navigate, useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import CarsList from '../components/CarsList';
import Favorites from '../components/Favorites';
import Header from '../components/Header';
import Login from '../components/Login';
import { useAppContext } from '../context/appContext';
import { useFavoritesLazyQuery } from '../generated/graphql';
import useLocalStorage from '../hooks/useLocalStorage';
import { getVariablesQueryCars } from '../utils/getVariablesQueryCars';

const DashboardPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const DashboarHeader = styled.div`
  background: ${(props) => props.theme.gradient};
  width: 100%;
  padding: 2rem;
`;

const Dashboard = () => {
  const { isLoginModalOpen, user, setFavorites } = useAppContext();
  const [search] = useSearchParams();
  const { whereUserCars } = getVariablesQueryCars(search, user?.id);
  const { getLocalStorage } = useLocalStorage();
  const { pathname } = useLocation();
  const [refectchFavorites, { data: dataFavorites }] = useFavoritesLazyQuery();

  useEffect(() => {
    if (user) {
      refectchFavorites({
        variables: {
          whereUserCars,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    if (!user) {
      setFavorites([]);
    } else if (dataFavorites?.user_cars) {
      const favoriteCars = dataFavorites.user_cars.map(
        (favoriteCar) => favoriteCar.car_id
      );
      setFavorites(favoriteCars);
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
        {pathname === '/favorites' && <Favorites />}
        {pathname === '/dashboard' && <CarsList />}
      </DashboardPage>
    </>
  );
};

export default Dashboard;
