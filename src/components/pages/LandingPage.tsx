import { Footer } from "../layout/Footer";
import { Hero } from "../layout/Hero";
import { SideBar } from "../layout/SideBar";
import { AboutPage } from "./AboutPage";
import { MediaPage } from "./MediaPage";
import { ProjectsPage } from "./ProjectsPage";

export const LandingPage = () => {
  return (
    <div className="max-h-screen mx-auto">
      <SideBar />
      <Hero />
      <AboutPage />
      <ProjectsPage />
      <MediaPage />
      <Footer />
    </div>
  );
};
