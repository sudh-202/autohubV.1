'use client'
import { useRef, useState, useEffect } from 'react';
import { cars, CarProps } from '../constants';
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

    const filterCars = (cars: CarProps[], category: string) => {
        switch (category) {
            case 'Newly Launched Cars':
                return cars.filter(car => car.isNewlyLaunched);
            case 'Upcoming Cars':
                return cars.filter(car => car.isUpcoming);
            case 'Popular Cars':
                return cars.filter(car => car.isPopular);
            default:
                return [];
        }
    };

    return (
        <div className="relative">
            <div className="flex justify-between mb-4">
                <div className="flex">
                    {['Newly Launched Cars', 'Upcoming Cars', 'Popular Cars'].map(tab => (
                        <button
                            key={tab}
                            className={`px-4 py-2 mx-2 ${activeTab === tab ? 'text-yellow-500 border-b-2 border-yellow-500' : 'text-gray-500'}`}
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
            <div ref={carouselRef} className="flex px-10 py-6 scrollbar-hide w-full h-full gap-8 justify-center overflow-hidden" onScroll={updateArrowsState}>
                {filterCars(cars, activeTab).map((car, index) => (
                    <div key={index} ref={index === 0 ? cardRef : null} className="flex-shrink-0 w-1/4">
                        <CarCard car={car} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CarCarousel;
