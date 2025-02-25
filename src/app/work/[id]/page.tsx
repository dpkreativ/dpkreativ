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
    <main>
      <h1>{project.title}</h1>
    </main>
  );
}
