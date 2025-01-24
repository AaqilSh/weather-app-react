import React from "react";

const SunriseSunsetCard = ({ sunrise, sunset }) => {
  return (
	<div className="bg-yellow-400 text-white p-6 rounded-lg shadow-lg flex flex-col items-center w-80">
	<div className="text-5xl">🌅</div>
	<h2 className="text-xl font-bold mt-4">Sunrise & Sunset</h2>
	<div className="flex justify-between items-center w-full mt-4">
	  <div className="flex flex-col items-center">
		<p className="text-lg font-semibold">Sunrise</p>
		<p className="text-2xl">{sunrise}</p>
	  </div>
	  <div className="flex flex-col items-center">
		<p className="text-lg font-semibold">Sunset</p>
		<p className="text-2xl">{sunset}</p>
	  </div>
	</div>
  </div>
  );
};

export default SunriseSunsetCard;
