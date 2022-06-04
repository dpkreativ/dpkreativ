import Head from 'next/head';
import PageLayout from '../components/layouts/PageLayout';

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
      <PageLayout activeIndex={1}>
        <section className="h-full w-full max-w-5xl p-5 m-auto grid items-center gap-5 md:grid-cols-2">
          <article>
            <div className="text-primary-04">
              <h3 className="text-lg leading-loose">Hi there! I am</h3>
              <h1 className="text-6xl">Divine Orji</h1>
              <div className="text-accent-02 md:text-secondary-03 text-xl lg:text-3xl mt-2 flex space-x-2">
                <p>&#62; $ Sofware Engineer</p>
                <div className="w-2.5 h-0.5 lg:w-5 lg:h-1 self-end bg-accent-01 animate-pulse"></div>
              </div>
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
                  <a
                    href="https://github.com/dpkreativ"
                    target="_blank"
                    rel="noreferrer"
                  >
                    &#34;
                    <span className="underline">
                      https://github.com/dpkreativ
                    </span>
                    &#34;
                  </a>
                </span>
              </p>
            </div>
          </article>
          <article className="hidden md:block">
            {/* Put a sample project here */}
          </article>
        </section>
      </PageLayout>
    </div>
  );
}
