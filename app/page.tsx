import Image from "next/image";
import Link from "next/link";
import { profileImage } from "@/lib/data";
import { getData } from "@/lib/utils";

export default async function Home() {
  const blogData = await getData(
    "https://dev.to/api/articles?username=dpkreativ"
  );

  const topXPosts = blogData.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="w-full max-w-4xl mx-auto p-5 grid gap-10">
        {/* Intro */}
        <h1 className="text-5xl text-center code font-semibold">
          Hi!
          {/* Animation idea: loop through different languages saying hi */}
        </h1>

        {/* Code with my name */}
        <div className="card w-max mx-auto">
          <p className="code text-xs font-bold">
            <span className="text-purple-800 dark:text-purple-600">const </span>
            name:
            <span className="text-blue-600"> string </span>=
            <span className="text-green-600"> 'Divine Orji'</span>;
          </p>
        </div>

        {/* About Me */}
        <div className="grid md:flex gap-10">
          {/* Picture */}
          <div className="relative w-full aspect-square">
            {profileImage ? (
              <Image
                src={profileImage}
                alt="Divine Orji's profile"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover object-center"
                priority
              />
            ) : null}
          </div>

          {/* Text */}
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

      {/* My projects */}
      <section className="w-full max-w-4xl mx-auto p-5 grid gap-10">
        <div className="grid gap-3">
          <h2 className="text-3xl">My projects</h2>
          <p className="code text-xs text-slate-800/90 dark:text-slate-300">
            Cool stuff I've worked on.
          </p>
        </div>

        <div>{/* The top three projects will be displayed here */}</div>

        <Link
          href="/projects"
          className="text-sm text-green-600 hover:font-bold justify-self-center md:justify-self-end"
        >
          See more &#8663;
        </Link>
      </section>

      {/* My blog posts */}
      <section className="w-full max-w-4xl mx-auto p-5 grid gap-10">
        <div className="grid gap-3">
          <h2 className="text-3xl">My blog posts</h2>
          <p className="code text-xs text-slate-800/90 dark:text-slate-300">
            All my musings on tech tools, developer experience, and a few wacky
            stories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {topXPosts?.map((post: any) => (
            <a
              href={post.url}
              key={post.id}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-3"
            >
              <div className="card relative w-full aspect-video overflow-clip">
                {
                  <Image
                    src={post.social_image}
                    alt={post.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center"
                    priority
                  />
                }
              </div>
              <div className="flex justify-between items-center code text-xs">
                <p>{post.readable_publish_date}</p>
                <p>{post.reading_time_minutes} mins</p>
              </div>
              <h3 className="font-bold">{post.title}</h3>
            </a>
          ))}
        </div>

        <Link
          href="/blog"
          className="text-sm text-green-600 hover:font-bold justify-self-center md:justify-self-end"
        >
          See more &#8663;
        </Link>
      </section>

      {/* Contact me */}
      <section className="w-full max-w-4xl mx-auto p-5 grid gap-10">
        <div className="grid gap-3">
          <h2 className="text-3xl">Contact me</h2>
          <p className="code text-xs text-slate-800/90 dark:text-slate-300">
            Let's get schwifty!
          </p>
        </div>

        <div>{/* The contact form will be displayed here */}</div>
      </section>
    </>
  );
}
