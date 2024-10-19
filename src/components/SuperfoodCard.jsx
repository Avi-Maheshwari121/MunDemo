import React from "react";

const SuperfoodCard = ({ title, description, imagePath }) => {
  return (
    <div className="bg-white shadow-md p-6 rounded-lg flex-row items-center justify-between transition duration-300 ease-in-out transform hover:shadow-lg hover:shadow-pink-300 hover:scale-105">

      
      <div className=" text-right ">
        <img src={imagePath} alt={`${title} Icon`} className="inline-block max-w-full h-auto w-1/2" />
      </div>

>
      <div className=" text-left w-17 pr-4">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>

      
    </div>
  );
};

export default SuperfoodCard;
