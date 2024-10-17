import React from "react";
import Market from "../components/Market";

const DashboardMarketPlace = () => {
  return (
    <div className="w-full min-h-screen flex-1 flex-grow max-w-[1280px] mx-auto lg:px-[30px] md:px-[15px] px-[20px] md:pt-[46px] pt-[100px] pb-[62px]">
      <Market dashboard={true} />
    </div>
  );
};

export default DashboardMarketPlace;
