import React, { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false); // State for controlling sidebar visibility
  const location = useLocation();
  const sidebarRef = useRef(null);

  const menuItems = [
    {
      name: "Dashboard",
      icon: "/assets/icons/dashboard.svg", // Default icon
      activeIcon: "/assets/icons/dashboard-white-icon.svg", // Icon when active
      link: "/dashboard",
    },
    {
      name: "Marketplace",
      icon: "/assets/icons/marketplace-black-icon.svg",
      activeIcon: "/assets/icons/marketplace.png",
      link: "/dashboard-marketplace",
    },
    {
      name: "Vault",
      icon: "/assets/icons/vault-black-icon.svg",
      activeIcon: "/assets/icons/vault.svg",
      link: "/dashboard-vault",
    },
    {
      name: "Bridge & Swap AI",
      icon: "/assets/icons/bridge-black-icon.svg",
      activeIcon: "/assets/icons/bridge.png",
      link: "/bridging",
    },
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  return (
    <>
      {/* Overlay behind the sidebar */}
      <div className="sidebar-behind xl:w-[264px] lg:w-[222px] w-[220px] hidden md:block"></div>

      {/* Menu icon to toggle sidebar */}
      <div
        className="menu-icon md:hidden flex fixed sm:top-[9px] top-[10.7px] right-[14px] w-[34px] h-[34px] cursor-pointer z-[9998]"
        onClick={() => setIsOpen(!isOpen)} // Toggle sidebar visibility
      >
        <img
          src="/assets/icons/menu.svg"
          className="w-[34px] h-[34px]"
          alt="Menu"
        />
      </div>

      {/* Mobile Sidebar with transition */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 left-0 h-screen bg-[#1F2835CC] border-r-[3px] border-[#303945] text-white xl:w-[264px] w-[220px] md:hidden flex-col items-center lg:px-[22px] px-[15px] z-40 transition-transform duration-300 ease-in-out overflow-y-auto  ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ backdropFilter: "blur(120px)" }}
      >
        <div className="relative w-full md:py-6 py-2 text-center">
          <div className="md:hidden flex justify-end items-center mb-[10px] mt-[4px]">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="w-fit h-fit"
            >
              <IoClose size={26} />
            </button>
          </div>
          <div
            className="mb-[2rem] font-[600] text-[1.25rem]"
            style={{
              background:
                "linear-gradient(97.89deg, #FFFFFF 70.67%, rgba(117, 122, 140, 0) 108.55%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <Link to="/">
              <img
                src="/assets/icons/logo.png"
                className="xl:max-w-full max-w-[170px] mx-auto"
              />
            </Link>
          </div>
          <span
            className={`w-full absolute md:top-[4.9rem] top-[5.6rem] left-0`}
            style={{
              display: "block",
              height: "1px",
              border: "1px solid transparent",
              borderImageSource:
                "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)",
              borderImageSlice: 1,
            }}
          ></span>
        </div>
        <ul className="space-y-4 w-full">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full">
              <Link
                to={item.link}
                className={`flex items-center lg:space-x-[15px] space-x-[10px] flex-grow px-[11px] py-[12px] rounded-lg cursor-pointer ${
                  location.pathname === item.link ||
                  (item.link === "/bridging" &&
                    location.pathname.includes("bridging"))
                    ? "bg-[#38DCC8] text-black"
                    : "hover:bg-[#84faed]/40"
                }`}
                onClick={() => {
                  setSelected(index);
                  setIsOpen(false);
                }}
              >
                <div
                  className={`h-[30px] w-[30px] rounded-[5px] px-[5px] py-[7px] ${
                    location.pathname === item.link ||
                    (item.link === "/bridging" &&
                      location.pathname.includes("bridging"))
                      ? "bg-black"
                      : "bg-[#38DCC8]"
                  }`}
                >
                  <img
                    src={
                      location.pathname === item.link ||
                      (item.link === "/bridging" &&
                        location.pathname.includes("bridging"))
                        ? item.activeIcon
                        : item.icon
                    }
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="md:text-[14px] text-[13px]">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Static sidebar for larger screens */}
      <div
        className="hidden  bg-[#1F2835CC] border-r-[3px] border-[#303945] fixed top-0 left-0 text-white h-screen xl:w-[264px] md:flex flex-col items-center lg:px-[22px] px-[15px]"
        style={{ backdropFilter: "blur(120px)" }}
      >
        <div className="relative w-full py-6 text-center">
          <div
            style={{
              background:
                "linear-gradient(97.89deg, #FFFFFF 70.67%, rgba(117, 122, 140, 0) 108.55%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontSize: "1.25rem",
              fontWeight: "600",
              marginBottom: "2rem",
            }}
          >
            <Link to="/">
              <img
                src="/assets/icons/logo.png"
                className="xl:max-w-full max-w-[170px] mx-auto"
              />
            </Link>
          </div>
          <span
            style={{
              display: "block",
              height: "1px",
              border: "1px solid transparent",
              borderImageSource:
                "linear-gradient(90deg, rgba(224, 225, 226, 0) 0%, #E0E1E2 49.52%, rgba(224, 225, 226, 0.15625) 99.04%)",
              borderImageSlice: 1,
              width: "100%",
              position: "absolute",
              top: "4.9rem",
              left: "0",
            }}
          ></span>
        </div>
        <ul className="space-y-4 w-full">
          {menuItems.map((item, index) => (
            <li key={index} className="w-full">
              <Link
                to={item.link}
                className={`flex items-center lg:space-x-[15px] space-x-[10px] w-full px-[11px] py-[12px] rounded-lg cursor-pointer ${
                  location.pathname === item.link ||
                  (item.link === "/bridging" &&
                    location.pathname.includes("bridging"))
                    ? "bg-[#38DCC8] text-black"
                    : "hover:bg-[#84faed]/40"
                }`}
                onClick={() => setSelected(index)}
              >
                <div
                  className={`h-[30px] w-[30px] rounded-[5px] px-[5px] py-[7px] ${
                    location.pathname === item.link ||
                    (item.link === "/bridging" &&
                      location.pathname.includes("bridging"))
                      ? "bg-black"
                      : "bg-[#38DCC8]"
                  }`}
                >
                  <img
                    src={
                      location.pathname === item.link ||
                      (item.link === "/bridging" &&
                        location.pathname.includes("bridging"))
                        ? item.activeIcon
                        : item.icon
                    }
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="w-max md:text-[14px] text-[13px]">
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
