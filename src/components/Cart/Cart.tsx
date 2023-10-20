import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { BsArrowRightShort } from 'react-icons/bs';
import useCartStore from '../../store/cartStore';
import trimText from '../../utils/trimText';
import sum from '../../utils/sum';

type CartProps = {
  setCanShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Cart({ setCanShowCart }: CartProps) {
  const { cartItems, increaseQuantity, decreaseQuantity } = useCartStore();

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
          <h1 className="text-lg" role="heading">
            Cart Items
          </h1>

          <button
            className="translate-x-3 rounded-full p-1 transition-all ease-in-out hover:bg-slate-200"
            role="close-btn"
            onClick={() => setCanShowCart(false)}
          >
            <BsArrowRightShort className="text-3xl" />
          </button>
        </header>

        <section className="flex h-full w-full flex-col overflow-y-scroll p-4 pb-[7.5rem] pt-0">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-row items-center gap-4 border-b border-zinc-100 p-2"
            >
              <div className="flex h-32 w-32 items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.description}
                  loading="lazy"
                  className="w-24 object-contain p-4"
                />
              </div>

              <div className="flex w-60 flex-col gap-2">
                <div>
                  <h2 className="text-sm">{trimText(item.title, 26)}</h2>
                  <h1 className="text-base font-semibold">{`$ ${item.price}`}</h1>
                </div>

                <div className="flex flex-row justify-between">
                  <h3>quantity: </h3>
                  <div className="flex flex-row items-center justify-end gap-4">
                    <motion.button
                      className="flex h-5 w-5 items-center justify-center bg-black text-lg text-white"
                      onClick={() => decreaseQuantity(item)}
                      initial={{ scale: 1 }}
                      whileTap={{ scale: 0.85, backgroundColor: '#7a7a7a' }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      -
                    </motion.button>
                    <span>{item.quantity}</span>
                    <motion.button
                      className="flex h-5 w-5 items-center justify-center bg-black text-lg text-white"
                      onClick={() => increaseQuantity(item)}
                      initial={{ scale: 1 }}
                      whileTap={{ scale: 0.85, backgroundColor: '#7a7a7a' }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                    >
                      +
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          ))}
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
      />
    </>
  );
}

export default memo(Cart);
