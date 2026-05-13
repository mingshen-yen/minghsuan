import { House, Binoculars, Sparkles, Inbox, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const NavItems = [
    { to: "/", label: "Home", icon: House },
    { to: "/about", label: "About", icon: Binoculars },
    { to: "/portfolio", label: "Portfolio", icon: Sparkles },
    { to: "/contact", label: "Contact", icon: Inbox },
  ];
  return (
    <>
      <div className="container p-4">
        <nav className="flex justify-between items-center py-4 text-white">
          <div className="text-3xl font-black tracking-tighter">
            MINGHSUAN
            <span className="not-italic ml-1">✦</span>
          </div>
          {/* Desktop Nav */}
          <div className="hidden rounded-l-lg overflow-hidden lg:flex ">
            {NavItems.map(({ to, label, icon: Icon }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center p-4 transition cursor-pointer ${
                    active ? "text-amber-300" : "hover:text-slate-400"
                  }`}
                >
                  {Icon && <Icon className="h-4 w-4 mr-2" />}
                  <span>{label}</span>
                </Link>
              );
            })}
          </div>
          {/* Mobile Burger Icon */}
          {!open && (
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden relative z-130"
            >
              <Menu size={28} />
            </button>
          )}

          {/* Mobile Drawer */}
          <div
            className={`fixed top-0 right-0 z-130 h-full w-64 bg-slate-600 rounded-l-xl shadow-lg flex flex-col overflow-hidden lg:hidden transform transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}`}
          >
            {/* X Button inside drawer */}
            <button
              onClick={() => setOpen(false)}
              className="self-end m-4 p-2 rounded-full hover:bg-purple-dark"
            >
              <X size={24} />
            </button>
            {/* Nav Items */}
            {NavItems.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setOpen(false)}
                className="flex items-center px-8 py-4 hover:text-amber-300"
              >
                <Icon className="h-4 w-4 mr-2" />
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
};
