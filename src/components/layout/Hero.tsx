import { localizePath, useLang } from "../../lib/i18n";
import { SocialRow } from "./SocialRow";

export const Hero = () => {
  const lang = useLang();

  return (
    <section className="section--hero">
      <div id="hero-text">
        <div className="hero__label">Data Scientist & Content Creator</div>
        <h1 className="hero__title">
          Doing research about <br /> <em>Natural Hazards</em> <br />
          and make content about it.
        </h1>
        <div className="hero__cta">
          <a href={localizePath("/portfolio", lang)} className="btn btn--primary">
            Projects
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
          </a>
          <a href={localizePath("/links", lang)} className="btn btn--ghost">
            My Links
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
          </a>
          <a href={localizePath("/about", lang)} className="btn btn--ghost">
            About Me
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
          </a>
        </div>

        <div className="pt-6">
          <SocialRow only={["linkedin", "github", "youtube"]} />
        </div>
      </div>
    </section>
  );
};
