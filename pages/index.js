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
        <section className="p-5 my-20 md:my-32 mx-auto w-full max-w-5xl grid gap-5 md:grid-cols-2">
          <article>
            <div className="text-primary-04">
              <h3 className="text-lg leading-loose">Hi there! I'm</h3>
              <h1 className="text-6xl">Divine Orji</h1>
              <p className="text-accent-02 md:text-secondary-03 text-xl md:text-3xl mt-2">
                &#62; Sofware Engineer && Technical Writer
              </p>
            </div>
            {/* <Button>start-game</Button> */}
            <div className="text-sm mt-20">
              <p className="text-secondary-01">
                &#47;&#47; find my profile on GitHub
              </p>
              <p>
                <span className="text-secondary-03">const</span>
                <span className="text-accent-02"> githubLink</span>
                <span> = </span>
                <span className="text-accent-03">
                  <a href="https://github.com/dpkreativ" target="_blank">
                    "https://github.com/dpkreativ"
                  </a>
                </span>
              </p>
            </div>
          </article>
          <article className="hidden md:block">
            {/* Put a sample project here */}
          </article>
        </section>
      </PageTemplate>
    </div>
  );
}
