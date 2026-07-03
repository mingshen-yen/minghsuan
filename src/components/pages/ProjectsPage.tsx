import { ProjectCard } from "../layout/ProjectCard";
import { SideBar } from "../layout/SideBar";

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen mx-auto flex items-center justify-center">
      <SideBar />
      <div className="section section--portfolio">
        <ProjectCard />
      </div>
    </div>
  );
};
