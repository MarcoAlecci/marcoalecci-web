import { groupByYear } from "$lib/utils";
import { service } from "../../content/service";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const services = service.map((item) => ({
    ...item,
    groups: groupByYear(item.instances, (instance) => instance.conference.date)
  }));

  return {
    services
  };
}) satisfies PageLoad;
