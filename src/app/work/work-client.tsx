import { projects } from "@/assets/data";
import { ProjectCard } from "@/components/cards";
import RevealText from "@/components/reveal-text";

export default function Work() {
  return (
    <main className="flex-1 w-full flex flex-col pt-[84px]">
      {/* Decorative Grid Background */}
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17, 17, 17, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <section className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 grid gap-12 md:gap-16">
        <div className="border-b-8 border-faxx-dark pb-8 text-center dark:border-gray-700 md:pb-12 md:text-left">
          <h1 className="font-display text-[clamp(2rem,8.4vw,4.75rem)] uppercase tracking-tighter leading-none whitespace-nowrap">
            FEATURED PROJECTS.
          </h1>
          <RevealText
            as="p"
            className="mt-6 font-mono text-sm font-bold uppercase tracking-widest text-faxx-coral dark:text-faxx-lime md:text-base"
          >
            Crafting digital solutions with precision and purpose.
          </RevealText>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              title={project.title}
              tags={project.tags}
              image={project.image}
              brand={project.brand}
              link={`/work/${project.slug}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
