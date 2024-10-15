import { useState } from "react";

const Dropdown = ({ options, defaultOption, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option); // Pass selected option to the parent component
  };

  return (
    <div className="relative inline-block w-fit">
      <button
        onClick={toggleDropdown}
        className="bg-transparent border-2 border-teal-400 text-teal-400 px-6 py-2 rounded-full focus:outline-none cursor-pointer flex items-center justify-between w-full"
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
        <ul className="absolute left-0 w-fit mt-2 bg-gray-900 text-teal-400 border border-teal-400 rounded-lg shadow-lg z-10">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 hover:bg-gray-700 cursor-pointer"
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
