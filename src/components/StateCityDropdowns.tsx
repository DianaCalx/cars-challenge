import { useEffect } from "react";
import { UseFormRegister, UseFormWatch } from "react-hook-form";
import { useCitiesLazyQuery } from "../generated/graphql";
import { IFormInputs } from "../pages/CarForm";
import Dropdown from './Dropdown';

interface DropdownProps {
  states: {
    id: number,
    name: string,
  }[] | undefined;
  isErrorState: boolean;
  isErrorCity: boolean;
  register: UseFormRegister<IFormInputs>;
  watch: UseFormWatch<IFormInputs>
}

const BrandModelDropdowns = ({states, isErrorState,isErrorCity, register, watch}: DropdownProps) => {
  
  const [fetchCities, { data: citiesData }] = useCitiesLazyQuery();
  const selectedState = watch('state');

  useEffect(() => {
    fetchCities({
      variables: {
        where: {
          state_id: {
            _eq: selectedState ? Number(selectedState) : null
          }
        }
      }
    });    
  }, [fetchCities, selectedState]);
  
  return (
    <>
      <Dropdown
        label='State'
        fieldName='state'
        options={states}
        isError={isErrorState}
        register={register}
      />

      <Dropdown
        label='City'
        fieldName='city'
        options={citiesData?.cities}
        isError={isErrorCity}
        register={register}
      />
    </>
  )
}

export default BrandModelDropdowns