"use client";
import React, { useState } from "react";

const ROICalculator = () => {
  const phases = [
    0.001,
    0.002,
    0.003,
    0.004,
    0.005, // Presale Phase 1 to 5
    0.01,
    0.015,
    0.02,
    0.025,
    0.03, // Phase 6 to 10
    0.035,
    0.04,
    0.045,
    0.048,
    0.05, // Phase 11 to 15
    0.055,
    0.06,
    0.065,
    0.07,
    0.075, // Phase 16 to 20
  ];

  const [ozAmount, setOzAmount] = useState(0);
  const [usdAmount, setUsdAmount] = useState(0);
  const [sliderValue, setSliderValue] = useState(0); // Slider value from 0 to 19 (20 phases)
  const [tooltipVisible, setTooltipVisible] = useState(false); // Tooltip visibility

  const handleOzChange = (e) => {
    const value = e.target.value;
    setOzAmount(value);
    setUsdAmount(value * phases[sliderValue]); // Calculate USD based on OZ amount and current price
  };

  const handleSliderChange = (e) => {
    const newSliderValue = parseInt(e.target.value);
    setSliderValue(newSliderValue);
    setUsdAmount(ozAmount * phases[newSliderValue]); // Update USD based on the new price
  };

  const handleMouseEnter = () => setTooltipVisible(true);
  const handleMouseLeave = () => setTooltipVisible(false);

  const handleReset = () => {
    setOzAmount(0);
    setUsdAmount(0);
    setSliderValue(0);
  };

  return (
    <div className="mt-20 md:mt-14 w-full flex flex-col items-center justify-center text-white py-6 px-4">
      <div className="w-full max-w-[1040px] mx-auto bg-gray-800 py-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 border-b-[0.5px] border-white/30 px-4 pb-5">
          Token Amount Calculator
        </h1>

        <div className="px-4">
          <label className="block mb-2">
            How much BlockBoost token you have:
          </label>
          <div className="flex items-center justify-between px-4 h-[50px] mb-4 w-full rounded-lg bg-gray-900 border border-gray-600 text-white">
            <input
              type="text"
              value={ozAmount}
              onChange={handleOzChange}
              className="w-[60%] sm:w-[80%] outline-none bg-transparent appearance-none"
              placeholder="0 BlockBoost"
            />
            <div className="flex items-center gap-2">
              <img
                src="/assets/icons/B-logo.png"
                width={24}
                height={24}
                alt="BlockBoost Logo"
              />
              <h3 className="text-sm font-mono uppercase">BlockBoost</h3>
            </div>
          </div>

          {/* USD Amount */}
          <label className="block mb-2">USD Amount:</label>
          <input
            type="text"
            value={`$${usdAmount.toFixed(2)}`}
            readOnly
            className="w-full outline-none flex items-center justify-between px-4 h-[50px] mb-4 rounded-lg bg-gray-900 border border-gray-600 text-white"
          />

          {/* Box for Price and Slider */}
          <div className="bg-gray-900 w-full rounded-lg p-4 border border-gray-600">
            <div className="flex items-center justify-between gap-4">
              <div
                className="w-full sm:w-[200px] gap-1.5 flex items-center flex-col text-center bg-gray-800 border border-gray-600 rounded-lg  px-2 sm:px-4 py-4 text-white"
                style={{ left: `${(sliderValue / 19) * 100}%` }}
              >
                <div className="text-gray-300 text-xs sm:text-base">
                  Presale Phase {sliderValue + 1}
                </div>
                <div className="text-[#38DCC8] text-sm sm:text-base">
                  ${phases[sliderValue].toFixed(3)}
                </div>
              </div>

              <div className="flex flex-col gap-1.5 w-full sm:w-[200px] text-center bg-gray-800 border border-gray-600 rounded-lg px-2 sm:px-4 py-4 text-white">
                <span className="text-gray-300 text-xs sm:text-base">Launch Price: </span>
                <span className="text-[#38DCC8] text-sm sm:text-base">$0.075</span>
              </div>
            </div>

            <div className="relative my-8">
              <input
                type="range"
                min="0"
                max="19" 
                step="1"
                value={sliderValue}
                onChange={handleSliderChange}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className="w-full rounded-lg appearance-none h-[14px] sm:h-[20px] slider"  
                style={{
                  background: `linear-gradient(to right, #38DCC8 ${
                    (sliderValue / 19) * 100
                  }%, #4a5568 ${(sliderValue / 19) * 100}%)`,
                }}
              />

              {tooltipVisible && (
                <div
                  className="absolute top-[30px] z-30 left-0 transform -translate-x-1/2 bg-gray-800 border border-gray-600 rounded-lg p-2 text-white"
                  style={{ left: `${(sliderValue / 19) * 100}%` }}
                >
                  <div className="text-green-400 text-xs">
                    ${phases[sliderValue].toFixed(3)}
                  </div>
                  <div className="text-nowrap mt-1.5 text-gray-300 text-xs">
                    Phase {sliderValue + 1}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handleReset}
              className="w-full bg-red-500 hover:bg-red-700 text-white py-2 rounded"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
