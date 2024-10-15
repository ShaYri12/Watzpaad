"use client";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi"; // Import burger icon from react-icons
import { IoMdClose } from "react-icons/io";
import Logo from '../../public/assets/Logo.svg'
import LanguageDropdown from "./LanguageDropdown";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for drawer visibility

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" px-[22px] z-20 sticky top-0">
      <div className="max-w-[1280px] mx-auto flex justify-between  items-center">
        <div className="flex items-center">
          <img src={Logo} alt="logo"  className="md:w-[233px] w-[180px] lg:mb-2"/>
        </div>
        <div className="lg:hidden mt-2">
          <button onClick={toggleDrawer} className="text-white">
            <FiMenu size={30} /> {/* Burger icon */}
          </button>
        </div>
        {/* Nav links */}
        <nav className="hidden lg:flex gap-[7px] py-[19px]">
          {[
            { name: "Home", path: "/" },
            { name: "Launchpad", path: "/launchpad" },
            { name: "Earnings", path: "/earnings" },
            { name: "Marketplace", path: "/marketplace" },
            { name: "Vault", path: "/vault" },
            { name: "Stacking", path: "/stacking" },
            { name: "Win $1M", path: "/win" },
            { name: "Whitepaper", path: "/whitepaper" },
          ].map((item, index) => (
            <NavLink
              key={index} 
              to={item.path}
              className={({ isActive }) =>
                `px-[10px] py-[6px] transition text-[16px] ${
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
        {/* Language Dropdown */}
        <div>
          {/* <LanguageDropdown/> */}
        </div>
        <div className="hidden lg:block">
          <button
            className="text-black text-[18px] w-[153px] h-[54px] rounded-full border border-primaryColor transition"
            style={{
              background: "linear-gradient(180deg, #3FF5DF 0%, #00DCC2 100%)",
              boxShadow: "0px 4px 22.6px 0px #38DCC88C",
            }}
          >
            Go to App
          </button>
        </div>
      </div>

      {/* Drawer Menu */}
      <div
        className={`fixed inset-y-0 right-0 bg-gray-800 h-full md:w-[320px] w-[220px] p-4 transition-transform transform z-30 ${
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
                { name: "Home", path: "/" },
                { name: "Launchpad", path: "/launchpad" },
                { name: "Earnings", path: "/earnings" },
                { name: "Marketplace", path: "/marketplace" },
                { name: "Vault", path: "/vault" },
                { name: "Stacking", path: "/stacking" },
                { name: "Win $1M", path: "/win" },
                { name: "Whitepaper", path: "/whitepaper" },
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
              <button
                className="text-black text-[18px] py-[15px] px-[36px] rounded-full border border-primaryColor hover:text-white transition mt-2"
                style={{
                  background:
                    "linear-gradient(180deg, #3FF5DF 0%, #00DCC2 100%)",
                  boxShadow: "0px 4px 22.6px 0px #38DCC88C",
                }}
              >
                Go to App
              </button>
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
