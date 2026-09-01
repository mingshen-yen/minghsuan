import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { getLinks } from "../../api/links";
import { getUi } from "../../api/ui";
import { localizePath, useLang } from "../../lib/i18n";
import { LinkIcon } from "../layout/LinkIcon";

export const LinksPage = () => {
  const lang = useLang();
  const { profile, links } = getLinks(lang);
  const ui = getUi(lang);

  return (
    <div className="mx-auto">
      <section className="link-hub">
        <img
          src={profile.image}
          alt={profile.name}
          className="link-hub__avatar"
        />
        <h1 className="link-hub__name">{profile.name}</h1>
        <p className="link-hub__tagline">{profile.tagline}</p>

        <ul className="link-hub__list">
          {links.map(({ icon, label, description, url }) => (
            <li key={url}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-card"
              >
                <span className="link-card__icon">
                  <LinkIcon name={icon} />
                </span>
                <span className="link-card__text">
                  <span className="link-card__label">{label}</span>
                  <span className="link-card__description">{description}</span>
                </span>
                <ArrowUpRight className="link-card__arrow" size={18} />
              </a>
            </li>
          ))}
        </ul>

        <Link
          to={localizePath("/", lang)}
          className="btn btn--ghost link-hub__portfolio"
        >
          {ui.links.viewPortfolio}
          <ArrowUpRight size={14} />
        </Link>
      </section>
    </div>
  );
};
