export type Project = {
  slug: string;
  title: string;
  tag: string;
  image: string;
  summary: string;
  body: string;
  stack: string[];
  sourceUrl?: string;
  liveUrl?: string;
  featured: boolean;
  order: number;
};

export type AboutData = {
  aboutMe: {
    name: string;
    title: string;
    description: string;
    image: string;
    skills: string[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  location: string;
  period: string;
  descriptions: string[];
};

export type EducationItem = {
  degree: string;
  uni: string;
  location: string;
  period: string;
  description: string;
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type LinkItem = {
  icon: string;
  label: string;
  description: string;
  url: string;
};

export type LinksData = {
  profile: {
    name: string;
    tagline: string;
    image: string;
  };
  links: LinkItem[];
};
