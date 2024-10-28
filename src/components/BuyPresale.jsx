import React, { useEffect, useRef, useState } from "react";
import Presale from "../assets/card-one.png";
import { useTranslation } from "react-i18next";

const TimelineItem = ({ title, description, id }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null); // Reference to the div

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting); // Set state to true if the element is visible
      },
      {
        threshold: 0.7, // Trigger when 10% of the div is visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref} className="flex items-start mb-20 relative">
      <div className="flex flex-col items-center z-10 mr-6 mt-16">
        <div className="w-4 h-4 bg-[#38DCC8] rounded-full"></div>
      </div>
      <div
        className={`absolute left-[30px] sm:left-[50px] text-custom text-[80px] sm:text-[96px] font-bold transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-10"
        }`}
      >
        {`0${id}`}
      </div>
      <div className="flex-grow ml-[100px] sm:ml-[140px] mt-4">
        <h3 className="text-[20px] sm:text-[28px] mb-2 font-bold text-white">
          {title}
        </h3>
        <p className="text-grayish text-[14px] sm:text-[16px] font-space font-normal">
          {description}
        </p>
      </div>
    </div>
  );
};

const BuyPresale = () => {
  const { t } = useTranslation("homepage");
  const timelineData = [
    {
      id: 1,
      title: t("buy-presale.timeline.connectWallet.title"),
      description: t("buy-presale.timeline.connectWallet.description"),
    },
    {
      id: 2,
      title: t("buy-presale.timeline.confirmTransaction.title"),
      description: t("buy-presale.timeline.confirmTransaction.description"),
    },
    {
      id: 3,
      title: t("buy-presale.timeline.claimToken.title"),
      description: t("buy-presale.timeline.claimToken.description"),
    },
  ];

  return (
    <div className="px-4 pt-10 w-full relative">
      <img
        src="/assets/buy-in-presale-bg-shade.png"
        className="w-full h-full absolute top-0 left-0 z-[1]"
      />
      <div className="max-w-[1280px]  m-auto w-full">
        <h1 className="text-[35px] capitalize sm:text-[50px] sm:leading-[57.5px] text-white font-bold max-w-[600px] mx-auto text-center">
          {t("buy-presale.title")}
        </h1>
        <div className="w-full flex lg:items-center justify-between lg:flex-row flex-col">
          <div className="w-full mt-20 relative max-w-[450px] mx-auto ">
            <div className="absolute min-h-[440px] left-2 top-[70px] border-l-2 border-dotted border-[#38DCC8]"></div>
            {timelineData.map((item) => (
              <TimelineItem key={item.id} {...item} />
            ))}
          </div>
          <div className="w-full flex items-center justify-center lg:items-end lg:justify-end mt-10">
            <img src={Presale} alt="Presale" className="rounded-[13.50px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPresale;
