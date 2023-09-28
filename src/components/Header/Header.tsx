import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

type HeaderProps = {
  setCanShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setCanShowCart }: HeaderProps) {
  return (
    <header
      className="flex h-24 w-full flex-row items-center justify-between bg-gray-200 p-8 shadow-sm"
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

        <span
          className="pointer-events-none absolute -bottom-2 -left-1 flex h-5 w-5 flex-col items-center justify-center rounded-full border-[1px] border-solid border-slate-200 bg-black text-xs text-slate-200"
          role="log"
        >
          0
        </span>
      </div>
    </header>
  );
}
