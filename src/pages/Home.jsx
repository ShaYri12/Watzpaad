import React, { useEffect } from "react";
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
  const { t } = useTranslation("homepage");

  // Create an array of FAQs using the translation keys
  const faqData = [
    {
      question: t("faq.question-one"),
      answer: t("faq.answer-one"),
    },
    {
      question: t("faq.question-two"),
      answer: t("faq.answer-two"),
    },
    {
      question: t("faq.question-three"),
      answer: t("faq.answer-three"),
    },
    {
      question: t("faq.question-four"),
      answer: t("faq.answer-four"),
    },
    {
      question: t("faq.question-five"),
      answer: t("faq.answer-five"),
    },
    {
      question: t("faq.question-six"),
      answer: t("faq.answer-six"),
    },
  ];

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <Hero />

      <MarqueeSlider />

      <div className="relative">
        <img
          src="/assets/ecosystem-idos-bg-shade.png"
          className="w-full h-full absolute top-0 left-0 z-[1]"
        />
        <EcosystemsUtilities />

        <JoinIdos />
      </div>

      <ExclusiveBenefits />

      <BuyPresale />

      <RoadMap />

      <Tokenomics />

      <PoweredBy />

      {/* FAQ */}
      <div className="max-w-[1280px] mx-auto md:py-[83px] py-[57px]">
        <h2 className="mb-[62px] md:text-[50px] text-[35px] font-[700] md:leading-[57.5px] leading-[40.25px] text-white text-center px-[22px]">
          {t("faq.title")}
        </h2>
        <FAQSection faqData={faqData} />
      </div>
    </div>
  );
};

export default Home;
