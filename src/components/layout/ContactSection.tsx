import { Mail } from "lucide-react";
import { getLinks } from "../../api/links";
import { getUi } from "../../api/ui";
import { useLang } from "../../lib/i18n";
import { LinkIcon } from "./LinkIcon";

export const ContactSection = () => {
  const lang = useLang();
  const ui = getUi(lang);
  const { profile, social } = getLinks(lang);
  const linkedin = social.find((item) => item.icon === "linkedin");

  return (
    <section id="contact" className="contact">
      <h2 className="contact__title">{ui.contact.title}</h2>
      <p className="contact__intro">{ui.contact.intro}</p>

      <ul className="contact__list">
        <li>
          <a href={`mailto:${profile.email}`} className="link-card">
            <span className="link-card__icon">
              <Mail aria-hidden="true" />
            </span>
            <span className="link-card__text">
              <span className="link-card__label">{ui.contact.emailLabel}</span>
              <span className="link-card__description">{profile.email}</span>
            </span>
          </a>
        </li>
        {linkedin && (
          <li>
            <a
              href={linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <span className="link-card__icon">
                <LinkIcon name="linkedin" />
              </span>
              <span className="link-card__text">
                <span className="link-card__label">
                  {ui.contact.linkedinLabel}
                </span>
                <span className="link-card__description">
                  {linkedin.url.replace(/^https:\/\/(www\.)?/, "")}
                </span>
              </span>
            </a>
          </li>
        )}
      </ul>

      <p className="contact__note">{ui.contact.note}</p>
    </section>
  );
};
