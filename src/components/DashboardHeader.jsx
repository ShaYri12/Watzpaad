import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // For the dropdown arrow icon

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState("BNB");
  const [searchValue, setSearchValue] = useState("");

  const tokens = [
    {
      name: "BNB",
      icon: "https://cryptologos.cc/logos/binance-coin-bnb-logo.png",
    },
    { name: "ETH", icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png" },
    { name: "BTC", icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectToken = (token) => {
    setSelectedToken(token);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="lg:ps-[30px] lg:pe-[30px] md:ps-[15px] md:pe-[15px] ps-[19px] pe-[60px] md:py-[25px] py-[15px] md:bg-transparent bg-[#1B2430]">
      <div className="flex items-center justify-end space-x-4 max-w-[1280px] mx-auto">
        {/* Dropdown Section */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="flex items-center px-3 py-2 bg-[#38DCC8] rounded-full focus:outline-none"
          >
            <img
              src={tokens.find((t) => t.name === selectedToken)?.icon}
              alt={selectedToken}
              className="w-6 h-6 rounded-full"
            />
            <span className="ml-2 text-white">{selectedToken}</span>
            <FaChevronDown className="ml-2 text-white" />
          </button>

          {/* Dropdown List */}
          {isOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg z-10">
              {tokens.map((token, index) => (
                <div
                  key={index}
                  onClick={() => selectToken(token.name)}
                  className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                >
                  <img
                    src={token.icon}
                    alt={token.name}
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="ml-2">{token.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Search Bar Section */}
        <div className="flex items-center md:w-[349px] bg-[#1F2835] rounded-full px-4 py-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 14l4-4m0 0l4 4m-4-4v12"
            />
          </svg>
          <input
            type="text"
            placeholder="Paste your address here"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="ml-2 bg-transparent focus:outline-none text-white w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
