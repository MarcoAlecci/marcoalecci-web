import type { Service } from "$lib/utils/utils";

export const service: Service[] = [
  {
    id: "conferenceProgramCommittee",
    title: "Conference PC Member",
    instances: [
      {
        name: "Program Committee Member",
        conference: {
          name: "STATIC 2026 (ICSE)",
          url: "https://conf.researchr.org/home/icse-2026/static-2026",
          date: "2026-01-01"
        }
      },
      {
        name: "Program Committee Member",
        conference: {
          name: "STATIC 2025 (ICSE)",
          url: "https://conf.researchr.org/home/icse-2025/static-2025",
          date: "2025-01-01"
        }
      },
      {
        name: "Program Committee Member",
        conference: {
          name: "TAIC 2025 (ITASEC)",
          url: "https://itasec.it/",
          date: "2025-01-01"
        }
      }
    ]
  },
  {
    id: "journalReviews",
    title: "Journal Reviews",
    groupByYear: false,
    instances: [
      {
        name: "Reviewer",
        years: [2024],
        conference: {
          name: "IEEE Transactions on Reliability (TR)",
          url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=24",
          date: "2024-01-01"
        }
      },
      {
        name: "Reviewer",
        years: [2024, 2025],
        conference: {
          name: "Science of Computer Programming (SCICO)",
          url: "https://www.sciencedirect.com/journal/science-of-computer-programming",
          date: "2025-01-01"
        }
      },
      {
        name: "Reviewer",
        years: [2024, 2025, 2026],
        conference: {
          name: "ACM Transactions on Software Engineering and Methodology (TOSEM)",
          url: "https://dl.acm.org/journal/tosem",
          date: "2026-01-01"
        }
      },
      {
        name: "Reviewer",
        years: [2025, 2026],
        conference: {
          name: "Empirical Software Engineering (EMSE)",
          url: "https://www.springer.com/journal/10664",
          date: "2026-01-01"
        }
      },
      {
        name: "Reviewer",
        years: [2025],
        conference: {
          name: "IEEE Transactions on Software Engineering (TSE)",
          url: "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=32",
          date: "2025-01-01"
        }
      }
    ]
  },
  {
    id: "conferenceOrganization",
    title: "Conference Organizing Committee",
    instances: [
      {
        name: "Web & Publicity Chair",
        conference: {
          name: "MobileSoft 2026",
          url: "https://conf.researchr.org/home/mobilesoft-2026",
          date: "2026-01-01"
        }
      },
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
