import { Link } from "react-router";
import { getFeaturedProjects, getProjects } from "../../api/projects";
import { localizePath, useLang } from "../../lib/i18n";

/** `featuredOnly` is the landing page's shorter selection; /portfolio shows all. */
export const ProjectCard = ({ featuredOnly }: { featuredOnly?: boolean }) => {
  const projects = featuredOnly ? getFeaturedProjects() : getProjects();
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
