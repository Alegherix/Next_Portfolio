import Head from 'next/head';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Project from '../components/Project';
import Portfolio from '../components/Portfolio';

export default function Home() {
  const techs = ['Next.js ', 'Tailwind'];
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Navbar />
        <Hero />
        <Portfolio />
      </Layout>
    </div>
  );
}
