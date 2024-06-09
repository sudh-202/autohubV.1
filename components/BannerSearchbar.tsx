'use client';

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { budgets, vehicleTypes, cities } from "../constants";
import Link from "next/link";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`z-10 ${otherClasses}`}>
    Submit
  </button>
);

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [isNewCar, setIsNewCar] = useState(true);
  const [searchBy, setSearchBy] = useState("budget");
  const [budget, setBudget] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [city, setCity] = useState("");

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchBy === "budget" && budget.trim() === "") {
      return alert("Please select a budget");
    }

    // if (manufacturer.trim() === "" && model.trim() === "") {
    //   return alert("Please provide some input");
    // }

    updateSearchParam(model.toLowerCase(), manufacturer.toLowerCase());
  };

  const updateSearchParam = (model: string, manufacturer: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }

    if (manufacturer) {
      searchParams.set("manufacturer", manufacturer);
    } else {
      searchParams.delete("manufacturer");
    }

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
    router.push(newPathname);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-[420px] h-fit">
      <h2 className="text-4xl font-bold mb-8">Find your dream car</h2>
      <div className="flex mb-8 gap-4 ">
        <button
          className={`flex-1 py-3 rounded-md ${isNewCar ? "bg-primary-blue text-white" : "bg-gray-200 text-black"}`}
          onClick={() => { setIsNewCar(true); setVehicleType(""); setCity(""); }}
        >
          New Car
        </button>
        <button
          className={`flex-1 py-3 rounded-md ${!isNewCar ? "bg-primary-blue text-white" : "bg-gray-200 text-black"}`}
          onClick={() => { setIsNewCar(false); setVehicleType(""); setCity(""); }}
        >
          Used Car
        </button>
      </div>
      <div className="mb-8">
        <label className="mr-8">
          <input
            type="radio"
            name="searchBy"
            value="budget"
            checked={searchBy === "budget"}
            onChange={() => setSearchBy("budget")}
            className="mr-1"
          />
          By Budget
        </label>
        <label>
          <input
            type="radio"
            name="searchBy"
            value="brand"
            checked={searchBy === "brand"}
            onChange={() => setSearchBy("brand")}
            className="mr-1"
          />
          By Brand
        </label>
      </div>
      <form className="flex flex-col gap-4" onSubmit={handleSearch}>
        {searchBy === "budget" && (
          <div>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select Budget</option>
              {budgets.map((budget, index) => (
                <option key={index} value={budget}>{budget}</option>
              ))}
            </select>
          </div>
        )}
        <div>
          {isNewCar ? (
            <select
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">All Vehicle Types</option>
              {vehicleTypes.map((type, index) => (
                <option key={index} value={type}>{type}</option>
              ))}
            </select>
          ) : (
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Select City</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
          )}
        </div>
        {searchBy === "brand" && (
          <>
            <div className="relative">
              <Image
                src="/model-icon.png"
                width={20}
                height={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                alt="car model"
              />
              <input
                type="text"
                name="manufacturer"
                value={manufacturer}
                onChange={(e) => setManufacturer(e.target.value)}
                placeholder="Manufacturer"
                className="w-full p-2 pl-10 border rounded"
              />
            </div>
            <div className="relative">
              <Image
                src="/model-icon.png"
                width={20}
                height={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2"
                alt="car model"
              />
              <input
                type="text"
                name="model"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Model"
                className="w-full p-2 pl-10 border rounded"
              />
            </div>
          </>
        )}
        <SearchButton otherClasses="bg-primary-blue text-white py-2 rounded" />
      </form>
      <div className="text-right mt-2">
        <Link href="/" className="text-primary-blue">Advanced Search</Link>
      </div>
    </div>
  );
};

export default SearchBar;
