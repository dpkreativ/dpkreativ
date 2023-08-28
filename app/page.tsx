import Image from "next/image";
import Link from "next/link";
import { profileImage } from "@/lib/data";

export default function Home() {
  return (
    <section className="grid gap-16">
      <section className="max-w-md mx-auto text-center grid gap-5">
        <h2 className="text-5xl font-semibold">Hi!</h2>
        <p className="code">I'm Divine.</p>
        <div className="profile">
          {profileImage ? (
            <Image
              src={profileImage}
              alt="Divine Orji's profile"
              fill
              className="object-cover"
            />
          ) : (
            <div className="hidden"></div>
          )}
        </div>
        <p>
          I am a web developer with a passion for creating interactive and
          engaging websites.
        </p>
        <p>
          I started coding in 2019 and have a strong understanding of HTML, CSS,
          JavaScript, and frontend frameworks. I also have experience with CMS
          platforms, backend technologies, and serverless functions. I enjoy
          experimenting with different technologies to create useful software.
        </p>

        <p>
          In addition to my coding skills, I am a technical writer with a knack
          for explaining complex concepts in a clear and concise way. I am also
          active in developer communities, collaborating with others,
          documenting my work, and sharing my experiences.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 text-center py-10">
        <Link
          href="/projects"
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
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

        <Link
          href="/contact"
          className="card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Contact me <span>-&gt;</span>
          </h2>
          <p className="code text-xs">Let's get schwifty!</p>
        </Link>
      </section>
    </section>
  );
}
