'use client'

import { useState, useEffect } from 'react';
import { menuItems, menuItemsHindi } from '../constants';
import { MenuIcon, UserIcon, XIcon } from '@heroicons/react/outline';
import { HeartIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
import NavSearchBar from './NavSearchBar';
import Language from './Language';

// interface MenuItem {
//   title: string;
//   path: string;
//   subMenu: { title: string; path: string }[];
// }





const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const [sidebarHeight, setSidebarHeight] = useState(0);

  const handleMouseEnter = (index: number) => {
    setActiveMenu(index);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  useEffect(() => {
    const updateViewportHeight = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        setSidebarHeight(navbar.clientHeight);
      }
    };

    window.addEventListener('resize', updateViewportHeight);
    updateViewportHeight();

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, [isOpen]);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="bg-white shadow-md p-6 justify-center items-center hidden md:flex ">
        <div className="container flex justify-center  items-center gap-5 xl:gap-14 ">

          {/* Logo */}
          <div>
            <Link href="/" className="flex justify-center items-center">
              <Image
                src="/logo.svg"
                alt="Car Hub Logo"
                width={118}
                height={18}
                className="object-contain"
              />
            </Link>
          </div>

          {/* Menu */}
          <div className="flex space-x-4 items-center">
            <div className="flex flex-row gap-4 lg:gap-10">
              {menuItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={item.path} className={`text-md font-semibold hover:text-gray-600 ${activeMenu === index ? 'text-gray-600' : ''
                    }`}
                    aria-haspopup="true"
                    aria-expanded={activeMenu === index ? 'true' : 'false'}>

                    {item.title}
                  </Link>
                  {activeMenu === index && (
                    <ul className="absolute bg-white shadow-lg w-48 h-auto  z-10 rounded-md">
                      {item.subMenu.map((subItem, subIndex) => (
                        <li key={subIndex} className='p-2 '>
                          <Link href={subItem.path} className="text-gray-700 hover:text-gray-900 py-2">
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

           
          </div>

           {/* Search Bar */}
           <div className="hidden lg:block ">
            <NavSearchBar />
          </div>

            {/* Icon Language */}
            <div className="flex space-x-10 items-center">
              <Language />
              {/* Heart Icon */}
              <button className="hover:text-gray-600">
                <HeartIcon className="h-6 w-6" />
              </button>
              <button className="hover:text-gray-600 flex flex-row">
                {' '}
                <UserIcon className="h-6 w-6" /> Login / Register
              </button>
            </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="bg-white shadow-md p-6 flex items-center md:hidden navbar">
        <div className="container flex justify-between items-center gap-4 ">
          {/* Logo */}
          <div>
            <Link href="/" className="flex justify-center items-center">
              <Image
                src="/logo.svg"
                alt="Car Hub Logo"
                width={118}
                height={18}
                className="object-contain"
              />
            </Link>
          </div>
          {/* Sidebar Toggle Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
          {isOpen && (
            <div className="absolute top-0 left-0 h-screen w-64 bg-gray-200 z-50 overflow-y-auto">
              {/* Logo in Mobile */}
              <div className="text-center py-10 ">
                <Link href="/" className="flex justify-center items-center">
                  <Image
                    src="/logo.svg"
                    alt="Car Hub Logo"
                    width={150}
                    height={25}
                    className="object-contain"
                  />
                </Link>
              </div>
              <ul className="flex flex-col p-4">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link href={item.path} className="text-gray-700 hover:text-gray-900 py-2 text-xl">
                      {item.title}
                    </Link>
                    {/* Dropdown items */}
                    {activeMenu === index && (
                      <ul>
                        {item.subMenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <Link href={`/${subItem.path}`} className="text-gray-700 hover:text-gray-900 py-2">
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
              {/* Icons in Mobile */}
              <div className="flex justify-start py-4 space-x-4 pl-5">
                <Language />
                <HeartIcon className="h-6 w-6 hover:text-gray-600" />
                <UserIcon className="h-6 w-6 hover:text-gray-600" />
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;

