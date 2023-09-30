import React, { memo } from 'react';
import { ProductProps } from '../../api';

type ProductCardProps = {
  data: ProductProps;
};

function ProductCard({ data }: ProductCardProps) {
  return (
    <section
      className="relative flex h-96 w-72 flex-col justify-between gap-8 rounded-sm"
      role="card"
    >
      <div
        className="group flex h-[80%] w-full flex-col justify-center overflow-hidden bg-white shadow-sm hover:cursor-pointer"
        role="preview"
      >
        <img
          className="scale-50 transition-all duration-700 ease-in-out hover:duration-700 group-hover:scale-75"
          src={data.image}
          alt={data.description}
        />
      </div>

      <div className="flex h-[20%] flex-col justify-start" role="contentinfo">
        <h1 className="text-xl font-semibold">{`$ ${data.price}`}</h1>
        <span className="text-sm">{`★ ${data.rating.rate}`}</span>
        <h5 className="overflow-hidden text-base">{data.title}</h5>
      </div>
    </section>
  );
}

export default memo(ProductCard);
