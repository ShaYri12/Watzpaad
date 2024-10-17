import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";

const SidebarLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <DashboardHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default SidebarLayout;
