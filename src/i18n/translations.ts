const de = {
  "meta.title": "Tristan Teufel – Software Craftsman",
  "meta.description":
    "Tristan Teufel – selbständiger Software Craftsman mit über 10 Jahren Erfahrung. Sauberer Code, verlässliche Tests und Werkzeuge, die Teams schneller machen.",

  "hero.role": "Software Craftsman",
  "hero.tagline":
    "Sauberer Code, durchdachte Architektur und Werkzeuge, die Teams schneller machen.",
  "links.cv": "Lebenslauf",
  "links.email": "E-Mail",

  // About
  "about.title": "Über mich",
  "about.photoAlt": "Porträt von Tristan Teufel",
  "about.p1":
    "Ich bin Tristan, selbständiger Software Craftsman mit über 10 Jahren Erfahrung. Gute Software ist für mich Handwerk: lesbarer Code, schnelle Feedback-Schleifen und Werkzeuge, die Entwicklern die Arbeit leichter machen.",
  "about.p2":
    "Schauen Sie sich gern meine Projekte auf {{github}} an.",
  "about.p3": "Eine Übersicht meiner bisherigen Projekte finden Sie in meinem {{cv}}.",


  // Services
  "services.title": "Wobei ich Sie unterstütze",
  "services.subtitle": "Vier Schwerpunkte, in denen ich Teams am meisten weiterbringe.",
  "services.dx.title": "Developer Experience & Tooling",
  "services.dx.desc":
    "Schnelle Builds, klare Monorepo-Strukturen mit Nx und passgenaue Editor- und CLI-Tools: Ich entferne Reibung aus dem Entwickleralltag.",
  "services.testing.title": "Test-Infrastruktur & Strategie",
  "services.testing.desc":
    "Ich baue Test-Suiten mit Vitest, Playwright und Jest auf, die stabil laufen, schnell Feedback geben und Releases planbar machen.",
  "services.modernization.title": "Modernisierung & Clean Code",
  "services.modernization.desc":
    "Schrittweise Refactorings statt Big Bang: Ich überführe Legacy-Code in eine wartbare Architektur nach SOLID & KISS – abgesichert durch Tests.",
  "services.ai.title": "AI-Augmented Engineering",
  "services.ai.desc":
    "Ich binde agentenbasierte Workflows wie Claude Code sinnvoll in Ihren Entwicklungsprozess ein – mit klaren Leitplanken, Reviews und Tests.",

  // CTA
  "cta.title": "Bereit für das nächste Level an Code-Qualität?",
  "cta.subtitle":
    "Lassen Sie uns besprechen, wie wir technische Schulden abbauen und Ihr Team schneller machen.",
  "cta.button": "Projekt anfragen",

  // Footer & legal
  "footer.imprint": "Impressum",
  "footer.privacy": "Datenschutz",
  "footer.switchLanguage": "English",
  "legal.back": "Zur Startseite",
  "imprint.title": "Impressum",
  "privacy.title": "Datenschutzerklärung",
};

type Translations = Record<keyof typeof de, string>;

const en: Translations = {
  "meta.title": "Tristan Teufel – Software Craftsman",
  "meta.description":
    "Tristan Teufel – freelance software craftsman with more than 10 years of experience. Clean code, reliable tests and tools that make teams faster.",

  "hero.role": "Software Craftsman",
  "hero.tagline":
    "Clean code, thoughtful architecture and tools that make teams faster.",
  "links.cv": "CV",
  "links.email": "Email",

  // About
  "about.title": "About me",
  "about.photoAlt": "Portrait of Tristan Teufel",
  "about.p1":
    "I'm Tristan, a freelance software craftsman with more than 10 years of experience. To me, good software is a craft: readable code, fast feedback loops and tools that make developers' lives easier.",
  "about.p2":
    "Feel free to take a look at my projects on {{github}}.",
  "about.p3": "You can find an overview of my previous projects in my {{cv}}.",


  // Services
  "services.title": "How I can help you",
  "services.subtitle": "Four areas where I add the most value to teams.",
  "services.dx.title": "Developer Experience & Tooling",
  "services.dx.desc":
    "Fast builds, clear monorepo structures with Nx and tailored editor and CLI tools: I remove friction from your developers' day-to-day work.",
  "services.testing.title": "Test Infrastructure & Strategy",
  "services.testing.desc":
    "I build test suites with Vitest, Playwright and Jest that run reliably, give fast feedback and make releases predictable.",
  "services.modernization.title": "Modernization & Clean Code",
  "services.modernization.desc":
    "Incremental refactoring instead of a big bang: I move legacy code to a maintainable architecture following SOLID & KISS – backed by tests.",
  "services.ai.title": "AI-Augmented Engineering",
  "services.ai.desc":
    "I integrate agent-based workflows such as Claude Code into your development process – with clear guardrails, reviews and tests.",

  // CTA
  "cta.title": "Ready for the next level of code quality?",
  "cta.subtitle":
    "Let's talk about how we can pay down technical debt and make your team faster.",
  "cta.button": "Request a project",

  // Footer & legal
  "footer.imprint": "Legal notice",
  "footer.privacy": "Privacy policy",
  "footer.switchLanguage": "Deutsch",
  "legal.back": "Back to home",
  "imprint.title": "Legal notice",
  "privacy.title": "Privacy policy",
};

export const ui = { de, en } as const;
export type TranslationKey = keyof typeof de;
