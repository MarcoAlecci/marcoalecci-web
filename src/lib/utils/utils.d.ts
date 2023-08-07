export interface Info {
  id: string;
  title: string;
  image?: string;
}

interface Period {
  start: Date;
  end?: Date;
}

interface Person {
  name: string;
  surname: string;
  url?: string;
  avatar?: string;
}

interface School {
  name: string;
  url?: string;
  ror?: string;
  logo?: string;
}

interface Course {
  name: string;
  url?: string;
}

interface Conference {
  name: string;
  url: string;
  date: Date;
}

export interface Education extends Info {
  period: Period;
  school: School;
  course: Course;
  grade: number;
  laude: boolean;
  thesis?: Publication;
}

export interface Experience extends Info {
  company?: string;
  jobTitle: string;
  supervisors?: Person[];
  period: Period;
}

export interface Publication extends Info {
  abstract: string;
  coAuthors?: Person[];
  conference: Conference;
  bibtex?: string;
  url?: string;
}

interface ServiceExample {
  name: string;
  conference: Conference;
}

export interface Service extends Info {
  instances: ServiceExample[];
}

export interface Teaching extends Info {
  period: Period;
  school: School;
  course: Course;
}

export interface Award extends Info {
  school?: School;
  date?: Date;
}

export interface Post extends Info {
  date: Date;
  abstract: string;
}
