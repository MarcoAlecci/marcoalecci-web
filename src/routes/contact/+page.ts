import { contact } from "../../content/contact";
import type { PageLoad } from "./$types";

export const load = (async () => {
  return {
    contact
  };
}) satisfies PageLoad;
