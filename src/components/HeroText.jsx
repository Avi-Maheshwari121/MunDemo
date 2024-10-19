import React from "react";

const HeroText = () => {
  return (
    <div>
      <br></br>
      
      <h1 className="  text-4xl lg:text-5xl font-bold leading-tight text-gray-800  ">
        Explore the new beauty trends for this season
      </h1>
      <br></br>
      <p className="text-lg text-gray-500 mt-4">
        We believe that beauty and health work best when they're supported by
        science.
      </p>
      <button className="mt-8 bg-[#E79699] text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition">
        GET STARTED
      </button>
    </div>
  );
};

export default HeroText;
