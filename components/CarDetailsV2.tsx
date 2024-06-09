import { CarProps } from "@/constants";


interface CarDetailsProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
  }
  
  const CarDetails: React.FC<CarDetailsProps> = ({ isOpen, closeModal, car }) => {
    if (!isOpen) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg w-3/4 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">{car.make} {car.model}</h2>
          <button onClick={closeModal} className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full">X</button>
          <p>City MPG: {car.city_mpg}</p>
          <p>Year: {car.year}</p>
          <p>Transmission: {car.transmission === "a" ? "Automatic" : "Manual"}</p>
          <p>Drive: {car.drive.toUpperCase()}</p>
        </div>
      </div>
    );
  };
  
  export default CarDetails;
  