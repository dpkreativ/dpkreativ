import Head from 'next/head';
import Button from '../components/UI/atoms/Button';

export default function Home() {
  return (
    <div>
      {/* Page Head */}
      <Head>
        <title>Divine Orji - Software Engineer</title>
        <meta name="description" content="Divine Orji's portfolio website" />
        <link rel="icon" href="/assets/kreativ.ico" />
      </Head>

      {/* Page Body */}
      <div>Hello Divine. Let's begin!</div>
      <Button>Hehe</Button>
    </div>
  );
}
