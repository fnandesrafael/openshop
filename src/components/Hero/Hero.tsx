import React from 'react';
import { motion } from 'framer-motion';
import stockVideo from '../../assets/stock.mp4';
import ScrollTip from '../ScrollTip';

export default function Hero() {
  return (
    <section
      className="relative mb-12 h-[52vw] w-full overflow-hidden"
      role="hero"
    >
      <span className="absolute h-full w-full bg-black opacity-40" />

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 4, delay: 0.6 } }}
        className="absolute left-[4vw] top-[10vw] w-4/6 font-serif text-[8vw] font-extralight leading-tight tracking-wide text-white"
      >
        Mussum ipsum cacilds vidis litro abertis.
      </motion.h1>

      <video className="w-full" src={stockVideo} loop autoPlay muted />

      <ScrollTip />
    </section>
  );
}
