import { Mail } from "lucide-react";
import { Link } from "react-router";

export const SideBar = () => {
  const socialItems = [
    {
      to: "https://www.linkedin.com/in/ming-hsuan-yen/",
      label: "LinkedIn",
      icon: Mail,
    },
    { to: "https://github.com/mingshen-yen", label: "GitHub", icon: Mail },
    {
      to: "http://www.youtube.com/@mingshenworld",
      label: "YouTube",
      icon: Mail,
    },
  ];
  return (
    <>
      <div className="right_bar">
        <ul className="social_items">
          {socialItems.map(({ to, label, icon: Icon }) => {
            return (
              <Link key={to} to={to} target="_blank" rel="noopener noreferrer">
                {/* {Icon && <Icon className="h-4 w-4 mr-2" />} */}
                <li className="social_btn">{label}</li>
              </Link>
            );
          })}
        </ul>
      </div>
    </>
  );
};
