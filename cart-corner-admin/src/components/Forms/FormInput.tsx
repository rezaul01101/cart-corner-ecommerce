"use client";

import { useFormContext, Controller } from "react-hook-form";


interface IInput {
  type?: string;
  name: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?:boolean;
}

const FormInput = ({
  type,
  name,
  value,
  id,
  placeholder,
  validation,
  label,
  required
}: IInput) => {
  const { control } = useFormContext();
  return (
    <>
      <label htmlFor="email-address" className="sr-only">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            
            id={id}
            name={name}
            type={type}
            className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
            placeholder={placeholder}
            {...field}
            onBlur={field?.onBlur}
            value={value ? value : field.value}
            required={required}
          />
        )}
      />
    </>
  );
};

export default FormInput;
