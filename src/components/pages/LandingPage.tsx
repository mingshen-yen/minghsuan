import { Footer } from "../layout/Footer";
import { Hero } from "../layout/Hero";
import { SideBar } from "../layout/SideBar";
import { MediaPage } from "./MediaPage";
import { ProjectsPage } from "./ProjectsPage";

export const LandingPage = () => {
  return (
    <div className="max-h-screen mx-auto">
      <SideBar />
      <Hero />
      <div className="flex flex-col gap-10 md:px-15 pb-10">
        <ProjectsPage />
        <MediaPage />
      </div>
      <Footer />
    </div>
  );
};
