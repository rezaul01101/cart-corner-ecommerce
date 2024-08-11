"use client";

import Form from "@/src/components/Forms/Form";
import FormFileInput from "@/src/components/Forms/FormFileInput";
import FormInput from "@/src/components/Forms/FormInput";
import FormSelectField from "@/src/components/Forms/FormSelectField";
import FormTextArea from "@/src/components/Forms/FormTextArea";
import { useBrandListQuery } from "@/src/redux/api/brandApi";
import { useCategoryListQuery } from "@/src/redux/api/categoryApi";
import { SubmitHandler } from "react-hook-form";
interface formValues {
  name: string;
  description: string;
  images: any;
  slug: string;
  price: string;
  discount: string;
  brand: string;
  category: string;
}
const AddNewProduct = () => {
  const {
    data: categoryList,
    error: categoryError,
    isLoading: categoryLoading,
  } = useCategoryListQuery({});
  const {
    data: brandList,
    error: brandError,
    isLoading: brandLoading,
  } = useBrandListQuery({});
  const categories = categoryList;
  const brands = brandList;

  const categoriesData = categories?.map((category: any) => {
    return {
      label: category?.name,
      value: category?.id,
    };
  });
  const brandData = brands?.map((brand: any) => {
    return {
      label: brand?.name,
      value: brand?.id,
    };
  });

  const onSubmit:SubmitHandler<formValues> = async (product) =>{
    console.log(product);
    
    try {
      let InputData = new FormData();
      if (product["images"]) {
        InputData.append("image", product["images"][0]);
      }
      InputData.append("name", product["name"]);
      InputData.append("description", product["description"]);
      InputData.append("price", product["price"]);
      InputData.append("discount", product["discount"]);
      InputData.append("brand_id", product["brand"]);
      InputData.append("category_id", product["category"]);
      // const res = await brandCreate(InputData);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
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
            <div className="grid grid-cols-2 gap-2">
              <div>
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
            </div>
            <div>
              <FormSelectField
                name="category"
                label="Select Category"
                options={categoriesData}
                id="category"
              />
            </div>
            <div>
              <FormSelectField
                name="brand"
                label="Select Brand"
                options={brandData}
                id="brand"
              />
            </div>
            <div>
              <FormFileInput
                name="image"
                multiple={true}
                label="Product Image"
              />
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default AddNewProduct;
