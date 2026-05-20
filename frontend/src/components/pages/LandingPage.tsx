import { Hero } from "../layout/Hero";
import { SideBar } from "../layout/SideBar";

export const LandingPage = () => {
  return (
    <div className="max-h-screen mx-auto">
      <SideBar />
      <Hero />
    </div>
  );
};
