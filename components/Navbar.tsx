import React from 'react';
import { SmoothScroll } from './SmoothScroll';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="justify-center pt-8 flex md:justify-between text-ocean h-16 relative z-10">
      <p className="text-xl font-bold text-ocean">Martin Hansson</p>
      <ul className="gap-8 mr-4 hidden md:flex">
        <SmoothScroll text="About" to="about" />
        <SmoothScroll text="Portfolio" to="portfolio" />
        <SmoothScroll text="Contact me" to="contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
