import { useForm } from 'react-hook-form';
import { useFormFieldsQuery, useCreateCarMutation } from '../generated/graphql';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from "@hookform/resolvers/yup";
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import Button from '../components/Button';
import Spinner from '../components/Spinner';
import Swal from 'sweetalert2';
import moment from 'moment'
import { formSchema } from '../utils/yupSchemas';

const ContainerCreateCar = styled.div`
    background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 60%, rgba(0,95,255,1) 100%);
    width: 100%;
    min-height: 100%;
    padding: 1rem 0;
    display: flex;
    align-items: center;
`;

const ContainerForm = styled.div`
  margin: 0px auto;
  width: 50rem;
  background-color: white;
  border-radius: 1rem;
  padding: 2rem;
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
  font-family: "Dancing Script", sans-serif;
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
  background-color: ${props => props.theme.colors.successColor};
  :hover {
    background-color: ${props => props.theme.colors.successColor2};
  }
  :disabled {
    cursor: not-allowed;
    background-color: #ccc;
  }
`;

const Error = styled.p`
  margin: 0;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.errorColorLight};
`;
interface IFormInputs {
  title: string
  brand: number
  model: number
  color: number
  odometer: number
  sale_date: string
  state: number
  city: number
  year: number
  price: number
  condition: string
  vin: string
}

interface Fields {
  brands: {
    id: number,
    name: string,
  }[],
  selectedBrand?: number
  models: {
    id: number,
    name: string,
    brand_id: number
  }[],
  colors: {
    id: number,
    name: string
  }[],
  states: {
    id: number,
    name: string,
  }[],
  selectedState?: number
  cities: {
    id: number,
    name: string,
    state_id: number
  }[]
}

const CarForm = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInputs>({resolver: yupResolver(formSchema)});
  const [insertCarsOneMutation, { data: dataInsertCar, error: errorInsertCar, loading: loadingInsertCar }]= useCreateCarMutation();
  const { loading: fieldsLoading, data: fieldsData, error: fieldsError } = useFormFieldsQuery();
  const [fields, setFields] = useState<Fields>({
    brands: [],
    models: [],
    colors: [],
    states: [],
    cities: []
  });

  useEffect(() => {
    if(fieldsData) {
      setFields({ ...fieldsData });
    }
  }, [fieldsData]);

  useEffect(() => {
    if(dataInsertCar){
      Swal.fire({
        icon: 'success',
        title: 'Car created',
        text: 'Car was created successfully'
      }).then( () => navigate('/dashboard'));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataInsertCar]);
  

  const onSubmit = (data:IFormInputs) => {
    insertCarsOneMutation({
      variables: {
        object:{
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
          vin: data.vin
        }
      }
    })
  };

  return (
    <ContainerCreateCar>
      {fieldsLoading
        ? <Spinner />
        : <ContainerForm>
            <Title>Create Car</Title>
            <FormCreateCar>
              <div>
                <label>Title</label>
                <input type="text" {...register('title')}/>
                {errors?.title?.message && <Error>{errors?.title?.message}</Error>}
              </div>

              <div>
                <label>Brand</label>
                <select {...register('brand', { onChange: e => {
                  setFields({...fields, selectedBrand: Number(e.target.value)})
                }})}>
                  <option value="">Select</option>
                  {fields?.brands.map(brand => 
                  <option value={brand.id}>{brand.name}</option>)}
                </select>
                {errors?.brand?.message && <Error>Select one option</Error>}
              </div>
            
              <div>
                <label>Model</label>
                <select {...register('model')}>
                  <option value="">Select</option>
                  {fields.models.filter(model => model.brand_id === fields.selectedBrand).map(model => 
                  <option value={model.id}>{model.name}</option>)}
                </select>
                {errors?.model?.message && <Error>Select one option</Error>}
              </div>        
            
              <div>
                <label>Color</label>
                <select {...register('color')}>
                  <option value="">Select</option>
                  {fields.colors.map(color => <option value={color.id}>{color.name}</option>)}
                </select>
                {errors?.color?.message && <Error>Select one option</Error>}
              </div>
                        
              <div>
                <label>Odometer</label>
                <input type="number" {...register('odometer')}/>
                {errors?.odometer?.message && <Error>{errors?.odometer?.message}</Error>}
              </div>
            
              <div>
                <label>Sale Date</label>
                <input type="date" {...register('sale_date')} min={moment().format('YYYY-MM-DD')}/>
                {errors?.sale_date?.message && <Error>Select a Date</Error>}
              </div>
              
              <div>
                <label>State</label>
                <select {...register('state', { onChange: e => {
                  setFields({...fields, selectedState: Number(e.target.value)})
                }})}>
                  <option value="">Select</option>
                  {fields.states.map(state => <option value={state.id}>{state.name}</option>)}
                </select>
                {errors?.state?.message && <Error>Select one Option</Error>}
              </div>
            
              <div>
                <label>City</label>
                <select {...register('city')}>
                  <option value="">Select</option>
                  {fields.cities.filter(city => city.state_id === fields.selectedState).map(city => <option value={city.id}>{city.name}</option>)}
                </select>
                {errors?.city?.message && <Error>Select one Option</Error>}
              </div>

              <div>
                <label>Year</label>
                <input type="number" {...register('year')}/>
                {errors?.year?.message && <Error>{errors?.year?.message}</Error>}
              </div>

              <div>
                <label>Price</label>
                <input type="number" {...register('price')}/>
                {errors?.price?.message && <Error>{errors?.price?.message}</Error>}
              </div>

              <div>
                <label>Vin</label>
                <input type="text" {...register('vin')}/>
                {errors?.vin?.message && <Error>{errors?.vin?.message}</Error>}
              </div>
              
              <div>
                <label>Condition</label>
                  <Conditions>
                    <label htmlFor="A">
                      <input 
                        type="radio"
                        value="A"
                        {...register('condition')}
                      />
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
              <Button onClick={handleSubmit(onSubmit)} StyledButton={Submit} type="submit" disabled={loadingInsertCar}>
                {loadingInsertCar ? 'Loading...' : 'Create'}
              </Button>
            </FormCreateCar>
            {errorInsertCar && <Error>There was an error creating car</Error>}
          </ContainerForm>
      }
    </ContainerCreateCar>

  )
}

export default CarForm