import { useSearchParams } from '../hooks/useSearchParams';
import styled from 'styled-components';
import { useCarContext } from '../context/carContext';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate } from 'react-router-dom';

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
`;

const Button = styled.button`
  background-color: ${props => props.theme.colors.darkColor};
  letter-spacing: 0.1rem;
  color: white;
  border: 1px solid black;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
`;

const Header = () => {
  const { setSearchParam} = useSearchParams();
  const { user, setUser } = useCarContext();
  const { removeLS } = useLocalStorage('user');
  const navigate = useNavigate();

  const onSubmitLogout = () => {
    removeLS();
    setUser(undefined);
  }

  return (
    <Buttons>
      { user && <Button>My Favorites</Button>}
      <Button onClick={() => navigate('/dashboard')}>Cars</Button>
      { user 
        ? <Button onClick={onSubmitLogout}>Logout</Button>
        : <Button onClick={() => setSearchParam('login', 'true')}>Login</Button>
      }       
    </Buttons>
  )
}

export default Header