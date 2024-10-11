const CrossChainIntegration = () => {
  const logos = [
    "integeration-logo-1.png",
    "integeration-logo-2.png",
    "integeration-logo-3.png",
    "integeration-logo-4.png",
    "integeration-logo-5.png",
  ];

  return (
    <div className="text-white pt-[55px] max-w-[1280px] mx-auto">
      <div className="max-w-[769px] text-center mx-auto">
        <h2 className="text-[32px] md:text-[50px] md:leading-[57.5px] font-[700] text-white text-center">
          Cross-Chain Integration
        </h2>
        <p className="text-center text-white md:text-[17px] mt-[22px] font-[300]">
          Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
          sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
          semper. r.
        </p>
      </div>

      <div className="flex justify-center space-x-6 mt-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-gray-800 px-[40px] py-[37px] rounded-xl text-center"
          >
            <div className="">
              <img
                src={`/assets/icons/${logo}`}
                className="w-[108px] h-[108px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrossChainIntegration;
