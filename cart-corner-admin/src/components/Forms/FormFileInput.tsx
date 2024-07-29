"use client";

import { getErrorMessageByPropertyName } from "@/src/utils/schema-validator";
import { useFormContext, Controller } from "react-hook-form";

interface IInput {
  name: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  multiple?: boolean;
}

const FormFileInput = ({
  name,
  value,
  id,
  placeholder,
  validation,
  label,
  required,
  multiple,
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className="mb-2">
      <label htmlFor={id} className="text-sm mb-2">
        {label}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <input
            id={id}
            type="file"
            className="w-full text-sm py-2 pl-2 border focus:border-black focus:outline-none rounded-md"
            placeholder={placeholder}
            {...field}
            onBlur={field?.onBlur}
            required={required}
            multiple={multiple}
            value={field.value?.filename}
            onChange={(event) => {
              return field.onChange(event.target.files);
            }}
          />
        )}
      />
      <small style={{ color: "red" }}>{errorMessage}</small>
    </div>
  );
};

export default FormFileInput;
