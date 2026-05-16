import { House, Binoculars, Sparkles, Inbox, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const NavItems = [
    { to: "/", label: "Home", icon: House },
    { to: "/portfolio", label: "Projects", icon: Binoculars },
    { to: "/channel", label: "Channels", icon: Sparkles },
    { to: "/contact", label: "Contact", icon: Inbox },
  ];
  return (
    <div className="bg-slate-900">
      <div className="">
        <nav className="flex justify-between items-center py-4 text-white">
          <Link to={"/"} className="text-2xl font-black tracking-tighter">
            MINGHSUAN
            <span className="not-italic ml-1">✦</span>
          </Link>
          {/* Desktop Nav */}
          <div className="hidden text-base md:flex">
            {NavItems.map(({ to, label, icon: Icon }) => {
              const active = location.pathname === to;
              return (
                <Link
                  key={to}
                  to={to}
                  className={`flex items-center px-4 transition cursor-pointer ${
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
              className="md:hidden relative z-130"
            >
              <Menu size={28} />
            </button>
          )}

          {/* Mobile Drawer */}
          <div
            className={`fixed top-0 left-0 z-130 w-full max-h-1200 bg-slate-600 shadow-lg flex flex-col justify-center items-center pb-10 overflow-hidden md:hidden transform transition-transform duration-300 ease-in-out
  ${open ? "translate-y-0" : "-translate-y-full"}`}
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
    </div>
  );
};
