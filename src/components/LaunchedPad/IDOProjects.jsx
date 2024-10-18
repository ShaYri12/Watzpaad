import { useState } from "react";
import { BsTwitter } from "react-icons/bs";
import { FaGlobe, FaTelegramPlane } from "react-icons/fa";
import { IoMdMegaphone } from "react-icons/io";
import { Link } from "react-router-dom";

export default function IDOProjects() {
  const [activeTab, setActiveTab] = useState("Upcoming");
  const tabs = ["Upcoming", "Ongoing", "Ended"];
  return (
    <div className="">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex md:gap-[54px] gap-[20px] mb-[42px] items-center justify-center flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(tab)}
              className={`${
                activeTab === tab
                  ? "text-primaryColor font-[700] border-b-[3px] border-primaryColor"
                  : "font-[400] text-white"
              } text-[14.95px] md:text-[22px] pb-[14px] px-[5px] transition`}
            >
              {tab} {tab === "Upcoming" && "[3]"}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px]">
          <Link
            to="/metaaltpad"
            className="p-[1px] rounded-[13.09px]"
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.29) 0%, #38DCC8 100%)",
            }}
          >
            <div
              className="bg-[#1F2835] rounded-[13.09px] xl:px-[36px] lg:px-[25px] px-[20px] py-[26px] h-full"
              style={{ backdropFilter: "blur(32.728843688964844px)" }}
            >
              <span className="flex gap-[7px] ms-auto w-fit bg-primaryColor text-black text-[11.45px] px-[14px] py-[5.3px] rounded-full">
                <img
                  src="/assets/icons/integeration-logo-3.png"
                  className="w-[16px] h-[16px]"
                />{" "}
                Upcoming
              </span>
              <div className="flex flex-col justify-center items-center">
                <div
                  className="bg-white rounded-full min-w-[74.48px] min-h-[74.48px] flex items-center justify-center"
                  style={{ boxShadow: "0px 3.24px 40.48px 0px #38DCC85E" }}
                >
                  <img
                    src="/assets/icons/rocket.png"
                    className="w-[36px] h-[36px]"
                  />
                </div>

                <h2 className="md:text-[21.01px] font-[700] md:leading-[20px] mt-[24px]">
                Blockboost sale
                </h2>
                <p className="text-primaryColor md:text-[18.89px] md:leading-[28.34px]">
                BBT/ETH
                </p>
                <p className="text-[#798DA3] text-center mt-[8px]">
                Unique WEB3 Crowdfunding Ecosystem

                </p>
                <div className="flex space-x-2 mt-[20px]">
                  <button className="bg-[#38DCC840] w-[34px] h-[34px] flex items-center justify-center rounded-full">
                    <IoMdMegaphone className="w-[17px] h-[17px] text-primaryColor" />
                  </button>
                  <button className="bg-[#38DCC840] w-[34px] h-[34px] flex items-center justify-center rounded-full">
                    <FaTelegramPlane className="w-[17px] h-[17px] text-primaryColor" />
                  </button>
                  <button className="bg-[#38DCC840] w-[34px] h-[34px] flex items-center justify-center rounded-full">
                    <BsTwitter className="w-[17px] h-[17px] text-primaryColor" />
                  </button>
                  <button className="bg-[#38DCC840] w-[34px] h-[34px] flex items-center justify-center rounded-full">
                    <FaGlobe className="w-[17px] h-[17px] text-primaryColor" />
                  </button>
                </div>
              </div>
              <div className="mt-[18px]">
                <p className="text-primaryColor text-[15.28px]">Swap Rate:</p>
                <p className="text-[17.19px] font-[400]">452000000 $BBT per 1 ETH</p>
              </div>
              <div className="mt-[8.5px]">
                <p className="text-primaryColor text-[15.28px]">Start:</p>
                <p className="text-[17.19px] font-[400]">17th Oct 2024</p>
              </div>
              <div className="slider-container w-full mt-10">
                <span className="flex w-full justify-end mb-[-2px] text-primaryColor text-[28.43px]">
                  25%
                </span>
                <div className="relative h-[6.68px] bg-[#161F2C] rounded-full">
                  <div
                    className="absolute top-0 left-0 h-[6.68px] bg-primaryColor rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                  <div className="absolute -top-[4px] left-[23%] w-[14.49px] h-[14.49px] bg-primaryColor rounded-full border-[1.6px] border-[#1F2835] pointer-events-none"></div>
                </div>
                <div className="flex justify-between mt-[6px] text-[9.55px] text-[#798DA3]">
                  <span>0 ETH</span>
                  <span>0 / 0122231252134555 BBT</span>
                </div>
              </div>
              <div className="mt-[26px]">
                <p className="text-[#798DA3] text-[15.28px] leading-[20.05px]">
                  Total Raise
                </p>
                <p className="text-[28.64px] font-[500] leading-[22.92px] text-primaryColor">
                  $25000
                </p>
              </div>
              {/* <p className="text-[17.19px] text-white mt-[18px]">
                This IDO requires Whitelist to Participate.
              </p> */}
            </div>
          </Link>
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </div>
  );
}

const Skeleton = () => {
  return (
    <div
      className="p-[1px] rounded-[13.09px]"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0.29) 0%, #38DCC8 100%)",
      }}
    >
      <div
        className="bg-[#1F2835] rounded-[13.09px] md:px-[36px] lg:px-[25px] px-[20px] py-[26px] h-full"
        style={{ backdropFilter: "blur(32.728843688964844px)" }}
      >
        <span className="flex gap-[7px] ms-auto w-fit text-black text-[11.45px] rounded-full">
          <div className="w-[105.22px] h-[28.63px] bg-[#305B56] rounded-full" />
        </span>
        <div className="flex flex-col justify-center items-center mt-[18px]">
          <div className="bg-[#305B56] rounded-full min-w-[74.48px] min-h-[74.48px] flex items-center justify-center">
            <img
              src="/assets/icons/logo-placeholder.png"
              className="w-[46.5px] h-[46.5px]"
            />
          </div>
          <h2 className="mb-[25px] text-[21.01px] font-[700] mt-[25px]">
            Coming Soon
          </h2>
          <div className="flex items-center justify-center mx-auto flex-wrap gap-[10px] w-full mx-auto">
            <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[79px]" />
            <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[45px]" />
            <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[57px]" />
            <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[24px]" />
            <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[56px]" />
            <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[71.79px]" />
            <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[40.9px]" />
            <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[51.8px]" />
            <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[21.81px]" />
            <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[50.89px]" />
            <div className="flex items-center justify-center gap-[10px]">
              <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[40.9px]" />
              <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[51.8px]" />
              <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[21.81px]" />
            </div>
            <div className="w-full flex itemsc-enter justify-center">
              <span className="text-[#798DA3] text-center mt-[13px] bg-[#305B56] rounded-full h-[8px] w-[51.8px]" />
            </div>
          </div>
          <div className="flex gap-[10px] mt-[27px]">
            {[...Array(4)].map((_, index) => (
              <button
                key={index}
                className="bg-[#305B56] w-[34px] h-[34px] flex items-center justify-center rounded-full"
              >
                <img
                  src="/assets/icons/logo-placeholder.png"
                  className="w-[20px] h-[20px]"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="mt-[45px]">
          <div className="text-primaryColor text-[15.28px] bg-[#305B56] rounded-full h-[8px] w-[71.79px]" />
          <div className="text-[17.19px] font-[400] bg-[#305B56] rounded-full h-[18px] w-[113px] mt-[7px]" />
        </div>
        <div className="mt-[15px]">
          <div className="text-primaryColor text-[15.28px] bg-[#305B56] rounded-full h-[8px] w-[71.79px]" />
          <div className="text-[17.19px] font-[400] bg-[#305B56] rounded-full h-[18px] w-[113px] mt-[7px]" />
        </div>
        <div className="slider-container w-full mt-[15px]">
          <div className="flex w-full ms-auto justify-end text-primaryColor text-[28.43px] bg-[#305B56] rounded-full h-[18px] w-[47px] mb-[8.5px]" />
          <div className="mt-[8.6pxpx] h-[6.68px] w-full bg-[#305B56] rounded-full"></div>
          <div className="flex justify-between text-[9.55px] text-[#798DA3] mt-[6px]">
            <div className="bg-[#305B56] rounded-full h-[5px] w-[47px]" />
            <div className="bg-[#305B56] rounded-full h-[5px] w-[47px]" />
          </div>
        </div>
        <div className="mt-[33px]">
          <div className="text-[#798DA3] text-[15.28px] leading-[20.05px] bg-[#305B56] rounded-full h-[8px] w-[71.79px]" />
          <div className="text-[28.64px] font-[500] leading-[22.92px] text-primaryColor bg-[#305B56] rounded-full h-[18px] w-[113px] mt-[7px]" />
        </div>
        <div className="bg-[#305B56] rounded-full h-[6.68px] w-full mt-[46px]" />
      </div>
    </div>
  );
};
