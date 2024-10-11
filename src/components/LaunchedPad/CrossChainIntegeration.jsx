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
        <h2 className="text-[25px] md:text-[32px] md:text-[50px] md:leading-[57.5px] font-[700] text-white text-center">
          Cross-Chain Integration
        </h2>
        <p className="text-center text-white text-[12px] md:text-[17px] md:mt-[22px] mt-[13px] font-[300]">
          Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
          sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
          semper. r.
        </p>
      </div>

      <div className="flex justify-center sm:gap-[72px] gap-[32px] mt-[48px] overflow-x-auto md:ps-0  ps-4">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="bg-[#1F2835] sm:px-[40px] px-[20px] sm:py-[37px] py-[20px] rounded-[8.56px] text-center"
          >
            <div className="sm:min-h-[108px] min-h-[39px] min-w-[39px] sm:min-w-[108px]">
              <img
                src={`/assets/icons/${logo}`}
                className="sm:w-[108px] sm:h-[108px] w-[39px] h-[39px]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CrossChainIntegration;
