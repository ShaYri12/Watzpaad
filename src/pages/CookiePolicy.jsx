import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";

const CookiePolicy = () => {
  const { t } = useTranslation("cookie");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="space-y-[45px] md:space-y-[70px] lg:space-y-[100px] max-w-[1280px] mx-auto md:py-[83px] px-[30px] md:px-[80px] py-[57px]">
      {/* Cookie Policy Title */}
      <div className="space-y-[34px]">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
          {t("cookie_policy_title")}
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-grayish">
          {t("cookie_policy_description")}
        </p>
      </div>

      {/* What is a Cookie */}
      <div className="space-y-[34px]">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
          {t("what_is_cookie_title")}
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-grayish">
          {t("what_is_cookie_description")}
        </p>
      </div>

      {/* How do we use Cookies */}
      <div className="space-y-[34px]">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
          {t("how_we_use_cookie_title")}
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-grayish">
          {t("how_we_use_cookie_description")}
        </p>
        <ul className="list-disc pl-5 text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-grayish space-y-2">
          {t("how_we_use_cookie_items", { returnObjects: true }).map(
            (item, index) => (
              <li key={index}>{item}</li>
            )
          )}
        </ul>
      </div>

      {/* Types of Cookies */}
      <div className="space-y-[34px]">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
          {t("types_of_cookie_title")}
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-grayish">
          {t("types_of_cookie_description")}
        </p>
        <ul className="space-y-4">
          {t("types_of_cookie_items", { returnObjects: true }).map(
            (cookie, index) => (
              <li
                key={index}
                className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-grayish"
              >
                <strong className="font-[700]">{cookie.title}</strong>:{" "}
                {cookie.description}
              </li>
            )
          )}
        </ul>
      </div>

      {/* How to Control or Delete Cookies */}
      <div className="space-y-[34px]">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
          {t("control_or_delete_cookie_title")}
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-grayish">
          {t("control_or_delete_cookie_description")}
        </p>
        <ul className="list-disc pl-5 text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-grayish space-y-2">
          {t("control_or_delete_cookie_links", { returnObjects: true }).map(
            (link, index) => (
              <li key={index}>{link}</li>
            )
          )}
        </ul>
      </div>

      {/* Changes to this Cookie Policy */}
      <div className="space-y-[34px]">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
          {t("changes_to_cookie_policy_title")}
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-grayish">
          {t("changes_to_cookie_policy_description")}
        </p>
      </div>

      {/* Need More Information */}
      <div className="space-y-[34px]">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
          {t("need_more_info_title")}
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-grayish">
          {t("need_more_info_description")}
        </p>
      </div>

      {/* Cookies that have been set in the past */}
      <div className="space-y-[34px]">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
          {t("cookies_set_in_the_past_title")}
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-grayish">
          {t("cookies_set_in_the_past_description")}
        </p>
      </div>

      {/* Contact Us */}
      <div className="space-y-[34px]">
        <h1 className="font-[700] text-[31px] md:text-[50px] leading-[37px] md:leading-[57px] text-[#38DCC8]">
          {t("contact_us_title")}
        </h1>
        <p className="text-[11px] md:text-[18px] font-[300] leading-[15px] md:leading-[24px] text-grayish">
          {t("contact_us_description")}
        </p>
      </div>
    </div>
  );
};

export default CookiePolicy;
