import { useState } from "react";
import KeyFeatures from "../components/KeyFeatures";
import CrossChainIntegration from "../components/CrossChainIntegeration";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("About");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-[#09121D] text-white min-h-screen">
      {/* Navbar */}
      <div className="py-[20px] md:py-[33.77px] px-[22px] bg-[#111D2D]">
        <ul className="max-w-[1280px] mx-auto flex justify-center items-center gap-[23px] flex-wrap">
          {["About", "IDO Projects", "Levels", "IDO Stacking", "FAQs"].map(
            (tab) => (
              <li
                key={tab}
                className={`px-4 md:py-[9.73px] py-[5.31px] md:w-[181.8px] w-[105px] rounded-full cursor-pointer flex items-center justify-center transition md:text-[19.79px] text-[11.45px] text-[#38DCC8] border-[#38DCC8] border ${
                  activeTab === tab
                    ? "bg-[#38DCC8] text-black"
                    : "hover:bg-teal-600 hover:text-black"
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </li>
            )
          )}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="md:py-[84px] py-[40px] px-[22px]">
        {activeTab === "About" && (
          <>
            <KeyFeatures /> {/* First Section (Key Features) */}
            <CrossChainIntegration />{" "}
            {/* Second Section (Cross-Chain Integration) */}
          </>
        )}

        {activeTab === "IDO Projects" && (
          <div className="text-center py-16">
            <h2 className="text-3xl">IDO Projects</h2>
            <p className="mt-4 text-gray-400">
              Content related to IDO Projects will go here.
            </p>
          </div>
        )}

        {activeTab === "Levels" && (
          <div className="text-center py-16">
            <h2 className="text-3xl">Levels</h2>
            <p className="mt-4 text-gray-400">
              Content related to Levels will go here.
            </p>
          </div>
        )}

        {activeTab === "IDO Stacking" && (
          <div className="text-center py-16">
            <h2 className="text-3xl">IDO Stacking</h2>
            <p className="mt-4 text-gray-400">
              Content related to IDO Stacking will go here.
            </p>
          </div>
        )}

        {activeTab === "FAQs" && (
          <div className="text-center py-16">
            <h2 className="text-3xl">FAQs</h2>
            <p className="mt-4 text-gray-400">
              Frequently asked questions will go here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
