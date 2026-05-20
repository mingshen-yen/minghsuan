import { House, Binoculars, Sparkles, Inbox, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const NavItems = [
    { to: "/", label: "Home", icon: House },
    { to: "/about", label: "About", icon: House },
    { to: "/portfolio", label: "Works", icon: Binoculars },
    { to: "/channel", label: "Media", icon: Sparkles },
    { to: "/contact", label: "Contact", icon: Inbox },
  ];
  return (
    <>
      <nav>
        <Link to={"/"} className="text-2xl font-black tracking-tighter">
          M<span className="not-italic ml-1">✦</span>
        </Link>
        {/* Desktop Nav */}
        <div className="hidden text-base md:flex md:flex-col md:gap-5 md:pt-20 items-center">
          {NavItems.map(({ to, label, icon: Icon }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                className={`flex items-center transition cursor-pointer whitespace-nowrap ${
                  active
                    ? "line-through decoration-7 decoration-[#5de8b0]/60 rotate-4"
                    : "hover:scale-110"
                }`}
              >
                {/* {Icon && <Icon className="h-4 w-4 mr-2" />} */}
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
          className={`fixed top-0 left-0 z-130 w-full max-h-1200 bg-[rgba(14,22,40)] shadow-lg flex flex-col justify-center items-center pb-10 overflow-hidden md:hidden transform transition-transform duration-300 ease-in-out
  ${open ? "translate-y-0" : "-translate-y-full"}`}
        >
          {/* X Button inside drawer */}
          <button
            onClick={() => setOpen(false)}
            className="self-end m-4 p-2 rounded-full hover:bg-[rgba(14,22,40,0.85)]"
          >
            <X size={24} />
          </button>
          {/* Nav Items */}
          {NavItems.map(({ to, label, icon: Icon }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className="flex items-center px-8 py-4 hover:text-[#5de8b0] hover:scale-105"
            >
              {/* <Icon className="h-4 w-4 mr-2" /> */}
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
};
