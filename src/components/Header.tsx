import styled from 'styled-components';
import { useAppContext } from '../context/appContext';
import useLocalStorage from '../hooks/useLocalStorage';
import { useNavigate, useLocation} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from './Button';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 2rem;
`;

const UserName = styled.p`
  margin: 0;
`;

const Buttons = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 1rem;
`;

const StyledButton = styled.button`
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
    <HeaderContainer>
      {user && <UserName>{`Welcome ${user.first_name} ${user.last_name}!`}</UserName>}
      <Buttons>
        { createButton && <Button StyledButton={StyledButton} onClick={() => navigate('/car-form')}>Create Car</Button>}
        { user && <Button StyledButton={StyledButton} onClick={() => navigate('/favorites')}>My Favorites</Button>}
        <Button StyledButton={StyledButton} onClick={() => navigate('/dashboard')}>Cars</Button>
        { user 
          ? <Button StyledButton={StyledButton} onClick={onSubmitLogout}>Logout</Button>
          : <Button StyledButton={StyledButton} onClick={()=> setIsLoginModalOpen(true)}>Login</Button>
        }       
    </Buttons>
    </HeaderContainer>
  )
}

export default Header