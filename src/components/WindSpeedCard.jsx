import React from "react";

const WindSpeedCard = ({ windSpeed }) => {
  return (
    <div className=" bg-blue-400 dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-white dark:text-gray-100 transition-all duration-500 w-96 max-w-sm">
      <div className="text-4xl mb-2">🌬️</div>
      <h2 className="text-xl font-semibold mb-2">Wind Speed</h2>
      <p className="text-3xl font-semibold mt-2">{windSpeed} km/h</p>
    </div>
  );
};

export default WindSpeedCard;
