"use client";
import Form from "@/src/components/Forms/Form";
import FormInput from "@/src/components/Forms/FormInput";
import { useCategoryCreateMutation } from "@/src/redux/api/categoryApi";
import { useUserQuery, useUserUpdateMutation } from "@/src/redux/api/userApi";
import { storeUserInfo } from "@/src/redux/features/user/userSlice";
import { categorySchemas } from "@/src/schemas/category";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
interface formValues {
  name: string;
  description: string;
}
const Profile = () => {
  const dispatch = useDispatch();
  const { data, isLoading,refetch } = useUserQuery({});
  const [userUpdate]=useUserUpdateMutation();
  console.log('user',data);
  
  const onSubmit: SubmitHandler<formValues> = async (userData) => {
    try {
      const res = await userUpdate(userData);
      console.log(res);
      refetch();
    } catch (error) {
      console.log(error);
    }
    dispatch(storeUserInfo(data));
  };
  return (
    <div className="grid sm:grid-cols-5 grid-cols-1 sm:gap-4">
      <div className="bg-white shadow-md rounded p-6 col-span-2 sm:mb-0 mb-3">
        <h3>Update Profile Information</h3>
        <hr className="my-2" />
        <Form submitHandler={onSubmit} resolver={yupResolver(categorySchemas)}>
          <FormInput name="name" type="text" placeholder="Name" label="Name" />
          <FormInput name="phone" type="text" placeholder="Phone Number" label="Phone Number" />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition duration-300"
          >
            Update
          </button>
        </Form>
      </div>
      <div className=" col-span-3 bg-white shadow-md rounded p-6">
      <h3>Saved Information</h3>
        <hr className="my-2" />
        <div>
            <p className="text-md"><span className="font-bold">Name: </span>{data?.name}</p>
            <p className="text-md"><span className="font-bold">Email: </span>{data?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
