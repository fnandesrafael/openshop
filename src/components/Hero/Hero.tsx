import React, { memo } from 'react';
import { motion } from 'framer-motion';
import stockVideo from '../../assets/stock.mp4';
import ScrollTip from '../ScrollTip';

function Hero() {
  return (
    <section
      className="relative mb-8 h-[92vw] w-full overflow-hidden md:h-[52vw]"
      role="hero"
    >
      <span className="absolute h-full w-full bg-black opacity-40" />

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 4, delay: 0.6 } }}
        className="absolute left-5 top-20 w-3/4 font-serif text-4xl font-extralight leading-tight tracking-wide text-white md:left-7 md:top-40 md:w-4/6 md:text-[8vw] 2xl:top-72"
      >
        Mussum ipsum cacilds vidis litro abertis.
      </motion.h1>

      <video
        className="h-full object-cover md:w-full"
        src={stockVideo}
        loop
        autoPlay
        muted
      />

      <ScrollTip />
    </section>
  );
}

export default memo(Hero);
