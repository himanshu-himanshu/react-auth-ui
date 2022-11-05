import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Button = ({ title, link }) => {
  const navigate = useNavigate();
  const handleOnClick = () => {
    navigate(`/${link}`);
  };
  return (
    <motion.button
      whileHover={{ translateY: -2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="text-xl md:text-2xl font-bold border text-gray-300 hover:bg-sky-800 hover:border-sky-800  border-gray-100 px-10 py-5 hover:shadow-lg"
      onClick={() => handleOnClick()}
    >
      {title}
    </motion.button>
  );
};

export default Button;
