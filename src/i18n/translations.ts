export const defaultLang = (() => typeof window !== "undefined" && navigator.language.includes('de') ? 'de' : 'en')(); 

export const ui = {
    en: {
        'business-title': 'Senior Software Developer',
        'academic-title': 'Business Informatics (B.Sc.)',
        'cv': 'Curriculum Vitae',
        "source-code": "Source Code",
        "generated": "Generated at:",
        "subtitle": "Expert in Clean-Code and Test Automation.",
        "current": "Currently I work as a freelance software developer and have worked on many exciting {{projects}} in the past 10 years.",
        "projects": "projects",
        "in-my-freetime": "In my free time I work on open-source projects on {{github}}.",
        "best-project": "One of my most successful projects is {{jestRunner}} a VSCode extension for test execution, which has been installed as a recommended extension by {{nx}} since 2020.",
        "hero.quote": "I build software that stays technologically on the pulse of time and architecturally endures generations.",
        "contactMe": "If you need support in developing software, you can contact me {{contact}}.",
        "contact": "Contact me",
        "available": "Available for projects",
        
        // Impact
        "impact.title": "Open Source with Impact",
        "impact.installations": "Installations",
        "impact.creator": "Creator of {{vscodeJestRunner}}. A tool used daily by developers worldwide.",
        "impact.enterprise": "Enterprise Standard",
        "impact.nx": "Official recommendation by {{nx}} for enterprise monorepos since 2020. I build tools that set the standard for modern testing.",

        // Services
        "services.title": "How I can help you",
        "services.subtitle": "Targeted expertise for your biggest technical challenges.",
        "services.refactoring.title": "Modernization & Refactoring",
        "services.refactoring.desc": "I safely guide your legacy codebases into modern architectures. Reduce technical debt and future-proof your system.",
        "services.testing.title": "Test Infrastructure & Strategy",
        "services.testing.desc": "Building scalable test suites (Vitest, Playwright, Jest) that drastically accelerate your release cycles. High quality at maximum speed.",
        "services.ai.title": "AI-Augmented Engineering",
        "services.ai.desc": "Integration of agent-based workflows (Claude Code / AI-CLI) to multiply your team's productivity. Use AI as a lever for your development.",

        // CTA
        "cta.title": "Ready for the next level of code quality?",
        "cta.subtitle": "Let's discuss how we can minimize your technical debt and increase your developer velocity.",
        "cta.button": "Request Project",
    },
    de: {
        'business-title': 'Senior Software Entwickler',
        'academic-title': 'Wirtschaftsinformatik (B.Sc.)',
        'cv': 'Lebenslauf',
        "source-code": "Quellcode",
        "generated": "Generiert am:",
        "subtitle": "Experte für Clean-Code und Testautomatisierung.",
        "current": "Derzeit arbeite ich als selbständiger Softwareentwickler und habe in den vergangenen 10 Jahren viele spannende {{projects}} realisiert.",
        "projects": "Projekte",
        "in-my-freetime": "In meiner Freizeit arbeite ich an Open-Source Projekten auf {{github}}.",
        "best-project": "Eines meiner erfolgreichstes Projekt ist {{jestRunner}} eine VSCode-Erweiterung zur Testausführung, die seit 2020 als empfohlene Erweiterung von {{nx}} installiert wird.",
        "hero.quote": "Ich baue Software, die technologisch am Puls der Zeit bleibt und architektonisch Generationen überdauert.",
         "contactMe": "Falls Sie Unterstützung bei der Entwicklung von Software benötigen, können Sie mich gerne {{contact}}.",
         "contact": "Kontaktieren",
         "available": "Verfügbar für Projekte",

         // Impact
         "impact.title": "Open Source mit Impact",
         "impact.installations": "Installations",
         "impact.creator": "Schöpfer des {{vscodeJestRunner}}. Ein Tool, das täglich weltweit von Entwicklern genutzt wird.",
         "impact.enterprise": "Enterprise Standard",
         "impact.nx": "Seit 2020 offizielle Empfehlung von {{nx}} für Enterprise-Monorepos. Ich entwickle Tools, die den Standard für modernes Testing setzen.",

         // Services
         "services.title": "Wobei ich Sie unterstütze",
         "services.subtitle": "Gezielte Expertise für Ihre größten technischen Herausforderungen.",
         "services.refactoring.title": "Modernisierung & Refactoring",
         "services.refactoring.desc": "Ich führe Ihre Legacy-Codebases sicher in moderne Architekturen über. Reduzieren Sie technische Schulden und machen Sie Ihr System zukunftssicher.",
         "services.testing.title": "Test-Infrastruktur & Strategie",
         "services.testing.desc": "Aufbau skalierbarer Test-Suiten (Vitest, Playwright, Jest), die Ihre Release-Zyklen drastisch beschleunigen. Hohe Qualität bei maximaler Geschwindigkeit.",
         "services.ai.title": "AI-Augmented Engineering",
         "services.ai.desc": "Integration agentenbasierter Workflows (Claude Code / AI-CLI), um die Produktivität Ihres Teams zu vervielfachen. Nutzen Sie KI als Hebel für Ihre Entwicklung.",

         // CTA
         "cta.title": "Bereit für das nächste Level an Code-Qualität?",
         "cta.subtitle": "Lassen Sie uns besprechen, wie wir Ihre technische Schuld minimieren und Ihre Developer Velocity steigern.",
         "cta.button": "Projekt anfragen",
    },
} as const;