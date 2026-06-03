import type { AboutData } from "../../lib/type";
type AboutSection = "experience" | "education" | "skills";

type Props = {
  section: AboutSection;
  data: AboutData;
};

export const AboutSubPage = ({ section, data }: Props) => {
  const { experience, education, skills } = data;

  return (
    <div className="flex flex-wrap pb-8">
      <div id={section}>
        {section === "experience" &&
          experience.map(({ title, company, period, descriptions }) => (
            <div key={title} className="py-1">
              <h4>{title}</h4>
              <div className="about__company">
                {company}, <span>{period}</span>
              </div>
              <ul className="about__description">
                {descriptions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          ))}

        {section === "education" &&
          education.map(({ degree, uni, period, description }) => (
            <div key={degree} className="py-1">
              <h4>{degree}</h4>
              <div className="about__company">
                {uni}, <span>{period}</span>
              </div>
              <ul className="about__description">{description}</ul>
            </div>
          ))}

        {section === "skills" && (
          <div className="about__skills-box">
            {skills.map(({ category, items }) => (
              <div key={category} className="py-1">
                <h4>{category}</h4>
                <ul className="about__skills">
                  {items.map((item) => (
                    <li key={item} className="about__skill">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
