import React from "react";

const AirQualityCard = ({ aqi }) => {
  // Determine the AQI category and corresponding emoji
  const getAqiDetails = (aqi) => {
    if (aqi <= 50) {
      return { status: "Good", emoji: "🌿", color: "bg-green-500" };
    } else if (aqi <= 100) {
      return { status: "Moderate", emoji: "🌤️", color: "bg-yellow-500" };
    } else if (aqi <= 150) {
      return { status: "Unhealthy for Sensitive Groups", emoji: "😷", color: "bg-orange-500" };
    } else if (aqi <= 200) {
      return { status: "Unhealthy", emoji: "🌫️", color: "bg-red-500" };
    } else if (aqi <= 300) {
      return { status: "Very Unhealthy", emoji: "☠️", color: "bg-purple-500" };
    } else {
      return { status: "Hazardous", emoji: "💀", color: "bg-maroon-500" };
    }
  };

  const { status, emoji, color } = getAqiDetails(aqi);

  return (
    <div
      className={`p-6 rounded-lg shadow-lg text-white flex flex-col items-center w-96 max-w-sm ${color}`}
    >
      <div className="text-5xl">{emoji}</div>
      <h2 className="text-xl font-bold mt-4">Air Quality Index</h2>
      <p className="text-3xl font-semibold mt-2">{aqi}</p>
      <p className="text-lg mt-2">{status}</p>
    </div>
  );
};

export default AirQualityCard;
