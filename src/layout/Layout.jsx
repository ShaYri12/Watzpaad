import React, { useEffect, useState } from "react";
import Header from "../components/Header"; // Your custom header
import Footer from "../components/Footer"; // Your custom footer
import { Outlet } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";

const Layout = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show or hide the button based on scroll position
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      // Adjust this value as per your requirement
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-[30px] md:right-[30px] right-[20px] z-[99999] w-[45px] h-[45px] flex items-center justify-center rounded-full border-2 border-white"
        >
          <IoIosArrowUp size={25} className="text-white" />
        </button>
      )}
    </div>
  );
};

export default Layout;
