import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks'
import { getCondition } from './getCondition';

describe('Test getCondition function', () => {
  it('Test send letters to getCondition function', () => {
    const {result: resultTest1 } = renderHook(() => getCondition('N'));
    expect(resultTest1.current).toBe('New');

    const {result: resultTest2 } = renderHook(() => getCondition('A'));
    expect(resultTest2.current).toBe('Salvage Title');
    
    const { result: resultTest3 } = renderHook(() => getCondition('X'));
    expect(resultTest3.current).toBe('N/A');
  });
});