import { ui, type TranslationKey } from "./translations";

export const languages = ["de", "en"] as const;
export type Lang = (typeof languages)[number];
export const defaultLang: Lang = "de";

export const getStaticLangPaths = () =>
  languages.map((lang) => ({ params: { lang } }));

export const otherLang = (lang: Lang): Lang => (lang === "de" ? "en" : "de");

export const localizedPath = (lang: Lang, path = "/") => `/${lang}${path}`;

export const useTranslations = (lang: Lang) => (key: TranslationKey) => ui[lang][key];
