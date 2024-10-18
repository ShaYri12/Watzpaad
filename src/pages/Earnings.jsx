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
      className={`flex flex-col md:flex-row items-center justify-between rounded-[10px] border border-primaryColor py-[22.9px] px-[11px] md:gap-[20px] gap-[33px] ${
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
    <div className="bg-[#09121D]">
      <div className="relative w-full md:pb-[90px] md:pt-[160px] pt-[120px] pb-[50px] block">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-[22px]">
          <h1 className="text-center text-primaryColor text-[39.52px] md:text-[65px] font-[700]">
            Earnings
          </h1>
          <div className="h-[3.65px] min-h-[3.65px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[9px] md:mt-[10px] mx-auto"></div>
          <p className="md:mt-[14px] mt-[11.55px] text-[10.94px] md:text-[18px] text-white max-w-[801px] mx-auto text-center">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content
          </p>
        </div>
      </div>

      <div className="md:px-[22px] px-[18px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-[44px] md:py-[80px] py-[57px]">
            <RewardSection
              titleWhite="Presale"
              titleColor="Rewards"
              description="Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. r. Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. r. "
              imageUrl="/assets/presale-rewards.png"
            />
            <RewardSection
              titleWhite="Trading"
              titleColor="Rewards"
              description="Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. r. Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. r. "
              imageUrl="/assets/trading-rewards.png"
              reverse
            />
            <RewardSection
              titleWhite="Vault Stacking"
              titleColor="Rewards"
              description="Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. r. Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. r. "
              imageUrl="/assets/vault-stacking-rewards.png"
            />
            <RewardSection
              titleWhite="Stacking"
              titleColor="Rewards"
              description="Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. r. Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. r. "
              imageUrl="/assets/stacking-rewards.png"
              reverse
            />
            <RewardSection
              titleWhite="Referral"
              titleColor="Rewards"
              description="Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. r. Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. r. "
              imageUrl="/assets/referral-rewards.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
