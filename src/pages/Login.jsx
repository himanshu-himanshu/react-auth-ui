import React from "react";
import { useState } from "react";

import { CiLogin } from "react-icons/ci";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { TbUserCheck } from "react-icons/tb";

function Login() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleOnPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="relative min-h-screen flex-center">
      <div className="w-full max-w-xl flex-center flex-col space-y-4">
        {/** Heading */}
        <div className="p-2">
          <h1 className="heading">Login</h1>
        </div>

        {/** Inputs Container */}
        <div className="flex flex-col space-y-8 w-full px-16 py-12">
          {/** Inputs */}
          <input type="email" placeholder="Email" className="input" required />
          <div className="placeholder:tracking-wide flex flex-row justify-between py-5 px-2 text-xl border border-gray-400">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="focus:outline-none active:border-gray-600 focus:border-gray-600 w-4/5"
              value={password}
              onChange={(e) => handleOnPasswordChange(e)}
              required
            />
            <div className="cursor-pointer w-1/5 flex justify-end items-center mr-2">
              {!showPassword && (
                <FiEye
                  className="text-gray-400"
                  onClick={() => handleShowPassword()}
                />
              )}
              {showPassword && (
                <FiEyeOff
                  className="text-gray-400"
                  onClick={() => handleShowPassword()}
                />
              )}
            </div>
          </div>

          {/** Button Container */}
          <div className="primary-btn__container group">
            <div className="primary-btn__overlay" />
            <button className="primary-btn">
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
