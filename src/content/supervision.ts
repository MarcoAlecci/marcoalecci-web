import type { Student } from "$lib/utils/utils";

export const supervision: { masters: Student[]; phd: Student[] } = {
  masters: [
    {
      id: "iuliia-korotkova",
      name: "Iuliia",
      surname: "Korotkova",
      level: "Master",
      program: "MSc in Cybersecurity and Cyber Defence",
      school: {
        name: "University of Luxembourg",
        url: "https://www.uni.lu/en/",
        logo: "/logo/logoUniLu.png"
      },
      period: {
        start: "2026-02-01"
      },
      role: "Master Thesis",
      topic: "Analysis and Comparison of European and Russian Android Apps"
    }
  ],
  phd: []
};
