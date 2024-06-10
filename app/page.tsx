import { CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import CarCarousel from "@/components/CarCarousel";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import CarCard from '@/components/CarCard';

interface SearchParams {
  manufacturer?: string;
  year?: number;
  fuel?: string;
  limit?: number;
  model?: string;
}

export default async function Home({ searchParams }: { searchParams: SearchParams }) {

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

      {!isDataEmpty ? (
        <section>
          <div className="mt-12 padding-x padding-y max-width" id="discover">
            <main className=" gap-8 ">
              <h1 className="home__text-container text-4xl font-extrabold pl-8">Newly Launched Cars</h1>
              <CarCarousel />
            </main>
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold">
            Oops!!, No Results Found
          </h2>
          <p>{allCars?.message}</p>
        </div>
      )}



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
