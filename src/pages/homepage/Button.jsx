import React from "react";
import { motion } from "framer-motion";

const Button = ({ title, link, onClick, ...restProps }) => {
  return (
    <motion.button
      whileHover={{ translateY: -2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className={`${restProps.dynamicStyle} text-xl md:text-2xl font-bold border text-gray-300 border-gray-100 px-10 py-5 hover:shadow-lg`}
      onClick={onClick}
    >
      {title}
    </motion.button>
  );
};

export default Button;
