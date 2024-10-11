import React from "react";

const LaunchedPadHero = () => {
  return (
    <section className="min-h-screen bg-dark-blue text-white p-4">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-center md:h-[85vh]">
        {/* Left Section */}
        <div className="text-left lg:max-w-[587px]">
          <h1 className="md:text-[65px] text-[34px] md:leading-[74.74px] font-[700] text-[#38DCC8]">
            Safest launchpad. multi-chain.
          </h1>
          <div className="h-[6px] w-[251px] bg-[#38DCC8] rounded-[20px] mt-[14px]"></div>
          <p className="mt-[14px] md:text-[18px] text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
          <button className="px-[35.5px] py-[15px] text-[18px] font-[400] rounded-full border border-[#38DCC8] text-[#38DCC8] mt-[42px]">
            Connect Wallet
          </button>
        </div>
      </div>
    </section>
  );
};

export default LaunchedPadHero;
