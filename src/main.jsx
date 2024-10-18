// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

// Import translation files
import homepage_en from "./locales/en/homepage.json";
import faq_en from "./locales/en/faq.json";
import bridging_en from "./locales/en/bridging.json";
import convertor_en from "./locales/en/convertor.json";
import convertor2_en from "./locales/en/convertor2.json";
import cookie_en from "./locales/en/cookie.json";
import privacy_en from "./locales/en/privacy.json";
import terms_en from "./locales/en/terms.json";
import homepage_de from "./locales/de/homepage.json";
import faq_de from "./locales/de/faq.json";
import bridging_de from "./locales/de/bridging.json";
import convertor_de from "./locales/de/convertor.json";
import convertor2_de from "./locales/de/convertor2.json";
import cookie_de from "./locales/de/cookie.json";
import privacy_de from "./locales/de/privacy.json";
import terms_de from "./locales/de/terms.json";
import homepage_es from "./locales/es/homepage.json";
import faq_es from "./locales/es/faq.json";
import bridging_es from "./locales/es/bridging.json";
import convertor_es from "./locales/es/convertor.json";
import convertor2_es from "./locales/es/convertor2.json";
import cookie_es from "./locales/es/cookie.json";
import privacy_es from "./locales/es/privacy.json";
import terms_es from "./locales/es/terms.json";
import homepage_fr from "./locales/fr/homepage.json";
import faq_fr from "./locales/fr/faq.json";
import bridging_fr from "./locales/fr/bridging.json";
import convertor_fr from "./locales/fr/convertor.json";
import convertor2_fr from "./locales/fr/convertor2.json";
import cookie_fr from "./locales/fr/cookie.json";
import privacy_fr from "./locales/fr/privacy.json";
import terms_fr from "./locales/fr/terms.json";
import homepage_it from "./locales/it/homepage.json";
import faq_it from "./locales/it/faq.json";
import bridging_it from "./locales/it/bridging.json";
import convertor_it from "./locales/it/convertor.json";
import convertor2_it from "./locales/it/convertor2.json";
import cookie_it from "./locales/it/cookie.json";
import privacy_it from "./locales/it/privacy.json";
import terms_it from "./locales/it/terms.json";
import homepage_ja from "./locales/ja/homepage.json";
import faq_ja from "./locales/ja/faq.json";
import bridging_ja from "./locales/ja/bridging.json";
import convertor_ja from "./locales/ja/convertor.json";
import convertor2_ja from "./locales/ja/convertor2.json";
import cookie_ja from "./locales/ja/cookie.json";
import privacy_ja from "./locales/ja/privacy.json";
import terms_ja from "./locales/ja/terms.json";
import homepage_ru from "./locales/ru/homepage.json";
import faq_ru from "./locales/ru/faq.json";
import bridging_ru from "./locales/ru/bridging.json";
import convertor_ru from "./locales/ru/convertor.json";
import convertor2_ru from "./locales/ru/convertor2.json";
import cookie_ru from "./locales/ru/cookie.json";
import privacy_ru from "./locales/ru/privacy.json";
import terms_ru from "./locales/ru/terms.json";
import homepage_uk from "./locales/uk/homepage.json";
import faq_uk from "./locales/uk/faq.json";
import bridging_uk from "./locales/uk/bridging.json";
import convertor_uk from "./locales/uk/convertor.json";
import convertor2_uk from "./locales/uk/convertor2.json";
import cookie_uk from "./locales/uk/cookie.json";
import privacy_uk from "./locales/uk/privacy.json";
import terms_uk from "./locales/uk/terms.json";
import homepage_zh from "./locales/zh/homepage.json";
import faq_zh from "./locales/zh/faq.json";
import bridging_zh from "./locales/zh/bridging.json";
import convertor_zh from "./locales/zh/convertor.json";
import convertor2_zh from "./locales/zh/convertor2.json";
import cookie_zh from "./locales/zh/cookie.json";
import privacy_zh from "./locales/zh/privacy.json";
import terms_zh from "./locales/zh/terms.json";
import homepage_ar from "./locales/ar/homepage.json";
import faq_ar from "./locales/ar/faq.json";

i18n.init({
  resources: {
    en: {
      homepage: homepage_en,
      faq: faq_en,
      terms: terms_en,
      cookie: cookie_en,
      privacy: privacy_en,
      bridging: bridging_en,
      convertor: convertor_en,
      convertor2: convertor2_en,
    },
    de: {
      homepage: homepage_de,
      faq: faq_de,
      terms: terms_de,
      cookie: cookie_de,
      privacy: privacy_de,
      bridging: bridging_de,
      convertor: convertor_de,
      convertor2: convertor2_de,
    },
    es: {
      homepage: homepage_es,
      faq: faq_es,
      terms: terms_es,
      cookie: cookie_es,
      privacy: privacy_es,
      bridging: bridging_es,
      convertor: convertor_es,
      convertor2: convertor2_es,
    },
    fr: {
      homepage: homepage_fr,
      faq: faq_fr,
      terms: terms_fr,
      cookie: cookie_fr,
      privacy: privacy_fr,
      bridging: bridging_fr,
      convertor: convertor_fr,
      convertor2: convertor2_fr,
    },
    it: {
      homepage: homepage_it,
      faq: faq_it,
      terms: terms_it,
      cookie: cookie_it,
      privacy: privacy_it,
      bridging: bridging_it,
      convertor: convertor_it,
      convertor2: convertor2_it,
    },
    ja: {
      homepage: homepage_ja,
      faq: faq_ja,
      terms: terms_ja,
      cookie: cookie_ja,
      privacy: privacy_ja,
      bridging: bridging_ja,
      convertor: convertor_ja,
      convertor2: convertor2_ja,
    },
    ru: {
      homepage: homepage_ru,
      faq: faq_ru,
      terms: terms_ru,
      cookie: cookie_ru,
      privacy: privacy_ru,
      bridging: bridging_ru,
      convertor: convertor_ru,
      convertor2: convertor2_ru,
    },
    uk: {
      homepage: homepage_uk,
      faq: faq_uk,
      terms: terms_uk,
      cookie: cookie_uk,
      privacy: privacy_uk,
      bridging: bridging_uk,
      convertor: convertor_uk,
      convertor2: convertor2_uk,
    },
    zh: {
      homepage: homepage_zh,
      faq: faq_zh,
      terms: terms_zh,
      cookie: cookie_zh,
      privacy: privacy_zh,
      bridging: bridging_zh,
      convertor: convertor_zh,
      convertor2: convertor2_zh,
    },
    ar: {
      homepage: homepage_ar,
      faq: faq_ar,
    },
  },
  lng: "en", // default language
  fallbackLng: "en", // fallback language
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
