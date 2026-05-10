import { profile } from "../content/profile";
import { contact } from "../content/contact";
import { publications } from "../content/publications";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const sorted = publications
    .slice()
    .sort((a, b) => new Date(b.venue.date).getTime() - new Date(a.venue.date).getTime());

  const recentPublications = sorted.slice(0, 5).map((item) => {
    const publicationAuthors = item.authors ?? [
      { name: profile.name, surname: profile.surname },
      ...(item.coAuthors ?? [])
    ];
    const authors = publicationAuthors.map((author) => `${author.name} ${author.surname}`).join(", ");

    return { publication: item, authors };
  });

  return {
    profile,
    contact,
    recentPublications
  };
}) satisfies PageLoad;
