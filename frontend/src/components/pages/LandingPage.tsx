import { Hero } from "../layout/Hero";
import { Mail } from "lucide-react";
import { Link } from "react-router";

export const LandingPage = () => {
  const socailItems = [
    {
      to: "https://www.linkedin.com/in/ming-hsuan-yen/",
      label: "LinkedIn",
      icon: Mail,
    },
    { to: "https://github.com/mingshen-yen", label: "GitHub", icon: Mail },
    { to: "www.youtube.com/@mingshenworld", label: "YouTube", icon: Mail },
  ];
  return (
    <div className="max-h-screen mx-auto">
      <div className="left_bar"></div>
      <div className="social_bar">
        <ul>
          {socailItems.map(({ to, label, icon: Icon }) => {
            return (
              <Link key={to} to={to} target="_blank" rel="noopener noreferrer">
                {/* {Icon && <Icon className="h-4 w-4 mr-2" />} */}
                <li className="social_btn">{label}</li>
              </Link>
            );
          })}
        </ul>
      </div>
      <Hero />
    </div>
  );
};
