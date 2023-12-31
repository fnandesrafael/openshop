import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollTip() {
  return (
    <div
      className="md:scale-115 absolute bottom-12 right-12 hidden items-center justify-around sm:flex md:bottom-12 lg:bottom-12 xl:bottom-36 2xl:bottom-32 2xl:scale-150"
      role="icon"
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="34"
        viewBox="0 0 19 34"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2, duration: 1 } }}
      >
        <rect
          x="1"
          y="1"
          width="16.2143"
          height="32"
          rx="8.10714"
          strokeWidth="2"
          className="stroke-white"
        />
        <motion.circle
          cx="8.94643"
          cy="8.94643"
          r="3.94643"
          className="fill-white"
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: 15,
            opacity: [0, 1, 1, 0],
            transition: {
              delay: 2.5,
              duration: 1,
              repeat: Infinity,
              repeatDelay: 1,
              repeatType: 'loop',
            },
          }}
        />
      </motion.svg>
    </div>
  );
}
