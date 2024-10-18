"use client";
import React, { useEffect } from "react";
import Market from "../components/Market";

export default function Marketplace() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="bg-[#09121D]">
      <div className="relative w-full md:pb-[90px] md:pt-[200px] pt-[140px] pb-[50px] md:min-h-[380px] min-h-[270px]">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-[22px]">
          <h1 className="text-primaryColor text-[35px] text-center md:text-[65px] md:leading-[74.74px] leading-[40.25px] font-[700] relative z-[3] max-w-[587px] mx-auto">
            BlockBoost Marketplace
          </h1>
          <div className="h-[3.65px] min-h-[3.65px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[9px] md:mt-[10px] mx-auto"></div>
          <p className="md:mt-[14px] mt-[11.55px] text-[10.94px] md:text-[18px] text-white max-w-[801px] mx-auto text-center">
            BlockBoost having it’s unique NFT Marketplace features allows the
            digital artist to sell their art in any cryptocurrency also allows
            to place Auction, Trades and Many other ways to earn.
          </p>
          <div className="flex flex-wrap gap-[16.43px] md:gap-[23px] relative z-[3] max-w-[587px] mx-auto md:mt-[26px] mt-[24px]">
            <button className="flex-grow bg-primaryColor hover:bg-teal-300 w-[121.8px] md:w-[170.51px] text-[11.36px] md:text-[15.9px] transition py-[9.4px] md:py-[13px] text-black px-4 rounded-full">
              Create NFT
            </button>
            <button className="flex-grow bg-transparent hover:bg-gray-700 hover:bg-opacity-[0.3] text-primaryColor w-[121.8px] md:w-[170.51px] text-[11.36px] md:text-[15.9px] transition py-[9.4px] md:py-[13px] px-4 rounded-full border border-primaryColor">
              Sell NFT
            </button>
          </div>
        </div>
      </div>
      <div className="px-[20px] md:py-[83px] py-[57px]">
        <Market />
      </div>
    </div>
  );
}
