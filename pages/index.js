import Head from "next/head";
import LandingPage from "../components/LandingPage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Divine Orji - Frontend Developer</title>
        <meta name="description" content="Divine Orji's portfolio website" />
        <link rel="icon" href="/assets/kreativ.ico" />
      </Head>
      <LandingPage />
    </div>
  );
}
