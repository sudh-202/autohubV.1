'use client'
import { useState } from 'react';
import { comparisons } from '../constants';
import PrimaryCard from './CarComparison';

const Carousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.ceil(comparisons.length / 2) - 1;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, maxIndex));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <div className="relative w-full">
      <div className="flex flex-end justify-end mb-4 px-6">
        <div className="flex space-x-2">
          <button
            onClick={handlePrev}
            className={`p-2 rounded-full text-2xl sm:text-4xl ${currentIndex === 0 ? 'text-gray-400' : ''}`}
            disabled={currentIndex === 0}
          >
            {'<'}
          </button>
          <button
            onClick={handleNext}
            className={`p-2 rounded-full text-2xl sm:text-4xl ${currentIndex === maxIndex ? 'text-gray-400' : ''}`}
            disabled={currentIndex === maxIndex}
          >
            {'>'}
          </button>
        </div>
      </div>
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {comparisons.map((comparison, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-1/2 flex-shrink-0 p-2 flex justify-around space-x-4"
            >
              <PrimaryCard car1={comparison.car1} car2={comparison.car2} />
              {index + 1 < comparisons.length && (
                <PrimaryCard car1={comparisons[index + 1].car1} car2={comparisons[index + 1].car2} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousal;
