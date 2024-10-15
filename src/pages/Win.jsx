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
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-lg max-w-4xl mx-auto">
      <div className="border border-teal-500 rounded-lg p-6 mb-8">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">
          🎉 Rexas Finance $1,000,000 Giveaway 🎁
        </h1>
        <p className="text-center text-gray-300 mb-4">
          We're excited to announce the launch of Rexas Finance with an amazing
          chance for 20 lucky winners to win $50,000 USDT each! 🌟
        </p>
        <p className="text-center text-yellow-400 font-semibold mb-4">
          ✨ Join now and share with your friends for a chance to win! ✨
        </p>
        <p className="text-center text-teal-400 mb-6">
          Note: A minimum $100 participation in the Rexas Finance Presale is
          required to be eligible.
        </p>
        <p className="text-center text-xl font-bold">
          👉 Join now and secure your spot among the winners! 🚀
        </p>
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
  );
}
