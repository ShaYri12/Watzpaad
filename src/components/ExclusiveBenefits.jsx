import React from "react";
import PresaleRewards from "../assets/presale-rewards.svg";
import ReferralRewards from "../assets/referral-rewards.svg";
import TradingRewards from "../assets/trading-rewards.svg";
import VaultStackingRewards from "../assets/vault-stacking-rewards.svg";
import StackingRewards from "../assets/stacking-rewards.svg";
import BG from "../assets/bottom-mage.png";
import BGOne from "../assets/top-mage.png";
import Center from "../assets/center-mage.png";

const ExclusiveBenefits = () => {
  return (
    <div className="overflow-hidden bg-image px-6 py-10 w-full relative">
      <img
        src="/assets/exclusive-benefit-bg-shade.png"
        className="w-full h-full absolute top-0 left-0 z-[1]"
      />
      <div className="text-white  z-20 w-full absolute left-0 h-[300px] -bottom-5">
        <img src={BG} alt="bg" className="lg:block hidden" />
      </div>
      <div className="text-white  w-full absolute min-h-[300px] top-0">
        <img src={BGOne} alt="bg" />
      </div>
      <div className="text-white  h-[300px] w-[900px] rounded-full -top-32 left-[15%] absolute ">
        <img src={Center} alt="bg" className="rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1280px] m-auto w-full">
        <h1 className="text-[35px] capitalize sm:text-[50px] sm:leading-[57.5px] text-white font-bold max-w-[675px] mx-auto text-center">
          Exclusive Benefits Of Buying $WZP In The Presale
        </h1>
        <div className="mt-[30px] flex-wrap flex items-center h-full justify-center gap-12">
          <div
            className="h-full w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="p-[18px] flex items-center flex-col text-center border-[1.56px] border-[#38DCC866] rounded-md">
              <img src={PresaleRewards} alt="launchpad" />
              <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                Presale Referral Rewards
              </h2>
              <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                Participate in early stage of presale to get more valuation of
                your investment compare to the launch price. Also, you can refer
                your friends and earn both 5% bonus during presale.
              </p>
            </div>
          </div>
          <div
            className="h-full w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="p-[18px] flex items-center flex-col text-center border-[1.56px] border-[#38DCC866] rounded-md">
              <img src={ReferralRewards} alt="launchpad" />
              <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                Trading Referral Rewards
              </h2>
              <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                After successful launch still you can refer through your unique
                referral link from our dashboard app and earn the 2% trading
                rewards of your referrals trading activities.
              </p>
            </div>
          </div>
          <div
            className="h-full w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="p-[18px] flex items-center flex-col text-center border-[1.56px] border-[#38DCC866] rounded-md">
              <img src={TradingRewards} alt="launchpad" />
              <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                Holding Rewards
              </h2>
              <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                Hold the $BBT and earn passive income. Just seat and relax to
                get share of your holding rewards from traded volume of $BBT and
                claim it through our dapp every hour.
              </p>
            </div>
          </div>
          <div
            className="h-full w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="p-[18px] flex items-center flex-col text-center border-[1.56px] border-[#38DCC866] rounded-md">
              <img
                src={VaultStackingRewards}
                alt="launchpad"
                className="mb-1"
              />
              <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                Staking Rewards
              </h2>
              <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                Stake $BBT to earn reward and get guaranteed allocation for the
                launchpad. It will be rewarded from staking supply of our
                ecosystem.
              </p>
            </div>
          </div>
          <div
            className="h-full w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="p-[18px] flex items-center flex-col text-center border-[1.56px] border-[#38DCC866] rounded-md">
              <img src={StackingRewards} alt="launchpad" />
              <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                Vault Staking Rewards
              </h2>
              <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                Stake any tokens to earn with automatic compounding. you can
                stake any token to earn $BBT as an compounding reward. It will
                be rewarded from vault supply of our ecosystem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveBenefits;
