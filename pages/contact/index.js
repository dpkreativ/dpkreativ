import Head from "next/head";
import PageTemplate from "../../components/templates/PageTemplate";

export default function Home() {
  return (
    <div>
      {/* Page Head */}
      <Head>
        <title>Divine Orji - Contact Me</title>
        <meta name="description" content="Divine Orji's portfolio website" />
        <link rel="icon" href="/assets/kreativ.ico" />
      </Head>

      {/* Page Body */}
      <PageTemplate activeIndex={5}>
        <section>Hi, this is the contact page</section>
      </PageTemplate>
    </div>
  );
}
