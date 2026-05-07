import type { Service } from "$lib/utils/utils";

export const service: Service[] = [
  {
    id: "conferenceOrganization",
    title: "Conference organization",
    instances: [
      {
        name: "Web & Publicity Chair",
        conference: {
          name: "MobileSoft 2025",
          url: "https://conf.researchr.org/home/mobilesoft-2025",
          date: "2025-05-26"
        }
      },
      {
        name: "Student Volunteer",
        conference: {
          name: "ASE 2023",
          url: "https://conf.researchr.org/home/ase-2023",
          date: "2023-09-11"
        }
      }
    ]
  }
];
