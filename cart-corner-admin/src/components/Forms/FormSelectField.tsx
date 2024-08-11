"use client";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
  label: string;
  value: string;
};

type SelectFieldProps = {
  id?: string;
  options: SelectOptions[];
  name: string;
  value?: string | string[] | undefined | number;
  placeholder?: string;
  label?: string;
  defaultValue?: SelectOptions;
  handleChange?: (el: string) => void;
};

const FormSelectField = ({
  id,
  name,
  value,
  placeholder = "select",
  options,
  label,
  defaultValue,
  handleChange,
}: SelectFieldProps) => {
  
  console.log('select options',options);
  

  const { control } = useFormContext();
  return (
    <div className="mb-2">
      <label htmlFor={id} className="text-sm ">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="cursor-pointer block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          >
            {options?.map((option) => (
              <option className=" cursor-pointer" key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
};

export default FormSelectField;
