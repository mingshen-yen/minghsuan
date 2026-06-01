import type { Project } from "../data/portofolio";

const BASE = import.meta.env.VITE_API_URL ?? "http://localhost:4000";

export const imageUrl = (path: string) => `${BASE}${path}`;

export async function fetchProjects(): Promise<Project[]> {
  const res = await fetch(`${BASE}/api/projects`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function fetchProject(slug: string): Promise<Project> {
  const res = await fetch(`${BASE}/api/projects/${slug}`);
  if (!res.ok) throw new Error("Project not found");
  return res.json();
}

export async function fetchAbout(): Promise<AboutData> {
  const res = await fetch(`${BASE}/api/about`);
  if (!res.ok) throw new Error("Failed to fetch about data");
  return res.json();
}

export type ExperienceItem = {
  title: string;
  company: string;
  period: string;
  descriptions: string[];
};

export type EducationItem = {
  degree: string;
  institution: string;
  period: string;
  descriptions: string[];
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export type AboutData = {
  aboutMe: {
    name: string;
    title: string;
    description: string;
    avatar: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  experItems: string[];
};
