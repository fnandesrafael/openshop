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
        className="mobile-l:w-80 mobile-sm:w-[14rem] mobile-m:w-56 mobile-m:text-4xl mobile-sm:text-4xl mobile-l:text-5xl absolute bottom-8 left-[5%] font-serif text-3xl font-extralight tracking-wide text-white md:bottom-10 md:w-[38rem] md:text-[4rem] md:leading-[1.2] xl:bottom-32 xl:w-[62rem] xl:text-[6.5rem] 2xl:w-[72rem] 2xl:text-[8rem]"
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
