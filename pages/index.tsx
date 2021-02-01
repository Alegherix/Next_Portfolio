import Head from 'next/head';
import React from 'react';
import About from '../components/About';
import AnimationHero from '../components/AnimationHero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Meta from '../components/Meta';
import PageTransition from '../components/PageTransition';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <>
      <Meta />
      <AnimationHero />
      <About />
      <PageTransition />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}
