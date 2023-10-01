import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { TbShoppingCartPlus } from 'react-icons/tb';
import { ProductProps } from '../../api';
import trimText from '../../utils/trimText';

type ProductCardProps = {
  data: ProductProps;
};

function ProductCard({ data }: ProductCardProps) {
  return (
    <section
      className="flex h-96 w-72 flex-col justify-between gap-8 rounded-sm"
      role="card"
    >
      <div
        className="group relative flex h-[80%] w-full flex-col justify-center overflow-hidden bg-white shadow-sm"
        role="preview"
      >
        <motion.button
          initial={{ scale: 1 }}
          whileTap={{ scale: 0.85, backgroundColor: '#7a7a7a' }}
          transition={{ duration: 0.2, ease: 'easeInOut' }}
          className="absolute -right-16 bottom-2 z-10 flex h-12 w-12 flex-col items-center justify-center rounded-sm bg-black shadow-sm transition-[right] duration-300 ease-in-out group-hover:right-2"
          role="add-btn"
        >
          <TbShoppingCartPlus className="mr-0.5 text-xl text-white" />
        </motion.button>

        <img
          className="scale-50 transition-all duration-700 ease-in-out hover:duration-700 group-hover:scale-75"
          src={data.image}
          alt={data.description}
        />
      </div>

      <div className="flex h-[20%] flex-col justify-start" role="contentinfo">
        <h1 className="text-xl font-semibold">{`$ ${data.price}`}</h1>
        <span
          className={`text-sm ${
            data.rating.rate < 3 ? 'text-amber-500' : 'text-emerald-600'
          }`}
        >{`★ ${data.rating.rate}`}</span>
        <h5 className="text-base underline-offset-8 hover:cursor-pointer hover:underline">
          {trimText(data.title, 30)}
        </h5>
      </div>
    </section>
  );
}

export default memo(ProductCard);
