import { useSearchParams } from '../hooks/useSearchParams';
import styled from 'styled-components';

const HomePage = styled.div`
  background-color: ${props => props.theme.colors.mainColor};
  height: 100vh;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`
const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.secondaryColor};
  border: 1px solid black;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
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
  const { searchParams, setSearchParam } = useSearchParams();

  return (
    <HomePage>
      {searchParams.login === 'true' && <div>Login</div>}
      <Buttons>
        <Button>Cars</Button>
        <Button onClick={() => setSearchParam('login', 'true')}>Login</Button>
      </Buttons>
      <Greeting>Welcome</Greeting>
    </HomePage>
  )
}

export default Home