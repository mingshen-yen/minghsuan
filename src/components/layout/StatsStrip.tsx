import { getUi } from "../../api/ui";
import { useLang } from "../../lib/i18n";

export const StatsStrip = () => {
  const ui = getUi(useLang());
  const skills = ["Python", "React", "TypeScript", "Node.js", "MongoDB"];

  return (
    <div className="stats-strip hidden md:block">
      <div className="stats-strip__inner">
        <div className="stats-strip__item">
          <div className="stats-strip__number">
            9<span></span>
          </div>
          <div className="stats-strip__label">{ui.stats.years}</div>
        </div>
        <div className="stats-strip__item">
          <div className="stats-strip__number">PhD</div>
          <div className="stats-strip__label">{ui.stats.geophysics}</div>
        </div>
        <div className="stats-strip__item">
          <div className="stats-strip__number">{skills.length}</div>
          <div className="stats-strip__label">{ui.stats.tech}</div>
        </div>
        <div className="stats-strip__item">
          <div className="stats-strip__number">∞</div>
          <div className="stats-strip__label">{ui.stats.curiosity}</div>
        </div>
      </div>
    </div>
  );
};
