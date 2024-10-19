import React, { useState, useEffect } from "react";

const NumberLoader = ({ targetValue, duration }) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    
    const increment = targetValue / (duration / 100); // Adjust increment per step
    const interval = setInterval(() => {
      setCurrentValue((prev) => {
        if (prev < targetValue) {
          return Math.min(prev + increment, targetValue); // Avoid exceeding target
        } else {
          clearInterval(interval);
          return targetValue;
        }
      });
    }, 100); // Update every 100ms for smooth transition

    return () => clearInterval(interval);
  }, [targetValue, duration]);

  return (
    <div className="text-4xl font-bold text-pink-500">
      {Math.round(currentValue)}+{/* Rounding to nearest integer */}
    </div>
  );
};

export default NumberLoader;
