import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import LaunchedPad from "../pages/LaunchedPad";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Navigate to="/" />} />
      <Route path="/" element={<Home />} />
      <Route path="/launchpad" element={<LaunchedPad />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default Routers;
