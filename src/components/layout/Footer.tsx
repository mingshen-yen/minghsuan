import { getUi } from "../../api/ui";
import { useLang } from "../../lib/i18n";
import { SocialRow } from "./SocialRow";

export const Footer = () => {
  const ui = getUi(useLang());

  return (
    <footer>
      <SocialRow withEmail />
      <div className="pt-4">{ui.footer.rights}</div>
    </footer>
  );
};
