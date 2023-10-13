import Image from "next/image";
import Link from "next/link";
import { profileImage } from "@/lib/data";

export default function Home() {
  return (
    <section className="grid gap-16">
      <section className="w-full max-w-4xl mx-auto grid gap-10">
        {/* Intro */}
        <h2 className="text-5xl text-center code font-semibold">
          Hi!
          {/* Animation idea: loop through different languages saying hi */}
        </h2>
        <div className="card w-max mx-auto">
          <p className="code text-xs">
            <span className="text-purple-800 dark:text-purple-600">const </span>
            name:
            <span className="text-blue-600"> string </span>=
            <span className="text-green-600"> 'Divine Orji'</span>;
          </p>
        </div>

        {/* About Me */}
        <div className="grid md:flex gap-10">
          <div className="relative w-full aspect-square">
            {profileImage ? (
              <Image
                src={profileImage}
                alt="Divine Orji's profile"
                fill
                className="object-cover object-center"
                priority
              />
            ) : null}
          </div>
          <div className="grid gap-5 h-max text-lg text-slate-800/90 dark:text-slate-300">
            <p>
              I am a<span className="font-bold"> web developer </span>with a
              passion for creating interactive and engaging websites.
            </p>
            <p>
              I started coding in 2019 and have a strong understanding of HTML,
              CSS, JavaScript, and frontend frameworks. I also have experience
              with CMS platforms, backend technologies, and serverless
              functions. I enjoy experimenting with different technologies to
              create useful software.
            </p>

            <p>
              In addition to my coding skills, I am a
              <span className="font-bold"> technical writer </span>with a knack
              for explaining complex concepts in a clear and concise way. I am
              also active in developer communities, collaborating with others,
              documenting my work, and sharing my experiences.
            </p>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-center py-10">
        <Link href="/projects" className="card">
          <h2>
            My projects <span>-&gt;</span>
          </h2>
          <p className="code text-xs">Cool stuff I've worked on.</p>
        </Link>

        <Link href="/blog" className="card">
          <h2>
            My blog <span>-&gt;</span>
          </h2>
          <p className="code text-xs">
            All my musings on tech tools, developer experience, and a few wacky
            stories.
          </p>
        </Link>

        <Link href="/contact" className="card">
          <h2>
            Contact me <span>-&gt;</span>
          </h2>
          <p className="code text-xs">Let's get schwifty!</p>
        </Link>
      </section>
    </section>
  );
}
