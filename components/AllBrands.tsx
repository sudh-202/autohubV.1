'use client'

import { useState } from 'react';
import Link from 'next/link';
import { brands } from '../constants';

const AllBrands: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const visibleBrands = showAll ? brands : brands.slice(0, 12); // Show only the first 12 brands initially

  return (
    <div className="p-4">
      <div className={`grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 transition-all duration-300`}>
        {visibleBrands.map((brand, index) => (
          <Link href={brand.url} key={index} className="flex flex-col items-center p-4 border rounded-md hover:shadow-md transition-shadow">
            <img src={brand.logo} alt={brand.name} className="h-12 mb-2" width={100} height={100} />
            <span>{brand.name}</span>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button onClick={toggleShowAll} className="px-4 py-3 text-white bg-[#2B59FF] rounded-3xl ">
          {showAll ? 'View Less Brands' : 'View More Brands'}
        </button>
      </div>
    </div>
  );
};

export default AllBrands;
