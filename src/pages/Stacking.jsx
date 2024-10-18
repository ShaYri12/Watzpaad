import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";

const Stacking = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [renQ, setRenQ] = useState(0);
  const cardData = [
    {
      id: 1,
      time: "Flexible",
      apy: "12%",
      totalStacked: "45,614,253.41",
    },
    {
      id: 2,
      time: "Flexible",
      apy: "75%",
      totalStacked: "85,000,000.01",
    },
    {
      id: 3,
      time: "Flexible",
      apy: "150%",
      totalStacked: "120,000,000",
    },
    {
      id: 4,
      time: "Flexible",
      apy: "150%",
      totalStacked: "96,000,000.23",
    },
    {
      id: 5,
      time: "Flexible",
      apy: "30%",
      totalStacked: "55,000,000",
    },
    {
      id: 6,
      time: "Flexible",
      apy: "75%",
      totalStacked: "68,000,000.82",
    },
  ];

  const handleRenQMinus = () => {
    if (renQ > 0) {
      setRenQ(renQ - 1);
    }
  };

  return (
    <div className="bg-[#09121D]">
      <div className="relative w-full md:pb-[90px] md:pt-[160px] pt-[120px] pb-[50px] block">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-[22px]">
          <h1 className="text-center text-primaryColor text-[35px] md:text-[65px] md:leading-[74.74px] leading-[45.44px] font-[700]">
            Stacking
          </h1>
          <div className="h-[3.65px] min-h-[3.65px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[9px] md:mt-[15px] mx-auto"></div>
          <p className="md:mt-[14px] mt-[11.55px] text-[10.94px] md:text-[18px] max-w-[801px] mx-auto text-center md:text-[#798DA3] text-white">
            Stake Tokens to earn with Automatic Compounding. Users can stake Any
            Token to earn MAP. Refer your friends to earn 5% on their extra
            rewards.
          </p>
        </div>
      </div>

      <div className="md:px-[22px] px-[12px] relative">
        <img
          src="/assets/stacking-bg-shade.png"
          className="w-full h-full absolute top-0 left-0 z-[1]"
        />
        <div className="max-w-[1280px] mx-auto relative z-[2]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] md:py-[80px] py-[57px]">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-[#1F2835CC] rounded-[13.09px] border-[2.6px] border-[#303945] flex flex-col sm:p-[11px] p-[9.28px]"
              >
                <div className="rounded-[6.55px] border border-primaryColor flex flex-col sm:gap-[28px] md:px-[12px] px-[10.12px] gap-[23.62px]">
                  <div className="flex items-center justify-center pb-[28px] border-b border-b-[#676767] md:pt-[39px] pt-[33.73px] xl:px-[28px] px-[8px]">
                    <div className="md:min-w-[90px] min-w-[75.91px] md:min-h-[90px] min-h-[75.91px]">
                      <img
                        src="/assets/icons/r-logo.png"
                        alt=""
                        className="md:w-[90px] w-[75.91px] md:h-[90px] h-[75.91px]"
                      />
                    </div>
                    <div>
                      <h2 className="text-primaryColor text-[23.29px] md:text-[27.61px] md:leading-[31.75px] font-[700]">
                        Stake RenQ
                      </h2>
                      <p className="text-[#798DA3] text-[15.18px] md:text-[18px]">
                        Stake RenQ -Flexible
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:gap-[28px] gap-[23.62px] sm:px-[25px] px-[15px] md:py-[7px]">
                    <div
                      className="bg-[#1F2835CC] md:rounded-[10px] rounded-[8.43px] md:px-[22.5px] px-[18.91px] md:py-[17px] py-[15.05px]"
                      style={{
                        boxShadow:
                          "-3.33px 3.33px 3.33px 0px #FFFFFF63 inset, 2.22px -2.22px 22.08px 0px #D6D6D62B inset",
                        backdropFilter: "blur(82.17px)",
                      }}
                    >
                      <div className="flex justify-between text-[#798DA3] md:text-[18px] md:leading-[20.7px] w-full font-[400]">
                        <span>APY</span>
                        <span>{card.apy}</span>
                      </div>
                      <div className="flex justify-between text-[#798DA3] w-full font-[400]">
                        <span>Time</span>
                        <span>{card.time}</span>
                      </div>
                    </div>

                    <div className="flex gap-1 justify-between items-center">
                      <div className="">
                        <p className="text-[#798DA3] text-[15.18px] md:text-[18px] md:leading-[20.7px]">
                          Staked RenQ
                        </p>
                        <p className="text-primaryColor text-[23.29px] md:text-[27.61px] md:leading-[31.75px] font-[700]">
                          {renQ} RenQ
                        </p>
                      </div>

                      <div className="flex flex-col items-center gap-[12.65px] md:gap-[15px] md:w-[109px] w-[91.93px]">
                        <div className="flex gap-2 w-full justify-between items-center">
                          <button
                            onClick={() => setRenQ(renQ + 1)}
                            className="md:w-[37.7px] md:min-w-[37.7px] min-w-[31.79px] w-[31.79px] h-[37.7px] md:min-h-[37.7px] min-h-[31.79px] h-[31.79px] bg-primaryColor rounded-full flex items-center justify-center"
                          >
                            <GoPlus className="text-black text-[20px]" />
                          </button>
                          <button
                            onClick={handleRenQMinus}
                            className="md:w-[37.7px] md:min-w-[37.7px] min-w-[31.79px] w-[31.79px] h-[37.7px] md:min-h-[37.7px] min-h-[31.79px] h-[31.79px] bg-[#878787] rounded-full flex items-center justify-center"
                          >
                            <LuMinus className="text-white text-[18px]" />
                          </button>
                        </div>
                        <button
                          className="bg-primaryColor text-black text-[12px] md:text-[14px] font-[400] py-3 px-[28px] w-full rounded-full"
                          style={{
                            boxShadow: "0px 2.85px 16.1px 0px #38DCC88C",
                          }}
                        >
                          Claim
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-1 justify-between items-center md:pb-[39px] pb-[33.73px]">
                      <p className="text-[#798DA3] text-[15.18px] md:text-[18px]">
                        Total Staked
                      </p>
                      <p className="text-primaryColor text-[15.18px] md:text-[18px]">
                        {card.totalStacked}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacking;
