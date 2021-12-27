import Head from "next/head";
import Image from "next/image";
import Button from "../components/atoms/Button";
import PageTemplate from "../components/templates/PageTemplate";

export default function Home() {
  return (
    <div>
      {/* Page Head */}
      <Head>
        <title>Divine Orji - Frontend Developer</title>
        <meta name="description" content="Divine Orji's portfolio website" />
        <link rel="icon" href="/assets/kreativ.ico" />
      </Head>

      {/* Page Body */}
      <PageTemplate activeIndex={1}>
        <main>
          {/* Hero Section */}
          <section className="h-screen">
            <div className="grid lg:grid-cols-2 gap-12 h-5/6">
              <div className="py-12 flex flex-col items-end justify-center">
                <h2 className="text-4xl text-right lg:w-4/5 mb-10 leading-normal">
                  <span className="bg-purple-600 text-white">Passionate</span>
                  <span> about building </span>
                  <span className="italic font-semibold">fast</span>,
                  <span className="italic font-semibold"> scalable</span>
                  <span> web apps, while creating </span>
                  <span className="italic font-semibold">beautiful</span>
                  <span> user interfaces.</span>
                </h2>
                <div className="flex space-x-3 w-max">
                  <div>
                    <Button>Résumé</Button>
                  </div>
                  <div>
                    <Button filled>Projects</Button>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="bg-purple-600 w-4/5 h-full absolute right-0"></div>
                <div className="w-64 h-80 absolute z-10 top-1/2 -translate-y-1/2">
                  <div className="relative">
                    <div className="w-64 h-72 border absolute top-4 border-white"></div>
                    <div className="w-60 h-72 bg-purple-300 absolute z-10 top-0 shadow-xl">
                      <div className="relative h-72 w-60">
                        <Image
                          src="/assets/divi.jpg"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Me */}
          <section>
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
                  collaborated with other members of the team to build
                  interfaces for outsourced client projects.
                </p>
              </div>
            </div>
          </section>

          {/* My Work */}
          <section>
            <div className="custom-container">
              <div className="flex items-center space-x-3 mb-10">
                <div className="w-16 h-0.5 bg-purple-600"></div>
                <h2 className="text-xl uppercase">My Work</h2>
              </div>
            </div>
          </section>
        </main>
      </PageTemplate>
    </div>
  );
}
