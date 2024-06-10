'use client'
import { useRef, useState, useEffect } from 'react';
import { newlyLaunchedCars } from '../constants';
import CarCard from './CarCardV2';

const CarCarousel: React.FC = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        if (cardRef.current) {
            setCardWidth(cardRef.current.clientWidth);
        }
    }, []);

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
        }
    };

    return (
        <div className="relative">
            <div ref={carouselRef} className="flex p-20 scrollbar-hide w-full h-full gap-8 justify-center overflow-hidden ">
                {newlyLaunchedCars.map((car, index) => (
                    <div key={index} ref={cardRef} className="flex-shrink-0 w-1/4 ">
                        <CarCard car={car} />
                    </div>
                ))}
            </div>
            <div className="absolute top-2 right-10 flex space-x-2">
                <button
                    onClick={scrollLeft}
                    className="p-2 rounded-full text-black text-4xl"
                    aria-label="Scroll left"
                >
                    {'<'}
                </button>
                <button
                    onClick={scrollRight}
                    className="p-2 rounded-full text-black text-4xl"
                    aria-label="Scroll right"
                >
                    {'>'}
                </button>
            </div>
        </div>
    );
};

export default CarCarousel;
