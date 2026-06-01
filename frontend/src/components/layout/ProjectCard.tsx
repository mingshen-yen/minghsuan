import { useEffect, useState } from "react";
import { Link } from "react-router";
import { fetchProjects, imageUrl } from "../../lib/api";
import type { Project } from "../../data/portofolio";

export const ProjectCard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(() => setError(true));
  }, []);

  if (error) return <p className="text-[#8b93b0] text-sm">Failed to load projects.</p>;
  if (!projects.length) return <p className="text-[#8b93b0] text-sm">Loading…</p>;

  return (
    <>
      {projects.map((project) => (
        <Link
          to={`/portfolio/${project.slug}`}
          key={project.slug}
          className="card card--project"
        >
          <div className="card__image-frame">
            <img className="card__image" src={imageUrl(project.img)} alt={project.title} />
          </div>
          <div className="card__content">
            <span className="card__tag card__tag--project">{project.tag}</span>
            <div className="card__title">{project.title}</div>
            <p className="card__description">{project.description}</p>
          </div>
        </Link>
      ))}
    </>
  );
};
