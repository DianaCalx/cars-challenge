import { Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CarsList from '../components/CarsList';
import Header from '../components/Header'
import Login from '../components/Login';
import { useAppContext } from '../context/appContext';
import useLocalStorage from '../hooks/useLocalStorage';
import Filters from '../components/Filters';

const DashboardPage = styled.div`
  background-color: ${props => props.theme.colors.mainColor};
  min-height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Dashboard = () => {
  const { isLoginModalOpen, user } = useAppContext();
  const { getLocalStorage } = useLocalStorage();
  const { pathname } = useLocation();
 
  if (!user && pathname === '/favorites' && !getLocalStorage('user')) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <DashboardPage>
      {isLoginModalOpen && <Login />}
      <Header />
      <Filters/>
      <CarsList />
    </DashboardPage>
  )
}

export default Dashboard