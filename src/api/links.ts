import en from "../content/en/links.json";
import zh from "../content/zh/links.json";
import type { Lang } from "../lib/i18n";
import type { LinksData } from "../lib/type";

const byLang: Record<Lang, unknown> = { en, zh };

export function getLinks(lang: Lang): LinksData {
  return byLang[lang] as LinksData;
}
