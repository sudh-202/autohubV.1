import { notFound } from 'next/navigation';
import { carData } from '@/constants';  // Adjust the path as necessary
import CarDetailsSection from '@/components/CarDetailsSection';

interface CarDetailsPageProps {
  params: {
    make: string;
    model: string;
  };
}

const CarDetailsPage = ({ params }: CarDetailsPageProps) => {
  const car = carData.find(
    (car) => car.make.toLowerCase() === params.make.toLowerCase() && car.model.toLowerCase() === params.model.toLowerCase()
  );

  if (!car) {
    notFound();
  }

  return <CarDetailsSection car={car} />;
};

export default CarDetailsPage;
