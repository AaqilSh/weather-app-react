import React from "react";

const PrecipitationCard = ({ precipitation }) => {
  // Determine precipitation intensity
  const getPrecipitationDetails = (precipitation) => {
    if (precipitation === 0) {
      return { status: "No Rain", emoji: "☀️", color: "bg-blue-400" };
    } else if (precipitation < 2.5) {
      return { status: "Light Rain", emoji: "🌦️", color: "bg-blue-500" };
    } else if (precipitation < 7.5) {
      return { status: "Moderate Rain", emoji: "🌧️", color: "bg-blue-600" };
    } else {
      return { status: "Heavy Rain", emoji: "⛈️", color: "bg-blue-700" };
    }
  };

  const { status, emoji, color } = getPrecipitationDetails(precipitation);

  return (
    <div
      className={`p-6 rounded-lg shadow-lg text-white flex flex-col items-center w-96 max-w-sm ${color}`}
    >
      <div className="text-5xl">{emoji}</div>
      <h2 className="text-xl font-bold mt-4">Precipitation</h2>
      <p className="text-3xl font-semibold mt-2">{precipitation} mm</p>
      <p className="text-lg mt-2">{status}</p>
    </div>
  );
};

export default PrecipitationCard;
