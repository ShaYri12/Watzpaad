// BridgingConverter.jsx
import React from "react";
import Sidebar from "../components/Sidebar";
import { FaChevronDown } from "react-icons/fa6";
import Dropdown from "../shared/Dropdown";

const BridgingConverter = () => {
  return (
    <div className="flex min-h-screen justify-end items-end">
      <div className="hidden lg:block md:w-[17%]">
        <Sidebar />
      </div>
      <div className="w-full md:w-[80%] flex flex-col items-center justify-center p-4">
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
        <div className="bg-gray-800 h-full p-6 rounded-xl shadow-lg text-white w-full max-w-[950px]">
          <div className="flex items-center  flex-wrap justify-center gap-2 space-y-3 ">
            {/* Swap/Bridge Dropdown */}
            <span className="text-lg"> </span>
            <span className="text-lg">I want to </span>
            <Dropdown
              options={["SWAP/BRIDGE", "SWAP/BRIDGE", "SWAP/BRIDGE"]}
              defaultOption="SWAP/BRIDGE"
            />
            {/* From Chain Dropdown */}
            <span className="text-lg">from</span>
            <Dropdown
              options={["Ethereum", "Ethereum", "Ethereum"]}
              defaultOption="Ethereum"
            />
            <span className="text-lg">Chain, my</span>
            <br />
            {/* Token Dropdown */}
            <Dropdown options={["Eth", "Eth", "Eth"]} defaultOption="Eth" />
            <span className="text-lg">token, to</span>
            {/* To Chain Dropdown */}
            <Dropdown options={["BCS", "BCS", "BCS"]} defaultOption="BCS" />
            <span className="text-lg">chain</span>
            {/* To Token Dropdown */}

            <Dropdown options={["BNB", "BNB", "BNB"]} defaultOption="BNB" />

            <span className="text-lg">tokens</span>
          </div>

          {/* Submit Button */}
        </div>
        <div className="flex justify-center mt-4">
          <button className="bg-[#38DCC8] hover:bg-teal-500 duration-200 px-[45px] py-[10px] rounded-full">
            Let’s Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default BridgingConverter;
