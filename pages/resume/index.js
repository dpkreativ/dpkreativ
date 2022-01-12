import Head from "next/head";
import PageTitle from "../../components/molecules/PageTitle";
import Resume from "../../components/organisms/Resume";
import PageTemplate from "../../components/templates/PageTemplate";

export default function Home() {
  return (
    <div>
      {/* Page Head */}
      <Head>
        <title>Divine Orji - Résumé</title>
        <meta name="description" content="Divine Orji's portfolio website" />
        <link rel="icon" href="/assets/kreativ.ico" />
      </Head>

      {/* Page Body */}
      <PageTemplate activeIndex={2}>
        <section>
          <PageTitle title="Résumé" />
        </section>

        {/* Resume Content */}
        <Resume />
      </PageTemplate>
    </div>
  );
}
