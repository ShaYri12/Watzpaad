import React, { useEffect, useState, useRef } from "react";
import { GoPlus } from "react-icons/go";
import { LuMinus } from "react-icons/lu";
import { useTranslation } from "react-i18next";

const Stacking = () => {
  const { t } = useTranslation("stacking"); // Hook for translations
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  const [BBT, setBBT] = useState(0);
  const cardData = [
    {
      id: 1,
      time: t("flexible"),
      apy: "12%",
      totalStacked: "45,614,253.41",
    },
    {
      id: 2,
      time: "7 days",
      apy: "20%",
      totalStacked: "85,000,000.01",
    },
    {
      id: 3,
      time: "14 days",
      apy: "25%",
      totalStacked: "120,000,000",
    },
    {
      id: 4,
      time: "30 days",
      apy: "30%",
      totalStacked: "96,000,000.23",
    },
    {
      id: 5,
      time: "180 days",
      apy: "75%",
      totalStacked: "55,000,000",
    },
    {
      id: 6,
      time: "365 days",
      apy: "100%",
      totalStacked: "68,000,000.82",
    },
  ];

  const [isModalOpenOne, setIsModalOpenOne] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalRefOne = useRef(null);
  const modalRefTwo = useRef(null);

  const openModalOne = () => setIsModalOpenOne(true);
  const closeModalOne = () => setIsModalOpenOne(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRefOne.current && !modalRefOne.current.contains(event.target)) {
        closeModalOne();
      }
    };
    if (isModalOpenOne) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpenOne]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRefTwo.current && !modalRefTwo.current.contains(event.target)) {
        closeModal();
      }
    };
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  return (
    <div className="bg-[#09121D]">
      <div className="relative w-full md:pb-[90px] md:pt-[160px] pt-[120px] pb-[50px] block">
        <img
          src="/assets/bg-stars-shades.png"
          className="w-full h-full object-cover absolute top-0 left-0 z-[1]"
        />
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-[22px] z-[3]">
          <h1 className="text-center text-primaryColor text-[35px] md:text-[65px] md:leading-[74.74px] leading-[45.44px] font-[700]">
            {t("title")}
          </h1>
          <div className="h-[3.65px] min-h-[3.65px] md:h-[6px] md:min-h-[6px] w-[127px] md:w-[251px] bg-primaryColor rounded-[20px] mt-[9px] md:mt-[15px] mx-auto"></div>
          <p className="md:mt-[14px] mt-[11.55px] text-[10.94px] md:text-[18px] max-w-[801px] mx-auto text-center text-white">
            {t("subtitle")}
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-[100px] bg-gradient-to-b  to-[rgba(9, 18, 29, 0)] from-[#09121D] z-[2]"></div>
        <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gradient-to-t from-[#09121D] to-[rgba(9, 18, 29, 0)] z-[2]"></div>
      </div>

      <div className="md:px-[22px] px-[12px] relative">
        <img
          src="/assets/stacking-bg-shade.png"
          className="w-full h-full absolute top-0 left-0 z-[1]"
        />
        <div className="max-w-[1280px] mx-auto relative z-[2]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[25px] md:py-[80px] py-[57px]">
            {cardData.map((card) => (
              <div
                key={card.id}
                className="bg-[#1F2835CC] rounded-[13.09px] border-[2.6px] border-[#303945] flex flex-col sm:p-[11px] p-[9.28px]"
              >
                <div className="card-border p-[1.96px] w-full">
                  <div className="rounded-[6.55px] flex flex-col sm:gap-[28px] md:px-[12px] px-[10.12px] gap-[23.62px] relative z-[2] w-full">
                    <div className="w-full flex items-center justify-between pb-[28px] border-b border-b-[#676767] md:pt-[39px] pt-[33.73px] xl:px-[28px] px-[8px] gap-3">
                      <div className="md:min-w-[90px] min-w-[75.91px] md:min-h-[90px] min-h-[75.91px]">
                        <img
                          src="/assets/icons/B-logo.png"
                          alt=""
                          className="md:w-[90px] w-[75.91px] md:h-[90px] h-[75.91px]"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h2 className="text-primaryColor text-[23.29px] md:text-[27.61px] md:leading-[31.75px] font-[700]">
                          Stake BBT
                        </h2>
                        <p className="text-grayish text-[15.18px] md:text-[18px]">
                          BBT - {card.time}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col sm:gap-[28px] gap-[23.62px] sm:px-[25px] px-[15px] md:py-[7px]">
                      <div
                        className="bg-[#1F2835CC] md:rounded-[10px] rounded-[8.43px] md:px-[22.5px] px-[18.91px] md:py-[17px] py-[15.05px]"
                        style={{
                          boxShadow:
                            "-3.33px 3.33px 3.33px 0px #FFFFFF63 inset, 2.22px -2.22px 22.08px 0px #D6D6D62B inset",
                          backdropFilter: "blur(82.17px)",
                        }}
                      >
                        <div className="flex justify-between text-grayish md:text-[18px] md:leading-[20.7px] w-full font-[400]">
                          <span>{t("apy")}</span>
                          <span>{card.apy}</span>
                        </div>
                        <div className="flex justify-between text-grayish w-full font-[400]">
                          <span>{t("time")}</span>
                          <span>{card.time}</span>
                        </div>
                      </div>

                      <div className="flex gap-1 justify-between items-center">
                        <div className="">
                          <p className="text-grayish text-[15.18px] md:text-[18px] md:leading-[20.7px]">
                            {t("stakedBBT")}
                          </p>
                          <p className="text-primaryColor text-[23.29px] md:text-[27.61px] md:leading-[31.75px] font-[700]">
                            {BBT} BBT
                          </p>
                        </div>

                        <div className="flex flex-col items-center gap-[12.65px] md:gap-[15px] md:w-[109px] w-[91.93px]">
                          <div className="flex gap-2 w-full justify-between items-center">
                            <div className="">
                              <button
                                onClick={openModalOne}
                                className="md:w-[37.7px] md:min-w-[37.7px] w-[31.79px] max-h-[37.7px] md:min-h-[37.7px] min-h-[31.79px] h-[31.79px] bg-[#878787] rounded-full flex items-center justify-center"
                              >
                                <GoPlus className="text-white text-[20px]" />
                              </button>

                              {isModalOpenOne && (
                                <div
                                  ref={modalRefOne}
                                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                                >
                                  <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] max-w-full">
                                    {/* Modal header */}
                                    <div className="flex justify-between items-center mb-4">
                                      <h2 className="text-xl font-bold">
                                        Stake BBT Tokens
                                      </h2>
                                      <button
                                        onClick={closeModalOne}
                                        className="text-gray-400 text-xl"
                                      >
                                        ×
                                      </button>
                                    </div>

                                    {/* Input and APY display */}
                                    <div className="mb-4">
                                      <div className="flex justify-between items-center mb-2">
                                        <span className="text-gray-500">
                                          0 BBT Available
                                        </span>
                                        <button className="text-primaryColor font-bold">
                                          Max BlockBoost
                                        </button>
                                      </div>
                                      <input
                                        type="text"
                                        placeholder="0"
                                        className="w-full px-3 py-2 border border-gray-300 rounded outline-none"
                                      />
                                      <div className="mt-2 text-gray-500">
                                        APY: 12%
                                      </div>
                                    </div>

                                    {/* Action buttons */}
                                    <div className="flex justify-between w-full gap-5">
                                      <button
                                        onClick={closeModalOne}
                                        className="w-full px-4 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-100"
                                      >
                                        Cancel
                                      </button>
                                      <button className="w-full px-4 py-2 bg-primaryColor text-white rounded ">
                                        Confirm
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                            <div>
                              <button
                                onClick={openModal}
                                className="md:w-[37.7px] md:min-w-[37.7px] w-[31.79px] max-h-[37.7px] md:min-h-[37.7px] min-h-[31.79px] h-[31.79px] bg-[#878787] rounded-full flex items-center justify-center"
                              >
                                <LuMinus className="text-white text-[18px]" />
                              </button>

                              {isModalOpen && (
                                <div
                                  ref={modalRefTwo}
                                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                                >
                                  <div className="bg-white p-6 rounded-lg shadow-lg w-[500px] max-w-full">
                                    {/* Modal Header */}
                                    <div className="flex justify-between items-center mb-4">
                                      <h2 className="text-xl font-bold">
                                        Withdraw BBT Tokens
                                      </h2>
                                      <button
                                        onClick={closeModal}
                                        className="text-gray-400 hover:text-gray-600 text-3xl"
                                      >
                                        &times;
                                      </button>
                                    </div>

                                    {/* Modal Content */}
                                    <div className="mb-4 text-right">
                                      <p className="text-gray-700 text-lg">
                                        0 BBT Available
                                      </p>
                                      <p className="text-gray-400 text-lg">
                                        20% early withdraw fee
                                      </p>
                                    </div>

                                    {/* Modal Buttons */}
                                    <div className="flex justify-between w-full gap-5">
                                      <button
                                        onClick={closeModal}
                                        className="w-full px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded"
                                      >
                                        Cancel
                                      </button>
                                      <button className="w-full px-4 py-2 bg-primaryColor text-white rounded">
                                        Confirm
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                          <button
                            className="bg-primaryColor text-black text-[12px] md:text-[14px] font-[400] py-3 px-[28px] w-full rounded-full"
                            style={{
                              boxShadow: "0px 2.85px 16.1px 0px #38DCC88C",
                            }}
                          >
                            {t("claim")}
                          </button>
                        </div>
                      </div>

                      <div className="flex gap-1 justify-between items-center md:pb-[39px] pb-[33.73px]">
                        <p className="text-grayish text-[15.18px] md:text-[18px]">
                          {t("totalStaked")}
                        </p>
                        <p className="text-primaryColor text-[15.18px] md:text-[18px]">
                          {card.totalStacked}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacking;
