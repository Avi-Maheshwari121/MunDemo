// import model from "/images/model.png";
import React from "react";
import { modelnew } from "../assets/images";

const HeroImage = () => {
  return (
    <div>
      {/* Placeholder for the image */}
      <img
        src={modelnew}
        alt="Model showcasing beauty trends"
        className="w-full h-auto object-cover transition duration-300 ease-in-out transform  hover:scale-105"
      />
    </div>
  );
};

export default HeroImage;
