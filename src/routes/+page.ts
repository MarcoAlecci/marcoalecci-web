import { profile } from "../content/profile";
import { contact } from "../content/contact";
import { publications } from "../content/publications";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const sorted = publications
    .slice()
    .sort((a, b) => new Date(b.venue.date).getTime() - new Date(a.venue.date).getTime());

  const recentPublications = sorted.slice(0, 5).map((item) => {
    const authors = [
      `${profile.name} ${profile.surname}`,
      ...(item.coAuthors || []).map((a) => `${a.name} ${a.surname}`)
    ].join(", ");

    return { publication: item, authors };
  });

  return {
    profile,
    contact,
    recentPublications
  };
}) satisfies PageLoad;
