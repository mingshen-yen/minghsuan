export type Project = {
  slug: string;
  title: string;
  img: string;
  tag: string;
  description: string;
  body?: string;
  link?: string;
  github?: string;
  year?: string;
  stack?: string[];
};

export type AboutData = {
  aboutMe: {
    name: string;
    title: string;
    descriptions: string;
    avatar: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  experItems: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  descriptions: string[];
};

export type EducationItem = {
  degree: string;
  uni: string;
  period: string;
  description: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};
