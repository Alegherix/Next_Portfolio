import Head from 'next/head';
import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import PageTransition from '../components/PageTransition';
import Portfolio from '../components/Portfolio';
import TriangleAnimation from '../components/TriangleAnimation';
import Wrapper from '../components/Wrapper';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Martin Hansson</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <TriangleAnimation /> */}
      <Wrapper>
        <Navbar />
        <Hero />
      </Wrapper>
      <About />
      <PageTransition />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}
