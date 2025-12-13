import { de } from "./de";
import { en } from "./en";
import { fr } from "./fr";
import { it } from "./it";
import type { Locale } from "./config";
import type { Translations } from "./de";

const translations: Record<Locale, Translations> = {
  de,
  en,
  fr,
  it,
};

export function getTranslations(locale: Locale): Translations {
  return translations[locale] || translations.de;
}

export { de, en, fr, it };
export type { Translations };
