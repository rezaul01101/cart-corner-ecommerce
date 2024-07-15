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
      <label htmlFor={id} className="text-sm mb-2">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            id={id}
            type={type}
            className="w-full text-sm py-2 pl-2 mb-2 border rounded-md"
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
