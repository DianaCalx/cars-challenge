import { MockedResponse } from '@apollo/client/testing';
import { yupResolver } from '@hookform/resolvers/yup';
import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { ModelsDocument } from '../generated/graphql';
import { IFormInputs } from '../pages/car-form';
import { brandsDataTest, modelsDataTest } from '../test/data-test';
import { render } from '../test/test-provider';
import { formSchema } from '../utils/yupSchemas';
import BrandModelDropdowns from './brand-model-dropdowns';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mocksModels: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: ModelsDocument,
      variables: {
        // eslint-disable-next-line camelcase
        where: { brand_id: { _eq: 1 } },
      },
    },
    result: {
      data: {
        models: modelsDataTest,
      },
    },
  },
];

describe('Test BrandModelDropdown Component', () => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    const formMethods = useForm<IFormInputs>({
      resolver: yupResolver(formSchema),
    });
    return <FormProvider {...formMethods}>{children}</FormProvider>;
  };

  render(
    <Wrapper>
      <BrandModelDropdowns brands={brandsDataTest} />
    </Wrapper>,
    mocksModels
  );

  it('Should show the select options', async () => {
    expect(screen.getByText(`${brandsDataTest[0].name}`)).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('select-brand'), {
      target: { value: 1 },
    });
    await waitFor(() => {
      expect(screen.getByText(`${modelsDataTest[0].name}`)).toBeInTheDocument();
    });
  });
});
