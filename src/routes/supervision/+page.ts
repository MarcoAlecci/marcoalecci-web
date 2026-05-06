import { groupByYear } from "$lib/utils";
import { supervision } from "../../content/supervision";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const masters = supervision.masters
    .slice()
    .sort((a, b) => new Date(b.period?.start || 0).getTime() - new Date(a.period?.start || 0).getTime());
  const phd = supervision.phd
    .slice()
    .sort((a, b) => new Date(b.period?.start || 0).getTime() - new Date(a.period?.start || 0).getTime());

  return {
    masters,
    phd,
    masterGroups: groupByYear(masters, (item) => item.period?.start),
    phdGroups: groupByYear(phd, (item) => item.period?.start)
  };
}) satisfies PageLoad;
