import React from "react";
import AuditOne from "../assets/audit.svg";
import Tether from "../assets/tether.svg";
import Bitcoin from "../assets/bitcoin.svg";
import Eth from "../assets/eth.svg";
import BNB from "../assets/bnb.svg";
import VISA from "../assets/visa.svg";
import Slider from "./Slider";
import HomeDropdown from "./HomeDropdown";
import { useTranslation } from "react-i18next";
import { FaCaretDown } from "react-icons/fa";

const Hero = () => {
  const dropdownOptions1 = ["USDT", "ETH", "USD"];
  // const dropdownOptions2 = ["BBT", "ETH", "DOGE"];

  const { t } = useTranslation("homepage");

  return (
    <section className="w-full h-full text-white py-[50px] md:px-6 sm:px-[19px] relative z-[1] xl:overflow-visible overflow-hidden">
      <img
        src="/assets/hero-bg-particles.png"
        className="w-full h-full absolute left-0 top-0 object-cover z-[1] md:block hidden"
      />
      <img
        src="/assets/hero-bg-particles-small.png"
        className="w-full sm:h-[50%] absolute left-0 top-[60%] object-cover z-[1] md:hidden"
      />
      {/* Orbit Path */}
      <div className="absolute lg:w-full w-[60%] lg:h-full h-[60%] object-cover lg:left-[-16%] left-0 z-[0] lg:top-[-14%] ">
        {/* Orbit Path */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1440"
          height="923"
          viewBox="0 0 1440 923"
          fill="none"
          className="md:block hidden"
        >
          <g clip-path="url(#clip0_88_312)">
            <path
              d="M1270.61 639.076C1260.76 678 1233.17 710.522 1191.64 735.99C1150.1 761.459 1094.65 779.851 1029.13 790.512C898.089 811.834 726.917 802.214 546.682 756.573C366.447 710.931 211.328 637.923 106.232 556.805C53.6831 516.245 13.6631 473.674 -10.7454 431.505C-35.1519 389.339 -43.9317 347.609 -34.0749 308.685C-24.218 269.761 3.36484 237.239 44.8985 211.772C86.4353 186.302 141.893 167.91 207.413 157.249C338.45 135.927 509.622 145.547 689.856 191.188C870.091 236.83 1025.21 309.838 1130.31 390.957C1182.86 431.516 1222.88 474.087 1247.28 516.256C1271.69 558.422 1280.47 600.152 1270.61 639.076Z"
              stroke="url(#paint0_linear_88_312)"
              stroke-width="1.13472"
            />
            <path
              d="M1566.33 713.961C1551.99 770.598 1511.86 817.899 1451.47 854.925C1391.08 891.954 1310.47 918.685 1215.26 934.178C1024.83 965.164 776.09 951.182 514.195 884.862C252.301 818.541 26.8884 712.453 -125.842 594.567C-202.209 535.623 -260.382 473.747 -295.868 412.44C-331.352 351.137 -344.133 290.437 -329.791 233.8C-315.448 177.163 -275.317 129.862 -214.933 92.8351C-154.545 55.8066 -73.9339 29.0757 21.2822 13.5825C211.712 -17.4036 460.45 -3.42163 722.344 62.8988C984.239 129.219 1209.65 235.308 1362.38 353.194C1438.75 412.138 1496.92 474.013 1532.41 535.32C1567.89 596.624 1580.67 657.324 1566.33 713.961Z"
              stroke="url(#paint1_linear_88_312)"
              stroke-width="1.13472"
            />
            <path
              d="M1926.16 805.083C1906.36 883.274 1850.96 948.558 1767.64 999.649C1684.31 1050.74 1573.09 1087.62 1441.74 1108.99C1179.04 1151.74 835.923 1132.45 474.664 1040.97C113.405 949.483 -197.541 803.142 -408.234 640.517C-513.582 559.204 -593.844 473.837 -642.809 389.243C-691.772 304.653 -709.423 220.87 -689.622 142.679C-669.822 64.4885 -614.422 -0.795896 -531.1 -51.8875C-447.774 -102.981 -336.556 -139.859 -205.205 -161.232C57.4958 -203.977 400.615 -184.687 761.874 -93.2044C1123.13 -1.72149 1434.08 144.62 1644.77 307.245C1750.12 388.558 1830.38 473.925 1879.35 558.519C1928.31 643.109 1945.96 726.893 1926.16 805.083Z"
              stroke="url(#paint2_linear_88_312)"
              stroke-width="1.13472"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_88_312"
              x1="11.1064"
              y1="286.143"
              x2="1141.36"
              y2="755.043"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop
                offset="0.491388"
                stop-color="#484848"
                stop-opacity="0.36"
              />
              <stop offset="1" stop-color="#484848" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_88_312"
              x1="-263.896"
              y1="201.111"
              x2="1378.28"
              y2="882.39"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop
                offset="0.491388"
                stop-color="#484848"
                stop-opacity="0.36"
              />
              <stop offset="1" stop-color="#484848" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_88_312"
              x1="-598.524"
              y1="97.643"
              x2="1666.57"
              y2="1037.35"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop
                offset="0.491388"
                stop-color="#484848"
                stop-opacity="0.36"
              />
              <stop offset="1" stop-color="#484848" />
            </linearGradient>
            <clipPath id="clip0_88_312">
              <rect
                width="1634"
                height="931.607"
                fill="white"
                transform="translate(-85 -8.65234)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="375"
          height="510"
          viewBox="0 0 375 510"
          fill="none"
          className="md:hidden"
        >
          <path
            d="M401.201 256.993C397.29 272.436 386.346 285.339 369.867 295.444C353.387 305.549 331.384 312.847 305.388 317.077C253.398 325.536 185.484 321.719 113.974 303.611C42.4641 285.502 -19.0812 256.535 -60.7789 224.351C-81.6281 208.258 -97.5065 191.368 -107.191 174.637C-116.874 157.907 -120.358 141.35 -116.447 125.907C-112.536 110.464 -101.592 97.5602 -85.1135 87.4556C-68.6334 77.3503 -46.6299 70.053 -20.6344 65.8231C31.3558 57.3635 99.2698 61.1803 170.78 79.289C242.29 97.3977 303.835 126.364 345.533 158.549C366.382 174.641 382.26 191.532 391.944 208.263C401.628 224.992 405.111 241.549 401.201 256.993Z"
            stroke="url(#paint0_linear_88_3710)"
            stroke-width="0.450212"
          />
          <path
            d="M518.529 286.704C512.838 309.175 496.916 327.943 472.958 342.633C448.999 357.325 417.015 367.93 379.237 374.077C303.682 386.371 204.994 380.824 101.084 354.511C-2.82468 328.197 -92.2593 286.106 -152.857 239.333C-183.156 215.947 -206.236 191.397 -220.316 167.073C-234.394 142.75 -239.465 118.667 -233.775 96.1956C-228.085 73.7243 -212.162 54.9572 -188.204 40.2666C-164.245 25.5752 -132.261 14.9694 -94.4835 8.82235C-18.9285 -3.47167 79.7603 2.07582 183.669 28.3891C287.579 54.7024 377.013 96.794 437.611 143.566C467.91 166.953 490.99 191.503 505.07 215.827C519.148 240.15 524.219 264.233 518.529 286.704Z"
            stroke="url(#paint1_linear_88_3710)"
            stroke-width="0.450212"
          />
          <path
            d="M661.295 322.858C653.439 353.88 631.458 379.783 598.399 400.054C565.339 420.326 521.212 434.957 469.097 443.437C364.868 460.397 228.732 452.743 85.3995 416.447C-57.9335 380.15 -181.304 322.088 -264.899 257.565C-306.697 225.303 -338.541 191.433 -357.969 157.869C-377.395 124.307 -384.398 91.0653 -376.542 60.0425C-368.686 29.0197 -346.706 3.11746 -313.647 -17.1536C-280.587 -37.4254 -236.46 -52.057 -184.345 -60.5369C-80.1161 -77.4967 56.0198 -69.8432 199.353 -33.5465C342.686 2.75021 466.057 60.8126 549.651 125.336C591.449 157.597 623.294 191.467 642.721 225.031C662.148 258.593 669.151 291.835 661.295 322.858Z"
            stroke="url(#paint2_linear_88_3710)"
            stroke-width="0.450212"
          />
          <defs>
            <linearGradient
              id="paint0_linear_88_3710"
              x1="-98.5209"
              y1="116.963"
              x2="349.917"
              y2="303.004"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop
                offset="0.491388"
                stop-color="#484848"
                stop-opacity="0.36"
              />
              <stop offset="1" stop-color="#484848" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_88_3710"
              x1="-207.631"
              y1="83.2259"
              x2="443.918"
              y2="353.53"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop
                offset="0.491388"
                stop-color="#484848"
                stop-opacity="0.36"
              />
              <stop offset="1" stop-color="#484848" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_88_3710"
              x1="-340.398"
              y1="42.174"
              x2="558.3"
              y2="415.011"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="white" />
              <stop
                offset="0.491388"
                stop-color="#484848"
                stop-opacity="0.36"
              />
              <stop offset="1" stop-color="#484848" />
            </linearGradient>
          </defs>
        </svg>
        <img
          src="/assets/icons/star1.png"
          className="star top-0"
          style={{
            width: "50px", // Adjust size as needed
            height: "50px", // Adjust size as needed
          }}
        />
        <img
          src="/assets/icons/star2.png"
          className="star-big top-0"
          style={{
            width: "69.22px", // Adjust size as needed
            height: "68.08px", // Adjust size as needed
          }}
        />
      </div>

      <div className=" max-w-full  mx-auto flex flex-col gap-10 lg:gap-4 lg:flex-row justify-between w-full items-center relative z-[2]">
        <div className="lg:max-w-[590px] w-full mx-auto sm:px-0 px-[19px]">
          <h1 className="text-[#38DCC8] text-[40px] sm:text-[50px] md:text-[75px] font-bold">
            {t("hero.title")}
          </h1>
          <div className="bg-[#38DCC8] w-[250px] h-[6px] rounded-[20px] my-3 mb-6"></div>
          <h3 className="text-white font-bold sm:leading-[48px] text-[22px] sm:text-[40px]">
            {t("hero.subtitle")}
          </h3>
          <p className="text-[14px] sm:text-[18px] font-normal font-space mt-5 sm:mt-[27px]">
            {t("hero.description1")}
          </p>
          <p className="text-[14px] sm:text-[18px] font-normal font-space mt-5 sm:mt-[27px]">
            {t("hero.description2")}
          </p>
          <div className="mt-[29px] flex items-center gap-4 sm:gap-[29px]">
            <button
              className="bg-[#38DCC8] text-black font-normal text-[18px] leading-[24px] border border-[#38DCC8] rounded-[30px] w-[180px] h-[40px] sm:h-[55px] flex items-center justify-center gap-2.5"
              style={{ boxShadow: "0px 4px 22.6px 0px #38DCC88C" }}
            >
              {t("hero.whitepaper")}
            </button>
            <button className=" text-white font-normal bg-[#111B28] text-[18px] leading-[24px] border border-[#38DCC8] rounded-[30px] w-[180px] h-[40px] sm:h-[55px] flex items-center justify-center gap-2.5">
              <img
                src={AuditOne}
                alt="audit"
                width={35}
                height={35}
                className="w-[25px] h-[25px] sm:w-[35px] sm:h-[35px]"
              />{" "}
              {t("hero.audit")}
            </button>
          </div>
        </div>

        <div className="sm:px-0 px-[8px] overflow-x-hidden max-w-[500px] mx-auto h-full">
          <div
            className=" lg:max-w-[428px] bg-[#1F2835CC] w-full mx-auto border border-[#303945] rounded-[13.79px] sm:p-3 p-2"
            style={{ backdropFilter: " blur(34.47999954223633px)" }}
          >
            <div className="card-border w-full h-full p-[2.07px]">
              <div className="px-3.5 py-5 sm:p-5 h-full relative z-[2]">
                <div className="px-1.5 flex items-center justify-between text-[16px] sm:text-[18px] leading-[16px] font-normal text-center mt-[5px] mb-[15px]">
                  <p>{t("hero.buy-bbt-presale")}</p>
                  <p className="font-semibold">{t("hero.stage")} 1/20</p>
                </div>
                {/* Timer */}
                <div className="w-full bg-[#111B28] rounded-[10px] md:px-4 px-[9.21px] md:py-4 py-[13.44px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center flex-col">
                      <span className="text-[#38DCC8] md:text-[29px] text-[23.41px] leading-[26.92px] md:leading-[34px] font-bold">
                        00
                      </span>
                      <div className="text-grayish text-[11.79px] md:text-[15px] leading-[13.56px] md:leading-[17px] font-normal">
                        {t("hero.days")}
                      </div>
                    </div>
                    <div className="flex items-center flex-col">
                      <span className="text-[#38DCC8] md:text-[29px] text-[23.41px] leading-[26.92px] md:leading-[34px] font-bold">
                        00
                      </span>
                      <div className="text-grayish text-[11.79px] md:text-[15px] leading-[13.56px] md:leading-[17px] font-normal uppercase">
                        {t("hero.hours")}
                      </div>
                    </div>
                    <div className="flex items-center flex-col">
                      <span className="text-[#38DCC8] md:text-[29px] text-[23.41px] leading-[26.92px] md:leading-[34px] font-bold">
                        00
                      </span>
                      <div className="text-grayish text-[11.79px] md:text-[15px] leading-[13.56px] md:leading-[17px] font-normal uppercase">
                        {t("hero.minutes")}
                      </div>
                    </div>
                    <div className="flex items-center flex-col">
                      <span className="text-[#38DCC8] md:text-[29px] text-[23.41px] leading-[26.92px] md:leading-[34px] font-bold">
                        00
                      </span>
                      <div className="text-grayish text-[11.79px] md:text-[15px] leading-[13.56px] md:leading-[17px] font-normal uppercase">
                        {t("hero.seconds")}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-[14px] leading-[16px] font-normal text-center mt-[15px]">
                  {t("hero.usdtRaised")}
                </p>
                <Slider />

                <h2 className="mt-6 text-center text-grayish text-[15px] leading-[20px] font-bold">
                  {t("hero.purchased")} $BBT= 0
                </h2>
                <div className="flex items-center justify-center mt-3 gap-2">
                  <img src={Bitcoin} alt="bitcoin" width={24} height={24} />
                  <h2 className="text-[14px] leading-[16px] font-bold">
                    1 BBT
                  </h2>
                  <h2 className="text-grayish text-[14px] leading-[16px] font-bold">
                    $0.001
                  </h2>
                </div>

                <div className="mt-4 max-w-[350px] mx-auto flex items-center gap-2 sm:gap-4">
                  <div className="border border-[#38DCC800] flex-col flex items-center gap-2.5 w-full bg-[#101A27] custom-shadow px-5 py-4 rounded-xl">
                    <h2 className="text-grayish text-[14px] leading-[12px] font-normal">
                      {t("hero.listingPrice")}
                    </h2>
                    <p className="text-[12px] sm:text-[15px] font-bold leading-[15px]">
                      $0.005 <span className="text-[#38DCC8]">(+400%)</span>
                    </p>
                  </div>
                  <div className="border border-[#38DCC800] flex-col flex items-center gap-2.5 w-full bg-[#101A27] custom-shadow px-5 py-4 rounded-xl">
                    <h2 className="text-grayish text-[14px] leading-[12px] font-normal">
                      {t("hero.nextPrice")}
                    </h2>
                    <p className="text-[12px] sm:text-[15px] font-bold leading-[15px]">
                      $0.005 <span className="text-[#38DCC8]">(+400%)</span>
                    </p>
                  </div>
                </div>

                <div className="mt-2 max-w-[350px] mx-auto rounded-[14px] bg-[#161F2C] w-full py-3 px-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-grayish text-[14px] leading-[16px] font-normal">
                      USD : $ 0
                    </h4>
                    <div className="flex items-center gap-2 mt-2">
                      <img
                        src={Tether}
                        alt="audit"
                        className="min-w-[16px] min-h-[16px]"
                      />
                      <input
                        type="text"
                        placeholder="1 - 50,000"
                        className="text-[#9CA3AF] text-[14px] leading-[14px] font-normal outline-none bg-transparent w-[100px]"
                      />
                    </div>
                  </div>
                  <HomeDropdown
                    label="USDT"
                    options={dropdownOptions1}
                    image={Tether}
                  />
                </div>

                <div className="mt-2 max-w-[350px] mx-auto rounded-[14px] bg-[#161F2C] w-full py-3 px-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-grayish text-[14px] leading-[16px] font-normal">
                      {t("hero.receive")}
                    </h4>
                    <div className="flex items-center gap-2 mt-2">
                      <img
                        src={Bitcoin}
                        alt="Bitcoin"
                        className="min-w-[16px] min-h-[16px] max-w-[18px] max-h-[18px]"
                      />
                      <input
                        type="text"
                        placeholder="1 - 50,000"
                        className="text-[#9CA3AF] text-[14px] leading-[14px] font-normal outline-none bg-transparent w-[100px]"
                      />
                    </div>
                  </div>

                  <div>
                    <button className="flex items-center outline-none justify-between w-[130px] px-2 py-2 text-sm font-medium text-white  border border-grayish rounded-lg ">
                      <span className="flex items-center">
                        <img src={Bitcoin} alt="audit" width={20} height={20} />
                        <span className="ml-2">BBT</span>
                      </span>
                      <FaCaretDown className="text-[#38DCC8] text-[20px]" />
                    </button>
                  </div>
                </div>

                <p className="text-grayish text-[14px] leading-[14px] font-normal text-center py-5">
                  {t("hero.availablePaymentMethods")}
                </p>

                <div className="mb-5 flex items-center gap-2">
                  <button className="flex items-center gap-2 justify-center py-2 w-full bg-[#161F2CD6] rounded-lg border border-[#38DCC8] md:text-[16px] text-[10px]">
                    <span className="md:w-[22px] md:h-[22px] w-[17.42px] h-[17.42px]">
                      <img src={Eth} alt="bitcoin" width={22} height={22} />
                    </span>
                    ETH
                  </button>
                  <button className="flex items-center gap-2 justify-center py-2 w-full bg-[#161F2CD6] rounded-lg border border-[#38DCC8] md:text-[16px] text-[10px]">
                    <span className="md:w-[22px] md:h-[22px] w-[17.42px] h-[17.42px]">
                      <img src={BNB} alt="bitcoin" width={22} height={22} />
                    </span>
                    BNB
                  </button>
                  <button className="flex items-center gap-2 justify-center py-2 w-full bg-[#161F2CD6] rounded-lg border border-[#38DCC8] md:text-[16px] text-[10px]">
                    <span className="md:w-[22px] md:h-[22px] w-[17.42px] h-[17.42px]">
                      <img src={VISA} alt="bitcoin" width={22} height={22} />
                    </span>
                    CARD
                  </button>
                </div>

                <div className="w-full flex flex-wrap gap-2">
                  <button className="bg-[#38DCC8] text-black flex-grow text-[14px] leading-[18px] min-h-[40px] max-w-[150px] rounded-[20.69px] border-[0.69px] border-[#FFFFFF] whitespace-normal text-center px-2 py-1">
                    {t("hero.connectWallet")}
                  </button>
                  <button className="bg-[#38DCC8] text-black flex-grow text-[14px] leading-[18px] min-h-[40px] max-w-[150px] rounded-[20.69px] border-[0.69px] border-[#FFFFFF] whitespace-normal text-center px-2 py-1">
                    {t("hero.transactionDashboard")}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
