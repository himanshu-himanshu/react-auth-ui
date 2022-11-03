import React from "react";
import { ImSpinner9 } from "react-icons/im";
import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";

const Spinner = ({ checkSign, failedSign }) => {
  return (
    <div
      className={`relative px-4 py-5 text-2xl gray-border text-center bg-white font-bold flex-center flex-row text-gray-600 duration-300 ${
        checkSign ? "green-border" : "gray-border"
      } ${failedSign ? "red-border" : ""}`}
    >
      {!checkSign && !failedSign && (
        <ImSpinner9 className="ml-4 animate-spin" />
      )}
      {checkSign && !failedSign && (
        <BsPatchCheckFill className="text-green-500 h-8" />
      )}
      {!checkSign && failedSign && (
        <AiFillCloseCircle className="text-red-500 h-8" />
      )}
    </div>
  );
};

export default Spinner;
