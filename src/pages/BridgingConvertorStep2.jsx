// BridgingConverter.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import { FaChevronDown } from "react-icons/fa6";

const BridgingConverter2 = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-[20%]">
        <Sidebar />
      </div>
      <div className="ml-[5%] w-full flex flex-col items-center justify-center p-4">
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
        <div className=" flex justify-center w-full max-w-[950px]  items-center ">
          <div className=" p-8 rounded-lg bg-gray-800 w-full text-white shadow-lg">
            <h2 className="text-[35px] leading-[40px] font-semibold text-center mb-8">
              Ponders Suggested Route
            </h2>

            {/* ETH to BNB Conversion Section */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center bg-gray-700 p-4 rounded-lg">
                <img
                  src="/assets/icons/eth.png"
                  alt="ETH"
                  className="w-10 h-10 mr-3"
                />
                <div>
                  <p className="text-lg font-semibold">2.000 ETH</p>
                  <p className="text-sm text-gray-400">Ethereum chain</p>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-[#38DCC8] p-3 rounded-full">
                  <img
                    src="/assets/icons/recycle.png"
                    alt=""
                    className="h-6 w-6"
                  />
                </div>
              </div>

              <div className="flex items-center bg-gray-700 p-4 rounded-lg">
                <img
                  src="/assets/icons/bnb.png"
                  alt="BNB"
                  className="w-10 h-10 mr-3"
                />
                <div>
                  <p className="text-lg font-semibold">8.6951 BNB</p>
                  <p className="text-sm text-gray-400">BSC Chain</p>
                </div>
              </div>
            </div>

            {/* Total Fees Section */}
            <p className="text-center text-white text-[16px] leading-[16px] mb-6">
              Total Fees: 00000000000000
            </p>

            {/* Step and Fees Section */}
            <div className="flex justify-between items-center bg-gray-700 p-6 rounded-lg mb-6">
              <div>
                <p className="text-[25px] leading-[29px] font-semibold ">
                  Step 1
                </p>
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
                <p className="text-[25px] leading-[29px] font-semibold ">
                  Fees
                </p>
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

            {/* No Funds Message */}
            <div>
              <p className="bg-[#38DCC8] w-fit mx-auto text-center text-black text-[18px] leading-[23px] py-[10px] px-[20px] rounded-lg font-[400]">
                You do not have funds to complete the transaction
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-[22px] mt-4">
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
    </div>
  );
};

export default BridgingConverter2;
