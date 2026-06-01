import { projects } from "../../data/portofolio";
import { Link } from "react-router";

export const ProjectCard = () => {
  return (
    <>
      {projects.map((project) => (
        <Link
          to={project.link}
          key={project.title}
          className="card card--project"
        >
          <div className="card__image-frame">
            <img
              className="card__image"
              src={project.img}
              alt={project.title}
            />
          </div>
          <div className="card__content">
            <div className="card__title">{project.title}</div>
            <span className="card__tag card__tag--project">WEB</span>
          </div>
        </Link>
      ))}
    </>
  );
};
