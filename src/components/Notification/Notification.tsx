import React from 'react';
import { motion } from 'framer-motion';

type NotificationProps = {
  icon: React.ReactNode;
  children: string;
};

export default function Notification({ children, icon }: NotificationProps) {
  return (
    <motion.span
      className="w-18 fixed left-[43%] top-4 z-50 flex flex-col items-center justify-center gap-1 rounded-sm bg-black p-4 py-3"
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      exit={{ y: -200 }}
    >
      <>{icon}</>
      <p className="text-sm text-white">{children}</p>
    </motion.span>
  );
}
