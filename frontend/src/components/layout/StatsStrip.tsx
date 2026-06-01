export const StatsStrip = () => {
  const skills = ["Python", "React", "TypeScript", "Node.js", "MongoDB"];

  return (
    <div className="stats-strip hidden md:block">
      <div className="stats-strip__inner">
        <div className="stats-strip__item">
          <div className="stats-strip__number">
            8<span>+</span>
          </div>
          <div className="stats-strip__label">Years Experience</div>
        </div>
        <div className="stats-strip__item">
          <div className="stats-strip__number">PhD</div>
          <div className="stats-strip__label">Geophysics</div>
        </div>
        <div className="stats-strip__item">
          <div className="stats-strip__number">{skills.length}</div>
          <div className="stats-strip__label">Core Technologies</div>
        </div>
        <div className="stats-strip__item">
          <div className="stats-strip__number">∞</div>
          <div className="stats-strip__label">Curiosity</div>
        </div>
      </div>
    </div>
  );
};
