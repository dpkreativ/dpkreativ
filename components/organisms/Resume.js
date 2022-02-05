import Button from "../atoms/Button";
import Experience from "../molecules/Experience";
import SectionTitle from "../molecules/SectionTitle";

const Resume = () => {
  return (
    <section className="px-6 py-12 lg:px-12 max-w-5xl mx-auto">
      {/* Professional Summary */}
      <section className="mb-24">
        <SectionTitle title={<span className="font-semibold">Summary</span>} />
        <div className="lg:text-2xl flex flex-col space-y-4 md:space-y-8 py-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          fugiat accusantium iste dolorum quidem veniam debitis error facere
          officiis expedita labore, reiciendis libero, magni voluptas itaque,
          aspernatur mollitia maiores quia.
        </div>
        <div>
          <Button>Download Resume</Button>
        </div>
      </section>

      {/* Skills */}
      <section className="mb-24">
        <SectionTitle title={<span className="font-semibold">Skills</span>} />
        <div className="lg:text-2xl flex flex-col space-y-4 md:space-y-8 py-6 max-w-5xl mx-auto">
          JavaScript, React, MongoDB
        </div>
      </section>

      {/* Experience */}
      <section className="mb-24">
        <SectionTitle
          title={<span className="font-semibold">Experience</span>}
        />
        <div className="lg:text-2xl flex flex-col space-y-4 md:space-y-8 py-6 max-w-5xl mx-auto">
          <Experience
            title="Software Engineer"
            org="Truparse"
            duration="Feb 2021 - July 2021"
          >
            Hello Amigo
          </Experience>
        </div>
      </section>

      {/* Education */}
      {/* <section className="mb-24">
        <SectionTitle
          title={<span className="font-semibold">Education</span>}
        />
        <div className="lg:text-2xl flex flex-col space-y-4 md:space-y-8 py-6 max-w-5xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          fugiat accusantium iste dolorum quidem veniam debitis error facere
          officiis expedita labore, reiciendis libero, magni voluptas itaque,
          aspernatur mollitia maiores quia.
        </div>
      </section> */}
    </section>
  );
};

export default Resume;
