import en from "../content/en/ui.json";
import zh from "../content/zh/ui.json";
import type { Lang } from "../lib/i18n";
import type { UiStrings } from "../lib/type";

const byLang: Record<Lang, unknown> = { en, zh };

export function getUi(lang: Lang): UiStrings {
  return byLang[lang] as UiStrings;
}
