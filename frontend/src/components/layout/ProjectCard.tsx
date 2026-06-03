import { useEffect, useState } from "react";
import { Link } from "react-router";
import { getProjects } from "../../api/projects";

export const ProjectCard = () => {
  const [projects, setProjects] = useState<any[]>([]);
  const [error, setErrors] = useState();

  useEffect(() => {
    getProjects().then(setProjects).catch(console.error);
  }, []);

  if (error)
    return <p className="text-[#8b93b0] text-sm">Failed to load projects.</p>;
  if (!projects.length)
    return <p className="text-[#8b93b0] text-sm">Loading…</p>;

  return (
    <>
      {projects.map((project) => (
        <Link
          to={`/portfolio/${project.slug}`}
          key={project.id}
          className="card card--project"
        >
          <div className="card__image-frame">
            <img
              className="card__image"
              src={project.image_url}
              alt={project.title}
            />
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
