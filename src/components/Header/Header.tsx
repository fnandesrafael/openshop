import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Header() {
  return (
    <header
      className="flex h-24 w-full flex-row items-center justify-between bg-gray-200 p-8 shadow-sm"
      role="header"
    >
      <h1 className="text-xl font-semibold" role="heading">
        openshop
      </h1>

      <button
        className="flex h-12 w-12 flex-col items-center justify-center rounded-full border-[1px] border-solid border-black transition-all ease-in-out hover:bg-black hover:text-slate-200 hover:transition-all"
        role="button"
      >
        <AiOutlineShoppingCart className="mr-[2px] text-xl" />
      </button>
    </header>
  );
}
