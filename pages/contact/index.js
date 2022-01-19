import Head from "next/head";
import PageTitle from "../../components/molecules/PageTitle";
import ContactForm from "../../components/organisms/ContactForm";
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
        <section>
          <PageTitle title="Contact" />
        </section>
        <section className="px-6 py-12 lg:px-12 max-w-5xl mx-auto">
          <ContactForm />
        </section>
      </PageTemplate>
    </div>
  );
}
