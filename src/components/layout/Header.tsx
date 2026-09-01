import { Menu, X, Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { getUi } from "../../api/ui";
import { localizePath, switchLangPath, useLang } from "../../lib/i18n";
import { useTheme } from "../../lib/useTheme";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();
  const lang = useLang();
  const ui = getUi(lang);

  /* The bar is transparent at rest; the blur and rule only earn their place
     once content is actually passing underneath it. */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { to: "/", label: ui.nav.home },
    { to: "/about", label: ui.nav.about },
    { to: "/portfolio", label: ui.nav.projects },
    { to: "/links", label: ui.nav.links },
  ];

  /* A project detail page is still "Projects", so a nav entry matches its own
     path and anything under it. Home stays an exact match, or it would claim
     every page — and under /zh, every Chinese page. */
  const isActive = (path: string) => {
    const target = localizePath(path, lang);
    if (path === "/") return location.pathname === target;
    return (
      location.pathname === target || location.pathname.startsWith(`${target}/`)
    );
  };

  const otherLang = lang === "en" ? "zh" : "en";
  const langHref = switchLangPath(location.pathname, otherLang);

  const controls = (
    <>
      <Link
        to={langHref}
        className="nav__control nav__lang"
        aria-label={ui.langSwitch.aria}
      >
        {ui.langSwitch.label}
      </Link>
      <button
        onClick={toggle}
        className="nav__control"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun size={28} /> : <Moon size={28} />}
      </button>
    </>
  );

  return (
    <nav className={scrolled ? "nav--scrolled" : ""}>
      <div className="nav__inner">
        <Link to={localizePath("/", lang)} className="nav__logo">
          <span className="nav__logo-short">M</span>
          <span className="nav__logo-name">Mingshen</span>✦
        </Link>

        {/* Desktop Navigation */}
        <div className="nav__desktop">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={localizePath(to, lang)}
              className={`nav__item ${isActive(to) ? "nav__item--active" : ""}`}
            >
              {isActive(to) && <span className="nav__indicator" />}
              <span className="relative">{label}</span>
            </Link>
          ))}
        </div>

        <div className="nav__controls">{controls}</div>

        {/* Mobile Navigation */}
        {/* Always mounted: unmounting it while the drawer is open shrank the row
            to the height of the controls left behind, moving the wordmark. The
            drawer covers it instead. */}
        <div className="nav__mobile">
          <div className="nav__pair">{controls}</div>
          <button
            onClick={() => setOpen(true)}
            className="nav__control"
            aria-label="Open menu"
            aria-expanded={open}
          >
            <Menu size={32} />
          </button>
        </div>
      </div>

      <div
        className={`nav__drawer ${open ? "translate-y-0" : "-translate-y-full"}`}
      >
        <button
          onClick={() => setOpen(false)}
          className="nav__close"
          aria-label="Close menu"
        >
          <X size={30} />
        </button>

        {navItems.map(({ to, label }) => (
          <Link
            key={to}
            to={localizePath(to, lang)}
            onClick={() => setOpen(false)}
            className={`nav__item ${isActive(to) ? "nav__item--active" : ""}`}
          >
            {isActive(to) && <span className="nav__indicator" />}
            <span className="relative">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
};
