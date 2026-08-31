import { firstParagraph, parseFrontmatter } from "../lib/frontmatter";
import type { Project } from "../lib/type";

const files = import.meta.glob("../content/projects/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function toProject(path: string, source: string): Project {
  const { data, body } = parseFrontmatter(source);
  const slug = path.split("/").pop()!.replace(/\.md$/, "");

  return {
    slug,
    title: String(data.title ?? slug),
    tag: String(data.tag ?? ""),
    image: String(data.image ?? ""),
    summary: firstParagraph(body),
    body,
    stack: Array.isArray(data.stack) ? data.stack.map(String) : [],
    sourceUrl: data.sourceUrl ? String(data.sourceUrl) : undefined,
    liveUrl: data.liveUrl ? String(data.liveUrl) : undefined,
    featured: data.featured === true,
    order: Number(data.order ?? Number.MAX_SAFE_INTEGER),
  };
}

const projects: Project[] = Object.entries(files)
  .map(([path, source]) => toProject(path, source))
  .sort((a, b) => a.order - b.order || a.title.localeCompare(b.title));

export function getProjects() {
  return projects;
}

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug) ?? null;
}
