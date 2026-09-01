import { useParams, Link } from "react-router";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { getProjectBySlug } from "../../api/projects";
import { getUi } from "../../api/ui";
import { localizePath, useLang } from "../../lib/i18n";

export const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const lang = useLang();
  const ui = getUi(lang);
  const project = slug ? getProjectBySlug(slug) : null;
  const backHref = localizePath("/portfolio", lang);

  if (!project) {
    return (
      <div className="project-detail__not-found">
        <p>{ui.project.notFound}</p>
        <Link to={backHref} className="btn btn--ghost mt-6">
          <ArrowLeft size={14} />
          {ui.project.back}
        </Link>
      </div>
    );
  }

  return (
    <article className="project-detail">
      <Link to={backHref} className="project-detail__back">
        <ArrowLeft size={14} />
        {ui.project.back}
      </Link>

      <header className="project-detail__header">
        <div className="project-detail__meta">
          <span className="card__tag card__tag--project">{project.tag}</span>
        </div>
        <h1 className="project-detail__title">{project.title}</h1>

        <div className="project-detail__actions">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              {ui.project.live}
              <ExternalLink size={13} />
            </a>
          )}
          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              <GitBranch size={13} />
              {ui.project.source}
            </a>
          )}
        </div>
      </header>

      <div className="project-detail__cover">
        <img src={project.image} alt={project.title} />
      </div>

      {project.stack.length > 0 && (
        <div className="project-detail__stack">
          <span className="skill-label">{ui.project.builtWith}</span>
          <div className="project-detail__skill">
            {project.stack.map((stack) => (
              <span key={stack} className="skill-tag">
                {stack}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.body && (
        <div className="project-detail__body">
          <ReactMarkdown>{project.body}</ReactMarkdown>
        </div>
      )}
    </article>
  );
};
