import { groupByYear } from "$lib/utils";
import { publications } from "../../content/publications";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const sorted = publications
    .slice()
    .sort((a, b) => new Date(b.venue.date).getTime() - new Date(a.venue.date).getTime());

  const groups = groupByYear(sorted, (item) => item.venue.date);

  return {
    publications: sorted,
    groups
  };
}) satisfies PageLoad;
