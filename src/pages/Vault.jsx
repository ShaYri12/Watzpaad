import React from "react";
import { BsCalculatorFill } from "react-icons/bs";
import { MdOutlineAutorenew } from "react-icons/md";

const Vault = () => {
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
      currency: "BUSD",
      compounded: "0.000 BUSD",
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
  ];

  return (
    <div className="bg-[#09121D]">
      <div className="relative w-full md:pb-[90px] md:pt-[160px] pt-[120px] pb-[50px] block">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-[22px]">
          <h1 className="text-center text-primaryColor text-[35px] md:text-[65px] md:leading-[74.74px] leading-[45.44px] font-[700]">
            Vaults
          </h1>
          <div className="h-[3.65px] min-h-[3.65px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[9px] md:mt-[7px] mx-auto"></div>
          <p className="md:mt-[14px] mt-[11.55px] text-[10.94px] md:text-[18px] max-w-[801px] mx-auto text-center md:text-[#798DA3] text-white">
            Stake Tokens to earn with Automatic Compounding. Users can stake Any
            Token to earn MAP. Refer your friends to earn 5% on their extra
            rewards.
          </p>
        </div>
      </div>

      <div className="md:px-[22px] px-[12px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] md:py-[80px] py-[57px]">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-[#1F2835CC] rounded-[13.09px] border-[2.6px] border-[#303945] flex flex-col sm:p-[11px] p-[9.28px]"
              >
                <div className="sm:px-[25px] px-[21px] sm:py-[35px] py-[32px] rounded-[6.55px] border border-primaryColor flex flex-col sm:gap-[27px] gap-[22.77px]">
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
                      Auto
                    </div>
                  </div>
                  <div className="flex items-center gap-1 justify-between">
                    <div className="sm:w-[96px] w-[80.97px] sm:h-[96px] h-[80.97px] rounded-full flex items-center justify-center">
                      <img src={card.imgSrc} alt={card.currency} />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <p className="text-[#798DA3] text-[15.18px] sm:text-[18px]">
                        Compounded
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
                      <span className="text-[#798DA3]">APY</span>
                      <span className="flex items-center text-white font-[700]">
                        <BsCalculatorFill
                          size={20}
                          className="md:mr-2 mr-1 text-primaryColor"
                        />
                        {card.apy}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[15.18px] sm:text-[18px] gap-1 flex-wrap border-b border-b-white border-opacity-20 md:pb-[12px] pb-[10.12px]">
                      <span className="text-[#798DA3]">Pending Earnings</span>
                      <span className="flex flex-col text-white font-[700]">
                        {card.pendingEarnings}
                        <span className="text-[#798DA3] font-[400]">
                          ~{card.pendingEarningsUSD}
                        </span>
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[15.18px] sm:text-[18px] gap-1 flex-wrap border-b border-b-white border-opacity-20 md:pb-[12px] pb-[10.12px]">
                      <span className="text-[#798DA3]">Auto Compound In</span>
                      <span className="text-white font-[700]">
                        {card.autoCompoundIn}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[15.18px] sm:text-[18px] gap-1 flex-wrap">
                      <span className="text-primaryColor">BNB Staked</span>
                      <span className="flex flex-col text-white font-[700]">
                        {card.staked}
                        <span className="text-[#798DA3] font-[400]">
                          ~{card.stakedUSD}
                        </span>
                      </span>
                    </div>
                  </div>
                  <button className="w-full bg-transparent hover:bg-primaryColor text-primaryColor hover:text-black sm:p-[15px] p-[12.65px] border border-primaryColor hover:border-transparent rounded-full transition duration-300 sm:text-[18px] text-[15.18px]">
                    Connect Wallet
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vault;
