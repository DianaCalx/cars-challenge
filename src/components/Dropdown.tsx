import { UseFormRegister } from "react-hook-form";
import { FormImputKeys, IFormInputs, Error } from "../pages/CarForm";

interface DropdownProps {
  label: string;
  fieldName: FormImputKeys;
  options: {
    id: number,
    name: string,
  }[],
  isError: boolean;
  register: UseFormRegister<IFormInputs>;
}

const Dropdown = ({ label, fieldName, options, isError, register }: DropdownProps) => {
  return (
    <div>
      <label>{label}</label>
      <select {...register(fieldName)}>
        <option value="">Select</option>
        {options.map(({ id, name }) => 
          <option key={`${id}-${name}`} value={id}>{name}</option>)
        }
      </select>
      {isError && <Error>Select one option</Error>}
    </div> 
  )
}

export default Dropdown