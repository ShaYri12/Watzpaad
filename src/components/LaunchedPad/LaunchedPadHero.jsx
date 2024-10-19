import React from "react";
import { useTranslation } from "react-i18next";

const LaunchedPadHero = () => {
  const { t } = useTranslation("launchedpad");
  return (
    <section className="bg-dark-blue text-white px-[22px] md:pt-[120px] pt-[20px] sm:pt-[30px] md:pb-[120px] sm:pb-[50px] pb-[40px] overflow-hidden relative">
      <img
        src="/assets/launchpad-bg.png"
        className="absolute top-0 left-0 w-full z-[1] object-cover md:h-fit sm:h-full h-[100%] object-top"
      />

      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-[10px] relative z-[2] md:pt-0 pt-[20px]">
        {/* Left Section */}
        <div className="max-w-[979px] mx-auto text-center">
          <h1 className=" capitalize md:text-[65px] text-[31.27px] md:leading-[74.74px] leading-[35.96px] font-[700] text-primaryColor">
            {t("hero.title")}
          </h1>
          <div className="h-[3.04px] min-h-[3px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[7px] md:mt-[15px] mx-auto"></div>
          <p className="md:mt-[14px] mt-[7px] text-[8.66px] md:text-[18px] text-white max-w-[801px] mx-auto">
            {t("hero.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default LaunchedPadHero;
