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
              <li key={tab} className="relative rounded-full">
                <div className="border-tabs w-full p-[1.24px]">
                  <div
                    className={`px-4 md:py-[9.73px] py-[5.31px] bg-[#1F2835] md:w-[181.8px] w-[105px] rounded-full cursor-pointer flex items-center justify-center transition md:text-[19.79px] text-[11.45px] relative z-[2] ${
                      activeTab === tab
                        ? "bg-primaryColor text-black"
                        : "hover:bg-teal-600 hover:text-black text-primaryColor "
                    }`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      </div>

      <div className="relative">
        <img
          src="/assets/about-bg-shade.png"
          className={`w-full h-full absolute top-0 left-0 z-[1] ${
            activeTab !== "About" && "hidden"
          }`}
        />
        {/* Tab Content */}
        <div
          className={`md:py-[84px] py-[40px] ${
            activeTab !== "About" ? "px-[22px]" : "lg:px-[22px]"
          }`}
        >
          {activeTab === "About" && (
            <>
              <KeyFeatures />
              <CrossChainIntegration />
            </>
          )}
          {activeTab === "IDO Projects" && <IDOProjects />}

          {activeTab === "Levels" && <Levels />}

          {activeTab === "IDO Stacking" && <IDOStaking />}

          {activeTab === "FAQs" && <FAQSection />}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
