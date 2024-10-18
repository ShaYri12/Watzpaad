import React from "react";
import { FaChevronDown } from "react-icons/fa6";
import Dropdown from "../shared/Dropdown";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import i18next for translations

const BridgingConvertor = () => {
  const { t } = useTranslation("convertor"); // Set up translations for the bridgingConvertor namespace

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
          <div className="text-gray-400">{t("progress.ponder")}</div>
        </div>
      </div>

      {/* Swap Form */}
      <div className="bg-gray-800 h-full p-6 rounded-xl shadow-lg text-white w-full max-w-[950px]">
        <div className="flex items-center flex-wrap justify-center gap-2 space-y-3 ">
          {/* Swap/Bridge Dropdown */}
          <span className="text-lg"> </span>
          <span className="text-lg">{t("form.want_to")}</span>{" "}
          {/* Translated label */}
          <Dropdown
            options={[t("swap_bridge"), t("swap_bridge"), t("swap_bridge")]} // Translated dropdown options
            defaultOption={t("swap_bridge")}
          />
          {/* From Chain Dropdown */}
          <span className="text-lg">{t("form.from")}</span>{" "}
          {/* Translated label */}
          <Dropdown
            options={[t("ethereum"), t("ethereum"), t("ethereum")]} // Translated dropdown options
            defaultOption={t("ethereum")}
          />
          <span className="text-lg">{t("form.chain_my")}</span>{" "}
          {/* Translated label */}
          <br />
          {/* Token Dropdown */}
          <Dropdown
            options={[t("eth_token"), t("eth_token"), t("eth_token")]} // Translated dropdown options
            defaultOption={t("eth_token")}
          />
          <span className="text-lg">{t("form.to")}</span>{" "}
          {/* Translated label */}
          {/* To Chain Dropdown */}
          <Dropdown
            options={[t("bcs_chain"), t("bcs_chain"), t("bcs_chain")]} // Translated dropdown options
            defaultOption={t("bcs_chain")}
          />
          <span className="text-lg">{t("form.chain")}</span>{" "}
          {/* Translated label */}
          {/* To Token Dropdown */}
          <Dropdown
            options={[t("bnb_token"), t("bnb_token"), t("bnb_token")]} // Translated dropdown options
            defaultOption={t("bnb_token")}
          />
          <span className="text-lg">{t("form.tokens")}</span>{" "}
          {/* Translated label */}
        </div>
      </div>

      {/* Submit Button */}
      <div className="flex justify-center mt-4">
        <Link to="/bridging-convertor-2">
          <button className="bg-[#38DCC8] hover:bg-teal-500 duration-200 px-[45px] py-[10px] rounded-full">
            {t("submit_button")} {/* Translated button text */}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BridgingConvertor;
