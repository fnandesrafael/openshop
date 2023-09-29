import React from 'react';
import { BiSearch } from 'react-icons/bi';

export default function SearchBar() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex w-[90%] flex-row rounded-sm bg-white">
        <input
          type="text"
          placeholder="lorem ipsum sit dolor"
          className="w-full rounded-sm bg-white p-3 text-base outline-none placeholder:text-sm placeholder:text-slate-300"
          role="search"
        />
        <button
          className="flex w-14 flex-col items-center justify-center rounded-r-sm bg-black"
          role="search-btn"
        >
          <BiSearch className="text-xl text-white" />
        </button>
      </div>
    </section>
  );
}
