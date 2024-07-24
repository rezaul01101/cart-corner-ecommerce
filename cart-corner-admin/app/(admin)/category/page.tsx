"use client";
import CategoryTable from "@/src/components/Category/CategoryTable";
import Form from "@/src/components/Forms/Form";
import FormInput from "@/src/components/Forms/FormInput";
import FormTextArea from "@/src/components/Forms/FormTextArea";
import { useCategoryCreateMutation, useCategoryListQuery } from "@/src/redux/api/categoryApi";
import { categorySchemas } from "@/src/schemas/category";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form";
interface formValues {
  name: string;
  description: string;
}
const Category = () => {
  const { data, isLoading,refetch } = useCategoryListQuery({});
  const [categoryCreate]=useCategoryCreateMutation();
  const onSubmit: SubmitHandler<formValues> = async (categoryData) => {
    try {
      const res = await categoryCreate(categoryData);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-4">
      <div className="bg-white shadow-md rounded p-6 mb-4 sm:mb-0">
        <h3>Add new Category</h3>
        <hr className="my-2" />
        <Form submitHandler={onSubmit} resolver={yupResolver(categorySchemas)}>
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
          <CategoryTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default Category;
