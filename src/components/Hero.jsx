import React from "react";
import Audit from "../assets/audit-icons.svg";
import AuditOne from "../assets/audit.svg";
import Tether from "../assets/tether.svg";
import Bitcoin from "../assets/bitcoin.svg";
import Eth from "../assets/eth.svg";
import BNB from "../assets/bnb.svg";
import VISA from "../assets/visa.svg";
import Slider from "./Slider";
import HomeDropdown from "./HomeDropdown";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const dropdownOptions1 = ["USDT", "USDT", "USDT"];
  const dropdownOptions2 = ["USDT", "USDT", "USDT"];

  const { t } = useTranslation("homepage");

  return (
    <section className="w-full text-white py-[50px] px-6 bgimage-one">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-8 lg:gap-4 lg:flex-row justify-between items-center">
        <div className="lg:max-w-[590px] w-full mx-auto">
          <h1 className="text-[#38DCC8] text-[50px] md:text-[75px] font-bold">
            BLOCKBOOST
          </h1>
          <div className="bg-[#38DCC8] w-[250px] h-[6px] rounded-[20px] my-3 mb-6"></div>
          <h3 className="text-white font-bold sm:leading-[48px] text-[22px] sm:text-[40px]">
            Unique WEB3 Crowdfunding Ecosystem
          </h3>
          <p className="text-[14px] sm:text-[18px] font-normal font-space mt-5 sm:mt-[27px]">
            Are you ready to access some of the most exclusive and promising
            crypto startups? block boost is your gateway to early-stage
            investment opportunities, which our team has thoroughly vetted.
          </p>
          <p className="text-[14px] sm:text-[18px] font-normal font-space mt-5 sm:mt-[27px]">
            There are many other advantages of being a part of Block boost
            Crowdfunding Ecosystem with the unique features like Launchpad,
            Bridge & Swap AI, Earning system, Vault, Marketplace and Staking.
          </p>
          <div className="mt-[29px] flex items-center gap-4 sm:gap-[29px]">
            <button
              className="bg-[#38DCC8] text-black font-normal text-[18px] leading-[24px] border border-[#38DCC8] rounded-[30px] w-[180px] h-[40px] sm:h-[55px] flex items-center justify-center gap-2.5"
              style={{ boxShadow: "0px 4px 22.6px 0px #38DCC88C" }}
            >
              <img
                src={Audit}
                alt="audit"
                width={35}
                height={35}
                className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px]"
              />{" "}
              Audit
            </button>
            <button className=" text-white font-normal bg-[#111B28] text-[18px] leading-[24px] border border-[#38DCC8] rounded-[30px] w-[180px] h-[40px] sm:h-[55px] flex items-center justify-center gap-2.5">
              <img
                src={AuditOne}
                alt="audit"
                width={35}
                height={35}
                className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px]"
              />{" "}
              Audit
            </button>
          </div>
        </div>

        <div
          className=" lg:max-w-[428px] bg-[#1F2835CC] w-full mx-auto border border-[#303945] rounded-xl p-3"
          style={{ backdropFilter: " blur(34.47999954223633px)" }}
        >
          <div className="border border-[#38DCC866] rounded-lg px-3.5 py-5 sm:p-5 h-full">
            {/* Timer */}
            <div className="w-full bg-[#111B28] rounded-[10px] p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center flex-col">
                  <span className="text-[#38DCC8] text-[29px] leading-[34px] font-bold">
                    00
                  </span>
                  <div className="text-[#798DA3] text-[15px] leading-[17px] font-normal">
                    DAYS
                  </div>
                </div>
                <div className="flex items-center flex-col">
                  <span className="text-[#38DCC8] text-[29px] leading-[34px] font-bold">
                    00
                  </span>
                  <div className="text-[#798DA3] text-[15px] leading-[17px] font-normal uppercase">
                    Hours
                  </div>
                </div>
                <div className="flex items-center flex-col">
                  <span className="text-[#38DCC8] text-[29px] leading-[34px] font-bold">
                    00
                  </span>
                  <div className="text-[#798DA3] text-[15px] leading-[17px] font-normal uppercase">
                    Minutes
                  </div>
                </div>
                <div className="flex items-center flex-col">
                  <span className="text-[#38DCC8] text-[29px] leading-[34px] font-bold">
                    00
                  </span>
                  <div className="text-[#798DA3] text-[15px] leading-[17px] font-normal uppercase">
                    Seconds
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[14px] leading-[16px] font-normal text-center mt-[15px]">
              USDT Raised: $361,590.14 / $605,467
            </p>
            <Slider />

            <h2 className="mt-6 text-center text-[#798DA3] text-[17px] leading-[20px] font-bold">
              TARGET: $250000
            </h2>
            <div className="flex items-center justify-center mt-3 gap-2">
              <img src={Bitcoin} alt="bitcoin" width={24} height={24} />
              <h2 className="text-[14px] leading-[16px] font-bold">1 LHUNT</h2>
              <h2 className="text-[#798DA3] text-[14px] leading-[16px] font-bold">
                $0.001
              </h2>
            </div>

            <div className="mt-4 max-w-[350px] mx-auto flex items-center gap-2 sm:gap-4">
              <div className="border border-[#38DCC800] flex-col flex items-center gap-2.5 w-full bg-[#101A27] custom-shadow px-5 py-4 rounded-xl">
                <h2 className="text-[#798DA3] text-[14px] leading-[12px] font-normal">
                  Listing Price
                </h2>
                <p className="text-[12px] sm:text-[15px] font-bold leading-[15px]">
                  $0.005 <span className="text-[#38DCC8]">(+400%)</span>
                </p>
              </div>
              <div className="border border-[#38DCC800] flex-col flex items-center gap-2.5 w-full bg-[#101A27] custom-shadow px-5 py-4 rounded-xl">
                <h2 className="text-[#798DA3] text-[14px] leading-[12px] font-normal">
                  Next Price
                </h2>
                <p className="text-[12px] sm:text-[15px] font-bold leading-[15px]">
                  $0.005 <span className="text-[#38DCC8]">(+400%)</span>
                </p>
              </div>
            </div>

            <div className="mt-2 max-w-[350px] mx-auto rounded-[14px] bg-[#161F2C] w-full py-3 px-4 flex items-center justify-between">
              <div>
                <h4 className="text-[#FFFFFF4D] text-[14px] leading-[16px] font-normal">
                  USD : $ 0
                </h4>
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src={Tether}
                    alt="audit"
                    className="min-w-[16px] min-h-[16px]"
                  />
                  <input
                    type="text"
                    placeholder="1 - 50,000"
                    className="text-[#9CA3AF] text-[14px] leading-[14px] font-normal outline-none bg-transparent w-[100px]"
                  />
                </div>
              </div>
              <HomeDropdown
                label="USDT"
                options={dropdownOptions1}
                image={Tether}
              />
            </div>

            <div className="mt-2 max-w-[350px] mx-auto rounded-[14px] bg-[#161F2C] w-full py-3 px-4 flex items-center justify-between">
              <div>
                <h4 className="text-[#FFFFFF4D] text-[14px] leading-[16px] font-normal">
                  Receive
                </h4>
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src={Bitcoin}
                    alt="Bitcoin"
                    className="min-w-[16px] min-h-[16px] max-w-[18px] max-h-[18px]"
                  />
                  <input
                    type="text"
                    placeholder="1 - 50,000"
                    className="text-[#9CA3AF] text-[14px] leading-[14px] font-normal outline-none bg-transparent w-[100px]"
                  />
                </div>
              </div>
              <HomeDropdown
                label="USDT"
                options={dropdownOptions2}
                image={Bitcoin}
              />
            </div>

            <p className="text-[#798DA3] text-[14px] leading-[14px] font-normal text-center py-5">
              AVAILABLE PAYMENT METHOD
            </p>

            <div className="mb-5 flex items-center gap-2">
              <button className="flex items-center gap-2 justify-center py-2 w-full bg-[#161F2CD6] rounded-lg border border-[#38DCC8]">
                <img src={Eth} alt="bitcoin" width={22} height={22} />
                ETH
              </button>
              <button className="flex items-center gap-2 justify-center py-2 w-full bg-[#161F2CD6] rounded-lg border border-[#38DCC8]">
                <img src={BNB} alt="bitcoin" width={22} height={22} />
                BNB
              </button>
              <button className="flex items-center gap-2 justify-center py-2 w-full bg-[#161F2CD6] rounded-lg border border-[#38DCC8]">
                <img src={VISA} alt="bitcoin" width={22} height={22} />
                CARD
              </button>
            </div>

            <button className="bg-[#38DCC8] text-black w-full text-[14px] leading-[16px] min-h-[40px] rounded-[20.69px] border-[0.69px] border-[#FFFFFF]">
              Connect Wallet
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
