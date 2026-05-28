import { useState } from "react";
import { aboutMe } from "../../data/AboutMe";
import { SideBar } from "../layout/SideBar";
import { StatsStrip } from "../layout/StatsStrip";
import { AboutSubPage } from "./AboutSubPage";

type AboutSection = "experience" | "education" | "skills";

export const AboutPage = () => {
  const [section, setSection] = useState<AboutSection>("experience");

  return (
    <>
      <div className="min-h-screen mx-auto flex items-center justify-center">
        <SideBar />
        <div className="about-box">
          <div className="about-title">
            <span className="text-3xl">Hello,</span>
            <br /> I'm <em>{aboutMe.name}</em>
          </div>
          <div className="about-detail-box">
            <div className="avatar-visual">
              <div className="avatar-figure">
                <img
                  src="/src/assets/private/profile-3.png"
                  alt="Minghsuan avatar"
                  className="rounded-xl object-contain"
                />
                <div className="ref-note">
                  <p className="text-lg">❝</p>
                  <p className="text-details italic">{aboutMe.description}</p>
                </div>
              </div>
            </div>
            <div className="text-box">
              <div className="flex gap-2">
                <a
                  href="#experience"
                  onClick={(event) => {
                    event.preventDefault();
                    setSection("experience");
                  }}
                  className={`text-btn ${
                    section === "experience"
                      ? "text-[#5de8b0] font-black scale-110"
                      : "text-white hover:scale-105 hover:text-[#5de8b0]"
                  }`}
                >
                  Experience
                </a>
                <a
                  href="#education"
                  onClick={(event) => {
                    event.preventDefault();
                    setSection("education");
                  }}
                  className={`text-btn ${
                    section === "education"
                      ? "text-[#5de8b0] font-black scale-110"
                      : "text-white hover:scale-105 hover:text-[#5de8b0]"
                  }`}
                >
                  Education
                </a>
                <a
                  href="#skills"
                  onClick={(event) => {
                    event.preventDefault();
                    setSection("skills");
                  }}
                  className={`text-btn ${
                    section === "skills"
                      ? "text-[#5de8b0] font-black scale-110"
                      : "text-white hover:scale-105 hover:text-[#5de8b0]"
                  }`}
                >
                  Skills
                </a>
              </div>
              <div className="flex ">
                <AboutSubPage section={section} />
              </div>
            </div>
          </div>
          <StatsStrip />
        </div>
      </div>
    </>
  );
};
