# teufel-it-astro

![GitHub Repo stars](https://img.shields.io/github/stars/firsttris/teufel-it-astro?style=flat-square)
![GitHub last commit](https://img.shields.io/github/last-commit/firsttris/teufel-it-astro?style=flat-square)
![GitHub contributors](https://img.shields.io/github/contributors/firsttris/teufel-it-astro?style=flat-square)
![Astro Version](https://img.shields.io/badge/astro-7-blueviolet?style=flat-square)
![TailwindCSS Version](https://img.shields.io/badge/tailwindcss-4-06b6d4?style=flat-square)

> **Persönliche, zweisprachige Website von Tristan Teufel – gebaut mit [Astro](https://astro.build/), Tailwind CSS und three.js.**

## ✨ Features

- 🌍 Deutsch & Englisch (`/de/`, `/en/`), Startseite leitet anhand der Browsersprache weiter
- 🚀 Statische Seite, nahezu ohne JavaScript
- 🌌 Sternenfeld-Hintergrund mit three.js: gelegentlich vorbeiziehender Planet, seltene Sternschnuppen, Scroll-Warp, Maus-Parallax, `prefers-reduced-motion`
- 🎨 Styling mit Tailwind CSS 4
- ⚖️ Impressum & Datenschutzerklärung

## 📦 Tech Stack

- [Astro](https://astro.build/) 7 (Node.js ≥ 22.12)
- [Tailwind CSS](https://tailwindcss.com/) 4
- [three.js](https://threejs.org/)
- [astro-icon](https://github.com/natemoo-re/astro-icon)

## 📁 Projektstruktur

```
├── public/              # Statische Dateien (Favicon, OG-Bild, CNAME)
├── src/
│   ├── assets/          # Bilder, die von astro:assets optimiert werden
│   ├── components/
│   ├── data/            # Impressumsangaben
│   ├── i18n/            # Übersetzungen & Helfer
│   ├── layouts/
│   └── pages/
│       ├── index.astro  # Sprach-Weiterleitung
│       └── [lang]/      # Startseite, Impressum, Datenschutz je Sprache
├── astro.config.mjs
└── package.json
```

## 🚀 Schnellstart

```bash
git clone git@github.com:firsttris/teufel-it-astro.git
cd teufel-it-astro
npm install
npm run dev
```

Die Seite ist dann unter [localhost:4321](http://localhost:4321) erreichbar.

## 🧑‍💻 Entwicklung

| Befehl             | Beschreibung                                 |
|--------------------|----------------------------------------------|
| `npm install`      | Installiert Abhängigkeiten                   |
| `npm run dev`      | Startet lokalen Dev-Server                   |
| `npm run build`    | Produktion-Build im `dist/`-Ordner           |
| `npm run preview`  | Vorschau des Builds                          |

## 👥 Mitwirkende

- [firsttris](https://github.com/firsttris)
- [weitere Contributor](https://github.com/firsttris/teufel-it-astro/graphs/contributors)

## 📄 Lizenz

MIT

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
