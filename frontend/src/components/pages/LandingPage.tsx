import { Hero } from "../layout/Hero";
import { SideBar } from "../layout/SideBar";
import { MediaPage } from "./MediaPage";
import { ProjectsPage } from "./ProjectsPage";

export const LandingPage = () => {
  return (
    <div className="max-h-screen mx-auto">
      <SideBar />
      <Hero />
      <ProjectsPage />
      <MediaPage />
    </div>
  );
};
