import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import axios from "axios";

import { loginValidation } from "../../Validations/loginValidation";
import RegisterNow from "../../components/RegisterNow";
import Spinner from "../../components/Spinner";
import PrimaryButton from "../../components/PrimaryButton";
import PasswordEye from "../../components/PasswordEye";
import { API_URL } from "./../../constants/url";
import { LOGIN_ENDPOINT } from "./../../constants/endpoints";

const Login = ({ user, setUser }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showCheck, setShowCheck] = useState(false);
  const [showFailed, setShowFailed] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = {
    email: "",
    password: "",
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    location.state &&
      location.state.showMsg &&
      toast.success("🚀 Registration Successful", {
        toastId: "success1",
      });
    window.history.replaceState({}, document.title);
  }, [location.state]);

  const submitForm = (values, actions) => {
    setLoading(true);

    const payload = {
      email: values.email,
      password: values.password,
    };

    setTimeout(() => {
      axios
        .post(`${API_URL}${LOGIN_ENDPOINT}`, payload)
        .then((e) => {
          if (e.data.success) {
            console.log(e.data);
            setLoading(false);
            setShowCheck(true);
            setTimeout(() => {
              actions.resetForm();
              navigate("/profile");
            }, 400);
            setUser(e.data.data);
          } else {
            if (Object.keys(e.data.message)[0] === "email") {
              actions.setErrors({ email: e.data.message.email });
            } else if (Object.keys(e.data.message)[0] === "password") {
              actions.setErrors({ password: e.data.message.password });
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

  const { values, errors, handleBlur, handleChange, touched, handleSubmit } =
    useFormik({
      initialValues: form,
      validationSchema: loginValidation,
      onSubmit: submitForm,
    });

  return (
    <>
      <div className="cover relative min-h-screen flex-center">
        <motion.div
          animate={{ opacity: [0, 1], scale: [0, 1] }}
          transition={{
            duration: 0.5,
            type: "spring",
            stiffness: 100,
          }}
          className="md:bg-white w-full max-w-xl flex-center flex-col space-y-1 lg:space-y-2 pt-4 md:pt-8"
        >
          {/** Heading */}
          <div className="px-2 py-0">
            <h1 className="heading">Login</h1>
          </div>

          {/** Inputs Container */}
          <div className="w-full px-10 md:px-14 lg:px-16 py-4 md:py-8 lg:py-12">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
              {/** Inputs */}
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
                    placeholder="Password"
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

              {/** Login Button */}
              {!loading && !showCheck && !showFailed && (
                <PrimaryButton title="Login" />
              )}

              {/** Signup Container */}
              <RegisterNow />
            </form>
          </div>
        </motion.div>
      </div>
      <ToastContainer
        theme="colored"
        autoClose={1000}
        hideProgressBar={true}
        icon={false}
      />
    </>
  );
};

export default Login;
