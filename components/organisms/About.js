import SectionTitle from "../molecules/SectionTitle";

const About = () => {
  return (
    <section className="px-6 py-12 lg:px-12">
      <SectionTitle
        title={
          <>
            <span className="italic">for</span>
            <span className="font-semibold"> over two years</span>
          </>
        }
      />
      <div className="lg:text-2xl flex flex-col space-y-4 md:space-y-8 py-6 max-w-5xl mx-auto">
        <p className="leading-normal">
          I have{" "}
          <span className="bg-gray-300 font-semibold px-0.5">learned</span>,
          practiced, and polished my{" "}
          <span className="bg-black text-white font-semibold px-0.5">
            software engineering skills
          </span>{" "}
          in various capacities.
        </p>
        <p className="leading-normal">
          I currently{" "}
          <span className="bg-gray-300 font-semibold px-0.5">write</span> guest{" "}
          <span className="bg-black text-white font-semibold px-0.5">
            technical content
          </span>{" "}
          for a number of publications, and help to{" "}
          <span className="bg-gray-300 font-semibold px-0.5">mentor</span>{" "}
          budding software engineers as part of GDSC MOUAU&apos;s core team.
        </p>
        <p className="leading-normal">
          In the past, I worked for brands such as Payvest - a Fintech company
          based in Port Harcourt - and Truparse - a client-focused company based
          in Lagos.
        </p>
        <p className="leading-normal">
          I am looking for my next set of opportunities to{" "}
          <span className="bg-gray-300 font-semibold px-0.5">grow</span> in my
          career, and contribute to solving challenges that make a lot of{" "}
          <span className="bg-black text-white font-semibold px-0.5">
            positive impact.
          </span>
        </p>
      </div>
    </section>
  );
};

export default About;
