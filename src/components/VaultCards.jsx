import React, { useEffect } from "react";
import { BsCalculatorFill } from "react-icons/bs";
import { MdOutlineAutorenew } from "react-icons/md";
import { useTranslation } from "react-i18next";

const VaultCards = ({ dashboard = false }) => {
  const { t } = useTranslation("vaults");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const cardData = [
    {
      id: 1,
      currency: "BUSD",
      compounded: "0.000 BUSD",
      compoundedUSD: "$0.000",
      apy: "187%",
      pendingEarnings: "0.000",
      pendingEarningsUSD: "$0.000",
      autoCompoundIn: "00:00",
      staked: "-----",
      stakedUSD: "$0.000",
      imgSrc: "/assets/icons/busd.png",
    },
    {
      id: 2,
      currency: "BNB",
      compounded: "0.000 BNB",
      compoundedUSD: "$0.000",
      apy: "253%",
      pendingEarnings: "0.000",
      pendingEarningsUSD: "$0.000",
      autoCompoundIn: "00:00",
      staked: "-----",
      stakedUSD: "$0.000",
      imgSrc: "/assets/icons/bnb.png",
    },
    {
      id: 3,
      currency: "Shib",
      compounded: "0.000 ETH",
      compoundedUSD: "0.000",
      apy: "452%",
      pendingEarnings: "0.000",
      pendingEarningsUSD: "$0.000",
      autoCompoundIn: "00:00",
      staked: "0.000",
      stakedUSD: "$0.000",
      imgSrc: "/assets/icons/shib.png",
    },
    {
      id: 4,
      currency: "ADA",
      compounded: "0.000 ADA",
      compoundedUSD: "$0.000",
      apy: "253%",
      pendingEarnings: "0.000",
      pendingEarningsUSD: "$0.000",
      autoCompoundIn: "00:00",
      staked: "-----",
      stakedUSD: "$0.000",
      imgSrc: "/assets/icons/ada.png",
    },
    {
      id: 5,
      currency: "ETH",
      compounded: "0.000 ETH",
      compoundedUSD: "0.000",
      apy: "150%",
      pendingEarnings: "0.000",
      pendingEarningsUSD: "$0.000",
      autoCompoundIn: "00:00",
      staked: "0.000",
      stakedUSD: "$0.000",
      imgSrc: "/assets/icons/eth.png",
    },
    {
      id: 6,
      currency: "DOGE",
      compounded: "0.000 DOGE",
      compoundedUSD: "0.000",
      apy: "150%",
      pendingEarnings: "0.000",
      pendingEarningsUSD: "$0.000",
      autoCompoundIn: "00:00",
      staked: "0.000",
      stakedUSD: "$0.000",
      imgSrc: "/assets/icons/doge.png",
    },
  ];

  return (
    <div className="max-w-[1280px] mx-auto">
      <div
        className={`grid grid-cols-1 md:grid-cols-2 ${
          dashboard ? "xl:grid-cols-3" : "lg:grid-cols-3"
        } gap-[22px] md:py-[80px] py-[57px]`}
      >
        {cardData.map((card) => (
          <div
            key={card.id}
            className="bg-[#1F2835CC] rounded-[13.09px] border-[2.6px] border-[#303945] flex flex-col sm:p-[11px] p-[9.28px]"
          >
            <div className="card-border p-[1.96px] w-full">
              <div className="sm:px-[25px] px-[21px] sm:py-[35px] py-[32px] rounded-[6.55px] flex flex-col sm:gap-[27px] gap-[22.77px] relative z-[2] w-full">
                <div className="flex justify-between items-center ">
                  <h2 className="text-[25.3px] sm:text-[30px] font-[700] text-white">
                    {card.currency}
                  </h2>
                  <div className="flex items-center gap-1 bg-primaryColor text-black text-[13.06px] sm:text-[15.48px]  px-[9.5px] py-[3px] rounded-full">
                    <span className="rounded-full w-[17px] h-[17px] flex items-center justify-center border border-black">
                      <MdOutlineAutorenew
                        size={12}
                        className="rotate-[90deg]"
                      />
                    </span>
                    {t("auto")}
                    
                  </div>
                </div>
                <div className="flex items-center gap-1 justify-between">
                  <div className="sm:w-[96px] w-[80.97px] sm:h-[96px] h-[80.97px] rounded-full flex items-center justify-center">
                    <img src={card.imgSrc} alt={card.currency} />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[#798DA3] text-[15.18px] sm:text-[18px]">
                      
                      {t("compounded")}
                    </p>
                    <p className="text-primaryColor text-[23.29px] sm:text-[27.61px] font-[700]">
                      {card.compounded}
                    </p>
                    <p className="text-[#798DA3] text-[15.18px] sm:text-[18px]">
                      ~{card.compoundedUSD}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col md:gap-[12px] gap-[10.12px]">
                  <div className="flex items-center justify-between text-[15.18px] sm:text-[18px] gap-1 flex-wrap border-b border-b-white border-opacity-20 md:pb-[12px] pb-[10.12px]">
                    <span className="text-[#798DA3]">{t("apy")}</span>
                    <span className="flex items-center text-white font-[700]">
                      <BsCalculatorFill
                        size={20}
                        className="md:mr-2 mr-1 text-primaryColor"
                      />
                      {card.apy}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[15.18px] sm:text-[18px] gap-1 flex-wrap border-b border-b-white border-opacity-20 md:pb-[12px] pb-[10.12px]">
                    <span className="text-[#798DA3]">{t("pending-earnings")}</span>
                    <span className="flex flex-col text-white font-[700]">
                      {card.pendingEarnings}
                      <span className="text-[#798DA3] font-[400]">
                        ~{card.pendingEarningsUSD}
                      </span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[15.18px] sm:text-[18px] gap-1 flex-wrap border-b border-b-white border-opacity-20 md:pb-[12px] pb-[10.12px]">
                    <span className="text-[#798DA3]">{t("auto-compound")}</span>
                    <span className="text-white font-[700]">
                      {card.autoCompoundIn}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-[15.18px] sm:text-[18px] gap-1 flex-wrap">
                    <span className="text-primaryColor">{card.currency}</span>
                    <span className="flex flex-col text-white font-[700]">
                      {card.staked}
                      <span className="text-[#798DA3] font-[400]">
                        ~{card.stakedUSD}
                      </span>
                    </span>
                  </div>
                </div>
                <button className="w-full bg-transparent hover:bg-primaryColor text-primaryColor hover:text-black sm:p-[15px] p-[12.65px] border border-primaryColor hover:border-transparent rounded-full transition duration-300 sm:text-[18px] text-[15.18px]">
                  {t("connect-wallet")}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VaultCards;
