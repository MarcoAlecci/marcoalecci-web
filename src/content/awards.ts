import type { Award } from "$lib/utils/utils";

export const awards: Award[] = [
  {
    id: "thesisAwardClusit",
    title: "Thesis Award by Clusit",
    school: {
      name: "Clusit - Italian association for Information Security",
      url: "https://tesi.clusit.it/"
    },
    details: [
      "My master's thesis titled 'Assessment of the Blocking Cards Effectiveness in Protecting Mifare Classic Smart Card' was awarded at the 18th edition of 'Premio Tesi - Innovare la sicurezza delle informazioni' organized by Clusit - the Italian Association for Information Security."
    ]
  },
  {
    id: "mille-una-lode",
    title: "Mille e una lode Award",
    school: {
      name: "University of Padua",
      url: "https://www.unipd.it/"
    },
    details: [
      "The University of Padova offers merit-based awards to the best 1000 students (3%) among all the students enrolled at the University of Padua.",
      "A.Y. 2017/2018",
      "A.Y. 2018/2019",
      "A.Y. 2020/2021"
    ]
  }
];
