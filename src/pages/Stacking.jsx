import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

const Stacking = () => {
  const cardData = [
    {
      id: 1,
      days: "30",
      apy: "30%",
    },
    {
      id: 2,
      days: "180",
      apy: "75%",
    },
    {
      id: 3,
      days: "365",
      apy: "150%",
    },
    {
      id: 4,
      days: "365",
      apy: "150%",
    },
    {
      id: 5,
      days: "30",
      apy: "30%",
    },
    {
      id: 6,
      days: "180",
      apy: "75%",
    },
  ];

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

      <div className="md:px-[22px] px-[12px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] md:py-[80px] py-[57px]">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-[#1F2835CC] rounded-[13.09px] border-[2.6px] border-[#303945] flex flex-col sm:p-[11px] p-[9.28px]"
              >
                <div className="rounded-[6.55px] border border-primaryColor flex flex-col sm:gap-[28px] px-[12px] gap-[23.62px]">
                  <div className="flex items-center justify-center pb-[28px] border-b border-b-[#676767] pt-[49px] px-[28px]">
                    <div className="w-[90px] h-[90px]">
                      <img
                        src="/assets/icons/r-logo.png"
                        alt=""
                        className="w-[90px] h-[90px]"
                      />
                    </div>
                    <div>
                      <h2 className="text-primaryColor text-[27.61px] md:leading-[31.75px] font-[700]">
                        Stake RenQ
                      </h2>
                      <p className="text-[#798DA3] md:text-[18px]">
                        Stake RenQ -Flexible
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:gap-[28px] gap-[23.62px] sm:px-[25px] px-[21px] py-[7px]">
                    <div
                      className="bg-[#1F2835CC] rounded-[10px] px-[22.5px] py-[17px] gap-1"
                      style={{
                        boxShadow:
                          "-3.33px 3.33px 3.33px 0px #FFFFFF63 inset, 2.22px -2.22px 22.08px 0px #D6D6D62B inset",
                        backdropFilter: "blur(82.17px)",
                      }}
                    >
                      <div className="flex justify-between text-[#798DA3] md:text-[18px] md:leading-[20.7px] mb-1">
                        <span>APY</span>
                        <span>Time</span>
                      </div>
                      <div className="flex justify-between text-white">
                        <span>12%</span>
                        <span>Flexible</span>
                      </div>
                    </div>

                    <div className="flex gap-1 justify-between items-center">
                      <div className="">
                        <p className="text-gray-400 text-sm mb-1">
                          Staked RenQ
                        </p>
                        <p className="text-primaryColor text-2xl font-bold">
                          0 RenQ
                        </p>
                      </div>

                      <div className="flex flex-col items-center gap-[15px]  h-[109px]">
                        <div className="flex gap-2 w-full justify-between items-center">
                          <button className="w-12 h-12 bg-primaryColor rounded-full flex items-center justify-center">
                            <FaPlus className="text-gray-900" />
                          </button>
                          <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                            <FaMinus className="text-gray-400" />
                          </button>
                        </div>
                        <button className="bg-primaryColor text-gray-900 font-bold py-3 px-6 rounded-full">
                          Claim
                        </button>
                      </div>
                    </div>

                    <div className="flex gap-1 justify-between items-center">
                      <p className="text-gray-400 text-sm mb-1">Total Staked</p>
                      <p className="text-white text-lg">45,614,253.41</p>
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
