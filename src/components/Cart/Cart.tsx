import React from 'react';
import { BsArrowRightShort } from 'react-icons/bs';

type CartProps = {
  setCanShowCart: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Cart({ setCanShowCart }: CartProps) {
  return (
    <aside
      className="fixed right-0 top-0 h-screen w-full bg-white sm:w-[50%] md:w-[40%] lg:w-[30%]"
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
          className="rounded-full p-1 transition-all ease-in-out  hover:bg-slate-50"
          role="button"
          onClick={() => setCanShowCart(false)}
        >
          <BsArrowRightShort className="text-3xl" />
        </button>
      </header>
    </aside>
  );
}
