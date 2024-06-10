'use client'
import { useRef, useState, useEffect } from 'react';
import { newlyLaunchedCars, upcomingCars, popularCars } from '../constants';
import CarCard from './CarCardV2';

const CarCarousel: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Newly Launched Cars');
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

    const getCars = () => {
        switch (activeTab) {
            case 'Newly Launched Cars':
                return newlyLaunchedCars;
            case 'Upcoming Cars':
                return upcomingCars;
            case 'Popular Cars':
                return popularCars;
            default:
                return [];
        }
    };

    return (
        <div className="relative">
            <div className="flex justify-between ">
                <div className="flex">
                    {['Newly Launched Cars', 'Upcoming Cars', 'Popular Cars'].map(tab => (
                        <button
                            key={tab}
                            className={`px-4 py-2 mx-2 ${activeTab === tab ? 'text-white bg-blue-600 border-b-2 rounded-lg' : 'text-gray-500'}`}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
                <div className="flex space-x-2">
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
            <div ref={carouselRef} className="flex px-10 py-8 scrollbar-hide  gap-8 justify-around overflow-hidden " onScroll={updateArrowsState}>
                {getCars().map((car, index) => (
                    <div key={index} ref={index === 0 ? cardRef : null} className="flex-shrink-0 w-1/4">
                        <CarCard car={car} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarCarousel;
