import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Divine Orji - Software Engineer</title>
        <meta name="description" content="Divine Orji's portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Divine Orji</h1>
      </main>
    </div>
  );
}
