import type { Project } from "@/assets/data";
import { ProjectCard } from "@/components/cards";
import { pickDeterministicItems } from "@/lib/utils";

export default function MoreWorkRecommendations({
  projects,
  count = 2,
  seed,
}: {
  projects: Project[];
  count?: number;
  seed: string;
}) {
  const recommendedProjects = pickDeterministicItems(projects, count, seed);

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {recommendedProjects.map((entry) => (
        <ProjectCard
          key={entry.slug}
          title={entry.title}
          tags={entry.tags}
          image={entry.image}
          brand={entry.brand}
          link={`/work/${entry.slug}`}
        />
      ))}
    </div>
  );
}
