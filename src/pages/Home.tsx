import { useAppContext } from '../context/appContext';
import Login from '../components/Login';
import Header from '../components/Header';
import styled from 'styled-components';

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
  font-weight: bold;
  font-size: 9rem;
  font-family: "Dancing Script", sans-serif;
  color: white;
`;

const Home = () => {
  const { isLoginModalOpen } = useAppContext();

  return (
    <HomePage>
      { isLoginModalOpen  && <Login />}
      <Header />
      <Greeting>Welcome</Greeting>
    </HomePage>
  )
}

export default Home