"use client";

import { projects } from "@/assets/data";
import { ArrowIcon, LinkIcon } from "@/assets/icons";
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
      <h1 className="font-serif text-4xl">{project.title}</h1>

      <section className="grid md:grid-cols-2 gap-8">
        {/* Image */}
        <div className="relative block aspect-video overflow-hidden rounded-xl shadow-lg w-full max-w-3xl">
          <Image
            src={project.image}
            alt={project.title}
            className="w-full"
            // fill
          />
        </div>

        <article className="flex flex-col gap-4 h-max justify-between">
          {project.description.map((x) => (
            <p>{x}</p>
          ))}

          <div className="flex gap-2">
            <a href={project.url} target="_blank">
              <Button>
                <span>Live link</span>
                <i className="ri-external-link-line text-2xl"></i>
              </Button>
            </a>

            {project.github ? (
              <a href={project.github} target="_blank">
                <Button>
                  <span>GitHub</span>
                  <i className="ri-github-fill text-2xl"></i>
                </Button>
              </a>
            ) : null}
          </div>
        </article>
      </section>

      <Link href="/work" className="w-max mx-auto mt-16">
        <Button>
          <span>see more projects</span>
          <ArrowIcon />
        </Button>
      </Link>
    </main>
  );
}
