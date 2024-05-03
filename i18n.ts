import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import enTranslations from './locales/en.json';
import arTranslations from './locales/ar.json';


const resources = {
  en: {
    translation: enTranslations,
  },
  ar: {
    translation: arTranslations,
  },
};

i18n
  .use(initReactI18next) 
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    debug: true,
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;