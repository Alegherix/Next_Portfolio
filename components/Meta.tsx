import Head from 'next/head';

const Meta: React.FC = () => {
  return (
    <Head>
      <title>Martin Hansson</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        property="og:title"
        content="Portfolio by Martin Hansson"
        key="title"
      />
      <meta
        property="og:description"
        content="Portfolio site made to showcase my work."
        key="description"
      />
      <meta
        name="description"
        content="Portfolio site made to showcase my work."
      ></meta>
    </Head>
  );
};

export default Meta;
