export interface Info {
  id?: string;
  title: string;
  image?: string;
}

export interface Period {
  start: string | Date;
  end?: string | Date;
}

export interface Person {
  name: string;
  surname: string;
  url?: string;
  avatar?: string;
}

export interface School {
  name: string;
  url?: string;
  ror?: string;
  logo?: string;
  location?: string;
  countryCode?: string;
}

export interface Course {
  name: string;
  url?: string;
}

export interface Conference {
  name: string;
  url: string;
  date: string | Date;
}

export interface Venue {
  name: string;
  acronym?: string;
  fullName?: string;
  date: string | Date;
  type?: "Conference" | "Journal" | "Workshop" | "Preprint";
  location?: string;
  countryCode?: string;
  track?: string;
}

export interface Education extends Info {
  period: Period;
  school: School;
  course: Course;
  grade?: number;
  laude?: boolean;
  thesis?: string;
  supervisors?: Supervisor[];
  coSupervisors?: Supervisor[];
  summary?: string;
}

export interface Experience extends Info {
  company?: string;
  companyLogo?: string;
  jobTitle: string;
  location?: string;
  countryCode?: string;
  supervisors?: Person[];
  period: Period;
  summary?: string;
}

export interface Publication extends Info {
  authors?: Person[];
  coAuthors?: Person[];
  venue: Venue;
  note?: string;
  pages?: string;
  bibtex?: string;
  url?: string;
  pdf?: string;
}

export interface ServiceExample {
  name: string;
  conference: Conference;
  years?: number[];
}

export interface Service extends Info {
  instances: ServiceExample[];
  summary?: string;
  groupByYear?: boolean;
}

export interface Teaching extends Info {
  period: Period;
  school: School;
  course: Course;
  courses?: Course[];
  role?: string;
  teachingUnits?: number;
}

export interface Award extends Info {
  school?: School;
  date?: string | Date;
  details?: string[];
}

export interface Post extends Info {
  date: Date;
  abstract: string;
}

export interface Supervisor extends Person {
  role?: string;
}

export interface Student {
  id: string;
  name: string;
  surname: string;
  level: "Master" | "PhD";
  program?: string;
  school?: School;
  period?: Period;
  role?: string;
  topic?: string;
  supervisors?: Supervisor[];
  summary?: string;
}

export interface Statistic {
  id: string;
  label: string;
  value: string | number;
  href?: string;
}

export interface ContactInfo {
  email: string;
  office: {
    label: string;
    address: string;
    city: string;
    country: string;
    mapUrl?: string;
    mapEmbedUrl?: string;
  };
  phone?: string;
  gpg?: string;
  profiles: Array<{ label: string; href: string; icon: string }>;
}
