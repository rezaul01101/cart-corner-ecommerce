interface IInput {
  type?: string;
  name: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
}
const Input = ({ type, name, value, id, placeholder, validation }: IInput) => {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete="current-password"
        className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
