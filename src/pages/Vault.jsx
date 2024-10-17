import React, { useEffect } from "react";
import VaultCards from "../components/VaultCards";

const Vault = () => {
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
          <h1 className="text-center text-primaryColor text-[35px] md:text-[65px] md:leading-[74.74px] leading-[45.44px] font-[700]">
            Vaults
          </h1>
          <div className="h-[3.65px] min-h-[3.65px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[9px] md:mt-[7px] mx-auto"></div>
          <p className="md:mt-[14px] mt-[11.55px] text-[10.94px] md:text-[18px] max-w-[801px] mx-auto text-center md:text-[#798DA3] text-white">
            Stake Tokens to earn with Automatic Compounding. Users can stake Any
            Token to earn MAP. Refer your friends to earn 5% on their extra
            rewards.
          </p>
        </div>
      </div>

      <div className="md:px-[22px] px-[12px]">
        <VaultCards />
      </div>
    </div>
  );
};

export default Vault;
