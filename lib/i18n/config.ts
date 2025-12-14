export const locales = ["de", "en", "fr", "it"] as const;
export const mainLocales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];
export type MainLocale = (typeof mainLocales)[number];
export const defaultLocale: Locale = "de";

export function isValidMainLocale(locale: string): locale is MainLocale {
  return mainLocales.includes(locale as MainLocale);
}

export function isValidLocale(locale: string): locale is Locale {
  return locales.includes(locale as Locale);
}

export function getLocaleFromPath(pathname: string): Locale {
  const segment = pathname.split("/")[1];
  return isValidLocale(segment) ? segment : defaultLocale;
}
