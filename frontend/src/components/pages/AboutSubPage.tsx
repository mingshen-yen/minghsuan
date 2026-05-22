import { experience, education } from "../../data/AboutMe";

export const AboutSubPage = () => {
  return (
    <>
      <div className="max-h- mx-auto flex items-center justify-center">
        <div className="flex flex-wrap gap-10 p-8 bg-[#07140f]/30">
          <div id="experience" className="scroll-mt-24 ">
            <h3 className="hero-eyebrow">Experience</h3>
            <div>
              {experience.map(
                ({
                  title,
                  company,
                  period,
                  descriptions,
                }: {
                  title: string;
                  company: string;
                  period: string;
                  descriptions: string[];
                }) => {
                  return (
                    <div className="py-2">
                      <h4>{title}</h4>
                      <div className="py-2 italic text-sm text-slate-300">
                        {company}
                        {", "}
                        <span>{period}</span>
                      </div>
                      <ul className="text-[13px]">
                        {descriptions.map((description) => {
                          return <li>{description}</li>;
                        })}
                      </ul>
                    </div>
                  );
                },
              )}
            </div>
          </div>
          <div id="eduction" className="scroll-mt-24">
            <h3 className="hero-eyebrow">Education</h3>
            <div>
              {education.map(
                ({
                  degree,
                  institution,
                  period,
                  descriptions,
                }: {
                  degree: string;
                  institution: string;
                  period: string;
                  descriptions: string[];
                }) => {
                  return (
                    <div className="py-2">
                      <h4>{degree}</h4>
                      <div className="py-2 italic text-sm text-slate-300">
                        {institution}
                        {", "}
                        <span>{period}</span>
                      </div>
                      <ul className="text-[13px]">
                        {descriptions.map((description) => {
                          return <li>{description}</li>;
                        })}
                      </ul>
                    </div>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
