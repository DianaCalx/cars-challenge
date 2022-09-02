import { ReactNode, createContext, useContext, useState }  from 'react';
import { Users } from '../generated/graphql';

type AppContextValue = {
  user: Users | undefined;
  isLoginModalOpen: boolean;
  setUser: React.Dispatch<React.SetStateAction<Users | undefined>>;
  setIsLoginModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

type AppContextProviderProps = {
  children: ReactNode
}

const AppContext = createContext<AppContextValue>({
  user: undefined,
  isLoginModalOpen: false,
  setUser: () => {},
  setIsLoginModalOpen: () => {},
});

export const AppContextProvider = ({children}: AppContextProviderProps) => {
  const [user, setUser] = useState<Users>();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  return <AppContext.Provider value={{
    user,
    isLoginModalOpen,
    setUser,
    setIsLoginModalOpen
  }}>{children}</AppContext.Provider>
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if(!context) {
    throw new Error("Context cannot be reached");
    
  }
  return context;
}