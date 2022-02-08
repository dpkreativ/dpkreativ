import Head from "next/head";
import About from "../components/organisms/About";
import Hero from "../components/organisms/Hero";
import PageTemplate from "../components/templates/PageTemplate";

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
      <PageTemplate activeIndex={1}>
        {/* Hero Section */}
        <Hero />
        <section className="lg:my-32"></section>
        {/* About Section */}
        <About />
      </PageTemplate>
    </div>
  );
}
