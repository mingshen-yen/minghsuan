type Props = {
  /** Optional eyebrow. The CV sections read fine without one. */
  label?: string;
  title: string;
};

/** Names a landing-page block, so a scroller knows what they are looking at. */
export const SectionHead = ({ label, title }: Props) => (
  <header className="section-head">
    {label && <span className="section-head__label">{label}</span>}
    <h2 className="section-head__title">{title}</h2>
  </header>
);
