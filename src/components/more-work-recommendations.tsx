"use client";

import type { Project } from "@/assets/data";
import { ProjectCard } from "@/components/cards";
import { pickRandomItems } from "@/lib/utils";
import { useState } from "react";

export default function MoreWorkRecommendations({
  projects,
  count = 2,
}: {
  projects: Project[];
  count?: number;
}) {
  const [recommendedProjects] = useState(() => pickRandomItems(projects, count));

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
