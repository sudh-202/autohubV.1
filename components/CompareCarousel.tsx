"use client";

import { useState } from "react";
import { comparisons } from "../constants";
import PrimaryCard from "./CarComparison";

const CarComparisonCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.ceil(comparisons.length / 2) - 1;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < maxIndex ? prevIndex + 1 : prevIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-end items-center mb-4 px-6">
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className={`p-2 rounded-full text-4xl ${currentIndex === 0 ? 'text-gray-400' : ''}`}
            disabled={currentIndex === 0}
          >
            {'<'}
          </button>
          <button
            onClick={handleNext}
            className={`p-2 rounded-full text-4xl ${currentIndex === maxIndex ? 'text-gray-400' : ''}`}
            disabled={currentIndex === maxIndex}
          >
            {'>'}
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }} // Adjusted transform calculation
        >
          {comparisons.map((comparison, index) => (
            <div key={index} className="min-w-[33.33%] flex-shrink-0 p-2 flex justify-around space-x-4"> {/* Adjusted width */}
              <PrimaryCard car1={comparison.car1} car2={comparison.car2} allCars={[]} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

};

export default CarComparisonCarousel;
