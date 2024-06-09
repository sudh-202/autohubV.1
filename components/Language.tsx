'use client'
import { useState } from "react";
import { LANGUAGE_OPTIONS } from "../constants";
import Image from "next/image";

const LanguageDropdown: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevState) => !prevState);
  };

  return (
    <div className="relative inline-block text-left">
      <button onClick={toggleDropdown} type="button" className="focus:outline-none">
      <Image 
        src="/language-svgrepo-com.svg"
        alt="United States"
        width={25}
        height={25}
      />
      </button>
      <div className={`origin-top-right absolute z-10 right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ${isDropdownOpen ? 'block' : 'hidden'}`}>
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
          {LANGUAGE_OPTIONS.map((option) => (
            <a
              key={option.langCode}
              href="#"
              className="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:text-black dark:hover:bg-gray-600 dark:hover:text-white"
              role="menuitem"
            >
              <div className="inline-flex items-center">
                <svg className={`h-3.5 w-3.5 rounded-full me-2 flag-icon-css ${option.flagIcon}`} aria-hidden="true" />
                {option.label}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
