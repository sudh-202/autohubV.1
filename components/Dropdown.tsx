// components/Dropdown.tsx
import React, { useState } from 'react';
import Link from 'next/link';

interface DropdownProps {
  title: string;
  items: { label: string; href: string }[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
      >
        {title}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md py-1 z-20">
          {items.map((item, index) => (
            <Link key={index} href={item.href}>
              <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100">{item.label}</a>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
