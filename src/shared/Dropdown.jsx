import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, defaultOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const dropdownRef = useRef(null); // Ref for the dropdown element

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Pass selected option to the parent component
  };

  const handleClickOutside = (event) => {
    // Close dropdown if the click is outside the dropdown element
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener to handle clicks outside the dropdown
    document.addEventListener("click", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block md:w-fit w-full" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-transparent border-2 border-primaryColor text-primaryColor md:px-[18.83px] px-[14px] md:py-[11.65px] py-[5.5px] rounded-full focus:outline-none cursor-pointer flex items-center justify-between w-full md:text-[13.98px] text-[10px]"
      >
        {selectedOption}
        <svg
          className={`w-4 h-4 ml-2 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {isOpen && (
        <ul className="absolute left-0 w-fit mt-2 bg-gray-900 text-primaryColor border border-primaryColor rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer md:text-[16px]  text-[14px]"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
