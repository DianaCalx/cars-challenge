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

const StyledButton = styled.button`
  min-width: 13rem;
  height: 4rem;
  padding: 0.5rem 1rem;
  font-size: 1.7rem;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.darkColor};
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.darkColor};

  &:hover {
    background: ${(props) => props.theme.colors.darkColor2};
  }
`;

const LogButton = styled.button`
  min-width: 13rem;
  height: 4rem;
  padding: 0.5rem 1rem;
  font-size: 1.7rem;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid ${(props) => props.theme.colors.successColor};
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.successColor};
  color: white;

  &:hover {
    background: ${(props) => props.theme.colors.successColor2};
  }
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
        <UserName>{`Welcome ${user.first_name} ${user.last_name}!`}</UserName>
      )}
      <Buttons>
        {pathname === '/dashboard' && (
          <Button
            StyledButton={StyledButton}
            onClick={() => navigate('/car-form')}
          >
            Create Car
          </Button>
        )}
        {user && (
          <Button
            StyledButton={StyledButton}
            onClick={() => navigate('/favorites')}
          >
            My Favorites
          </Button>
        )}
        <Button
          StyledButton={StyledButton}
          onClick={() => navigate('/dashboard')}
        >
          Cars
        </Button>
        {user ? (
          <Button StyledButton={LogButton} onClick={onSubmitLogout}>
            Logout
          </Button>
        ) : (
          <Button
            StyledButton={LogButton}
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
