import React, { useEffect } from "react";
import LaunchedPadHero from "../components/LaunchedPad/LaunchedPadHero";
import Tabs from "../components/LaunchedPad/Tabs";

const LaunchedPad = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <LaunchedPadHero />
      <Tabs />
    </div>
  );
};

export default LaunchedPad;
