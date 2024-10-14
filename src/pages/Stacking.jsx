import React from "react";
import { RiTokenSwapLine } from "react-icons/ri";

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
                className="bg-primaryColor rounded-2xl shadow-lg overflow-hidden"
              >
                <div className="bg-primaryColor p-[25px] flex items-center">
                  <RiTokenSwapLine className="text-4xl text-orange-400 mr-3" />
                  <div>
                    <h2 className="text-white text-xl font-bold">Stake RenQ</h2>
                    <p className="text-white text-sm">
                      Stake RenQ - {card.days} days
                    </p>
                  </div>
                </div>
                <div className="px-[35px] py-[19px] bg-[#1F2835] rounded-t-3xl">
                  <div className="bg-primaryColor bg-opacity-[0.1] rounded-lg p-3 mb-4 flex justify-between">
                    <div>
                      <p className="text-primaryColor">APY</p>
                      <p className="text-primaryColor">Time</p>
                    </div>
                    <div className="text-right">
                      <p className="text-primaryColor">{card.apy}%</p>
                      <p className="text-primaryColor">{card.days} days</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-300 mb-1">Staked RenQ</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xl text-white font-bold">0 RenQ</p>
                      <button className="bg-primaryColor bg-opacity-[0.1] text-primaryColor rounded-full w-8 h-8 flex items-center justify-center font-bold text-xl">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="mb-4">
                    <p className="text-gray-300 mb-1">EARNED RenQ</p>
                    <div className="flex justify-between items-center">
                      <p className="text-xl text-white font-bold">0 RenQ</p>
                      <button className="bg-primaryColor text-black rounded-full px-6 py-2 font-bold">
                        Claim
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between text-gray-300">
                    <p>Total staked</p>
                    <p>0</p>
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
