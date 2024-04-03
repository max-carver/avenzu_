"use client";

import { motion } from "framer-motion";

const LandingPageText = () => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.4, stiffness: 100 }}
      className="text-zinc-50 text-4xl text-center font-light tracking-wide leading-tight"
    >
      Welcome to Avenzu, a personalized recruitment and mentorship service
      provider.
    </motion.h1>
  );
};

export default LandingPageText;
