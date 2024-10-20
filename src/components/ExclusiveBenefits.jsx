import React from "react";
import PresaleRewards from "../assets/presale-rewards.svg";
import ReferralRewards from "../assets/referral-rewards.svg";
import TradingRewards from "../assets/trading-rewards.svg";
import VaultStackingRewards from "../assets/vault-stacking-rewards.svg";
import StackingRewards from "../assets/stacking-rewards.svg";
import BG from "../assets/bottom-mage.png";
import BGOne from "../assets/top-mage.png";
import Center from "../assets/center-mage.png";
import { useTranslation } from "react-i18next";

const ExclusiveBenefits = () => {
  const { t } = useTranslation("homepage");
  return (
    <div className="overflow-hidden bg-image px-6 py-10 w-full relative">
      <img
        src="/assets/exclusive-benefit-bg-shade.png"
        className="w-full h-full absolute top-0 left-0 z-[1]"
      />
      <div className="text-white  z-20 w-full absolute left-0 h-[300px] -bottom-5">
        <img src={BG} alt="bg" className="lg:block hidden" />
      </div>
      <div className="text-white  w-full absolute min-h-[300px] top-0">
        <img src={BGOne} alt="bg" />
      </div>
      <div className="text-white  h-[300px] w-[900px] rounded-full -top-32 left-[15%] absolute ">
        <img src={Center} alt="bg" className="rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1280px] m-auto w-full">
        <h1 className="text-[35px] capitalize sm:text-[50px] sm:leading-[57.5px] text-white font-bold max-w-[675px] mx-auto text-center">
          {t("exclusive-benefits.title")}
        </h1>
        <div className="mt-[30px] flex-wrap flex justify-center gap-12">
          <div
            className="md:h-[405px] w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="card-border w-full h-full p-[2px]">
              <div className="p-[18px] flex items-center flex-col text-center rounded-md relative z-[2] w-full h-full">
                <img src={PresaleRewards} alt="launchpad" />
                <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                  {t("exclusive-benefits.box-one-title")}
                </h2>
                <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                  {t("exclusive-benefits.box-one-description")}
                </p>
              </div>
            </div>
          </div>
          <div
            className="md:h-[405px] w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="card-border w-full h-full p-[2px]">
              <div className="p-[18px] flex items-center flex-col text-center rounded-md relative z-[2] w-full h-full">
                <img src={ReferralRewards} alt="launchpad" />
                <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                  {t("exclusive-benefits.box-two-title")}
                </h2>
                <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                  {t("exclusive-benefits.box-two-description")}
                </p>
              </div>
            </div>
          </div>
          <div
            className="md:h-[405px] w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="card-border w-full h-full p-[2px]">
              <div className="p-[18px] flex items-center flex-col text-center rounded-md relative z-[2] w-full h-full">
                <img src={TradingRewards} alt="launchpad" />
                <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                  {t("exclusive-benefits.box-three-title")}
                </h2>
                <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                  {t("exclusive-benefits.box-three-description")}
                </p>
              </div>
            </div>
          </div>
          <div
            className="md:h-[405px] w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="card-border w-full h-full p-[2px]">
              <div className="p-[18px] flex items-center flex-col text-center rounded-md relative z-[2] w-full h-full">
                <img
                  src={VaultStackingRewards}
                  alt="launchpad"
                  className="mb-1"
                />
                <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                  {t("exclusive-benefits.box-four-title")}
                </h2>
                <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                  {t("exclusive-benefits.box-four-description")}
                </p>
              </div>
            </div>
          </div>
          <div
            className="md:h-[405px] w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="card-border w-full h-full p-[2px]">
              <div className="p-[18px] flex items-center flex-col text-center rounded-md relative z-[2] w-full h-full">
                <img src={StackingRewards} alt="launchpad" />
                <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                  {t("exclusive-benefits.box-five-title")}
                </h2>
                <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                  {t("exclusive-benefits.box-five-description")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveBenefits;
