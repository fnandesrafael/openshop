import React, { Suspense, useState, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import { Skeleton as SearchTagsSkeleton } from './components/SearchTags';
import { Skeleton as ProductsSkeleton } from './components/Products';
import Hero from './components/Hero';

const SearchTags = lazy(() => import('./components/SearchTags'));
const Products = lazy(() => import('./components/Products'));

function App() {
  const [canShowCart, setCanShowCart] = useState(false);

  return (
    <div className="h-full min-h-screen w-full bg-gray-200" role="application">
      <Header setCanShowCart={setCanShowCart} />

      <AnimatePresence mode="wait">
        {canShowCart && <Cart setCanShowCart={setCanShowCart} />}
      </AnimatePresence>

      <Hero />

      <div className="mx-[4%] flex flex-col items-center justify-center">
        <section className="my-[4%] flex w-[18rem] flex-col gap-4 sm:w-[38rem] xl:w-[78rem] 2xl:w-[118rem]">
          <SearchBar />
          <Suspense fallback={<SearchTagsSkeleton />}>
            <SearchTags />
          </Suspense>
        </section>

        <main className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-6">
          <Suspense fallback={<ProductsSkeleton />}>
            <Products />
          </Suspense>
        </main>
      </div>
    </div>
  );
}

export default App;
