// src/components/FeelsLikeCard.js
import React from "react";

const FeelsLikeCard = ({ feelsLike }) => {
  const emoji = feelsLike >= 30 ? "🥵" : feelsLike <= 15 ? "🧊" : "😊";

  return (
    <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-96 max-w-sm">
      <div className="text-5xl">{emoji}</div>
      <h2 className="text-xl font-bold mt-4">Feels Like</h2>
      <p className="text-3xl font-semibold mt-2">{feelsLike}°C</p>
    </div>
  );
};

export default FeelsLikeCard;
