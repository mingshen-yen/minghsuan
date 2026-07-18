import { CalendarDays, MapPin } from "lucide-react";
import type { AboutData } from "../../lib/type";
type AboutSection = "experience" | "education" | "skills";

type Props = {
  section: AboutSection;
  data: AboutData;
};

export const AboutSubPage = ({ section, data }: Props) => {
  const { experience, education, skills } = data;

  return (
    <div>
      <div id={section}>
        {section === "experience" &&
          experience.map(
            ({ title, company, location, period, descriptions }) => (
              <div key={title} className="py-0.5">
                <h4>{title}</h4>
                <div className="about__company">{company}</div>
                <div className="flex gap-3 text-xs pb-1 justify-center">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    <span>{period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{location}</span>
                  </div>
                </div>
                <ul className="about__experience_description">
                  {descriptions.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            ),
          )}

        {section === "education" &&
          education.map(({ degree, uni, location, period, description }) => (
            <div key={degree} className="py-0.5">
              <h4>{degree}</h4>
              <div className="about__company">{uni}</div>
              <div className="flex gap-3 text-xs pb-1 justify-center">
                <div className="flex items-center gap-1">
                  <CalendarDays size={14} />
                  <span>{period}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{location}</span>
                </div>
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
