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

        {/* About Section */}
        <About />

        {/* About Me */}
        {/* <section>
          <div className="custom-container">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-16 h-0.5 bg-purple-600"></div>
              <h2 className="text-xl uppercase">About Me</h2>
            </div>
            <div>
              <h3 className="font-bold text-4xl mb-5">
                Hi 👋, I&apos;m Divine Orji.
              </h3>
              <p className="text-xl lg:text-2xl leading-relaxed my-5">
                I have over 2 years of experience building user-focused
                interfaces.
              </p>
              <p className="text-xl lg:text-2xl leading-relaxed my-5">
                Currently I&apos;m working as a technical writer at Hackmamba.
              </p>
              <p className="text-xl lg:text-2xl leading-relaxed my-5">
                Before now, I was a software engineer at Truparse, where I
                collaborated with other members of the team to build interfaces
                for outsourced client projects.
              </p>
            </div>
          </div>
        </section> */}

        {/* My Work */}
        {/* <section>
          <div className="custom-container">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-16 h-0.5 bg-purple-600"></div>
              <h2 className="text-xl uppercase">My Work</h2>
            </div>
          </div>
        </section> */}
      </PageTemplate>
    </div>
  );
}
