import { groupByYear } from "$lib/utils";
import { experiences } from "../../content/experience";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const sortedExperiences = experiences
    .slice()
    .sort((a, b) => new Date(b.period.start).getTime() - new Date(a.period.start).getTime());
  const groups = groupByYear(sortedExperiences, (item) => item.period.start);

  return {
    experiences: sortedExperiences,
    groups
  };
}) satisfies PageLoad;
