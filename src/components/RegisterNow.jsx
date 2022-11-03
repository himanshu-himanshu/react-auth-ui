import React from "react";

const RegisterNow = () => {
  return (
    <div className="flex-center flex-col space-y-2 lg:space-y-4 p-2 text-md md:text-lg">
      <div className="flex flex-col justify-center items-center space-y-1 md:flex-row md:space-x-2">
        <span className="tracking-wide text-gray-600">
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
  );
};

export default RegisterNow;
