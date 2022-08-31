import { useCallback } from 'react';

const useLocalStorage = (key: string) => {
  const getLS = useCallback(() => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key) || '')
    }
    return undefined;
  }, [key]);

  const setLS = useCallback(function setItem<T>(newData: T) {
    localStorage.setItem(key, JSON.stringify(newData))
  }, [key]);

  const removeLS = useCallback(() => {
    localStorage.removeItem(key);
  }, [key]);

  return {
    getLS,
    setLS,
    removeLS
  }
}

export default useLocalStorage;
