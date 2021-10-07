import Button from "./General/Button";
import Header from "./General/Header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <div className="custom-container grid lg:grid-cols-2 gap-5">
            <div className="py-12">
              <h1 className="text-2xl">Hi 👋, I'm</h1>
              <h2 className="font-bold text-7xl leading-tight mb-5">
                Divine Orji<span className="text-purple-600">.</span>
              </h2>
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
      </main>
    </>
  );
};

export default LandingPage;
