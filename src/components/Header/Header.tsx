import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

export default function Header() {
  return (
    <header
      className="flex h-[4.5rem] w-full flex-row items-center justify-between bg-gray-200 p-6 shadow-sm"
      role="header"
    >
      <h1 className="text-base font-medium" role="heading">
        openshop
      </h1>

      <button
        className="flex h-10 w-10 flex-col items-center justify-center rounded-full border-[1px] border-solid border-black transition-all ease-in-out hover:bg-black hover:text-slate-200 hover:transition-all"
        role="button"
      >
        <AiOutlineShoppingCart className="mr-[2px] text-lg" />
      </button>
    </header>
  );
}
