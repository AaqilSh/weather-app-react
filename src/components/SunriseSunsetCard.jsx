import React from "react";

const SunriseSunsetCard = ({ sunrise, sunset }) => {
	const formatTime = (isoString) => {
		if (!isoString) return "N/A";
		const date = new Date(isoString);
		return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
	  };
  return (
	<div className="bg-yellow-400 text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-96 max-w-sm">
	<div className="text-5xl">🌅</div>
	<h2 className="text-xl font-bold mt-4">Sunrise & Sunset</h2>
	<div className="flex justify-between items-center w-full mt-4">
	  <div className="flex flex-col items-center">
		<p className="text-lg font-semibold">Sunrise</p>
		<p className="text-2xl">{formatTime(sunrise)}</p>
	  </div>
	  <div className="flex flex-col items-center">
		<p className="text-lg font-semibold">Sunset</p>
		<p className="text-2xl">{formatTime(sunset)}</p>
	  </div>
	</div>
  </div>
  );
};

export default SunriseSunsetCard;
