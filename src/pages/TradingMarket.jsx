import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useParams } from "react-router-dom";
import { MarketData } from "../assets/MarketData";

export default function TradingMarket({ dashboard = false }) {
  const { id } = useParams(); // Get the ID from the URL
  const [item, setItem] = useState(null);
  const [isNarrow, setIsNarrow] = useState(window.innerWidth < 500);

  const handleResize = () => {
    setIsNarrow(window.innerWidth < 500);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    // Search for the item in MarketData by ID
    const foundItem = MarketData.find((marketItem) => marketItem.id === id);

    if (foundItem) {
      setItem(foundItem); // Set the found item to state
    }
  }, [id]);

  // If no item is found, you can handle the case
  if (!item) {
    return (
      <div className="min-h-screen bg-[#09121D] p-6 pb-[100px] pt-[160px] text-white">
        <h1>Item not found</h1>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-[#09121D] relative ${
        !dashboard &&
        "px-[22px] md:pb-[100px] pb-[62px] md:pt-[160px] pt-[90px]"
      }`}
    >
      <img
        src="/assets/trading-market-bg-shade.png"
        className={`w-full h-full absolute top-0 left-0 z-[1]${
          dashboard && "hidden"
        }]`}
      />
      <div className="relative z-20 max-w-[1280px] mx-auto">
        <div
          className={` ${dashboard ? "mb:mb-[43px] mb-[39px]" : "mb-[43px]"}`}
        >
          <h1 className="text-[20.11px] md:text-[30px] text-[#798DA3] flex items-center md:gap-[18px] gap-[12px]">
            Trading Market{" "}
            <MdKeyboardArrowRight
              className="md:text-[24px] text-[18px]"
              color="#798DA3"
            />{" "}
            <span className="text-white">#{id}</span>
          </h1>
        </div>

        <div
          className={`flex flex-col ${
            dashboard ? "lg:flex-row" : "md:flex-row"
          } md:gap-[19px] gap-[38px]`}
        >
          <div className="bg-[#1F2835CC] rounded-[26.71px] border-[2.6px] border-[#303945] flex md:px-[15px] px-[13px] md:py-[16px] py-[9px]  items-center flex-1">
            <div
              className={
                isNarrow ? "card-border" : "card-border-wide w-full p-[2px]"
              }
            >
              <div
                className={`md:px-[18px] md:py-[32px] py-[39.28px] px-[14px] md:rounded-[10.39px] rounded-[13.35px] flex lg:flex-row flex-col flex-1 lg:items-center w-full h-full relative z-[2]  ${
                  dashboard
                    ? "md:gap-[20px] gap-[21px]"
                    : "xl:gap-[51px] md:gap-[40px] gap-[23px]"
                }`}
              >
                <div
                  className={`rounded-[10.39px] flex items-center justify-center h-[198.18px] md:h-[249.34px] md:max-w-[249.34px] max-w-[198.18px] w-full overflow-hidden ${
                    !dashboard && "xl:ms-[50px]"
                  } border-[2.6px] border-[#CAF813]`}
                >
                  <img
                    src="/assets/marketplace-card.png"
                    alt="Pixel Cat"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className={`flex-1 ${!dashboard && "xl:pe-[50px]"}`}>
                  <h2 className="text-[23.84px] md:text-[30px] md:leading-[34.5px] leading-[27.42px] text-white font-[700] mb-[4px]">
                    #{item.id}
                  </h2>
                  <p className="text-[15.9px] md:text-[20px] md:leading-[23px] leading-[18.28px] text-[#798DA3]">
                    Shiba Dev
                  </p>
                  <div className="mb-[15px] mt-[15px] pb-[15px] border-b border-white">
                    <p className="text-[14px] md:text-[18px] text-[#798DA3] md:mb-[8px] gap-[6.36px]">
                      Grade
                    </p>
                    <div className="flex md:gap-[3.40px] gap-[2.76px]">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="text-[#FAFF00] md:text-[18px] text-[16px]"
                        />
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-between w-full items-center gap-2">
                    <div className="flex flex-col items-start">
                      <p className="text-[14.31px] md:text-[18px] text-[#798DA3] md:leading-[20.7px] leading-[16.45px]">
                        Sale Price
                      </p>
                      <p className="flex items-center text-[23.84px] md:text-[30px] md:leading-[34.5px] leading-[27.42px] font-[700]">
                        <span className="text-white">
                          {parseFloat(item.price) % 1 === 0
                            ? `${parseFloat(item.price).toFixed(1)}`
                            : item.price}
                        </span>
                        <span className="text-primaryColor">BNB</span>
                      </p>
                      <p className="text-[#798DA3] text-[14.31px] md:text-[18px] md:leading-[20.7px] leading-[16.45px]">
                        ≈${parseFloat(item.salePrice)}
                      </p>
                    </div>
                    <button className="flex w-[46px] h-[46px] min-w-[46px] min-h-[46px] rounded-[10px] bg-primaryColor items-center justify-center">
                      <img
                        src="/assets/icons/exchange.png"
                        alt=""
                        className="w-[28px] h-[28px]"
                      />
                    </button>
                  </div>
                  <div
                    className={`md:mt-[16px] mt-[16px] ${
                      dashboard
                        ? "xl:px-[30px] sm:px-[20px]"
                        : "xl:px-[30px] sm:px-[20px]"
                    }`}
                  >
                    <button className="px-[16.93px] md:px-[35.5px] py-[11.92px] md:py-[15px] md:text-[18px] text-[14.31px] font-[400] rounded-full border border-primaryColor text-primaryColor w-full">
                      Connect Wallet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`bg-[#1F2835CC] rounded-[26.71px] border-[2.6px] border-[#303945] flex md:px-[18px] px-[13px] md:py-[16px] py-[9px]  items-center ${
              dashboard ? "lg:w-[34%]" : "md:w-[34%]"
            }`}
          >
            <div
              className={
                isNarrow
                  ? "card-border"
                  : "card-border-wide w-full p-[2px] h-full"
              }
            >
              <div className="md:px-[18px] md:py-[32px] py-[40px] px-[14px] md:rounded-[10.39px] rounded-[13.35px] flex flex-col flex-1 w-full h-full md:gap-[31px] gap-[24.55px] relative z-[2]">
                <h2 className="text-[24.36px] md:text-[30px] font-[700] text-white">
                  On-Chain Data
                </h2>
                <div className="flex flex-col md:gap-[20px] gap-[16.24px]">
                  <div className="flex justify-between w-full flex-wrap gap-1">
                    <p className="text-[14.62px] md:text-[18px] text-[#798DA3]">
                      Owner Address
                    </p>
                    <p className="text-primaryColor text-[14.62px] md:text-[18px]">
                      0x9F496...2D570eE
                    </p>
                  </div>
                  <div className="flex justify-between w-full flex-wrap gap-1">
                    <p className="text-[14.62px] md:text-[18px] text-[#798DA3]">
                      Contract Address
                    </p>
                    <p className="text-primaryColor text-[14.62px] md:text-[18px]">
                      0x9F496...2D570eE
                    </p>
                  </div>
                  <div className="flex justify-between w-full flex-wrap gap-1">
                    <p className="text-[14.62px] md:text-[18px] text-[#798DA3]">
                      Mining Power
                    </p>
                    <p className="text-primaryColor text-[14.62px] md:text-[18px]">
                      1.0 BNB
                    </p>
                  </div>
                  <div className="flex justify-between w-full flex-wrap gap-1">
                    <p className="text-[14.62px] md:text-[18px] text-[#798DA3]">
                      Decompose Status
                    </p>
                    <p className="text-primaryColor text-[14.62px] md:text-[18px]">
                      Locked
                    </p>
                  </div>
                  <div className="flex justify-between w-full flex-wrap gap-1">
                    <p className="text-[14.62px] md:text-[18px] text-[#798DA3]">
                      Decomposable In
                    </p>
                    <p className="text-primaryColor text-[14.62px] md:text-[18px]">
                      26:14:34:41
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          className={`${
            dashboard && "hidden"
          } mt-[37px] bg-primaryColor text-black text-[14.35px] md:text-[18px] font-[400] md:py-[15px] py-[12px] px-[28px] rounded-full md:w-[153px] w-[122px]`}
          style={{
            boxShadow: "0px 2.85px 16.1px 0px #38DCC88C",
          }}
        >
          Back
        </button>

        <div
          className={`border-[3px] border-[#303945] flex flex-col md:gap-[34px] gap-[31px] md:py-[50px] py-[24.47px] md:px-[46px] px-[27px] md:mt-[66px] ${
            dashboard ? "md:mt-[31px] mt-[33px]" : "mt-[71px]"
          } rounded-[26.71px]`}
          style={{ backdropFilter: "blur(29.689451217651367px)" }}
        >
          <h4 className="text-white text-[27.82px] md:text-[30px] font-[700]">
            Market Rules
          </h4>{" "}
          <p className="text-[16.69px] md:text-[18px] font-[400] text-[#798DA3]">
            1.NFTs can be purchased with $BBT or Any other Choice of Coins as
            per users listing criteria.
            <br />
            2.After NFT is listed in the trading market, operations such as
            transfer, auction, and staking are not allowed.
            <br />
            3.The market will charge 15% of the seller's revenue as a service
            fee, of which 5% is send to original Minter. 5% Will transfer to the
            Reward to all NFT holders 5% to the Marketing Wallet.
          </p>
        </div>

        <button
          className={`${
            !dashboard && "hidden"
          } mt-[37px] bg-primaryColor text-black text-[14.35px] md:text-[18px] font-[400] md:py-[15px] py-[12px] px-[28px] rounded-full md:w-[153px] w-[122px]`}
          style={{
            boxShadow: "0px 2.85px 16.1px 0px #38DCC88C",
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
}
