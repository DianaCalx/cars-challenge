import { MockedResponse } from '@apollo/client/testing';
import { yupResolver } from '@hookform/resolvers/yup';
import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { CitiesDocument } from '../generated/graphql';
import { IFormInputs } from '../pages/car-form';
import { citiesDataTest, statesDataTest } from '../test/data-test';
import { render } from '../test/test-provider';
import { formSchema } from '../utils/yupSchemas';
import StateCityDropdowns from './state-city-dropdowns';

const mocksCities: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: CitiesDocument,
      variables: {
        where: { state_id: { _eq: 1 } },
      },
    },
    result: {
      data: {
        cities: citiesDataTest,
      },
    },
  },
];

describe('Test StateCityDropdowns Component', () => {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    const formMethods = useForm<IFormInputs>({
      resolver: yupResolver(formSchema),
    });
    return <FormProvider {...formMethods}>{children}</FormProvider>;
  };

  render(
    <Wrapper>
      <StateCityDropdowns states={statesDataTest} />
    </Wrapper>,
    mocksCities
  );

  it('Should show the select options', async () => {
    expect(screen.getByText(`${statesDataTest[0].name}`)).toBeInTheDocument();
    fireEvent.change(screen.getByTestId('select-state'), {
      target: { value: 1 },
    });
    await waitFor(() => {
      expect(screen.getByText(`${citiesDataTest[0].name}`)).toBeInTheDocument();
    });
  });
});
