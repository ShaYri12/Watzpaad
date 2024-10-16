import { useState } from "react";
import KeyFeatures from "./KeyFeatures";
import CrossChainIntegration from "./CrossChainIntegeration";
import IDOProjects from "./IDOProjects";
import Levels from "./Levels";
import FAQSection from "../FAQSection";
import IDOStaking from "./IDOStaking";

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
                className={`px-4 md:py-[9.73px] py-[5.31px] md:w-[181.8px] w-[105px] rounded-full cursor-pointer flex items-center justify-center transition md:text-[19.79px] text-[11.45px] border-primaryColor border ${
                  activeTab === tab
                    ? "bg-primaryColor text-black"
                    : "hover:bg-teal-600 hover:text-black text-primaryColor "
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
      <div className="md:py-[84px] py-[40px] lg:px-[22px]">
        {activeTab === "About" && (
          <>
            <KeyFeatures />
            <CrossChainIntegration />
          </>
        )}
      </div>
      {activeTab !== "About" && (
        <div className="md:py-[84px] py-[40px] px-[22px]">
          {activeTab === "IDO Projects" && <IDOProjects />}

          {activeTab === "Levels" && <Levels />}

          {activeTab === "IDO Stacking" && <IDOStaking />}

          {activeTab === "FAQs" && <FAQSection />}
        </div>
      )}
    </div>
  );
};

export default Tabs;
