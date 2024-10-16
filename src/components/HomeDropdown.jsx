// components/Dropdown.jsx
import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa'; // Icon for the dropdown arrow
import Audit from "../assets/audit-icons.svg";

const HomeDropdown = ({ label, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        console.log(`Selected: ${option}`);
        setIsOpen(false); // Close the dropdown after selection
    };

    return (
        <div className="relative inline-block text-left outline-none">
            <div>
                <button
                    onClick={toggleDropdown}
                    className="flex items-center outline-none justify-between w-[130px] px-2 py-2 text-sm font-medium text-white  border border-[#798DA3] rounded-lg "
                >
                    <span className="flex items-center">
                        <img src={Audit} alt="audit" width={20} height={20} />
                        <span className="ml-2">{label}</span> 
                    </span>
                    <FaCaretDown className="text-[#38DCC8] text-[20px]"/>
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
