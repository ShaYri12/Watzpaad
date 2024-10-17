import React from "react";
import PresaleRewards from "../assets/presale-rewards.svg";
import BG from "../assets/bottom-mage.png";
import BGOne from "../assets/top-mage.png";
import Center from "../assets/center-mage.png";

const ExclusiveBenefits = () => {
  return (
    <div className="overflow-hidden bg-image px-6 py-10 w-full relative">
      <div className="text-white z-20 w-full absolute left-0 h-[300px] -bottom-5">
        <img src={BG} alt="bg" />
      </div>
      <div className="text-white  w-full absolute min-h-[300px] top-0">
        <img src={BGOne} alt="bg" />
      </div>
      <div className="text-white  h-[300px] w-[900px] rounded-full -top-32 left-[15%] absolute ">
        <img src={Center} alt="bg" className="rounded-full" />
      </div>

      <div className="relative z-10 max-w-[1280px] m-auto w-full">
        <h1 className="text-[35px] sm:text-[50px] sm:leading-[57.5px] text-white font-bold max-w-[675px] mx-auto text-center">
          Exclusive Benefits of Buying $WZP in the Presale
        </h1>
        <div className="mt-[30px] flex-wrap flex items-center justify-center gap-12">
          <div
            className="w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="p-[18px] flex items-center flex-col text-center border-[1.56px] border-[#38DCC866] rounded-md">
              <img src={PresaleRewards} alt="launchpad" />
              <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                Presale Rewards
              </h2>
              <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate
              </p>
            </div>
          </div>
          <div
            className="w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="p-[18px] flex items-center flex-col text-center border-[1.56px] border-[#38DCC866] rounded-md">
              <img src={PresaleRewards} alt="launchpad" />
              <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                Presale Rewards
              </h2>
              <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate
              </p>
            </div>
          </div>
          <div
            className="w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="p-[18px] flex items-center flex-col text-center border-[1.56px] border-[#38DCC866] rounded-md">
              <img src={PresaleRewards} alt="launchpad" />
              <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                Presale Rewards
              </h2>
              <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate
              </p>
            </div>
          </div>
          <div
            className="w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="p-[18px] flex items-center flex-col text-center border-[1.56px] border-[#38DCC866] rounded-md">
              <img src={PresaleRewards} alt="launchpad" />
              <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                Presale Rewards
              </h2>
              <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate
              </p>
            </div>
          </div>
          <div
            className="w-[378px] p-3 bg-[#1F2835CC] rounded-[10px] border-[2.6px] border-[#303945]"
            style={{ backdropFilter: "blur(25.997512817382812px)" }}
          >
            <div className="p-[18px] flex items-center flex-col text-center border-[1.56px] border-[#38DCC866] rounded-md">
              <img src={PresaleRewards} alt="launchpad" />
              <h2 className="pb-2.5 pt-[31px] text-[#FFFFFF] text-[22px] leading-[26px] font-bold">
                Presale Rewards
              </h2>
              <p className="text-[#798DA3] text-[14px] leading-[18px] font-normal font-space">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveBenefits;
