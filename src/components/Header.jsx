"use client";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // Import burger icon from react-icons
import { IoMdClose } from "react-icons/io";
import Logo from "../../public/assets/logo.svg";
import LanguageDropdown from "./LanguageDropdown";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation("footer");
  const [isOpen, setIsOpen] = useState(false); // State for drawer visibility

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-50 sticky top-0 px-4 py-2.5 sm:px-[22px] bg-[#09121d8f] ">
      <div className="max-w-[1320px] mx-auto flex justify-between items-center lg:py-0 md:py-4 py-2 shadow-lg">
        <Link to="/" className="flex items-center my-auto">
          <img
            src={Logo}
            alt="logo"
            className="xl:w-[233px] lg:w-[200px] md:w-[233px] w-[170px] lg:mb-2"
          />
        </Link>

        <div className="lg:hidden flex gap-2">
          <LanguageDropdown />

          <button onClick={toggleDrawer} className="text-white">
            <FiMenu size={30} /> {/* Burger icon */}
          </button>
        </div>
        {/* Nav links */}
        <nav className="hidden lg:flex xl:gap-[7px] md:gap-0 gap-[4px] py-[19px]">
          {[
            { name: t("links.home"), path: "/" },
            { name: t("links.launchpad"), path: "/launchpad" },
            { name: t("links.earnings"), path: "/earnings" },
            { name: t("links.marketplace"), path: "/marketplace" },
            { name: t("links.vault"), path: "/vault" },
            { name: t("help.stacking"), path: "/stacking" },
            { name: t("help.whitepaper"), path: "/whitepaper" },
            { name: `${t("help.win")} $100k`, path: "/win" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `px-[10px] py-[6px] transition xl:text-[16px] text-[14px] w-max ${
                  isActive
                    ? "text-primaryColor font-[700] "
                    : "text-white font-[400]"
                } hover:text-primaryColor`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-4">
          <div>
            <LanguageDropdown />
          </div>
          <Link
            to="/dashboard"
            className="text-black flex items-center text-center justify-center xl:text-[18px] text-[16px] xl:w-[153px] lg:w-[140px] w-[153px] h-[54px] rounded-full border border-primaryColor transition"
            style={{
              background: "linear-gradient(180deg, #3FF5DF 0%, #00DCC2 100%)",
              boxShadow: "0px 4px 22.6px 0px #38DCC88C",
            }}
          >
            {t("help.goToApp")}
          </Link>
        </div>
      </div>

      {/* Drawer Menu */}
      <div
        className={`fixed inset-y-0 right-0 bg-[#09121D] h-full md:w-[320px] w-[220px] p-4 transition-transform transform z-30 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ transition: "transform 0.3s ease-in-out" }}
      >
        {isOpen && (
          <>
            <button className="text-white " onClick={toggleDrawer}>
              <IoMdClose size={24} />
            </button>
            <nav className="flex flex-col items-center justify-start overflow-y-auto h-full pb-[35px]">
              {[
                { name: t("links.home"), path: "/" },
                { name: t("links.launchpad"), path: "/launchpad" },
                { name: t("links.earnings"), path: "/earnings" },
                { name: t("links.marketplace"), path: "/marketplace" },
                { name: t("links.vault"), path: "/vault" },
                { name: t("help.stacking"), path: "/stacking" },
                { name: t("help.whitepaper"), path: "/whitepaper" },
                { name: `${t("help.win")} $100k`, path: "/win" },
              ].map((item, index) => (
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    `py-2 px-4 transition ${
                      isActive
                        ? "text-primaryColor font-[700]"
                        : "text-white font-[400]"
                    } hover:text-primaryColor`
                  }
                  onClick={toggleDrawer} // Close drawer on link click
                >
                  {item.name}
                </NavLink>
              ))}
              <Link
                to="/dashboard"
                className="text-black text-[18px] py-[15px] flex items-center justify-center px-[36px] rounded-full border border-primaryColor hover:text-white transition mt-2"
                style={{
                  background:
                    "linear-gradient(180deg, #3FF5DF 0%, #00DCC2 100%)",
                  boxShadow: "0px 4px 22.6px 0px #38DCC88C",
                }}
              >
                Go to App
              </Link>
            </nav>
          </>
        )}
      </div>

      {/* Overlay to close drawer when clicked outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleDrawer}
        />
      )}
    </header>
  );
};

export default Header;
