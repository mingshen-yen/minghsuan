import en from "../content/en/media.json";
import zh from "../content/zh/media.json";
import type { Lang } from "../lib/i18n";
import type { MediaItem } from "../lib/type";

const byLang: Record<Lang, unknown> = { en, zh };

export function getMedia(lang: Lang): MediaItem[] {
  return byLang[lang] as MediaItem[];
}
