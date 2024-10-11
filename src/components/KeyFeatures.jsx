const KeyFeatures = () => {
  const features = [
    {
      title: "Fair and Transparent",
      icon: "🌐",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
    },
    {
      title: "Rug-Proof Mechanisms",
      icon: "🔒",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
    },
    {
      title: "",
      icon: "💎",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
    },
    {
      title: "High-Quality Projects",
      icon: "💎",
      description:
        "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate",
    },
  ];

  return (
    <div className="text-white pb-[55px] max-w-[1280px] mx-auto">
      <div className="max-w-[769px] text-center mx-auto">
        <h2 className="text-[32px] md:text-[50px] md:leading-[57.5px] font-[700] text-white text-center">
          MataAltPad Key Features
        </h2>
        <p className="text-center text-white md:text-[17px] mt-[22px] font-[300]">
          Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
          sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
          semper. r.
        </p>
      </div>

      <div className="flex justify-center gap-[27px] mt-[56px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#1F2835CC] border-[2.97px] border-[#303945] px-[12px] py-[10px] rounded-[26.71px] text-center"
            style={{ backdropFilter: "blur(29.689451217651367px)" }}
          >
            <div className="px-[17px] py-[37px] border-[1.78px] border-[#38DCC8] h-full w-full rounded-[13.35px]">
              <div className="mb-[16px]">{feature.icon}</div>
              {feature.title && (
                <h3 className="text-[17.62px] font-[700]">{feature.title}</h3>
              )}
              <p className="text-gray-400 text-[10.57px] mt-[7px]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyFeatures;
