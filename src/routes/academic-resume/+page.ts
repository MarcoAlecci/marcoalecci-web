import type { Publication, Service, Teaching } from "$lib/utils/utils";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const publicationsFiles = import.meta.glob("../../contents/publications/*.md");
  const iterablePublications = Object.entries(publicationsFiles);

  const servicesFiles = import.meta.glob("../../contents/services/*.md");
  const iterableServices = Object.entries(servicesFiles);

  const teachingsFiles = import.meta.glob("../../contents/teachings/*.md");
  const iterableTeachings = Object.entries(teachingsFiles);

  let publications = await Promise.all(
    iterablePublications.map(async ([_, resolver]) => {
      const file = (await resolver()) as any;
      const publication = file.metadata as Publication;

      return { publication, content: file.default };
    })
  );
  
  console.log(publications);

  publications = publications.sort((a, b) => new Date(b.publication.conference.date).getTime() - new Date(a.publication.conference.date).getTime());

  let services = await Promise.all(
    iterableServices.map(async ([_, resolver]) => {
      const file = (await resolver()) as any;
      const service = file.metadata as Service;

      return { service, content: file.default };
    })
  );

  let teachings = await Promise.all(
    iterableTeachings.map(async ([_, resolver]) => {
      const file = (await resolver()) as any;
      const teaching = file.metadata as Teaching;

      return { teaching, content: file.default };
    })
  );

  teachings = teachings.sort((a, b) => new Date(a.teaching.period.start).getTime() - new Date(b.teaching.period.start).getTime());

  return {
    publications,
    services,
    teachings,
  };
}) satisfies PageLoad;
