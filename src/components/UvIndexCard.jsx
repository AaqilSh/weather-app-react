import React from "react";

const UVIndexCard = ({ uvIndex }) => {
  // Define the UV level based on the index
  const getUVLevel = (index) => {
    if (index <= 2) return "Low";
    if (index <= 5) return "Moderate";
    if (index <= 7) return "High";
    if (index <= 10) return "Very High";
    return "Extreme";
  };

  const uvLevel = getUVLevel(uvIndex);

  return (
    <div className=" bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 flex flex-col items-center justify-center text-gray-900 dark:text-gray-100 transition-all duration-500 w-96 max-w-sm">
      <div className="text-4xl mb-2">☀️</div>
      <h2 className="text-xl font-semibold mb-2">UV Index</h2>
      <p className="text-lg mb-1">Index: {uvIndex}</p>
      <span
        className={`text-sm font-medium px-3 py-1 rounded ${
          uvLevel === "Low"
            ? "bg-green-200 text-green-800"
            : uvLevel === "Moderate"
            ? "bg-yellow-200 text-yellow-800"
            : uvLevel === "High"
            ? "bg-orange-200 text-orange-800"
            : uvLevel === "Very High"
            ? "bg-red-200 text-red-800"
            : "bg-purple-200 text-purple-800"
        }`}
      >
        {uvLevel}
      </span>
    </div>
  );
};

export default UVIndexCard;
