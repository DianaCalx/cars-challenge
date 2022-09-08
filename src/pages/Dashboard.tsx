import { Navigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import CarsList from '../components/CarsList';
import Header from '../components/Header'
import Login from '../components/Login';
import { useAppContext } from '../context/appContext';
import useLocalStorage from '../hooks/useLocalStorage';

const DashboardPage = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
`;

const DashboarHeader = styled.div`
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 60%, rgba(0,95,255,1) 100%);
  width: 100%;
  padding: 2rem;
`;

const Dashboard = () => {
  const { isLoginModalOpen, user } = useAppContext();
  const { getLocalStorage } = useLocalStorage();
  const { pathname } = useLocation();
 
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
      <CarsList />
    </DashboardPage>
    </>
  )
}

export default Dashboard