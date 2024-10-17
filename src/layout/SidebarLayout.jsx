import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";

const SidebarLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <div className="hidden md:block md:w-[17%]">
        <Sidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default SidebarLayout;
