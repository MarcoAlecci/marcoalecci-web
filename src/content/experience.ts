import type { Experience } from "$lib/utils/utils";

export const experiences: Experience[] = [
  {
    id: "phd",
    title: "Doctoral Researcher",
    jobTitle: "Doctoral Researcher",
    company: "Trux Research Group, SnT, University of Luxembourg",
    companyLogo: "/logo/logoUniLu.png",
    location: "Luxembourg",
    countryCode: "LU",
    period: {
      start: "2022-10-15"
    },
    summary:
      "As a member of the TruX Research Group at SnT, I am engaged in advanced research in software engineering, focusing on enhancing software security. My specific emphasis lies in integrating Android static analysis with machine learning methodologies."
  },
  {
    id: "internshipUnipd",
    title: "Research Internship",
    jobTitle: "Research Intern",
    company: "SPRITZ Research Team, University of Padua",
    companyLogo: "/logo/logoUniPD.png",
    location: "Padua",
    countryCode: "IT",
    period: {
      start: "2020-03-01",
      end: "2020-07-31"
    },
    summary: "Completed a research internship focused on my BSc thesis work."
  },
  {
    id: "internshipJapan",
    title: "M2 Internship Student - Yokohama National University",
    jobTitle: "Internship Student",
    company: "YNU - Yokohama National University, Yokohama, Japan",
    companyLogo: "/logo/logoYNU.png",
    location: "Yokohama",
    countryCode: "JP",
    period: {
      start: "2022-04-04",
      end: "2022-07-31"
    },
    summary:
      "Engaged in my MSc thesis project during my exchange period at Ochiai Lab - YNU, resulting in publication acceptance at RAID 2023 conference."
  }
];
