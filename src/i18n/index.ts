import type { Dictionary, Locale } from "./types";
import en from "./en";
import es from "./es";

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}

export { locales, defaultLocale } from "./types";
export type { Locale, Dictionary } from "./types";
