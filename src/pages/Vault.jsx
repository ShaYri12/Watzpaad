import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import VaultCards from "../components/VaultCards";

const Vault = () => {
  const { t } = useTranslation("vaults");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="bg-[#09121D]">
      <div className="relative w-full md:pb-[90px] md:pt-[160px] pt-[120px] pb-[50px] block">
        <img
          src="/assets/bg-stars-shades.png"
          className="w-full h-full object-cover absolute top-0 left-0 z-[1]"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-[22px] z-[3]">
          <h1 className="text-center text-primaryColor text-[35px] md:text-[65px] md:leading-[74.74px] leading-[45.44px] font-[700]">
            {t("title")}
          </h1>
          <div
            className="h-[3.65px] min-h-[3.65px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[9px] md:mt-[7px] mx-auto"
            aria-label={t("dividerAria")}
          ></div>
          <p className="md:mt-[14px] mt-[11.55px] text-[10.94px] md:text-[18px] max-w-[801px] mx-auto text-center text-white">
            {t("subtitle")}
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b  to-[rgba(9, 18, 29, 0)] from-[#09121D] z-[2]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#09121D] to-[rgba(9, 18, 29, 0)] z-[2]"></div>
      </div>

      <div className="md:px-[22px] px-[12px] relative">
        <img
          src="/assets/vaults-bg-shade.png"
          className="w-full h-full absolute top-0 left-0 z-[1]"
        />
        <div className="relative z-[2]">
          <VaultCards />
        </div>
      </div>
    </div>
  );
};

export default Vault;
