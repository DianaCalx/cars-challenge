import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import styled from 'styled-components';
import Button from './Button';

const FormFilter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 60%, rgba(0,95,255,1) 100%);
  padding: 0 2rem 2rem 1rem;
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
  min-width: 13rem;
  height: 3.5rem;
  padding: 0.5rem 1rem;
  font-size: 1.7rem;
  font-weight: bold;
  cursor: pointer;
  border: 2px solid ${props => props.theme.colors.darkColor};
  border-radius: 0.5rem;
  background: ${props => props.theme.colors.darkColor}; 

  &:hover{
    background: ${props => props.theme.colors.darkColor2};
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
        <Button StyledButton={ButtonSearch} type="submit" onClick={handleSubmit(onSubmit)}>Search Inventory</Button>
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