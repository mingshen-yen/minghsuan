import { ProjectCard } from "../layout/ProjectCard";

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen mx-auto flex items-center justify-center">
      {/* <SideBar /> */}
      <div className="section section--portfolio">
        <ProjectCard />
      </div>
    </div>
  );
};
