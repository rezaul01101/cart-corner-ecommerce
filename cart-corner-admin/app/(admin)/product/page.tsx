"use client";

import Form from "@/src/components/Forms/Form";
import FormFileInput from "@/src/components/Forms/FormFileInput";
import FormInput from "@/src/components/Forms/FormInput";
import FormSelectField from "@/src/components/Forms/FormSelectField";
import FormTextArea from "@/src/components/Forms/FormTextArea";
import { useBrandListQuery } from "@/src/redux/api/brandApi";
import { useCategoryListQuery } from "@/src/redux/api/categoryApi";
import { useProductCreateMutation } from "@/src/redux/api/productApi";
import { SubmitHandler } from "react-hook-form";
interface formValues {
  title: string;
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
  const [productCreate] = useProductCreateMutation();
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
    try {
      let InputData = new FormData();

      // if (product["images"] && product["images"].length > 0) {
      //   product["images"].forEach((image:any) => {
      //     InputData.append("images", image); // Append each image with the same key
      //   });
      // }
      if(product["images"]){
        InputData.append("images", product["images"][0]);
      }
      InputData.append("name", product["title"]);
      InputData.append("description", product["description"]);
      InputData.append("price", product["price"]);
      InputData.append("discount", product["discount"]);
      InputData.append("brandId", product["brand"]);
      InputData.append("categoryId", product["category"]);
      const res = await productCreate(InputData);
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
                name="images"
                multiple={false}
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
