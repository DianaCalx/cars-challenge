import { useSearchParams as useSearchParamsRRD } from 'react-router-dom';

interface searchParams {
  [key: string]: string
}

export const useSearchParams = () => {
  const [search, setSearch] = useSearchParamsRRD();

  const searchParams = Object.fromEntries(search);

  const setSearchParam = (params: searchParams) => {
    const newParams = { ...searchParams, ...params };

    for (let propName in newParams) { 
      if (!newParams[propName]) {
        delete newParams[propName];
      }
    }

    setSearch(newParams);
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