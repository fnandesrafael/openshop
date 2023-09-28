import React from 'react';

export default function Cart() {
  return (
    <aside
      className="fixed right-0 top-0 h-screen w-full bg-white sm:w-[50%] md:w-[40%] lg:w-[30%]"
      role="tab"
    >
      <header role="header">
        <h1 role="heading">Cart Items</h1>
        <button role="button">Close</button>
      </header>
    </aside>
  );
}
