import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";
import { toast } from "react-toastify";

import { registerValidation } from "../../../Validations/registerValidation";
import { API_URL } from "../../../constants/url";
import { REGISTER_ENDPOINT } from "../../../constants/endpoints";
import Spinner from "../../../components/Spinner";
import LoginNow from "../Login/LoginNow";
import PasswordEye from "../common/PasswordEye";
import BackToHome from "../common/BackToHome";
import Input from "../common/Input";
import Button from "../common/Button";
import ParentDiv from "../common/ParentDiv";

const Register = () => {
  /**
   * -----------------------------------------------
   * React hooks below
   * -----------------------------------------------
   */
  const navigate = useNavigate();
  const [showCheck, setShowCheck] = useState(false);
  const [loading, setLoading] = useState(false);
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
    <ParentDiv>
      <BackToHome handleBack={handleBack} />
      {/** Heading */}
      <div className="px-2 py-0">
        <h1 className="heading">Register</h1>
      </div>

      {/** Inputs Container */}
      <div className="w-full px-10 md:px-14 lg:px-16 py-4 md:py-6 lg:py-10">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-6 ">
          <div className="flex flex-col space-y-1">
            <Input
              type="text"
              id="username"
              placeholder="Username"
              errors={errors}
              touched={touched}
              handleBlur={handleBlur}
              handleChange={handleChange}
              values={values}
            />
            {errors.username && touched.username && (
              <span className="errors">{errors.username}</span>
            )}
          </div>

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

          {loading && <Spinner />}

          {showCheck && <Spinner checkSign={true} failedSign={false} />}

          {showFailed && <Spinner failedSign={true} checkSign={false} />}

          {!loading && !showCheck && !showFailed && <Button title="Register" />}

          <LoginNow />
        </form>
      </div>
    </ParentDiv>
  );
};

export default Register;
