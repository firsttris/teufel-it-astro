import { ui, type TranslationKey } from "./translations";

export const languages = ["de", "en"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "de";

export const getStaticLangPaths = () =>
  languages.map((lang) => ({ params: { lang } }));

export const otherLang = (lang: Lang): Lang => (lang === "de" ? "en" : "de");

export const localizedPath = (lang: Lang, path = "/") => `/${lang}${path}`;

export const useTranslations = (lang: Lang) => {
  const t = (key: TranslationKey) => ui[lang][key];

  // Splits a translation at its {{placeholder}} markers and swaps in the given nodes.
  t.rich = <T>(key: TranslationKey, params: Record<string, T>) =>
    ui[lang][key]
      .split(/({{\s*\w+\s*}})/g)
      .filter(Boolean)
      .map((part) => {
        const match = part.match(/^{{\s*(\w+)\s*}}$/);
        return match ? params[match[1]] : part;
      });

  return t;
};
