"use client";

import { projects } from "@/assets/data";
import { ArrowIcon, GitHub, LinkIcon } from "@/assets/icons";
import Button from "@/components/button";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  const project = projects.find((project) => project.slug === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="flex-1 flex flex-col gap-8 w-full max-w-6xl mx-auto p-4">
      <section className="grid gap-8 w-full max-w-3xl">
        <h1 className="font-serif text-4xl">{project.title}</h1>
        {project.description ? <p>{project.description}</p> : null}
        <div className="flex gap-2">
          <a href={project.url} target="_blank">
            <Button>
              <span>Live link</span>
              <LinkIcon />
            </Button>
          </a>

          {project.github ? (
            <a href={project.github} target="_blank">
              <Button>
                <span>GitHub</span>
                <GitHub />
              </Button>
            </a>
          ) : null}
        </div>
      </section>

      {/* Image */}
      <section className="relative block aspect-video overflow-hidden rounded-xl shadow-lg">
        <Image
          src={project.image}
          alt={project.title}
          className="w-full"
          // fill
        />
      </section>

      <section>
        <Link href="/work" className="w-max mx-auto md:mx-0">
          <Button>
            <span>click here to see more projects</span>
            <ArrowIcon />
          </Button>
        </Link>
      </section>
    </main>
  );
}
