import { CarProps } from '../constants';
import Image from 'next/image';

interface CarCardProps {
  car: CarProps;
}

const CompareCard: React.FC<CarCardProps> = ({ car }) => {
  const { make, model, price, image } = car;

  return (
    <div className="bg-[#F5F8FF] p-3  rounded-3xl w-48 h-full flex flex-col justify-between">
      <div className="mt-2">
        <h2 className="text-[18px] leading-[22px] font-bold capitalize">{make} {model}</h2>
        {price && (
          <p className="flex mt-4 text-[24px] font-extrabold">
            <span className="self-start text-[12px] font-semibold">₹</span>
            {price.toLocaleString()}
          </p>
        )}
        <div className="relative w-full h-32 my-2">
          <Image src="/hero.png" alt={`${make} ${model}`} layout="fill" objectFit="contain" />
        </div>
      </div>
    </div>
  );
};

export default CompareCard;
