import { Link } from "react-router";
import { getProjects } from "../../api/projects";

export const ProjectCard = () => {
  const projects = getProjects();

  return (
    <>
      {projects.map((project) => (
        <Link
          to={`/portfolio/${project.slug}`}
          key={project.slug}
          className="card card--project"
        >
          <div className="card__image-frame">
            <img
              className="card__image"
              src={project.image}
              alt={project.title}
            />
          </div>
          <div className="card__content">
            <span className="card__tag card__tag--project">{project.tag}</span>
            <div className="card__title">{project.title}</div>
            <p className="card__description">{project.summary}</p>
          </div>
        </Link>
      ))}
    </>
  );
};
