import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";
import { Link } from "react-router-dom";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedToken, setSelectedToken] = useState("BNB");

  const dropdownRef = useRef(null); // Reference for the dropdown

  const tokens = [
    {
      name: "BNB",
      icon: "/assets/icons/bnb.png",
    },
    { name: "ETH", icon: "/assets/icons/eth.png" },
    { name: "BUSD", icon: "/assets/icons/busd.png" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectToken = (token) => {
    setSelectedToken(token);
    setIsOpen(false); // Close dropdown after selection
  };

  // Close dropdown and search input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="lg:ps-[30px] lg:pe-[30px] md:ps-[15px] md:pe-[15px] ps-[19px] pe-[55px] md:py-[25px] py-[10px] md:bg-transparent bg-[#1B2430] md:relative fixed top-0 left-0 w-full md:block flex items-center justify-between shadow-lg z-[999]">
      <div className="md:hidden block">
        <Link to="/">
          <img
            src="/assets/icons/logo.png"
            className="xl:max-w-full max-w-[170px] mx-auto sm:block hidden"
          />
          <img
            src="/assets/icons/B-logo-white.png"
            className="xl:max-w-full max-w-[170px] h-[37px] mx-auto sm:hidden block"
          />
        </Link>
      </div>
      <div className="flex items-center justify-end lg:space-x-[18px] space-x-[9px] md:max-w-[1280px] md:mx-auto">
        {/* Dropdown Section */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center justify-between md:px-[13.75px] px-[5.5px] md:py-[4.5px] py-[4px] bg-[#38DCC8] rounded-full focus:outline-none md:w-[140px] w-[98px]"
          >
            <div className="md:px-[7.68px] px-[4px] py-[3px] md:w-fit w-[59px] bg-black rounded-full flex items-center">
              <img
                src={tokens.find((t) => t.name === selectedToken)?.icon}
                alt={selectedToken}
                className="md:w-[24px] w-[18px] md:h-[24px] h-[18px] rounded-full"
              />
              <span className="ml-[5px] text-white text-[9px]">
                {selectedToken}
              </span>
            </div>
            <IoIosArrowDown className="ml-[5px] text-black md:text-[20px] text-[14px]" />
          </button>

          {/* Dropdown List */}
          {isOpen && (
            <div className="absolute left-0 mt-1 md:w-[140px] w-[98px] bg-white rounded-lg shadow-lg z-10">
              {tokens.map((token, index) => (
                <div
                  key={index}
                  onClick={() => selectToken(token.name)}
                  className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                >
                  <img
                    src={token.icon}
                    alt={token.name}
                    className="md:w-[24px] w-[18px] md:h-[24px] h-[18px] rounded-full"
                  />
                  <span className="ml-[5px] text-[10px]">{token.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <button className="sm:block hidden bg-transparent hover:bg-gray-700 hover:bg-opacity-[0.3] text-primaryColor w-[110px] ms:w-[150px] md:w-[160px] text-[11.36px] md:text-[15.9px] transition py-[8px] md:py-[9px] px-4 rounded-full border border-primaryColor">
          Buy Presale
        </button>
        <button className="sm:block hidden bg-primaryColor hover:bg-teal-300 w-[110px] ms:w-[150px] md:w-[160px] text-[11.36px] md:text-[15.9px] transition py-[8px] md:py-[9px] text-black px-4 rounded-full">
          Connect Wallet
        </button>

        {/* Notification Icon */}
        <button className="md:hidden flex">
          <IoNotifications className="text-grayish text-[22px]" />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
