import React, { useEffect } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function Win() {
  const { t } = useTranslation("win");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="bg-[#09121D]">
      <div className=" z-20 w-full md:pb-[90px] md:pt-[160px] pt-[160px] pb-[56px] block relative">
        <img
          src="/assets/bg-stars-shades.png"
          className="w-full h-full object-cover absolute top-0 left-0 z-[1]"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-[22px] z-[4]">
          <h1 className="text-center text-primaryColor text-[35px] md:text-[65px] md:leading-[74.74px] leading-[45.44px] font-[700]">
            {t("title")}
          </h1>
          <div className="h-[3.65px] min-h-[3.65px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[9px] md:mt-[15px] mx-auto"></div>
          <p className="md:mt-[14px] mt-[11.55px] text-[10.94px] md:text-[18px] max-w-[801px] mx-auto text-center text-white">
            {t("descr")}
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b  to-[rgba(9, 18, 29, 0)] from-[#09121D] z-[2]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#09121D] to-[rgba(9, 18, 29, 0)] z-[2]"></div>
      </div>

      <div className="relative">
        <img
          src="/assets/win-bg-shade.png"
          className="w-full h-full absolute top-0 left-0 z-[4]"
        />
        <div className="md:px-[22px] px-[12px] ">
          <div className="max-w-[1280px] mx-auto pb-[84px] pt-[50px]">
            <div
              className="bg-[#1F2835CC] text-white px-[7px] md:px-[15px] md:py-[12px] py-[13px] rounded-[12.84px] md:mb-[73px] mb-[100px] border-[3.21px] border-[#303945]"
              style={{
                backdropFilter: "blur(32.1074104309082px)",
              }}
            >
              <div className="border border-primaryColor rounded-[6.42px] md:px-4 px-[8px] md:py-[32px] py-[45px]">
                <div className="flex flex-col md:gap-[24px] gap-[17px] max-w-[956px] mx-auto">
                  <h1 className="text-[17.43px] md:text-[24.65px] font-[400] md:leading-[32.86px] leading-[23.24px] text-center text-primaryColor">
                    {t("blockboost-giveaway")}
                  </h1>
                  <p className="text-center text-grayish md:text-[20px] md:leading-[24px] font-[300]">
                    {t("descr-two")}
                  </p>
                  <p className="text-center text-grayish md:text-[20px] md:leading-[24px] font-[300]">
                    {t("descr-three")}
                  </p>
                  <p className="text-center text-primaryColor md:text-[20px] text-[14.14px] font-[700]">
                    {t("note")}
                  </p>
                  <p className="text-center text-white md:text-[24.65px] text-[17.43px] md:leading-[32.86px] leading-[23.24px] font-[700]">
                    {t("join-now")}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative z-20 flex flex-col md:gap-[37px] gap-[43px]">
              <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-6 gap-[38px] ">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center text-white sm:max-w-[305.54px] max-w-[262.46px]">
                  <div
                    className="flex flex-col lg:gap-[9px] gap-[8.38px] bg-[#1F2835] lg:rounded-[28.71px] rounded-[24.66px] lg:px-[50px] px-[40.37px] lg:py-[23px] py-[20px] w-fit"
                    style={{
                      boxShadow: `-3.33px 3.33px 3.33px 0px #FFFFFF63 inset, 
                          2.22px -2.22px 22.08px 0px #D6D6D62B inset`,
                      backdropFilter: "blur(82.17px)",
                    }}
                  >
                    <h3 className="lg:text-[31.42px] text-[26.99px] md:leading-[47.14px] leading-[40.49px] font-[400]">
                      {t("step")} {/* Translates to "Step" */}
                    </h3>
                    <h1 className="text-primaryColor lg:text-[63.52px] text-[54.56px] lg:leading-[47.14px] leading-[40.49px] font-[700]">
                      01
                    </h1>
                  </div>
                  <p className="lg:mt-[15px] mt-[12.89px] text-white lg:text-[27px] text-[23.19px] lg:leading-[31.05px] leading-[26.67px] font-[700]">
                    {t("submit-wallet-address")}{" "}
                    {/* "Submit Your ERC20 Wallet Address" */}
                  </p>
                  <p className="lg:text-[17.41px] text-[14.96px] text-grayish lg:mt-[12.83px] mt-[11px]">
                    {t("provide-wallet-desc")}{" "}
                    {/* "Provide your ERC20 Wallet address to qualify for the giveaway." */}
                  </p>
                </div>

                {/* Dotted Line */}
                <div className="lg:h-1 lg:w-[182px] h-[182px] w-1 border-dotted lg:border-b lg:border-r-0 border-r border-primaryColor relative lg:mt-[-100px]">
                  <div className="w-[12px] h-[12px] min-w-[12px] min-h-[12px] bg-primaryColor rounded-full absolute lg:left-1/2 lg:top-[-2.5px] left-[-2.2px] top-1/2 transform lg:-translate-x-1/2 lg:translate-y-0 -translate-y-1/2"></div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center text-white sm:max-w-[305.54px] max-w-[262.46px]">
                  <div
                    className="flex flex-col lg:gap-[9px] gap-[8.38px] bg-[#1F2835] lg:rounded-[28.71px] rounded-[24.66px] lg:px-[50px] px-[40.37px] lg:py-[23px] py-[20px] w-fit"
                    style={{
                      boxShadow: `-3.33px 3.33px 3.33px 0px #FFFFFF63 inset, 
                          2.22px -2.22px 22.08px 0px #D6D6D62B inset`,
                      backdropFilter: "blur(82.17px)",
                    }}
                  >
                    <h3 className="lg:text-[31.42px] text-[26.99px] md:leading-[47.14px] leading-[40.49px] font-[400]">
                      {t("step")}
                    </h3>
                    <h1 className="text-primaryColor lg:text-[63.52px] text-[54.56px] lg:leading-[47.14px] leading-[40.49px] font-[700]">
                      02
                    </h1>
                  </div>
                  <p className="lg:mt-[15px] mt-[12.89px] text-white lg:text-[27px] text-[23.19px] lg:leading-[31.05px] leading-[26.67px] font-[700]">
                    {t("complete-quests")} {/* "Complete All the Quests" */}
                  </p>
                  <p className="lg:text-[17.41px] text-[14.96px] text-grayish lg:mt-[12.83px] mt-[11px]">
                    {t("maximize-chance")}{" "}
                    {/* "Follow all the steps carefully to maximize your chance of winning." */}
                  </p>
                </div>

                {/* Dotted Line */}
                <div className="lg:h-1 lg:w-[182px] h-[182px] w-1 border-dotted lg:border-b lg:border-r-0 border-r border-primaryColor relative lg:mt-[-100px]">
                  <div className="w-[12px] h-[12px] min-w-[12px] min-h-[12px] bg-primaryColor rounded-full absolute lg:left-1/2 lg:top-[-2.5px] left-[-2.2px] top-1/2 transform lg:-translate-x-1/2 lg:translate-y-0 -translate-y-1/2"></div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center text-white sm:max-w-[305.54px] max-w-[262.46px]">
                  <div
                    className="flex flex-col lg:gap-[9px] gap-[8.38px] bg-[#1F2835] lg:rounded-[28.71px] rounded-[24.66px] lg:px-[50px] px-[40.37px] lg:py-[23px] py-[20px] w-fit"
                    style={{
                      boxShadow: `-3.33px 3.33px 3.33px 0px #FFFFFF63 inset, 
                          2.22px -2.22px 22.08px 0px #D6D6D62B inset`,
                      backdropFilter: "blur(82.17px)",
                    }}
                  >
                    <h3 className="lg:text-[31.42px] text-[26.99px] md:leading-[47.14px] leading-[40.49px] font-[400]">
                      {t("step")}
                    </h3>
                    <h1 className="text-primaryColor lg:text-[63.52px] text-[54.56px] lg:leading-[47.14px] leading-[40.49px] font-[700]">
                      03
                    </h1>
                  </div>
                  <p className="lg:mt-[15px] mt-[12.89px] text-white lg:text-[27px] text-[23.19px] lg:leading-[31.05px] leading-[26.67px] font-[700]">
                    {t("refer-friends")}{" "}
                    {/* "Refer Friends and Boost Your Entries" */}
                  </p>
                  <p className="lg:text-[17.41px] text-[14.96px] text-grayish lg:mt-[12.83px] mt-[11px]">
                    {t("earn-entries")}{" "}
                    {/* "Earn +50 entries for every friend you refer." */}
                  </p>
                </div>
              </div>

              <p className="text-center text-white md:text-[24.65px] text-[19.33px] font-[700]">
                {t("follow-steps")}{" "}
                {/* "Follow these steps for your shot at winning $50,000. Good luck! 🌟" */}
              </p>

              <div className="flex items-center justify-center gap-[26.38px]">
                <div
                  className="bg-[#1F2835CC] md:rounded-[5.28px] rounded-[4.14px] md:w-[72px] w-[57.94px] md:h-[67px] h-[53.8px] md:min-w-[72px] min-w-[57.94px] md:min-h-[67px] min-h-[53.8px] flex justify-center items-center text-white cursor-pointer transition duration-300 ease-in-out transform hover:scale-105"
                  onClick={() => {
                    // Handle onClick action
                  }}
                >
                  <BsGlobe2 className="text-[30px]" />
                </div>
                <a
                  href="https://gleam.io/GmQLU/rexas-millionaire-giveaway"
                  className="text-grayish md:text-[30.62px] text-[24.02px]"
                >
                  https://gleam.io/GmQLU/rexas-millionaire-giveaway
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
