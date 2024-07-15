import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  id?: string;
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
};

const FormTextArea = ({
  id,
  name,
  label,
  rows,
  value,
  placeholder,
}: TextAreaProps) => {
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
          <textarea {...field } rows={rows} placeholder={placeholder} className="w-full text-sm py-2 pl-2 mb-2 border rounded-md">{value ? value : field.value}</textarea>
        )}
      />
    </>
  );
};

export default FormTextArea;
