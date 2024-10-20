// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

// Import translation files
import homepage_en from "./locales/en/homepage.json";
import win_en from "./locales/en/win.json";
import win_ar from "./locales/ar/win.json";
// import win_en from "./locales/en/win.json";
// import win_en from "./locales/en/win.json";
// import win_en from "./locales/en/win.json";
import faq_en from "./locales/en/faq.json";
import bridging_en from "./locales/en/bridging.json";
import convertor_en from "./locales/en/convertor.json";
import convertor2_en from "./locales/en/convertor2.json";
import earning_en from "./locales/en/earning.json";
import vaults_en from "./locales/en/vaults.json";
import stacking_en from "./locales/en/stacking.json";
import cookie_en from "./locales/en/cookie.json";
import privacy_en from "./locales/en/privacy.json";
import terms_en from "./locales/en/terms.json";
import launchedpad_en from "./locales/en/launchedpad.json";
import homepage_de from "./locales/de/homepage.json";
import faq_de from "./locales/de/faq.json";
import bridging_de from "./locales/de/bridging.json";
import convertor_de from "./locales/de/convertor.json";
import convertor2_de from "./locales/de/convertor2.json";
import earning_de from "./locales/de/earning.json";
import vaults_de from "./locales/de/vaults.json";
import stacking_de from "./locales/de/stacking.json";
import cookie_de from "./locales/de/cookie.json";
import privacy_de from "./locales/de/privacy.json";
import terms_de from "./locales/de/terms.json";
import homepage_es from "./locales/es/homepage.json";
import faq_es from "./locales/es/faq.json";
import bridging_es from "./locales/es/bridging.json";
import convertor_es from "./locales/es/convertor.json";
import convertor2_es from "./locales/es/convertor2.json";
import earning_es from "./locales/es/earning.json";
import vaults_es from "./locales/es/vaults.json";
import stacking_es from "./locales/es/stacking.json";
import cookie_es from "./locales/es/cookie.json";
import privacy_es from "./locales/es/privacy.json";
import terms_es from "./locales/es/terms.json";
import homepage_fr from "./locales/fr/homepage.json";
import faq_fr from "./locales/fr/faq.json";
import bridging_fr from "./locales/fr/bridging.json";
import convertor_fr from "./locales/fr/convertor.json";
import convertor2_fr from "./locales/fr/convertor2.json";
import earning_fr from "./locales/fr/earning.json";
import vaults_fr from "./locales/fr/vaults.json";
import stacking_fr from "./locales/fr/stacking.json";
import cookie_fr from "./locales/fr/cookie.json";
import privacy_fr from "./locales/fr/privacy.json";
import terms_fr from "./locales/fr/terms.json";
import homepage_it from "./locales/it/homepage.json";
import faq_it from "./locales/it/faq.json";
import bridging_it from "./locales/it/bridging.json";
import convertor_it from "./locales/it/convertor.json";
import convertor2_it from "./locales/it/convertor2.json";
import earning_it from "./locales/it/earning.json";
import vaults_it from "./locales/it/vaults.json";
import stacking_it from "./locales/it/stacking.json";
import cookie_it from "./locales/it/cookie.json";
import privacy_it from "./locales/it/privacy.json";
import terms_it from "./locales/it/terms.json";
import homepage_ja from "./locales/ja/homepage.json";
import faq_ja from "./locales/ja/faq.json";
import bridging_ja from "./locales/ja/bridging.json";
import convertor_ja from "./locales/ja/convertor.json";
import convertor2_ja from "./locales/ja/convertor2.json";
import earning_ja from "./locales/ja/earning.json";
import vaults_ja from "./locales/ja/vaults.json";
import stacking_ja from "./locales/ja/stacking.json";
import cookie_ja from "./locales/ja/cookie.json";
import privacy_ja from "./locales/ja/privacy.json";
import terms_ja from "./locales/ja/terms.json";
import homepage_ru from "./locales/ru/homepage.json";
import faq_ru from "./locales/ru/faq.json";
import bridging_ru from "./locales/ru/bridging.json";
import convertor_ru from "./locales/ru/convertor.json";
import convertor2_ru from "./locales/ru/convertor2.json";
import earning_ru from "./locales/ru/earning.json";
import vaults_ru from "./locales/ru/vaults.json";
import stacking_ru from "./locales/ru/stacking.json";
import cookie_ru from "./locales/ru/cookie.json";
import privacy_ru from "./locales/ru/privacy.json";
import terms_ru from "./locales/ru/terms.json";
import homepage_uk from "./locales/uk/homepage.json";
import faq_uk from "./locales/uk/faq.json";
import bridging_uk from "./locales/uk/bridging.json";
import convertor_uk from "./locales/uk/convertor.json";
import convertor2_uk from "./locales/uk/convertor2.json";
import earning_uk from "./locales/uk/earning.json";
import vaults_uk from "./locales/uk/vaults.json";
import stacking_uk from "./locales/uk/stacking.json";
import cookie_uk from "./locales/uk/cookie.json";
import privacy_uk from "./locales/uk/privacy.json";
import terms_uk from "./locales/uk/terms.json";
import homepage_zh from "./locales/zh/homepage.json";
import faq_zh from "./locales/zh/faq.json";
import bridging_zh from "./locales/zh/bridging.json";
import convertor_zh from "./locales/zh/convertor.json";
import convertor2_zh from "./locales/zh/convertor2.json";
import earning_zh from "./locales/zh/earning.json";
import vaults_zh from "./locales/zh/vaults.json";
import stacking_zh from "./locales/zh/stacking.json";
import cookie_zh from "./locales/zh/cookie.json";
import privacy_zh from "./locales/zh/privacy.json";
import terms_zh from "./locales/zh/terms.json";
import homepage_ar from "./locales/ar/homepage.json";
import faq_ar from "./locales/ar/faq.json";
import bridging_ar from "./locales/ar/bridging.json";
import convertor_ar from "./locales/ar/convertor.json";
import convertor2_ar from "./locales/ar/convertor2.json";
import earning_ar from "./locales/ar/earning.json";
import vaults_ar from "./locales/ar/vaults.json";
import stacking_ar from "./locales/ar/stacking.json";
import terms_ar from "./locales/ar/terms.json";
import homepage_hi from "./locales/hi/homepage.json";
import bridging_hi from "./locales/hi/bridging.json";
import convertor_hi from "./locales/hi/convertor.json";
import convertor2_hi from "./locales/hi/convertor2.json";
import earning_hi from "./locales/hi/earning.json";
import vaults_hi from "./locales/hi/vaults.json";
import stacking_hi from "./locales/hi/stacking.json";
import terms_hi from "./locales/hi/terms.json";
import homepage_ko from "./locales/ko/homepage.json";
import bridging_ko from "./locales/ko/bridging.json";
import convertor_ko from "./locales/ko/convertor.json";
import convertor2_ko from "./locales/ko/convertor2.json";
import earning_ko from "./locales/ko/earning.json";
import vaults_ko from "./locales/ko/vaults.json";
import stacking_ko from "./locales/ko/stacking.json";
import terms_ko from "./locales/ko/terms.json";
import homepage_pl from "./locales/pl/homepage.json";
import bridging_pl from "./locales/pl/bridging.json";
import convertor_pl from "./locales/pl/convertor.json";
import convertor2_pl from "./locales/pl/convertor2.json";
import earning_pl from "./locales/pl/earning.json";
import vaults_pl from "./locales/pl/vaults.json";
import stacking_pl from "./locales/pl/stacking.json";
import terms_pl from "./locales/pl/terms.json";
import homepage_pt from "./locales/pt/homepage.json";
import bridging_pt from "./locales/pt/bridging.json";
import convertor_pt from "./locales/pt/convertor.json";
import convertor2_pt from "./locales/pt/convertor2.json";
import earning_pt from "./locales/pt/earning.json";
import vaults_pt from "./locales/pt/vaults.json";
import stacking_pt from "./locales/pt/stacking.json";
import terms_pt from "./locales/pt/terms.json";
import homepage_th from "./locales/th/homepage.json";
import bridging_th from "./locales/th/bridging.json";
import convertor_th from "./locales/th/convertor.json";
import convertor2_th from "./locales/th/convertor2.json";
import earning_th from "./locales/th/earning.json";
import vaults_th from "./locales/th/vaults.json";
import stacking_th from "./locales/th/stacking.json";
import terms_th from "./locales/th/terms.json";

i18n.init({
  resources: {
    ar: {
      homepage: homepage_ar,
      faq: faq_ar,
      terms: terms_ar,
      bridging: bridging_ar,
      convertor: convertor_ar,
      convertor2: convertor2_ar,
      earning: earning_ar,
      vaults: vaults_ar,
      stacking: stacking_ar,
      win: win_ar,
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
      earning: earning_de,
      vaults: vaults_de,
      stacking: stacking_de,
    },
    en: {
      homepage: homepage_en,
      faq: faq_en,
      terms: terms_en,
      cookie: cookie_en,  
      privacy: privacy_en,
      launchedpad: launchedpad_en,
      bridging: bridging_en,
      convertor: convertor_en,
      convertor2: convertor2_en,
      earning: earning_en,
      vaults: vaults_en,
      win: win_en,
      stacking: stacking_en,
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
      earning: earning_es,
      vaults: vaults_es,
      stacking: stacking_es,
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
      earning: earning_fr,
      vaults: vaults_fr,
      stacking: stacking_fr,
    },
    hi: {
      homepage: homepage_hi,
      terms: terms_hi,
      bridging: bridging_hi,
      convertor: convertor_hi,
      convertor2: convertor2_hi,
      earning: earning_hi,
      vaults: vaults_hi,
      stacking: stacking_hi,
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
      earning: earning_it,
      vaults: vaults_it,
      stacking: stacking_it,
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
      earning: earning_ja,
      vaults: vaults_ja,
      stacking: stacking_ja,
    },
    ko: {
      homepage: homepage_ko,

      terms: terms_ko,
      bridging: bridging_ko,
      convertor: convertor_ko,
      convertor2: convertor2_ko,
      earning: earning_ko,
      vaults: vaults_ko,
      stacking: stacking_ko,
    },
    pl: {
      homepage: homepage_pl,

      terms: terms_pl,
      bridging: bridging_pl,
      convertor: convertor_pl,
      convertor2: convertor2_pl,
      earning: earning_pl,
      vaults: vaults_pl,
      stacking: stacking_pl,
    },
    pt: {
      homepage: homepage_pt,
      terms: terms_pt,
      bridging: bridging_pt,
      convertor: convertor_pt,
      convertor2: convertor2_pt,
      earning: earning_pt,
      vaults: vaults_pt,
      stacking: stacking_pt,
    },
    th: {
      homepage: homepage_th,
      terms: terms_th,
      bridging: bridging_th,
      convertor: convertor_th,
      convertor2: convertor2_th,
      earning: earning_th,
      vaults: vaults_th,
      stacking: stacking_th,
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
      earning: earning_ru,
      vaults: vaults_ru,
      stacking: stacking_ru,
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
      earning: earning_uk,
      vaults: vaults_uk,
      stacking: stacking_uk,
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
      earning: earning_zh,
      vaults: vaults_zh,
      stacking: stacking_zh,
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
