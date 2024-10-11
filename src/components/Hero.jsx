import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-dark-blue text-white p-4">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="text-left lg:w-1/2">
          <h1 className="text-6xl font-bold">WATZPAAD</h1>
          <p className="text-xl mt-4">Unique web3 crowdfunding ecosystem</p>
          <p className="mt-6 text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
        </div>
        {/* Right Section (Card) */}
        <div className="mt-12 lg:mt-0 lg:w-1/3 p-8 bg-gray-800 rounded-lg">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-400">USDT Raised:</p>
              <p className="text-lg font-bold">$361,590.14 / $605,467</p>
            </div>
            <div className="flex space-x-2">
              <div className="text-center">
                <p className="text-xl font-bold">00</p>
                <p className="text-sm">Days</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">20</p>
                <p className="text-sm">Hours</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">38</p>
                <p className="text-sm">Minutes</p>
              </div>
              <div className="text-center">
                <p className="text-xl font-bold">08</p>
                <p className="text-sm">Seconds</p>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-400">TARGET: $250000</p>
            <p className="text-gray-400">1 LHUNT = $0.001</p>
            <div className="mt-6">
              <button className="bg-green-500 hover:bg-green-600 text-white w-full py-2 rounded-full">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
