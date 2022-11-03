import React from "react";
import { ImSpinner9 } from "react-icons/im";
import { BsPatchCheckFill } from "react-icons/bs";

const Spinner = ({ checkSign }) => {
  return (
    <div
      className={`relative px-4 py-5 text-2xl gray-border text-center bg-white font-bold flex-center flex-row text-gray-600 duration-300 ${
        checkSign ? "green-border" : "gray-border"
      }`}
    >
      {!checkSign && <ImSpinner9 className="ml-4 animate-spin" />}
      {checkSign && (
        <BsPatchCheckFill className="text-green-500 h-8 animate-bounce" />
      )}
    </div>
  );
};

export default Spinner;
