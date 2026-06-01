import {
  House,
  CircleStar,
  FolderOpenDot,
  Contact,
  Film,
  Menu,
  X,
  Sun,
  Moon,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Footer } from "./Footer";
import { useTheme } from "../../lib/ThemeContext";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { theme, toggle } = useTheme();

  const navItems = [
    { to: "/", label: "Home", icon: House },
    { to: "/about", label: "About", icon: CircleStar },
    { to: "/portfolio", label: "Projects", icon: FolderOpenDot },
    { to: "/media", label: "Media", icon: Film },
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
        {navItems.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className={`nav__item ${isActive(to) ? "nav__item--active" : ""}`}
          >
            {isActive(to) && (
              <span className="nav__indicator hidden lg:block" />
            )}
            {Icon && (
              <Icon
                className={`hidden md:flex lg:hidden h-6 w-6 ${
                  isActive(to) ? "nav__item--active" : ""
                }`}
              />
            )}
            <span className="md:hidden lg:flex">{label}</span>
            <span className="hidden md:hover:flex lg:hidden text-xs">
              {label}
            </span>
          </Link>
        ))}

        <button
          onClick={toggle}
          className="nav__theme-toggle"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      <Footer />

      {/* Mobile Navigation */}
      <div className="nav__mobile">
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

          <button
            onClick={toggle}
            className="nav__theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
