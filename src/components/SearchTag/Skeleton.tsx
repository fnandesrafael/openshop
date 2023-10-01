import React from 'react';
import { motion } from 'framer-motion';

function Skeleton() {
  return (
    <div className="flex flex-row gap-4 rounded-sm">
      <motion.span
        initial={{ backgroundColor: 'hsl(200, 20%, 70%)' }}
        whileInView={{
          backgroundColor: 'hsl(200, 20%, 95%)',
          transition: {
            duration: 1,
            ease: 'linear',
            repeatType: 'mirror',
            repeat: Infinity,
          },
        }}
        className="flex h-7 w-28 flex-col items-center justify-center rounded-sm hover:cursor-pointer"
      />
    </div>
  );
}

export default Skeleton;
