// Sidebar.jsx
import React, { useState } from "react";

const Sidebar = () => {
  const [selected, setSelected] = useState(null);

  const menuItems = [
    { name: "Dashboard", icon: "/assets/icons/dashboard.svg" },
    { name: "Bridge & Swap AI", icon: "/assets/icons/bridge.png" },
    { name: "Marketplace", icon: "/assets/icons/marketplace.png" },
    { name: "Vault", icon: "/assets/icons/vault.png" },
  ];

  return (
    <div className="bg-gray-900 relative text-white h-screen w-64 flex flex-col items-center py-6">
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
        LOGO HERE
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
          top: "3.9rem",
          left: "0",
        }}
      ></span>
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
      <ul className="space-y-4 mt-6">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className={`flex items-center space-x-4 w-full px-6 py-2 rounded-lg cursor-pointer ${
              selected === index
                ? "bg-[#38DCC8] text-black"
                : "hover:bg-[#84faed]/40"
            }`}
            onClick={() => setSelected(index)} // Set selected item on click
          >
            <div
              className={`h-[30px] w-[30px] rounded-[5px] p-2 ${
                selected === index ? "bg-black text-white" : "bg-[#38DCC8]"
              }`}
            >
              <img src={item.icon} alt="" />
            </div>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
