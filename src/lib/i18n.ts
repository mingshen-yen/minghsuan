import { createContext, useContext } from "react";

export const LANGS = ["en", "zh"] as const;

export type Lang = (typeof LANGS)[number];

/** English is served unprefixed, so it is also the fallback for unknown paths. */
export const DEFAULT_LANG: Lang = "en";

export const LangContext = createContext<Lang>(DEFAULT_LANG);

export const useLang = () => useContext(LangContext);

/** Prefixes an in-app path with the language segment. */
export function localizePath(path: string, lang: Lang) {
  if (lang === DEFAULT_LANG) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/** The path the visitor is on, expressed in `lang`, so toggling keeps the page. */
export function switchLangPath(pathname: string, lang: Lang) {
  const stripped = pathname.replace(/^\/zh(?=\/|$)/, "") || "/";
  return localizePath(stripped, lang);
}
