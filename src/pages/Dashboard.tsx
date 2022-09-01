import styled from 'styled-components';
import CarsList from '../components/CarsList';
import Header from '../components/Header'
import Login from '../components/Login';
import { useSearchParams } from '../hooks/useSearchParams';

const DashboardPage = styled.div`
  background-color: ${props => props.theme.colors.mainColor};
  height: 100vh;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Dashboard = () => {
  
  const { searchParams } = useSearchParams();

  return (
    <DashboardPage>
      {searchParams.login === 'true' && <Login />}
      <Header />
      <CarsList />
    </DashboardPage>
  )
}

export default Dashboard