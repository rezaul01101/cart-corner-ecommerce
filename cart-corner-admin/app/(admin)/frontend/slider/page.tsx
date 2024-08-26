"use client";
import Form from "@/src/components/Forms/Form";
import FormFileInput from "@/src/components/Forms/FormFileInput";
import FormInput from "@/src/components/Forms/FormInput";
import { baseUrl } from "@/src/helpers/config/envConfig";
import {
  useSliderCreateMutation,
  useSliderListQuery,
} from "@/src/redux/api/sliderApi";
import Image from "next/image";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
interface formValues {
  title: string;
  sub_title: string;
  image: any;
}
const Slider = () => {
  const { data: sliderList, isLoading, refetch } = useSliderListQuery({});
  const [sliderCreate] = useSliderCreateMutation();
  const onSubmit: SubmitHandler<formValues> = async (sliderData) => {
    try {
      let InputData = new FormData();
      if (sliderData["image"]) {
        InputData.append("image", sliderData["image"][0]);
      }
      InputData.append("title", sliderData["title"]);
      InputData.append("sub_title", sliderData["sub_title"]);
      const res = await sliderCreate(InputData);
      console.log(res);
      if (res) {
        toast.success("Slider saved successfully!", {
          position: "top-right",
        });
      }
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid sm:grid-cols-5 grid-cols-1 sm:gap-4">
      <div className="bg-white shadow-md rounded p-6 col-span-2 sm:mb-0 mb-3">
        <h3>Create Slider</h3>
        <hr className="my-2" />
        <Form submitHandler={onSubmit}>
          <FormInput
            name="title"
            type="text"
            placeholder="Title"
            label="Title"
          />
          <FormInput
            name="sub_title"
            type="text"
            placeholder="Sub Title"
            label="Sub Title"
          />
          <FormFileInput name="image" label="Slider Image" multiple={true} />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
          >
            Create
          </button>
        </Form>
      </div>
      <div className=" col-span-3 bg-white shadow-md rounded p-6">
        <h3>Saved Information</h3>
        <hr className="my-2" />
        <div>
          {sliderList?.map((slider: any) => (
            <div
              key={slider?.id}
              className="relative w-full h-[200px] mr-1 p-1 border rounded-sm"
            >
              <Image
                src={`${baseUrl()}${slider?.image}`}
                sizes="100vw"
                layout="fill"
                objectFit="contain"
                className="rounded-sm"
                alt={slider?.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
