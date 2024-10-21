import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { languages } from './languages'; // This file should contain the list of available languages

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: languages.map((lang) => lang.code),
    detection: {
      order: ['path'],
      lookupFromPathIndex: 0,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    interpolation: {
      escapeValue: false, // React already does escaping
    },
  });

export default i18n;
