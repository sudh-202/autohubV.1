import Image from 'next/image';
import { thumbnailImages, CarProps } from '../constants/index';

interface CarDetailsProps {
  car: {
    make: string;
    model: string;
    year: number;
    transmission: string;
    drive: string;
    city_mpg: number;
    price: number;
    image: string;
    isNewlyLaunched: boolean;
    isUpcoming: boolean;
    isPopular: boolean;
    details: {
      regYear: string;
      regNumber: string;
      engineCapacity: string;
      insurance: string;
      spareKey: string;
      ownership: string;
      fuelType: string;
    };
  };
}

const CarDetailsSection: React.FC<CarDetailsProps> = ({ car }) => {
  return (
    <div className="container mx-auto p-4 mt-10">
      <div className="flex flex-col md:flex-row gap-4 mt-10 mb-20">
        {/* Car Image Section */}
        <div className="w-full md:w-2/3 ">
          <div className="relative w-full h-96 rounded-md shadow">
            <Image src="/hero.png" alt={`${car.make} ${car.model}`} layout="fill" className="object-contain rounded-md" />
          </div>
          <div className="flex space-x-4 mt-4 rounded-md shadow w-max gap-5 p-3">
            {thumbnailImages.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                width={140}
                height={140}
                className="object-contain rounded-md"
              />
            ))}
          </div>
        </div>
        {/* Car Information Section */}
        <div className="w-full md:w-1/3 bg-white p-8 rounded-md shadow flex flex-col justify-center ">
          <h1 className="lg:text-5xl font-bold mb-5 ">{car.make} {car.model}</h1>
          <p className="text-3xl font-semibold text-[#2b59ff] mb-5">₹ {car.price} Lakh</p>
          <ul className="space-y-6 text-gray-700 ">
            <li className='lg:text-2xl'><strong>Year:</strong> {car.year}</li>
            <li className='lg:text-2xl'><strong>Transmission:</strong> {car.transmission === 'a' ? 'Automatic' : 'Manual'}</li>
            <li className='lg:text-2xl'><strong>Drive:</strong> {car.drive.toUpperCase()}</li>
            <li className='lg:text-2xl'><strong>MPG:</strong> {car.city_mpg} MPG</li>
          </ul>
          <button className="mt-10 w-full py-2 bg-[#2b59ff] text-white rounded-md text-2xl">Book Free Test Drive</button>
        </div>
      </div>
      
        {/* Car Details Section */}
      <div className="bg-white p-4 rounded-md shadow mt-6">
        <h2 className="text-4xl font-bold mb-4">Know your car</h2>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 p-2">
            <h3 className="font-semibold">Regularly Serviced</h3>
            <p>Serviced annually at an authorised service centre</p>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <h3 className="font-semibold">Original paint</h3>
            <p>Assurance of zero repainted parts</p>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <h3 className="font-semibold">Standard safety features</h3>
            <p>Equipped with 2 airbags and an Antilock Braking System (ABS)</p>
          </div>
        </div>
        <div className="flex flex-wrap mt-4">
          <div className="w-full md:w-1/2 p-2">
            <ul>
              <li className='lg:text-xl'><strong>Reg Year:</strong> {car.details.regYear}</li>
              <li className='lg:text-xl'><strong>Engine Capacity:</strong> {car.details.engineCapacity}</li>
              <li className='lg:text-xl'><strong>Transmission:</strong> {car.transmission === 'a' ? 'Automatic' : 'Manual'}</li>
              <li className='lg:text-xl'><strong>Fuel Type:</strong> {car.details.fuelType}</li>
            </ul>
          </div>
          <div className="w-full md:w-1/2 p-2">
            <ul>
              <li className='lg:text-xl'><strong>Make Year:</strong> {car.year}</li>
              <li className='lg:text-xl'><strong>Reg Number:</strong> {car.details.regNumber}</li>
              <li className='lg:text-xl'><strong>Insurance:</strong> {car.details.insurance}</li>
              <li className='lg:text-xl'><strong>Spare key:</strong> {car.details.spareKey}</li>
              <li className='lg:text-xl'><strong>Ownership:</strong> {car.details.ownership}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailsSection;
