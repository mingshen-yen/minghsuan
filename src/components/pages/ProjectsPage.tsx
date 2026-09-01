import { getUi } from "../../api/ui";
import { useLang } from "../../lib/i18n";
import { ProjectCard } from "../layout/ProjectCard";
import { SectionHead } from "../layout/SectionHead";

export const ProjectsPage = () => {
  const ui = getUi(useLang());

  return (
    <section className="section-block">
      <SectionHead
        label={ui.sections.projectsLabel}
        title={ui.sections.projectsTitle}
      />
      <div className="section section--flush section--portfolio">
        <ProjectCard />
      </div>
    </section>
  );
};
