import React, { Suspense, useState, lazy } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Cart from './components/Cart';
import SearchBar from './components/SearchBar';
import { Skeleton as SearchTagsSkel } from './components/SearchTags';
import { Skeleton as ProductCardSkel } from './components/Products';
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

      <section className="ml-[4%] flex flex-col gap-4">
        <SearchBar />
        <Suspense fallback={<SearchTagsSkel />}>
          <SearchTags />
        </Suspense>
      </section>

      <main className="ml-[4%] mt-16 flex w-[96%] flex-row flex-wrap items-center justify-start gap-8">
        <Suspense fallback={<ProductCardSkel />}>
          <Products />
        </Suspense>
      </main>
    </div>
  );
}

export default App;
