import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

import { useModelsLazyQuery } from '../generated/graphql';
import Dropdown from './Dropdown';

interface DropdownProps {
  brands:
    | {
        id: number;
        name: string;
      }[]
    | undefined;
}

const BrandModelDropdowns = ({ brands }: DropdownProps) => {
  const { watch } = useFormContext();
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
      <Dropdown label="Brand" fieldName="brand" options={brands} />
      <Dropdown label="Model" fieldName="model" options={modelsData?.models} />
    </>
  );
};

export default BrandModelDropdowns;
