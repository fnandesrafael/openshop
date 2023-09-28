import React, { useState } from 'react';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  const [canShowCart, setCanShowCart] = useState(true);

  return (
    <div className="h-screen w-full bg-gray-200" role="application">
      <Header />

      {canShowCart && <Cart setCanShowCart={setCanShowCart} />}
    </div>
  );
}

export default App;
