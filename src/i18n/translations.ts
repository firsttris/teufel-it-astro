export const defaultLang = (() => typeof window !== "undefined" && navigator.language.includes('de') ? 'de' : 'en')(); 

export const ui = {
    en: {
        'business-title': 'Senior Software Developer',
        'academic-title': 'Business Informatics (B.Sc.)',
        'cv': 'Curriculum Vitae',
        "source-code": "Source Code",
    },
    de: {
        'business-title': 'Senior Software Entwickler',
        'academic-title': 'Wirtschaftsinformatik (B.Sc.)',
        'cv': 'Lebenslauf',
        "source-code": "Quellcode",
    },
} as const;