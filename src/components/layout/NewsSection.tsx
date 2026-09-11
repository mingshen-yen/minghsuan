import { ArrowUpRight } from "lucide-react";
import { getNews } from "../../api/news";
import { getUi } from "../../api/ui";
import { useLang, type Lang } from "../../lib/i18n";
import { SectionHead } from "./SectionHead";

/** Renders `YYYY`, `YYYY-MM` or `YYYY-MM-DD` at the precision it was written.
 *  Noon UTC keeps a date-only string from slipping a day in either direction. */
function formatDate(date: string, lang: Lang) {
  const locale = lang === "zh" ? "zh-TW" : "en-GB";
  const parts = date.split("-");
  if (parts.length === 1) return date;

  const value = new Date(`${date}${parts.length === 2 ? "-01" : ""}T12:00:00Z`);
  if (Number.isNaN(value.getTime())) return date;

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "short",
    ...(parts.length === 3 && { day: "numeric" }),
    timeZone: "UTC",
  }).format(value);
}

export const NewsSection = () => {
  const lang = useLang();
  const ui = getUi(lang);
  const items = getNews(lang);

  if (items.length === 0) return null;

  return (
    <section className="section-block">
      <SectionHead label={ui.sections.newsLabel} title={ui.sections.newsTitle} />
      <ol className="news">
        {items.map((item) => (
          <li key={`${item.date}-${item.title}`} className="news__item">
            <time className="news__date" dateTime={item.date}>
              {formatDate(item.date, lang)}
            </time>
            <div className="news__body">
              <span className="news__tag">{item.tag}</span>
              <h3 className="news__title">{item.title}</h3>
              <p className="news__blurb">{item.description}</p>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="news__link"
                >
                  {item.linkLabel}
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
};
