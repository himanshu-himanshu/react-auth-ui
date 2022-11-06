import React from "react";
import { motion } from "framer-motion";

const OuterDiv = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1, stiffness: 50 }}
      className="cover relative min-h-screen flex-center"
    >
      {children}
    </motion.div>
  );
};

export default OuterDiv;
