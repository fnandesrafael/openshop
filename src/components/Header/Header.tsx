import React, { memo } from 'react';
import { IoCartOutline } from 'react-icons/io5';
import { motion } from 'framer-motion';
import sum from '../../utils/sum';
import useCartStore from '../../store/cartStore';

type HeaderProps = {
  setCanShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Header({ setCanShowCart }: HeaderProps) {
  const { cartItems } = useCartStore();

  return (
    <header
      className="fixed z-10 flex h-20 w-full flex-row items-center justify-between bg-gray-200 p-8 opacity-95 shadow-sm"
      role="header"
    >
      <h1 className="text-xl font-semibold" role="heading">
        openshop
      </h1>

      <div className="relative">
        <button
          className="flex h-12 w-12 flex-col items-center justify-center rounded-full border-[1px] border-solid border-black transition-all ease-in-out hover:bg-black hover:text-slate-200 hover:transition-all"
          role="cart-btn"
          onClick={() => setCanShowCart(true)}
        >
          <IoCartOutline className="mr-[2px] text-2xl" />
        </button>

        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="pointer-events-none absolute -bottom-2 -left-1 flex h-6 w-6 flex-col items-center justify-center rounded-full border-[1px] border-solid border-slate-200 bg-black text-xs text-slate-200"
          role="log"
        >
          {sum(cartItems, 'quantity')}
        </motion.span>
      </div>
    </header>
  );
}

export default memo(Header);
