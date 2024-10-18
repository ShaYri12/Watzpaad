"use client";

import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { MarketData } from "../assets/MarketData";

export default function Market({ dashboard = false }) {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [search, setSearch] = useState("");
  const [stage, setStage] = useState("Stage");
  const [round, setRound] = useState("Round");

  const filteredMarketData = MarketData.filter(
    (card) =>
      card.id.includes(search) ||
      card.price.toLowerCase().includes(search.toLowerCase()) ||
      card.salePrice.toLowerCase().includes(search.toLowerCase()) ||
      card.parValue.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-[1280px] mx-auto">
      <header
        className={`flex justify-between items-center ${
          dashboard ? "mb-[32px] md:mb-[37px]" : "mb-[35px] md:mb-[68px]"
        } flex-wrap gap-[18px]`}
      >
        <h1 className="md:text-[50px] text-[30px] font-[700] md:leading-[57.5px] text-white">
          Market
        </h1>
        <div className="flex flex-wrap gap-[13px] md:gap-[25px]">
          {/* <div className="relative">
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
          </div> */}
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
        {filteredMarketData.map((card, index) => (
          <Link
            to={`${
              dashboard
                ? `/dashboard-marketplace/trading-market/${card.id}`
                : `/trading-market/${card.id}`
            }`}
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
                    {/* <img
                      src="/assets/icons/integeration-logo-3.png"
                      className="w-[14.2px] md:w-[20px]"
                    />{" "} */}
                    <p className="text-primaryColor text-[12px] md:text-[18.7px] ">
                      {card.price} BNB
                    </p>
                  </div>
                  <p className="w-full text-right text-[#798DA3] text-[10.28px] md:text-[14.03px]">
                    ${card.salePrice}
                  </p>
                </div>
              </div>
              <div className="flex w-full justify-between items-center gap-1 mt-auto flex-wrap">
                <p className="text-[10.28px] w-max md:text-[14.03px] text-[#798DA3]">
                  Par Value
                </p>
                <p className="text-white text-[12px] md:text-[17.14px] w-max">
                  {card.parValue} <span className="text-primaryColor">BBT</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
