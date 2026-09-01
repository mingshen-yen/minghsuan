import { getAbout } from "../../api/aboutMe";
import { getUi } from "../../api/ui";
import { useLang } from "../../lib/i18n";
import { ContactSection } from "../layout/ContactSection";
import { SectionHead } from "../layout/SectionHead";
import { StatsStrip } from "../layout/StatsStrip";
import { EducationList, ExperienceList, SkillsGrid } from "./AboutSections";

export const AboutPage = () => {
  const lang = useLang();
  const { aboutMe, experience, education, skills } = getAbout(lang);
  const ui = getUi(lang);

  return (
    <>
      <section className="section-block">
        <div className="about__intro">
          <img
            className="about__portrait"
            src={aboutMe.image}
            alt={aboutMe.name}
          />
          <div className="about__identity">
            <p className="about__greeting">{ui.about.greeting}</p>
            <h1 className="about__title">
              {ui.about.iam} <em>{aboutMe.name}</em>
            </h1>
            <p className="about__role">{aboutMe.title}</p>
            <p className="about__quote">{aboutMe.description}</p>
          </div>
        </div>
      </section>

      <StatsStrip />

      <section className="section-block">
        <SectionHead title={ui.about.experience} />
        <ExperienceList items={experience} />
      </section>

      <section className="section-block">
        <SectionHead title={ui.about.education} />
        <EducationList items={education} />
      </section>

      <section className="section-block">
        <SectionHead title={ui.about.skills} />
        <SkillsGrid items={skills} />
      </section>

      <ContactSection />
    </>
  );
};
