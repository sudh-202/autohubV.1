import { CarProps } from '../constants';
import CompareCard from './CompareCards';

interface PrimaryCardProps {
  car1: CarProps;
  car2: CarProps;
}

const PrimaryCard: React.FC<PrimaryCardProps> = ({ car1, car2 }) => (
  <div className="bg-white p-4 shadow rounded-3xl flex items-center space-x-4">
    <CompareCard car={car1} />
    <span className="text-2xl font-bold text-gray-500">VS</span>
    <CompareCard car={car2} />
  </div>
);

export default PrimaryCard;
