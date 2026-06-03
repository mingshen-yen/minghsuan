import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import { getProjectById } from "../../api/projects";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";

const renderBody = (body: string) =>
  body.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h3 key={i} className="project-detail__heading">
          {block.slice(3)}
        </h3>
      );
    }
    return (
      <p key={i} className="project-detail__para">
        {block}
      </p>
    );
  });

export const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<any | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    getProjectById(slug)
      .then(setProject)
      .catch(() => setError(true));
  }, [slug]);

  if (error) {
    return (
      <div className="project-detail__not-found">
        <p>Project not found.</p>
        <Link to="/portfolio" className="btn btn--ghost mt-6">
          ← Back to projects
        </Link>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-detail__not-found">
        <p className="text-[#8b93b0] text-sm">Loading…</p>
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
          {/* {project.year && (
            <span className="project-detail__year">{project.year}</span>
          )} */}
        </div>
        <h1 className="project-detail__title">{project.title}</h1>
        <p className="project-detail__lead">{project.description}</p>

        <div className="project-detail__actions">
          {project.live_url && project.live_url !== "#" && (
            <a
              href={project.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Live demo
              <ExternalLink size={13} />
            </a>
          )}
          {project.github_url && (
            <a
              href={project.github_url}
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
        <img src={project.image_url} alt={project.title} />
      </div>

      {project.tech_stack && (
        <div className="project-detail__stack">
          <span className="skill-label">Built with</span>
          <div className="skill-list">
            {(Array.isArray(project.tech_stack)
              ? project.tech_stack
              : [project.tech_stack]
            ).map((stack: string) => (
              <span key={stack} className="skill-tag">
                {stack}
              </span>
            ))}
          </div>
        </div>
      )}

      {project.description && (
        <div className="project-detail__body">
          {renderBody(project.description)}
        </div>
      )}
    </article>
  );
};
