// components/FilterOnMobile.tsx

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Image from 'next/image';
import { CarProps } from '@/constants/index';
import Filter from './Filter';

type Props = {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setFilteredCars: Dispatch<SetStateAction<CarProps[] | null>>;
  cars: CarProps[];
};

const FilterOnMobile: React.FC<Props> = ({ setOpen, cars, setFilteredCars }) => {
  const [loading, setLoading] = useState(false); // State to manage loading state

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // State and functions to manage filters, similar to Filter.tsx
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [selectedPrice, setSelectedPrice] = useState(20);

  useEffect(() => {
    if (loading) {
      // Simulate loading delay
      const timeout = setTimeout(() => {
        applyFilters();
        setLoading(false);
      }, 300);

      return () => clearTimeout(timeout);
    } else {
      applyFilters();
    }
  }, [selectedTypes, selectedCapacities, selectedPrice]); // Dependencies for filtering logic

  const applyFilters = () => {
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
  };

  return (
    <div className='fixed inset-x-0 bottom-0 top-[174px] z-50  w-full overflow-y-scroll bg-[#666666]/25 px-2 py-[20px] dark:bg-[#1A202C]/60 lg:hidden'>
      <div className='grid h-full grid-cols-1 place-content-start'>
        <div className='relative grid gap-2 rounded-10 bg-white p-8 dark:bg-gray-850'>
          <section className='flex flex-col gap-[18px]'>
            {/* Filter section with inputs */}
            <section className='grid gap-14'>
              <section className='flex flex-col gap-7'>
                <h1 className='text-xs font-semibold uppercase leading-[18px] tracking-[0.2rem] text-blue-100 lg:block'>
                  Type
                </h1>
                {['Sedan', 'Truck', 'SUV', 'Sport', 'MPV', 'Coupe', 'Hatchback'].map(type => (
                  <input
                    key={type}
                    type='checkbox'
                    value={type}
                    onChange={e => {
                      const type = e.target.value;
                      setSelectedTypes(prevTypes =>
                        e.target.checked ? [...prevTypes, type] : prevTypes.filter(t => t !== type)
                      );
                    }}
                  />
                ))}
              </section>

              <section className='flex flex-col gap-7'>
                <h1 className='text-xs font-semibold uppercase leading-[18px] tracking-[0.2rem] text-blue-100 lg:block'>
                  Capacity
                </h1>
                {['2', '5', '4', '6', '7', '8 or more'].map(capacity => (
                  <input
                    key={capacity}
                    type='checkbox'
                    value={capacity}
                    onChange={e => {
                      const capacity = e.target.value;
                      setSelectedCapacities(prevCaps =>
                        e.target.checked ? [...prevCaps, capacity] : prevCaps.filter(c => c !== capacity)
                      );
                    }}
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
                    min='20'
                    max='100'
                    value={selectedPrice}
                    onChange={e => setSelectedPrice(Number(e.target.value))}
                    className='w-full lg:w-[90%]'
                  />
                  <p className='mt-3 text-[20px] font-semibold text-gray-700'>
                    Max.${selectedPrice}.00
                  </p>
                </div>
              </section>
            </section>

            {/* End of filter section */}
          </section>

          <button
            onClick={() => setOpen(prev => !prev)}
            className='absolute right-[18px] top-0 mt-4 p-2 text-blue-500'
          >
            <Image src={'/img/close.svg'} width={24} height={24} alt='Close' priority />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterOnMobile;
