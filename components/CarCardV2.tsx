"use client";

import { useState } from "react";
import Image from "next/image";
import { CarProps } from "@/constants";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetailsV2";

interface CarCardProps {
    car: CarProps;
}

const calculateCarRent = (city_mpg: number, year: number) => {
    const basePrice = 50;
    const ageFactor = (new Date().getFullYear() - year) * 2;
    const mpgFactor = city_mpg / 2;
    return basePrice + ageFactor + mpgFactor;
};

const CarCardV2 = ({ car }: CarCardProps) => {
    const { city_mpg, make, model, year, transmission, drive, image } = car;

    const [isOpen, setIsOpen] = useState(false);

    const carRent = calculateCarRent(city_mpg, year);

    return (
        <div className=" flex flex-col bg-[#F5F8FF] justify-between h-full p-6 rounded-3xl">
            <div>
                <div className="car-card__content">
                    <h2 className="car-card__content-title">
                        {make} {model}
                    </h2>
                </div>

                <p className="flex mt-6 text-[32px] font-extrabold">
                    <span className="self-start text-[14px] font-semibold">
                        $
                    </span>
                    {car.price}
                </p>

                <div className="relative w-full h-40 my-3">
                    <Image src="/hero.png" alt={`${make} ${model}`} layout="fill" priority className="object-contain" />
                </div>
            </div>

            <div className="relative flex w-full mt-2">
                <div className="flex w-full justify-between text-gray">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/steering-wheel.svg" width={20} height={20} alt="steering wheel" />
                        <p className="text-[14px]">{transmission === "a" ? "Automatic" : "Manual"}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/tire.svg" width={20} height={20} alt="tire" />
                        <p className="text-[14px]">{drive.toUpperCase()}</p>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-2">
                        <Image src="/gas.svg" width={20} height={20} alt="gas" />
                        <p className="text-[14px]">{city_mpg} MPG</p>
                    </div>
                </div>

                <div className="car-card__btn-container mt-4">
                    <CustomButton
                        title="View More"
                        containerStyle="w-full py-[16px] rounded-full bg-primary-blue"
                        textStyles="text-white text-[14px] leading-[17px] font-bold"
                        rightIcon="/right-arrow.svg"
                        handleClick={() => setIsOpen(true)}
                        btnType="button"
                    />
                </div>
            </div>

            <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
        </div>
    );
};

export default CarCardV2;
