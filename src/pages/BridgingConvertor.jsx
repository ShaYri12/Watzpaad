// BridgingConverter.jsx
import React from "react";
import Sidebar from "../components/Sidebar";

const BridgingConverter = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="bg-gray-800 text-white flex-grow p-10">
        <header className="flex justify-between items-center mb-10">
          <div className="text-lg font-semibold">BNB</div>
          <input
            type="text"
            placeholder="Paste your address here"
            className="bg-gray-700 px-4 py-2 rounded-lg w-64 focus:outline-none"
          />
        </header>
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-12 mb-6">
            <div className="text-center">
              <div className="text-teal-400">Start</div>
              <div className="w-2 h-2 bg-teal-400 rounded-full mx-auto mt-2"></div>
            </div>
            <div className="text-center">
              <div className="text-gray-400">Summary</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto mt-2"></div>
            </div>
            <div className="text-center">
              <div className="text-gray-400">Ponder</div>
              <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto mt-2"></div>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg text-center w-2/3 mb-8">
            <p className="text-2xl font-bold">
              I Want to{" "}
              <span className="bg-teal-600 px-2 py-1 rounded-md">
                SWAP/BRIDGE
              </span>{" "}
              from{" "}
              <span className="bg-teal-600 px-2 py-1 rounded-md">Ethereum</span>{" "}
              Chain, my{" "}
              <span className="bg-teal-600 px-2 py-1 rounded-md">Eth</span>{" "}
              token, to{" "}
              <span className="bg-teal-600 px-2 py-1 rounded-md">BCS</span>{" "}
              Chain{" "}
              <span className="bg-teal-600 px-2 py-1 rounded-md">BNB</span>{" "}
              tokens
            </p>
            <div className="flex justify-center space-x-4 mt-6">
              <div className="text-center">
                <span className="text-3xl font-bold">2</span>
                <div className="text-xs">00000</div>
                <button className="bg-teal-600 px-2 py-1 rounded-lg mt-2">
                  MAX
                </button>
              </div>
            </div>
          </div>
          <button className="bg-teal-600 text-lg px-6 py-2 rounded-lg">
            Let's Go
          </button>
        </div>
      </div>
    </div>
  );
};

export default BridgingConverter;
