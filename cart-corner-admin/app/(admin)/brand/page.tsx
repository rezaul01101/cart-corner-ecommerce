"use client";
import BrandTable from "@/src/components/Brand/BrandTable";
import Form from "@/src/components/Forms/Form";
import FormInput from "@/src/components/Forms/FormInput";
import FormTextArea from "@/src/components/Forms/FormTextArea";
import {
  useBrandCreateMutation,
  useBrandListQuery,
} from "@/src/redux/api/brandApi";
import { brandSchemas } from "@/src/schemas/brand";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form";
interface formValues {
  name: string;
  description: string;
  file: any;
}
const Brand = () => {
  const { data, refetch } = useBrandListQuery({});
  const [brandCreate] = useBrandCreateMutation();

  const onSubmit: SubmitHandler<formValues> = async (brandData) => {
    // const formData = new FormData();
    // formData.append("file", brandData["file"] as Blob);
    // formData.append("name", brandData["name"]);
    // formData.append("description", brandData["description"]);
    try {
      const res = await brandCreate(brandData);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="bg-white shadow-md rounded p-6">
        <h3>Add new Brand</h3>
        <hr className="my-2" />
        <Form submitHandler={onSubmit} resolver={yupResolver(brandSchemas)}>
          <FormInput name="name" type="text" placeholder="Name" label="Name" />
          <FormTextArea name="description" rows={7} label="Description" />
          <FormInput
            name="file"
            type="file"
            placeholder="Name"
            label="Brand Logo"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
          >
            Save
          </button>
        </Form>
      </div>
      <div className=" col-span-2 bg-white shadow-md rounded p-6">
        <h3>Brand List</h3>
        <hr className="my-2" />
        <div>
          <BrandTable data={data} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
