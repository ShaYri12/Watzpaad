import React, { useState } from 'react';

const LanguageDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('en');

    const languages = [
        { code: 'en', name: 'English', flag: 'https://flagcdn.com/w320/us.png' }, // Flag of the USA
        { code: 'ar', name: 'Arabic', flag: 'https://flagcdn.com/w320/sa.png' },   // Flag of Saudi Arabia
        { code: 'fr', name: 'French', flag: 'https://flagcdn.com/w320/fr.png' },   // Flag of France
        { code: 'es', name: 'Spanish', flag: 'https://flagcdn.com/w320/es.png' },   // Flag of Spain
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language.code);
        setIsOpen(false);
        console.log(`Selected language: ${language.names}`);   
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={toggleDropdown}
                    className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                >
                    <img 
                        src={languages.find(lang => lang.code === selectedLanguage)?.flag} 
                        alt={selectedLanguage} 
                        className="min-w-8 min-h-8 max-w-8 max-h-8 rounded-full"
                    />
                    {/* <span>{languages.find(lang => lang.code === selectedLanguage)?.name}</span> */}
                    <svg className="ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#fff" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="absolute z-10 mt-2 w-full rounded-md shadow-lg bg-white ring-1 bg-opacity-80  ring-black ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        {languages.map((language) => (
                            <button
                                key={language.code}
                                onClick={() => handleLanguageSelect(language)}
                                className="flex items-center w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                            >
                                {/* <img src={language.flag} alt={language.name} className="w-5 h-5 mr-2" /> */}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default LanguageDropdown;
