import React from 'react';
import { CarProps } from '../constants';
import CompareCard from './CompareCards';

interface SimilarCarsSectionProps {
  cars: CarProps[];
}

const SimilarCarsSection: React.FC<SimilarCarsSectionProps> = ({ cars }) => {
  return (
    <div className="similar-cars-section">
      <div className="similar-cars-list">
        {cars.map((car, index) => (
          <CompareCard key={index} car={car} />
        ))}
      </div>
    </div>
  );
};

export default SimilarCarsSection;
