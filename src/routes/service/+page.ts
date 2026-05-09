import { groupByYear } from "$lib/utils";
import { service } from "../../content/service";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const services = service.map((item) => ({
    ...item,
    instances:
      item.groupByYear === false
        ? item.instances
            .map((instance) => ({
              ...instance,
              years: instance.years?.slice().sort((a, b) => b - a)
            }))
            .sort((a, b) => (b.years?.[0] ?? 0) - (a.years?.[0] ?? 0))
        : item.instances,
    groups: item.groupByYear === false ? [] : groupByYear(item.instances, (instance) => instance.conference.date)
  }));

  return {
    services
  };
}) satisfies PageLoad;
