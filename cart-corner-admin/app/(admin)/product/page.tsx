"use client";

import Form from "@/src/components/Forms/Form";
import FormInput from "@/src/components/Forms/FormInput";
import FormTextArea from "@/src/components/Forms/FormTextArea";

const AddNewProduct = () => {
  const onSubmit = () => {};
  return (
    <Form submitHandler={onSubmit}>
      <div className="grid grid-cols-7 gap-4">
        <div className="bg-white shadow-md rounded p-6 col-span-4">
          <h3 className="mb-1">Basic Information</h3>
          <hr className="mb-3" />

          <FormInput
            name="title"
            type="text"
            placeholder="Title"
            label="Title"
          />
          <FormInput name="slug" type="text" placeholder="Slug" label="Slug" />
          <FormTextArea name="description" rows={7} label="Description" />
          <button
            type="submit"
            className=" w-1/2 bg-black text-white py-2 px-4 m-auto rounded hover:bg-gray-800 transition duration-300"
          >
            Save
          </button>
        </div>
        <div className="bg-white shadow-md rounded p-6 col-span-3">
          <h3 className="mb-1">Product Information</h3>
          <hr className="mb-3" />
          <div className="grid grid-cols-5 gap-2">
            <div className=" col-span-3">
              <FormInput
                name="price"
                type="text"
                placeholder="BDT"
                label="Price"
              />
            </div>
            <div>
              <FormInput
                name="discount"
                type="text"
                placeholder="BDT"
                label="Discount"
              />
            </div>
            <div>
              <FormInput
                name="discount_type"
                type="text"
                placeholder="BDT"
                label=" Type"
              />
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

export default AddNewProduct;
