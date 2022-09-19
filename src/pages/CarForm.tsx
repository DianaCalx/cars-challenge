import { yupResolver } from '@hookform/resolvers/yup';
import moment from 'moment';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { v4 as uuidv4 } from 'uuid';

import BrandModelDropdowns from '../components/BrandModelDropdowns';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
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

const Submit = styled.button`
  height: 3rem;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
  border-radius: 0.5rem;
  border: none;
  background-color: ${(props) => props.theme.colors.successColor};
  :hover {
    background-color: ${(props) => props.theme.colors.successColor2};
  }
  :disabled {
    cursor: not-allowed;
    background-color: #ccc;
  }
`;

export const Error = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.errorColorLight};
`;

const ErrorForm = styled.p`
  margin: 0 auto;
  font-size: 2rem;
  color: white;
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

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<IFormInputs>({ resolver: yupResolver(formSchema) });

  const {
    loading: fieldsLoading,
    data: fieldsData,
    error: fieldsError,
  } = useFormFieldsQuery();

  const [
    insertCarsOneMutation,
    { data: dataInsertCar, error: errorInsertCar, loading: loadingInsertCar },
  ] = useCreateCarMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          cars: (existingFieldsData) => {
            return [...existingFieldsData, data?.insert_cars_one];
          },
        },
      });
    },
  });

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
    });
  };

  if (fieldsError) {
    return (
      <ContainerCreateCar>
        <ErrorForm>There was an error</ErrorForm>
      </ContainerCreateCar>
    );
  }

  return (
    <ContainerCreateCar>
      {fieldsLoading ? (
        <Spinner />
      ) : (
        <ContainerForm>
          <Title>Create Car</Title>
          <FormCreateCar>
            <div>
              <label>Title</label>
              <input type="text" {...register('title')} />
              {errors?.title?.message && (
                <Error>{errors?.title?.message}</Error>
              )}
            </div>

            <BrandModelDropdowns
              brands={fieldsData?.brands}
              isErrorBrand={!!errors?.brand?.message}
              isErrorModel={!!errors?.model?.message}
              register={register}
              watch={watch}
            />

            <Dropdown
              label="Color"
              fieldName="color"
              options={fieldsData?.colors}
              isError={!!errors?.color?.message}
              register={register}
            />

            <div>
              <label>Odometer</label>
              <input type="number" {...register('odometer')} />
              {errors?.odometer?.message && (
                <Error>{errors?.odometer?.message}</Error>
              )}
            </div>

            <div>
              <label>Sale Date</label>
              <input
                type="date"
                {...register('sale_date')}
                min={moment().format('YYYY-MM-DD')}
              />
              {errors?.sale_date?.message && <Error>Select a Date</Error>}
            </div>

            <StateCityDropdowns
              states={fieldsData?.states}
              isErrorState={!!errors?.state?.message}
              isErrorCity={!!errors?.city?.message}
              register={register}
              watch={watch}
            />

            <div>
              <label>Year</label>
              <input type="number" {...register('year')} />
              {errors?.year?.message && <Error>{errors?.year?.message}</Error>}
            </div>

            <div>
              <label>Price</label>
              <input type="number" min="0" {...register('price')} />
              {errors?.price?.message && (
                <Error>{errors?.price?.message}</Error>
              )}
            </div>

            <div>
              <label>Vin</label>
              <input type="text" {...register('vin')} />
              {errors?.vin?.message && <Error>{errors?.vin?.message}</Error>}
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
              StyledButton={Submit}
              type="submit"
              disabled={loadingInsertCar}
            >
              {loadingInsertCar ? 'Loading...' : 'Create'}
            </Button>
          </FormCreateCar>
          {errorInsertCar && <Error>{errorInsertCar.message}</Error>}
        </ContainerForm>
      )}
    </ContainerCreateCar>
  );
};

export default CarForm;
