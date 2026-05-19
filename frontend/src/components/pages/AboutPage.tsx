import { House } from "lucide-react";
import { Link } from "react-router";

export const AboutPage = () => {
  const doItems = [
    { to: "/portfolio", label: "Data Science", icon: House },
    { to: "/portfolio", label: "Web Development", icon: House },
    { to: "/channel#personal", label: "Content Creation", icon: House },
  ];
  const experItems = ["Python", "React", "TypeScript", "Node.js", "MongoDB"];

  return (
    <>
      <div className="container">
        <div className="text-center py-20">
          <p className="hero-bio">
            PhD in Geophysics. 8+ years building reproducible analytical
            workflows and translating complex datasets into actionable insights
            — bridging scientific rigour with business impact.
          </p>
          <h2>What i do</h2>
          <div className="relative z-10 flex flex-wrap gap-20 justify-center py-15">
            {doItems.map(({ to, label, icon: Icon }) => {
              return (
                <Link
                  key={to}
                  to={to}
                  className="flex justify-center items-center w-60 h-40 rounded-lg bg-[#1c2b4a] border border-white/[0.07] hover:shadow-[8px_8px_24px_rgba(93,232,176,0.25)] transition cursor-pointer duration-200 hover:border-b-[rgba(93,232,176,0.8)] hover:border-b-4 hover:bg-[rgba(93,232,176,0.48)]"
                >
                  {Icon && <Icon className="h-4 w-4 mr-2" />}
                  <span className="text-xl tracking-wide text-white">
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="skills-label">Experience with</div>
        <div className="skill-tags">
          {experItems.map((item) => {
            return <span className="skill-tag">{item}</span>;
          })}
        </div>
      </div>
      <div className="stats-strip">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="num">
              8<span>+</span>
            </div>
            <div className="lbl">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="num">PhD</div>
            <div className="lbl">Geophysics</div>
          </div>
          <div className="stat-item">
            <div className="num">{experItems.length}</div>
            <div className="lbl">Core Technologies</div>
          </div>
          <div className="stat-item">
            <div className="num">∞</div>
            <div className="lbl">Curiosity</div>
          </div>
        </div>
      </div>
    </>
  );
};
