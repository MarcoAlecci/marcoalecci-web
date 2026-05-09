import type { Education } from "$lib/utils/utils";

export const education: Education[] = [
  {
    id: "phd",
    title: "Ph.D.",
    school: {
      name: "University of Luxembourg, Doctoral School in Science and Engineering (DSSE)",
      url: "https://www.uni.lu/research-en/doctoral-education/dsse/",
      logo: "/logo/logoUniLu.png",
      location: "Luxembourg",
      countryCode: "LU"
    },
    period: {
      start: "2022-10-15"
    },
    course: {
      name: "Doctoral program in Computer Science and Computer Engineering (DPCSCE)"
    },
    thesis: "Context is Key: Combining Static Analysis and AI for Practical Android App Analysis",
    supervisors: [
      {
        name: "Jacques",
        surname: "Klein",
        role: "Supervisor"
      }
    ]
  },
  {
    id: "mcs-ce-unipd",
    title: "Master Degree",
    school: {
      name: "University of Padua - Department of Information Engineering",
      url: "https://dei.unipd.it/",
      logo: "/logo/logoUniPD.png",
      location: "Padua",
      countryCode: "IT"
    },
    period: {
      start: "2020-10-01",
      end: "2022-09-05"
    },
    course: {
      name: "Computer Engineering"
    },
    grade: 110,
    laude: true,
    thesis: "Assessment of the Blocking Cards Effectiveness in Protecting Mifare Classic Smart Card",
    supervisors: [
      {
        name: "Mauro",
        surname: "Conti",
        role: "Supervisor"
      }
    ],
    coSupervisors: [
      {
        name: "Hideki",
        surname: "Ochiai",
        role: "Co-supervisor"
      }
    ]
  },
  {
    id: "bcs-ce-unipd",
    title: "Bachelor's Degree",
    school: {
      name: "University of Padua - Department of Information Engineering",
      url: "https://dei.unipd.it/",
      logo: "/logo/logoUniPD.png",
      location: "Padua",
      countryCode: "IT"
    },
    period: {
      start: "2017-10-01",
      end: "2020-07-14"
    },
    course: {
      name: "Computer Engineering"
    },
    grade: 110,
    laude: true,
    thesis: "Development of a Framework to Generate Virtualization-Based Malware for Android OS",
    supervisors: [
      {
        name: "Mauro",
        surname: "Conti",
        role: "Supervisor"
      }
    ],
    coSupervisors: [
      {
        name: "Eleonora",
        surname: "Losiouk",
        role: "Co-supervisor"
      }
    ]
  }
];
