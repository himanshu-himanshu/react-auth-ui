import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import { registerValidation } from "../../Validations/registerValidation";
import { API_URL } from "./../../constants/url";
import { REGISTER_ENDPOINT } from "./../../constants/endpoints";
import Spinner from "../../components/Spinner";
import LoginNow from "./LoginNow";
import PrimaryButton from "./PrimaryButton";
import PasswordEye from "./PasswordEye";
import BackToHome from "./BackToHome";

const Register = () => {
  /**
   * -----------------------------------------------
   * React hooks below
   * -----------------------------------------------
   */
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [showFailed, setShowFailed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = {
    username: "",
    email: "",
    password: "",
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleBack = () => {
    navigate("/");
  };

  /**
   * -----------------------------------------------
   * Function for registering the user into database
   * -----------------------------------------------
   */
  const submitForm = (values, actions) => {
    setLoading(true);

    const payload = {
      email: values.email,
      username: values.username,
      password: values.password,
    };

    setTimeout(() => {
      axios
        .post(`${API_URL}${REGISTER_ENDPOINT}`, payload)
        .then((e) => {
          if (e.data.success) {
            setLoading(false);
            setShowCheck(true);
            setTimeout(() => {
              actions.resetForm();
              navigate("/login", {
                state: { showMsg: true },
              });
            }, 400);
          } else {
            if (Object.keys(e.data.message)[0] === "email") {
              actions.setErrors({ email: e.data.message.email });
            } else if (Object.keys(e.data.message)[0] === "username") {
              actions.setErrors({ username: e.data.message.username });
            }
            setShowFailed(true);
            setLoading(false);
            setTimeout(() => {
              setShowFailed(false);
            }, 1000);
          }
        })
        .catch((err) => {
          setLoading(false);
          setShowFailed(true);
          setTimeout(() => {
            setShowFailed(false);
          }, 1000);
          toast.error(`💣 oops! ${err.message}`, {
            toastId: "error1",
          });
        });
    }, 1500);
  };

  /**
   * -----------------------------------------------
   * Formik validation logic
   * -----------------------------------------------
   */

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: form,
      validationSchema: registerValidation,
      onSubmit: submitForm,
    });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1, stiffness: 50 }}
      className="cover relative min-h-screen flex-center"
    >
      <BackToHome handleBack={handleBack} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.5,
          stiffness: 60,
          delay: 0.2,
        }}
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
              {/** Username Input */}
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
              {/** Email Input */}
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
                {/** Password Input */}
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  id="password"
                  name="password"
                  className={`input ${
                    errors.password && touched.password
                      ? "border-pink-500"
                      : "active-border"
                  }`}
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <PasswordEye
                  handleShowPassword={handleShowPassword}
                  showPassword={showPassword}
                />
              </div>
              {/** Errors */}
              {errors.password && touched.password && (
                <span className="errors">{errors.password}</span>
              )}
            </div>

            {/** Spinner Conatiner */}
            {loading && <Spinner />}

            {/** Spinner Checkmark Conatiner */}
            {showCheck && <Spinner checkSign={true} failedSign={false} />}

            {/** Spinner Error Conatiner */}
            {showFailed && <Spinner failedSign={true} checkSign={false} />}

            {/** Register Button */}
            {!loading && !showCheck && !showFailed && (
              <PrimaryButton title="Register" />
            )}

            {/** Login Container */}
            <LoginNow />
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Register;
