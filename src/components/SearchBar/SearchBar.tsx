import React, { memo, useRef, useState } from 'react';
import useProductStore from '../../store/productStore';
import Spinner from '../Spinner';

function SearchBar() {
  const { products, filterProducts } = useProductStore();
  const [isLoading, setIsLoading] = useState(false);
  const inputValue = useRef<HTMLInputElement>();
  const debounce = useRef<NodeJS.Timeout | null>(null);

  const handleSearch = () => {
    if (debounce.current) {
      clearTimeout(debounce.current);
    }

    setIsLoading(true);

    debounce.current = setTimeout(() => {
      filterProducts(
        products.filter((product) =>
          product.title
            .toLowerCase()
            .includes(inputValue.current.value.toLowerCase()),
        ),
      );
      setIsLoading(false);
    }, 1000);
  };
  return (
    <div className="flex w-full flex-row rounded-sm bg-white hover:bg-slate-300 hover:text-black">
      <input
        type="text"
        placeholder="type a term to search"
        className="w-full bg-transparent p-3 text-base outline-none transition-colors duration-500 ease-in-out placeholder:text-sm placeholder:text-slate-300 hover:placeholder:text-slate-400"
        role="search"
        ref={inputValue}
        onChange={handleSearch}
      />
      {isLoading && <Spinner />}
    </div>
  );
}

export default memo(SearchBar);
