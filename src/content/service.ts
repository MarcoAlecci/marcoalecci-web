import type { Service } from "$lib/utils/utils";

export const service: Service[] = [
  {
    id          : "conferenceProgramCommittee",
    title       : "Conference PC Member",
    instances   : [
      {
        name       : "PC Member",
        conference : {
          name : "RASE 2026 [ASE]",
          url  : "https://conf.researchr.org/home/ase-2026",
          date : "2026-11-01"
        }
      },
      {
        name       : "PC Member",
        conference : {
          name : "SECUTE 2026 [ASE]",
          url  : "https://esorics2026.sciencesconf.org/",
          date : "2026-09-21"
        }
      },
      {
        name       : "PC Member",
        conference : {
          name : "STATIC 2026 [ICSE]",
          url  : "https://conf.researchr.org/home/icse-2026/static-2026",
          date : "2026-04-18"
        }
      },
      {
        name       : "PC Member",
        conference : {
          name : "STATIC 2025 [ICSE]",
          url  : "https://conf.researchr.org/home/icse-2025/static-2025",
          date : "2025-04-29"
        }
      },
      {
        name       : "PC Member",
        conference : {
          name : "TAIC 2025 [ITASEC]",
          url  : "https://itasec.it/",
          date : "2025-02-09"
        }
      }
    ]
  },
  {
    id          : "journalReviews",
    title       : "Journal Reviews",
    groupByYear : false,
    instances   : [

      {
        name       : "Reviewer",
        years      : [2026],
        conference : {
          name : "[TDSC] - IEEE Transactions on Dependable and Secure Computing",
          url  : "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=8858",
        }
      },
      {
        name       : "Reviewer",
        years      : [2026],
        conference : {
          name : "[CSUR] - ACM Computing Surveys",
          url  : "https://dl.acm.org/journal/csur",
        }
      },
      {
        name       : "Reviewer",
        years      : [2024, 2025, 2026],
        conference : {
          name : "[TOSEM] - ACM Transactions on Software Engineering and Methodology",
          url  : "https://dl.acm.org/journal/tosem",
        }
      },
      {
        name       : "Reviewer",
        years      : [2025, 2026],
        conference : {
          name : "[EMSE] - Empirical Software Engineering",
          url  : "https://www.springer.com/journal/10664",
        }
      },
      {
        name       : "Reviewer",
        years      : [2025, 2026],
        conference : {
          name : "[TSE] - IEEE Transactions on Software Engineering",
          url  : "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=32",
        }
      },
      {
        name       : "Reviewer",
        years      : [2024, 2025],
        conference : {
          name : "[SCICO] - Science of Computer Programming",
          url  : "https://www.sciencedirect.com/journal/science-of-computer-programming",
        }
      },
      {
        name       : "Reviewer",
        years      : [2024],
        conference : {
          name : "[TR] - IEEE Transactions on Reliability",
          url  : "https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=24",
        }
      }
    ]
  },
  {
    id          : "conferenceOrganization",
    title       : "Conference Organizing Committee",
    instances   : [
      {
        name       : "Web & Publicity Chair",
        conference : {
          name : "MobileSoft 2026",
          url  : "https://conf.researchr.org/home/mobilesoft-2026",
          date : "2026-04-12"
        }
      },
      {
        name       : "Web & Publicity Chair",
        conference : {
          name : "MobileSoft 2025",
          url  : "https://conf.researchr.org/home/mobilesoft-2025",
          date : "2025-05-26"
        }
      },
      {
        name       : "Student Volunteer",
        conference : {
          name : "ASE 2023",
          url  : "https://conf.researchr.org/home/ase-2023",
          date : "2023-09-11"
        }
      }
    ]
  },
  {
    id        : "subReviewer",
    title     : "SubReviewer",
    instances : [
      {
        name       : "SubReviewer",
        conference : {
          name : "ICSE 2027",
          url  : "https://conf.researchr.org/home/icse-2027",
          date : "2027-04-25"
        }
      },
      {
        name       : "SubReviewer",
        conference : {
          name : "ASE 2026",
          url  : "https://conf.researchr.org/home/ase-2026",
          date : "2026-05-10"
        }
      },
      {
        name       : "SubReviewer",
        conference : {
          name : "Data4SoftSec 2026",
          url  : "https://conf.researchr.org/home/icse-2026/data4softsec-2026",
          date : "2026-03-10"
        }
      },
      {
        name       : "SubReviewer",
        conference : {
          name : "ISSTA 2026",
          url  : "https://conf.researchr.org/home/issta-2026",
          date : "2026-02-11"
        }
      },
      {
        name       : "SubReviewer",
        conference : {
          name : "FSE 2026",
          url  : "https://conf.researchr.org/home/fse-2026",
          date : "2025-10-30"
        }
      },
      {
        name       : "SubReviewer",
        conference : {
          name : "ASE 2025",
          url  : "https://conf.researchr.org/home/ase-2025",
          date : "2025-07-14"
        }
      },
      {
        name       : "SubReviewer",
        conference : {
          name : "ACL ARR 2025",
          url  : "https://aclrollingreview.org/",
          date : "2025-06-17"
        }
      },
      {
        name       : "SubReviewer",
        conference : {
          name : "ISSTA 2025",
          url  : "https://conf.researchr.org/home/issta-2025",
          date : "2024-11-27"
        }
      },
      {
        name       : "SubReviewer",
        conference : {
          name : "ICSE 2025",
          url  : "https://conf.researchr.org/home/icse-2025",
          date : "2024-09-19"
        }
      },
      {
        name       : "SubReviewer",
        conference : {
          name : "ISSTA 2024",
          url  : "https://conf.researchr.org/home/issta-2024",
          date : "2024-01-25"
        }
      },
      {
        name       : "SubReviewer",
        conference : {
          name : "ISSTA 2023",
          url  : "https://conf.researchr.org/home/issta-2023",
          date : "2022-12-03"
        }
      },
      {
        name       : "SubReviewer",
        conference : {
          name : "SANER 2023",
          url  : "https://conf.researchr.org/home/saner-2023",
          date : "2022-11-24"
        }
      }
    ]
  }
];
