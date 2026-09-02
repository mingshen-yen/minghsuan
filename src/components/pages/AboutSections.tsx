import { CalendarDays, MapPin } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type {
  Certificate,
  EducationItem,
  ExperienceItem,
  Publication,
  SkillCategory,
} from "../../lib/type";

/** Emphasis inside a sentence; the paragraph wrapper is unwrapped so the
 *  result stays inline in the element that holds it. */
const Inline = ({ children }: { children: string }) => (
  <ReactMarkdown components={{ p: ({ children }) => <>{children}</> }}>
    {children}
  </ReactMarkdown>
);

const Meta = ({ period, location }: { period: string; location: string }) => (
  <div className="cv-item__meta">
    <span>
      <CalendarDays size={13} aria-hidden="true" />
      {period}
    </span>
    <span>
      <MapPin size={13} aria-hidden="true" />
      {location}
    </span>
  </div>
);

export const ExperienceList = ({ items }: { items: ExperienceItem[] }) => (
  <div className="cv-list">
    {items.map(({ title, company, location, period, descriptions }) => (
      <article key={`${company}-${period}`} className="cv-item">
        <h3 className="cv-item__role">{title}</h3>
        <p className="cv-item__org">{company}</p>
        <Meta period={period} location={location} />
        <ul className="cv-item__points">
          {descriptions.map((d) => (
            <li key={d}>
              <Inline>{d}</Inline>
            </li>
          ))}
        </ul>
      </article>
    ))}
  </div>
);

export const EducationList = ({ items }: { items: EducationItem[] }) => (
  <div className="cv-list">
    {items.map(({ degree, uni, location, period, description }) => (
      <article key={`${degree}-${period}`} className="cv-item">
        <h3 className="cv-item__role">{degree}</h3>
        <p className="cv-item__org">{uni}</p>
        <Meta period={period} location={location} />
        {description && (
          <p className="cv-item__note">
            <Inline>{description}</Inline>
          </p>
        )}
      </article>
    ))}
  </div>
);

export const SkillsGrid = ({ items }: { items: SkillCategory[] }) => (
  <div className="skills-grid">
    {items.map(({ category, items: entries }) => (
      <div key={category}>
        <h3 className="skills-group__name">{category}</h3>
        <ul className="skills-list">
          {entries.map((entry) => (
            <li key={entry} className="about__skill">
              {entry}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export const PublicationList = ({ items }: { items: Publication[] }) => (
  <div className="cv-list">
    {items.map(({ title, venue, year, url }) => (
      <article key={url} className="cv-item">
        <h3 className="cv-item__role">
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h3>
        <p className="cv-item__org">
          {venue} · {year}
        </p>
      </article>
    ))}
  </div>
);

export const CertificateList = ({ items }: { items: Certificate[] }) => (
  <ul className="cert-list">
    {items.map(({ name, year }) => (
      <li key={name} className="cert-item">
        <span>{name}</span>
        <span className="cert-item__year">{year}</span>
      </li>
    ))}
  </ul>
);
