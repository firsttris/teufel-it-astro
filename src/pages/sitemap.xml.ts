import type { APIRoute } from "astro";
import { languages, localizedPath } from "../i18n/utils";

// Small hand-made sitemap; the site has only a few pages per language.
const paths = ["/", "/impressum/", "/datenschutz/"];

export const GET: APIRoute = ({ site }) => {
  const urls = paths.flatMap((path) =>
    languages.map((lang) => {
      const alternates = languages
        .map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${new URL(localizedPath(l, path), site).href}"/>`)
        .join("");
      return `<url><loc>${new URL(localizedPath(lang, path), site).href}</loc>${alternates}</url>`;
    }),
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls.join("")}</urlset>\n`;
  return new Response(body, { headers: { "Content-Type": "application/xml" } });
};
