import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

import BrandModelDropdowns from '../components/BrandModelDropdowns';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import Error from '../components/Error';
import Spinner from '../components/Spinner';
import StateCityDropdowns from '../components/StateCityDropdowns';
import { useCreateCarMutation, useFormFieldsQuery } from '../generated/graphql';
import { formSchema } from '../utils/yupSchemas';

const ContainerCreateCar = styled.div`
  background: ${(props) => props.theme.gradient};
  width: 100%;
  min-height: 100%;
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const ContainerForm = styled.div`
  margin: 0px auto;
  width: 50rem;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
  flex: 1;
`;

const FormCreateCar = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
    border-radius: 5px;
    border-width: 0.1rem;
  }

  select {
    width: 100%;
    border-radius: 5px;
  }
`;

const Title = styled.h1`
  text-align: center;
  margin: 0;
  font-family: 'Dancing Script', sans-serif;
  font-size: 4rem;
`;

const Conditions = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export interface IFormInputs {
  title: string;
  brand: number;
  model: number;
  color: number;
  odometer: number;
  sale_date: string;
  state: number;
  city: number;
  year: number;
  price: number;
  condition: string;
  vin: string;
}

const CarForm = () => {
  const navigate = useNavigate();

  const methods = useForm<IFormInputs>({ resolver: yupResolver(formSchema) });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const {
    loading: fieldsLoading,
    data: fieldsData,
    error: fieldsError,
  } = useFormFieldsQuery();

  const [
    insertCarsOneMutation,
    { data: dataInsertCar, error: errorInsertCar, loading: loadingInsertCar },
  ] = useCreateCarMutation();

  useEffect(() => {
    if (dataInsertCar) {
      Swal.fire({
        icon: 'success',
        title: 'Car created',
        text: 'Car was created successfully',
      }).then(() => navigate('/dashboard'));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataInsertCar]);

  const onSubmit = (data: IFormInputs) => {
    const object = {
      batch: uuidv4(),
      title: data.title,
      brand_id: data.brand,
      model_id: data.model,
      color_id: data.color,
      odometer: data.odometer,
      sale_date: data.sale_date,
      city_id: data.city,
      state_id: data.state,
      year: data.year,
      price: data.price,
      condition: data.condition,
      vin: data.vin,
    };

    insertCarsOneMutation({
      variables: {
        object,
      },
      optimisticResponse: {
        insert_cars_one: {
          id: Number((Math.random() * 100).toFixed(0)),
          ...object,
        },
      },
      update(cache, { data }) {
        cache.modify({
          fields: {
            cars: (existingFieldsData) => {
              return [...existingFieldsData, data?.insert_cars_one];
            },
          },
          optimistic: true,
        });
      },
    });
  };

  if (fieldsError) {
    return (
      <ContainerCreateCar>
        <Error type="normalError">There was an error</Error>
      </ContainerCreateCar>
    );
  }

  return (
    <ContainerCreateCar>
      {fieldsLoading ? (
        <Spinner />
      ) : (
        <FormProvider {...methods}>
          <ContainerForm>
            <Title>Create Car</Title>
            <FormCreateCar>
              <div>
                <label>Title</label>
                <input type="text" {...register('title')} />
                {errors?.title?.message && (
                  <Error type="warningError">{errors?.title?.message}</Error>
                )}
              </div>

              <BrandModelDropdowns brands={fieldsData?.brands} />

              <Dropdown
                label="Color"
                fieldName="color"
                options={fieldsData?.colors}
              />

              <div>
                <label>Odometer</label>
                <input type="number" {...register('odometer')} />
                {errors?.odometer?.message && (
                  <Error type="warningError">{errors?.odometer?.message}</Error>
                )}
              </div>

              <div>
                <label>Sale Date</label>
                <input
                  type="date"
                  {...register('sale_date')}
                  min={moment().format('YYYY-MM-DD')}
                />
                {errors?.sale_date?.message && (
                  <Error type="warningError">Select a Date</Error>
                )}
              </div>

              <StateCityDropdowns states={fieldsData?.states} />

              <div>
                <label>Year</label>
                <input type="number" {...register('year')} />
                {errors?.year?.message && (
                  <Error type="warningError">{errors?.year?.message}</Error>
                )}
              </div>

              <div>
                <label>Price</label>
                <input type="number" min="0" {...register('price')} />
                {errors?.price?.message && (
                  <Error type="warningError">{errors?.price?.message}</Error>
                )}
              </div>

              <div>
                <label>Vin</label>
                <input type="text" {...register('vin')} />
                {errors?.vin?.message && (
                  <Error type="warningError">{errors?.vin?.message}</Error>
                )}
              </div>

              <div>
                <label>Condition</label>
                <Conditions>
                  <label htmlFor="A">
                    <input type="radio" value="A" {...register('condition')} />
                    Salvage Title
                  </label>

                  <label htmlFor="N">
                    <input
                      defaultChecked
                      type="radio"
                      value="N"
                      {...register('condition')}
                    />
                    New
                  </label>
                </Conditions>
              </div>
              <Button
                onClick={handleSubmit(onSubmit)}
                styleButton="SubmitForm"
                type="submit"
                disabled={loadingInsertCar}
              >
                {loadingInsertCar ? 'Loading...' : 'Create'}
              </Button>
            </FormCreateCar>
            {errorInsertCar && (
              <Error type="warningError">{errorInsertCar.message}</Error>
            )}
          </ContainerForm>
        </FormProvider>
      )}
    </ContainerCreateCar>
  );
};

export default CarForm;
