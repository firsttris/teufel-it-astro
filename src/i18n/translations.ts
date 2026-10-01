const de = {
  "meta.title": "Tristan Teufel – Software Craftsman",
  "meta.description":
    "Tristan Teufel – selbständiger Software Craftsman für Developer Experience, Test-Infrastruktur und Clean Code. Entwickler von vscode-jest-runner mit über 2 Mio. Installationen.",

  "hero.role": "Software Craftsman",
  "hero.tagline":
    "Developer Experience, Test-Tooling und sauberer Code – damit Ihr Team schneller und sicherer liefert.",
  "links.cv": "Lebenslauf",
  "links.email": "E-Mail",

  // About
  "about.title": "Über mich",
  "about.photoAlt": "Porträt von Tristan Teufel",
  "about.p1":
    "Ich bin Tristan, selbständiger Software Craftsman aus Bühl in Baden. Seit über 10 Jahren entwickle ich Webanwendungen und Developer-Tooling – mit Schwerpunkt auf TypeScript, React, Node.js und automatisierten Tests.",
  "about.p2":
    "Gute Software ist für mich Handwerk: lesbarer Code, schnelle Feedback-Schleifen und Werkzeuge, die Entwicklern die Arbeit leichter machen. Genau daraus ist mein Open-Source-Projekt {{jestRunner}} entstanden.",
  "about.p3": "Eine Übersicht meiner bisherigen Projekte finden Sie in meinem {{cv}}.",

  // Impact
  "impact.title": "Open Source, das Standards setzt",
  "impact.installs.label": "Installationen im VS Code Marketplace",
  "impact.installs.desc":
    "Ich habe {{vscodeJestRunner}} entwickelt – eine VS-Code-Extension zum Ausführen und Debuggen von Jest-, Vitest-, Node-, Deno-, Bun- und Playwright-Tests direkt im Editor. Tausende Entwickler nutzen sie täglich.",
  "impact.nx.value": "Nx-Empfehlung",
  "impact.nx.label": "Seit 2020",
  "impact.nx.desc":
    "{{nx}} empfiehlt die Extension seit 2020 für Nx-Monorepos. Sie kann mehrere Test-Runner parallel in einem Projekt verwenden.",

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
    "Tristan Teufel – freelance software craftsman for developer experience, test infrastructure and clean code. Author of vscode-jest-runner with more than 2 million installs.",

  "hero.role": "Software Craftsman",
  "hero.tagline":
    "Developer experience, test tooling and clean code – so your team ships faster and with confidence.",
  "links.cv": "CV",
  "links.email": "Email",

  // About
  "about.title": "About me",
  "about.photoAlt": "Portrait of Tristan Teufel",
  "about.p1":
    "I'm Tristan, a freelance software craftsman based in Bühl, Germany. For more than 10 years I have been building web applications and developer tooling – with a focus on TypeScript, React, Node.js and automated testing.",
  "about.p2":
    "To me, good software is a craft: readable code, fast feedback loops and tools that make developers' lives easier. That's exactly how my open source project {{jestRunner}} came about.",
  "about.p3": "You can find an overview of my previous projects in my {{cv}}.",

  // Impact
  "impact.title": "Open source that sets standards",
  "impact.installs.label": "installs on the VS Code Marketplace",
  "impact.installs.desc":
    "I built {{vscodeJestRunner}} – a VS Code extension for running and debugging Jest, Vitest, Node, Deno, Bun and Playwright tests right inside the editor. Thousands of developers use it every day.",
  "impact.nx.value": "Recommended by Nx",
  "impact.nx.label": "Since 2020",
  "impact.nx.desc":
    "{{nx}} has recommended the extension for Nx monorepos since 2020. It can use multiple test runners side by side in a single project.",

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
