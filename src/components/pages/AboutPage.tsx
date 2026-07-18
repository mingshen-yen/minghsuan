import { useEffect, useState } from "react";
import { SideBar } from "../layout/SideBar";
import { StatsStrip } from "../layout/StatsStrip";
import { getAbout } from "../../api/aboutMe";
import { AboutSubPage } from "./AboutSubPage";

type AboutSection = "experience" | "education" | "skills";

export const AboutPage = () => {
  const [data, setData] = useState<any | null>(null);
  const [section, setSection] = useState<AboutSection>("experience");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAbout()
      .then(setData)
      .catch((err) => {
        console.error("Failed to fetch about data:", err);
        setError(err?.message ?? "Failed to load page");
      });
  }, []);

  const handleSectionChange =
    (newSection: AboutSection) => (e: React.MouseEvent) => {
      e.preventDefault();
      setSection(newSection);
    };

  const isActive = (s: AboutSection) => section === s;

  if (error)
    return (
      <div className="project-detail__not-found">
        <p>{error}</p>
      </div>
    );
  if (!data) return null;

  const { aboutMe } = data;
  console.log(aboutMe);

  return (
    <>
      {/* <SideBar /> */}
      <div className="section section--about">
        <div className="about__title">
          <span className="text-3xl">Hello,</span>
          <br /> I'm <em>{aboutMe.name}</em>
        </div>
        <div className="about__detail">
          <div className="avatar">
            <div className="about__figure">
              <img src={aboutMe.image_url} alt={`${aboutMe.name} avatar`} />
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
              {(["experience", "education", "skills"] as AboutSection[]).map(
                (s) => (
                  <a
                    key={s}
                    href={`#${s}`}
                    onClick={handleSectionChange(s)}
                    className={`about__cta capitalize ${
                      isActive(s) ? "about__cta-active" : ""
                    }`}
                  >
                    {s}
                  </a>
                ),
              )}
            </div>
            <div className="flex">
              <AboutSubPage section={section} data={data} />
            </div>
          </div>
        </div>
        <StatsStrip />
      </div>
    </>
  );
};
