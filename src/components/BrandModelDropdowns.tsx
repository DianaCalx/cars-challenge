import { useEffect } from 'react';
import { UseFormRegister, UseFormWatch } from 'react-hook-form';

import { useModelsLazyQuery } from '../generated/graphql';
import { IFormInputs } from '../pages/CarForm';
import Dropdown from './Dropdown';

interface DropdownProps {
  brands:
    | {
        id: number;
        name: string;
      }[]
    | undefined;
  isErrorBrand: boolean;
  isErrorModel: boolean;
  register: UseFormRegister<IFormInputs>;
  watch: UseFormWatch<IFormInputs>;
}

const BrandModelDropdowns = ({
  brands,
  isErrorBrand,
  isErrorModel,
  register,
  watch,
}: DropdownProps) => {
  const [fetchModels, { data: modelsData }] = useModelsLazyQuery();
  const selectedBrand = watch('brand');

  useEffect(() => {
    if (selectedBrand) {
      fetchModels({
        variables: {
          where: {
            brand_id: {
              _eq: Number(selectedBrand),
            },
          },
        },
      });
    }
  }, [fetchModels, selectedBrand]);

  return (
    <>
      <Dropdown
        label="Brand"
        fieldName="brand"
        options={brands}
        isError={isErrorBrand}
        register={register}
      />

      <Dropdown
        label="Model"
        fieldName="model"
        options={modelsData?.models}
        isError={isErrorModel}
        register={register}
      />
    </>
  );
};

export default BrandModelDropdowns;
