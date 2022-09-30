import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { useCitiesLazyQuery } from '../generated/graphql';
import Dropdown from './Dropdown';

interface DropdownProps {
  states:
    | {
        id: number;
        name: string;
      }[]
    | undefined;
}

const StateCityDropdowns = ({ states }: DropdownProps) => {
  const { watch } = useFormContext();
  const [fetchCities, { data: citiesData }] = useCitiesLazyQuery();
  const selectedState = watch('state');

  useEffect(() => {
    if (selectedState) {
      fetchCities({
        variables: {
          where: {
            state_id: {
              _eq: Number(selectedState),
            },
          },
        },
      });
    }
  }, [fetchCities, selectedState]);

  return (
    <>
      <Dropdown label="State" fieldName="state" options={states} />
      <Dropdown label="City" fieldName="city" options={citiesData?.cities} />
    </>
  );
};

export default StateCityDropdowns;
