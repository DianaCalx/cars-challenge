import { useFormContext } from 'react-hook-form';

import Error from '../components/Error';

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
}

const Dropdown = ({ label, fieldName, options = [] }: DropdownProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

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
      {errors[fieldName]?.message && (
        <Error type="warningError">Select one option</Error>
      )}
    </div>
  );
};

export default Dropdown;
