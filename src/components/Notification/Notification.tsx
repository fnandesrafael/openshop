import React from 'react';
import { motion } from 'framer-motion';

type NotificationProps = {
  icon: React.ReactNode;
  children: string;
};

export default function Notification({ children, icon }: NotificationProps) {
  return (
    <motion.div
      className="fixed left-[25%] top-8 z-50 flex -translate-x-1/2 transform flex-col items-center justify-center gap-2 rounded-md bg-black p-3 shadow-md md:left-[43%] 2xl:left-[48%]"
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      exit={{ y: -200 }}
    >
      <>{icon}</>
      <p className="text-center text-xs text-white md:text-sm">{children}</p>
    </motion.div>
  );
}
