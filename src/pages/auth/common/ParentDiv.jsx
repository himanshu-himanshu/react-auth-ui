import React from "react";
import { motion } from "framer-motion";

const ParentDiv = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ type: "spring", duration: 1, stiffness: 50 }}
      className="cover relative min-h-screen flex-center"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          type: "spring",
          duration: 0.5,
          stiffness: 60,
          delay: 0.2,
        }}
        className="md:bg-white w-full max-w-xl flex-center flex-col space-y-1 lg:space-y-2 pt-4 md:pt-8"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ParentDiv;
