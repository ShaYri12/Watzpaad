// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";

// Import translation files

// HomePage Complete
import homepage_en from "./locales/en/homepage.json";
import homepage_ar from "./locales/ar/homepage.json";
import homepage_de from "./locales/de/homepage.json";
import homepage_es from "./locales/es/homepage.json";
import homepage_fr from "./locales/fr/homepage.json";
import homepage_hi from "./locales/hi/homepage.json";
import homepage_it from "./locales/it/homepage.json";
import homepage_ja from "./locales/ja/homepage.json";
import homepage_ko from "./locales/ko/homepage.json";
import homepage_pl from "./locales/pl/homepage.json";
import homepage_pt from "./locales/pt/homepage.json";
import homepage_ru from "./locales/ru/homepage.json";
import homepage_th from "./locales/th/homepage.json";
import homepage_tr from "./locales/tr/homepage.json";
import homepage_uk from "./locales/uk/homepage.json";
import homepage_vi from "./locales/vi/homepage.json";
import homepage_zh from "./locales/zh/homepage.json";
import homepage_bn from "./locales/bn/homepage.json";
import homepage_ms from "./locales/ms/homepage.json";
import homepage_fa from "./locales/fa/homepage.json";
import homepage_he from "./locales/he/homepage.json";
import homepage_sw from "./locales/sw/homepage.json";
import homepage_nl from "./locales/nl/homepage.json";
import homepage_sv from "./locales/sv/homepage.json";

// Launchedpad Complete
import launchedpad_en from "./locales/en/launchedpad.json";
import launchedpad_ar from "./locales/ar/launchedpad.json";
import launchedpad_de from "./locales/de/launchedpad.json";
import launchedpad_es from "./locales/es/launchedpad.json";
import launchedpad_fr from "./locales/fr/launchedpad.json";
import launchedpad_hi from "./locales/hi/launchedpad.json";
import launchedpad_it from "./locales/it/launchedpad.json";
import launchedpad_ja from "./locales/ja/launchedpad.json";
import launchedpad_ko from "./locales/ko/launchedpad.json";
import launchedpad_pl from "./locales/pl/launchedpad.json";
import launchedpad_pt from "./locales/pt/launchedpad.json";
import launchedpad_ru from "./locales/ru/launchedpad.json";
import launchedpad_th from "./locales/th/launchedpad.json";
import launchedpad_tr from "./locales/tr/launchedpad.json";
import launchedpad_uk from "./locales/uk/launchedpad.json";
import launchedpad_vi from "./locales/vi/launchedpad.json";
import launchedpad_zh from "./locales/zh/launchedpad.json";
import launchedpad_bn from "./locales/bn/launchedpad.json";
import launchedpad_ms from "./locales/ms/launchedpad.json";
import launchedpad_fa from "./locales/fa/launchedpad.json";
import launchedpad_he from "./locales/he/launchedpad.json";
import launchedpad_sw from "./locales/sw/launchedpad.json";
import launchedpad_nl from "./locales/nl/launchedpad.json";
import launchedpad_sv from "./locales/sv/launchedpad.json";

// Earning Complete
import earning_en from "./locales/en/earning.json";
import earning_ar from "./locales/ar/earning.json";
import earning_de from "./locales/de/earning.json";
import earning_es from "./locales/es/earning.json";
import earning_fr from "./locales/fr/earning.json";
import earning_hi from "./locales/hi/earning.json";
import earning_it from "./locales/it/earning.json";
import earning_ja from "./locales/ja/earning.json";
import earning_ko from "./locales/ko/earning.json";
import earning_pl from "./locales/pl/earning.json";
import earning_pt from "./locales/pt/earning.json";
import earning_ru from "./locales/ru/earning.json";
import earning_th from "./locales/th/earning.json";
import earning_tr from "./locales/tr/earning.json";
import earning_uk from "./locales/uk/earning.json";
import earning_vi from "./locales/vi/earning.json";
import earning_zh from "./locales/zh/earning.json";
import earning_bn from "./locales/bn/earning.json";
import earning_ms from "./locales/ms/earning.json";
import earning_fa from "./locales/fa/earning.json";
import earning_he from "./locales/he/earning.json";
import earning_sw from "./locales/sw/earning.json";
import earning_nl from "./locales/nl/earning.json";
import earning_sv from "./locales/sv/earning.json";

// Marketplace
import marketplace_en from "./locales/en/marketplace.json";
import marketplace_ar from "./locales/ar/marketplace.json";
import marketplace_de from "./locales/de/marketplace.json";
import marketplace_es from "./locales/es/marketplace.json";
import marketplace_fr from "./locales/fr/marketplace.json";
import marketplace_hi from "./locales/hi/marketplace.json";
import marketplace_it from "./locales/it/marketplace.json";
import marketplace_ja from "./locales/ja/marketplace.json";
import marketplace_ko from "./locales/ko/marketplace.json";
import marketplace_pl from "./locales/pl/marketplace.json";
import marketplace_pt from "./locales/pt/marketplace.json";
import marketplace_ru from "./locales/ru/marketplace.json";
import marketplace_th from "./locales/th/marketplace.json";
import marketplace_tr from "./locales/tr/marketplace.json";
import marketplace_uk from "./locales/uk/marketplace.json";
import marketplace_vi from "./locales/vi/marketplace.json";
import marketplace_zh from "./locales/zh/marketplace.json";
import marketplace_bn from "./locales/bn/marketplace.json";
import marketplace_ms from "./locales/ms/marketplace.json";
import marketplace_fa from "./locales/fa/marketplace.json";
import marketplace_he from "./locales/he/marketplace.json";
import marketplace_sw from "./locales/sw/marketplace.json";
import marketplace_nl from "./locales/nl/marketplace.json";
import marketplace_sv from "./locales/sv/marketplace.json";

// Vaults
import vaults_en from "./locales/en/vaults.json";
import vaults_ar from "./locales/ar/vaults.json";
import vaults_de from "./locales/de/vaults.json";
import vaults_es from "./locales/es/vaults.json";
import vaults_fr from "./locales/fr/vaults.json";
import vaults_hi from "./locales/hi/vaults.json";
import vaults_it from "./locales/it/vaults.json";
import vaults_ja from "./locales/ja/vaults.json";
import vaults_ko from "./locales/ko/vaults.json";
import vaults_pl from "./locales/pl/vaults.json";
import vaults_pt from "./locales/pt/vaults.json";
import vaults_ru from "./locales/ru/vaults.json";
import vaults_th from "./locales/th/vaults.json";
import vaults_tr from "./locales/tr/vaults.json";
import vaults_uk from "./locales/uk/vaults.json";
import vaults_vi from "./locales/vi/vaults.json";
import vaults_zh from "./locales/zh/vaults.json";
import vaults_bn from "./locales/bn/vaults.json";
import vaults_ms from "./locales/ms/vaults.json";
import vaults_fa from "./locales/fa/vaults.json";
import vaults_he from "./locales/he/vaults.json";
import vaults_sw from "./locales/sw/vaults.json";
import vaults_nl from "./locales/nl/vaults.json";
import vaults_sv from "./locales/sv/vaults.json";

// Staking
import stacking_en from "./locales/en/stacking.json";
import stacking_ar from "./locales/ar/stacking.json";
import stacking_de from "./locales/de/stacking.json";
import stacking_es from "./locales/es/stacking.json";
import stacking_fr from "./locales/fr/stacking.json";
import stacking_hi from "./locales/hi/stacking.json";
import stacking_it from "./locales/it/stacking.json";
import stacking_ja from "./locales/ja/stacking.json";
import stacking_ko from "./locales/ko/stacking.json";
import stacking_pl from "./locales/pl/stacking.json";
import stacking_pt from "./locales/pt/stacking.json";
import stacking_ru from "./locales/ru/stacking.json";
import stacking_th from "./locales/th/stacking.json";
import stacking_tr from "./locales/tr/stacking.json";
import stacking_uk from "./locales/uk/stacking.json";
import stacking_vi from "./locales/vi/stacking.json";
import stacking_zh from "./locales/zh/stacking.json";

import stacking_bn from "./locales/bn/stacking.json";
import stacking_ms from "./locales/ms/stacking.json";
import stacking_fa from "./locales/fa/stacking.json";
import stacking_he from "./locales/he/stacking.json";
import stacking_sw from "./locales/sw/stacking.json";
import stacking_nl from "./locales/nl/stacking.json";
import stacking_sv from "./locales/sv/stacking.json";

// Win
import win_en from "./locales/en/win.json";
import win_ar from "./locales/ar/win.json";
import win_de from "./locales/de/win.json";
import win_es from "./locales/es/win.json";
import win_fr from "./locales/fr/win.json";
import win_hi from "./locales/hi/win.json";
import win_it from "./locales/it/win.json";
import win_ja from "./locales/ja/win.json";
import win_ko from "./locales/ko/win.json";
import win_pl from "./locales/pl/win.json";
import win_pt from "./locales/pt/win.json";
import win_ru from "./locales/ru/win.json";
import win_th from "./locales/th/win.json";
import win_tr from "./locales/tr/win.json";
import win_uk from "./locales/uk/win.json";
import win_vi from "./locales/vi/win.json";
import win_zh from "./locales/zh/win.json";

import win_bn from "./locales/bn/win.json";
import win_ms from "./locales/ms/win.json";
import win_fa from "./locales/fa/win.json";
import win_he from "./locales/he/win.json";
import win_sw from "./locales/sw/win.json";
import win_nl from "./locales/nl/win.json";
import win_sv from "./locales/sv/win.json";

// Terms And Conditions Complete
import terms_en from "./locales/en/terms.json";
import terms_ar from "./locales/ar/terms.json";
import terms_de from "./locales/de/terms.json";
import terms_es from "./locales/es/terms.json";
import terms_fr from "./locales/fr/terms.json";
import terms_hi from "./locales/hi/terms.json";
import terms_it from "./locales/it/terms.json";
import terms_ja from "./locales/ja/terms.json";
import terms_ko from "./locales/ko/terms.json";
import terms_pl from "./locales/pl/terms.json";
import terms_pt from "./locales/pt/terms.json";
import terms_ru from "./locales/ru/terms.json";
import terms_th from "./locales/th/terms.json";
import terms_tr from "./locales/tr/terms.json";
import terms_uk from "./locales/uk/terms.json";
import terms_vi from "./locales/vi/terms.json";
import terms_zh from "./locales/zh/terms.json";

// Privacy Policy Complete
import privacy_en from "./locales/en/privacy.json";
import privacy_ar from "./locales/ar/privacy.json";
import privacy_de from "./locales/de/privacy.json";
import privacy_es from "./locales/es/privacy.json";
import privacy_fr from "./locales/fr/privacy.json";
import privacy_hi from "./locales/hi/privacy.json";
import privacy_it from "./locales/it/privacy.json";
import privacy_ja from "./locales/ja/privacy.json";
import privacy_ko from "./locales/ko/privacy.json";
import privacy_pl from "./locales/pl/privacy.json";
import privacy_pt from "./locales/pt/privacy.json";
import privacy_ru from "./locales/ru/privacy.json";
import privacy_th from "./locales/th/privacy.json";
import privacy_tr from "./locales/tr/privacy.json";
import privacy_uk from "./locales/uk/privacy.json";
import privacy_vi from "./locales/vi/privacy.json";
import privacy_zh from "./locales/zh/privacy.json";

// Cookie Policy Complete
import cookie_en from "./locales/en/cookie.json";
import cookie_ar from "./locales/ar/cookie.json";
import cookie_de from "./locales/de/cookie.json";
import cookie_es from "./locales/es/cookie.json";
import cookie_fr from "./locales/fr/cookie.json";
import cookie_hi from "./locales/hi/cookie.json";
import cookie_it from "./locales/it/cookie.json";
import cookie_ja from "./locales/ja/cookie.json";
import cookie_ko from "./locales/ko/cookie.json";
import cookie_pl from "./locales/pl/cookie.json";
import cookie_pt from "./locales/pt/cookie.json";
import cookie_ru from "./locales/ru/cookie.json";
import cookie_th from "./locales/th/cookie.json";
import cookie_tr from "./locales/tr/cookie.json";
import cookie_uk from "./locales/uk/cookie.json";
import cookie_vi from "./locales/vi/cookie.json";
import cookie_zh from "./locales/zh/cookie.json";

// Dashboard Home Page
// import bridging_en from "./locales/en/bridging.json";

// Bridging
import bridging_en from "./locales/en/bridging.json";
import bridging_ar from "./locales/ar/bridging.json";
import bridging_de from "./locales/de/bridging.json";
import bridging_es from "./locales/es/bridging.json";
import bridging_fr from "./locales/fr/bridging.json";
import bridging_hi from "./locales/hi/bridging.json";
import bridging_it from "./locales/it/bridging.json";
import bridging_ja from "./locales/ja/bridging.json";
import bridging_ko from "./locales/ko/bridging.json";
import bridging_pl from "./locales/pl/bridging.json";
import bridging_pt from "./locales/pt/bridging.json";
import bridging_ru from "./locales/ru/bridging.json";
import bridging_th from "./locales/th/bridging.json";
import bridging_tr from "./locales/tr/bridging.json";
import bridging_uk from "./locales/uk/bridging.json";
import bridging_vi from "./locales/vi/bridging.json";
import bridging_zh from "./locales/zh/bridging.json";


// Convertor
import convertor_en from "./locales/en/convertor.json";
import convertor_ar from "./locales/ar/convertor.json";
import convertor_de from "./locales/de/convertor.json";
import convertor_es from "./locales/es/convertor.json";
import convertor_fr from "./locales/fr/convertor.json";
import convertor_hi from "./locales/hi/convertor.json";
import convertor_it from "./locales/it/convertor.json";
import convertor_ja from "./locales/ja/convertor.json";
import convertor_ko from "./locales/ko/convertor.json";
import convertor_pl from "./locales/pl/convertor.json";
import convertor_pt from "./locales/pt/convertor.json";
import convertor_ru from "./locales/ru/convertor.json";
import convertor_th from "./locales/th/convertor.json";
import convertor_tr from "./locales/tr/convertor.json";
import convertor_uk from "./locales/uk/convertor.json";
import convertor_vi from "./locales/vi/convertor.json";
import convertor_zh from "./locales/zh/convertor.json";

// Convertor 2
import convertor2_en from "./locales/en/convertor2.json";
import convertor2_de from "./locales/de/convertor2.json";
import convertor2_es from "./locales/es/convertor2.json";
import convertor2_fr from "./locales/fr/convertor2.json";
import convertor2_it from "./locales/it/convertor2.json";
import convertor2_ja from "./locales/ja/convertor2.json";
import convertor2_ru from "./locales/ru/convertor2.json";
import convertor2_uk from "./locales/uk/convertor2.json";
import convertor2_zh from "./locales/zh/convertor2.json";
import convertor2_ar from "./locales/ar/convertor2.json";
import convertor2_hi from "./locales/hi/convertor2.json";
import convertor2_ko from "./locales/ko/convertor2.json";
import convertor2_pl from "./locales/pl/convertor2.json";
import convertor2_pt from "./locales/pt/convertor2.json";
import convertor2_th from "./locales/th/convertor2.json";


// Footer
import footer_en from "./locales/en/footer.json";
import footer_de from "./locales/de/footer.json";
import footer_es from "./locales/es/footer.json";
import footer_fr from "./locales/fr/footer.json";
import footer_it from "./locales/it/footer.json";
import footer_ja from "./locales/ja/footer.json";
import footer_ru from "./locales/ru/footer.json";
import footer_uk from "./locales/uk/footer.json";
import footer_zh from "./locales/zh/footer.json";
import footer_ar from "./locales/ar/footer.json";
import footer_hi from "./locales/hi/footer.json";
import footer_ko from "./locales/ko/footer.json";
import footer_pl from "./locales/pl/footer.json";
import footer_pt from "./locales/pt/footer.json";
import footer_th from "./locales/th/footer.json";
import footer_tr from "./locales/tr/footer.json";
import footer_vi from "./locales/vi/footer.json";
import footer_bn from "./locales/bn/footer.json";
import footer_ms from "./locales/ms/footer.json";
import footer_fa from "./locales/fa/footer.json";
import footer_he from "./locales/he/footer.json";
import footer_sw from "./locales/sw/footer.json";
import footer_nl from "./locales/nl/footer.json";
import footer_sv from "./locales/sv/footer.json";

// tradingmarket
import tradingmarket_en from "./locales/en/tradingmarket.json";
import tradingmarket_ar from "./locales/ar/tradingmarket.json";
import tradingmarket_de from "./locales/de/tradingmarket.json";
import tradingmarket_es from "./locales/es/tradingmarket.json";
import tradingmarket_fr from "./locales/fr/tradingmarket.json";
import tradingmarket_hi from "./locales/hi/tradingmarket.json";
import tradingmarket_it from "./locales/it/tradingmarket.json";
import tradingmarket_ja from "./locales/ja/tradingmarket.json";
import tradingmarket_ko from "./locales/ko/tradingmarket.json";
import tradingmarket_pl from "./locales/pl/tradingmarket.json";
import tradingmarket_pt from "./locales/pt/tradingmarket.json";
import tradingmarket_ru from "./locales/ru/tradingmarket.json";
import tradingmarket_th from "./locales/th/tradingmarket.json";
import tradingmarket_tr from "./locales/tr/tradingmarket.json";
import tradingmarket_uk from "./locales/uk/tradingmarket.json";
import tradingmarket_vi from "./locales/vi/tradingmarket.json";
import tradingmarket_zh from "./locales/zh/tradingmarket.json";

// MetaAltPad
import metaaltpad_en from "./locales/en/metaaltpad.json";
import metaaltpad_ar from "./locales/ar/metaaltpad.json";
import metaaltpad_de from "./locales/de/metaaltpad.json";
import metaaltpad_es from "./locales/es/metaaltpad.json";
import metaaltpad_fr from "./locales/fr/metaaltpad.json";
import metaaltpad_hi from "./locales/hi/metaaltpad.json";
import metaaltpad_it from "./locales/it/metaaltpad.json";
import metaaltpad_ja from "./locales/ja/metaaltpad.json";
import metaaltpad_ko from "./locales/ko/metaaltpad.json";
import metaaltpad_pl from "./locales/pl/metaaltpad.json";
import metaaltpad_pt from "./locales/pt/metaaltpad.json";
import metaaltpad_ru from "./locales/ru/metaaltpad.json";
import metaaltpad_th from "./locales/th/metaaltpad.json";
import metaaltpad_tr from "./locales/tr/metaaltpad.json";
import metaaltpad_uk from "./locales/uk/metaaltpad.json";
import metaaltpad_vi from "./locales/vi/metaaltpad.json";
import metaaltpad_zh from "./locales/zh/metaaltpad.json";

i18n.init({
  resources: {
    bn:{
      homepage: homepage_bn,
      footer: footer_bn,
      launchedpad: launchedpad_bn,
      earning: earning_bn,
      marketplace: marketplace_bn,
      vaults: vaults_bn,
      stacking: stacking_bn,
      win: win_bn,
    },
    ms:{
      homepage: homepage_ms,
      footer: footer_ms,
      launchedpad: launchedpad_ms,
      earning: earning_ms,
      marketplace: marketplace_ms,
      vaults: vaults_ms,
      stacking: stacking_ms,
      win: win_ms,
    },
    fa:{
      homepage: homepage_fa,
      footer: footer_fa,
      launchedpad: launchedpad_fa,
      earning: earning_fa,
      marketplace: marketplace_fa,
      vaults: vaults_fa,
      stacking: stacking_fa,
      win: win_fa,
    },
    he:{
      homepage: homepage_he,
      footer: footer_he,
      launchedpad: launchedpad_he,
      earning: earning_he,
      marketplace: marketplace_he,
      vaults: vaults_he,
      stacking: stacking_he,
      win: win_he,
    },
    sw:{
      homepage: homepage_sw,
      footer: footer_sw,
      launchedpad: launchedpad_sw,
      earning: earning_sw,
      marketplace: marketplace_sw,
      vaults: vaults_sw,
      stacking: stacking_sw,
      win: win_sw,
    },
    nl:{
      homepage: homepage_nl,
      footer: footer_nl,
      launchedpad: launchedpad_nl,
      earning: earning_nl,
      marketplace: marketplace_nl,
      vaults: vaults_nl,
      stacking: stacking_nl,
      win: win_nl,
    },
    sv:{
      homepage: homepage_sv,
      footer: footer_sv,
      launchedpad: launchedpad_sv,
      earning: earning_sv,
      marketplace: marketplace_sv,
      vaults: vaults_sv,
      stacking: stacking_sv,
      win: win_sv,
    },

    ar: {
      homepage: homepage_ar,
      launchedpad: launchedpad_ar,
      terms: terms_ar,
      bridging: bridging_ar,
      convertor: convertor_ar,
      convertor2: convertor2_ar,
      earning: earning_ar,
      vaults: vaults_ar,
      stacking: stacking_ar,
      win: win_ar,
      privacy: privacy_ar,
      footer: footer_ar,
      cookie: cookie_ar,
      marketplace: marketplace_ar,
      tradingmarket: tradingmarket_ar,
      metaaltpad: metaaltpad_ar,
    },
    de: {
      homepage: homepage_de,
      launchedpad: launchedpad_de,
      win: win_de,
      terms: terms_de,
      cookie: cookie_de,
      privacy: privacy_de,
      bridging: bridging_de,
      convertor: convertor_de,
      convertor2: convertor2_de,
      earning: earning_de,
      vaults: vaults_de,
      stacking: stacking_de,
      footer: footer_de,
      marketplace: marketplace_de,
      tradingmarket: tradingmarket_de,
      metaaltpad: metaaltpad_de,
    },
    en: {
      metaaltpad: metaaltpad_en,
      homepage: homepage_en,
      launchedpad: launchedpad_en,
      terms: terms_en,
      cookie: cookie_en,
      privacy: privacy_en,
      bridging: bridging_en,
      convertor: convertor_en,
      convertor2: convertor2_en,
      earning: earning_en,
      vaults: vaults_en,
      win: win_en,
      stacking: stacking_en,
      footer: footer_en,
      marketplace: marketplace_en,
      tradingmarket: tradingmarket_en,
    },
    es: {
      homepage: homepage_es,
      launchedpad: launchedpad_es,
      win: win_es,
      terms: terms_es,
      cookie: cookie_es,
      privacy: privacy_es,
      bridging: bridging_es,
      convertor: convertor_es,
      convertor2: convertor2_es,
      earning: earning_es,
      vaults: vaults_es,
      stacking: stacking_es,
      footer: footer_es,
      marketplace: marketplace_es,
      tradingmarket: tradingmarket_es,
      metaaltpad: metaaltpad_es,
    },
    fr: {
      homepage: homepage_fr,
      launchedpad: launchedpad_fr,
      win: win_fr,
      terms: terms_fr,
      cookie: cookie_fr,
      privacy: privacy_fr,
      bridging: bridging_fr,
      convertor: convertor_fr,
      convertor2: convertor2_fr,
      earning: earning_fr,
      vaults: vaults_fr,
      stacking: stacking_fr,
      footer: footer_fr,
      marketplace: marketplace_fr,
      tradingmarket: tradingmarket_fr,
      metaaltpad: metaaltpad_fr,
    },
    hi: {
      homepage: homepage_hi,
      launchedpad: launchedpad_hi,
      win: win_hi,
      terms: terms_hi,
      bridging: bridging_hi,
      convertor: convertor_hi,
      convertor2: convertor2_hi,
      earning: earning_hi,
      vaults: vaults_hi,
      stacking: stacking_hi,
      privacy: privacy_hi,
      cookie: cookie_hi,
      footer: footer_hi,
      marketplace: marketplace_hi, 
      tradingmarket: tradingmarket_hi,
      metaaltpad: metaaltpad_hi,
    },
    it: {
      homepage: homepage_it,
      launchedpad: launchedpad_it,
      win: win_it,
      terms: terms_it,
      cookie: cookie_it,
      privacy: privacy_it,
      bridging: bridging_it,
      convertor: convertor_it,
      convertor2: convertor2_it,
      earning: earning_it,
      vaults: vaults_it,
      stacking: stacking_it,
      footer: footer_it,
      marketplace: marketplace_it,
      tradingmarket: tradingmarket_it,
      metaaltpad: metaaltpad_it,
    },
    ja: {
      homepage: homepage_ja,
      launchedpad: launchedpad_ja,
      win: win_ja,
      terms: terms_ja,
      cookie: cookie_ja,
      privacy: privacy_ja,
      bridging: bridging_ja,
      convertor: convertor_ja,
      convertor2: convertor2_ja,
      earning: earning_ja,
      vaults: vaults_ja,
      stacking: stacking_ja,
      footer: footer_ja,
      tradingmarket: tradingmarket_ja,
      marketplace: marketplace_ja,
      metaaltpad: metaaltpad_ja,
    },
    ko: {
      homepage: homepage_ko,
      launchedpad: launchedpad_ko,
      terms: terms_ko,
      win: win_ko,
      bridging: bridging_ko,
      convertor: convertor_ko,
      convertor2: convertor2_ko,
      earning: earning_ko,
      vaults: vaults_ko,
      stacking: stacking_ko,
      privacy: privacy_ko,
      cookie: cookie_ko,
      marketplace: marketplace_ko,
      footer: footer_ko,
      tradingmarket: tradingmarket_ko,
      metaaltpad: metaaltpad_ko,
    },
    pl: {
      homepage: homepage_pl,
      launchedpad: launchedpad_pl,
      win: win_pl,
      terms: terms_pl,
      bridging: bridging_pl,
      convertor: convertor_pl,
      convertor2: convertor2_pl,
      earning: earning_pl,
      vaults: vaults_pl,
      stacking: stacking_pl,
      privacy: privacy_pl,
      footer: footer_pl,
      cookie: cookie_pl,
      marketplace: marketplace_pl,
      tradingmarket: tradingmarket_pl,
      metaaltpad: metaaltpad_pl,
    },
    pt: {
      homepage: homepage_pt,
      launchedpad: launchedpad_pt,
      win: win_pt,
      terms: terms_pt,
      bridging: bridging_pt,
      convertor: convertor_pt,
      convertor2: convertor2_pt,
      earning: earning_pt,
      vaults: vaults_pt,
      stacking: stacking_pt,
      privacy: privacy_pt,
      cookie: cookie_pt,
      marketplace: marketplace_pt,
      footer: footer_pt,
      tradingmarket: tradingmarket_pt,
      metaaltpad: metaaltpad_pt,
    },
    th: {
      homepage: homepage_th,
      launchedpad: launchedpad_th,
      terms: terms_th,
      win: win_th,
      bridging: bridging_th,
      convertor: convertor_th,
      convertor2: convertor2_th,
      earning: earning_th,
      vaults: vaults_th,
      stacking: stacking_th,
      privacy: privacy_th,
      cookie: cookie_th,
      footer: footer_th,
      marketplace: marketplace_th,
      tradingmarket: tradingmarket_th,
      metaaltpad: metaaltpad_th,
    },
    ru: {
      homepage: homepage_ru,
      launchedpad: launchedpad_ru,
      terms: terms_ru,
      win: win_ru,
      cookie: cookie_ru,
      privacy: privacy_ru,
      bridging: bridging_ru,
      convertor: convertor_ru,
      convertor2: convertor2_ru,
      earning: earning_ru,
      vaults: vaults_ru,
      stacking: stacking_ru,
      marketplace: marketplace_ru,
      footer: footer_ru,
      tradingmarket: tradingmarket_ru,
      metaaltpad: metaaltpad_ru,
    },
    uk: {
      homepage: homepage_uk,
      launchedpad: launchedpad_uk,
      win: win_uk,
      terms: terms_uk,
      cookie: cookie_uk,
      privacy: privacy_uk,
      bridging: bridging_uk,
      convertor: convertor_uk,
      convertor2: convertor2_uk,
      earning: earning_uk,
      vaults: vaults_uk,
      stacking: stacking_uk,
      footer: footer_uk,
      marketplace: marketplace_uk,
      tradingmarket: tradingmarket_uk,
      metaaltpad: metaaltpad_uk,
    },
    zh: {
      homepage: homepage_zh,
      launchedpad: launchedpad_zh,
      terms: terms_zh,
      cookie: cookie_zh,
      win: win_zh,
      privacy: privacy_zh,
      bridging: bridging_zh,
      convertor: convertor_zh,
      convertor2: convertor2_zh,
      earning: earning_zh,
      vaults: vaults_zh,
      footer: footer_zh,
      stacking: stacking_zh,
      marketplace: marketplace_zh,
      tradingmarket: tradingmarket_zh, 
      metaaltpad: metaaltpad_zh,
    },
    vi: {
      homepage: homepage_vi,
      launchedpad: launchedpad_vi,
      earning: earning_vi,
      vaults: vaults_vi,
      stacking: stacking_vi,
      win: win_vi,
      terms: terms_vi,
      privacy: privacy_vi,
      cookie: cookie_vi,
      bridging: bridging_vi,
      convertor: convertor_vi,
      footer: footer_vi,
      marketplace: marketplace_vi,
      tradingmarket: tradingmarket_vi,
      metaaltpad: metaaltpad_vi,
    },
    tr: {
      homepage: homepage_tr,
      launchedpad: launchedpad_tr,
      earning: earning_tr,
      vaults: vaults_tr,
      stacking: stacking_tr,
      win: win_tr,
      terms: terms_tr,
      privacy: privacy_tr,
      cookie: cookie_tr,
      bridging: bridging_tr,
      footer: footer_tr,
      convertor: convertor_tr,
      marketplace: marketplace_tr,
      tradingmarket: tradingmarket_tr,
      metaaltpad: metaaltpad_tr,
    },
  },


  lng: "en",  
  fallbackLng: "en",  
  interpolation: {
    escapeValue: false,  
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
