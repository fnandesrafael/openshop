import React from 'react';
import { ProductProps } from '../../api';

type ProductCardProps = {
  data: ProductProps;
};

export default function ProductCard({ data }: ProductCardProps) {
  return (
    <div className="w-72 rounded-sm bg-white p-6 shadow-sm" role="card">
      {data.title}
    </div>
  );
}
