import Link from "next/link";
import Button from "../atoms/Button";
import Experience from "../molecules/Experience";
import SectionTitle from "../molecules/SectionTitle";

const Resume = () => {
  return (
    <div className="px-6 py-12 lg:px-12 max-w-5xl mx-auto lg:text-lg">
      {/* Professional Summary */}
      <section className="mb-24">
        <SectionTitle title={<span className="font-semibold">Summary</span>} />
        <div className="flex flex-col space-y-4 md:space-y-8 py-6">
          Innovative software engineer offering over two years of expertise in
          web development. Seasoned professional with background in full
          software development lifecycle. Quickly learns and masters new
          technologies while working in both team and self-directed settings.
        </div>
        <div>
          <Link
            href="https://docs.google.com/document/d/1RRHUjOkSa-Cpm03VZjfnYqvDMdbhrP3sn_G8dg22IBA/edit?usp=sharing"
            passHref
          >
            <a>
              <Button>Download Resume</Button>
            </a>
          </Link>
        </div>
      </section>

      <section className="grid lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-3 lg:order-last">
          {/* Skills */}
          <article className="mb-24">
            <SectionTitle
              title={<span className="font-semibold">Skills</span>}
            />
            <ul className="flex space-x-3 -ml-3 flex-wrap mt-5 lg:block lg:space-x-0 lg:ml-5 lg:list-disc">
              <li className="lg:hidden"></li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
              <li>NextJS</li>
              <li>Nuxtjs</li>
              <li>Sass</li>
              <li>TailwindCSS</li>
              <li>TypeScript</li>
              <li>Technical writing and documentation</li>
            </ul>
          </article>

          {/* Certifications */}
          {/* <article className="mb-24">
            <SectionTitle
              title={<span className="font-semibold">Certifications</span>}
            />
          </article> */}
        </div>

        <div className="lg:col-span-9">
          {/* Experience */}
          <article className="mb-24">
            <SectionTitle
              title={<span className="font-semibold">Experience</span>}
            />
            <div className="flex flex-col space-y-5 md:space-y-8 py-6 max-w-5xl mx-auto">
              <Experience
                title="DevRel / Community Manager (Volunteer)"
                org="GDSC MOUAU"
                duration="Oct 2021 - Present"
              >
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>Create technical content</li>
                    <li>Organize hackathons</li>
                  </ul>
                </div>
              </Experience>
              <Experience
                title="Contributing Technical Content Writer and Frontend Engineer"
                org="Hackmamba"
                duration="Jan 2021 - Present"
              >
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>
                      Create technical content on building products with
                      Cloudinary and NextJS/Nuxtjs.
                    </li>
                    <li>
                      Organize hackathons and review community submissions.
                    </li>
                  </ul>
                </div>
              </Experience>
              <Experience
                title="Software Engineer (Frontend)"
                org="Truparse"
                duration="Feb 2021 - July 2021"
              >
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>
                      Handled regular tasks on software development and
                      collaborated with other developers to create apps and
                      functionalities that improve user experience.
                    </li>
                  </ul>
                </div>
              </Experience>
              <Experience
                title="Software Engineer (Frontend)"
                org="Payvest Global"
                duration="Oct 2020 - Jan 2021"
              >
                <div className="pl-10">
                  <ul className="list-disc">
                    <li>
                      Structured, wrote and maintained multiple project
                      codebases.
                    </li>
                    <li>
                      Converted whiteboard ideas, solutions from wireframes, and
                      final designs into code.
                    </li>
                  </ul>
                </div>
              </Experience>
            </div>
          </article>

          {/* Education */}
          {/* <article className="mb-24">
            <SectionTitle
              title={<span className="font-semibold">Education</span>}
            />
            <div className="flex flex-col space-y-4 md:space-y-8 py-6 max-w-5xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur fugiat accusantium iste dolorum quidem veniam debitis
              error facere officiis expedita labore, reiciendis libero, magni
              voluptas itaque, aspernatur mollitia maiores quia.
            </div>
          </article> */}
        </div>
      </section>
    </div>
  );
};

export default Resume;
