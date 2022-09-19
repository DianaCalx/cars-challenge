import { UseFormRegister } from 'react-hook-form';

import { Error, IFormInputs } from '../pages/CarForm';

type FormImputKeys = 'brand' | 'model' | 'color' | 'state' | 'city';

interface DropdownProps {
  label: string;
  fieldName: FormImputKeys;
  options:
    | {
        id: number;
        name: string;
      }[]
    | undefined;
  isError: boolean;
  register: UseFormRegister<IFormInputs>;
}

const Dropdown = ({
  label,
  fieldName,
  options = [],
  isError,
  register,
}: DropdownProps) => {
  return (
    <div>
      <label>{label}</label>
      <select {...register(fieldName)} disabled={!options.length}>
        <option value="">Select</option>
        {options.map(({ id, name }) => (
          <option key={`${id}-${name}`} value={id}>
            {name}
          </option>
        ))}
      </select>
      {isError && <Error>Select one option</Error>}
    </div>
  );
};

export default Dropdown;
