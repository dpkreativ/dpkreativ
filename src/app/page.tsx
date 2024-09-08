import { avatar, projects } from "@/assets/data";
import { ProjectCard } from "@/components/cards";
import Socials from "@/components/socials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid gap-40 md:grid-cols-3 max-w-6xl mx-auto">
      {/* Hero section */}
      <section className="p-4 grid gap-8">
        <h1 className="font-serif text-4xl">
          Hi! I'm <span className="italic">Divine</span>.
        </h1>

        <div className="w-full max-w-96 p-4 shadow-lg bg-white">
          <Image src={avatar} alt="Divine Orji" className="w-full" />
          <p className="font-script pt-4">My friends call me Divi⚡</p>
        </div>

        <h2 className="font-serif text-4xl text-right">
          I spin delightful and seamless web experiences...
        </h2>

        <Socials />
      </section>

      <section className="md:col-span-2 grid gap-40">
        {/* About section */}
        <section className="p-4 grid gap-8">
          <h2 className="font-serif text-4xl">
            About <span className="italic">Me</span>
          </h2>

          <div className="grid gap-2">
            <p>
              I'm an experienced web developer passionate about building
              dynamic, responsive websites that deliver an exceptional user
              experience.
            </p>
            <p>
              With a background in design and skills in HTML, CSS, and
              JavaScript, I turn ideas into reality using the right tools and
              frameworks.{" "}
              <Link href="/work" className="font-bold underline">
                Check out my work
              </Link>{" "}
              to see how I do it.
            </p>

            <p>
              I am active in various developer communities, where I collaborate
              with peers and contribute to open source projects. I also enjoy
              breaking down complex ideas on my blogs at{" "}
              <a
                href="https://dpkreativ.hashnode.dev"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline"
              >
                Hashnode
              </a>
              ,{" "}
              <a
                href="https://dev.to/dpkreativ"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline"
              >
                Dev.to
              </a>
              , and{" "}
              <a
                href="https://medium.com/@dpkreativ"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline"
              >
                Medium
              </a>
              .
            </p>
          </div>
        </section>

        {/* Work section */}
        <section className="p-4 grid gap-8">
          <h2 className="font-serif text-4xl">
            My <span className="italic">Work</span>
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            {projects
              .filter((project) => project.featured)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  tags={project.tags}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                />
              ))}
          </div>
        </section>
      </section>
    </main>
  );
}
