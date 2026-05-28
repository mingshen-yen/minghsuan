import {
  House,
  CircleStar,
  FolderOpenDot,
  Contact,
  Film,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Footer } from "./Footer";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const NavItems = [
    { to: "/", label: "Home", icon: House },
    { to: "/about", label: "About", icon: CircleStar },
    { to: "/portfolio", label: "Projects", icon: FolderOpenDot },
    { to: "/media", label: "Media", icon: Film },
    { to: "/contact", label: "Contact", icon: Contact },
  ];
  return (
    <>
      <nav>
        <Link to={"/"} className="logo">
          M✦
        </Link>
        {/* Desktop Nav */}
        <div className="desk_nav">
          {NavItems.map(({ to, label, icon: Icon }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`nav_item ${
                  active ? "scale-110 rotate-4" : "hover:scale-110"
                }`}
              >
                {active && (
                  <span className="absolute left-0 top-1/2 h-2.5 w-full -translate-y-1/2 bg-[#5de8b0]/60" />
                )}
                {Icon && (
                  <Icon
                    className={`hidden md:flex lg:hidden h-6 w-6 ${active ? "text-[#5de8b0]" : ""}`}
                  />
                )}
                <span className="md:hidden lg:flex">{label}</span>
                <span className="hidden md:hover:flex lg:hidden text-xs">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
        <Footer />

        {/* Mobile Nav - Burger Icon */}
        <div className="md_nav">
          {!open && (
            <button onClick={() => setOpen(true)} className="burger">
              <Menu size={28} />
            </button>
          )}

          {/* Mobile Drawer */}
          <div
            className={`md_drawer ${open ? "translate-y-0" : "-translate-y-full"}`}
          >
            {/* X Button inside drawer */}
            <button onClick={() => setOpen(false)} className="xbtn">
              <X size={24} />
            </button>

            {/* Nav Items */}
            {NavItems.map(({ to, label }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className={`nav_item ${
                    active ? "scale-110 rotate-4" : "hover:scale-110"
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute left-0 top-1/2 h-2.5 w-full -translate-y-1/2 bg-[#5de8b0]/60" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};
