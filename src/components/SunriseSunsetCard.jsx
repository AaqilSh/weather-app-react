import React from "react";

const SunriseSunsetCard = ({ sunrise, sunset }) => {
  return (
    <div className="w-60 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-gray-900 dark:text-gray-100 transition-all duration-500">
      <div className="text-xl font-semibold mb-4">🌞 Sunrise & Sunset</div>
      <div className="flex justify-between w-full text-center">
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-2">🌅</div>
          <p className="text-sm font-medium">Sunrise</p>
          <p className="text-lg">{sunrise}</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl mb-2">🌇</div>
          <p className="text-sm font-medium">Sunset</p>
          <p className="text-lg">{sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default SunriseSunsetCard;
