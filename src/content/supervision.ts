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
        start: "2026-02-02",
        end: "2026-07-01"
      },
      status: "Completed",
      role: "Master Thesis",
      topic: "Analysis and Comparison of European and Russian Android Apps"
    },
    {
      id: "aslan-kazimov",
      name: "Aslan",
      surname: "Kazimov",
      level: "Master",
      program: "CYBERUS - Erasmus Mundus Joint MSc in Cybersecurity",
      school: {
        name: "University of Luxembourg",
        url: "https://www.uni.lu/en/",
        logo: "/logo/logoUniLu.png"
      },
      period: {
        start: "2026-02-02",
        end: "2026-07-31"
      },
      status: "Completed",
      role: "Research Internship",
      topic: "Android App Market Exploration, AndroZoo Integration, and Split APK Analysis"
    },
    {
      id: "marnix-van-denwijngaert",
      name: "Marnix",
      surname: "Van DenWijngaert",
      level: "Master",
      school: {
        name: "University of Luxembourg",
        url: "https://www.uni.lu/en/",
        logo: "/logo/logoUniLu.png"
      },
      period: {
        start: "2024-05-01",
        end: "2024-07-31"
      },
      role: "Student Job",
      program: "MSc in Computer Science"
    },
    {
      id: "benjamin-tawiah",
      name: "Benjamin",
      surname: "Tawiah",
      level: "Master",
      school: {
        name: "University of Luxembourg",
        url: "https://www.uni.lu/en/",
        logo: "/logo/logoUniLu.png"
      },
      period: {
        start: "2024-05-01",
        end: "2024-07-31"
      },
      role: "Student Job",
      program: "MSc in Computer Science"
    }
  ],
  phd: [
    {
      id: "yidan-wang",
      name: "Yidan",
      surname: "Wang",
      level: "PhD",
      school: {
        name: "University of Luxembourg",
        url: "https://www.uni.lu/en/",
        logo: "/logo/logoUniLu.png"
      },
      period: {
        start: "2026-03-02"
      },
      status: "Current",
      role: "Co-supervision / Advising",
      topic: "Malicious payload localization and activation in Android apps",
      summary: "Official supervisor: Prof. Jacques Klein"
    }
  ]
};
