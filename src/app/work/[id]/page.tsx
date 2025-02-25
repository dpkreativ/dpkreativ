"use client";

import { projects } from "@/assets/data";
import { useParams } from "next/navigation";

export default function Page() {
  const { id } = useParams();

  const project = projects.find((project) => project.slug === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="max-w-6xl mx-auto min-h-[80vh]">
      <section className="p-4 pb-20 grid gap-8">
        <h1 className="font-serif text-4xl">{project.title}</h1>
      </section>
    </main>
  );
}
