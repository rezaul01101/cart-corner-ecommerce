"use client";
import Head from "next/head";
import Image from "next/image";
import loginImage from "@/public/assets/images/login.avif";
import { useRouter } from "next/navigation";
import Form from "../Forms/Form";
import FormInput from "../Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/src/redux/api/authApi";
import { getUserInfo, storeUserInfo } from "@/src/services/auth.service";
import { useState } from "react";

interface formValues {
  id?: string;
  password?: string;
}

const LoginComponent = () => {
  const [isLoading,setLoading]=useState(false);
  // console.log(getUserInfo())
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();
  const onSubmit: SubmitHandler<formValues> = async (data: any) => {
    // console.log(data);

    try {
      setLoading(true);
      const res = await userLogin({ ...data }).unwrap();
      
      if (res?.accessToken) {
       
        storeUserInfo({ accessToken: res?.accessToken });
        router.push("/dashboard");
        setLoading(false);
      }
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div className="relative hidden sm:block">
          <Image
            src={loginImage}
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="opacity-90"
          />
        </div>
        <div className="flex items-center justify-center p-8 bg-white">
          <div className="max-w-md w-full space-y-8">
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-600">
                WELCOME CART CORNER ADMIN
              </h1>
              <p className="text-gray-600">Login to your account</p>
            </div>
            <div className="mt-8 space-y-6">
              <Form submitHandler={onSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <FormInput
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      label="Email"
                    />
                  </div>
                  <div className="relative">
                    <FormInput
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      label="Password"
                    />
                  </div>
                </div>
                <div className="flex items-center justify-between my-3">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Remember Me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-medium text-red-600 hover:text-red-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center items-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                    Login &nbsp;{" "}
                    {isLoading && (
                      <svg
                        width="15"
                        height="15"
                        fill="currentColor"
                        className="mr-2 animate-spin"
                        viewBox="0 0 1792 1792"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </Form>
            </div>
            {/* <div className="mt-8 space-y-6">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  readOnly
                  value="admin@example.com"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
                <input
                  type="text"
                  readOnly
                  value="123456"
                  className="w-full ml-2 px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
                <button
                  type="button"
                  className="ml-2 flex-shrink-0 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Copy
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
