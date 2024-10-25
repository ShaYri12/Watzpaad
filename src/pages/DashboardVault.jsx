import React from "react";
import VaultCards from "../components/VaultCards";

const DashboardVault = () => {
  return (
    <div className="w-full min-h-screen flex-1 flex-grow max-w-[1280px] mx-auto lg:px-[30px] md:px-[15px] px-[20px] md:pt-[46px] pt-[100px] pb-[62px]">
      <div className="flex lg:flex-row flex-col gap-[26px] xl:gap-[134px]">
        <div>
          <h2 className="text-[33.63px] md:text-[50px] font-[700] text-white">
            Vaults
          </h2>
          <p className="mt-[14.8px] text-grayish text-[12.11px] md:text-[18px] font-[300]">
            Stake Tokens to earn with Automatic Compounding. Users can stake Any
            Token to earn BBT. Refer your friends to earn 5% on their extra
            rewards.
          </p>
        </div>
        <div className="flex gap-[8px] sm:gap-[15px] md:gap-[23px] items-center">
          <button className="md:order-1 order-2 text-primaryColor text-[12.11px] md:text-[18px] font-[400] py-[10px] md:py-[15px] px-[37px] md:px-[54px] rounded-full border border-primaryColor">
            Help
          </button>
          <div className="md:order-2 order-1 md:py-[38.5px] py-[10px] md:px-[19.5px] px-[10px] rounded-[10.17px] md:rounded-[20px] bg-primaryColor flex md:items-center items-start gap-[9.66px] w-fit">
            <div>
              <p className="text-[12px] md:text-[18px] text-black">
                BBT Bounty
              </p>
              <h4 className="text-[20.63px] md:text-[40.58px] md:leading-[46.67px] leading-[23.73px] text-black">
                24.499
              </h4>
              <p className="text-[12px] md:text-[18px] text-black">~$77.471</p>
            </div>
            <button className="text-primaryColor bg-black rounded-full px-[21px] md:px-[42px] py-[7.6px] md:py-[15px] text-[12px] md:text-[18px]">
              Claim
            </button>
          </div>
        </div>
      </div>
      <VaultCards dashboard={true} />
    </div>
  );
};

export default DashboardVault;
