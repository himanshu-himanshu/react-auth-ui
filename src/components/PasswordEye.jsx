import React from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

const PasswordEye = ({ handleShowPassword, showPassword }) => {
  return (
    <div className="absolute bg-white px-2 right-0 cursor-pointer flex justify-end items-center mr-2">
      {!showPassword && (
        <FiEye className="text-gray-400" onClick={() => handleShowPassword()} />
      )}
      {showPassword && (
        <FiEyeOff
          className="text-gray-400"
          onClick={() => handleShowPassword()}
        />
      )}
    </div>
  );
};

export default PasswordEye;
