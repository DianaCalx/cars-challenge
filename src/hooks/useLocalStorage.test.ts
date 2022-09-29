import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks'
import useLocalStorage from './useLocalStorage';

describe('Test useLocalStorage hook', () => {
  it('Test get and set of LocalStorage hook', () => {
    const { result } = renderHook(() => useLocalStorage());
    const { getLocalStorage, setLocalStorage } = result.current;
  
    setLocalStorage('test key', 'test value');
    const response = getLocalStorage('test key');

    expect(response).toBe('test value');
  });

  it('Test remove of LocalStorage hook', () => {
    const { result } = renderHook(() => useLocalStorage());
    const { getLocalStorage, setLocalStorage, removeLocalStorage } = result.current;
  
    setLocalStorage('test key', 'test value');
    const response = getLocalStorage('test key');
    expect(response).toBe('test value');

    removeLocalStorage('test key');
    const responseAfterRemove = getLocalStorage('test key');
    
    expect(responseAfterRemove).toBeUndefined();
  });
});
