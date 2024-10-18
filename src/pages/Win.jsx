import React, { useEffect } from "react";
import { BsGlobe2 } from "react-icons/bs";
import { useTranslation } from "react-i18next";

export default function Win() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="bg-[#09121D]">
      <div className="relative w-full md:pb-[90px] md:pt-[160px] pt-[155px] pb-[50px] block">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-[22px]">
          <h1 className="text-center text-primaryColor text-[35px] md:text-[65px] md:leading-[74.74px] leading-[45.44px] font-[700]">
            {t("blockBoostTitle")}
          </h1>
          <div className="h-[3.65px] min-h-[3.65px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[9px] md:mt-[15px] mx-auto"></div>
          <p className="md:mt-[14px] mt-[11.55px] text-[10.94px] md:text-[18px] max-w-[801px] mx-auto text-center md:text-[#798DA3] text-white">
            {t("blockBoostDesc")}
          </p>
        </div>
      </div>

      <div className="md:px-[22px] px-[12px]">
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
                  {t("joinNow")}
                </h1>
                <p className="text-center text-[#798DA3] md:text-[20px] md:leading-[24px] font-[300]">
                  {t("minParticipation")}
                </p>
                <p className="text-center text-[#798DA3] md:text-[20px] md:leading-[24px] font-[300]">
                  {t("secureSpot")}
                </p>
                <p className="text-center text-primaryColor md:text-[20px] text-[14.14px] font-[700]">
                  {t("embedLink")}
                </p>
                <a
                  href="https://gleam.io/GmQLU/rexas-millionaire-giveaway"
                  className="text-center text-white md:text-[24.65px] text-[17.43px] md:leading-[32.86px] leading-[23.24px] font-[700]"
                >
                  {t("linkText")}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:gap-[37px] gap-[43px]">
            <div className="flex lg:flex-row flex-col justify-center items-center lg:gap-6 gap-[38px] bg-[#0A0F19]">
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
                    Step
                  </h3>
                  <h1 className="text-primaryColor lg:text-[63.52px] text-[54.56px] lg:leading-[47.14px] leading-[40.49px] font-[700]">
                    01
                  </h1>
                </div>
                <p className="lg:mt-[15px] mt-[12.89px] text-white lg:text-[27px] text-[23.19px] lg:leading-[31.05px] leading-[26.67px] font-[700]">
                  {t("step1Title")}
                </p>
                <p className="lg:text-[17.41px] text-[14.96px] text-[#798DA3] lg:mt-[12.83px] mt-[11px]">
                  {t("step1Desc")}
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
                    Step
                  </h3>
                  <h1 className="text-primaryColor lg:text-[63.52px] text-[54.56px] lg:leading-[47.14px] leading-[40.49px] font-[700]">
                    02
                  </h1>
                </div>
                <p className="lg:mt-[15px] mt-[12.89px] text-white lg:text-[27px] text-[23.19px] lg:leading-[31.05px] leading-[26.67px] font-[700]">
                  {t("step2Title")}
                </p>
                <p className="lg:text-[17.41px] text-[14.96px] text-[#798DA3] lg:mt-[12.83px] mt-[11px]">
                  {t("step2Desc")}
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
                    Step
                  </h3>
                  <h1 className="text-primaryColor lg:text-[63.52px] text-[54.56px] lg:leading-[47.14px] leading-[40.49px] font-[700]">
                    03
                  </h1>
                </div>
                <p className="lg:mt-[15px] mt-[12.89px] text-white lg:text-[27px] text-[23.19px] lg:leading-[31.05px] leading-[26.67px] font-[700]">
                  {t("step3Title")}
                </p>
                <p className="lg:text-[17.41px] text-[14.96px] text-[#798DA3] lg:mt-[12.83px] mt-[11px]">
                  {t("step3Desc")}
                </p>
              </div>
            </div>

            {/* Final Step */}
            <p className="lg:text-[27px] text-[23.19px] text-[#798DA3] lg:leading-[31.05px] leading-[26.67px] font-[400] text-center md:mt-[42px] mt-[42px]">
              {t("finalStepText")}
            </p>
          </div>
        </div>
      </div>

      <div className="pb-[90px] px-[22px]">
        <div className="flex md:items-center justify-between md:flex-row flex-col max-w-[1280px] mx-auto">
          <h3 className="text-primaryColor text-[12.83px] md:text-[20px] leading-[15.62px] md:leading-[24px] font-[300] md:mb-0 mb-4">
            <span className="flex items-center gap-[8.56px]">
              <BsGlobe2 className="text-[20px]" />
              {t("websiteText")}
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
}
