import Image from "next/image";
import Link from "next/link";
import { profileImage } from "@/lib/data";

export default function Home() {
  return (
    <section>
      <section className="max-w-md mx-auto text-center">
        <h2 className="text-5xl font-semibold">Hi!</h2>
        <p className="mt-10 code">I'm Divine.</p>
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
        <p className="mt-10">
          In 2019, I wrote my first "Hello World" and discovered my passion for
          creating beautiful, user-friendly interfaces.
        </p>
        <p className="my-10">
          I like to experiment with different technologies and combine them to
          create useful software. I also participate in developer communities
          where I collaborate with other developers, document my work, and share
          my knowledge.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
