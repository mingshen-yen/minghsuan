import { footerItems } from "../../lib/data";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer>
      <ul className="flex flex-row justify-center gap-5 p-5">
        {footerItems.map(({ to, label }) => (
          <Link key={to} to={to} target="_blank" rel="noopener noreferrer">
            <li className="underline">{label}</li>
          </Link>
        ))}
      </ul>
      <div>© 2026 MINGSHEN. All rights reserved.</div>
    </footer>
  );
};
