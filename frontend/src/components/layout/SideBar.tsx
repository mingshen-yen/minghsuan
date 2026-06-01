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
    <div className="social-bar">
      <ul className="social-list">
        {socialItems.map(({ to, label }) => (
          <Link key={to} to={to} target="_blank" rel="noopener noreferrer">
            <li className="social-link">{label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};
