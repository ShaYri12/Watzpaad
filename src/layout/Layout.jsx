import React from "react";
import Header from "../components/Header"; // Your custom header
import Footer from "../components/Footer"; // Your custom footer
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
