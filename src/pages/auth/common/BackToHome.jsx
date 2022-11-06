import React from "react";
import { BiArrowBack } from "react-icons/bi";

const BackToHome = ({ handleBack }) => {
  return (
    <div
      className="absolute top-0 left-0 text-2xl p-2 "
      onClick={() => handleBack()}
    >
      <BiArrowBack className="hover:cursor-pointer" />
    </div>
  );
};

export default BackToHome;
