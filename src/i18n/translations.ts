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
        "contactMe": "If you need support in developing software, you can contact me {{contact}}.",
        "contact": "Contact me",
        "available": "Available for projects",
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
         "contactMe": "Falls Sie Unterstützung bei der Entwicklung von Software benötigen, können Sie mich gerne {{contact}}.",
         "contact": "Kontaktieren",
         "available": "Verfügbar für Projekte",
    },
} as const;