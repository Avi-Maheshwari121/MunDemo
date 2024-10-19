import React from "react";
import SuperfoodsText from "./SuperfoodsText";
import SuperfoodCard from "./SuperfoodCard";
import { coffee, mocha, herbs, bg } from "../assets/images";

const Demo = () => {
  //     <div class="bg-[url('/path/to/your/image.jpg')] bg-cover bg-center h-screen">
  //   <!-- Your content goes here -->
  // </div>

  return (
    <div
      class="bg-cover bg-center h-auto py-16 px-8"
      style="background-image: url('../assets/images/bg.png');"
    >
      <h2 class="text-4xl font-bold mb-4">
        We added superfoods to boost benefits
      </h2>
      <p class="text-lg mb-8">
        We've added superfoods to boost benefits in your overall health, mental
        well-being, skin, and hair. Plus, they taste naturally delicious.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="bg-white rounded-lg p-6 shadow-md">
          <h3 class="text-xl font-bold">Matcha Green Tea</h3>
          <p class="text-sm mt-2">
            A potent green tea made from the entire green tea leaf for a
            plethora of antioxidant benefits.
          </p>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-md">
          <h3 class="text-xl font-bold">Cacao Superfood Powder</h3>
          <p class="text-sm mt-2">
            Cacao is a powerhouse of anti-aging and antioxidant properties.
          </p>
        </div>
        <div class="bg-white rounded-lg p-6 shadow-md">
          <h3 class="text-xl font-bold">Horsetail a powerful herb</h3>
          <p class="text-sm mt-2">
            Has silica and antioxidant compounds to aid with the synthesis of
            collagen production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Demo;
