export const languages = {
    en: 'English',
    de: 'German',
};

export const defaultLang = navigator.language.includes('de') ? 'de' : 'en';

export const ui = {
    en: {
        'business-title': 'Senior Software Developer',
        'academic-title': 'Business Informatics (B.Sc.)',
        'cv': 'Curriculum Vitae',
    },
    de: {
        'business-title': 'Senior Software Entwickler',
        'academic-title': 'Wirtschaftsinformatik (B.Sc.)',
        'cv': 'Lebenslauf',
    },
} as const;