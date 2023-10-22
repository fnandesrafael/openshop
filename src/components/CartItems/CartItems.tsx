import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AiOutlineDelete } from 'react-icons/ai';
import useCartStore from '../../store/cartStore';
import trimText from '../../utils/trimText';

export default function CartItems() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useCartStore();

  return (
    <AnimatePresence>
      {cartItems.map((item) => (
        <motion.div
          key={item.id}
          className="relative flex w-full flex-row items-center gap-4 border-b border-zinc-100"
          exit={{ x: 375 }}
        >
          <div className="flex h-32 w-32 items-center justify-center overflow-hidden">
            <img
              src={item.image}
              alt={item.description}
              loading="lazy"
              className="w-24 object-contain p-4"
            />
          </div>

          <div className="flex w-full flex-col gap-2">
            <div className="flex flex-row justify-between">
              <h2 className="text-base">{trimText(item.title, 22)}</h2>
              <button onClick={() => removeFromCart(item)}>
                <AiOutlineDelete className="text-xl transition-colors duration-200 hover:text-red-500" />
              </button>
            </div>
            <div>
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
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
