import React from 'react';
import Link from 'next/link';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  return (
    <nav className="pt-8 flex justify-between text-ocean h-16">
      <p className="text-xl font-bold text-ocean">Martin Hansson</p>
      <ul className="flex gap-8 mr-4">
        <li>Home</li>
        <li>Projects</li>
        <li>Contact me</li>
      </ul>
    </nav>
  );
};

export default Navbar;
