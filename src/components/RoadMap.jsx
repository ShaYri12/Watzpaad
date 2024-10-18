import React from "react";

const RoadMap = () => {
  const phases = [
    {
      title: "PHASE 1",
      descriptionOne: "Project Initiation",
      descriptionTwo: "Smart Contract Development",
      descriptionThree: "Website Launch",
      descriptionFour: "Release Whitepaper",
      descriptionFive: "Contract audit with Coinsult",
    },
    {
      title: "PHASE 2",
      descriptionOne: "Presale Launch ",
      descriptionTwo: "Huge Marketing Campaign",
      descriptionThree: "Presale Stages 1-5 on blockboost.io",
      descriptionFour: "Beta Testing of launchpad",
    },
    {
      title: "PHASE 3",
      descriptionOne: "Security Audits for Launchpad",
      descriptionTwo: "Launchpad to Launch Legit Projects",
      descriptionThree: "Presale stages 6-10",
      descriptionFour: "Partnership with Dapps for Vault",
    },
    {
      title: "PHASE 4",
      descriptionOne: "NFT Marketplace Launch",
      descriptionTwo: "Launch of $BBT",
      descriptionThree: "Listing on Top Tier exchanges",
      descriptionFour: "Updated Roadmap",
    },
  ];

  return (
    <div className="text-white px-4 md:px-6 mt-10 py-10 relative">
      <img
        src="/assets/road-map-bg-shade.png"
        className="w-full h-full absolute top-0 left-0 z-[1]"
      />
      <div className="max-w-[1280px] m-auto w-full relative z-[2]">
        <h1 className="text-[35px] md:text-[50px] md:leading-[57.5px] text-white font-bold max-w-[500px] mx-auto text-center">
          Road Map
        </h1>
        <p className="text-white text-[18px] leading-[24px] font-light text-center max-w-[769px] mx-auto mt-6">
          Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque semper.
        </p>

        {/* Laptop Roadmap Timeline and Phases */}
        <div className="md:block hidden relative mt-14">
          {/* Horizontal or Vertical Line depending on the screen size */}
          <div className="absolute md:top-[70px] left-0 right-0 md:w-full w-[2px] md:h-1 h-full bg-gray-700 z-0 md:left-0 "></div>

          <div className="flex flex-col md:flex-row justify-between items-start relative z-10">
            {/* Loop through phases */}
            {phases.map((phase, index) => (
              <div
                key={index}
                className="flex md:flex-col items-center mb-8 md:mb-0 md:w-1/4 text-center relative w-full md:block"
              >
                <div className="md:block hidden md:mb-6 mb-2 text-left md:text-center">
                  <h3 className="font-normal text-lg">{phase.title}</h3>
                </div>

                {/* Circle with Glow */}
                <div className="bg-[#38DCC8] p-4 rounded-full w-10 h-10 mb-4 relative z-10 shadow-2xl mx-auto"></div>

                {/* Vertical layout for mobile */}
                <div className="md:hidden flex-1 border-l-[2px] border-gray-700 ml-6"></div>
              </div>
            ))}
          </div>

          {/* Detailed Phase Information */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            {phases.map((phase, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 relative md:bg-[#1F2835CC] py-6 px-4 rounded-lg border border-[#38DCC8] shadow-2xl md:ml-0 ml-12"
              >
                <p className="text-[#798DA3] text-[16px] font-space font-medium">
                  {phase.descriptionOne}
                </p>
                <p className="text-[#798DA3] text-[16px] font-space font-medium">
                  {phase.descriptionTwo}
                </p>
                <p className="text-[#798DA3] text-[16px] font-space font-medium">
                  {phase.descriptionThree}
                </p>
                <p className="text-[#798DA3] text-[16px] font-space font-medium">
                  {phase.descriptionFour}
                </p>
                <p className="text-[#798DA3] text-[16px] font-space font-medium">
                  {phase.descriptionFive}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Tablet & Mobile */}
        <div className="block md:hidden">
          {/* Roadmap Timeline */}
          <div className="relative mt-14">
            {/* Vertical Line */}
            <div className="absolute left-2.5 top-0 w-[2px] h-full bg-[#38DCC8] z-0"></div>

            {/* Phases with Timeline Dots and Descriptions */}
            <div className="relative z-10">
              {phases.map((phase, index) => (
                <div key={index} className="flex items-start mb-12">
                  {/* Dot on the Timeline */}
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-[#38DCC8] rounded-full shadow-2xl relative top-[100px] sm:top-[70px] z-10"></div>
                  </div>

                  {/* Phase Details (Right Side) */}
                  <div className="flex flex-col gap-2 ml-4 sm:ml-6 w-full md:w-[75%] px-4 sm:px-6 py-6 bg-[#1F2835CC] rounded-lg shadow-2xl border border-[#38DCC8] text-left">
                    <h3 className="font-normal text-lg mb-2">{phase.title}</h3>
                    <p className="text-[#798DA3] text-[14px] font-space font-medium">
                      {phase.descriptionOne}
                    </p>
                    <p className="text-[#798DA3] text-[14px] font-space font-medium">
                      {phase.descriptionTwo}
                    </p>
                    <p className="text-[#798DA3] text-[14px] font-space font-medium">
                      {phase.descriptionThree}
                    </p>
                    <p className="text-[#798DA3] text-[14px] font-space font-medium">
                      {phase.descriptionFour}
                    </p>
                    <p className="text-[#798DA3] text-[14px] font-space font-medium">
                      {phase.descriptionFive}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
