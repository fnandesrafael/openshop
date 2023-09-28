import React from 'react';
import Header from './components/Header';
import Cart from './components/Cart';

function App() {
  return (
    <div className="h-screen w-full bg-gray-200">
      <Header />
      <Cart setCanShowCart={() => {}} />
    </div>
  );
}

export default App;
