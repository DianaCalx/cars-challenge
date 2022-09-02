import styled from 'styled-components';
import { useAppContext } from '../context/appContext';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';

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

  const [createButton, setCreateButton] = useState<boolean>(false);
  const {pathname} = useLocation();
  const { user, setUser, setIsLoginModalOpen } = useAppContext();
  const { removeLocalStorage } = useLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    if(pathname === '/dashboard'){
      setCreateButton(true);
    }
  
    return () => {
      setCreateButton(false);
    }
  }, [pathname]);
  

  const onSubmitLogout = () => {
    removeLocalStorage('user');
    setUser(undefined);
  }

  return (
    <Buttons>
      { createButton && <Button onClick={() => navigate('/car-form')}>Create</Button>}
      { user && <Button>My Favorites</Button>}
      <Button onClick={() => navigate('/dashboard')}>Cars</Button>
      { user 
        ? <Button onClick={onSubmitLogout}>Logout</Button>
        : <Button onClick={()=> setIsLoginModalOpen(true)}>Login</Button>
      }       
    </Buttons>
  )
}

export default Header