'use client'
import { useRef } from 'react';
import { newlyLaunchedCars } from '../constants';
import CarCard from './CarCardV2';

const CarCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -carouselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: carouselRef.current.clientWidth, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative">
      <div ref={carouselRef} className="flex p-20 scrollbar-hide w-full h-full gap-8 justify-center overflow-hidden ">
        {newlyLaunchedCars.map((car, index) => (
          <div key={index} className="flex-shrink-0 w-1/4 ">
            <CarCard car={car} />
          </div>
        ))}
      </div>
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full text-white left-2"
        aria-label="Scroll left"
      >
        ←
      </button>
      <button
        onClick={scrollRight}
        className="absolute top-1/2 transform -translate-y-1/2 p-2 bg-gray-700 rounded-full text-white right-2"
        aria-label="Scroll right"
      >
        →
      </button>
    </div>
  );
};

export default CarCarousel;
