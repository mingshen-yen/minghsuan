export const Hero = () => {
  const experItems = ["Python", "React", "TypeScript", "Node.js", "MongoDB"];

  return (
    <>
      <section className="hero">
        <div id="hero-text">
          <div className="hero-eyebrow">
            Data Scientist & Web Developer & Content Creator
          </div>
          <h1>
            I do research
            <br />
            and make
            <br />
            <em>content</em> about it.
          </h1>
          <p className="hero-bio">
            PhD in Geophysics. 8+ years building reproducible analytical
            workflows and translating complex datasets into actionable insights
            — bridging scientific rigour with business impact.
          </p>

          <div className="skills-label">Experience with</div>
          <div className="skill-tags">
            {experItems.map((item) => {
              return <span className="skill-tag">{item}</span>;
            })}
          </div>

          <div className="hero-cta">
            <a href="mailto:minghsuanyen@gmail.com" className="btn-primary">
              Contact Me
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a
              href="https://github.com/mingshen-yen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>
              My GitHub
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-frame">
            <div className="avatar-ring" />
            <div className="avatar-inner">
              <img src="/src/assets/profile-1.jpg" alt="Minghsuan avatar" />
            </div>
            <div className="stat-card">
              <div className="stat-num">8+</div>
              <div className="stat-label">Years exp.</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">PhD</div>
              <div className="stat-label">Geophysics</div>
            </div>
          </div>
        </div>
      </section>
      <div className="stats-strip">
        <div className="stats-inner">
          <div className="stat-item">
            <div className="num">
              8<span>+</span>
            </div>
            <div className="lbl">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="num">PhD</div>
            <div className="lbl">Geophysics</div>
          </div>
          <div className="stat-item">
            <div className="num">{experItems.length}</div>
            <div className="lbl">Core Technologies</div>
          </div>
          <div className="stat-item">
            <div className="num">∞</div>
            <div className="lbl">Curiosity</div>
          </div>
        </div>
      </div>
    </>
  );
};
