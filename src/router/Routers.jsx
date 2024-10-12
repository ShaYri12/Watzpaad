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
import Vaults from "../pages/Vaults";

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
        path="/vault"
        element={
          <Layout>
            <Vaults />
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
