import { CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import TabCarCarousel from "@/components/TabCarCarousel";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import CarCard from '@/components/CarCard';
import CarCarousel from "@/components/CarCarousel";
import AllBrands from "@/components/AllBrands";
import CompareCarousel from "@/components/CompareCarousel";

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

      {/* Car Catalogue*/}

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

        {/* Featured Cars */}

        {!isDataEmpty ? (
          <section className="my-20">
            <div className="mt-12  max-width" id="discover">
              <main className=" gap-8 ">
                <h1 className="home__text-container text-4xl font-extrabold  lg:pl-4">Featured Cars</h1>
                <main className="pt-8">
                  <TabCarCarousel />
                </main>
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

        {/* New Cars */}

        {!isDataEmpty ? (
          <section className="my-20">
            <div className="mt-12  max-width" id="discover">
              <main className=" gap-8 ">
                <h1 className="home__text-container text-4xl font-extrabold  lg:pl-6">Recently added cars</h1>
                <main className="lg:mt-[-60px] mt-[-40px]">
                  <CarCarousel />
                </main>
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

        {/* All Brands */}
        <section className="my-20">
            <div className="mt-12  max-width" id="discover">
              <main className=" gap-8 ">
                <h1 className="home__text-container lg:text-4xl font-extrabold text-4xl lg:pb-8 pb-6 pl-5">All Brands
                </h1>
                <main className="lg:mt-[-10px] mt-[-20px]">
                  <AllBrands />
                </main>
              </main>
            </div>
          </section>

          {/* Compare Section */}

          <section className="my-20">
            <div className="mt-12  max-width" id="discover">
              <main className=" gap-8 ">
                <h1 className="home__text-container lg:text-4xl font-extrabold text-4xl lg:pb-8 pb-6 pl-9">Compare Cars
                </h1>
                <main className="lg:mt-[-60px] mt-[-40px]">
                  <CompareCarousel />
                </main>
              </main>
            </div>
          </section>


      </div>
    </main>
  );
}
