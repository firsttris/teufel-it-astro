const de = {
  "meta.title": "Tristan Teufel – Software Craftsman",
  "meta.description":
    "Tristan Teufel, Software Craftsman aus Bühl (Baden): Architektur und Umsetzung von Business-Software, von der ersten Idee bis zum Betrieb. Über 15 Jahre Erfahrung.",

  "hero.role": "Software Craftsman",
  "hero.tagline": "Architektur und Umsetzung von Business-Software, von der ersten Idee bis zum Betrieb.",
  "hero.experience": "15+ Jahre Erfahrung",
  "hero.location": "Bühl (Baden)",
  "hero.availability": "Verfügbar ab Januar 2027",
  "links.cv": "Lebenslauf",
  "links.email": "E-Mail",

  // Projects
  "projects.title": "Was mit agentenbasierter Entwicklung heute möglich ist",
  "projects.subtitle":
    "Vollständige Produkte, die ich entworfen und gebaut habe. Open Source, selbst gehostet, die Daten bleiben in Europa.",
  "projects.haben.tagline": "Alternative zu lexoffice und sevDesk",
  "projects.haben.desc":
    "Buchhaltung für Selbstständige und kleine Unternehmen: E-Rechnung (ZUGFeRD, XRechnung), Bankabgleich, EÜR und Umsatzsteuer-Voranmeldung direkt an ELSTER.",
  "projects.haben.alt": "Übersicht in Haben mit offenen Forderungen, Umsatz, Kontostand und anstehenden Aufgaben",
  "projects.kontext.tagline": "Alternative zu Google Workspace und Microsoft 365",
  "projects.kontext.desc":
    "Mail, Kalender, Kontakte, Aufgaben, Team-Chat und Telefonie in einer Anwendung, mit gemeinsamen Postfächern und ohne Kosten pro Nutzer.",
  "projects.kontext.alt": "Posteingang in Kontext mit gemeinsamen Postfächern und geöffneter Mail",
  "projects.schreibzeug.tagline": "Alternative zu Google Docs und Microsoft 365",
  "projects.schreibzeug.desc":
    "Word, Excel, PowerPoint und PDF gemeinsam in Echtzeit bearbeiten, im Browser oder als Desktop-App. Die Dateien bleiben .docx, .xlsx und .pptx.",
  "projects.schreibzeug.alt": "Ein Word-Dokument im Editor von Schreibzeug",
  "projects.docs": "Dokumentation",
  "projects.source": "Quellcode",
  // Followed by a link to vscode-jest-runner and this text.
  "projects.jestRunner": "Test-Runner für VS Code, über 2 Mio. Installationen, gepflegt seit 2017.",

  // Services
  "services.title": "Leistungen",
  "services.subtitle": "Wobei ich Unternehmen und Entwicklungsteams unterstütze.",
  "services.custom.title": "Business-Software nach Maß",
  "services.custom.desc":
    "Fachanwendungen, interne Werkzeuge und Schnittstellen zu bestehenden Systemen. Auf Wunsch selbst gehostet und DSGVO-konform.",
  "services.modernization.title": "Architektur & Modernisierung",
  "services.modernization.desc":
    "Gewachsene Systeme überführe ich Schritt für Schritt in eine wartbare Architektur, abgesichert durch Tests statt durch einen riskanten Neuanfang.",
  "services.testing.title": "Mehrschichtige Testarchitektur",
  "services.testing.desc":
    "Agenten schreiben schnell Code. Ob er funktioniert, entscheidet die Testarchitektur: Unit-, Integrations- und End-to-End-Tests in der CI/CD-Pipeline, die jede Änderung prüfen, bevor sie live geht.",
  "services.agents.title": "Agentenbasierte Entwicklung",
  "services.agents.desc":
    "Ich führe Agenten produktiv in Ihre Entwicklung ein: mit klaren Leitplanken, Reviews und Tests, damit Tempo nicht auf Kosten der Qualität geht.",

  // About
  "about.title": "Über mich",
  "about.photoAlt": "Porträt von Tristan Teufel",
  "about.p1":
    "Ich bin Tristan Teufel und mit Teufel IT in Bühl (Baden) selbständig. Seit über 15 Jahren entwickle ich Software, zuletzt vor allem in Enterprise-Projekten. Mein Fokus liegt auf Clean Architecture und moderner Testautomation: weniger technische Schulden, schnellere Releases, auch in kritischen Umgebungen.",
  "about.p2":
    "Heute arbeite ich agentenbasiert: Agenten übernehmen einen großen Teil der Umsetzung, ich verantworte Architektur, Qualität und Ergebnis. So entstehen Anwendungen in einem Umfang, für den früher ein ganzes Team nötig war.",
  // Followed by a link to the CV.
  "about.p3": "Bisherige Projekte und Referenzen finden Sie in meinem",

  // CTA
  "cta.title": "Sie haben ein Vorhaben?",
  "cta.subtitle": "Schreiben Sie mir kurz, worum es geht. Ich melde mich zeitnah.",
  "cta.button": "E-Mail schreiben",

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
    "Tristan Teufel, software craftsman based in Bühl, Germany: architecture and delivery of business software, from the first idea to production. More than 15 years of experience.",

  "hero.role": "Software Craftsman",
  "hero.tagline": "Architecture and delivery of business software, from the first idea to production.",
  "hero.experience": "15+ years of experience",
  "hero.location": "Bühl, Germany",
  "hero.availability": "Available from January 2027",
  "links.cv": "CV",
  "links.email": "Email",

  // Projects
  "projects.title": "What agent-based development makes possible today",
  "projects.subtitle":
    "Complete products I designed and built. Open source, self-hosted, with the data staying in Europe.",
  "projects.haben.tagline": "An alternative to lexoffice and sevDesk",
  "projects.haben.desc":
    "Bookkeeping for German freelancers and small businesses: e-invoicing (ZUGFeRD, XRechnung), bank reconciliation, EÜR and VAT returns sent straight to ELSTER.",
  "projects.haben.alt": "Overview in Haben with open receivables, revenue, account balance and upcoming tasks",
  "projects.kontext.tagline": "An alternative to Google Workspace and Microsoft 365",
  "projects.kontext.desc":
    "Mail, calendar, contacts, tasks, team chat and telephony in one application, with shared mailboxes and no per-seat pricing.",
  "projects.kontext.alt": "Inbox in Kontext with shared mailboxes and an open mail",
  "projects.schreibzeug.tagline": "An alternative to Google Docs and Microsoft 365",
  "projects.schreibzeug.desc":
    "Edit Word, Excel, PowerPoint and PDF files together in real time, in the browser or as a desktop app. Files stay .docx, .xlsx and .pptx.",
  "projects.schreibzeug.alt": "A Word document in the Schreibzeug editor",
  "projects.docs": "Documentation",
  "projects.source": "Source code",
  // Followed by a link to vscode-jest-runner and this text.
  "projects.jestRunner": "test runner for VS Code, more than 2 million installs, maintained since 2017.",

  // Services
  "services.title": "Services",
  "services.subtitle": "How I support companies and development teams.",
  "services.custom.title": "Custom Business Software",
  "services.custom.desc":
    "Line-of-business applications, internal tools and integrations with existing systems. Self-hosted and GDPR-compliant if you need it.",
  "services.modernization.title": "Architecture & Modernization",
  "services.modernization.desc":
    "I move grown systems step by step to a maintainable architecture, backed by tests instead of a risky rewrite.",
  "services.testing.title": "Multi-Layer Test Architecture",
  "services.testing.desc":
    "Agents write code fast. Whether it works is decided by the test architecture: unit, integration and end-to-end tests in the CI/CD pipeline that check every change before it goes live.",
  "services.agents.title": "Agent-Based Development",
  "services.agents.desc":
    "I bring agents into your development process productively: with clear guardrails, reviews and tests, so speed doesn't come at the cost of quality.",

  // About
  "about.title": "About me",
  "about.photoAlt": "Portrait of Tristan Teufel",
  "about.p1":
    "I'm Tristan Teufel, running my own business, Teufel IT, in Bühl, Germany. I've been developing software for more than 15 years, most recently in enterprise projects. My focus is on Clean Architecture and modern test automation: less technical debt and faster releases, even in critical environments.",
  "about.p2":
    "Today I work agent-based: agents take on a large part of the implementation while I own the architecture, the quality and the result. That way, applications come together at a scale that used to take a whole team.",
  // Followed by a link to the CV.
  "about.p3": "Past projects and references are listed in my",

  // CTA
  "cta.title": "Have a project in mind?",
  "cta.subtitle": "Send me a short note about what it is. I'll get back to you promptly.",
  "cta.button": "Send an email",

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
