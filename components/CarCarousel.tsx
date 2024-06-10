'use client'
import { useRef, useState, useEffect } from 'react';
import { newlyLaunchedCars } from '../constants';
import CarCard from './CarCardV2';

const CarCarousel: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(0);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    useEffect(() => {
        if (cardRef.current) {
            setCardWidth(cardRef.current.clientWidth);
        }
    }, []);

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
            setTimeout(updateArrowsState, 300); // Update arrow state after scroll animation
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
            setTimeout(updateArrowsState, 300); // Update arrow state after scroll animation
        }
    };

    return (
        <div className="relative">
            <div ref={carouselRef} className="flex p-20 scrollbar-hide w-full h-full gap-8 justify-center overflow-hidden " onScroll={updateArrowsState}>
                {newlyLaunchedCars.map((car, index) => (
                    <div key={index} ref={cardRef} className="flex-shrink-0 w-1/4 ">
                        <CarCard car={car} />
                    </div>
                ))}
            </div>
            <div className="absolute top-0 right-10 flex space-x-2 ">
                <button
                    onClick={scrollLeft}
                    className={`p-2 rounded-full text-4xl ${isAtStart ? 'text-gray-400' : 'text-black'}`}
                    aria-label="Scroll left"
                    disabled={isAtStart}
                >
                    {'<'}
                </button>
                <button
                    onClick={scrollRight}
                    className={`p-2 rounded-full text-4xl ${isAtEnd ? 'text-gray-400' : 'text-black'}`}
                    aria-label="Scroll right"
                    disabled={isAtEnd}
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default CarCarousel;
