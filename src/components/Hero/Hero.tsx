import React from 'react';
import stockVideo from '../../assets/stock.mp4';

export default function Hero() {
  return (
    <section
      className="relative mb-12 h-[52vw] w-full overflow-hidden"
      role="hero"
    >
      <span className="absolute h-full w-full bg-black opacity-40" />

      <h1 className="absolute left-[4vw] top-[10vw] w-4/6 font-serif text-[8vw] font-extralight leading-tight tracking-wide text-white">
        Mussum ipsum cacilds vidis litro abertis.
      </h1>

      <video className="w-full" src={stockVideo} loop autoPlay muted />
    </section>
  );
}
