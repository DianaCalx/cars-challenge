import { useFormContext } from 'react-hook-form';

import Error from '../components/Error';

type FormInputKeys = 'brand' | 'model' | 'color' | 'state' | 'city';

interface DropdownProps {
  label: string;
  fieldName: FormInputKeys;
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

      <select
        {...register(fieldName)}
        disabled={!options.length}
        data-testid={`select-${fieldName}`}
      >
        <option value="">Select</option>
        {options.map(({ id, name }) => (
          <option
            data-testid={`select-option-${name}`}
            key={`${id}-${name}`}
            value={id}
          >
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
