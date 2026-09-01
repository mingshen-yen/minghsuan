import { useState } from "react";
import { StatsStrip } from "../layout/StatsStrip";
import { getAbout } from "../../api/aboutMe";
import { getUi } from "../../api/ui";
import { useLang } from "../../lib/i18n";
import { AboutSubPage } from "./AboutSubPage";
import { ContactSection } from "../layout/ContactSection";

type AboutSection = "experience" | "education" | "skills";

export const AboutPage = () => {
  const lang = useLang();
  const data = getAbout(lang);
  const ui = getUi(lang);
  const [section, setSection] = useState<AboutSection>("experience");

  const isActive = (s: AboutSection) => section === s;

  const { aboutMe } = data;

  return (
    <>
      <section className="section-block">
        <div className="section section--flush section--about">
          <header className="about__intro">
            <p className="about__greeting">{ui.about.greeting}</p>
            <h1 className="about__title">
              {ui.about.iam} <em>{aboutMe.name}</em>
            </h1>
            <p className="about__role">{aboutMe.title}</p>
          </header>
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
              <div className="about__tabs" role="group">
                {(["experience", "education", "skills"] as AboutSection[]).map(
                  (s) => (
                    <button
                      key={s}
                      type="button"
                      aria-pressed={isActive(s)}
                      onClick={() => setSection(s)}
                      className={`about__cta capitalize ${
                        isActive(s) ? "about__cta-active" : ""
                      }`}
                    >
                      {ui.about[s]}
                    </button>
                  ),
                )}
              </div>
              <div className="about__panel">
                <AboutSubPage section={section} data={data} />
              </div>
            </div>
          </div>
          <StatsStrip />
        </div>
      </section>
      <ContactSection />
    </>
  );
};
