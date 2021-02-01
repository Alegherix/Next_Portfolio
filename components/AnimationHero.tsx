import React from 'react';
import TriangleAnimation from './TriangleAnimation';
import Navbar from './Navbar';
import Hero from './Hero';
import Wrapper from './Wrapper';

interface AnimationHeroProps {}

const AnimationHero: React.FC<AnimationHeroProps> = ({}) => {
  return (
    <>
      <TriangleAnimation />
      <Wrapper>
        <Navbar />
        <Hero />
      </Wrapper>
    </>
  );
};

export default AnimationHero;
