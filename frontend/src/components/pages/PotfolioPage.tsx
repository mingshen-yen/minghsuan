import { ProjectCard } from "../layout/ProjectCard";
import { SideBar } from "../layout/SideBar";

export const PortfolioPage = () => {
  return (
    <div className="max-h-screen mx-auto">
      <SideBar />
      <div className="box grid grid-cols-1">
        <section id="data" className="text-center pb-15">
          <h2>Data Science</h2>
          <div className="pro-cards z-10 grid grid-cols-1 lg:grid-cols-3  gap-10 py-10">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
        <section id="web" className="text-center pb-15">
          <h2>web development</h2>
          <div className="pro-cards z-10 grid grid-cols-1 lg:grid-cols-3 gap-10 pt-10">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </section>
      </div>
    </div>
  );
};
