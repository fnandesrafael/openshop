import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRightShort } from 'react-icons/bs';

type CartProps = {
  setCanShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Cart({ setCanShowCart }: CartProps) {
  return (
    <motion.aside
      initial={{ x: 500 }}
      animate={{ x: 0 }}
      exit={{ x: 500 }}
      transition={{ damping: 25, type: 'spring', stiffness: 250 }}
      className="fixed right-0 top-0 z-20 h-screen w-full origin-right bg-white sm:w-[50%] md:w-[40%] lg:w-[30%]"
      role="tab"
    >
      <header
        className="flex h-16 w-full flex-row items-center justify-between p-6 shadow-sm"
        role="header"
      >
        <h1 className="text-lg" role="heading">
          Cart Items
        </h1>

        <button
          className="rounded-full p-1 transition-all ease-in-out  hover:bg-slate-50"
          role="close-btn"
          onClick={() => setCanShowCart(false)}
        >
          <BsArrowRightShort className="text-3xl" />
        </button>
      </header>
    </motion.aside>
  );
}

export default memo(Cart);
