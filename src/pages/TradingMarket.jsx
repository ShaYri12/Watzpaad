import React from "react";
import { FaStar, FaExchangeAlt } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function TradingMarket() {
  return (
    <div className="min-h-screen bg-[#09121D] p-6 pb-[100px] pt-[160px]">
      <div className="mb-4">
        <h1 className="text-2xl text-gray-400">Trading Market &gt; #1042705</h1>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="bg-gray-800 rounded-lg p-6 flex-1">
          <div className="flex items-start gap-6">
            <img
              src="/placeholder.svg?height=150&width=150"
              alt="Shiba Dev"
              className="w-36 h-36 rounded-lg"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold mb-2">#1042705</h2>
              <p className="text-xl text-gray-400 mb-2">Shiba Dev</p>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-1">Grade</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" />
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-1">Sale Price</p>
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-bold">1.0</span>
                  <span className="text-xl text-teal-400">BNB</span>
                  <span className="text-gray-400">≈$632</span>
                  <FaExchangeAlt className="text-teal-400 ml-2" />
                </div>
              </div>
              <button className="bg-teal-600 text-white py-2 px-4 rounded-full hover:bg-teal-700 transition-colors">
                Connect Wallet
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-800 rounded-lg p-6 flex-1">
          <h2 className="text-2xl font-bold mb-4">On-Chain Data</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-400">Owner Address</p>
              <p className="text-teal-400">0x9F496...2D570eE</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Contract Address</p>
              <p className="text-teal-400">0x9F496...2D570eE</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Mining Power</p>
              <p>1.0 BNB</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Decompose Status</p>
              <p className="text-teal-400">Locked</p>
            </div>
            <div>
              <p className="text-sm text-gray-400">Decomposable In</p>
              <p>26:14:34:41</p>
            </div>
          </div>
        </div>
      </div>

      <button className="mt-6 bg-teal-600 text-white py-2 px-6 rounded-full hover:bg-teal-700 transition-colors flex items-center gap-2">
        <IoMdArrowRoundBack />
        Back
      </button>
    </div>
  );
}
