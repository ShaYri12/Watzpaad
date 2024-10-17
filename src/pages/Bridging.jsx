import React from "react";

const Bridging = () => {
  return (
    <div className="w-full flex-1 space-y-[45px] flex-grow md:space-y-[70px] lg:space-y-[100px] max-w-[1280px] mx-auto md:py-[83px] px-[30px] md:px-[80px] py-[57px] ">
      <div className="h-[336px] md:h-[360px] lg:h-[400px] w-full overflow-hidden border-2 border-[#303945] rounded-[12px]">
        <img
          src="/assets/bridging-lg.png"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="space-y-[30px] text-center md:w-[80%] mx-auto">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-white">
          What is bridging?
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-[#798DA3]">
          A blockchain bridge is essentially a mechanism that allows assets or
          information to move between two different blockchain networks. This is
          important because various blockchains may have their own protocols,
          consensus mechanisms, and native assets, making direct interaction
          challenging. Bridging solutions aim to facilitate seamless
          communication and transactions between these separate blockchains.{" "}
          <br /> <br /> It's also worth noting that the crypto space is dynamic
          and rapidly evolving, so new terminologies and technologies may
          emerge. If there have been significant developments or changes since
          my last update, you might want to check more recent sources for the
          latest information on crypto bridging.
        </p>
      </div>
      <div className="flex items-center justify-center">
        <button className="text-[18px] leading-[24px] px-[50px] py-[14px] bg-[#38DCC8] rounded-[30px]">
          Let's Go
        </button>
      </div>
    </div>
  );
};

export default Bridging;
