import {
  House,
  CircleStar,
  FolderOpenDot,
  Contact,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { useTheme } from "../../lib/ThemeContext";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  const navItems = [
    { to: "/", label: "Home", icon: House },
    { to: "/about", label: "About", icon: CircleStar },
    { to: "/portfolio", label: "Projects", icon: FolderOpenDot },
    // { to: "/media", label: "Media", icon: Film },
    { to: "/contact", label: "Contact", icon: Contact },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav>
      <Link to="/" className="nav__logo">
        M✦
      </Link>

      {/* Desktop Navigation */}
      <div className="nav__desktop">
        {navItems.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`nav__item ${isActive(to) ? "nav__item--active" : ""}`}
          >
            {isActive(to) && (
              <span className="nav__indicator hidden md:block" />
            )}
            {/* {Icon && (
              <Icon
                className={`hidden md:flex h-4 w-4 mr-0.5 ${
                  isActive(to) ? "nav__item--active" : ""
                }`}
              />
            )} */}
            <span className="lg:flex">{label}</span>
          </Link>
        ))}
      </div>
      <button
        onClick={toggle}
        className="nav__theme-toggle hidden md:flex"
        aria-label="Toggle theme"
      >
        {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
      </button>

      {/* Mobile Navigation */}

      <div className="nav__mobile">
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
              to={to}
              onClick={() => setOpen(false)}
              className={`nav__item ${isActive(to) ? "nav__item--active" : ""}`}
            >
              {label}
              {isActive(to) && <span className="nav__indicator" />}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};
