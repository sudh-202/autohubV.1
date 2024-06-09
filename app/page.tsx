import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import CarCarousel from "@/components/CarCarousel";
import Features from "@/components/Features";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";


import Image from "next/image";

export default async function Home({ searchParams }) {

  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || "",
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || "",
    limit: searchParams.limit || 10,
    model: searchParams.model || "",
  });
  console.log(allCars);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="flex justify-center flex-col p-12">
        <h1 className="text-3xl font-bold text-black">Newly Launched Cars</h1>

        <main className=" p-[46px]">
          <CarCarousel />
        </main>
      </div>
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars?.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">
              Oops!!, No Results Found
            </h2>
            <p>{allCars?.message}</p>
          </div>
        )}


      </div>
    </main>
  );
}
