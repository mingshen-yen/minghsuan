import en from "../content/en/about.json";
import zh from "../content/zh/about.json";
import type { Lang } from "../lib/i18n";
import type { AboutData } from "../lib/type";

const byLang: Record<Lang, unknown> = { en, zh };

export function getAbout(lang: Lang): AboutData {
  return byLang[lang] as AboutData;
}
