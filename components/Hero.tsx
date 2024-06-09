"use client";

import Image from "next/image";
import CustomButton from "./CustomButton";
import BannerSearchbar from "./BannerSearchbar";

const Hero = () => {
  
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 items-center justify-center pt-24 padding-x hidden md:block">
        <BannerSearchbar />
      </div>

      <div className="flex-1 pt-36 padding-x md:hidden">
        <h1 className="hero__title">
          Find, book, rent a car — quickly and easily!
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        {/* Calling the CustomButton component and passing some props... */}
        <CustomButton
          title="Explore Cars"
          containerStyle="bg-primary-blue text-white 
          rounded-full mt-10"
          handleClick={handleScroll}
          btnType="button" // Add the missing btnType property
        />
      </div>
      
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
