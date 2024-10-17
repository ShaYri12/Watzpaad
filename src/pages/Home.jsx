import React from "react";
import Hero from "../components/Hero";
import FAQSection from "../components/FAQSection";
import MarqueeSlider from "../components/MarqueeSlider";
import EcosystemsUtilities from "../components/EcosystemsUtilities";
import ExclusiveBenefits from "../components/ExclusiveBenefits";
import PoweredBy from "../components/PoweredBy";
import Tokenomics from "../components/Tokenomics";
import JoinIdos from "../components/JoinIdos";
import BuyPresale from "../components/BuyPresale";
import RoadMap from "../components/RoadMap";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation("faq");
  return (
    <div>
      <Hero />

      <MarqueeSlider />

      <EcosystemsUtilities />

      <JoinIdos />

      <ExclusiveBenefits />

      <BuyPresale />

      <RoadMap />

      <Tokenomics />

      <PoweredBy />

      {/* FAQ */}
      <div className="max-w-[1280px] mx-auto md:py-[83px] py-[57px]">
        <h2 className="mb-[62px] md:text-[50px] text-[35px] font-[700] md:leading-[57.5px] leading-[40.25px] text-white text-center px-[22px]">
          {t("faq_title")}
        </h2>
        <FAQSection />
      </div>
    </div>
  );
};

export default Home;
