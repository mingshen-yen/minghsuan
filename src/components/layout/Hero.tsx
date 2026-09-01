import { Fragment } from "react";
import { getUi } from "../../api/ui";
import { localizePath, useLang } from "../../lib/i18n";

const Arrow = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
  >
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export const Hero = () => {
  const lang = useLang();
  const ui = getUi(lang);

  return (
    <section className="section--hero">
      <div id="hero-text">
        <div className="hero__label">{ui.hero.label}</div>
        <h1 className="hero__title">
          {ui.hero.title.map((line, lineIndex) => (
            <Fragment key={line.map((s) => s.text).join("")}>
              {lineIndex > 0 && <br className="hero__break" />}
              {line.map((segment) =>
                segment.em ? (
                  <em key={segment.text}>{segment.text}</em>
                ) : (
                  <Fragment key={segment.text}>{segment.text}</Fragment>
                ),
              )}
            </Fragment>
          ))}
        </h1>
        <p className="hero__subtitle">{ui.hero.subtitle}</p>
        <div className="hero__cta">
          <a
            href={localizePath("/portfolio", lang)}
            className="btn btn--primary"
          >
            {ui.hero.projects}
            <Arrow />
          </a>
          <a href={localizePath("/links", lang)} className="btn btn--ghost">
            {ui.hero.links}
            <Arrow />
          </a>
          <a href={localizePath("/about", lang)} className="btn btn--ghost">
            {ui.hero.about}
            <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
};
