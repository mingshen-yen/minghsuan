import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { getUi } from "../../api/ui";
import { localizePath, useLang } from "../../lib/i18n";
import { ProjectCard } from "../layout/ProjectCard";
import { SectionHead } from "../layout/SectionHead";

/**
 * `featuredOnly` is what separates the landing section from /portfolio: without
 * it the two rendered the same grid under the same heading, so the hero's
 * "View projects" button led to a page the visitor had just scrolled past.
 */
export const ProjectsPage = ({ featuredOnly }: { featuredOnly?: boolean }) => {
  const lang = useLang();
  const ui = getUi(lang);

  return (
    <section className="section-block">
      <SectionHead
        label={ui.sections.projectsLabel}
        title={ui.sections.projectsTitle}
      />
      <div className="section section--flush section--portfolio">
        <ProjectCard featuredOnly={featuredOnly} />
      </div>
      {featuredOnly && (
        <div className="section-block__more">
          <Link
            to={localizePath("/portfolio", lang)}
            className="btn btn--ghost"
          >
            {ui.project.viewAll}
            <ArrowUpRight size={14} />
          </Link>
        </div>
      )}
    </section>
  );
};
