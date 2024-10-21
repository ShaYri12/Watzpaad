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
import { FaCaretDown } from "react-icons/fa";

const Hero = () => {
  const dropdownOptions1 = ["USDT", "ETH", "USD"];
  const dropdownOptions2 = ["BBT", "ETH", "DOGE"];

  const { t } = useTranslation("homepage");

  return (
    <section className="w-full text-white py-[50px] md:px-6 sm:px-[19px] relative z-[1]">
      {/* Orbit Path */}
      <div className="absolute w-full h-[90%] left-[-12%] z-[1] top-[-14%]">
        {/* Orbit Path */}
        <img src="/assets/circles.svg" className="absolute" />
        <img
          src="/assets/icons/star1.png"
          className="star"
          style={{
            width: "50px", // Adjust size as needed
            height: "50px", // Adjust size as needed
          }}
        />
        <img
          src="/assets/icons/star2.png"
          className="star-big"
          style={{
            width: "69.22px", // Adjust size as needed
            height: "68.08px", // Adjust size as needed
          }}
        />
      </div>

      <div className=" max-w-full  mx-auto flex flex-col-reverse gap-8 lg:gap-4 lg:flex-row justify-between w-full items-center relative z-[2]">
        <div className="lg:max-w-[590px] w-full mx-auto sm:px-0 px-[19px]">
          <h1 className="text-[#38DCC8] text-[40px] sm:text-[50px] md:text-[75px] font-bold">
            {t("hero.title")}
          </h1>
          <div className="bg-[#38DCC8] w-[250px] h-[6px] rounded-[20px] my-3 mb-6"></div>
          <h3 className="text-white font-bold sm:leading-[48px] text-[22px] sm:text-[40px]">
            {t("hero.subtitle")}
          </h3>
          <p className="text-[14px] sm:text-[18px] font-normal font-space mt-5 sm:mt-[27px]">
            {t("hero.description1")}
          </p>
          <p className="text-[14px] sm:text-[18px] font-normal font-space mt-5 sm:mt-[27px]">
            {t("hero.description2")}
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
              {t("hero.audit")}
            </button>
            <button className=" text-white font-normal bg-[#111B28] text-[18px] leading-[24px] border border-[#38DCC8] rounded-[30px] w-[180px] h-[40px] sm:h-[55px] flex items-center justify-center gap-2.5">
              <img
                src={AuditOne}
                alt="audit"
                width={35}
                height={35}
                className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px]"
              />{" "}
              {t("hero.audit")}
            </button>
          </div>
        </div>

        <div className="sm:px-0 px-[8px] overflow-x-hidden max-w-[500px] mx-auto h-full">
          <div
            className=" lg:max-w-[428px] bg-[#1F2835CC] w-full mx-auto border border-[#303945] rounded-[13.79px] sm:p-3 p-2"
            style={{ backdropFilter: " blur(34.47999954223633px)" }}
          >
            <div className="card-border w-full h-full p-[2.07px]">
              <div className="px-3.5 py-5 sm:p-5 h-full relative z-[2]">
                {/* Timer */}
                <div className="w-full bg-[#111B28] rounded-[10px] md:px-4 px-[9.21px] md:py-4 py-[13.44px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-col">
                      <span className="text-[#38DCC8] md:text-[29px] text-[23.41px] leading-[26.92px] md:leading-[34px] font-bold">
                        00
                      </span>
                      <div className="text-[#798DA3] text-[11.79px] md:text-[15px] leading-[13.56px] md:leading-[17px] font-normal">
                        {t("hero.days")}
                      </div>
                    </div>
                    <div className="flex items-center flex-col">
                      <span className="text-[#38DCC8] md:text-[29px] text-[23.41px] leading-[26.92px] md:leading-[34px] font-bold">
                        00
                      </span>
                      <div className="text-[#798DA3] text-[11.79px] md:text-[15px] leading-[13.56px] md:leading-[17px] font-normal uppercase">
                        {t("hero.hours")}
                      </div>
                    </div>
                    <div className="flex items-center flex-col">
                      <span className="text-[#38DCC8] md:text-[29px] text-[23.41px] leading-[26.92px] md:leading-[34px] font-bold">
                        00
                      </span>
                      <div className="text-[#798DA3] text-[11.79px] md:text-[15px] leading-[13.56px] md:leading-[17px] font-normal uppercase">
                        {t("hero.minutes")}
                      </div>
                    </div>
                    <div className="flex items-center flex-col">
                      <span className="text-[#38DCC8] md:text-[29px] text-[23.41px] leading-[26.92px] md:leading-[34px] font-bold">
                        00
                      </span>
                      <div className="text-[#798DA3] text-[11.79px] md:text-[15px] leading-[13.56px] md:leading-[17px] font-normal uppercase">
                        {t("hero.seconds")}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[14px] leading-[16px] font-normal text-center mt-[15px]">
                  {t("hero.usdtRaised")}
                </p>
                <Slider />

                <h2 className="mt-6 text-center text-[#798DA3] text-[17px] leading-[20px] font-bold">
                  {t("hero.target")}
                </h2>
                <div className="flex items-center justify-center mt-3 gap-2">
                  <img src={Bitcoin} alt="bitcoin" width={24} height={24} />
                  <h2 className="text-[14px] leading-[16px] font-bold">
                    1 BBT
                  </h2>
                  <h2 className="text-[#798DA3] text-[14px] leading-[16px] font-bold">
                    $0.001
                  </h2>
                </div>

                <div className="mt-4 max-w-[350px] mx-auto flex items-center gap-2 sm:gap-4">
                  <div className="border border-[#38DCC800] flex-col flex items-center gap-2.5 w-full bg-[#101A27] custom-shadow px-5 py-4 rounded-xl">
                    <h2 className="text-[#798DA3] text-[14px] leading-[12px] font-normal">
                      {t("hero.listingPrice")}
                    </h2>
                    <p className="text-[12px] sm:text-[15px] font-bold leading-[15px]">
                      $0.005 <span className="text-[#38DCC8]">(+400%)</span>
                    </p>
                  </div>
                  <div className="border border-[#38DCC800] flex-col flex items-center gap-2.5 w-full bg-[#101A27] custom-shadow px-5 py-4 rounded-xl">
                    <h2 className="text-[#798DA3] text-[14px] leading-[12px] font-normal">
                      {t("hero.nextPrice")}
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
                      {t("hero.receive")}
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

                  <div>
                    <button className="flex items-center outline-none justify-between w-[130px] px-2 py-2 text-sm font-medium text-white  border border-[#798DA3] rounded-lg ">
                      <span className="flex items-center">
                        <img src={Bitcoin} alt="audit" width={20} height={20} />
                        <span className="ml-2">BBT</span>
                      </span>
                      <FaCaretDown className="text-[#38DCC8] text-[20px]" />
                    </button>
                  </div>
                </div>

                <p className="text-[#798DA3] text-[14px] leading-[14px] font-normal text-center py-5">
                  {t("hero.availablePaymentMethods")}
                </p>

                <div className="mb-5 flex items-center gap-2">
                  <button className="flex items-center gap-2 justify-center py-2 w-full bg-[#161F2CD6] rounded-lg border border-[#38DCC8] md:text-[16px] text-[10px]">
                    <span className="md:w-[22px] md:h-[22px] w-[17.42px] h-[17.42px]">
                      <img src={Eth} alt="bitcoin" width={22} height={22} />
                    </span>
                    ETH
                  </button>
                  <button className="flex items-center gap-2 justify-center py-2 w-full bg-[#161F2CD6] rounded-lg border border-[#38DCC8] md:text-[16px] text-[10px]">
                    <span className="md:w-[22px] md:h-[22px] w-[17.42px] h-[17.42px]">
                      <img src={BNB} alt="bitcoin" width={22} height={22} />
                    </span>
                    BNB
                  </button>
                  <button className="flex items-center gap-2 justify-center py-2 w-full bg-[#161F2CD6] rounded-lg border border-[#38DCC8] md:text-[16px] text-[10px]">
                    <span className="md:w-[22px] md:h-[22px] w-[17.42px] h-[17.42px]">
                      <img src={VISA} alt="bitcoin" width={22} height={22} />
                    </span>
                    CARD
                  </button>
                </div>

                <button className="bg-[#38DCC8] text-black w-full text-[14px] leading-[16px] min-h-[40px] rounded-[20.69px] border-[0.69px] border-[#FFFFFF]">
                  {t("hero.connectWallet")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
