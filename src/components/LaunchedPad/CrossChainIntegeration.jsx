import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const logos = [
  "integeration-logo1.png",
  "integeration-logo2.png",
  "integeration-logo3.png",
  "integeration-logo4.png",
  "integeration-logo5.png",
];

const CrossChainIntegration = () => {
  return (
    <div className="text-white pt-[55px] max-w-[1280px] mx-auto">
      <div className="max-w-[769px] text-center mx-auto lg:px-0 px-[22px]">
        <h2 className="text-[25px] md:text-[32px] md:text-[50px] md:leading-[57.5px] font-[700] text-white text-center">
          Cross-Chain Integration
        </h2>
        <p className="text-center text-white text-[12px] md:text-[17px] md:mt-[22px] mt-[13px] font-[300]">
          Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
          sempeLorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
          semper. r.
        </p>
      </div>

      <div className="lg:flex hidden justify-center xl:gap-[72px] gap-[12px] mt-[48px] lg:px-0 px-[22px] w-full">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="p-[0.86px] rounded-[8.56px]"
            style={{
              background:
                "linear-gradient(161.06deg, rgba(122, 165, 0, 0) 13.7%, rgba(122, 165, 0, 0.4) 27.55%, #7AA500 36.4%, #BAFC00 53.88%, rgba(186, 252, 0, 0) 89.18%)", // Removed the semicolon here
            }}
          >
            <div className="bg-[#1F2835] w-[189.1px] h-[182.25px] flex items-center justify-center rounded-[8.56px]">
              <div className="h-[182.25px] w-[182.25px]">
                <img
                  src={`/assets/icons/${logo}`}
                  className="h-[182.25px] w-[182.25px]"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="lg:hidden block pb-[58px]">
        <LogoSlider />
      </div>
    </div>
  );
};

export default CrossChainIntegration;

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="md:w-[40px] w-[28px] md:h-[40px] h-[28px] border border-white bg-transparent rounded-full flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRightLong className="w-[10px] h-[20px] md:text-[16px] text-[10px]" />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="md:w-[40px] w-[28px] md:h-[40px] h-[28px] border border-white bg-transparent rounded-full flex items-center justify-center cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeftLong className="w-[10px] h-[20px] md:text-[16px] text-[10px]" />
    </div>
  );
};

const LogoSlider = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    centerMode: true, // Enable center mode
    speed: 500,
    slidesToShow: 3, // Full slides to show at once
    slidesToScroll: 1,
    arrows: false, // Disable default arrows
    variableWidth: true, // Allow flexible widths for the divs
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  let sliderRef = useRef(null);

  return (
    <div className="relative max-w-[1280px] mx-auto md:pt-[50px] pt-[30px] md:pb-[50px] pb-[35px]">
      <Slider
        {...settings}
        ref={sliderRef}
        className="lg:max-h-auto md:max-h-[160px] max-h-[130px]"
      >
        {logos.map((logo, index) => (
          <div key={index} className="px-[15px]">
            <div
              className="p-[0.86px] rounded-[8.56px]"
              style={{
                background:
                  "linear-gradient(161.06deg, rgba(122, 165, 0, 0) 13.7%, rgba(122, 165, 0, 0.4) 27.55%, #7AA500 36.4%, #BAFC00 53.88%, rgba(186, 252, 0, 0) 89.18%)", // Removed the semicolon here
              }}
            >
              <div className="bg-[#1F2835] sm:w-[147px] w-[78.26px] sm:h-[140px] h-[75.43px] flex items-center justify-center rounded-[8.56px]">
                <div className="sm:h-[140px] h-[75.43px] sm:w-[140px] w-[75.43px]">
                  <img
                    src={`/assets/icons/${logo}`}
                    className="sm:h-[140px] h-[75.43px] sm:w-[140px] w-[75.43px]"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom navigation arrows */}
      <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 flex sm:gap-5 gap-[15px]">
        <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
        <NextArrow onClick={() => sliderRef.current.slickNext()} />
      </div>
    </div>
  );
};
