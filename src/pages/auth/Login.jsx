import React from "react";
import { useState } from "react";
// import {
//   userSchema,
//   userEmailSchema,
//   userPasswordSchema,
// } from "../Validations/Validation";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { TbUserCheck } from "react-icons/tb";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleOnPasswordChange = async (e) => {
    setPassword(e.target.value);
  };

  const handleOnEmailChange = async (e) => {
    setEmail(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnSubmit = async () => {
    // let formData = {
    //   email: email,
    //   password: password,
    // };
    // const isValid = await userSchema.isValid(formData);
    // console.log(isValid);
  };

  return (
    <div className="parent relative min-h-screen flex-center">
      <div className="bg-white w-full max-w-xl flex-center flex-col space-y-4 z-10">
        {/** Heading */}
        <div className="px-2 py-4">
          <h1 className="heading">Login</h1>
        </div>

        {/** Inputs Container */}
        <div className="flex flex-col space-y-8 w-full px-10 md:px-14 lg:px-16 py-4 md:py-8 lg:py-12">
          {/** Inputs */}
          <input
            type="email"
            placeholder="Email"
            className="input border-gray-400"
            required
            value={email}
            onChange={(e) => handleOnEmailChange(e)}
          />

          <div className="border placeholder:tracking-wide flex flex-row justify-between py-5 px-2 text-xl border-gray-400">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`focus:outline-none active:border-gray-600 focus:border-gray-600 w-4/5`}
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
            <button className="primary-btn" onClick={() => handleOnSubmit()}>
              Login <TbUserCheck className="ml-2" />
            </button>
          </div>

          {/** Signup Container */}
          <div className="flex-center flex-col space-y-2 lg:space-y-4 p-2 text-md md:text-lg">
            <div className="flex-center flex-row space-x-2">
              <span className="tracking-wide">Don't have an account yet?</span>
              <a href="/signup" className="secondary-btn">
                Sign Up
              </a>
            </div>

            <a href="/forgotpassword" className="secondary-btn">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;