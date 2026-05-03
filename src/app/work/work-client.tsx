import { projects } from "@/assets/data";
import { ProjectCard } from "@/components/cards";
import RevealText from "@/components/reveal-text";
import SplitHeading from "@/components/split-heading";

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
        <div className="border-b-8 border-faxx-dark dark:border-gray-700 pb-8 md:pb-12">
          <SplitHeading
            as="h1"
            className="font-display text-3xl md:text-8xl lg:text-9xl uppercase tracking-tighter leading-[1.1]"
            lines={[
              <span key="work-title-line-1">FEATURED</span>,
              <span key="work-title-line-2" className="text-faxx-blue dark:text-faxx-cyan">PROJECTS.</span>,
            ]}
          />
          <RevealText
            as="p"
            className="font-mono text-sm md:text-base mt-6 text-faxx-blue dark:text-faxx-cyan font-bold uppercase tracking-widest"
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
