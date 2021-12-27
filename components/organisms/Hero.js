import Button from "../atoms/Button";
import ProfileImage from "../molecules/ProfileImage";

const Hero = () => {
  return (
    <section className="grid md:grid-cols-2">
      <div className="px-6 py-12 flex flex-col items-center order-last md:order-first md:items-end justify-center">
        <h2 className="text-2xl lg:text-4xl text-center md:text-right md:w-4/5 mb-10 leading-normal">
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
            <Button onClick={() => (location.href = "/resume")}>Résumé</Button>
          </div>
          <div>
            <Button onClick={() => (location.href = "/projects")} filled>
              Projects
            </Button>
          </div>
        </div>
      </div>

      <div className="relative h-96">
        <div className="bg-purple-600 h-full w-full absolute md:w-4/5 md:right-0"></div>
        <div className="w-64 h-80 absolute z-10 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 md:left-auto md:-translate-x-0">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
