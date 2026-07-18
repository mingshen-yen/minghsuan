import { Link } from "react-router";
import { socialItems } from "../../lib/data";

export const SideBar = () => {
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
