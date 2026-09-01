import { Hero } from "../layout/Hero";
import { MediaPage } from "./MediaPage";
import { ProjectsPage } from "./ProjectsPage";

export const LandingPage = () => {
  return (
    <div className="mx-auto">
      <Hero />
      <div className="flex flex-col gap-10 xl:gap-4 md:px-15 pb-10">
        <ProjectsPage />
        <div className="xl:-mt-16">
          <MediaPage />
        </div>
      </div>
    </div>
  );
};
