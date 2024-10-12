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
      <div className="relative w-full md:h-[500px] h-[362px]">
        <img
          src="/assets/vaults.png"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col text-center items-center justify-center">
          <h1 className="text-center text-primaryColor text-[35px] md:text-[65px] font-[700]">
            Stacking
          </h1>
        </div>
        <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b  to-[rgba(9, 18, 29, 0)] from-[#09121D]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#09121D] to-[rgba(9, 18, 29, 0)]"></div>
      </div>

      <div className="md:px-[22px] px-[12px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col items-center justify-center pt-[25px]">
            <h2 className="text-[33.63px] md:text-[50px] font-[700] text-white text-center">
              Welcome to Staking
            </h2>
            <p className="mt-[14.8px] text-[#798DA3] text-[12px] md:text-[18px] font-[300] text-center">
              Stake Tokens to earn with Automatic Compounding. Users can stake
              Any Token to earn MAP. Refer your friends to earn 5% on their
              extra rewards.
            </p>
          </div>
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
