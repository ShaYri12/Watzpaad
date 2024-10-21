import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", name: "English", flag: "https://flagcdn.com/w320/us.png" },
  { code: "ar", name: "Arabic", flag: "https://flagcdn.com/w320/sa.png" },
  { code: "de", name: "German", flag: "https://flagcdn.com/w320/de.png" },
  { code: "es", name: "Spanish", flag: "https://flagcdn.com/w320/es.png" },
  { code: "fr", name: "French", flag: "https://flagcdn.com/w320/fr.png" },
  { code: "hi", name: "Hindi", flag: "https://flagcdn.com/w320/in.png" },
  { code: "it", name: "Italian", flag: "https://flagcdn.com/w320/it.png" },
  { code: "ja", name: "Japanese", flag: "https://flagcdn.com/w320/jp.png" },
  { code: "ko", name: "Korean", flag: "https://flagcdn.com/w320/kr.png" },
  { code: "pl", name: "Polish", flag: "https://flagcdn.com/w320/pl.png" },
  { code: "pt", name: "Portuguese", flag: "https://flagcdn.com/w320/pt.png" },
  { code: "ru", name: "Russian", flag: "https://flagcdn.com/w320/ru.png" },
  { code: "th", name: "Thai", flag: "https://flagcdn.com/w320/th.png" },
  { code: "tr", name: "Turkish", flag: "https://flagcdn.com/w320/tr.png" },
  { code: "uk", name: "Ukrainian", flag: "https://flagcdn.com/w320/ua.png" },
  { code: "vi", name: "Vietnamese", flag: "https://flagcdn.com/w320/vn.png" },
  { code: "zh", name: "Chinese", flag: "https://flagcdn.com/w320/cn.png" },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const dropdownRef = useRef(null); // Reference for the dropdown

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const selectedLang = languages.find((lang) => lang.code === lng);
    setCurrentLang(selectedLang);
    setIsOpen(false); // Close the dropdown after selecting a language
  };

  // Handle click outside to close the dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Close dropdown if click is outside
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-between py-1 items-center w-full text-sm font-medium text-white"
          onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <img
            src={currentLang.flag}
            alt={`${currentLang.name} flag`}
            className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-contain"
          />
          <svg
            className="-mr-1 ml-2 h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06 0L10 10.86l3.71-3.65a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-40 max-h-60 overflow-hidden rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1 overflow-y-auto"
            style={{ maxHeight: "15rem" }} // Set max height for dropdown content
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                <img
                  src={lang.flag}
                  alt={`${lang.name} flag`}
                  className="w-5 h-5 mr-2"
                />
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
