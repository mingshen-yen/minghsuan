import { Link } from "react-router";
import { getProjects } from "../../api/projects";
import { localizePath, useLang } from "../../lib/i18n";

export const ProjectCard = () => {
  const projects = getProjects();
  const lang = useLang();

  return (
    <>
      {projects.map((project) => (
        <Link
          to={localizePath(`/portfolio/${project.slug}`, lang)}
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
