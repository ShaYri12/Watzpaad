import React, { useState, useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa"; // Icon for the dropdown arrow

const HomeDropdown = ({ label, options, image }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(label); // Initialize with the passed `label`
  const dropdownRef = useRef(null); // Create a ref to reference the dropdown

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update the label to the selected option
    setIsOpen(false); // Close the dropdown after selection
  };

  // Handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close the dropdown if clicked outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div
      className="relative inline-block text-left outline-none"
      ref={dropdownRef}
    >
      <div>
        <button
          onClick={toggleDropdown}
          className="flex items-center outline-none justify-between w-[130px] px-2 py-2 text-sm font-medium text-white border border-grayish rounded-lg"
        >
          <span className="flex items-center">
            <img src={image} alt="audit" width={20} height={20} />
            <span className="ml-2">{selectedOption}</span>{" "}
            {/* Display selected option */}
          </span>
          <FaCaretDown className="text-[#38DCC8] text-[20px]" />
        </button>
      </div>

      {isOpen && (
        <div className="absolute right-0 z-10 w-full mt-2 bg-gray-800 rounded-md shadow-lg">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block w-full px-4 py-2 text-sm text-white hover:bg-gray-700 text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomeDropdown;
