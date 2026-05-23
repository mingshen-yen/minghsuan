import { aboutMe } from "../../data/AboutMe";
import { SideBar } from "../layout/SideBar";
import { StatsStrip } from "../layout/StatsStrip";
import { AboutSubPage } from "./AboutSubPage";

export const AboutPage = () => {
  return (
    <>
      <div className="mx-auto flex items-center justify-center">
        <SideBar />
        <div className="about-box">
          <div className="text-5xl md:text-6xl lg:text-7xl xl:text-[80px] font-black text-center">
            <span className="text-3xl">Hello,</span>
            <br /> I'm <span className="text-[#2fe39b]">{aboutMe.name}</span>
          </div>
          <div className="justify-center items-end grid grid-cols-1 lg:grid-cols-3 px-2">
            <div className="px-5 pb-10 w-60">
              <p className="text-sm italic">{aboutMe.description}</p>
            </div>
            <div className="avatar-visual">
              <img
                src="/example.jpg"
                alt="Minghsuan avatar"
                className="rounded-xl w-fit  object-contain"
              />
            </div>
            <div className="p-8 flex flex-col gap-8 items-center">
              <div>
                <a href="#" className="btn-primary">
                  Download CV
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.5"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
              <a href="#experience" className="btn-primary">
                Experience
              </a>
              <a href="#eduction" className="btn-primary">
                Eduction
              </a>
            </div>
          </div>
          <StatsStrip />
          <AboutSubPage />
        </div>
      </div>
    </>
  );
};
