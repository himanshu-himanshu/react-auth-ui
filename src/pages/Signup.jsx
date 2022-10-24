import React from "react";
import { useState } from "react";
import { useFormik } from "formik";

import { userSchema } from "../Validations/Validation";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { TbUserCheck } from "react-icons/tb";

const Signup = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
  };

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: {
        username: "",
        email: "",
        password: "",
      },
      validationSchema: userSchema,
      onSubmit,
    });
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="relative min-h-screen flex-center">
      <div className="w-full max-w-xl flex-center flex-col space-y-1 lg:space-y-2">
        {/** Heading */}
        <div className="p-2">
          <h1 className="heading">Signup</h1>
        </div>

        {/** Inputs Container */}
        <div className="w-full px-10 md:px-14 lg:px-16 py-4 md:py-8 lg:py-12">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-6 ">
            {/** Inputs */}
            <div className="flex flex-col space-y-1">
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                className={`input ${
                  errors.username && touched.username
                    ? "border-pink-500"
                    : "border-gray-400 active:border-gray-600 focus:border-gray-600"
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
              />
              {errors.username && touched.username && (
                <span className="errors">{errors.username}</span>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <input
                type="email"
                placeholder="Email"
                id="email"
                name="email"
                className={`input ${
                  errors.email && touched.email
                    ? "border-pink-500"
                    : "border-gray-400 active:border-gray-600 focus:border-gray-600"
                }`}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <span className="errors">{errors.email}</span>
              )}
            </div>

            <div className="flex flex-col space-y-1">
              <div
                className={`border flex flex-row justify-between items-center text-xl ${
                  errors.password && touched.password
                    ? "border-pink-500"
                    : "border-gray-400 active:border-gray-600 focus:border-gray-600"
                }`}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  className="placeholder:tracking-wide  py-5 px-2 focus:outline-none active:border-gray-600 focus:border-gray-600 w-4/5 "
                  id="password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
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
              {errors.password && touched.password && (
                <span className="errors">{errors.password}</span>
              )}
            </div>

            {/** Button Container */}
            <div className="primary-btn__container group">
              <div className="primary-btn__overlay" />
              <button className="primary-btn" type="submit">
                Register <TbUserCheck className="ml-2" />
              </button>
            </div>

            {/** Signup Container */}
            <div className="flex-center flex-row space-x-2 p-2 text-md md:text-lg">
              <span className="tracking-wide">Already have an account?</span>
              <a
                href="/login"
                className="font-[900] hover:-translate-y-0.5 duration-200"
              >
                Login
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
