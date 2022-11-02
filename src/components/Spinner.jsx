import React from "react";
import { ImSpinner9 } from "react-icons/im";

const Spinner = () => {
  return (
    <div className="relative px-4 py-5 text-2xl gray-border text-center bg-white font-bold flex-center flex-row text-gray-600 duration-300">
      <ImSpinner9 className="ml-4 animate-spin" />
    </div>
  );
};

export default Spinner;
