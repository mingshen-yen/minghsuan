import { useEffect, useState } from "react";
import { useState as useSection } from "react";
import { fetchAbout, imageUrl, type AboutData } from "../../lib/api";
import { SideBar } from "../layout/SideBar";
import { StatsStrip } from "../layout/StatsStrip";
import { AboutSubPage } from "./AboutSubPage";

type AboutSection = "experience" | "education" | "skills";

export const AboutPage = () => {
  const [data, setData] = useState<AboutData | null>(null);
  const [section, setSection] = useSection<AboutSection>("experience");

  useEffect(() => {
    fetchAbout().then(setData);
  }, []);

  const handleSectionChange =
    (newSection: AboutSection) => (e: React.MouseEvent) => {
      e.preventDefault();
      setSection(newSection);
    };

  const isActive = (s: AboutSection) => section === s;

  if (!data) return null;

  const { aboutMe } = data;

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
                src={imageUrl(aboutMe.avatar)}
                alt={`${aboutMe.name} avatar`}
                className="rounded-xl object-contain"
              />
              <div className="about__note">
                <p className="text-lg">❝</p>
                <p className="about__description italic">{aboutMe.description}</p>
              </div>
            </div>
          </div>
          <div className="about__text-box">
            <div className="flex gap-2">
              {(["experience", "education", "skills"] as AboutSection[]).map((s) => (
                <a
                  key={s}
                  href={`#${s}`}
                  onClick={handleSectionChange(s)}
                  className={`about__cta capitalize ${
                    isActive(s)
                      ? "text-[#5de8b0] font-black scale-110"
                      : "text-white hover:scale-105 hover:text-[#5de8b0]"
                  }`}
                >
                  {s}
                </a>
              ))}
            </div>
            <div className="flex">
              <AboutSubPage section={section} data={data} />
            </div>
          </div>
        </div>
        <StatsStrip />
      </div>
    </div>
  );
};
