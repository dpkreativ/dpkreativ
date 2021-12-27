import Head from "next/head";
import PageTemplate from "../../components/templates/PageTemplate";

export default function Home() {
  return (
    <div>
      {/* Page Head */}
      <Head>
        <title>Divine Orji - Blog</title>
        <meta name="description" content="Divine Orji's portfolio website" />
        <link rel="icon" href="/assets/kreativ.ico" />
      </Head>

      {/* Page Body */}
      <PageTemplate activeIndex={4}>
        <section>Hi, this is the blog</section>
      </PageTemplate>
    </div>
  );
}
