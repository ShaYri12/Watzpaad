import React from "react";
import TokenomicsChart from "../assets/tokenoms-hart.svg";
import { useTranslation } from "react-i18next";

const Tokenomics = () => {
  const { t } = useTranslation("homepage");
  return (
    <div className="w-full">
      {/* Token Details */}
      <div className="w-full mt-20 relative px-4">
        <img
          src="/assets/token-details-bg-shade.png"
          className="w-full h-full absolute top-0 left-0 z-[1]"
        />
        <div className="relative z-[2]">
          <div className="text-center text-white w-full max-w-[769px] mx-auto ">
            <h2 className="text-[50px] leading-[57px] font-bold mb-4">
              {t("tokenomics.title")}
            </h2>
            <p className="text-[18px] leading-[24px] font-light font-space">
              {t("tokenomics.description")}
            </p>
          </div>
          <div className=" h-full max-w-[1240px] mx-auto w-full mt-12 flex lg:flex-row flex-col gap-5 items-center">
            <div className="h-full text-white flex flex-col gap-4 w-full bg-custom-one border border-[#38DCC8] rounded-[22.77px] px-5 sm:px-8 py-6 sm:py-7 max-w-[816px] mx-auto">
              <div className="grid grid-cols-2 sm:flex justify-between flex-wrap gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-[16px] sm:text-[24px] font-bold">
                    {t("tokenomics.name")}
                  </h2>
                  <h4 className="text-[14px] sm:text-[16px] leading-[26px] font-normal font-space">
                    {t("tokenomics.boost-token")}
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[16px] sm:text-[24px] font-bold">
                    {t("tokenomics.symbol")}
                  </h2>
                  <h4 className="text-[14px] sm:text-[16px] leading-[26px] font-normal font-space">
                    $BBT
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[16px] sm:text-[24px] font-bold">
                    {t("tokenomics.supply")}
                  </h2>
                  <h4 className="text-[14px] sm:text-[16px] leading-[26px] font-normal font-space">
                    1 {t("tokenomics.billion")}
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[16px] sm:text-[24px] font-bold">
                    {t("tokenomics.tax")}
                  </h2>
                  <h4 className="text-[14px] sm:text-[16px] leading-[26px] font-normal font-space">
                    2% {t("tokenomics.buy-sell")}
                  </h4>
                </div>
              </div>
              <div className="sm:mt-4 grid grid-cols-2 sm:flex justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <h2 className="text-[16px] sm:text-[24px] font-bold">
                    {t("tokenomics.type")}
                  </h2>
                  <h4 className="text-[14px] sm:text-[16px] leading-[26px] font-normal font-space">
                    ERC20
                  </h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[16px] sm:text-[24px] font-bold">
                    {t("tokenomics.token-contract-address")}
                  </h2>
                  <h4 className="text-[14px] sm:text-[16px] leading-[26px] font-normal font-space"></h4>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-[16px] sm:text-[24px] font-bold">
                    {t("tokenomics.decimal")}
                  </h2>
                  <h4 className="text-[14px] sm:text-[16px] leading-[26px] font-normal font-space">
                    18
                  </h4>
                </div>
              </div>
            </div>
            <div className="text-white h-full w-full flex flex-col justify-between gap-[25px] bg-custom-one border border-[#38DCC8] rounded-[22.77px] px-5 sm:px-8 py-6 sm:py-7 max-w-[400px] mx-auto">
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[16px] leading-[19px] font-bold">
                  {t("tokenomics.presale-details")}
                </h2>
                <h4 className="text-[#FFFFFF70] text-[12px] leading-[17px] font-normal">
                  {t("tokenomics.live")}
                </h4>
              </div>
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[16px] leading-[19px] font-bold">
                  {t("tokenomics.current-price")}
                </h2>
                <h4 className="text-[#FFFFFF70] text-[12px] leading-[17px] font-normal">
                  1 $BBT = $0.001
                </h4>
              </div>
              <div className="flex flex-col gap-0.5">
                <h2 className="text-[16px] leading-[19px] font-bold">
                  {t("tokenomics.listing-price")}
                </h2>
                <h4 className="text-[#FFFFFF70] text-[12px] leading-[17px] font-normal">
                  1 $BBT = $0.02
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Token Chart */}
      <div className="mt-1 bg-tokenomics-image px-4 relative">
        <img
          src="/assets/tokenomics-bg-shade.png"
          className="w-full h-full absolute top-0 left-0 z-[1]"
        />
        <div className="relative z-[2]">
          <h1 className="pt-10 sm:pt-20 text-[35px] sm:text-[50px] sm:leading-[57.5px] text-white font-bold max-w-[735px] mx-auto text-center">
            {t("tokenomics.title-two")}
          </h1>

          <div className="py-5 md:py-20 w-full max-w-[888px] mx-auto">
            <img src={TokenomicsChart} alt="tokenoms-chart" />
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-[#798DA3] font-space text-[20px] sm:text-[30px]">
              {t("tokenomics.total-supply")}
            </h2>
            <h1 className="text-[#38DCC8] text-[35px] sm:text-[50px] font-bold">
              1,000,000,000
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tokenomics;
