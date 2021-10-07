import Head from "next/head";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Divine Orji - Software Engineer</title>
        <meta name="description" content="Divine Orji's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </div>
  );
}
