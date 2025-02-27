import { projects } from "@/assets/data";
import { ProjectCard } from "@/components/cards";

export default function Work() {
  return (
    <main className="flex-1 w-full max-w-6xl mx-auto">
      {/* Work section */}
      <section className="p-4 pb-20 grid gap-8">
        <h1 className="font-serif text-4xl">
          My <span className="italic">Work</span>
        </h1>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              tags={project.tags}
              description={project.description}
              image={project.image}
              link={`/work/${project.slug}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
