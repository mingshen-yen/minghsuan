import { useEffect } from "react";
import { Outlet } from "react-router";
import { LangContext, type Lang } from "../../lib/i18n";
import { Header } from "./Header";

export const AppLayout = ({ lang }: { lang: Lang }) => {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <LangContext.Provider value={lang}>
      <Header />
      <main className="max-h-screen mx-auto">
        <Outlet />
      </main>
    </LangContext.Provider>
  );
};
