import React from "react";
import ConnectWallet from "../assets/connect-wallet.svg";
import StackTokens from "../assets/stack-tokens.svg";
import ParticipateSale from "../assets/participate-sale.svg";

const JoinIdos = () => {
  return (
    <div className="px-4 pb-10">
      <div className="max-w-[1280px] m-auto w-full">
        <h1 className="text-[35px] capitalize sm:text-[50px] sm:leading-[57.5px] text-white font-bold max-w-[500px] mx-auto text-center">
          Easy To Join IDOs With 3 Steps
        </h1>
        <div className="mt-12">
          <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-6 gap-[38px]  ">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center text-white sm:max-w-[305.54px] max-w-[262.46px]">
              <img src={ConnectWallet} alt="connect-wallet" />
              <p className="lg:mt-[15px] mt-[12.89px] text-white lg:text-[27px] text-[23.19px] lg:leading-[31.05px] leading-[26.67px] font-[700]">
                Connect Wallet
              </p>
              <p className="lg:text-[17.41px] text-[14.96px] text-[#798DA3] lg:mt-[12.83px] mt-[11px]">
                Buy $BBT tokens and connect your wallet with launchpad ecosystem
                to participate.
              </p>
            </div>

            {/* Dotted Line */}
            <div className="lg:h-1 lg:w-[182px] h-[150px] w-1 border-dotted lg:border-b lg:border-r-0 border-r border-primaryColor relative lg:mt-[-140px]">
              <div className="w-[12px] h-[12px] min-w-[12px] min-h-[12px] bg-primaryColor rounded-full absolute lg:left-1/2 lg:top-[-2.5px] left-[-2.2px] top-1/2 transform lg:-translate-x-1/2 lg:translate-y-0 -translate-y-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center text-white sm:max-w-[305.54px] max-w-[262.46px]">
              <img src={StackTokens} alt="connect-wallet" />
              <p className="lg:mt-[15px] mt-[12.89px] text-white lg:text-[27px] text-[23.19px] lg:leading-[31.05px] leading-[26.67px] font-[700]">
                Stake $BBT Tokens
              </p>
              <p className="lg:text-[17.41px] text-[14.96px] text-[#798DA3] lg:mt-[12.83px] mt-[11px]">
                Block Boost will showcase a fixed tier system based on the
                number of tokens staked.
              </p>
            </div>

            {/* Dotted Line */}
            <div className="lg:h-1 lg:w-[182px] h-[150px] w-1 border-dotted lg:border-b lg:border-r-0 border-r border-primaryColor relative lg:mt-[-140px]">
              <div className="w-[12px] h-[12px] min-w-[12px] min-h-[12px] bg-primaryColor rounded-full absolute lg:left-1/2 lg:top-[-2.5px] left-[-2.2px] top-1/2 transform lg:-translate-x-1/2 lg:translate-y-0 -translate-y-1/2"></div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center text-white sm:max-w-[305.54px] max-w-[262.46px]">
              <img src={ParticipateSale} alt="connect-wallet" />
              <p className="lg:mt-[15px] mt-[12.89px] text-white lg:text-[27px] text-[23.19px] lg:leading-[31.05px] leading-[26.67px] font-[700]">
                Participate in a Sale
              </p>
              <p className="lg:text-[17.41px] text-[14.96px] text-[#798DA3] lg:mt-[12.83px] mt-[11px]">
                Win confirmed lottery tickets to participate in IDOs through our
                staking tier system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinIdos;
