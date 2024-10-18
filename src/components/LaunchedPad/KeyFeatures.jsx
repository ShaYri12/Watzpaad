const KeyFeatures = () => {
  const features = [
    {
      title: "Fair and Transparent",
      imageUrl: "feature-1.svg",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
    },
    {
      title: "Rug-Proof Mechanisms",
      imageUrl: "feature-2.svg",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
    },
    {
      title: "",
      imageUrl: "feature-3.svg",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
    },
    {
      title: "High-Quality Projects",
      imageUrl: "feature-4.svg",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
    },
  ];

  return (
    <div className="text-white pb-[55px] max-w-[1280px] mx-auto lg:px-0 px-[22px]">
      <div className="max-w-[769px] text-center mx-auto">
        <h2 className="text-[25px] md:text-[32px] md:text-[50px] md:leading-[57.5px] font-[700] text-white text-center">
          MataAltPad Key Features
        </h2>
        <p className="text-center text-white text-[12px] md:text-[17px] md:mt-[22px] mt-[13px] font-[300]">
          Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
          sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
          semper. r.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 justify-center gap-[27px] md:mt-[56px] mt-[40px] flex-wrap">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1F2835CC] border-[2.97px] border-[#303945] px-[12px] py-[10px] rounded-[26.71px] text-center"
            style={{ backdropFilter: "blur(29.689451217651367px)" }}
          >
            <div className="px-[17px] py-[37px] card-border h-full w-full rounded-[13.35px]">
              <div className="flex flex-col items-center justify-center relative z-[1] h-full w-full">
                <div
                  className="bg-[#FFFFFF33] rounded-[14.74px] md:min-h-[78.25px] md:min-w-[85.06px] min-h-[65.71px] min-w-[71.43px] flex items-center justify-center mb-[16px]"
                  style={{
                    boxShadow: `-1.71px 1.71px 1.71px 0px #FFFFFF63 inset, 
                            1.14px -1.14px 11.34px 0px #D6D6D62B inset, 
                            0px 4px 40px 0px #92FFF233`,
                  }}
                >
                  <div className="md:min-h-[50px] md:min-w-[50px] min-h-[42px] min-w-[42px]">
                    <img
                      src={`/assets/icons/${feature.imageUrl}`}
                      className="md:w-[50px] md:h-[50px] w-[42px] h-[42px]"
                    />
                  </div>
                </div>
                {feature.title && (
                  <h3 className="text-[17.62px] font-[700]">{feature.title}</h3>
                )}
                <p className="text-gray-400 text-[10.57px] mt-[7px]">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
