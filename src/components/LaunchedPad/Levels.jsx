import React from "react";
import { useTranslation } from "react-i18next";

const TierCard = ({ tier }) => {
  const { t } = useTranslation("launchedpad"); // Place this inside curly braces

  return ( // Use return to define the output
    <div className={`card-border bg-[#1F2835CC] px-[13px] py-[15px] rounded-[13.34px]`}>
      <div className="flex flex-col h-full w-full relative z-[2]">
        <h2
          className={`text-[26px] md:text-[36px] font-[700] mb-[13px] text-center ${tier.color === "bg-primaryColor" ? "text-black" : "text-white"} ${tier.color} px-[20px] py-[8px] rounded-[7px]`}
        >
          {tier.name}
        </h2>
        <div className="flex flex-col gap-[39px] flex-grow max-w-[287px] mx-auto">
          <div className="text-center">
            <p className="text-[15px] text-[#798DA3]">{t('levels.staking-requirements')}</p>
            <p className="text-[34px] leading-[39px] text-white font-[400]">
              {tier.stakingRequirement}
            </p>
          </div>
          <div className="text-center">
            <p className="text-[15px] text-[#798DA3]">{t('levels.staking-length-required')}</p>
            <p className="text-[23px] leading-[34px] text-white font-[400]">
              {tier.stakingLength}
            </p>
          </div>
          <div className="text-center">
            <p className="text-[15px] text-[#798DA3]">{t('levels.whitelist-requirement')}</p>
            <p className="text-[23px] leading-[34px] text-white font-[400]">
              {tier.whitelistRequirement}
            </p>
          </div>
          <div className="text-center">
            <p className="text-[15px] text-[#798DA3]">{t('levels.lottery-tickets')}</p>
            <p className="text-[23px] leading-[34px] text-white font-[400]">
              {tier.lotteryTickets}
            </p>
          </div>
          {tier.guaranteedAllocation && (
            <div className="text-center">
              <p className="text-[15px] text-[#798DA3]">{t('levels.guaranteed-allocation')} </p>
              <p className="text-[23px] leading-[34px] text-white font-[400]">
              {t('levels.yes')}
              </p>
            </div>
          )}
          {tier.poolWeight && (
            <div className="text-center">
              <p className="text-[15px] text-[#798DA3]">{t('levels.pool-weight')}</p>
              <p className="text-[23px] leading-[34px] text-white font-[400]">
                {tier.poolWeight}
              </p>
            </div>
          )}
          {tier.privateAllocations && (
            <div className="text-center">
              <p className="text-[15px] text-[#798DA3]">{t('levels.private-allocations')}</p>
              <p className="text-[23px] leading-[34px] text-white font-[400]">
                
                {t('levels.yes')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Levels() {
  const { t } = useTranslation("launchedpad");

  const tiers = [
    {
      name: t('levels.bronze'),
      color: "bg-[#38DCC833]",
      stakingRequirement: "$BBT Of $200",
      stakingLength: t('levels.staking-length-required'),
      whitelistRequirement: t('levels.whitelist-requirement'),
      lotteryTickets: 1,
    },
    {
      name: t('levels.silver'),
      color: "bg-[#38DCC833]",
      stakingRequirement: "$BBT Of $500",
      stakingLength: t('levels.staking-length-required'),
      whitelistRequirement: t('levels.whitelist-requirement'),
      lotteryTickets: 3,
    },
    {
      name: t('levels.gold'),
      color: "bg-[#38DCC833]",
      stakingRequirement: "$BBT Of $1000",
      stakingLength: t('levels.staking-length-required'),
      whitelistRequirement: t('levels.whitelist-requirement'),
      lotteryTickets: 7,
    },
    {
      name: t('levels.platinum'),
      color: "bg-[#38DCC833]",
      stakingRequirement: "$BBT Of $2000",
      stakingLength: t('levels.staking-length-required'),
      whitelistRequirement: t('levels.whitelist-requirement'),
      lotteryTickets: 0,
      guaranteedAllocation: true,
      poolWeight: 10,
    },
    {
      name: t('levels.diamond'),
      color: "bg-primaryColor",
      stakingRequirement: "$BBT Of $5000",
      stakingLength: t('levels.staking-length-required'),
      whitelistRequirement: t('levels.whitelist-requirement'),
      lotteryTickets: 0,
      guaranteedAllocation: true,
      poolWeight: 30,
    },
    {
      name: t('levels.blue-diamond'),
      color: "bg-[#38DCC833]",
      stakingRequirement: "$BBT Of $10000",
      stakingLength: t('levels.staking-length-required'),
      whitelistRequirement: t('levels.whitelist-requirement'),
      lotteryTickets: 0,
      guaranteedAllocation: true,
      poolWeight: 60,
      privateAllocations: true,
    },
  ];

  return (
    <div className="text-white max-w-[1280px] mx-auto">
      <div className="max-w-[769px] text-center mx-auto">
        <h2 className="text-[25px] md:text-[32px] lg:text-[50px] md:leading-[57.5px] font-[700] text-white text-center">
          {t("levels.title")}
        </h2>
        <p className="text-center text-white text-[12px] md:text-[17px] md:mt-[22px] mt-[13px] font-[300]">
          {t("levels.description")}
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
