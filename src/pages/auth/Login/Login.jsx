import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import axios from "axios";

import { loginValidation } from "../../../Validations/loginValidation";
import RegisterNow from "../Register/RegisterNow";
import Spinner from "../../../components/Spinner";
import PasswordEye from "../common/PasswordEye";
import { API_URL } from "../../../constants/url";
import { LOGIN_ENDPOINT } from "../../../constants/endpoints";
import BackToHome from "../common/BackToHome";
import Input from "../common/Input";
import Button from "../common/Button";
import ParentDiv from "../common/ParentDiv";

const Login = () => {
  /**
   * -----------------------------------------------
   * React hooks below
   * -----------------------------------------------
   */
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

  const handleBack = () => {
    navigate("/");
  };

  /**
   * -----------------------------------------------
   * useEffect() hook to show registration message
   * Message is shown only after user registers from
   * sign up page and is redirected here
   * -----------------------------------------------
   */
  useEffect(() => {
    location.state &&
      location.state.showMsg &&
      toast.success("🚀 Registration Successful", {
        toastId: "success1",
      });
    window.history.replaceState({}, document.title);
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, [location.state, navigate]);

  /**
   * -----------------------------------------------
   * Function for logging user
   * -----------------------------------------------
   */
  const submitForm = (values, actions) => {
    setLoading(true);

    const payload = {
      email: values.email,
      password: values.password,
    };

    setTimeout(() => {
      axios
        .post(`${API_URL}${LOGIN_ENDPOINT}`, payload)
        .then(({ data }) => {
          console.log(data);
          if (data.success) {
            console.log(data);
            setLoading(false);
            setShowCheck(true);
            setTimeout(() => {
              actions.resetForm();
              navigate("/");
            }, 400);
            localStorage.setItem(
              "user",
              JSON.stringify({
                name: data.data.username,
                email: data.data.email,
                token: data.data.token,
              })
            );
          } else {
            if (Object.keys(data.message)[0] === "email") {
              actions.setErrors({ email: data.message.email });
            } else if (Object.keys(data.message)[0] === "password") {
              setShowPassword(true);
              actions.setErrors({ password: data.message.password });
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
      validationSchema: loginValidation,
      onSubmit: submitForm,
    });

  return (
    <ParentDiv>
      <BackToHome handleBack={handleBack} />
      {/** Heading */}
      <div className="px-2 py-0">
        <h1 className="heading">Login</h1>
      </div>

      {/** Inputs Container */}
      <div className="w-full px-10 md:px-14 lg:px-16 py-4 md:py-8 lg:py-12">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-8">
          {/** Email Input */}
          <div className="flex flex-col space-y-1">
            <Input
              type="email"
              id="email"
              placeholder="Email"
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
            />
            {errors.email && touched.email && (
              <span className="errors">{errors.email}</span>
            )}
          </div>
          <div className="flex flex-col space-y-1">
            <div className="form-div">
              <Input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password"
                errors={errors}
                touched={touched}
                handleBlur={handleBlur}
                handleChange={handleChange}
                values={values}
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
          {!loading && !showCheck && !showFailed && <Button title="Login" />}

          {/** Signup Container */}
          <RegisterNow />
        </form>
      </div>
    </ParentDiv>
  );
};

export default Login;
