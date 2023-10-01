import React from 'react';
import { Variants, motion } from 'framer-motion';

const skeletonMotion: Variants = {
  initial: { backgroundColor: 'hsl(200, 20%, 70%)' },
  whileInView: {
    backgroundColor: 'hsl(200, 20%, 95%)',
    transition: {
      duration: 1,
      ease: 'linear',
      repeatType: 'mirror',
      repeat: Infinity,
    },
  },
};

export default function Skeleton() {
  return (
    <>
      {Array.from({ length: 4 }).map(() => (
        <section className="flex h-96 w-72 flex-col justify-between gap-8 rounded-sm">
          <motion.div
            {...skeletonMotion}
            className="group relative flex h-[80%] w-full flex-col justify-center overflow-hidden bg-white shadow-sm"
          />

          <div className="flex h-[20%] flex-col justify-start gap-4">
            <motion.span {...skeletonMotion} className="h-4 w-16"></motion.span>
            <motion.span {...skeletonMotion} className="h-4 w-28"></motion.span>
            <motion.span {...skeletonMotion} className="h-4 w-16"></motion.span>
          </div>
        </section>
      ))}
    </>
  );
}
