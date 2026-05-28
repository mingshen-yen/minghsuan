export const StatsStrip = () => {
  const experItems = ["Python", "React", "TypeScript", "Node.js", "MongoDB"];

  return (
    <div className="stats-strip hidden md:block">
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
  );
};
