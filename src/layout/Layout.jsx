import React from "react";
import Header from "../components/Header"; // Your custom header
import Footer from "../components/Footer"; // Your custom footer

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
