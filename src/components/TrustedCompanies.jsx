import React from "react";
import { cetaphil, dove, nivea } from "../assets/images";
import NumberLoader from "./NumberLoader";

const TrustedCompanies = () => {
  return (
    <div className="mt-12">
      <p className="text-sm text-gray-400" flex>
        Trusted by <NumberLoader targetValue={500} duration={3000} /> companies
        worldwide
      </p>
      <div className="flex space-x-8 mt-4">
  
        <img
          src={dove}
          alt="Dove"
          className="w-[150px] h-[67px] object-contain transition duration-300 ease-in-out transform  hover:scale-105"
        />
        <img
          src={cetaphil}
          alt="Chick-fil-A"
          className="w-[150px] h-[67px] object-contain transition duration-300 ease-in-out transform  hover:scale-105"
        />
        <img
          src={nivea}
          alt="Nivea"
          className="w-[150px] h-[67px] object-contain transition duration-300 ease-in-out transform  hover:scale-105"
        />
      </div>
    </div>
  );
};

export default TrustedCompanies;
