"use client";

import { motion } from "motion/react";

const template = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      //  key={keyId}
      //  variants={variants}
      initial={{
        opacity: 0,
        //y: 30
      }}
      animate={{
        opacity: 1,
        //y: 0,
        transition: { duration: 0.5, ease: "easeOut" },
      }}
      exit={{
        opacity: 0,
        //y: -30,
        transition: { duration: 0.5, ease: "easeIn" },
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default template;
