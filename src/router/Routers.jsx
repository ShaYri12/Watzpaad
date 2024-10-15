import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import LaunchedPad from "../pages/LaunchedPad";
import TermsAndConditions from "../pages/TermsAndConditions";
import CookiePolicy from "../pages/CookiePolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Bridging from "../pages/Bridging";
import BridgingConverter from "../pages/BridgingConvertor";
import Layout from "../layout/Layout"; // Import your layout
import Earnings from "../pages/Earnings";
import Marketplace from "../pages/Marketplace";
import Vault from "../pages/Vault";
import Stacking from "../pages/Stacking";
import Win from "../pages/Win";
import TradingMarket from "../pages/TradingMarket";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route
        path="/"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/launchpad"
        element={
          <Layout>
            <LaunchedPad />
          </Layout>
        }
      />
      <Route
        path="/earnings"
        element={
          <Layout>
            <Earnings />
          </Layout>
        }
      />
      <Route
        path="/marketplace"
        element={
          <Layout>
            <Marketplace />
          </Layout>
        }
      />
      <Route
        path="/trading-market/:id"
        element={
          <Layout>
            <TradingMarket />
          </Layout>
        }
      />
      <Route
        path="/vault"
        element={
          <Layout>
            <Vault />
          </Layout>
        }
      />
      <Route
        path="/stacking"
        element={
          <Layout>
            <Stacking />
          </Layout>
        }
      />
      <Route
        path="/Win"
        element={
          <Layout>
            <Win />
          </Layout>
        }
      />
      <Route
        path="/terms-and-conditions"
        element={
          <Layout>
            <TermsAndConditions />
          </Layout>
        }
      />
      <Route
        path="/cookie-policy"
        element={
          <Layout>
            <CookiePolicy />
          </Layout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <Layout>
            <PrivacyPolicy />
          </Layout>
        }
      />
      <Route path="/bridging" element={<Bridging />} />
      <Route path="/bridging-convertor" element={<BridgingConverter />} />
    </Routes>
  );
};

export default Routers;
