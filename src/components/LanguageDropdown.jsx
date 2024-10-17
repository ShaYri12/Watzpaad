// src/LanguageSwitcher.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'En', flag: 'https://flagcdn.com/w320/us.png' },
  { code: 'ar', name: 'Ar', flag: 'https://flagcdn.com/w320/sa.png' },
];

const LanguageDropdown = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    const selectedLang = languages.find(lang => lang.code === lng);
    setCurrentLang(selectedLang);
    setIsOpen(false); // Close the dropdown after selecting a language
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-between py-1 items-center w-full text-sm font-medium text-white"
          onClick={() => setIsOpen(!isOpen)} // Toggle dropdown
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          <img src={currentLang.flag} alt={`${currentLang.name} flag`} className="min-w-7 min-h-7 max-w-7 max-h-7 rounded-full bg-contain" />
          {/* {currentLang.name} */}
          <svg className="-mr-1 ml-2 h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06 0L10 10.86l3.71-3.65a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0l-4.25-4.25a.75.75 0 010-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-20 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                role="menuitem"
              >
                <img src={lang.flag} alt={`${lang.name} flag`} className="w-5 h-5 mr-2" />
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
