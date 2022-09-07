import { useCallback } from 'react';

const useLocalStorage = () => {
  const getLocalStorage = useCallback((key: string) => {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key) || '')
    }
    return undefined;
  }, []);

  const setLocalStorage = useCallback(function setItem<T>(key: string, newData: T) {
    localStorage.setItem(key, JSON.stringify(newData))
  }, []);

  const removeLocalStorage = useCallback((key: string) => {
    localStorage.removeItem(key);
  }, []);

  return {
    getLocalStorage,
    setLocalStorage,
    removeLocalStorage
  }
}

export default useLocalStorage;
