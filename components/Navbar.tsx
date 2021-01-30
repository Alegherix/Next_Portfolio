import React from 'react';
import { SmoothScroll } from './SmoothScroll';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="pt-8 flex justify-between text-ocean h-16 relative z-10">
      <p className="text-xl font-bold text-ocean">Martin Hansson</p>
      <ul className="flex gap-8 mr-4">
        <SmoothScroll text="Portfolio" to="portfolio" />
        <SmoothScroll text="Contact me" to="contact" />
      </ul>
    </nav>
  );
};

export default Navbar;
