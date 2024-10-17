import React from "react";
import TradingMarket from "./TradingMarket";

const DashboardTradingMarket = () => {
  return (
    <div className="w-full min-h-screen flex-1 flex-grow max-w-[1280px] mx-auto lg:px-[30px] md:px-[15px] px-[20px] md:pt-[46px] pt-[100px] pb-[62px]">
      <TradingMarket dashboard={true} />
    </div>
  );
};

export default DashboardTradingMarket;
