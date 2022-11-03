import React from "react";
import { motion } from "framer-motion";
import { TbUserCheck } from "react-icons/tb";
import { FiUserPlus } from "react-icons/fi";

const PrimaryButton = ({ title }) => {
  return (
    <motion.button
      whileHover={{ translateY: -2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="primary-btn"
      type="submit"
    >
      {title}
      {title === "Login" ? (
        <TbUserCheck className="ml-2" />
      ) : (
        <FiUserPlus className="ml-2" />
      )}
    </motion.button>
  );
};

export default PrimaryButton;
