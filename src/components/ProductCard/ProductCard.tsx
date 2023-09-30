import React, { memo } from 'react';
import { ProductProps } from '../../api';

type ProductCardProps = {
  data: ProductProps;
};

function ProductCard({ data }: ProductCardProps) {
  return (
    <div
      className="flex h-96 w-72 flex-col justify-between rounded-sm bg-white shadow-sm"
      role="card"
    >
      <div
        className="flex h-[66%] w-full flex-col justify-center overflow-hidden"
        role="preview"
      >
        <img
          className="scale-75 transition-all duration-500 ease-in-out hover:scale-90 hover:duration-500"
          src={data.image}
          alt={data.description}
        />
      </div>

      <div
        className="flex h-[34%] flex-col justify-start p-4"
        role="contentinfo"
      >
        <h1 className="text-xl font-semibold">{`$ ${data.price}`}</h1>
        <span className="text-sm">{`★ ${data.rating.rate}`}</span>
        <h5 className="overflow-hidden text-base">{data.title}</h5>
      </div>
    </div>
  );
}

export default memo(ProductCard);
