import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Bridging = () => {
  const { t } = useTranslation("bridging"); // Set up translations for 'bridging' namespace

  return (
    <div className="mt-8 md:mt-0 w-full min-h-full flex-1 space-y-[45px] flex-grow md:space-y-[70px] lg:space-y-[100px] max-w-[1280px] mx-auto lg:px-[30px] md:px-[15px] px-[20px] pt-[100px] pb-[61px]">
      <div className="h-full max-h-[250px] md:max-h-[360px] lg:max-h-[400px] w-full overflow-hidden border-2 border-[#303945] rounded-[12px]">
        <img
          src="/assets/istockphoto.jpg"
          alt={t("image_alt_text")} // Translated alt text
          className="h-full w-full"
        />
      </div>
      <div className="space-y-[30px] text-center md:w-[80%] mx-auto">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-white">
          {t("title")} {/* Translated title */}
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-grayish">
          {t("description")} {/* Translated description */}
        </p>
      </div>
      <div className="flex items-center justify-center">
        <Link to="/bridging-convertor">
          <button
            className="text-[18px] leading-[24px] px-[50px] py-[14px] bg-[#38DCC8] rounded-[30px]"
            aria-label={t("button_aria_label")} // Translated aria-label
          >
            {t("button_text")} {/* Translated button text */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Bridging;
