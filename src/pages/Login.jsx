import React from "react";

import { CiLogin } from "react-icons/ci";

function Login() {
  return (
    <div className="min-h-screen flex-center">
      <div className="w-full max-w-xl flex-center flex-col space-y-4">
        {/** Heading */}
        <div className="p-2">
          <h1 className="text-7xl text-gray-700 tracking-wide">Login</h1>
        </div>

        {/** Inputs Container */}
        <div className="flex flex-col space-y-8 w-full px-16 py-12">
          {/** Inputs */}
          <input type="email" placeholder="Email" className="input" />
          <input type="password" placeholder="Password" className="input" />

          {/** Button Container */}
          <div className="relative group px-4 py-5 text-2xl gray-border text-center bg-white hover:cursor-pointer">
            <div className="absolute w-full h-full top-1.5 left-1.5 -z-20 group-hover:top-1 group-hover:left-1 gray-border duration-200" />
            <button className="tracking-wider font-bold flex flex-row justify-center items-center w-full">
              Login <CiLogin className="ml-2" />
            </button>
          </div>

          {/** Signup Container */}
          <div className="flex-center flex-row space-x-2 p-2 text-lg">
            <span className="tracking-wide">Don't have an account yet?</span>
            <a
              href="/register"
              className="font-[900] hover:-translate-y-0.5 duration-200"
            >
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
