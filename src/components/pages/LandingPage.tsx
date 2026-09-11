import { ContactSection } from "../layout/ContactSection";
import { Hero } from "../layout/Hero";
import { NewsSection } from "../layout/NewsSection";
import { MediaPage } from "./MediaPage";
import { ProjectsPage } from "./ProjectsPage";

export const LandingPage = () => {
  return (
    <div className="mx-auto">
      <Hero />
      <NewsSection />
      <ProjectsPage featuredOnly />
      <MediaPage />
      <ContactSection />
    </div>
  );
};
