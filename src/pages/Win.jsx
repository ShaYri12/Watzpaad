import React, { useEffect } from "react";
import { FaGlobe } from "react-icons/fa";

export default function Win() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-[#09121D]">
      <div className="relative w-full md:pb-[90px] md:pt-[160px] pt-[120px] pb-[50px] block">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-[22px]">
          <h1 className="text-center text-primaryColor text-[35px] md:text-[65px] md:leading-[74.74px] leading-[45.44px] font-[700]">
            Rexas Millionaire Giveaway
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
          <div className="bg-[#1F2835CC] text-white px-[15px] py-[12px] rounded-lg mb-[73px]">
            <div className="border border-primaryColor rounded-[6.42px] px-6 py-[32px]">
              <div className="flex flex-col gap-[24px] max-w-[956px] mx-auto">
                <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 text-primaryColor">
                  🎉 Rexas Finance $1,000,000 Giveaway 🎁
                </h1>
                <p className="text-center text-[#798DA3] mb-4">
                  We're excited to announce the launch of Rexas Finance with an
                  amazing chance for 20 lucky winners to win $50,000 USDT each!
                  🌟
                </p>
                <p className="text-center text-[#798DA3] font-semibold mb-4">
                  ✨ Join now and share with your friends for a chance to win!
                  ✨
                </p>
                <p className="text-center text-primaryColor mb-6">
                  Note: A minimum $100 participation in the Rexas Finance
                  Presale is required to be eligible.
                </p>
                <p className="text-center text-white text-xl font-bold">
                  👉 Join now and secure your spot among the winners! 🚀
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-6 mb-8">
            {[
              {
                step: "01",
                title: "Submit Your ERC20 Wallet Address",
                description:
                  "Provide your ERC20 Wallet address to qualify for the giveaway.",
              },
              {
                step: "02",
                title: "Complete All the Quests",
                description:
                  "Follow all the steps carefully to maximize your chance of winning. Don't miss any!",
              },
              {
                step: "03",
                title: "Refer Friends and Boost Your Entries",
                description:
                  "Earn +50 entries for every friend you refer. More referrals, more chances to win! 🚀",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 flex-1 flex flex-col items-center text-center"
              >
                <div className="bg-gray-700 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-teal-400">
                    {item.step}
                  </span>
                </div>
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-lg font-semibold mb-6">
            Follow these steps for your shot at winning $50,000. Good luck! 🌟
          </p>

          <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-center">
            <FaGlobe className="text-teal-400 mr-2" />
            <span className="text-teal-400">www.xyz.com</span>
          </div>
        </div>
      </div>
    </div>
  );
}
