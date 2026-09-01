import { Navigate } from "react-router";
import { localizePath, useLang } from "../../lib/i18n";

/** /contact predates the merge into /about; keep old links working. */
export const ContactRedirect = () => {
  const lang = useLang();
  return <Navigate to={`${localizePath("/about", lang)}#contact`} replace />;
};
