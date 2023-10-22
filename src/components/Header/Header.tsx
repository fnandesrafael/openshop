import React from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import sum from '../../utils/sum';
import useCartStore from '../../store/cartStore';
import useHeaderStyles from '../../hooks/useHeaderStyles';

type HeaderProps = {
  setCanShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ setCanShowCart }: HeaderProps) {
  const { cartItems } = useCartStore();
  const { backgroundColor, boxShadow, opacity, textColor } = useHeaderStyles();

  return (
    <motion.header
      className="fixed z-10 flex h-16 w-full flex-row items-center justify-between p-5 pr-4 opacity-95 transition-all duration-500 ease-in-out md:h-20 md:p-8 2xl:h-24"
      style={{ backgroundColor, boxShadow }}
      role="header"
    >
      <motion.h1
        className="text-lg font-semibold transition-colors duration-500 ease-in-out md:text-lg 2xl:p-6 2xl:text-2xl"
        style={{ color: textColor }}
        role="heading"
      >
        <a href="/">openshop</a>
      </motion.h1>

      <motion.div
        className="relative transition-opacity duration-500 ease-in-out"
        style={{ opacity }}
      >
        <button
          className="flex h-10 w-10 flex-col items-center justify-center rounded-full border-[1px] border-solid border-black transition-all ease-in-out hover:bg-black hover:text-slate-200 hover:transition-all md:h-12 md:w-12 2xl:h-14 2xl:w-14"
          role="cart-btn"
          onClick={() => setCanShowCart(true)}
        >
          <IoCartOutline className="mr-[2px] text-lg md:text-2xl 2xl:text-3xl" />
        </button>

        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="pointer-events-none absolute -bottom-2 -left-1 flex h-5 w-5 flex-col items-center justify-center rounded-full bg-black text-xs text-slate-200 md:h-6 md:w-6 2xl:text-base"
          role="log"
        >
          {sum(cartItems, 'quantity')}
        </motion.span>
      </motion.div>
    </motion.header>
  );
}

export default Header;
