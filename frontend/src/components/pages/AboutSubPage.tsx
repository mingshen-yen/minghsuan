import { experience, education, skills } from "../../data/AboutMe";

type AboutSection = "experience" | "education" | "skills";

type AboutSubPageProps = {
  section: AboutSection;
};

export const AboutSubPage = ({ section }: AboutSubPageProps) => {
  return (
    <div className="flex flex-wrap pb-8">
      <div id={section}>
        <div>
          {section === "experience" &&
            experience.map(({ title, company, period, descriptions }) => (
              <div key={title} className="py-1">
                <h4>{title}</h4>
                <div className="about__company">
                  {company}
                  {", "}
                  <span>{period}</span>
                </div>
                <ul className="about__description">
                  {descriptions.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </div>
            ))}
          {section === "education" &&
            education.map(({ degree, institution, period, descriptions }) => (
              <div key={degree} className="py-1">
                <h4>{degree}</h4>
                <div className="about__company">
                  {institution}
                  {", "}
                  <span>{period}</span>
                </div>
                <ul className="about__description">
                  {descriptions.map((description) => (
                    <li key={description}>{description}</li>
                  ))}
                </ul>
              </div>
            ))}
          <div className="grid grid-cols-2 justify-center">
            {section === "skills" &&
              skills.map(({ category, items }) => (
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
        </div>
      </div>
    </div>
  );
};
