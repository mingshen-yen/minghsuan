import { House } from "lucide-react";
import { Hero } from "../layout/Hero";
import { Link } from "react-router";

export const LandingPage = () => {
  const doItems = [
    { to: "/portfolio", label: "Data Science", icon: House },
    { to: "/portfolio", label: "Web Development", icon: House },
    { to: "/channel", label: "Content Creation", icon: House },
  ];

  return (
    <>
      <Hero />
      <div className="text-center py-20">
        <h2>What i do</h2>
        <div className="relative z-10 flex flex-wrap gap-20 justify-center py-15">
          {doItems.map(({ to, label, icon: Icon }) => {
            return (
              <Link
                key={to}
                to={to}
                className="flex justify-center items-center w-60 h-40 rounded-lg bg-[#1c2b4a] border border-white/[0.07] hover:shadow-[8px_8px_24px_rgba(93,232,176,0.25)] transition cursor-pointer duration-200 hover:border-b-[rgba(93,232,176,0.8)] hover:border-b-4 hover:bg-[rgba(93,232,176,0.48)]"
              >
                {Icon && <Icon className="h-4 w-4 mr-2" />}
                <span className="text-xl tracking-wide text-white">
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};
