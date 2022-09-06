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


const Filters = () => {
  return (
    <FormFilter>
      <SearchBarContainer>
        <Filter type="text"></Filter>
        <Button StyledButton={ButtonSearch} onClick={()=>{}}>Search</Button>
      </SearchBarContainer>
      <select>
        <option value="0">Select</option>
        <option value="1">Sale date decreasing</option>
        <option value="2">Sale date increasing</option>
      </select>
    </FormFilter>
  )
}

export default Filters