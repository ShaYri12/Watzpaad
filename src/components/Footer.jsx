import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../public/assets/logo.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#161F2C]">
      <div className="py-20 max-w-[1280px] w-full mx-auto flex items-start justify-between px-22px sm:px-5 gap-10 xl:gap-20 md:flex-row flex-col p-4">
        <div className="flex flex-col gap-[17px] md:max-w-[300px]">
        <Link to="/" className="flex items-center my-auto">
          <img
            src={Logo}
            alt="logo"
            className="xl:w-[233px] lg:w-[200px] md:w-[233px] w-[170px] lg:mb-2"
          />
        </Link>
          {/* <h1 className="text-white text-[32px] font-[700]">Logo</h1> */}
          <h3 className="text-[18.92px] font-[700] text-white">
          Join The Winning Team
          </h3>
          <p className="text-[#798DA3]">
          Blockboost is a leading Web3 incubator and Launchpad for Web3 projects focusing on innovative technologies such as DeFi, AI, Big Data, NFTs and Web3 Gaming. By staking $BBT, you gain the advantage of early access to purchase project tokens, enhancing your position within the Web3 landscape.
          </p>
        </div>

        <ul className="flex flex-col">
          <h3 className="text-[#F8F8F8] text-[16px] sm:text-[18.92px] font-[700] tracking-[-1%] mb-4">
            Links
          </h3>
          {[
            { name: "Home", path: "/" },
            { name: "Launchpad", path: "/launchpad" },
            { name: "Earnings", path: "/earnings" },
            { name: "Marketplace", path: "/marketplace" },
            { name: "Vault", path: "/vault" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `px-[2px] py-[6px] transition ${
                  isActive
                    ? "text-primaryColor font-[700]"
                    : "text-white font-[400]"
                } hover:text-primaryColor`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
        <ul className="flex flex-col">
          <h3 className="text-[#F8F8F8] text-[16px] sm:text-[18.92px] font-[700] tracking-[-1%] mb-4">
            Help
          </h3>
          {[
            { name: "Stacking", path: "/stacking" },
            { name: "Win $1M", path: "/win" },
            { name: "Whitepaper", path: "/whitepaper" },
            { name: "Go To App", path: "/app" },
          ].map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `px-[2px] py-[6px] transition ${
                  isActive
                    ? "text-primaryColor font-[700]"
                    : "text-white font-[400]"
                } hover:text-primaryColor`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </ul>
        <ul className="md:w-[30%]">
          <h3 className="text-[#F8F8F8] text-[14px] sm:text-[16px] leading-[24px] tracking-[-1%] font-bold mb-[15px]">
            Social
          </h3>
          <div className="flex items-center gap-[8px] mb-[15px]">
            <Link to="#" className="min-h-[30px] min-w-[30px]">
              <img
                src="/assets/icons/telegram.png"
                alt="telegram"
                className="w-[30px] h-[30px]"
              />
            </Link>
            <Link
              to="#"
              className="rounded-full w-[30px] h-[30px] min-h-[30px] min-w-[30px] bg-[#060B13] text-white flex items-center justify-center"
            >
              <span className="text-[18px] font-[800]">M</span>
            </Link>
            <Link
              to="#"
              className="rounded-full w-[30px] h-[30px] min-h-[30px] min-w-[30px] bg-[#303945] text-white flex items-center justify-center"
            >
              <span className="text-[16px]">
                <BsTwitterX />
              </span>
            </Link>
            <Link to="#" className="relative min-h-[30px] min-w-[30px]">
              <img
                src="/assets/icons/facebook.png"
                alt="Facebook"
                className="w-[30px] h-[30px] relative z-[1]"
              />
              <div className="absolute bottom-[1px] left-[1px] w-[25px] h-[25px] bg-white rounded-full z-[0]"></div>
            </Link>
            <Link
              to="#"
              className="rounded-full w-[30px] h-[30px] min-h-[30px] min-w-[30px] bg-[#D62F84] text-white flex items-center justify-center"
            >
              <span className="text-[16px]">
                <AiFillInstagram size={20} />
              </span>
            </Link>
          </div>
          <p className="text-[#798DA3] mt-2 text-sm">
          Disclaimer: Not financial advice. Always DYOR before buying. Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your region.
          </p>
        </ul>
      </div>

      <div className="py-[15px] px-4 bg-primaryColor">
        <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between md:flex-row flex-col gap-5">
          <h3 className="md:order-1 order-2 text-black text-[18.04px] leading-[30px] font-medium">
            © 2024, All rights reserved.
          </h3>
          <div className="md:order-2 order-1 flex items-center gap-5 md:gap-10 flex-wrap md:justify-end justify-center">
            <Link
              to="/terms-and-conditions"
              className="hover:underline text-black text-[12.03px]"
            >
              Terms of service
            </Link>
            <Link
              to="/privacy-policy"
              className="hover:underline text-black text-[12.03px]"
            >
              Privacy Policy
            </Link>
            <Link
              to="/cookie-policy"
              className="hover:underline text-black text-[12.03px]"
            >
              Cancellation and Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
