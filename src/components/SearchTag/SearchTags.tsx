import React from 'react';

export default function SearchTags() {
  return (
    <div className="flex flex-row gap-4 rounded-sm">
      <label
        className="flex h-6 flex-col items-center justify-center rounded-sm bg-white p-4 hover:cursor-pointer hover:bg-slate-50"
        htmlFor="electronics"
      >
        electronics
        <input
          className="hidden"
          type="checkbox"
          id="electronics"
          role="searchbox"
        />
      </label>

      <label
        className="flex h-6 flex-col items-center justify-center rounded-sm bg-white p-4 hover:cursor-pointer hover:bg-slate-50"
        htmlFor="jewelery"
      >
        jewelery
        <input
          className="hidden"
          type="checkbox"
          id="jewelery"
          role="searchbox"
        />
      </label>

      <label
        className="flex h-6 flex-col items-center justify-center rounded-sm bg-white p-4 hover:cursor-pointer hover:bg-slate-50"
        htmlFor="men's clothing"
      >
        men's clothing
        <input
          className="hidden"
          type="checkbox"
          id="men's clothing"
          role="searchbox"
        />
      </label>

      <label
        className="flex h-6 flex-col items-center justify-center rounded-sm bg-white p-4 hover:cursor-pointer hover:bg-slate-50"
        htmlFor="women's clothing"
      >
        women's clothing
        <input
          className="hidden"
          type="checkbox"
          id="women's clothing"
          role="searchbox"
        />
      </label>
    </div>
  );
}
