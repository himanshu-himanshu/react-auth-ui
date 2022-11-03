import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";
// import {
//   userSchema,
//   userEmailSchema,
//   userPasswordSchema,
// } from "../Validations/Validation";

import { FiEye, FiEyeOff } from "react-icons/fi";
import { TbUserCheck } from "react-icons/tb";

const Login = () => {
  //const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    location.state &&
      location.state.showMsg &&
      toast.success("🚀 Registration Successful", {
        toastId: "success1",
      });
    window.history.replaceState({}, document.title);
  }, [location.state]);

  const handleOnPasswordChange = async (e) => {
    setPassword(e.target.value);
  };

  const handleOnEmailChange = async (e) => {
    setEmail(e.target.value);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleOnSubmit = async () => {};

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

            {/** Login Button */}
            <button
              className="primary-btn"
              type="submit"
              onClick={() => handleOnSubmit()}
            >
              Login <TbUserCheck className="ml-2" />
            </button>

            {/** Signup Container */}
            <div className="flex-center flex-col space-y-2 lg:space-y-4 p-2 text-md md:text-lg">
              <div className="flex flex-col justify-center items-center space-y-1 md:flex-row md:space-x-2">
                <span className="tracking-wide">
                  Don't have an account yet?
                </span>
                <a href="/register" className="secondary-btn">
                  Register Now
                </a>
              </div>
              <a href="/forgotpassword" className="secondary-btn">
                Forgot Password?
              </a>
            </div>
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
