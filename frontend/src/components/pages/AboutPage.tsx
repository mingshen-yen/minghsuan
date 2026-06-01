import { useState } from "react";
import { aboutMe } from "../../data/AboutMe";
import { SideBar } from "../layout/SideBar";
import { StatsStrip } from "../layout/StatsStrip";
import { AboutSubPage } from "./AboutSubPage";

type AboutSection = "experience" | "education" | "skills";

export const AboutPage = () => {
  const [section, setSection] = useState<AboutSection>("experience");

  const handleSectionChange =
    (newSection: AboutSection) => (e: React.MouseEvent) => {
      e.preventDefault();
      setSection(newSection);
    };

  const isActive = (s: AboutSection) => section === s;

  return (
    <div className="min-h-screen mx-auto flex items-center justify-center">
      <SideBar />
      <div className="section section--about">
        <div className="about__title">
          <span className="text-3xl">Hello,</span>
          <br /> I'm <em>{aboutMe.name}</em>
        </div>
        <div className="about__detail">
          <div className="avatar">
            <div className="avatar__figure">
              <img
                src="/example.jpg"
                alt="Minghsuan avatar"
                className="rounded-xl object-contain"
              />
              <div className="about__note">
                <p className="text-lg">❝</p>
                <p className="about__description italic">
                  {aboutMe.description}
                </p>
              </div>
            </div>
          </div>
          <div className="about__text-box">
            <div className="flex gap-2">
              <a
                href="#experience"
                onClick={handleSectionChange("experience")}
                className={`about__cta ${
                  isActive("experience")
                    ? "text-[#5de8b0] font-black scale-110"
                    : "text-white hover:scale-105 hover:text-[#5de8b0]"
                }`}
              >
                Experience
              </a>
              <a
                href="#education"
                onClick={handleSectionChange("education")}
                className={`about__cta ${
                  isActive("education")
                    ? "text-[#5de8b0] font-black scale-110"
                    : "text-white hover:scale-105 hover:text-[#5de8b0]"
                }`}
              >
                Education
              </a>
              <a
                href="#skills"
                onClick={handleSectionChange("skills")}
                className={`about__cta ${
                  isActive("skills")
                    ? "text-[#5de8b0] font-black scale-110"
                    : "text-white hover:scale-105 hover:text-[#5de8b0]"
                }`}
              >
                Skills
              </a>
            </div>
            <div className="flex">
              <AboutSubPage section={section} />
            </div>
          </div>
        </div>
        <StatsStrip />
      </div>
    </div>
  );
};
