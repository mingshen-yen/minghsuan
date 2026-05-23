import { ProjectCard } from "../layout/ProjectCard";
import { SideBar } from "../layout/SideBar";

export const PortfolioPage = () => {
  return (
    <div className="max-h-screen mx-auto">
      <SideBar />
      <div className="box grid grid-cols-1">
        <div className="z-10 grid grid-cols-1 lg:grid-cols-4 gap-8">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </div>
  );
};
