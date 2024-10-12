const RewardSection = ({
  titleWhite,
  titleColor,
  description,
  imageUrl,
  reverse = false,
}) => {
  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-between rounded-[10px] border border-primaryColor p-[11px] md:gap-[20px] gap-[33px] ${
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
  return (
    <div className="bg-[#09121D]">
      <div className="relative w-full md:h-[500px] h-[362px]">
        <img
          src="/assets/earnings.png"
          className="w-full h-full object-cover absolute top-0 left-0"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <h1 className="text-center text-primaryColor text-[35px] md:text-[65px] font-[700]">
            Earnings
          </h1>
        </div>
        <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b  to-[rgba(9, 18, 29, 0)] from-[#09121D]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#09121D] to-[rgba(9, 18, 29, 0)]"></div>
      </div>

      <div className="px-[22px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="flex flex-col gap-[44px] py-[80px]">
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
