import Head from "next/head";
import ComingSoon from "../../components/atoms/ComingSoon";
import PageTitle from "../../components/molecules/PageTitle";
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
        <section>
          <PageTitle title="Blog" />
        </section>
        <section>
          <ComingSoon />
        </section>
      </PageTemplate>
    </div>
  );
}
