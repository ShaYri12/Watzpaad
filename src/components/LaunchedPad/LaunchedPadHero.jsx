import React from "react";

const LaunchedPadHero = () => {
  return (
    <section className="min-h-screen bg-dark-blue text-white lg:px-[22px] md:pt-[80px] md:pt-[60px] pt-[50px] pb-[80px] pb-[29px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-center lg:h-[85vh] gap-[10px]">
        {/* Left Section */}
        <div className="text-left lg:max-w-[601px] px-[22px]">
          <h1 className="md:text-[65px] text-[35px] md:leading-[74.74px] leading-[40.25px] font-[700] text-primaryColor">
            Safest launchpad. multi-chain.
          </h1>
          <div className="h-[3.04px] sm:h-[6px] w-[127px] sm:w-[251px] bg-primaryColor rounded-[20px] mt-[7px] md:mt-[14px]"></div>
          <p className="md:mt-[14px] mt-[7px] text-[9.11px] md:text-[18px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <button className="px-[35.5px] py-[15px] md:text-[18px] text-[9.11px] font-[400] rounded-full border border-primaryColor text-primaryColor md:mt-[42px] mt-[21px]">
            Connect Wallet
          </button>
        </div>

        <div className="lg:w-1/2 md:w-[70%] w-full">
          <img
            src="/assets/launchpad-hero.png"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default LaunchedPadHero;
