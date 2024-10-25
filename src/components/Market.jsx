"use client";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import { MarketData } from "../assets/MarketData";
import { useTranslation } from "react-i18next";

export default function Market({ dashboard = false }) {
  const { t } = useTranslation("marketplace");

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
          {t("marketHeader")}
        </h1>
        <div className="flex flex-wrap gap-[13px] md:gap-[25px]">
          <div className="relative">
            <input
              type="text"
              placeholder={t("searchPlaceholder")}
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
            <div className="card-border w-full p-[1.56px]">
              <div className="md:p-[14px] p-[8px] rounded-[10.39px] flex flex-col sm:gap-[5.54px] gap-[7px] relative z-[2] w-full">
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
                  <p className="text-grayish text-[10.28px] md:text-[14.03px] leading-[8.86px] md:leading-[16.13px]">
                    {t("unlockIn")}{" "}
                    <span className="text-white text-[12px] md:text-[18.7px] leading-[11.82px] md:leading-[21.5px]">
                      {card.unlock}
                    </span>
                  </p>
                </div>
                <div className="flex w-full justify-between items-start gap-1 mt-auto flex-wrap">
                  <p className="text-[10.28px] w-max md:text-[14.03px] text-grayish">
                    {t("salePrice")}
                  </p>
                  <div className="flex flex-col gap-[5.54px] text-right flex-grow">
                    <div className="flex items-center justify-end gap-1 text-white md:text-[17.14px] w-full">
                      <p className="text-primaryColor text-[12px] md:text-[18.7px] ">
                        {card.price} BNB
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex w-full justify-between items-start gap-1 mt-auto flex-wrap">
                  <p className="text-[10.28px] w-max md:text-[14.03px] text-grayish">
                    {t("parValue")}
                  </p>
                  <div className="flex flex-col gap-[5.54px] text-right flex-grow">
                    <div className="flex items-center justify-end gap-1 text-white md:text-[17.14px] w-full">
                      <p className="text-primaryColor text-[12px] md:text-[18.7px] ">
                        {card.salePrice} BNB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
