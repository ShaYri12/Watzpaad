"use client";

import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Marketplace() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("Stage");
  const [round, setRound] = useState("Round");

  const cards = [
    {
      id: "1035365",
      unlock: "28D",
      price: "1.000 BNB",
      salePrice: "$635,000",
      parValue: "18,600,000.0000",
    },
    {
      id: "2037462",
      unlock: "15D",
      price: "0.850 BNB",
      salePrice: "$523,000",
      parValue: "14,500,000.0000",
    },
    {
      id: "3084573",
      unlock: "60D",
      price: "2.300 BNB",
      salePrice: "$1,470,000",
      parValue: "30,000,000.0000",
    },
    {
      id: "4025389",
      unlock: "90D",
      price: "0.750 BNB",
      salePrice: "$475,000",
      parValue: "13,200,000.0000",
    },
    {
      id: "5096471",
      unlock: "45D",
      price: "1.500 BNB",
      salePrice: "$950,000",
      parValue: "21,000,000.0000",
    },
    {
      id: "6023587",
      unlock: "30D",
      price: "0.980 BNB",
      salePrice: "$621,000",
      parValue: "18,500,000.0000",
    },
    {
      id: "7094365",
      unlock: "10D",
      price: "0.600 BNB",
      salePrice: "$385,000",
      parValue: "11,000,000.0000",
    },
    {
      id: "8053926",
      unlock: "20D",
      price: "1.200 BNB",
      salePrice: "$760,000",
      parValue: "19,800,000.0000",
    },
  ];

  const filteredCards = cards.filter(
    (card) =>
      card.id.includes(search) ||
      card.price.toLowerCase().includes(search.toLowerCase()) ||
      card.salePrice.toLowerCase().includes(search.toLowerCase()) ||
      card.parValue.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#09121D]">
      <div className="relative w-full md:pb-[90px] md:pt-[200px] pt-[140px] pb-[50px] md:min-h-[380px] min-h-[270px]">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-[22px]">
          <h1 className="text-primaryColor text-[35px] text-center md:text-[65px] md:leading-[74.74px] leading-[40.25px] font-[700] relative z-[3] max-w-[587px] mx-auto">
            BlockBoost Marketplace
          </h1>
          <div className="h-[3.65px] min-h-[3.65px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[9px] md:mt-[10px] mx-auto"></div>
          <p className="md:mt-[14px] mt-[11.55px] text-[10.94px] md:text-[18px] text-white max-w-[801px] mx-auto text-center">
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content
          </p>
          <div className="flex flex-wrap gap-[16.43px] md:gap-[23px] relative z-[3] max-w-[587px] mx-auto md:mt-[26px] mt-[24px]">
            <button className="flex-grow bg-primaryColor hover:bg-teal-300 w-[121.8px] md:w-[170.51px] text-[11.36px] md:text-[15.9px] transition py-[9.4px] md:py-[13px] text-black px-4 rounded-full">
              Create NFT
            </button>
            <button className="flex-grow bg-transparent hover:bg-gray-700 hover:bg-opacity-[0.3] text-primaryColor w-[121.8px] md:w-[170.51px] text-[11.36px] md:text-[15.9px] transition py-[9.4px] md:py-[13px] px-4 rounded-full border border-primaryColor">
              Sell NFT
            </button>
          </div>
        </div>
      </div>
      <div className="px-[20px] md:py-[83px] py-[57px]">
        <div className="max-w-[1280px] mx-auto">
          <header className="flex justify-between items-center mb-[35px] md:mb-[68px] flex-wrap gap-[18px]">
            <h1 className="md:text-[50px] text-[30px] font-[700] md:leading-[57.5px] text-white">
              Market
            </h1>
            <div className="flex flex-wrap gap-[13px] md:gap-[25px]">
              <div className="relative">
                <select
                  value={stage}
                  onChange={(e) => setStage(e.target.value)}
                  className="appearance-none bg-[#1F2835] text-primaryColor text-[12px] leading-[13.8px] font-[400] w-[92.11px] md:w-[168px] cursor-pointer rounded-full py-[15.4px] px-[15.23px] focus:outline-none focus:ring-1 focus:ring-primaryColor"
                >
                  <option>All NFTs</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <IoMdArrowDropdown
                  size={19}
                  className="absolute right-[15.23px] top-1/2 transform -translate-y-1/2 text-primaryColor"
                />
              </div>
              <div className="relative">
                <select
                  value={round}
                  onChange={(e) => setRound(e.target.value)}
                  className="appearance-none bg-[#1F2835] text-primaryColor text-[12px] leading-[13.8px] font-[400] w-[92.11px] md:w-[168px] cursor-pointer rounded-full py-[15.4px] px-[15.23px] focus:outline-none focus:ring-2 focus:ring-primaryColor"
                >
                  <option>Smart Filter</option>
                  <option>Option 1</option>
                  <option>Option 2</option>
                </select>
                <IoMdArrowDropdown
                  size={19}
                  className="absolute right-[15.23px] top-1/2 transform -translate-y-1/2 text-primaryColor"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="bg-primaryColor text-black rounded-full py-[11px] pl-[45px] pr-4 w-[200px] md:w-[224px] focus:outline-none focus:ring-2 focus:ring-teal-600 placeholder:text-black"
                />
                <CiSearch
                  size={20}
                  className="absolute left-[18px] top-1/2 transform -translate-y-1/2 text-black"
                />
              </div>
            </div>
          </header>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[11px] md:gap-[20px]">
            {filteredCards.map((card, index) => (
              <Link
                to={`/trading-market/${card.id}`}
                key={index}
                className="bg-[#1F2835CC] rounded-[10.39px] border-[2.6px] border-[#303945] flex flex-col md:p-[7.79px] p-[4.28px]"
              >
                <div className="md:p-[14px] p-[8px] rounded-[10.39px] border border-primaryColor flex flex-col sm:gap-[5.54px] gap-[7px]">
                  <div className="rounded-[10.39px] mb-[7.27px] md:mb-[13.34px] flex items-center justify-center h-[137px] md:h-[249.34px] overflow-hidden border-[2.6px] border-primaryColor">
                    <img
                      src="/assets/marketplace-card.png"
                      alt="Pixel Cat"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex w-full justify-between items-center gap-1 flex-wrap">
                    <p className="text-[12px] md:text-[18.7px] text-white">
                      #{card.id}
                    </p>
                    <p className="text-[#798DA3] text-[10.28px] md:text-[14.03px] leading-[8.86px] md:leading-[16.13px]">
                      Unlock in{" "}
                      <span className="text-white text-[12px] md:text-[18.7px] leading-[11.82px] md:leading-[21.5px]">
                        {card.unlock}
                      </span>
                    </p>
                  </div>
                  <div className="flex w-full justify-between items-start gap-1 mt-auto flex-wrap">
                    <p className="text-[10.28px] w-max md:text-[14.03px] text-[#798DA3]">
                      Sale Price
                    </p>
                    <div className="flex flex-col gap-[5.54px] text-right flex-grow">
                      <div className="flex items-center justify-end gap-1 text-white md:text-[17.14px] w-full">
                        <img
                          src="/assets/icons/integeration-logo-3.png"
                          className="w-[14.2px] md:w-[20px]"
                        />{" "}
                        <p className="text-primaryColor text-[12px] md:text-[18.7px] ">
                          {card.price}
                        </p>
                      </div>
                      <p className="w-full text-right text-[#798DA3] text-[10.28px] md:text-[14.03px]">
                        {card.salePrice}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full justify-between items-center gap-1 mt-auto flex-wrap">
                    <p className="text-[10.28px] w-max md:text-[14.03px] text-[#798DA3]">
                      Par Value
                    </p>
                    <p className="text-white text-[12px] md:text-[17.14px] w-max">
                      {card.parValue}{" "}
                      <span className="text-primaryColor">MAP</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
