import { projects } from "@/assets/data";
import { ProjectCard } from "@/components/cards";

export default function Work() {
  return (
    <main className="max-w-6xl mx-auto">
      {/* Work section */}
      <section className="p-4 grid gap-8">
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
                link={project.url}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
