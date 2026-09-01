import { ArrowUpRight } from "lucide-react";
import { getMedia } from "../../api/media";
import { getUi } from "../../api/ui";
import { useLang } from "../../lib/i18n";
import { LinkIcon } from "../layout/LinkIcon";
import { SectionHead } from "../layout/SectionHead";

export const MediaPage = () => {
  const lang = useLang();
  const ui = getUi(lang);
  const items = getMedia(lang);

  return (
    <section className="section-block">
      <SectionHead
        label={ui.sections.mediaLabel}
        title={ui.sections.mediaTitle}
      />
      <div className="section section--flush flex flex-col items-center gap-14 lg:grid lg:grid-cols-2 lg:gap-12">
        {items.map((item) => (
          <article key={item.url} className="media-card">
            {item.image ? (
              <img
                className={`media-card__image ${
                  item.imagePosition === "top" ? "object-top" : "object-center"
                }`}
                src={item.image}
                alt={item.title}
                loading="lazy"
              />
            ) : (
              item.icon && (
                <span className="media-card__brand" aria-hidden="true">
                  <LinkIcon name={item.icon} />
                </span>
              )
            )}
            <div className="media-card__body">
              <span className={`media-card__tag media-card__tag--${item.tone}`}>
                {item.tag}
              </span>
              <h3 className="media-card__title">{item.title}</h3>
              <p className="media-card__blurb">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="media-card__link"
              >
                {item.linkLabel}
                <ArrowUpRight size={14} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
