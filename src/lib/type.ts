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

export type StoryBlock = {
  heading: string;
  paragraphs: string[];
  image?: string;
};

export type AboutData = {
  aboutMe: {
    name: string;
    title: string;
    description: string;
    image: string;
    skills: string[];
  };
  /** The personal opening; the CV arrays below are the professional half. */
  story: StoryBlock[];
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

export type SocialItem = {
  icon: string;
  label: string;
  url: string;
};

export type LinksData = {
  profile: {
    name: string;
    tagline: string;
    image: string;
    email: string;
  };
  /** Profile-wide accounts shown as the icon row on the landing page. */
  social: SocialItem[];
  /** The Linktree-style list shown on /links. */
  links: LinkItem[];
};

export type UiStrings = {
  nav: { home: string; about: string; projects: string; links: string };
  sections: {
    projectsLabel: string;
    projectsTitle: string;
    mediaLabel: string;
    mediaTitle: string;
  };
  about: {
    greeting: string;
    iam: string;
    background: string;
    experience: string;
    education: string;
    skills: string;
  };
  project: {
    viewAll: string;
    filterAll: string;
    back: string;
    live: string;
    source: string;
    builtWith: string;
    notFound: string;
  };
  contact: {
    title: string;
    intro: string;
    emailLabel: string;
    linkedinLabel: string;
    note: string;
  };
  links: { viewPortfolio: string };
  footer: { rights: string };
  langSwitch: { label: string; aria: string };
};

export type MediaItem = {
  /** Drives the tag colour; see .media-card__tag--*. */
  tone: "video" | "audio" | "writing";
  tag: string;
  /** Cover art, or `icon` for a platform with none of its own. */
  image?: string;
  /** Which edge the crop keeps; portraits need "top" to keep the face. */
  imagePosition?: "top" | "center";
  /** A LinkIcon key, drawn on a tile in place of cover art. */
  icon?: string;
  title: string;
  description: string;
  url: string;
  linkLabel: string;
};
