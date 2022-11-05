import React from "react";
import { BiArrowBack } from "react-icons/bi";

const BackToHome = ({ handleBack }) => {
  return (
    <div
      className="w-full h-full absolute text-2xl p-2 "
      onClick={() => handleBack()}
    >
      <BiArrowBack className="hover:cursor-pointer" />
    </div>
  );
};

export default BackToHome;
