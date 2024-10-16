import React from "react";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { BsMegaphone } from "react-icons/bs";
import { BiGlobe } from "react-icons/bi";
import { SiBinance } from "react-icons/si";

export default function MetaAltPad() {
  return (
    <div className="min-h-screen bg-[#09121D] px-[22px] md:pb-[100px] pb-[62px] md:pt-[140px] pt-[90px] text-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row w-full gap-4">
          {/* Left Section */}
          <div className="bg-gray-800 rounded-lg p-6 flex-1">
            <div className="flex items-center mb-4">
              <div className="bg-purple-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                <svg
                  className="w-8 h-8 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 10C10.1046 10 11 9.10457 11 8C11 6.89543 10.1046 6 9 6C7.89543 6 7 6.89543 7 8C7 9.10457 7.89543 10 9 10Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2.67004 18.9501L7.60004 15.6401C8.39004 15.1101 9.53004 15.1701 10.24 15.7801L10.57 16.0701C11.35 16.7401 12.61 16.7401 13.39 16.0701L17.55 12.5001C18.33 11.8301 19.59 11.8301 20.37 12.5001L22 13.9001"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">MetaAltPad</h2>
                <p className="text-sm text-gray-400">MAP / BUSD</p>
              </div>
            </div>
            <div className="flex gap-2 mb-4">
              <span className="bg-gray-700 text-xs px-2 py-1 rounded">
                Register
              </span>
              <span className="bg-green-700 text-xs px-2 py-1 rounded">
                Levels
              </span>
              <span className="bg-yellow-600 text-xs px-2 py-1 rounded">
                KYC
              </span>
            </div>
            <div className="mb-4">
              <p className="text-sm mb-1">From</p>
              <div className="flex bg-gray-700 rounded overflow-hidden">
                <input
                  type="text"
                  className="bg-transparent flex-grow p-2 outline-none"
                  placeholder="0"
                />
                <div className="bg-gray-600 px-3 py-2 flex items-center">
                  <SiBinance className="text-yellow-500 mr-2" />
                  <span>BNB</span>
                </div>
              </div>
            </div>
            <button className="w-full bg-teal-500 text-white py-2 rounded mb-4 hover:bg-teal-600 transition-colors">
              Connect Wallet
            </button>
            <div className="mb-4">
              <p className="text-sm mb-1">To</p>
              <div className="flex bg-gray-700 rounded overflow-hidden">
                <input
                  type="text"
                  className="bg-transparent flex-grow p-2 outline-none"
                  placeholder="0"
                />
                <button className="bg-teal-500 px-3 py-2">Max</button>
              </div>
            </div>
            <button className="w-full bg-teal-800 text-teal-300 py-2 rounded mb-4">
              Not open yet
            </button>
            <p className="mb-2">1 BNB = 452000000 MAP</p>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>IN PROGRESS</span>
                <span>25%</span>
              </div>
              <div className="bg-gray-700 h-2 rounded-full">
                <div className="bg-teal-500 h-full w-1/4 rounded-full"></div>
              </div>
              <div className="flex justify-between text-sm mt-1">
                <span>0 BNB</span>
                <span>0 / 0122231252134555 MAP</span>
              </div>
            </div>
            <p className="text-sm">
              <span className="text-teal-500 mr-2">⏱</span>
              Sale ** Nov, 12:00 UTC - ** Nov, 18:00 UTC
            </p>
          </div>

          {/* Right Section */}
          <div className="bg-gray-800 rounded-lg p-6 flex-1">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">MetaAltPad Private Sale</h2>
              <SiBinance className="text-yellow-500 text-2xl" />
            </div>
            <p className="text-sm mb-4">
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document In
              publishing and graphic design, Lorem ipsum is a placeholder text
              commonly used to demonstrate the visual form of a document
            </p>
            <div className="flex gap-4 mb-6">
              <FaTelegramPlane className="text-teal-500 text-xl" />
              <BsMegaphone className="text-teal-500 text-xl" />
              <FaTwitter className="text-teal-500 text-xl" />
              <BiGlobe className="text-teal-500 text-xl" />
            </div>
            <h3 className="text-xl font-bold mb-4 text-teal-500">
              Pool Details
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-400">Access Type:</p>
                <p>Whitelist</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Start:</p>
                <p>** Nov, 12:00 pm UTC</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Hard Cap:</p>
                <p>100 BNB</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">End:</p>
                <p>** Nov, 18:00 pm UTC</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Swap Rate:</p>
                <p>452000000 MAP per 1 BNB</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Opens:</p>
                <p>** Nov, 17:00 pm UTC</p>
              </div>
            </div>
            <hr className="border-gray-700 mb-6" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-400">Token:</p>
                <p>MetaAltPad (MAP)</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Type:</p>
                <p>BEP-20</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Total Supply:</p>
                <p>1,000,000,000,000. MAP</p>
              </div>
              <div>
                <p className="text-sm text-gray-400">Initial Supply:</p>
                <p>TBA, Market cap TBA</p>
              </div>
              <div className="col-span-2">
                <p className="text-sm text-gray-400">Distribution:</p>
                <p>Auto Claim</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
