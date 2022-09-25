/* eslint-disable testing-library/no-wait-for-multiple-assertions */

/* eslint-disable testing-library/no-wait-for-side-effects */
import { MockedResponse } from '@apollo/client/testing';
import '@testing-library/jest-dom';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import {
  CitiesDocument,
  CreateCarDocument,
  FormFieldsDocument,
  ModelsDocument,
} from '../generated/graphql';
import {
  brandsDataTest,
  carCreateDataTest,
  citiesDataTest,
  colorsDataTest,
  modelsDataTest,
  resultCreateCarDataTest,
  statesDataTest,
} from '../test/dataTest';
import { render } from '../test/testProvider';
import CarForm from './CarForm';

const mocksFields: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: FormFieldsDocument,
    },
    result: {
      data: {
        brands: brandsDataTest,
        colors: colorsDataTest,
        states: statesDataTest,
      },
    },
  },
];

const mocksFieldsModels: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: FormFieldsDocument,
    },
    result: {
      data: {
        brands: brandsDataTest,
        colors: colorsDataTest,
        states: statesDataTest,
      },
    },
  },
  {
    request: {
      query: ModelsDocument,
      variables: {
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

const mocksFieldsStates: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: FormFieldsDocument,
    },
    result: {
      data: {
        brands: brandsDataTest,
        colors: colorsDataTest,
        states: statesDataTest,
      },
    },
  },
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

const mocksCreateCar: MockedResponse<Record<string, any>>[] = [
  {
    request: {
      query: FormFieldsDocument,
    },
    result: {
      data: {
        brands: brandsDataTest,
        colors: colorsDataTest,
        states: statesDataTest,
      },
    },
  },
  {
    request: {
      query: ModelsDocument,
      variables: {
        where: { brand_id: { _eq: 1 } },
      },
    },
    result: {
      data: {
        models: modelsDataTest,
      },
    },
  },
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
  {
    request: {
      query: CreateCarDocument,
      variables: {
        object: carCreateDataTest,
      },
    },
    result: {
      data: {
        insert_cars_one: resultCreateCarDataTest,
      },
    },
  },
];

describe('Test in CarForm Component', () => {
  it('Should show the select options', async () => {
    render(<CarForm />, mocksFields);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
    expect(await screen.findByText('Create Car')).toBeInTheDocument();
    expect(screen.getByTestId('select-option-Jeep')).toBeInTheDocument();
    expect(screen.getByTestId('select-option-Red')).toBeInTheDocument();
    expect(screen.getByTestId('select-option-UTAH')).toBeInTheDocument();
  });

  it('Should show an error message when you click on the Create Button', async () => {
    render(<CarForm />, mocksFields);

    expect(await screen.findByText('Create Car')).toBeInTheDocument();
    fireEvent.click(screen.getByText('Create'));
    expect(
      await screen.findByText('title must be at least 8 characters')
    ).toBeInTheDocument();
    expect(
      await screen.findByText('vin must be at least 8 characters')
    ).toBeInTheDocument();
    expect(await screen.findByText('Select a Date')).toBeInTheDocument();
    expect(await screen.findAllByText('Must be a number')).toHaveLength(3);
    expect(await screen.findAllByText('Select one option')).toHaveLength(5);
  });

  it('Should show the select brand and model options', async () => {
    render(<CarForm />, mocksFieldsModels);

    expect(await screen.findByText('Create Car')).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('select-brand'), {
      target: { value: 1 },
    });
    expect(screen.getByTestId('select-brand')).toHaveValue('1');

    await waitFor(() => {
      fireEvent.change(screen.getByTestId('select-model'), {
        target: { value: 1 },
      });
      expect(screen.getByTestId('select-model')).toHaveValue('1');
    });
  });

  it('Should show the select states and cities options', async () => {
    render(<CarForm />, mocksFieldsStates);

    expect(await screen.findByText('Create Car')).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('select-state'), {
      target: { value: 1 },
    });
    expect(screen.getByTestId('select-state')).toHaveValue('1');

    await waitFor(() => {
      fireEvent.change(screen.getByTestId('select-city'), {
        target: { value: 1 },
      });
      expect(screen.getByTestId('select-city')).toHaveValue('1');
    });
  });

  it('Should display a success message when a cart is created', async () => {
    render(<CarForm testBatch={carCreateDataTest.batch} />, mocksCreateCar);

    expect(await screen.findByText('Create Car')).toBeInTheDocument();

    fireEvent.change(screen.getByTestId('input-title'), {
      target: { value: 'Jeep Patriot 2022' },
    });

    fireEvent.change(screen.getByTestId('select-brand'), {
      target: { value: 1 },
    });

    await waitFor(() => {
      fireEvent.change(screen.getByTestId('select-model'), {
        target: { value: 1 },
      });
    });

    fireEvent.change(screen.getByTestId('select-color'), {
      target: { value: 1 },
    });

    fireEvent.change(screen.getByTestId('input-odometer'), {
      target: { value: '500' },
    });

    fireEvent.change(screen.getByTestId('input-sale-date'), {
      target: { value: '2022-10-08' },
    });

    fireEvent.change(screen.getByTestId('select-state'), {
      target: { value: 1 },
    });

    await waitFor(() => {
      fireEvent.change(screen.getByTestId('select-city'), {
        target: { value: 1 },
      });
    });

    fireEvent.change(screen.getByTestId('input-year'), {
      target: { value: '2022' },
    });

    fireEvent.change(screen.getByTestId('input-price'), {
      target: { value: '20000' },
    });

    fireEvent.change(screen.getByTestId('input-vin'), {
      target: { value: '1M8GDM9A_KP042700' },
    });

    await waitFor(() => {
      fireEvent.change(screen.getByTestId('select-model'), {
        target: { value: 1 },
      });
      expect(screen.getByTestId('select-model')).toHaveValue('1');
      fireEvent.change(screen.getByTestId('select-city'), {
        target: { value: 1 },
      });
      expect(screen.getByTestId('select-city')).toHaveValue('1');
      fireEvent.click(screen.getByText('Create'));
    });

    expect(
      await screen.findByText('Car was created successfully')
    ).toBeInTheDocument();
  });
});
