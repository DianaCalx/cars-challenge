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
  setUser: React.Dispatch<React.SetStateAction<Users | undefined>>;
  setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type AppContextProviderProps = {
  children: ReactNode;
};

const AppContext = createContext<AppContextValue>({
  user: undefined,
  isLoginModalOpen: false,
  setUser: () => {},
  setIsLoginModalOpen: () => {},
});

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const [user, setUser] = useState<Users>();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);
  const [execute, { loading, data, error }] = useUserLazyQuery();
  const { getLocalStorage, removeLocalStorage } = useLocalStorage();

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
        user,
        isLoginModalOpen,
        setUser,
        setIsLoginModalOpen,
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
