import { avatar, projects } from "@/assets/data";
import { ProjectCard } from "@/components/cards";
import Socials from "@/components/socials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid gap-20 md:grid-cols-3 max-w-6xl mx-auto">
      {/* Hero section */}
      <section className="p-4 grid gap-8 h-max md:sticky md:top-16">
        <h1 className="font-serif text-4xl">
          Hi! I&apos;m <span className="italic">Divine</span>.
        </h1>

        <div className="w-full max-w-96 p-4 shadow-lg bg-white">
          <div className="relative aspect-[5/6] overflow-hidden">
            <Image src={avatar} alt="Divine Orji" className="w-full" />
          </div>
          <p className="font-script pt-4">My friends call me Divi⚡</p>
        </div>

        <h2 className="font-serif text-4xl text-right">
          I spin delightful and seamless web experiences...
        </h2>

        <Socials />
      </section>

      <section className="md:col-span-2 grid gap-20">
        {/* About section */}
        <section className="p-4 grid gap-8">
          <h2 className="font-serif text-4xl">
            About <span className="italic">Me</span>
          </h2>

          <div className="grid gap-2">
            <p>
              I&apos;m an experienced web developer passionate about building
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
              breaking down complex ideas on my{" "}
              <a
                href="https://dpkreativ.notion.site/Divine-s-Technical-Content-Portfolio-dfdee17cdcb647498fae2f4b9d22a672?pvs=4"
                target="_blank"
                rel="noreferrer"
                className="font-bold underline"
              >
                blog
              </a>
              .
            </p>
          </div>
        </section>

        {/* Work section */}
        <section className="p-4 pb-20 grid gap-8">
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
                  link={`/work/${project.slug}`}
                />
              ))}
          </div>
        </section>
      </section>
    </main>
  );
}
