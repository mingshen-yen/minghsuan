import { useState } from "react";
import { StatsStrip } from "../layout/StatsStrip";
import { getAbout } from "../../api/aboutMe";
import { getUi } from "../../api/ui";
import { useLang } from "../../lib/i18n";
import { AboutSubPage } from "./AboutSubPage";

type AboutSection = "experience" | "education" | "skills";

export const AboutPage = () => {
  const lang = useLang();
  const data = getAbout(lang);
  const ui = getUi(lang);
  const [section, setSection] = useState<AboutSection>("experience");

  const handleSectionChange =
    (newSection: AboutSection) => (e: React.MouseEvent) => {
      e.preventDefault();
      setSection(newSection);
    };

  const isActive = (s: AboutSection) => section === s;

  const { aboutMe } = data;

  return (
    <>
      <div className="section section--about">
        <div className="about__title">
          <span className="text-3xl">{ui.about.greeting}</span>
          <br /> {ui.about.iam} <em>{aboutMe.name}</em>
        </div>
        <div className="about__detail">
          <div className="avatar">
            <div className="about__figure">
              <img src={aboutMe.image} alt={`${aboutMe.name} avatar`} />
              <div className="about__note">
                <p className="text-lg">❝</p>
                <p className="about__description italic">
                  {aboutMe.description}
                </p>
              </div>
            </div>
          </div>
          <div className="about__text-box">
            <div>
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
                    {ui.about[s]}
                  </a>
                ),
              )}
            </div>
            <div>
              <AboutSubPage section={section} data={data} />
            </div>
          </div>
        </div>
        <StatsStrip />
      </div>
    </>
  );
};
