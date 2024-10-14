import React from "react";

const LaunchedPadHero = () => {
  return (
    <section className="bg-dark-blue text-white px-[22px] md:pt-[80px] md:pt-[60px] sm:pt-[40px] pt-[10px] pb-[80px] sm:pb-[40px] pb-[20.93px] overflow-hidden relative">
      <img
        src="/assets/launchpad-bg.png"
        className="absolute top-0 left-0 w-full z-[1] object-cover md:h-fit sm:h-full h-[100%] object-top"
      />

      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:h-[70vh] min-h-[40vh] gap-[10px] relative z-[2] md:pt-0 pt-[20px]">
        {/* Left Section */}
        <div className="text-left max-w-[979px] mx-auto text-center">
          <h1 className="md:text-[65px] text-[31.27px] md:leading-[74.74px] leading-[35.96px] font-[700] text-primaryColor">
            Safest launchpad. multi-chain.
          </h1>
          <div className="h-[3.04px] min-h-[3px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[7px] md:mt-[15px] mx-auto"></div>
          <p className="md:mt-[14px] mt-[7px] text-[8.66px] md:text-[18px] text-white max-w-[801px] mx-auto">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content
          </p>
          <button className="px-[16.93px] md:px-[35.5px] py-[7.22px] md:py-[15px] md:text-[18px] text-[9.11px] font-[400] rounded-full border border-primaryColor text-primaryColor md:mt-[42px] mt-[21px]">
            Connect Wallet
          </button>
        </div>
      </div>
    </section>
  );
};

export default LaunchedPadHero;
