import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { motion } from "framer-motion";

import { userValidationSchema } from "../../Validations/registerValidation";
import { API_URL } from "./../../constants/url";
import { REGISTER_ENDPOINT } from "./../../constants/endpoints";
import { FiEye, FiEyeOff, FiUserPlus } from "react-icons/fi";
import Spinner from "../../components/Spinner";

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = {
    username: "",
    email: "",
    password: "",
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const submitForm = (values, actions) => {
    setTimeout(() => {
      setLoading(true);
    }, 200);

    const payload = {
      email: values.email,
      username: values.username,
      password: values.password,
    };
    setTimeout(() => {
      setLoading(false);
      setShowCheck(true);
      setTimeout(() => {
        axios.post(`${API_URL}${REGISTER_ENDPOINT}`, payload).then((e) => {
          if (e.data.success) {
            actions.resetForm();
            navigate("/login", {
              state: { showMsg: true },
            });
          } else {
            if (Object.keys(e.data.message)[0] === "email") {
              actions.setErrors({ email: e.data.message.email });
            } else if (Object.keys(e.data.message)[0] === "username") {
              actions.setErrors({ username: e.data.message.username });
            }
          }
        });
      }, 1600);
    }, 1500);
  };

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: form,
      validationSchema: userValidationSchema,
      onSubmit: submitForm,
    });

  return (
    <motion.div className="cover relative min-h-screen flex-center">
      <motion.div
        animate={{ opacity: [0, 1], scale: [0, 1] }}
        transition={{
          duration: 0.5,
          type: "spring",
          stiffness: 100,
        }}
        exit={{ x: -300, opacity: 0 }}
        className="md:bg-white w-full max-w-xl flex-center flex-col space-y-1 lg:space-y-2 pt-4 md:pt-8"
      >
        {/** Heading */}
        <div className="px-2 py-0">
          <h1 className="heading">Register</h1>
        </div>

        {/** Inputs Container */}
        <div className="w-full px-10 md:px-14 lg:px-16 py-4 md:py-6 lg:py-10">
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
                    : "active-border"
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
                    : "active-border"
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
              <div className="relative flex flex-row justify-between items-center text-xl">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  id="password"
                  name="password"
                  className={`input w-full ${
                    errors.password && touched.password
                      ? "border-pink-500"
                      : "active-border"
                  }`}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <div className="absolute right-0 cursor-pointer flex justify-end items-center mr-2">
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

            {/** Spinner Conatiner */}
            {loading && <Spinner />}

            {/** Spinner Conatiner */}
            {showCheck && <Spinner checkSign={true} />}

            {/** Register Button */}
            {!loading && !showCheck && (
              <motion.button
                whileHover={{ translateY: -2 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="primary-btn"
                type="submit"
              >
                Register
                <FiUserPlus className="ml-2" />
              </motion.button>
            )}

            {/** Signup Container */}
            <div className="flex-center flex-row space-x-2 text-md md:text-lg">
              <span className="tracking-wide text-gray-500">
                Already have an account?
              </span>
              <a href="/login" className="secondary-btn">
                Login
              </a>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Register;
