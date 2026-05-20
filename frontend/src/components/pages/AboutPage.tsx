import { SideBar } from "../layout/SideBar";
import { StatsStrip } from "../layout/StatsStrip";

export const AboutPage = () => {
  const experItems = ["Python", "React", "TypeScript", "Node.js", "MongoDB"];

  return (
    <>
      <div className="max-h-screen mx-auto">
        <SideBar />
        <div className="box grid grid-cols-1">
          <div className="text-center py-20">
            <p className="hero-bio">
              PhD in Geophysics. 8+ years building reproducible analytical
              workflows and translating complex datasets into actionable
              insights — bridging scientific rigour with business impact.
            </p>
          </div>
          <div className="skills-label">Experience with</div>
          <div className="skill-tags">
            {experItems.map((item) => {
              return <span className="skill-tag">{item}</span>;
            })}
          </div>
          <StatsStrip />
        </div>
      </div>
    </>
  );
};
