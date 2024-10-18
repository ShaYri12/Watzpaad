import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation("privacy");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="md:py-[83px] px-[30px] md:px-[80px] py-[57px] relative">
      <img
        src="/assets/policy-bg-shade.png"
        className="w-full h-full absolute top-0 left-0 z-[1]"
      />
      <div className="space-y-[45px] md:space-y-[70px] lg:space-y-[100px] max-w-[1280px] mx-auto relative z-[2]">
        <div className="space-y-[34px]">
          <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
            {t("privacy_policy_title")}
          </h1>
          <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-[#798DA3]">
            {t("privacy_policy_description")}
          </p>
        </div>

        <div className="space-y-[34px]">
          <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
            {t("children_title")}
          </h1>
          <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-[#798DA3]">
            {t("children_description")}
          </p>
        </div>

        <div className="space-y-[34px]">
          <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
            {t("personal_info_title")}
          </h1>
          <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-[#798DA3]">
            {t("personal_info_description")}
          </p>
        </div>

        <div className="space-y-[34px]">
          <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
            {t("how_we_use_title")}
          </h1>
          <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-[#798DA3]">
            {t("how_we_use_description")}
          </p>
        </div>

        <div className="space-y-[34px]">
          <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
            {t("choices_title")}
          </h1>
          <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-[#798DA3]">
            {t("choices_description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
