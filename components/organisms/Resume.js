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
          CSS, JavaScript, ReactJS, NextJS, Nuxtjs, Sass, TailwindCSS,
          TypeScript. Technical writing and documentation.
        </div>
      </section>

      {/* Experience */}
      <section className="mb-24">
        <SectionTitle
          title={<span className="font-semibold">Experience</span>}
        />
        <div className="lg:text-2xl flex flex-col space-y-5 md:space-y-8 py-6 max-w-5xl mx-auto">
          <Experience
            title="Contributing Technical Content Writer and Frontend Engineer"
            org="Hackmamba"
            duration="Jan 2021 - Present"
          >
            <div className="grid grid-cols-12 gap-x-3">
              <div className="col-span-1 text-right">-</div>
              <div className="col-span-11">
                Create technical content on building products with Cloudinary
                and NextJS/Nuxtjs.
              </div>
              <div className="col-span-1 text-right">-</div>
              <div className="col-span-11">
                Organize hackathons and review community submissions.
              </div>
            </div>
          </Experience>
          <Experience
            title="Software Engineer (Frontend)"
            org="Truparse"
            duration="Feb 2021 - July 2021"
          >
            <div className="grid grid-cols-12 gap-x-3">
              <div className="col-span-1 text-right">-</div>
              <div className="col-span-11">
                Handled regular tasks on software development and collaborated
                with other developers to create apps and functionalities that
                improve user experience.
              </div>
            </div>
          </Experience>
          <Experience
            title="Software Engineer (Frontend)"
            org="Payvest Global"
            duration="Oct 2020 - Jan 2021"
          >
            <div className="grid grid-cols-12 gap-x-3">
              <div className="col-span-1 text-right">-</div>
              <div className="col-span-11">
                Structured, wrote and maintained multiple project codebases.
              </div>
              <div className="col-span-1 text-right">-</div>
              <div className="col-span-11">
                Converted whiteboard ideas, solutions from wireframes, and final
                designs into code.
              </div>
            </div>
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
