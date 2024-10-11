import React from "react";

const tiers = [
  { name: "Bronze", color: "bg-[#38DCC833]" },
  { name: "Silver", color: "bg-[#38DCC833]" },
  { name: "Gold", color: "bg-[#38DCC833]" },
  { name: "Platanium", color: "bg-[#38DCC833]" },
  { name: "Diamond", color: "bg-primaryColor" },
  { name: "Blue Diamond", color: "bg-[#38DCC833]" },
];

const TierCard = ({ tier }) => (
  <div
    className={`border-[3px] border-[#303945] bg-[#1F2835CC] px-[13px] py-[15px] flex flex-col h-full rounded-[13.34px]`}
  >
    <h2
      className={`text-[26px] md:text-[36px] font-[700] mb-[13px] text-center ${
        tier.color === "bg-primaryColor" ? "text-black" : "text-white"
      } ${tier.color} px-[20px] py-[8px] rounded-[7px]`}
    >
      {tier.name}
    </h2>
    <div className="flex flex-col gap-[39px] flex-grow max-w-[287px] mx-auto">
      <div className="text-center">
        <p className="text-[15px] text-[#798DA3]">Staking Requirements</p>
        <p className="text-[34px] leading-[39px] text-white font-[400]">
          Map if $200
        </p>
      </div>
      <div className="text-center">
        <p className="text-[15px] text-[#798DA3]">Staking Length Required</p>
        <p className="text-[23px] leading-[34px] text-white font-[400]">
          3 hours before Allocation Round
        </p>
      </div>
      <div className="text-center">
        <p className="text-[15px] text-[#798DA3]">
          Whitelist Requirements Twitter
        </p>
        <p className="text-[23px] leading-[34px] text-white font-[400]">
          Like Comment & Retweet
        </p>
      </div>
      <div className="text-center">
        <p className="text-[15px] text-[#798DA3]">Lottery Tickets</p>
        <p className="text-[23px] leading-[34px] text-white font-[400]">55</p>
      </div>
    </div>
  </div>
);

export default function Levels() {
  return (
    <div className="text-white max-w-[1280px] mx-auto">
      <div className="max-w-[769px] text-center mx-auto">
        <h2 className="text-[25px] md:text-[32px] md:text-[50px] md:leading-[57.5px] font-[700] text-white text-center">
          The MataAltPad Tiered system
        </h2>
        <p className="text-center text-white text-[12px] md:text-[17px] md:mt-[22px] mt-[13px] font-[300]">
          MataAltPad will showcase a fixed tier system based on the number of
          tokens staked. Lottery Tiers will share 20% of total raise and rest
          80% of the raise is assigned for guaranteed allocation tiers based on
          the pool weights assigned.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[28px] mt-[53px]">
        {tiers.map((tier) => (
          <TierCard key={tier.name} tier={tier} />
        ))}
      </div>
    </div>
  );
}
