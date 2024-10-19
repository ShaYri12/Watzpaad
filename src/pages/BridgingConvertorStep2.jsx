// BridgingConverter.jsx
import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const BridgingConverter2 = () => {
  const [isNarrow, setIsNarrow] = useState(window.innerWidth < 500);

  const handleResize = () => {
    setIsNarrow(window.innerWidth < 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="mt-20 md:mt-0 w-full flex-1 flex flex-col items-center justify-center p-4">
      {/* Token Icon and Balance */}
      <div className="text-center mb-8">
        <div>
          <img
            src="/public/assets/icons/bnb.png"
            alt="Token Icon"
            className="w-[96px] h-[96px]"
          />
        </div>
        <div className="relative inline-block">
          <select className="bg-transparent text-green-400 text-xl mt-4 focus:outline-none appearance-none cursor-pointer">
            <option value="$2.18" className="bg-gray-900 text-green-400">
              $2.18 <FaChevronDown size={20} />
            </option>
            <option value="$5.00" className="bg-gray-900 text-green-400">
              $5.00
            </option>
            <option value="$10.00" className="bg-gray-900 text-green-400">
              $10.00
            </option>
          </select>
        </div>

        <p className="text-gray-400 text-xs">000000000000</p>
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-8">
          <div className="text-green-400">Start</div>
          <div className="text-gray-400">Summary</div>
          <div className="text-gray-400">Ponder</div>
        </div>
      </div>

      {/* Swap Form */}
      <div className="md:p-[19px] p-[10px] rounded-[13.09px] bg-[#1F2835CC] w-full max-w-[950px]">
        <div
          className={`${
            isNarrow ? "card-border" : "card-border-wide"
          } p-[1.96px] w-full h-full overflow-hidden`}
        >
          <div className="flex flex-col justify-center items-center md:py-[40px] py-[12px] md:px-6 px-[11px] relative z-[2]">
            <div className=" p-3 md:p-6 lg:p-8 bg-gray-800 w-full text-white shadow-lg">
              <h2 className="text-[24px] lg:text-[35px] leading-[28px] lg:leading-[40px] font-semibold text-center mb-8">
                Ponders Suggested Route
              </h2>

              {/* ETH to BNB Conversion Section */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center bg-gray-700 p-2 lg:p-4 rounded-lg">
                  <img
                    src="/assets/icons//ETH with bg.svg"
                    alt="ETH"
                    className="w-6 lg:w-10 h-6 lg:h-10 mr-3"
                  />
                  <div>
                    <p className="text-[14px] lg:text-lg font-semibold">
                      2.000 ETH
                    </p>
                    <p className="text-[10px] lg:text-sm text-gray-400">
                      Ethereum chain
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <div className="bg-[#38DCC8] p-1.5 lg:p-3 rounded-full">
                    <img
                      src="/assets/icons/recycle.png"
                      alt=""
                      className="h-4 lg:h-6 w-4 lg:w-6"
                    />
                  </div>
                </div>

                <div className="flex items-center bg-gray-700 p-2 lg:p-4 rounded-lg">
                  <img
                    src="/assets/icons/bnb.png"
                    alt="BNB"
                    className="w-6 lg:w-10 h-6 lg:h-10 mr-3"
                  />
                  <div>
                    <p className="text-[14px] lg:text-lg font-semibold">
                      8.6951 BNB
                    </p>
                    <p className="text-[10px] lg:text-sm text-gray-400">
                      BSC Chain
                    </p>
                  </div>
                </div>
              </div>

              {/* Total Fees Section */}
              <p className="text-center text-white text-[16px] leading-[16px] mb-6">
                Total Fees: 00000000000000
              </p>

              {/* Step and Fees Section */}
              <div className="flex flex-col lg:flex-row justify-between items-center xl:gap-[96px] md:gap-[30px] gap-[12px] bg-gray-700 p-6 rounded-lg mb-6">
                <div>
                  <p className="text-[25px] leading-[29px]  ">Step 1</p>
                  <div className="flex gap-3 mt-3">
                    <img
                      src="/assets/icons/ETH with bg.svg"
                      alt=""
                      className="h-8 w-8"
                    />

                    <div>
                      <p className="text-gray-400">
                        n publishing and graphic design
                      </p>
                      <p className="text-gray-400">00000000000000</p>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-[25px] leading-[29px]  ">Fees</p>
                  <div className="flex gap-3 mt-3">
                    <img
                      src="/assets/icons/ETH with bg.svg"
                      alt=""
                      className="h-8 w-8"
                    />

                    <div>
                      <p className="text-gray-400">
                        n publishing and graphic design
                      </p>
                      <p className="text-gray-400">00000000000000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* No Funds Message */}
            <div>
              <p className="bg-[#38DCC8] w-fit mx-auto text-center text-black text-[11px] leading-[14px] lg:text-[18px] lg:leading-[23px] py-[10px] px-[20px] rounded-lg font-[400]">
                You do not have funds to complete the transaction
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-[22px] mt-4 text-[14px] lg:text-[17px]">
        <button className="border border-[#38DCC8] text-[#38DCC8]  duration-200 px-[45px] py-[10px] rounded-full">
          Back
        </button>
        <button className="border border-[#38DCC8] text-[#38DCC8]  duration-200 px-[45px] py-[10px] rounded-full">
          More Results
        </button>
        <button className="bg-[#38DCC8] hover:bg-[#38DCC8] duration-200 px-[45px] py-[10px] rounded-full">
          Accept
        </button>
      </div>
    </div>
  );
};

export default BridgingConverter2;
