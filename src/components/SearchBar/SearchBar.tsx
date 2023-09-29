import React, { memo } from 'react';
import { BiSearch } from 'react-icons/bi';

function SearchBar() {
  return (
    <div className="flex w-[96%] flex-row rounded-sm bg-white">
      <input
        type="text"
        placeholder="lorem ipsum sit dolor"
        className="w-full bg-transparent p-3 text-base outline-none placeholder:text-sm placeholder:text-slate-300"
        role="search"
      />
      <button
        className="flex w-14 flex-col items-center justify-center rounded-r-sm bg-black"
        role="search-btn"
      >
        <BiSearch className="text-xl text-white" />
      </button>
    </div>
  );
}

export default memo(SearchBar);
