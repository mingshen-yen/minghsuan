import { ProjectCard } from "../layout/ProjectCard";
import { SideBar } from "../layout/SideBar";

export const PortfoPage = () => {
  return (
    <div className="min-h-screen mx-auto flex items-center justify-center">
      <SideBar />
      <div className="section section--portfolio">
        <ProjectCard />
      </div>
    </div>
  );
};
