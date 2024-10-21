"use client";
import React, { useEffect } from "react";
import Market from "../components/Market";
import { useTranslation } from 'react-i18next';

export default function Marketplace() {
  const { t } = useTranslation("marketplace");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="bg-[#09121D]">
      <div className="relative w-full md:pb-[70px] md:pt-[240px] pt-[140px] pb-[50px] md:min-h-fit min-h-[270px]">
        <img
          src="/assets/bg-stars-shades.png"
          className="w-full h-full object-cover absolute top-0 left-0 z-[1]"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-[22px] z-[3]">
          <h1 className="text-primaryColor text-[35px] text-center md:text-[65px] md:leading-[74.74px] leading-[40.25px] font-[700] relative z-[3] mx-auto">
            {t('title')}
          </h1>
          <div className="h-[3.65px] min-h-[3.65px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[9px] md:mt-[10px] mx-auto"></div>
          <p className="md:mt-[14px] mt-[11.55px] text-[10.94px] md:text-[18px] text-white max-w-[801px] mx-auto text-center">
            {t('description')}
          </p>
          <div className="flex flex-wrap gap-[16.43px] md:gap-[23px] relative z-[3] max-w-[587px] mx-auto md:mt-[26px] mt-[24px]">
            <button className="flex-grow bg-primaryColor hover:bg-teal-300 w-[121.8px] md:w-[170.51px] text-[11.36px] md:text-[15.9px] transition py-[9.4px] md:py-[13px] text-black px-4 rounded-full">
              {t('createNFT')}
            </button>
            <button className="flex-grow bg-transparent hover:bg-gray-700 hover:bg-opacity-[0.3] text-primaryColor w-[121.8px] md:w-[170.51px] text-[11.36px] md:text-[15.9px] transition py-[9.4px] md:py-[13px] px-4 rounded-full border border-primaryColor">
              {t('sellNFT')}
            </button>
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b to-[rgba(9, 18, 29, 0)] from-[#09121D] z-[2]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#09121D] to-[rgba(9, 18, 29, 0)] z-[2]"></div>
      </div>
      <div className="px-[20px] md:py-[83px] py-[57px] relative">
        <img
          src="/assets/marketplace-bg-shade.png"
          className="w-full h-full absolute top-0 left-0 z-[1]"
        />
        <div className="relative z-[2]">
          <Market />
        </div>
      </div>
    </div>
  );
}
