import { useSearchParams as useSearchParamsRRD } from 'react-router-dom';

interface searchParams {
  [key: string]: string
}

export const useSearchParams = () => {
  const [search, setSearch] = useSearchParamsRRD();

  const searchParams = Object.fromEntries(search);

  const setSearchParameter = (params: searchParams) => {
    const newParams = { ...searchParams, ...params };

    for (const propertyName in newParams) { 
      if (!newParams[propertyName]) {
        delete newParams[propertyName];
      }
    }

    setSearch(newParams);
  }

  return {
    searchParams,
    setSearchParam: setSearchParameter
  };
}