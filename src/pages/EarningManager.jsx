import React, { useEffect, useState } from "react";

const EarningsManager = () => {
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
  }, []);

  return (
    <div className="w-full flex-1 min-h-screen px-[30px] pt-[100px] pb-[61px] relative">
      <img
        src="/assets/earning-manager-bg-shade.png"
        className="w-full h-full absolute top-0 left-0 z-[1]"
      />
      <div className="text-white max-w-[1280px] mx-auto relative z-[2]">
        <h1 className="text-[30px] leading-[34px] font-[500] text-primaryColor mb-4">
          BlockBoost Earnings Manager
        </h1>

        {/* Input Section */}
        <div className="flex gap-4 mb-8 flex-wrap">
          <input
            type="text"
            placeholder="Please enter your address above"
            className="flex-grow max-w-[350px] min-w-[100px] p-3 rounded-full bg-gray-800 text-white placeholder-gray-400 outline-none"
          />
          <button className="bg-primaryColor hover:bg-teal-500 text-black font-[400] sm:py-[7.5px] py-[11px] px-[38px] rounded-full min-w-[140px] md:text-[16px] text-[12px]">
            Buy BBT
          </button>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mb-8">
          {/* Single Info Card */}
          {infoCards.map((card) => (
            <div
              key={card.label}
              className="card-border-wide w-full p-[1.07px] bg-gray-800"
            >
              <div className="p-4 rounded-[21px] flex justify-between space-y-2 items-center relative z-[2] w-full">
                <div className="flex gap-4 items-end">
                  <div>
                    <p className="text-[12px] leading-[12px] text-[#798DA3]">
                      {card.label}
                    </p>
                    <p className="text-[19px] leading-[26px] font-semibold">
                      {card.value}
                    </p>
                  </div>
                  {card.subValue && (
                    <p className="text-[#01B574] test-[15px] leading-[20px]">
                      {card.subValue}
                    </p>
                  )}
                </div>
                <span className="bg-primaryColor rounded-[12px] w-[47px] h-[47px] flex items-center justify-center">
                  <img src={card.icon} alt="" className="w-[26px] h-[26px]" />
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Connect Wallet */}
        <div className="text-center mb-8 md:flex hidden justify-center items-center">
          <button className="bg-primaryColor hover:bg-teal-500 text-black font-semibold py-3 px-8 w-2/3 rounded-full">
            Connect Wallet and Claim Manually
          </button>
        </div>

        {/* Ethereum Info Section */}
        <div className="bg-gray-800 p-[8px] lg:p-[17px] rounded-[12.84px] w-full">
          <div
            className={`${
              isNarrow ? "card-border" : "card-border-wide"
            } p-[1.93px] w-full h-full`}
          >
            <div className="md:px-[17px] px-[11px] md:py-[30px] py-[15px] text-center space-y-[20px] relative z-[2]">
              <div className="flex justify-center mb-6">
                <div
                  className="w-[96.39px] h-[96.39px] min-w-[96.39px] min-h-[96.39px] rounded-full bg-[#1F2835CC] flex items-center justify-center"
                  style={{
                    boxShadow:
                      "-1.94px 1.94px 1.94px 0px #FFFFFF63 inset, 1.29px -1.29px 12.85px 0px #D6D6D62B inset",
                    backdropFilter: "blur(47.83px)",
                  }}
                >
                  <img
                    src="/assets/icons/diamond.svg"
                    alt="ETH"
                    className="h-[55.88px] w-[55.88px] rounded-full"
                  />
                </div>
              </div>
              <h2 className="text-[24px] md:px-4 sm:max-w-full max-w-[220px] mx-auto md:text-[30px] leading-[34px] text-[#38DCC8] font-semibold ">
                Total Rewards Paid To $BBT Holders
              </h2>
              <div className="flex justify-center items-center sm:gap-4 gap-2">
                <div>
                  <div className="card-border-wide w-full h-full p-[0.91px] md:rounded-[18px] rounded-[9px]">
                    <p
                      style={{
                        background:
                          "linear-gradient(126.97deg, #09121D 28.26%, rgba(9, 18, 29, 0.2) 91.2%)",
                      }}
                      className="text-[14px] md:text-[16px] lg:text-3xl font-bold px-4 lg:px-12 py-2 lg:py-6 md:rounded-[18px] rounded-[9px] text-primaryColor relative z-[2]"
                    >
                      84.00 ETH
                    </p>
                  </div>
                </div>
                <p className="text-[16px] lg:text-2xl font-semibold text-[#38DCC8]">
                  =
                </p>
                <div>
                  <div className="card-border-wide w-full h-full p-[0.91px] md:rounded-[18px] rounded-[9px]">
                    <p
                      style={{
                        background:
                          "linear-gradient(126.97deg, #09121D 28.26%, rgba(9, 18, 29, 0.2) 91.2%)",
                      }}
                      className="text-[16px] lg:text-3xl font-bold px-4 lg:px-12 py-2 lg:py-6 md:rounded-[18px] rounded-[9px] text-primaryColor relative z-[2]"
                    >
                      $250,364
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 text-[12px] lg:text-[20px] xl:max-w-[660px]">
                Estimations are based on a default of the last 24h of trading
                volume Change the volume to predict earnings based on other
                volume figures
              </p>

              {/* Trading Volume Input */}
              <p className="text-[#38DCC8] text-[20px] leading-[24px]">
                Trading Volume = $
              </p>

              <div className="flex items-center justify-center">
                <div className="w-fit h-fit">
                  <div className="card-border-wide w-fit h-fit p-[0.5px]">
                    <div
                      style={{
                        background:
                          "linear-gradient(126.97deg, #09121D 28.26%, rgba(9, 18, 29, 0.2) 91.2%)",
                      }}
                      className="flex w-fit p-1 lg:p-2 px-3 lg:px-5 text-[18px] mx-auto justify-center bg-gray-700 rounded-[18px]  items-center space-x-2 relative z-[2]"
                    >
                      <p>$</p>
                      <div className="sm:max-w-[195px] max-w-[170px]">
                        <input
                          type="text"
                          placeholder="01"
                          className=" text-start pl-3 text-white bg-transparent outline-none min-w-[10px] flex-grow"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid w-full md:grid-cols-2 gap-5 py-5">
          <div className="lg:p-[17px] p-[8px] shadow-lg rounded-[13.76px] mx-auto relative bg-gray-800 w-full">
            <div className="card-border w-full h-full p-[1.93px]">
              <div className="flex flex-col w-full items-center sm:px-6 px-3 pb-6 text-white relative z-[2]">
                <div className="">
                  {/* Image placeholder */}
                  <img
                    src="/assets/icons/dollar.png"
                    alt="Stack of Money"
                    className="w-[250.94px] h-auto object-cover"
                  />
                </div>
                <div className="space-y-[22px] -mt-6">
                  <h3 className="text-[20px] lg:text-[26px] text-center leading-[27px] font-[700]  text-[#38DCC8] ">
                    Your 0 $BBT Earns:
                  </h3>
                  <div className="space-y-1 text-center text-[18px] lg:text-[20px] leading-[29px] font-[700]">
                    {/* Earnings List */}
                    <p className="text-white ">0.00 ETH ($0.00) Per Day</p>
                    <p className="text-white ">0.00 ETH ($0.00) Per Day</p>
                    <p className="text-white ">0.00 ETH ($0.00) Per Day</p>
                    <p className="text-white ">0.00 ETH ($0.00) Per Day</p>
                  </div>
                  <p className="text-[#38DCC8] text-[14px] lg:text-[21px] font-[25px] text-center">
                    Estimations are based on $1 trading volume
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:p-[17px] p-[8px] shadow-lg rounded-[13.76px] mx-auto relative bg-gray-800 w-full">
            <div className="card-border w-full h-full p-[1.93px]">
              <div className="flex flex-col w-full items-center sm:px-6 px-3 pb-6 text-white relative z-[2]">
                <div className="">
                  {/* Image placeholder */}
                  <img
                    src="/assets/icons/dollar.png"
                    alt="Stack of Money"
                    className="w-[250.94px] h-auto object-cover"
                  />
                </div>
                <div className="space-y-[22px] -mt-6">
                  <h3 className="text-[20px] lg:text-[26px] text-center leading-[27px] font-[700]  text-[#38DCC8] ">
                    Your 0 $BBT Earns:
                  </h3>
                  <div className="space-y-1 text-center text-[18px] lg:text-[20px] leading-[29px] font-[700]">
                    {/* Earnings List */}
                    <p className="text-white ">0.00 ETH ($0.00) Per Day</p>
                    <p className="text-white ">0.00 ETH ($0.00) Per Day</p>
                    <p className="text-white ">0.00 ETH ($0.00) Per Day</p>
                    <p className="text-white ">0.00 ETH ($0.00) Per Day</p>
                  </div>
                  <p className="text-[#38DCC8] text-[14px] lg:text-[21px] font-[25px] text-center">
                    Estimations are based on $1 trading volume
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const infoCards = [
  {
    label: "$BBT Holdings",
    value: "0.00 BBT",
    subValue: "-$0.00",
    icon: "/assets/icons/global.png",
  },
  {
    label: "Total Rewards Paid",
    value: "$0.00",
    icon: "/assets/icons/t-rewards-paid.png",
  },
  {
    label: "Last Payout Time",
    value: "Never",
    icon: "/assets/icons/last-payout-time.png",
  },
  {
    label: "Next Payout Loading",
    value: "Processing",
    icon: "/assets/icons/next-payout.png",
  },
  {
    label: "Autodividend Earnings",
    value: "0.0000 ETH",
    icon: "/assets/icons/autodividend-earnings.png",
  },
  {
    label: "Referral Earnings",
    value: "0.00 BBT",
    subValue: "-$0.00",
    icon: "/assets/icons/referral-earnings.png",
  },
  {
    label: "Refer and earn",
    value: "Copy Link",
    icon: "/assets/icons/refer-and-earn.png",
  },
  {
    label: "Total referred",
    value: "View my referrals",
    icon: "/assets/icons/total-referred.png",
  },
];

export default EarningsManager;
