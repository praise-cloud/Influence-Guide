import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const Login = () => {
  return (
    <div className="relative bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Login
        </h2>
        <p className="mt-4 text-center text-lg leading-8 text-gray-600">
          Welcome back! Please login to your account.
        </p>
        <div className="mt-10 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block h-14 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-5"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  className="block h-14 w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-5"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Login
              </button>
            </div>
          </form>
          <div className="mt-4">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <FaGoogle className="mr-2" /> Login with Google
            </button>
          </div>
          <div className="mt-2">
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-gray-300 bg-white py-3 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              <FaFacebook className="mr-2" /> Login with Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
