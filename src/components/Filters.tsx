import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styled from 'styled-components';
import Button from './Button';

const FormFilter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  gap: 2rem;
`;

const SearchBarContainer = styled.div`
  display: flex;
  flex: 1;
`;

const Filter = styled.input`
  flex: 1;
  border-radius: 0.5rem;
  border-style: none;
  margin-right: 0.5rem;
`;

const ButtonSearch = styled.button`
  background-color: blue;
  min-width: 13rem;
  height: 3rem;
  font-size: 1.7rem;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.darkColor};
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.mainColor}; 
  color: ${props => props.theme.colors.darkColor2}; 

  &:hover{
    background: ${props => props.theme.colors.darkColor};
    color: white;
  }
`;

export interface FilterFormInputs {
  search?: string
  sale_date?: string
}

interface FiltersProps {
  setFilters: React.Dispatch<React.SetStateAction<FilterFormInputs | undefined>>
}

const schema = Yup.object().shape({
  search: Yup.string(),
  sale_date: Yup.string(),
});

const Filters = ({ setFilters }: FiltersProps) => {

  const { register, handleSubmit, formState: { errors } } = useForm<FilterFormInputs>({resolver: yupResolver(schema)});

  const onSubmit = (data: FilterFormInputs) => {
    setFilters(data);
  };

  return (
    <FormFilter>
      <SearchBarContainer>
        <Filter type="text" {...register("search")} ></Filter>
        <Button StyledButton={ButtonSearch} type="submit" onClick={handleSubmit(onSubmit)}>Search</Button>
      </SearchBarContainer>
      <select {...register("sale_date", { onChange: handleSubmit(onSubmit)}) } >
        <option value="">Select</option>
        <option value="desc">Sale date decreasing</option>
        <option value="asc">Sale date increasing</option>
      </select>
    </FormFilter>
  )
}

export default Filters