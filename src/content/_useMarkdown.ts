import description_de from './de/description.md';
import description_en from './en/description.md';

const markdown = {
    de: {
        description: description_de
    },
    en: {
        description: description_en
    },
};

export const useMarkdown = (lang: 'de' | 'en') => {
    return markdown[lang];
};