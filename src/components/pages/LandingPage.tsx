import { ContactSection } from "../layout/ContactSection";
import { Hero } from "../layout/Hero";
import { MediaPage } from "./MediaPage";
import { ProjectsPage } from "./ProjectsPage";

export const LandingPage = () => {
  return (
    <div className="mx-auto">
      <Hero />
      <ProjectsPage featuredOnly />
      <MediaPage />
      <ContactSection />
    </div>
  );
};
