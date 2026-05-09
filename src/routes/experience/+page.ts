import { experiences } from "../../content/experience";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const sortedExperiences = experiences
    .slice()
    .sort((a, b) => new Date(b.period.start).getTime() - new Date(a.period.start).getTime());

  return {
    experiences: sortedExperiences
  };
}) satisfies PageLoad;
