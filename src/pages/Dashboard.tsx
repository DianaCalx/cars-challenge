import styled from 'styled-components';
import CarsList from '../components/CarsList';
import Header from '../components/Header'
import Login from '../components/Login';
import { useAppContext } from '../context/appContext';

const DashboardPage = styled.div`
  background-color: ${props => props.theme.colors.secondaryColor};
  min-height: 100%;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Dashboard = () => {
  const { isLoginModalOpen } = useAppContext();

  return (
    <DashboardPage>
      {isLoginModalOpen && <Login />}
      <Header />
      <CarsList />
    </DashboardPage>
  )
}

export default Dashboard