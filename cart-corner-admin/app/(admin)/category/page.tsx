"use client";
import CategoryTable from "@/src/components/Category/CategoryTable";
import Form from "@/src/components/Forms/Form";
import FormInput from "@/src/components/Forms/FormInput";
import FormTextArea from "@/src/components/Forms/FormTextArea";
import { SubmitHandler } from "react-hook-form";
interface formValues {
  name: string;
  description: string;
}
const Category = () => {
  const onSubmit: SubmitHandler<formValues> = (data) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white shadow-md rounded p-6">
        <h3>Add new Category</h3>
        <hr className="my-2" />
        <Form submitHandler={onSubmit}>
          <FormInput name="name" type="text" placeholder="Name" label="Name" />
          <FormTextArea name="description" rows={7} label="Description" />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
          >
            Save
          </button>
        </Form>
      </div>
      <div className=" col-span-2 bg-white shadow-md rounded p-6">
      <h3>Category List</h3>
        <hr className="my-2" />
        <div>
          <CategoryTable />
        </div>
      </div>
    </div>
  );
};

export default Category;
