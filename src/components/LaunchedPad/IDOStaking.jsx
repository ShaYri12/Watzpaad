import React, { useState } from "react";
import { useTranslation } from "react-i18next";

export default function IDOStaking() {
  const [stakeAmount, setStakeAmount] = useState("");
  const [unstakeAmount, setUnstakeAmount] = useState("");

  const handleMaxStake = () => {
    // Set the max stakable amount (for demo, let's assume it's 100 BBT )
    setStakeAmount("100");
  };

  const handleMaxUnstake = () => {
    // Set the max unstakable amount (for demo, let's assume it's 50 BBT )
    setUnstakeAmount("50");
  };

  const { t } = useTranslation("launchedpad");

  return (
    <div className="flex flex-col md:flex-row gap-[31px] text-white mx-auto max-w-[1280px]">
      <div className="card-border md:w-1/2 w-full bg-[#1F2835CC]">
        <div className="rounded-[13.34px] overflow-hidden md:px-[29px] px-[9px] py-[24px] relative z-[2]">
          <h2 className=" capitalize text-[20.28px] md:text-[24px] font-[700] md:mb-[14px] mb-[22px]">
            {t("ido-staking.title")}
          </h2>
          <p className="text-[13.52px] md:text-[16px] mb-[18px]">
            {t("ido-staking.description")}
          </p>
          <p className="text-[13.52px] md:text-[16px] mb-[25px] md:mb-[32px] flex flex-col">
            <span>{t("ido-staking.level")}</span>
            <span>{t("ido-staking.stack")}</span>
            <span>{t("ido-staking.tokens")}</span>
          </p>
          {/* Input sections */}
          <div className="flex justify-between gap-[13px] flex-wrap">
            {/* Stake Input */}
            <div className="relative flex-1 bg-[#121C29] px-[14px] md:px-[16px] py-[12px] rounded-lg flex items-center border border-primaryColor text-[11.83px] md:text-[14px] justify-between">
              <div className="flex gap-[4px] md:gap-[6px] items-center">
                {t("ido-staking.balance")}
                <input
                  type="number"
                  className="bg-transparent text-right text-white w-[35px] md:w-[40px] outline-none"
                  value={stakeAmount}
                  onChange={(e) => setStakeAmount(e.target.value)}
                  placeholder="0"
                />
                BBT
              </div>
              <div className="flex md:gap-[12px] gap-[10px] items-center">
                <button
                  className="bg-primaryColor px-[16px] py-[5px] rounded-[5px] text-black"
                  onClick={handleMaxStake}
                >
                  {t("ido-staking.max")}
                </button>
                <span className="text-white">BBT </span>
              </div>
            </div>

            {/* Unstake Input */}
            <div className="relative flex-1 bg-[#121C29] px-[14px] md:px-[16px] py-[12px] rounded-lg flex items-center border border-primaryColor text-[11.83px] md:text-[14px] justify-between">
              <div className="flex gap-[4px] md:gap-[6px] items-center">
                {t("ido-staking.balance")}
                <input
                  type="number"
                  className="bg-transparent text-right text-white w-[35px] md:w-[40px] outline-none"
                  value={unstakeAmount}
                  onChange={(e) => setUnstakeAmount(e.target.value)}
                  placeholder="0"
                />
                BBT
              </div>
              <div className="flex gap-[12px] items-center">
                <button
                  className="bg-primaryColor px-[16px] py-[5px] rounded-[5px] text-black"
                  onClick={handleMaxUnstake}
                >
                  {t("ido-staking.max")}
                </button>
                <span className="text-white">BBT </span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-[13px] mt-[15px] flex-wrap">
            <button className="flex-grow bg-primaryColor hover:bg-teal-300 min-w-[235px] text-[19px] md:text-[24px] transition text-black py-[11px] px-4 rounded-full">
              {t("ido-staking.approve")}
            </button>
            <button className="flex-grow bg-transparent hover:bg-gray-700 text-white min-w-[235px] text-[19px] md:text-[24px] transition py-[11px] px-4 rounded-full border border-white">
              {t("ido-staking.unstake")}
            </button>
          </div>
        </div>
      </div>
      <div className="card-border md:w-1/2 w-full bg-[#1F2835CC]">
        <div className="rounded-[13.34px] overflow-hidden md:px-[29px] px-[9px] py-[24px] relative z-[2]">
          <h2 className="text-[20.28px] md:text-[24px] font-[700] md:mb-[14px] mb-[22px]">
            {t("ido-staking.levels")}
          </h2>
          <p className="text-[13.68px] md:text-[16px] mb-[25px]">
            {t("ido-staking.desc")}
          </p>
          <ul className="text-[13.68px] md:text-[16px] mb-[25px]">
            <li>
              <span className="text-primaryColor font-[700]">
                {t("ido-staking.bbtof")} $200{" "}
              </span>
              {t("ido-staking.forchances")}
            </li>
            <li>
              <span className="text-primaryColor font-[700]">
                {t("ido-staking.bbtof")} $500
              </span>{" "}
              {t("ido-staking.forprospect")}
            </li>
            <li>
              <span className="text-primaryColor font-[700]">
                {t("ido-staking.bbtof")} $1000
              </span>{" "}
              {t("ido-staking.foraffiliate")}
            </li>
            <li>
              <span className="text-primaryColor font-[700]">
                {t("ido-staking.bbtof")} $2000
              </span>{" "}
              {t("ido-staking.formember")}
            </li>
            <li>
              <span className="text-primaryColor font-[700]">
                {t("ido-staking.bbtof")} $5000
              </span>{" "}
              {t("ido-staking.forclub")}
            </li>
            <li>
              <span className="text-primaryColor font-[700]">
                {t("ido-staking.bbtof")} $10000
              </span>{" "}
              {t("ido-staking.forassociate")}
            </li>
          </ul>
          <p className="text-primaryColor text-[13.68px] md:text-[16px] font-[700] mb-[5px]">
            {t("ido-staking.description-one")}
          </p>
          <p className="text-[11.97px] md:text-[14px] mb-4">
            {t("ido-staking.description-two")}
          </p>
          <p className="text-[11.97px] md:text-[14px]">
            {t("ido-staking.description-three")}
          </p>
        </div>
      </div>
    </div>
  );
}
