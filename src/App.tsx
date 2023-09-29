import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useQuery } from 'react-query';
import getData from './api';
import Header from './components/Header';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import SearchTags from './components/SearchTag';
import ProductCard from './components/ProductCard';

function App() {
  const [canShowCart, setCanShowCart] = useState(false);
  const { data } = useQuery({ queryKey: 'openshop-db', queryFn: getData });

  return (
    <div className="h-full w-full bg-gray-200" role="application">
      <Header setCanShowCart={setCanShowCart} />

      <AnimatePresence mode="wait">
        {canShowCart && <Cart setCanShowCart={setCanShowCart} />}
      </AnimatePresence>

      <section className="ml-[4%] flex flex-col gap-4">
        <SearchBar />
        <SearchTags categories={data?.categories} />
      </section>

      <main className="ml-[2%] mt-16 flex w-[96%] flex-row flex-wrap items-center justify-center gap-[1.9rem]">
        {data?.products?.map((product) => (
          <ProductCard data={product} key={product.id} />
        ))}
      </main>
    </div>
  );
}

export default App;
