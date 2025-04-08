import type { JSX } from 'astro/jsx-runtime';
import { ui, defaultLang } from './translations';

export const getLangFromUrl = (pathname: string) => {
  const lang = pathname.includes('/de') ? 'de' : 'en';
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export const useTranslations = (pathname: string) => {
  const lang = getLangFromUrl(pathname);
  return (
    key: keyof typeof ui[typeof defaultLang],
    params?: Record<string, JSX.Element>
  ): (string | JSX.Element)[] | string => {
    const translation = ui[lang][key] || ui[defaultLang][key];

    if (!params) {
      return translation;
    }

    // Teile den String an den Platzhaltern, die mit {{ platsholder }} definiert sind.
    const parts = translation
      .split(/({{\s*\w+\s*}})/g)
      .filter(Boolean)
      .map(part => {
        const match = part.match(/{{\s*(\w+)\s*}}/);
        return match ? params[match[1]] : part;
      });

    return parts;
  }
}