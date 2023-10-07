import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineLoading } from 'react-icons/ai';

export default function Spinner() {
  return (
    <motion.span className="flex flex-col items-center justify-center">
      <AiOutlineLoading className="mx-4 animate-spin text-xl text-black duration-500" />
    </motion.span>
  );
}
