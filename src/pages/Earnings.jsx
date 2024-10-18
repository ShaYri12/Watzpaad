import { useEffect } from "react";

const RewardSection = ({
  titleWhite,
  titleColor,
  description,
  imageUrl,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between bg-[#D9D9D90F] relative z-10 rounded-[10px] border border-primaryColor py-[22.9px] px-4 md:px-[40px] md:gap-[20px] gap-[33px] ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="mb-8 md:mb-0 md:w-1/2">
        <h1 className="font-[700] text-[33px] md:text-[50px] mb-[14px] md:mb-[22px] md:leading-[57.5px] leading-[38.44px]">
          <span className="text-white">{titleWhite} </span>
          <span className="text-primaryColor">{titleColor}</span>
        </h1>
        <p className="text-[#798DA3] font-[300] text-[12.03px] sm:text-[18px]">
          {description}
        </p>
      </div>
      <div
        className={`w-full md:w-1/2 flex ${
          reverse ? "md:justify-start" : "md:justify-end"
        } justify-center`}
      >
        <img
          src={imageUrl}
          className="md:max-w-[533.66px] md:w-full w-[299.1px] md:max-h-[507.07px] max-h-[284.2px]"
        />
      </div>
    </div>
  );
};

export default function Earnings() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-[#09121D] relative">
      <img
        src="/assets/earning-bg-shade.png"
        className="w-full h-full absolute top-0 left-0"
      />
      <div className="relative w-full md:pb-[90px] md:pt-[160px] pt-[120px] pb-[50px] block">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-[22px]">
          <h1 className="text-center text-primaryColor text-[39.52px] md:text-[65px] font-[700]">
          Earnings
          </h1>
          <div className="h-[3.65px] min-h-[3.65px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[9px] md:mt-[10px] mx-auto"></div>
          <p className="md:mt-[14px] mt-[11.55px] text-[10.94px] md:text-[18px] text-white max-w-[801px] mx-auto text-center">
          BlockBoost Ecosystem allows earn passive income throughout many ways like Presale rewards,Trading rewards, Holding rewards, Staking rewards and Vault staking Rewards.
          </p>
        </div>
      </div>

      <div className="md:px-[22px] px-[18px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-[44px] md:py-[80px] py-[57px]">
            <RewardSection
              titleWhite="Presale Referral "
              titleColor="Rewards"
              description="Participate in early stage of presale to get $BBT at lower price because each stages of presales price are getting increased. Also, you can refer your friends to earn both 5% as an rewards of their invested amount during presale. There are no limits of referring to earn passive reward of their investments. "
              imageUrl="/assets/presale-rewards.png"
            />
            <RewardSection
              titleWhite="Trading Referral "
              titleColor="Rewards"
              description="After launch of $BBT token still you can refer and earn through your unique referral link from our dashboard app and earn the 2% trading rewards of your referrals trading activities lifetime whenever they buy or sell the $BBT tokens. "
              imageUrl="/assets/trading-rewards.png"
              reverse
            />
            <RewardSection
              titleWhite="Holding "
              titleColor="Rewards"
              description="Hold the $BBT and earn passive income. Just seat and relax to get share of your holding rewards from traded volume of $BBT and claim it through our dashboard app every hour. If you missed to claim it will be available at anytime to reclaim all remaining rewards of your wallet address."
              imageUrl="/assets/vault-stacking-rewards.png"
            />
            <RewardSection
              titleWhite="Staking "
              titleColor="Rewards"
              description="Stake $BBT to earn reward and get guaranteed allocation for the launchpad. It will be rewarded from staking supply of our ecosystem. Even after you are eligible for getting the holding rewards which are distributed from trading volumes of $BBT tokens."
              imageUrl="/assets/stacking-rewards.png"
              reverse
            />
            <RewardSection
              titleWhite="Vault Staking "
              titleColor="Rewards"
              description="Stake any tokens to earn with automatic compounding system. You can stake any token to earn $BBT as an auto compounding rewards. It will be rewarded from vault supply of our ecosystem. You can unlock the your tokens anytime with your compounded rewards in $BBT tokens."
              imageUrl="/assets/referral-rewards.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
