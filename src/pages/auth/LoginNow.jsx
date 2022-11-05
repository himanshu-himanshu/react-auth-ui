import React from "react";

const LoginNow = () => {
  return (
    <div className="flex-center flex-row space-x-2 text-md md:text-lg">
      <span className="tracking-wide text-gray-500">
        Already have an account?
      </span>
      <a href="/login" className="secondary-btn">
        Login
      </a>
    </div>
  );
};

export default LoginNow;
