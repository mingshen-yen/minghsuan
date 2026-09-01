import { Mail } from "lucide-react";
import { getLinks } from "../../api/links";
import { useLang } from "../../lib/i18n";
import { LinkIcon } from "./LinkIcon";

type SocialRowProps = {
  /** Icon keys to show, in this order. Omit for every destination. */
  only?: string[];
  /** Appends a mailto link, which the footer wants but the hero does not. */
  withEmail?: boolean;
};

export const SocialRow = ({ only, withEmail = false }: SocialRowProps) => {
  const { profile, social, links } = getLinks(useLang());
  const all = [...social, ...links];
  const items = only
    ? only.flatMap((key) => all.filter((item) => item.icon === key))
    : all;

  return (
    <ul className="social-row">
      {items.map(({ icon, label, url }) => (
        <li key={url}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-row__link"
            aria-label={label}
            title={label}
          >
            <LinkIcon name={icon} />
          </a>
        </li>
      ))}
      {withEmail && (
        <li>
          <a
            href={`mailto:${profile.email}`}
            className="social-row__link"
            aria-label="Email"
            title="Email"
          >
            <Mail aria-hidden="true" />
          </a>
        </li>
      )}
    </ul>
  );
};
