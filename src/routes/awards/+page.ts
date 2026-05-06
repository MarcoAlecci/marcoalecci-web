import { groupByYear } from "$lib/utils";
import { awards } from "../../content/awards";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const groups = groupByYear(awards, (item) => item.date);

  return {
    awards,
    groups
  };
}) satisfies PageLoad;
