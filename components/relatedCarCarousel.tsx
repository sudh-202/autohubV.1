'use client'
import { useRef, useState, useEffect } from 'react';
import { carData, CarProps } from '../constants';
import CarCard from './CarCardV2';

interface CarCarouselProps {
  price: number;
  model: string;
  make: string;
}

const RelatedCarCarousel: React.FC<CarCarouselProps> = ({ price, model, make }) => {
  const [activeTab, setActiveTab] = useState('Latest');
  const carouselRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const isDragging = useRef(false);
  const cars = carData.filter(car => car.price <= price && car.model === model && car.make !== make);

  useEffect(() => {
    if (cardRef.current) {
      setCardWidth(cardRef.current.clientWidth);
    }
  }, []);

  useEffect(() => {
    updateArrowsState();
  }, [activeTab]);

  const updateArrowsState = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
      setTimeout(updateArrowsState, 300);
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
      setTimeout(updateArrowsState, 300);
    }
  };

  const filterCars = (cars: CarProps[], category: string) => {
    switch (category) {
      case 'Latest':
        return cars.filter(car => car.isNewlyLaunched);
      case 'Upcoming':
        return cars.filter(car => car.isUpcoming);
      case 'Popular':
        return cars.filter(car => car.isPopular);
      default:
        return [];
    }
  };

  const handleDragStart = (e: React.MouseEvent) => {
    isDragging.current = true;
    carouselRef.current!.style.scrollSnapType = 'none';
  };

  const handleDragEnd = (e: React.MouseEvent) => {
    isDragging.current = false;
    carouselRef.current!.style.scrollSnapType = '';
  };

  const handleDragMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !carouselRef.current) return;
    carouselRef.current.scrollLeft -= e.movementX;
  };

  return (
    <div className="relative">
      <div className="flex flex-end justify-end lg:mt-[-60px] lg:mb-5">
        <div className="flex space-x-2">
          <button
            onClick={scrollLeft}
            className={`p-2 rounded-full text-2xl sm:text-4xl ${isAtStart ? 'text-gray-400' : 'text-black'}`}
            aria-label="Scroll left"
            disabled={isAtStart}
          >
            {'<'}
          </button>
          <button
            onClick={scrollRight}
            className={`p-2 rounded-full text-2xl sm:text-4xl lg:pr-7 ${isAtEnd ? 'text-gray-400' : 'text-black'}`}
            aria-label="Scroll right"
            disabled={isAtEnd}
          >
            {'>'}
          </button>
        </div>
      </div>
      <div
        ref={carouselRef}
        className="flex lg:px-4 py-4 md:px-10 md:py-6 scrollbar-hide w-full h-full gap-4 md:gap-8 justify-start overflow-x-auto"
        onScroll={updateArrowsState}
        onMouseDown={handleDragStart}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDragMove}
      >
        {filterCars(cars, activeTab).map((car, index) => (
          <div key={index} ref={index === 0 ? cardRef : null} className="flex-shrink-0 w-[90vw] sm:w-[70vw] md:w-[45vw] lg:w-[19vw]">
            <CarCard car={car} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedCarCarousel;
