import Button from "./General/Button";
import Header from "./General/Header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section>
          <div className="custom-container grid lg:grid-cols-2 gap-5">
            <div className="py-12">
              <h1 className="font-bold text-6xl lg:text-7xl leading-tight mb-5">
                Frontend Developer
                <span className="text-purple-600 text-3xl lg:text-7xl">.</span>
              </h1>
              <p className="text-2xl lg:w-4/5 mb-10">
                I like to craft solid and scalable frontend products with great
                user experiences.
              </p>
              <div>
                <Button>Get in touch</Button>
              </div>
            </div>

            <div className="hidden lg:flex justify-center items-center">
              <div className="w-60 h-60 bg-purple-300 rounded-2xl"></div>
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
                Hi 👋, I'm Divine Orji.
              </h3>
              <p>
                I have over 2 years of experience building user-focused
                interfaces.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;
