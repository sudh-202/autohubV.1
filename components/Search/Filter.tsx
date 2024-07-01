// Filter.tsx
'use client';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Input from './Input';
import { CarProps } from '@/constants/index';

type Props = {
    setFilteredCars: Dispatch<SetStateAction<CarProps[] | null>>;
    cars: CarProps[];
    setLoading?: Dispatch<SetStateAction<boolean>>;
};

export default function Filter({ setFilteredCars, cars, setLoading }: Props) {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
    const [selectedPrice, setSelectedPrice] = useState(20);

    const carTypes = [
        'Sedan',
        'Truck',
        'SUV',
        'Sport',
        'MPV',
        'Coupe',
        'Hatchback',
    ];

    const capacities = ['2','5', '4', '6','7', '8 or more'];

    function handleTypeChange(e: React.ChangeEvent<HTMLInputElement>) {
        const type = e.target.value;
        if (e.target.checked) {
            setSelectedTypes([...selectedTypes, type]);
        } else {
            setSelectedTypes([...selectedTypes.filter(nType => nType !== type)]);
        }
    }

    function handleCapacityChange(e: React.ChangeEvent<HTMLInputElement>) {
        const capacity = e.target.value;
        if (e.target.checked) {
            setSelectedCapacities([...selectedCapacities, capacity]);
        } else {
            setSelectedCapacities([...selectedCapacities.filter(cap => cap !== capacity)]);
        }
    }

    useEffect(() => {
        if (setLoading) {
            setLoading(true);
        }

        const newCars = cars.filter(car => {
            const carPrice = typeof car.price === 'string' ? parseInt(car.price.replace(',', ''), 10) : car.price;
            const carCapacity = car.capacity.toString(); // Convert capacity to string for comparison
            return (
                (selectedTypes.length === 0 || selectedTypes.includes(car.type)) &&
                (selectedCapacities.length === 0 || selectedCapacities.includes(carCapacity)) &&
                carPrice !== undefined && carPrice >= selectedPrice
            );
        });

        setFilteredCars(newCars.length > 0 ? newCars : null);

        setTimeout(() => {
            if (setLoading) {
                setLoading(false);
            }
        }, 300);
    }, [
        selectedPrice,
        cars,
        selectedCapacities,
        selectedTypes,
        setFilteredCars,
        setLoading,
    ]);

    return (
        <section className='grid gap-14'>
            <section className='flex flex-col gap-7'>
                <h1 className='text-xs font-semibold uppercase leading-[18px] tracking-[0.2rem] text-blue-100 lg:block'>
                    Type
                </h1>
                {carTypes.map(type => (
                    <Input key={type} filter={type} handleChange={handleTypeChange} />
                ))}
            </section>

            <section className='flex flex-col gap-7'>
                <h1 className='text-xs font-semibold uppercase leading-[18px] tracking-[0.2rem] text-blue-100 lg:block'>
                    Capacity
                </h1>
                {capacities.map(capacity => (
                    <Input
                        key={capacity}
                        filter={capacity}
                        handleChange={handleCapacityChange}
                        title='Person'
                    />
                ))}
            </section>
            <section className='flex flex-col gap-7'>
                <h1 className='text-xs font-semibold uppercase leading-[18px] tracking-[0.2rem] text-blue-100 lg:block'>
                    Price
                </h1>

                <div className=''>
                    <input
                        type='range'
                        name='volume'
                        min='20'
                        max='100'
                        value={selectedPrice}
                        onChange={element => {
                            element.preventDefault();
                            setSelectedPrice(Number(element.currentTarget.value));
                        }}
                        className='w-full lg:w-[90%]'
                    />
                    <p className='mt-3 text-[20px] font-semibold text-gray-700'>
                        Max.${selectedPrice}.00
                    </p>
                </div>
            </section>
        </section>
    );
}
