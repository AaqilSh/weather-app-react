// src/components/TemperatureCard.js
import React from "react";

const TemperatureCard = ({ temperature }) => {
  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-96 max-w-sm">
      <div className="text-5xl">🌡️</div>
      <h2 className="text-xl font-bold mt-4">Current Temperature</h2>
      <p className="text-3xl font-semibold mt-2">{temperature}°C</p>
    </div>
  );
};

export default TemperatureCard;
