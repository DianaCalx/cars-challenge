import { ReactNode, createContext, useContext }  from 'react'

type CarContextProviderProps = {
  children: ReactNode
}

const CarContext = createContext({});

export const CarContextProvider = ({children}: CarContextProviderProps) => {
  return <CarContext.Provider value={{}}>{children}</CarContext.Provider>
}

export function useCarContext() {
  return useContext(CarContext);
}