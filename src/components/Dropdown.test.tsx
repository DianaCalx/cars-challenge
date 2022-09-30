import { yupResolver } from '@hookform/resolvers/yup';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { IFormInputs } from '../pages/CarForm';
import { colorsDataTest } from '../test/dataTest';
import { formSchema } from '../utils/yupSchemas';
import Dropdown from './Dropdown';

describe('Test Dropdown Component', () => {
  it('Should show the select options', () => {
    const Wrapper = ({ children }: { children: ReactNode }) => {
      const formMethods = useForm<IFormInputs>({
        resolver: yupResolver(formSchema),
      });
      return <FormProvider {...formMethods}>{children}</FormProvider>;
    };

    render(
      <Wrapper>
        <Dropdown label="Brand" fieldName="brand" options={colorsDataTest} />
      </Wrapper>
    );

    expect(screen.getByText('Brand')).toBeInTheDocument();
  });
});
