import React, { memo, useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRightShort } from 'react-icons/bs';
import useCartStore from '../../store/cartStore';
import sum from '../../utils/sum';
import CartItems from '../CartItems';

type CartProps = {
  setCanShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Cart({ setCanShowCart }: CartProps) {
  const { cartItems } = useCartStore();

  useLayoutEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      e.preventDefault();

      if (e.key === 'Escape') {
        setCanShowCart(false);
      }
    };
    document.addEventListener('keydown', handleKeydown);

    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [setCanShowCart]);

  return (
    <>
      <motion.aside
        initial={{ x: 750 }}
        animate={{ x: 0 }}
        exit={{ x: 750 }}
        transition={{ damping: 25, type: 'spring', stiffness: 250 }}
        className="fixed right-0 top-0 z-20 h-screen w-full origin-right bg-white sm:w-[50%] md:w-[40%] lg:w-[30%]"
        role="tab"
      >
        <header
          className="flex h-16 w-full flex-row items-center justify-between p-6 shadow-sm"
          role="header"
        >
          <h1 className="text-lg">Cart Items:</h1>

          <button
            className="translate-x-3 rounded-full p-1 transition-all ease-in-out hover:bg-slate-200"
            role="close-btn"
            onClick={() => setCanShowCart(false)}
          >
            <BsArrowRightShort className="text-3xl" />
          </button>
        </header>

        <section
          className={`flex h-full w-full flex-col ${
            cartItems.length === 0 && 'justify-center'
          } items-center overflow-y-scroll p-4 pb-[7.5rem] pt-0`}
        >
          {cartItems.length > 0 ? (
            <CartItems />
          ) : (
            <motion.h1
              className="text-lg text-slate-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Cart is Empty
            </motion.h1>
          )}
        </section>

        <div className="absolute bottom-0 flex w-full flex-row items-center justify-between bg-slate-200 p-4 pl-5">
          <h1 className="text-lg">Total Cart: </h1>
          <b className="text-lg font-semibold">
            $ {sum(cartItems, 'price').toFixed(2)}
          </b>
        </div>
      </motion.aside>

      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.25 }}
        exit={{ opacity: 0 }}
        className="fixed z-10 h-full w-full bg-black opacity-10"
        onClick={() => setCanShowCart(false)}
      />
    </>
  );
}

export default memo(Cart);
