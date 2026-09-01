import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { getUi } from "../../api/ui";
import { localizePath, switchLangPath, useLang } from "../../lib/i18n";
import { useTheme } from "../../lib/useTheme";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();
  const lang = useLang();
  const ui = getUi(lang);

  const navItems = [
    { to: "/", label: ui.nav.home },
    { to: "/about", label: ui.nav.about },
    { to: "/portfolio", label: ui.nav.projects },
    { to: "/links", label: ui.nav.links },
    { to: "/contact", label: ui.nav.contact },
  ];

  const isActive = (path: string) =>
    location.pathname === localizePath(path, lang);

  const otherLang = lang === "en" ? "zh" : "en";
  const langHref = switchLangPath(location.pathname, otherLang);

  return (
    <nav>
      <Link to={localizePath("/", lang)} className="nav__logo">
        M✦<span className="nav__logo-name">Mingshen</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="nav__desktop">
        {navItems.map(({ to, label }) => (
          <Link
            key={to}
            to={localizePath(to, lang)}
            className={`nav__item ${isActive(to) ? "nav__item--active" : ""}`}
          >
            {isActive(to) && (
              <span className="nav__indicator hidden md:block" />
            )}
            <span className="relative lg:flex">{label}</span>
          </Link>
        ))}
      </div>
      <div className="hidden md:flex items-center">
        <Link to={langHref} className="nav__lang" aria-label={ui.langSwitch.aria}>
          {ui.langSwitch.label}
        </Link>
        <button
          onClick={toggle}
          className="nav__theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>

      {/* Mobile Navigation */}

      <div className="nav__mobile">
        <Link to={langHref} className="nav__lang" aria-label={ui.langSwitch.aria}>
          {ui.langSwitch.label}
        </Link>
        <button
          onClick={toggle}
          className="nav__theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        {!open && (
          <button onClick={() => setOpen(true)} className="nav__toggle">
            <Menu size={28} />
          </button>
        )}

        <div
          className={`nav__drawer ${open ? "translate-y-0" : "-translate-y-full"}`}
        >
          <button onClick={() => setOpen(false)} className="nav__close">
            <X size={24} />
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
      </div>
    </nav>
  );
};
