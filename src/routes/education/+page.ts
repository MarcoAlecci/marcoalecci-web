import { groupByYear } from "$lib/utils";
import { education } from "../../content/education";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const sorted = education
    .slice()
    .sort((a, b) => new Date(b.period.start).getTime() - new Date(a.period.start).getTime());
  const groups = groupByYear(sorted, (item) => item.period.start);

  return {
    education: sorted,
    groups
  };
}) satisfies PageLoad;
