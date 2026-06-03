export const Hero = () => {
  const skills = ["Python", "React", "TypeScript", "Node.js", "MongoDB"];

  return (
    <section className="section">
      <div id="hero-text">
        <div className="hero__label">Data Scientist & Web Developer</div>
        <h1>
          I do <em>research</em>
          <br />
          and make
          <br />
          <em>content</em> about it.
        </h1>
        <div>
          <div className="skill-label">Experience with</div>
          <div className="skill-list">
            {skills.map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="hero__cta">
          <a href="mailto:minghsuanyen@gmail.com" className="btn btn--primary">
            Contact Me
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
          <a
            href="https://github.com/mingshen-yen"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
            My GitHub
          </a>
        </div>
      </div>

      <div className="avatar">
        <div className="avatar__frame">
          <div className="avatar__ring" />
          <div className="avatar__inner">
            <img src={"/example.jpg"} alt="Minghsuan avatar" />
          </div>
          <div className="stat-card">
            <div className="stat-card__number">8+</div>
            <div className="stat-card__label">Years exp.</div>
          </div>
          <div className="stat-card">
            <div className="stat-card__number">PhD</div>
            <div className="stat-card__label">Geophysics</div>
          </div>
        </div>
      </div>
    </section>
  );
};
