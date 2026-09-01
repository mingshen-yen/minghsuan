import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { LangContext, type Lang } from "../../lib/i18n";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const AppLayout = ({ lang }: { lang: Lang }) => {
  const { hash } = useLocation();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  /* React Router does not scroll to #anchors on its own, so /about#contact
     would otherwise land at the top of the page. */
  useEffect(() => {
    if (!hash) return;
    document
      .querySelector(hash)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [hash]);

  return (
    <LangContext.Provider value={lang}>
      {/* A column, so the footer is pushed to the bottom on short pages and
          follows the content on long ones. `max-h-screen` here used to cap
          main at 100vh while its content overflowed, which left the footer
          sitting on top of that overflow. */}
      <div className="relative z-(--z-base) flex min-h-screen flex-col">
        <Header />
        <main className="grow w-full mx-auto pb-20 md:pb-28">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LangContext.Provider>
  );
};
