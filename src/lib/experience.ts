export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  summary: string;
  highlights?: string[];
};

export type ExperienceRole = {
  role: string;
  period: string;
  summary: string;
  highlights: string[];
};

export type GroupedExperience = {
  company: string;
  period: string;
  roles: ExperienceRole[];
};

function yearOf(value: string | undefined, fallback: number) {
  return Number.parseInt(value?.match(/\d{4}/)?.[0] ?? "", 10) || fallback;
}

/**
 * Merges consecutive entries that share a company into a single block and
 * widens the block period to cover every role it contains.
 */
export function groupExperience(items: ExperienceItem[]): GroupedExperience[] {
  const groups: GroupedExperience[] = [];

  for (const item of items) {
    const existing = groups.find(
      (group) =>
        group.company.trim().toLowerCase() === item.company.trim().toLowerCase()
    );

    if (!existing) {
      groups.push({
        company: item.company,
        period: item.period,
        roles: [
          {
            role: item.role,
            period: item.period,
            summary: item.summary,
            highlights: item.highlights || [],
          },
        ],
      });

      continue;
    }

    existing.roles.push({
      role: item.role,
      period: item.period,
      summary: item.summary,
      highlights: item.highlights || [],
    });

    const periods = existing.roles.map((role) => role.period);
    const starts = periods.map((period) => period.split(" - ")[0]?.trim());
    const ends = periods.map((period) => period.split(" - ")[1]?.trim());
    const isOngoing = ends.some(
      (end) => end?.toLowerCase() === "present"
    );

    const earliestStart = [...starts].sort(
      (a, b) => yearOf(a, 9999) - yearOf(b, 9999)
    )[0];

    if (isOngoing) {
      existing.period = `${earliestStart} - Present`;
      continue;
    }

    const latestEnd = [...ends].sort(
      (a, b) => yearOf(b, 0) - yearOf(a, 0)
    )[0];

    existing.period = `${earliestStart} - ${latestEnd}`;
  }

  return groups;
}