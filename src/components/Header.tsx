import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useAppContext } from '../context/appContext';
import useLocalStorage from '../hooks/useLocalStorage';
import Button from './Button';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const UserName = styled.p`
  margin: 0;
  color: white;
  font-size: 1.8rem;
`;

const Buttons = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  gap: 1rem;
`;

const Header = () => {
  const { pathname } = useLocation();
  const { user, setUser, setIsLoginModalOpen } = useAppContext();
  const { removeLocalStorage } = useLocalStorage();
  const navigate = useNavigate();

  const onSubmitLogout = () => {
    removeLocalStorage('user');
    setUser(undefined);
  };

  return (
    <HeaderContainer>
      {user && (
        <UserName
          data-testid={'greeting-user'}
        >{`Welcome ${user.first_name} ${user.last_name}!`}</UserName>
      )}
      <Buttons>
        {pathname === '/dashboard' && (
          <Button
            styleButton="PrimaryButton"
            onClick={() => navigate('/car-form')}
          >
            Create Car
          </Button>
        )}
        {user && (
          <Button
            styleButton="PrimaryButton"
            onClick={() => navigate('/favorites')}
          >
            My Favorites
          </Button>
        )}
        <Button
          styleButton="PrimaryButton"
          onClick={() => navigate('/dashboard')}
        >
          Cars
        </Button>
        {user ? (
          <Button styleButton="SecondaryButton" onClick={onSubmitLogout}>
            Logout
          </Button>
        ) : (
          <Button
            styleButton="SecondaryButton"
            onClick={() => setIsLoginModalOpen(true)}
          >
            Login
          </Button>
        )}
      </Buttons>
    </HeaderContainer>
  );
};

export default Header;
