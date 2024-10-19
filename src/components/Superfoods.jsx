import React from "react";
import SuperfoodsText from "./SuperfoodsText";
import SuperfoodCard from "./SuperfoodCard";
import { coffee, mocha, herbs, bg, bg2, bg3, bg4 } from "../assets/images";

const Superfoods = () => {
  return (
    <div
      className="py-16 px-8 relative w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bg2})` }}
    >
   
      <div className="absolute inset-0  opacity-10 "></div>


      <SuperfoodsText />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        <SuperfoodCard
          title="Matcha Green Tea"
          description="A potent green tea made from the entire green tea leaf for a plethora of antioxidant benefits."
          imagePath={mocha}
        />
        <SuperfoodCard
          title="Cacao Superfood Powder"
          description="Cacao is a powerhouse of anti-aging and antioxidant properties."
          imagePath={coffee}
        />
        <SuperfoodCard
          title="Horsetail a powerful herb"
          description="Has silica and antioxidant compounds to aid with the synthesis of collagen production."
          imagePath={herbs}
        />
      </div>
    </div>
  );
};

export default Superfoods;
