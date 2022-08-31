import { ReactNode, createContext, useContext, useState }  from 'react'
import { Users } from '../generated/graphql';

type CarContextValue = {
  user: Users | undefined;
  setUser: React.Dispatch<React.SetStateAction<Users | undefined>>
}

type CarContextProviderProps = {
  children: ReactNode
}

const CarContext = createContext<CarContextValue>({
  user: undefined,
  setUser: () => {}
});

export const CarContextProvider = ({children}: CarContextProviderProps) => {
  const [user, setUser] = useState<Users>();

  return <CarContext.Provider value={{
    user,
    setUser
  }}>{children}</CarContext.Provider>
}

export function useCarContext() {
  return useContext(CarContext);
}