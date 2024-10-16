import { AiFillInstagram } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#161F2C]">
      <div className="py-20 max-w-[1280px] w-full mx-auto flex items-start justify-between px-22px sm:px-5 gap-10 xl:gap-20 md:flex-row flex-col p-4">
        <div className="flex flex-col gap-[17px] md:max-w-[300px]">
          <h1 className="text-white text-[32px] font-[700]">Logo</h1>
          <h3 className="text-[18.92px] font-[700] text-white">
            Join the Winning Team
          </h3>
          <p className="text-[#798DA3]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum vitae
            amet tenetur natus eos totam libero nulla deserunt odio minus eius
            consequatur quidem ea voluptate sunt, obcaecati officiis soluta
            delectus.
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
          <Link
            to="#"
            className="text-white text-[14px] px-[2px] py-[6px] sm:text-[16px]"
          >
            Stacking
          </Link>
          <Link
            to="#"
            className="text-white text-[14px] px-[2px] py-[6px] sm:text-[16px]"
          >
            Win $1M
          </Link>
          <Link
            to="#"
            className="text-white text-[14px] px-[2px] py-[6px] sm:text-[16px]"
          >
            Whitepaper
          </Link>
          <Link
            to="#"
            className="text-white text-[14px] px-[2px] py-[6px] sm:text-[16px]"
          >
            Go To App
          </Link>
        </ul>
        <ul className="md:w-[30%]">
          <h3 className="text-[#F8F8F8] text-[14px] sm:text-[16px] leading-[24px] tracking-[-1%] font-bold mb-[15px]">
            Social
          </h3>
          <div className="flex items-center gap-[8px] mb-[15px]">
            <Link href="/" className="min-h-[30px] min-w-[30px]">
              <img
                src="/assets/icons/telegram.png"
                alt="telegram"
                className="w-[30px] h-[30px]"
              />
            </Link>
            <Link
              href="/"
              className="rounded-full w-[30px] h-[30px] min-h-[30px] min-w-[30px] bg-[#060B13] text-white flex items-center justify-center"
            >
              <span className="text-[18px] font-[800]">M</span>
            </Link>
            <Link
              href="/"
              className="rounded-full w-[30px] h-[30px] min-h-[30px] min-w-[30px] bg-[#303945] text-white flex items-center justify-center"
            >
              <span className="text-[16px]">
                <BsTwitterX />
              </span>
            </Link>
            <Link href="/" className="relative min-h-[30px] min-w-[30px]">
              <img
                src="/assets/icons/facebook.png"
                alt="Facebook"
                className="w-[30px] h-[30px] relative z-[1]"
              />
              <div className="absolute bottom-[1px] left-[1px] w-[25px] h-[25px] bg-white rounded-full z-[0]"></div>
            </Link>
            <Link
              href="/"
              className="rounded-full w-[30px] h-[30px] min-h-[30px] min-w-[30px] bg-[#D62F84] text-white flex items-center justify-center"
            >
              <span className="text-[16px]">
                <AiFillInstagram size={20} />
              </span>
            </Link>
          </div>
          <p className="text-[#798DA3]">
            Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um
            sempeLorem
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
              href="/terms-and-conditions"
              className="hover:underline text-black text-[12.03px]"
            >
              Terms of service
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:underline text-black text-[12.03px]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:underline text-black text-[12.03px]"
            >
              Cancellation and Refund Policy
            </Link>
            <Link
              href="/"
              className="hover:underline text-black text-[12.03px]"
            >
              Careers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
