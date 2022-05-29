import Head from 'next/head';
import PageTemplate from '../components/templates/PageTemplate';
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
      <PageTemplate>
        {/* <div className="text-primary-04">Hello Divine. Let's begin!</div>
        <Button>start-game</Button> */}
      </PageTemplate>
    </div>
  );
}
