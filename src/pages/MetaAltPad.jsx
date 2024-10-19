import React, { useEffect } from "react";
import {
  FaCalendar,
  FaTelegramPlane,
  FaTwitter,
  FaBullhorn,
  FaGlobe,
} from "react-icons/fa";
import { BsUnlock } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function MetaAltPad() {
  const { t } = useTranslation("homepage");
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="min-h-screen bg-[#09121D] px-[17.5px] md:pb-[100px] pb-[62px] md:pt-[140px] pt-[90px] text-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row w-full md:gap-[13px] gap-[50px]">
          {/* Left Section */}
          <div className="bg-[#1F2835CC] rounded-[13.09px] border-[3.27px] border-[#303945] lg:px-[18px] px-[15.46px] lg:py-[30px] py-[25.76px] lg:w-[33%] md:w-[45%]">
            <div className="flex items-center md:mb-[41px] mb-[35.23px] md:gap-[26px] gap-[22.32px]">
              <div className="md:min-h-[89.75px] md:min-w-[89.75px] min-h-[77.05px] min-w-[77.05px] rounded-full flex items-center justify-center">
                <img
                  src="/assets/icons/B-logo.png"
                  className="md:w-[89.75px] w-[77.05px] md:h-[89.75px] h-[77.05px]"
                />
              </div>
              <div className="flex flex-col justify-center gap-[4px] h-full my-auto">
                <h2 className="text-[25.76px] md:text-[30px] text-white leading-[26px] p-0 m-0 font-[700]">
                  MetaAltPad
                </h2>
                <p className="text-[13.74px] md:text-[16px] text-primaryColor">
                  BBT / BUSD
                </p>
                <div className="flex gap-[10px] flex-wrap">
                  <span className="flex items-center justify-center gap-1 bg-[#6C757D] text-[9.7px] sm:text-[11.3px] px-[6.57px] sm:px-[7.6px] py-[3.43px] sm:py-[4px] rounded-full text-white">
                    <span className="sm:w-[8.44px] w-[7.25px] sm:h-[8.44px] h-[7.25px] rounded-full bg-white"></span>{" "}
                    Register
                  </span>
                  <span className="flex items-center justify-center gap-1 bg-[#28A745] text-[9.7px] sm:text-[11.3px] px-[6.57px] sm:px-[7.6px] py-[3.43px] sm:py-[4px] rounded-full text-white">
                    <span className="sm:w-[8.44px] w-[7.25px] sm:h-[8.44px] h-[7.25px]">
                      <BsUnlock className="w-full h-full" />
                    </span>{" "}
                    Levels
                  </span>
                  <span className="flex items-center justify-center gap-1 bg-[#FFC107] text-[9.7px] sm:text-[11.3px] px-[6.57px] sm:px-[7.6px] py-[3.43px] sm:py-[4px] rounded-full text-black">
                    KYC
                  </span>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* From Section */}
              <div className="bg-[#0B1725] px-[21.46px] md:px-[25px] md:py-[9.75px] py-[8.37px] md:rounded-[16px] rounded-[13.74px] md:mb-[30px] mb-[25.78px] relative border border-[#DEE2E6]">
                <div className="flex justify-between items-center text-sm text-[#798DA3] mb-[4.08px] mb-[4.75px] text-[#798DA3] text-[13.74px] md:text-[16px]">
                  <span>From</span>
                  <span>Max. 0 Balance: 0</span>
                </div>
                <div className="flex justify-between items-center">
                  <input
                    type="number"
                    placeholder="0"
                    className="bg-transparent text-white outline-none w-full"
                  />
                  <div className="flex items-center gap-[4.29px] md:gap-[5px]">
                    <img
                      src="/assets/icons/eth.png"
                      alt=""
                      className="md:w-[24px] w-[20.61px] md:h-[24px] h-[20.61px] rounded-full"
                      width={24}
                      height={24}
                    />
                    <span className="text-white text-[12.88px] md:text-[15px]">
                      ETH
                    </span>
                  </div>
                </div>
              </div>

              {/* To Section */}
              <div className="bg-[#0B1725] px-[21.46px] md:px-[25px] md:py-[9.75px] py-[8.37px] md:rounded-[16px] rounded-[13.74px] relative border border-[#DEE2E6]">
                <div className="flex justify-between items-center text-sm text-[#798DA3] mb-[4.08px] mb-[4.75px] text-[#798DA3] text-[13.74px] md:text-[16px]">
                  <span>To</span>
                </div>
                <div className="flex justify-between items-center">
                  <input
                    type="number"
                    placeholder="0"
                    className="bg-transparent text-white text-lg outline-none w-full"
                  />
                  <div className="flex items-center md:gap-[8px] gap-[6px]">
                    <span className="bg-primaryColor md:text-[12px] text-[10.3px] text-black px-[6.87px] md:px-[8px] py-[3.43px] md:py-[4.5px] md:rounded-[4px] rounded-[3.43px]">
                      Max
                    </span>
                    <img
                      src="/assets/icons/B-logo.png"
                      alt=""
                      className="md:w-[24px] w-[20.61px] md:h-[24px] h-[20.61px] rounded-full"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>

              {/* Connect Wallet Button (Positioned Absolutely) */}
              <button className=" bg-primaryColor hover:bg-teal-300 text-[15.45px] md:text-[18px] w-max transition py-[12.68px] md:py-[15px] text-black md:px-[35.5px] px-[30px] rounded-full absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2">
                Connect Wallet
              </button>
            </div>
            <div className="flex items-center justify-center mt-[11.16px] md:mt-[13px] md:mb-[30px] mb-[26.19px]">
              <button className="bg-transparent hover:bg-gray-700 hover:bg-opacity-[0.3] text-primaryColor mx-auto text-[11.36px] md:text-[17px] transition py-[7.5px] px-[12.5px] rounded-full border border-primaryColor">
                Not open yet
              </button>
            </div>
            <p className="md:mb-[3px] mb-[2.58px] text-white text-[15.45px] md:text-[18px]">
              1 ETH = 452000000 BBT
            </p>
            <div className="mb-[18.57px]">
              <div className="slider-container w-full">
                <div className="flex justify-between items-center text-[11.19px] md:text-[13.03px] mb-[3.26px]">
                  <span className="text-[#798DA3]">IN PROGRESS</span>
                  <span className="text-primaryColor text-[26.5px] md:text-[30.87px]">
                    25%
                  </span>
                </div>
                <div className="relative h-[6.68px] bg-[#161F2C] rounded-full">
                  <div
                    className="absolute top-0 left-0 h-[6.68px] bg-primaryColor rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                  <div className="absolute -top-[4px] left-[23%] w-[14.49px] h-[14.49px] bg-primaryColor rounded-full border-[1.6px] border-[#1F2835] pointer-events-none"></div>
                </div>
                <div className="flex justify-between text-[#798DA3] text-[13.03px] mt-[3.26px] md:mt-1">
                  <span>0 ETH</span>
                  <span>0 / 0122231252134555 BBT</span>
                </div>
              </div>
            </div>
            <p className="text-[11.5px] sm:text-[12.02px] md:text-[14px] text-white flex items-center ">
              <span className="text-primaryColor md:min-w-[16px] min-h-[12.02px] md:min-h-[16px] min-h-[12.02px] md:w-[16px] w-[12.02px] md:h-[16px] h-[12.02px] md:mr-[10px] mr-[8.58px]">
                <FaCalendar className="md:text-[16px] text-[12.02px]" />
              </span>
              Sale ** Nov, 12:00 UTC - ** Nov, 18:00 UTC
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-[#1F2835CC] rounded-[13.09px] border-[3.27px] border-[#303945] px-[15.46px] md:px-[28px] md:py-[35px] py-[25.76px] flex-1">
            <div className="flex flex-col md:gap-[24px] gap-[19.84px]">
              <div className="flex justify-between items-center">
                <div className="flex items-center md:gap-[16px] gap-[13px]">
                  <div className="md:min-h-[46.25px] md:min-w-[46.25px] min-h-[38.24px] min-w-[38.24px] rounded-full flex items-center justify-center">
                    <img
                      src="/assets/icons/B-logo.png"
                      className="md:h-[46.25px] md:w-[46.25px] h-[38.24px] w-[38.24px]"
                    />
                  </div>
                  <h1 className="md:text-[30px] text-[20px] font-[700]">
                    MetaAltPad Private Sale
                  </h1>
                </div>
              </div>
              <p className="text-[#798DA3] md:text-[17.19px] text-[14.21px] w-full">
                {t("hero.description1")}
              </p>

              {/* Social Icons */}
              <div className="flex md:gap-[22px] gap-[12.4px] text-primaryColor flex-wrap">
                <FaTelegramPlane className="md:text-[25px] text-[20px]" />
                <FaBullhorn className="md:text-[25px] text-[20px]" />
                <FaTwitter className="md:text-[25px] text-[20px]" />
                <FaGlobe className="md:text-[25px] text-[20px]" />
              </div>

              {/* Pool Details Section */}
              <div>
                <h2 className="text-[19.84px] md:text-[24px] font-[700] text-primaryColor md:mb-[11px] mb-[9.09px]">
                  Pool Details
                </h2>
                <div className="flex md:flex-row flex-col flex-wrap gap-[30px] xl:gap-[54px] pb-[29.25px] md:border-b border-white">
                  <div className="flex md:gap-[16px] gap-[13.23px] flex-1 md:min-w-[297px]">
                    <div className="flex flex-col gap-[6px] font-[700] text-[12.4px] md:text-[15px] text-white">
                      <span className="w-max">Access Type:</span>
                      <span>Hard Cap:</span>
                      <span>Swap Rate:</span>
                    </div>
                    <div className="flex flex-col gap-[6px] font-[400] text-[12.4px] md:text-[15px] text-[#798DA3]">
                      <span className="">Whitelist</span>
                      <span className="">100 ETH</span>
                      <span className="text-primaryColor">
                        452000000 BBT{" "}
                        <span className="text-[#798DA3]">per</span> 1 ETH
                      </span>
                    </div>
                  </div>

                  <div className="flex md:gap-[16px] gap-[13.23px] flex-1 md:min-w-[100px]">
                    <div className="flex flex-col gap-[6px] font-[700] text-[12.4px] md:text-[15px] text-white">
                      <span>Start:</span>
                      <span>End:</span>
                      <span>Opens:</span>
                    </div>
                    <div className="flex flex-col gap-[6px] font-[400] text-[12.4px] md:text-[15px] text-[#798DA3]">
                      <span className="">** Nov, 12:00 pm UTC</span>
                      <span className="">** Nov, 18:00 pm UTC</span>
                      <span className="">** Nov, 17:00 pm UTC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Token Details */}
            <div className="md:pt-[34px] pt-[20px]">
              <div className="flex md:flex-row flex-col flex-wrap md:items-center md:justify-center md:gap-[11.5px] gap-[2px]">
                <div className="flex md:gap-[5.28px] gap-[13.23px] text-[12.4px] md:text-[15.85px]">
                  <span className="font-[700] text-white">Token:</span>
                  <span className="text-primaryColor font-[400]">
                    MetaAltPad (BBT)
                  </span>
                </div>
                <div className="flex md:gap-[5.28px] gap-[13.23px] text-[12.4px] md:text-[15.85px]">
                  <span className="font-[700] text-white">Type:</span>{" "}
                  <span className="text-[#798DA3] font-[400]">BEP-20</span>
                </div>
                <div className="flex md:gap-[5.28px] gap-[13.23px] text-[12.4px] md:text-[15.85px]">
                  <span className="font-[700] text-white">Total Supply:</span>{" "}
                  <span className="text-[#798DA3] font-[400]">
                    1,000,000,000,000 BBT
                  </span>
                </div>
                <div className="flex md:gap-[5.28px] gap-[13.23px] text-[12.4px] md:text-[15.85px]">
                  <span className="font-[700] text-white">Initial Supply:</span>{" "}
                  <div className="text-primaryColor font-[400]">
                    TBA, <span className="text-[#798DA3]">Market cap</span> TBA
                  </div>
                </div>
                <div className="flex md:gap-[5.28px] gap-[13.23px] text-[12.4px] md:text-[15.85px]">
                  <span className="font-[700] text-white">Distribution:</span>{" "}
                  <span className="text-[#798DA3] font-[400]">Auto Claim</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="md:block hidden mt-[26px] bg-primaryColor text-black text-[14.35px] md:text-[18px] font-[400] md:py-[15px] py-[12px] px-[28px] rounded-full md:w-[153px] w-[122px]"
          style={{
            boxShadow: "0px 2.85px 16.1px 0px #38DCC88C",
          }}
          onClick={() => navigate(-1)} // Go back to the previous page
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
