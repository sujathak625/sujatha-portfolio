import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en/translation-en.json';
import de from './locales/de/translation-de.json';

i18next.use(initReactI18next).init({
    resources: {
        en: { translation: en },
        de: { translation: de },
    },
    fallbackLng: 'en',
    lng: 'en',
    interpolation: {
        escapeValue: false,
    },
});

export default i18next;
