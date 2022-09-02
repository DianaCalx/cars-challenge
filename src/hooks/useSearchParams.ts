import { useSearchParams as useSearchParamsRRD } from 'react-router-dom';

export const useSearchParams = () => {
  const [search, setSearch] = useSearchParamsRRD();

  const searchParams = Object.fromEntries(search);

  const setSearchParam = (key: string, value: string) => {
    setSearch({ ...searchParams, [key]: value });
  }

  const removeSearchParam = (key: string) => {
    const newSearchParams = { ...searchParams };
    delete newSearchParams[key];
    setSearch({ ...newSearchParams });
  }

  return {
    searchParams,
    setSearchParam,
    removeSearchParam
  };
}