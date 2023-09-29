import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useQuery } from 'react-query';
import getData from './api';
import Header from './components/Header';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';

function App() {
  const [canShowCart, setCanShowCart] = useState(false);
  const { data } = useQuery({ queryKey: 'openshop-db', queryFn: getData });

  return (
    <div className="h-screen w-full bg-gray-200" role="application">
      <Header setCanShowCart={setCanShowCart} />

      <AnimatePresence mode="wait">
        {canShowCart && <Cart setCanShowCart={setCanShowCart} />}
      </AnimatePresence>

      <section className="ml-[4%] flex flex-col gap-4">
        <SearchBar />
      </section>
    </div>
  );
}

export default App;
