import type { Award, Education, Experience } from "$lib/utils/utils";
import type { PageLoad } from "./$types";

export const load = (async () => {
  const experiencesFiles = import.meta.glob("../../contents/experiences/*.md");
  const iterableExperiences = Object.entries(experiencesFiles);

  const educationsFiles = import.meta.glob("../../contents/educations/*.md");
  const iterableEducations = Object.entries(educationsFiles);

  const awardsFiles = import.meta.glob("../../contents/awards/*.md");
  const iterableAwards = Object.entries(awardsFiles);

  let experiences = await Promise.all(
    iterableExperiences.map(async ([_, resolver]) => {
      const file = (await resolver()) as any;
      const experience = file.metadata as Experience;

      return { experience, content: file.default };
    })
  );

  experiences = experiences.sort((a, b) => new Date(a.experience.period.start).getTime() - new Date(b.experience.period.start).getTime());

  let educations = await Promise.all(
    iterableEducations.map(async ([_, resolver]) => {
      const file = (await resolver()) as any;
      const education = file.metadata as Education;

      return { education, content: file.default };
    })
  );

  educations = educations.sort((a, b) => new Date(b.education.period.start).getTime() - new Date(a.education.period.start).getTime());

  let awards = await Promise.all(
    iterableAwards.map(async ([_, resolver]) => {
      const file = (await resolver()) as any;
      const award = file.metadata as Award;

      return { award, content: file.default };
    })
  );

  awards = awards.sort((a, b) => {
    return new Date(a.award.date || 0).getTime() - new Date(b.award.date || 0).getTime();
  });

  return {
    experiences,
    educations,
    awards,
  };
}) satisfies PageLoad;
