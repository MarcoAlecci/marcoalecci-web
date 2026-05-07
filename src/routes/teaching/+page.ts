import { groupByYear } from "$lib/utils";
import { teaching } from "../../content/teaching";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const sorted = teaching
    .slice()
    .sort((a, b) => new Date(b.period.start).getTime() - new Date(a.period.start).getTime());
  const groups = groupByYear(sorted, (item) => item.period.start);

  return {
    teachings: sorted,
    groups
  };
}) satisfies PageLoad;
