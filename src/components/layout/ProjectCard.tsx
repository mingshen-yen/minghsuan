import { Link } from "react-router";
import { localizePath, useLang } from "../../lib/i18n";
import type { Project } from "../../lib/type";

/** Renders whatever selection the page decided on; it no longer fetches its own. */
export const ProjectCard = ({ projects }: { projects: Project[] }) => {
  const lang = useLang();

  return (
    <>
      {projects.map((project) => (
        <Link
          to={localizePath(`/projects/${project.slug}`, lang)}
          key={project.slug}
          className="card card--project"
        >
          <div className="card__image-frame">
            <img className="card__image" src={project.image} alt="" />
          </div>
          <div className="card__content">
            <span
              className={`card__tag card__tag--${project.tag.toLowerCase()}`}
            >
              {project.tag}
            </span>
            <h3 className="card__title">{project.title}</h3>
            <p className="card__description">{project.summary}</p>
          </div>
        </Link>
      ))}
    </>
  );
};
