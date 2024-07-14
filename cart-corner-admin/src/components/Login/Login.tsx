'use client'
import Head from "next/head";
import Image from "next/image";
import loginImage from "@/public/assets/images/login.avif";
import { useRouter } from 'next/navigation'

const LoginComponent = () => {
  const router = useRouter();
  const submitLogin=()=>{
    router.push('/dashboard')
  }
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
            <form className="mt-8 space-y-6">
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email-address" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    defaultValue="admin@example.com"
                    className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                    placeholder="Email address"
                  />
                </div>
                <div className="relative">
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    defaultValue="123456"
                    className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                  />
                  <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                    
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between">
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
                  onClick={()=>submitLogin()}
                  type="button"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Login
                </button>
              </div>
            </form>
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
