import React from "react";

const EarningsManager = () => {
  return (
    <div className="w-full flex-1 min-h-screen  text-white flex flex-col items-center">
      {/* Header Section */}
      <div className="max-w-5xl w-full p-6">
        <h1 className="text-[30px] leading-[34px] font-[font] mb-4">
          MetaAltPad Earnings Manager
        </h1>

        {/* Input Section */}
        <div className="flex space-x-4 mb-8">
          <input
            type="text"
            placeholder="Please enter your address above"
            className="w-full max-w-[350px] p-3 rounded-full bg-gray-800 text-white placeholder-gray-400 outline-none"
          />
          <button className="bg-teal-400 hover:bg-teal-500 text-black font-semibold py-3 px-9 rounded-full">
            Buy BBT
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mb-8">
          {/* Single Info Card */}
          {infoCards.map((card) => (
            <div
              key={card.label}
              className="bg-gray-800 p-4 rounded-[21px] flex justify-between space-y-2 items-center"
            >
              <div className="flex gap-4 items-end">
                <div>
                  <p className="text-[12px] leading-[12px] text-[#798DA3]">
                    {card.label}
                  </p>
                  <p className="text-[19px] leading-[26px] font-semibold">
                    {card.value}
                  </p>
                </div>
                {card.subValue && (
                  <p className="text-[#01B574] test-[15px] leading-[20px]">
                    {card.subValue}
                  </p>
                )}
              </div>
              <span className="bg-teal-400 rounded-[12px] w-[47px] h-[47px] p-2">
                <img src="/assets/icons/global.png" alt="" />
              </span>
            </div>
          ))}
        </div>

        {/* Connect Wallet */}
        <div className="text-center mb-8">
          <button className="bg-teal-400 hover:bg-teal-500 text-black font-semibold py-3 px-8 w-2/3 rounded-full">
            Connect Wallet and Claim Manually
          </button>
        </div>

        {/* Ethereum Info Section */}
        <div className="bg-gray-800 p-8 rounded-lg text-center w-full">
          <div className="flex justify-center mb-6">
            <div className=" rounded-full">
              <img
                src="/assets/icons/integeration-logo-1.png"
                alt="ETH"
                className="h-16 w-16"
              />
            </div>
          </div>
          <h2 className="text-[30px] leading-[34px] font-semibold mb-4">
            Total Rewards Paid To $MAP Holders
          </h2>
          <div className="flex justify-center items-center space-x-4 mb-4">
            <p className="text-3xl font-bold">84.00 ETH</p>
            <p className="text-2xl font-semibold">=</p>
            <p className="text-3xl font-bold">$250,364</p>
          </div>
          <p className="text-gray-400 text-[20px] mb-6">
            Estimations are based on a default of the last 24h of trading
            volume. Change the volume to predict earnings based on other
            figures.
          </p>

          {/* Trading Volume Input */}
          <div className="flex justify-center items-center space-x-2">
            <p className="text-teal-400">Trading Volume = $</p>
            <input
              type="text"
              placeholder="01"
              className="w-16 p-2 rounded-lg bg-gray-700 text-center text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const infoCards = [
  {
    label: "$MAP Holdings",
    value: "0.00 MAP",
    subValue: "-$0.00",
    icon: "💰",
  },
  {
    label: "Total Rewards Paid",
    value: "$0.00",
    icon: "🎁",
  },
  {
    label: "Last Payout Time",
    value: "Never",
    icon: "⏰",
  },
  {
    label: "Next Payout Loading",
    value: "Processing",
    icon: "📅",
  },
  {
    label: "Autodividend Earnings",
    value: "0.0000 BNB",
    icon: "💵",
  },
  {
    label: "Referral Earnings",
    value: "0.00 MAP",
    subValue: "-$0.00",
    icon: "🤝",
  },
  {
    label: "Refer and earn",
    value: "Copy Link",
    icon: "🔗",
  },
  {
    label: "Total referred",
    value: "View my referrals",
    icon: "📑",
  },
];

export default EarningsManager;
