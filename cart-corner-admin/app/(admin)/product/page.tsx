'use client'

import Form from "@/src/components/Forms/Form";
import FormInput from "@/src/components/Forms/FormInput";
import FormTextArea from "@/src/components/Forms/FormTextArea";

const AddNewProduct = () => {
  const onSubmit=()=>{

  }
  return (
    <div className="grid grid-cols-7 gap-4">
      <div className="bg-white shadow-md rounded p-6 col-span-4">
        <h3 className="mb-1">Add new product</h3>
        <hr className="mb-3" />
        
        <Form submitHandler={onSubmit}>
          <FormInput name="title" type="text" placeholder="Title" label="Title" />
          <FormInput name="slug" type="text" placeholder="Slug" label="Slug" />
          <FormTextArea name="description" rows={7} label="Description" />
          <button
            type="submit"
            className=" w-1/2 bg-black text-white py-2 px-4 m-auto rounded hover:bg-gray-800 transition duration-300"
          >
            Save
          </button>
        </Form>
      </div>
      <div className="bg-white shadow-md rounded p-6 col-span-3">
        Add new product
      </div>
    </div>
  );
};

export default AddNewProduct;
