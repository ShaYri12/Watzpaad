import React, { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Dropdown from "../shared/Dropdown";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import i18next for translations

const BridgingConvertor = () => {
  const { t } = useTranslation("convertor");
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

  return (
    <div className="mt-20 md:mt-0 w-full flex-1 flex flex-col items-center justify-center p-4">
      {/* Token Icon and Balance */}
      <div className="text-center mb-8">
        <div>
          <img
            src="/public/assets/icons/bnb.png"
            alt={t("token_icon_alt")} // Translated alt text
            className="w-[96px] h-[96px]"
          />
        </div>
        <div className="relative inline-block">
          <select className="bg-transparent text-green-400 text-xl mt-4 focus:outline-none appearance-none cursor-pointer">
            <option value="$2.18" className="bg-gray-900 text-green-400">
              $2.18 <FaChevronDown size={20} />
            </option>
            <option value="$5.00" className="bg-gray-900 text-green-400">
              $5.00
            </option>
            <option value="$10.00" className="bg-gray-900 text-green-400">
              $10.00
            </option>
          </select>
        </div>
        <p className="text-gray-400 text-xs">{t("balance_placeholder")}</p>{" "}
        {/* Translated placeholder */}
      </div>

      {/* Progress Steps */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-8">
          <div className="text-green-400">{t("progress.start")}</div>{" "}
          {/* Translated steps */}
          <div className="text-gray-400">{t("progress.summary")}</div>
          <div className="text-gray-400">{t("progress.letsGo")}</div>
        </div>
      </div>

      {/* Swap Form */}
      <div className="bg-gray-800 h-full md:p-[11px] p-[10px] rounded-[13.09px] border-[3.27px] border-[#303945] shadow-lg text-white w-full max-w-[950px]">
        <div
          className={`${
            isNarrow ? "card-border" : "card-border-wide"
          } p-[1.96px] w-full h-full`}
        >
          <div className="md:py-[48px] py-[12px] md:px-6 px-[11px] relative z-[2] md:w-fit w-full overflow-y-auto">
            <div className="flex md:flex-row flex-col items-center flex-wrap justify-center gap-x-[9px] md:gap-y-[30px] gap-y-[10px]">
              {/* Swap/Bridge Dropdown */}
              <div className="flex items-center md:gap-[9px] gap-[5px] md:flex-wrap flex-nowrap md:w-fit w-full">
                <span className="md:text-[34.21px] md:min-w-fit min-w-[78px] md:normal-case	capitalize">
                  {t("form.want_to")}
                </span>{" "}
                {/* Translated label */}
                <Dropdown
                  options={[
                    t("swap_bridge"),
                    t("swap_bridge"),
                    t("swap_bridge"),
                  ]} // Translated dropdown options
                  defaultOption={t("swap_bridge")}
                />
              </div>
              <div className="flex items-center md:gap-[9px] gap-[5px] md:flex-wrap flex-nowrap md:w-fit w-full">
                {/* From Chain Dropdown */}
                <span className="md:text-[34.21px] md:min-w-fit min-w-[78px] md:normal-case	capitalize">
                  {t("form.from")}
                </span>{" "}
                {/* Translated label */}
                <Dropdown
                  options={[t("ethereum"), t("ethereum"), t("ethereum")]} // Translated dropdown options
                  defaultOption={t("ethereum")}
                />
              </div>
              <div className="flex items-center md:gap-[9px] gap-[5px] md:flex-wrap flex-nowrap md:w-fit w-full">
                <span className="md:text-[34.21px] md:min-w-fit min-w-[73px] md:normal-case	capitalize">
                  {t("form.chain_my")}
                </span>{" "}
                {/* Translated label */}
                <br />
                {/* Token Dropdown */}
                <Dropdown
                  options={[t("eth_token"), t("eth_token"), t("eth_token")]} // Translated dropdown options
                  defaultOption={t("eth_token")}
                />
              </div>
              <div className="flex items-center md:gap-[9px] gap-[5px] md:flex-wrap flex-nowrap md:w-fit w-full">
                <span className="md:text-[34.21px] md:min-w-fit min-w-[78px] md:normal-case	capitalize md:flex hidden">
                  {t("form.to")}
                </span>{" "}
                <span className="md:text-[34.21px] md:min-w-fit min-w-[78px] md:normal-case	capitalize md:hidden flex">
                  {t("form.chain")}
                </span>{" "}
                {/* Translated label */}
                {/* To Chain Dropdown */}
                <Dropdown
                  options={[t("bcs_chain"), t("bcs_chain"), t("bcs_chain")]} // Translated dropdown options
                  defaultOption={t("bcs_chain")}
                />
              </div>
              <div className="flex items-center md:gap-[9px] gap-[5px] md:flex-wrap flex-nowrap md:w-fit w-full">
                <span className="md:text-[34.21px] md:min-w-fit min-w-[78px] md:normal-case	capitalize md:flex hidden">
                  {t("form.chain")}
                </span>{" "}
                <span className="md:text-[34.21px] md:min-w-fit min-w-[78px] md:hidden flex capitalize">
                  {t("form.tokens")}
                </span>{" "}
                {/* Translated label */}
                {/* To Token Dropdown */}
                <Dropdown
                  options={[t("bnb_token"), t("bnb_token"), t("bnb_token")]} // Translated dropdown options
                  defaultOption={t("bnb_token")}
                />
              </div>
              <span className="md:text-[34.21px] md:min-w-fit min-w-[78px] md:flex hidden">
                {t("form.tokens")}
              </span>{" "}
              {/* Translated label */}
            </div>
          </div>
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center md:mt-[60px] mt-[36px] pb-4">
        <Link to="/bridging-convertor-2">
          <button className="bg-[#38DCC8] hover:bg-teal-500 duration-200 md:px-[66px] px-[45.5px] md:py-[14.5px] py-[9.74px]  rounded-full md:text-[18px] text-[12.39px]">
            {t("submit_button")} {/* Translated button text */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BridgingConvertor;
