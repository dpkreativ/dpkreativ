import Image from "next/image";
import Button from "./General/Button";
import Header from "./General/Header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section>
          <div className="grid lg:grid-cols-5 gap-5">
            <div className="py-12 flex flex-col items-end col-span-2">
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
                  <Button>Resume</Button>
                </div>
                <div>
                  <Button filled>Projects</Button>
                </div>
              </div>
            </div>

            <div className="relative col-span-3">
              <div className="bg-purple-600 w-4/5 h-full absolute right-0"></div>
              <div className="w-60 h-72 bg-purple-300 absolute z-10 top-1/2 -translate-y-1/2 shadow-xl">
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
                collaborated with other members of the team to build interfaces
                for outsourced client projects.
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
    </>
  );
};

export default LandingPage;
