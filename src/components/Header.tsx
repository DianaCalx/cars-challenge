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
  margin-bottom: 2rem;
`;


const Button = styled.button`
  min-width: 13rem;
  height: 4rem;
  padding: 0.5rem 1rem;
  font-size: 1.7rem;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.darkColor};
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.mainColor}; 

  &:hover{
    background: ${props => props.theme.colors.darkColor};
    color: white;
  }
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
      { createButton && <Button onClick={() => navigate('/car-form')}>Create Car</Button>}
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