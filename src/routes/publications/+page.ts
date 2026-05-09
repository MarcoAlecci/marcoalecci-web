import { publications } from "../../content/publications";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const sorted = publications
    .slice()
    .sort((a, b) => new Date(b.venue.date).getTime() - new Date(a.venue.date).getTime());

  return {
    publications: sorted
  };
}) satisfies PageLoad;
