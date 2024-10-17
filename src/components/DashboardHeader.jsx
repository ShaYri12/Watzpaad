import React, { useState, useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { IoNotifications } from "react-icons/io5";

const DashboardHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false); // For search input visibility
  const [selectedToken, setSelectedToken] = useState("BNB");
  const [searchValue, setSearchValue] = useState("");

  const searchRef = useRef(null); // Reference for the search input and button

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

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const selectToken = (token) => {
    setSelectedToken(token);
    setIsOpen(false); // Close dropdown after selection
  };

  // Close search input when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  return (
    <div className="lg:ps-[30px] lg:pe-[30px] md:ps-[15px] md:pe-[15px] ps-[19px] pe-[55px] md:py-[25px] py-[10px] md:bg-transparent bg-[#1B2430] md:relative fixed top-0 left-0 w-full md:block flex items-center justify-between shadow-lg">
      <div className="md:hidden block">
        <h3 className="text-[16.83px] leading-[19.35px] text-white">
          LOREM
          <br />
          <span className="text-primaryColor">ISPUN</span>
        </h3>
      </div>
      <div className="flex items-center justify-end lg:space-x-[18px] space-x-[9px] md:max-w-[1280px] md:mx-auto">
        {/* Dropdown Section */}
        <div className="relative">
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

        {/* Search Button and Input */}
        <div ref={searchRef}>
          <button
            className="md:hidden flex sm:ps-[31px]"
            onClick={toggleSearch}
          >
            <BiSearch className="text-[#798DA3] text-[24px]" />
          </button>

          {isSearchVisible && (
            <div className="absolute top-[53px] right-[10px] w-[300px] bg-[#1F2835] rounded-full p-3 z-20">
              <div className="flex items-center">
                <BiSearch className="text-[#798DA3] text-[18px]" />
                <input
                  type="text"
                  placeholder="Paste your address here"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="ml-2 bg-transparent placeholder:text-[#798DA3] focus:outline-none text-white w-full"
                />
              </div>
            </div>
          )}
        </div>

        <div className="md:flex hidden items-center md:w-[349px] bg-[#1F2835CC] rounded-full px-4 py-[10.5px]">
          <BiSearch className="text-[#798DA3] text-[18px]" />
          <input
            type="text"
            placeholder="Paste your address here"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="ml-2 bg-transparent placeholder:text-[#798DA3] focus:outline-none text-white w-full"
          />
        </div>

        {/* Notification Icon */}
        <button className="md:hidden flex">
          <IoNotifications className="text-[#798DA3] text-[22px]" />
        </button>
      </div>
    </div>
  );
};

export default DashboardHeader;
