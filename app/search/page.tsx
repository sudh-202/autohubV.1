// Page.tsx
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import CarCardV2 from '@/components/CarCardV2';
import { CarProps, cars as sampleCars } from '@/constants/index';
import Loader from '@/components/Search/Loader';
import Empty from '@/components/Search/Empty';
import Filter from '@/components/Search/Filter';
import FilterOnMobile from '@/components/Search/FilterOnMobile';

type Props = {};

const Page = (props: Props) => {
    const [loading, setLoading] = useState(true);
    const [cars, setCars] = useState<CarProps[]>([]);
    const [filteredCars, setFilteredCars] = useState<CarProps[] | null>(null); // Updated state type
    const [searchResult, setSearchResult] = useState<CarProps[]>([]);
    const [carsToDisplay, setCarsToDisplay] = useState<CarProps[]>([]);
    const [visible, setVisible] = useState(6);
    const [initialLoad, setInitialLoad] = useState(true);
    const [open, setOpen] = useState(false); // State for controlling modal or filter visibility

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setCars(sampleCars); // Set sample cars for testing
            setCarsToDisplay(sampleCars); // Set cars to display
            setLoading(false);
            setInitialLoad(false);
        }, 1000);
    }, []);

    useEffect(() => {
        if (searchResult.length > 0) {
            setFilteredCars(searchResult); // Set filtered cars to search results
        } else {
            setFilteredCars(null); // Reset filtered cars if search results are empty
        }
    }, [searchResult]);

    const handleMore = () => {
        setVisible(prev => prev + 6);
    };

    return (
        <main className='bg-gradient-to-r from-white from-55% to-white-200 dark:bg-gradient-to-r dark:from-gray-900 dark:to-[#1E2430] dark:to-75%'>
            <div className='mx-auto flex flex-col bg-white-100 dark:bg-[#1E2430] lg:max-w-[1536px] lg:flex-row lg:gap-8'>
                <aside className='fixed z-20 flex w-full flex-col gap-14 bg-white px-6 pb-8 dark:bg-gray-900 lg:static lg:z-0 lg:max-w-[250px] lg:pl-8 lg:pr-5 lg:pt-10 xl:w-[360px] xl:max-w-[360px]'>
                    <section className='flex gap-4 lg:flex-col lg:gap-7'>
                        <h1 className='hidden text-xs font-semibold uppercase leading-[18px] text-blue-100 lg:block'>
                            Search
                        </h1>
                        <div className='flex w-full gap-4 overflow-hidden rounded-10 border-[1px] border-blue-50 pl-3 pr-5 dark:border-gray-800 dark:bg-gray-850 lg:max-w-[200px] xl:max-w-[283px]'>
                            <input
                                type='text'
                                placeholder='Search by brand or title'
                                className='w-full py-[12px] outline-none placeholder:text-sm placeholder:font-medium placeholder:text-gray-700 dark:bg-gray-850 dark:placeholder:text-blue-100'
                            />
                            <Image
                                src="/magnifying-glass.svg"
                                alt="magnifying glass"
                                width={40}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <div
                            onClick={() => {
                                setOpen(prev => !prev); // Toggle open state
                            }}
                            className='flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-10 border-[1px] border-blue-50 dark:border-gray-800 lg:hidden'
                        >
                            <Image
                                src={'/img/filter.svg'}
                                width={24}
                                height={24}
                                alt='Filter'
                                priority
                            />
                        </div>
                    </section>
                    <section className='hidden lg:grid lg:gap-14'>
                        {open && (
                            <FilterOnMobile
                                setOpen={setOpen}
                                setFilteredCars={setFilteredCars}
                                cars={cars!}
                            />
                        )}
                        <Filter
                            setFilteredCars={setFilteredCars}
                            cars={cars}
                            setLoading={setLoading}
                        />
                    </section>
                </aside>

                <section className='relative mt-20 flex w-full flex-1 flex-col place-items-start gap-10 p-6 md:gap-5 lg:mt-0 lg:gap-9 lg:p-0 lg:pb-12 lg:pr-8 lg:pt-8'>
                    <section className='mt-20 grid w-full shrink-0 grid-cols-1 gap-5 sm:mt-0 md:grid-cols-2 lg:grid-cols-2 lg:gap-8 xl:grid-cols-3'>
                        {loading ? (
                            <Loader />
                        ) : filteredCars !== null && filteredCars.length > 0 ? (
                            filteredCars
                                .slice(0, visible)
                                .map((car, i) => <CarCardV2 key={i} car={car} />)
                        ) : !initialLoad ? (
                            <Empty />
                        ) : null}
                    </section>

                    {filteredCars !== null && filteredCars.length > visible && (
                        <button
                            onClick={handleMore}
                            className={`w-fit place-self-center rounded-[4px] bg-blue-500 px-[10px] py-2 text-xs font-semibold text-white lg:rounded-10 lg:px-[51px] lg:py-[18px] lg:text-base lg:font-bold ${loading ? 'hidden' : ''}`}
                        >
                            Show more cars
                        </button>
                    )}

                    {filteredCars !== null && filteredCars.length <= visible && !loading && !initialLoad && (
                        <button
                            className="w-fit place-self-center rounded-[4px] bg-gray-300 px-[10px] py-2 text-xs font-semibold text-gray-600 lg:rounded-10 lg:px-[51px] lg:py-[18px] lg:text-base lg:font-bold"
                            disabled
                        >
                            No more cars
                        </button>
                    )}
                </section>
            </div>
        </main>
    );
};

export default Page;
