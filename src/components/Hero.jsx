import React from "react";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";
import TrustedCompanies from "./TrustedCompanies";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-around px-8 py-16 pb-0 ">
      {/* Left Side: Text */}
      <div className="lg:w-1/2 pl-10">
        <HeroText />
        <TrustedCompanies />
      </div>

      {/* Right Side: Image */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 pl-10 right-10">
        <HeroImage />
      </div>
    </section>
  );
};

export default Hero;
