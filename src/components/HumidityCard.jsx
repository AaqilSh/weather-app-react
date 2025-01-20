import React from "react";

const HumidityCard = ({ humidity }) => {
  return (
    <div className="w-60 bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-gray-900 dark:text-gray-100 transition-all duration-500">
      <div className="text-4xl mb-2">💧</div>
      <h2 className="text-xl font-bold mt-4">Humidity</h2>
      <p className="text-3xl font-semibold mt-2">{humidity}%</p>
    </div>
  );
};

export default HumidityCard;
