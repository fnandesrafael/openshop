import React, { Suspense, useState, lazy, useLayoutEffect } from 'react';
import { BsCartCheck } from 'react-icons/bs';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import { Skeleton as SearchTagsSkeleton } from './components/SearchTags';
import { Skeleton as ProductsSkeleton } from './components/Products';
import Hero from './components/Hero';
import Notification from './components/Notification';

const SearchTags = lazy(() => import('./components/SearchTags'));
const Products = lazy(() => import('./components/Products'));

function App() {
  const [canShowCart, setCanShowCart] = useState(false);
  const [itemAdded, setItemAdded] = useState(false);
  const [itemAlreadyAdded, setItemAlreadyAdded] = useState(false);

  useLayoutEffect(() => {
    if (canShowCart) {
      document.body.style.cssText = 'overflow: hidden';
    } else {
      document.body.style.cssText = 'overflow: auto';
    }
  }, [canShowCart]);

  return (
    <div className="h-full min-h-screen w-full bg-gray-200" role="application">
      <Header setCanShowCart={setCanShowCart} />

      <AnimatePresence mode="wait">
        {itemAdded && (
          <Notification
            icon={
              <BsCartCheck className="text-base text-emerald-400 md:text-lg" />
            }
          >
            product added to your cart.
          </Notification>
        )}
        {itemAlreadyAdded && (
          <Notification
            icon={<BsCartCheck className="text-base text-red-500 md:text-lg" />}
          >
            product already in your cart.
          </Notification>
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {canShowCart && <Cart setCanShowCart={setCanShowCart} />}
      </AnimatePresence>

      <Hero />

      <div className="mx-[4%] flex flex-col items-center justify-center">
        <section className="my-[4%] flex w-[18rem] flex-col gap-4 sm:w-[38rem] xl:w-[78rem] 2xl:w-[106rem]">
          <SearchBar />
          <Suspense fallback={<SearchTagsSkeleton />}>
            <SearchTags />
          </Suspense>
        </section>

        <main className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-16">
          <Suspense fallback={<ProductsSkeleton />}>
            <Products
              setItemAdded={setItemAdded}
              setItemAlreadyAdded={setItemAlreadyAdded}
            />
          </Suspense>
        </main>
      </div>

      <footer className="flex h-[3.75rem] w-full flex-col items-center justify-center bg-slate-300 p-4 text-center text-xs text-slate-400 md:text-base">
        Copyright © 2023 - Rafael Fernandes de Lima
      </footer>
    </div>
  );
}

export default App;
