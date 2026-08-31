import { useParams, Link } from "react-router";
import { getProjectBySlug } from "../../api/projects";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import ReactMarkdown from "react-markdown";

export const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : null;

  if (!project) {
    return (
      <div className="project-detail__not-found">
        <p>Project not found.</p>
        <Link to="/portfolio" className="btn btn--ghost mt-6">
          ← Back to projects
        </Link>
      </div>
    );
  }

  return (
    <article className="project-detail">
      <Link to="/portfolio" className="project-detail__back">
        <ArrowLeft size={14} />
        All projects
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
              Live demo
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
              Source
            </a>
          )}
        </div>
      </header>

      <div className="project-detail__cover">
        <img src={project.image} alt={project.title} />
      </div>

      {project.stack.length > 0 && (
        <div className="project-detail__stack">
          <span className="skill-label">Built with</span>
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
