import { gitHubRepos } from "@/lib/data";
import Link from "next/link";

export default async function Page() {
  const projects = await gitHubRepos();

  return (
    <>
      <section className="w-full max-w-4xl mx-auto p-5">
        {/* Page title */}
        <h1 className="text-3xl text-center">Projects</h1>
      </section>

      {/* All projects here */}
      <section className="w-full max-w-4xl mx-auto p-5 grid md:grid-cols-2 gap-10">
        {projects.map((project: any) => (
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            key={project.id}
            className="card"
          >
            <h3 className="font-bold text-xl">{project.name}</h3>
            <p className="text-sm">{project.description}</p>
          </a>
        ))}
      </section>
    </>
  );
}
