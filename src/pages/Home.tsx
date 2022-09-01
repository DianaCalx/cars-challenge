import { useSearchParams } from '../hooks/useSearchParams';
import styled from 'styled-components';
import Login from '../components/Login';
import Header from '../components/Header';

const HomePage = styled.div`
  background-color: ${props => props.theme.colors.mainColor};
  height: 100vh;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const Greeting = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 6rem;
`;

const Home = () => {
  const { searchParams } = useSearchParams();

  return (
    <HomePage>
      {searchParams.login === 'true' && <Login />}
      <Header />
      <Greeting>Welcome</Greeting>
    </HomePage>
  )
}

export default Home