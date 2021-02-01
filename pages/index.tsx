import Head from 'next/head';
import React from 'react';
import About from '../components/About';
import AnimationHero from '../components/AnimationHero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PageTransition from '../components/PageTransition';
import Portfolio from '../components/Portfolio';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Martin Hansson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AnimationHero />
      <About />
      <PageTransition />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
