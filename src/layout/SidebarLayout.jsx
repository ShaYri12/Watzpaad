import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const SidebarLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default SidebarLayout;
