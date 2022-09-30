import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks';
import { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { act } from 'react-test-renderer';

import { useSearchParams } from './useSearchParams';

const Wrapper = ({ children }: { children: ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

describe('Test useSearchParams hook', () => {
  it('Test searchParams and setSearchParam', () => {
    const { result } = renderHook(() => useSearchParams(), {
      wrapper: Wrapper,
    });

    const { setSearchParam } = result.current;

    act(() => {
      setSearchParam({ orderBy: 'desc' });
    });

    expect(result.current.searchParams.orderBy).toBe('desc');
  });
});
