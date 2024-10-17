import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import LaunchedPad from "../pages/LaunchedPad";
import TermsAndConditions from "../pages/TermsAndConditions";
import CookiePolicy from "../pages/CookiePolicy";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Bridging from "../pages/Bridging";
import BridgingConverter from "../pages/BridgingConvertor";
import UserLayout from "../layout/Layout"; // Assuming 'Layout' is actually 'UserLayout'
import Earnings from "../pages/Earnings";
import Marketplace from "../pages/Marketplace";
import Vault from "../pages/Vault";
import Stacking from "../pages/Stacking";
import Win from "../pages/Win";
import TradingMarket from "../pages/TradingMarket";
import BridgingConverter2 from "../pages/BridgingConvertorStep2";
import EarningsManager from "../pages/EarningManager";
import MetaAltPad from "../pages/MetaAltPad";
import SidebarLayout from "../layout/SidebarLayout";
import DashboardMarketPlace from "../pages/DashboardMarketPlace";
import DashboardTradingMarket from "../pages/DashboardTradingMarket";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* User Layout Routes */}
        <Route element={<UserLayout />}>
          <Route path="/home" element={<Navigate to="/" />} />
          <Route path="/" element={<Home />} />
          <Route path="/launchpad" element={<LaunchedPad />} />
          <Route path="/earnings" element={<Earnings />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/trading-market/:id" element={<TradingMarket />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="/stacking" element={<Stacking />} />
          <Route path="/win" element={<Win />} />
          <Route path="/metaAltPad" element={<MetaAltPad />} />
          <Route
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Route>

        {/* Bridging Layout Routes */}
        <Route element={<SidebarLayout />}>
          <Route path="/dashboard" element={<EarningsManager />} />
          <Route path="/bridging" element={<Bridging />} />
          <Route path="/bridging-convertor" element={<BridgingConverter />} />
          <Route
            path="/bridging-convertor-2"
            element={<BridgingConverter2 />}
          />
          <Route
            path="/dashboard-marketplace"
            element={<DashboardMarketPlace />}
          />
          <Route
            path="/dashboard-marketplace/trading-market/:id"
            element={<DashboardTradingMarket />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
