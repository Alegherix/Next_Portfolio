import React from 'react';
import TriangleAnimation from './TriangleAnimation';
import Navbar from './Navbar';
import Hero from './Hero';
import Wrapper from './Wrapper';
import { motion } from 'framer-motion';

interface AnimationHeroProps {}

const AnimationHero: React.FC<AnimationHeroProps> = ({}) => {
  return (
    <>
      <motion.div
        className="fixed w-screen h-screen bg-evening z-20 px-4"
        initial={{ y: 0 }}
        animate={{ y: '-100vh', transition: { delay: 3.2, duration: 1 } }}
      >
        <TriangleAnimation />
      </motion.div>
      <Wrapper>
        <Navbar />
        <Hero />
      </Wrapper>
    </>
  );
};

export default AnimationHero;
