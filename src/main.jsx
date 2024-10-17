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
import homepage_ar from "./locales/ar/homepage.json";
import faq_ar from "./locales/ar/faq.json";

i18n.init({
  resources: {
    en: {
      homepage: homepage_en,
      faq: faq_en,
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
