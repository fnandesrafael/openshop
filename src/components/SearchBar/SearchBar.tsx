import React from 'react';

export default function SearchBar() {
  return (
    <section className="flex flex-col items-center">
      <div className="flex w-[90%] flex-row rounded-sm bg-white">
        <input
          type="text"
          placeholder="lorem ipsum sit dolor"
          className="w-[80%] rounded-sm bg-white p-3 text-base outline-none placeholder:text-sm placeholder:text-slate-300"
          role="search"
        />
      </div>
    </section>
  );
}
