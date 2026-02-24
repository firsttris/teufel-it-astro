export const defaultLang = (() => typeof window !== "undefined" && navigator.language.includes('de') ? 'de' : 'en')();

export const ui = {
    en: {
        'business-title': 'Software Architect & Developer Experience Expert',
        'cv': 'Curriculum Vitae',
        "hero.quote": "Creator of one of the most widely adopted testing tools in the VS Code ecosystem.",

        // Impact
        "impact.title": "Open Source That Sets Standards",
        "impact.installations": "Installs",
        "impact.users": "Thousands of users",
        "impact.creator": "Creator of {{vscodeJestRunner}} — a VS Code extension for running and debugging Jest, Vitest, Node, Deno, Bun and Playwright tests. A tool used daily by thousands of developers worldwide.",
        "impact.enterprise": "Enterprise Standard",
        "impact.nx": "Since 2020, my VS Code extension has been listed by {{nx}} as a recommendation for enterprise monorepos. It supports using multiple test runners in parallel within a single project.",

        // Services
        "services.title": "How I can help you",
        "services.subtitle": "Targeted expertise for your biggest technical challenges.",
        "services.refactoring.title": "Modernization & Refactoring",
        "services.refactoring.desc": "I safely guide your legacy codebases into modern architectures. Reduce technical debt and future-proof your system.",
        "services.testing.title": "Test Infrastructure & Strategy",
        "services.testing.desc": "Building scalable test suites (Vitest, Playwright, Jest) that drastically accelerate your release cycles. High quality at maximum speed.",
        "services.ai.title": "AI-Augmented Engineering",
        "services.ai.desc": "Integration of agent-based workflows (Claude Code / AI-CLI) to multiply your team's productivity. Use AI as a lever for your development.",
        "services.cleancode.title": "Clean Code & Best Practices",
        "services.cleancode.desc": "Turning technical debt into clean architecture. I refactor existing codebases following SOLID & KISS — for fewer bugs, faster features, and happier developers.",

        // CTA
        "cta.title": "Ready for the next level of code quality?",
        "cta.subtitle": "Let's discuss how we can minimize your technical debt and increase your developer velocity.",
        "cta.button": "Request Project",
    },
    de: {
        'business-title': 'Software Architekt & Developer Experience-Experte',
        'cv': 'Lebenslauf',
        "hero.quote": "Schöpfer eines der meistgenutzten Testing-Tools im VS Code Ökosystem.",

        // Impact
        "impact.title": "Open Source, der Standards setzt",
        "impact.installations": "Installs",
        "impact.users": "Tausende Nutzer",
        "impact.creator": "Schöpfer des {{vscodeJestRunner}} — eine VS Code Erweiterung zum Ausführen und Debuggen von Jest, Vitest, Node, Deno, Bun und Playwright Tests. Ein Tool, das täglich von tausenden Entwicklern weltweit genutzt wird.",
        "impact.enterprise": "Enterprise Standard",
        "impact.nx": "Seit 2020 wird meine VS Code Extension von {{nx}} als Empfehlung für Enterprise-Monorepos geführt. Sie unterstützt den parallelen Einsatz mehrerer Test-Runner in einem Projekt.",

        // Services
        "services.title": "Wobei ich Sie unterstütze",
        "services.subtitle": "Gezielte Expertise für Ihre größten technischen Herausforderungen.",
        "services.refactoring.title": "Modernisierung & Refactoring",
        "services.refactoring.desc": "Ich führe Ihre Legacy-Codebases sicher in moderne Architekturen über. Reduzieren Sie technische Schulden und machen Sie Ihr System zukunftssicher.",
        "services.testing.title": "Test-Infrastruktur & Strategie",
        "services.testing.desc": "Aufbau skalierbarer Test-Suiten (Vitest, Playwright, Jest), die Ihre Release-Zyklen drastisch beschleunigen. Hohe Qualität bei maximaler Geschwindigkeit.",
        "services.ai.title": "AI-Augmented Engineering",
        "services.ai.desc": "Integration agentenbasierter Workflows (Claude Code / AI-CLI), um die Produktivität Ihres Teams zu vervielfachen. Nutzen Sie KI als Hebel für Ihre Entwicklung.",
        "services.cleancode.title": "Clean Code & Best Practices",
        "services.cleancode.desc": "Aus technischen Schulden wird saubere Architektur. Ich überarbeite bestehende Codebasen nach SOLID & KISS — für weniger Bugs, schnellere Features und zufriedenere Entwickler.",

        // CTA
        "cta.title": "Bereit für das nächste Level an Code-Qualität?",
        "cta.subtitle": "Lassen Sie uns besprechen, wie wir Ihre technische Schuld minimieren und Ihre Developer Velocity steigern.",
        "cta.button": "Projekt anfragen",
    },
} as const;