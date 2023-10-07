import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Spinner() {
  return (
    <motion.span className="flex flex-col items-center justify-center">
      <AiOutlineLoading3Quarters className="mx-4 animate-spin text-base text-black duration-500" />
    </motion.span>
  );
}
