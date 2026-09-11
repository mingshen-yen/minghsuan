import en from "../content/en/news.json";
import zh from "../content/zh/news.json";
import type { Lang } from "../lib/i18n";
import type { NewsItem } from "../lib/type";

const byLang: Record<Lang, unknown> = { en, zh };

/** Newest first. Partial dates sort against their own precision, which is
 *  what you want: a "2025" item belongs above "2024-11", below "2026-01". */
export function getNews(lang: Lang): NewsItem[] {
  return [...(byLang[lang] as NewsItem[])].sort((a, b) =>
    b.date.localeCompare(a.date),
  );
}
