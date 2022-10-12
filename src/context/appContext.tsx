/* eslint-disable */  
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

import { Users, useUserLazyQuery } from '../generated/graphql';
import useLocalStorage from '../hooks/useLocalStorage';

type AppContextValue = {
  user: Users | undefined;
  isLoginModalOpen: boolean;
  loginUser: Function;
  logoutUser: Function;
  openLoginModal: Function;
  closeLoginModal: Function;
};

type AppContextProviderProps = {
  children: ReactNode;
  testUser?: Users;
};

const AppContext = createContext<AppContextValue>({
  user: undefined,
  isLoginModalOpen: false,
  loginUser: () => {},
  logoutUser: () => {},
  openLoginModal: () => {},
  closeLoginModal: () => {},
});

export const AppContextProvider = ({
  children,
  testUser,
}: AppContextProviderProps) => {
  const [user, setUser] = useState<Users>();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [execute, { loading, data, error }] = useUserLazyQuery();
  const { getLocalStorage, removeLocalStorage } = useLocalStorage();

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const loginUser = (user: Users) => {
    setUser(user);
  };

  const logoutUser = () => {
    setUser(undefined);
  };

  useEffect(() => {
    const userLocalStorage = getLocalStorage('user');
    if (userLocalStorage && !user) {
      execute({
        variables: {
          where: {
            email: {
              _eq: userLocalStorage.email,
            },
          },
        },
      });
    }
  }, [execute, getLocalStorage, user]);

  useEffect(() => {
    if (data?.users?.length && !loading && !error) {
      setUser(data.users.at(0));
    }
    if ((data && !data?.users?.length) || error) {
      removeLocalStorage('user');
    }
  }, [data, error, loading, removeLocalStorage]);

  return (
    <AppContext.Provider
      value={{
        user: testUser ?? user,
        isLoginModalOpen,
        loginUser,
        logoutUser,
        closeLoginModal,
        openLoginModal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('Context cannot be reached');
  }
  return context;
};
