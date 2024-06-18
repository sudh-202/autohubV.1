"use client";

import { useState } from "react";
import { CarProps } from "../constants";
import Image from "next/image";

interface CarCardProps {
  car: CarProps;
}

const CompareCard: React.FC<CarCardProps> = ({ car }) => {
  const { city_mpg, make, model, year, transmission, drive, image, price } = car;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#F5F8FF] p-4 shadow rounded-3xl w-full sm:w-60 h-full flex flex-col justify-between">
      <div className="mt-4">
        <h2 className="text-[18px] sm:text-[22px] leading-[22px] sm:leading-[26px] font-bold capitalize">
          {make} {model}
        </h2>
        <p className="flex mt-6 text-[24px] sm:text-[32px] font-extrabold">
          <span className="self-start text-[12px] sm:text-[14px] font-semibold">$</span>
          {price}
        </p>
        <div className="relative w-full h-32 sm:h-40 my-3">
          <Image src="/hero.png"alt={`${make} ${model}`} layout="fill" priority className="object-contain" />
        </div>
        
        {/* <div className="relative flex w-full mt-2">
          <div className="flex w-full justify-between text-gray">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
              <p className="text-[12px] sm:text-[14px]">{transmission === "a" ? "Automatic" : "Manual"}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/tire.svg" width={20} height={20} alt="tire" />
              <p className="text-[12px] sm:text-[14px]">{drive.toUpperCase()}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/gas.svg" width={20} height={20} alt="gas" />
              <p className="text-[12px] sm:text-[14px]">{city_mpg} MPG</p>
            </div>
          </div>
        </div> */}

        
      </div>
    </div>
  );
};

export default CompareCard;
