import React from 'react';
import { CarProps } from '../constants';
import CompareCard from './CompareCards';
import SimilarCarsSection from './SimilarCarsSection';

interface PrimaryCardProps {
  car1: CarProps;
  car2: CarProps;
  allCars: CarProps[]; // Ensure allCars is properly provided as a prop
}

const PrimaryCard: React.FC<PrimaryCardProps> = ({ car1, car2, allCars }) => {
  // Function to find similar cars to a given car
  const findSimilarCars = (car: CarProps): CarProps[] => {
    if (!allCars) return []; // Handle case where allCars is undefined or null

    const similarCars = allCars.filter(otherCar => otherCar !== car && otherCar.make === car.make && otherCar.model === car.model);
    return similarCars.slice(0, 2); // Return top 2 similar cars
  };

  // Find similar cars for both car1 and car2
  const similarCars1 = findSimilarCars(car1);
  const similarCars2 = findSimilarCars(car2);

  return (
    <div>
      <div className="relative bg-[#F5F8FF] shadow rounded-3xl flex items-center justify-center h-full">
        <CompareCard car={car1} />
        <span className="absolute left-1/2 transform -translate-x-1/2 bg-gray-500 text-white text-lg font-bold rounded-full px-3 py-1 z-10">
          VS
        </span>
        <CompareCard car={car2} />
      </div>

      {/* <SimilarCarsSection cars={similarCars1} />
      <SimilarCarsSection cars={similarCars2} /> */}
    </div>
  );
};

export default PrimaryCard;
