import { IoChevronDown } from 'react-icons/io5';
import { SmoothScrollButton } from './SmoothScroll';
import Image from 'next/image';
import { motion } from 'framer-motion';
import defaultVariant from '../utils/utils';

function Hero() {
  return (
    <>
      <main
        className="rel flex flex-col justify-center items-center"
        style={{ minHeight: 'calc(100vh - 64px)' }}
      >
        <Image
          className="absolute opacity-3"
          src="/hero.avif"
          layout="fill"
          alt="background image of computer and coffee"
          priority={true}
        />
        <div className="z-10">
          <motion.h1
            variants={defaultVariant()}
            initial="init"
            animate="end"
            className="text-4xl md:text-6xl lg:text-8xl text-ocean mb-6 leading-tight"
          >
            Fullstack Student
          </motion.h1>
          <motion.div
            variants={defaultVariant(25, 0.6, 0.4)}
            initial="init"
            animate="end"
          >
            <p className="text-lg">
              Hello, I'm <span className="text-hearth">Martin</span>, A Webdev
              student at Yrgo based in Gothenburg.
            </p>
            <p className="mb-6 text-lg">
              {' '}
              Welcome to my site, I’m happy to have you here.
            </p>

            <SmoothScrollButton
              text="View my work "
              to="portfolio"
              Icon={IoChevronDown}
            />
          </motion.div>
        </div>
      </main>
    </>
  );
}

export default Hero;
