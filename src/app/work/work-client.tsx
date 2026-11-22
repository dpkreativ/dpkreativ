import { projects } from "@/assets/data";
import { ProjectCard } from "@/components/cards";
import RevealText from "@/components/reveal-text";
import SparkleBackground from "@/components/sparkle-background";

export default function Work() {
  return (
    <main className="flex-1 w-full flex flex-col pt-[84px] bg-white text-[#111111] dark:bg-[#111111] dark:text-white">
      {/* Decorative Grid Background */}
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17, 17, 17, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 grid gap-12 md:gap-16">
        <div className="border-b border-black/15 pb-8 text-left dark:border-white/15 md:pb-12">
          <div className="relative w-fit max-w-full">
            <SparkleBackground
              variant="lightning"
              size={34}
              rotate={-12}
              delay={-1.4}
              className="-top-6 right-0 sm:-top-4 sm:-right-10"
            />
            <h1 className="font-display text-[clamp(2.5rem,7vw,5rem)] uppercase tracking-tighter leading-none">
              Project portfolio
            </h1>
          </div>

          <RevealText
            as="p"
            className="mt-4 font-mono text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400 md:text-sm"
          >
            Client builds, shipped products, and work in progress.
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
