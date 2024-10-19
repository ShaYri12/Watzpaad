import React, { useEffect } from "react";
import LaunchedPadHero from "../components/LaunchedPad/LaunchedPadHero";
import Tabs from "../components/LaunchedPad/Tabs";
import { useTranslation } from "react-i18next";

const LaunchedPad = () => {
  const { t } = useTranslation("launchedpad");
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
