import React, { useState, useEffect } from 'react';
import TriangleAnimation from './TriangleAnimation';
import Navbar from './Navbar';
import Hero from './Hero';
import Wrapper from './Wrapper';
import { motion } from 'framer-motion';

interface IShownSvg {
  key: 'SVG';
  value: boolean;
}

const AnimationHero: React.FC = () => {
  const [shownSvg, setShownSvg] = useState<boolean>(false);

  const setData = ({ key, value }: IShownSvg) => {
    localStorage.setItem(key, value.toString());
  };

  const getPersistedData = (key: string): boolean | null => {
    const value: boolean | null = JSON.parse(localStorage.getItem(key));
    return value;
  };

  // Have to wrap in useEffect to prevent undefined from localStorage,
  useEffect(() => {
    setShownSvg(getPersistedData('SVG'));
  }, []);

  return (
    <>
      {!shownSvg && (
        <motion.div
          className="fixed w-screen h-screen bg-evening z-20 px-4"
          initial={{ y: 0 }}
          animate={{ y: '-100vh', transition: { delay: 3.2, duration: 1 } }}
          onAnimationComplete={() => setData({ key: 'SVG', value: true })}
        >
          <TriangleAnimation />
        </motion.div>
      )}

      <Wrapper>
        <Navbar />
        <Hero />
      </Wrapper>
    </>
  );
};

export default AnimationHero;
