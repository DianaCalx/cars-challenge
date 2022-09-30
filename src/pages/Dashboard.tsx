import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import CarsList from '../components/CarsList';
import Favorites from '../components/Favorites';
import Header from '../components/Header';
import Login from '../components/Login';
import { useAppContext } from '../context/appContext';
import useLocalStorage from '../hooks/useLocalStorage';

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
  const { isLoginModalOpen, user } = useAppContext();
  const { getLocalStorage } = useLocalStorage();
  const { pathname } = useLocation();
  const [favorites, setFavorites] = useState<number[]>([]);

  if (!user && pathname === '/favorites' && !getLocalStorage('user')) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <>
      <DashboarHeader>
        <Header />
      </DashboarHeader>
      <DashboardPage data-testid={'dashboard-test'}>
        {isLoginModalOpen && <Login />}
        {pathname === '/favorites' && (
          <Favorites setFavorites={setFavorites} favorites={favorites} />
        )}
        {pathname === '/dashboard' && (
          <CarsList setFavorites={setFavorites} favorites={favorites} />
        )}
      </DashboardPage>
    </>
  );
};

export default Dashboard;
