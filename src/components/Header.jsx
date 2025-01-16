// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="relative bg-green-600 text-white px-6 py-4 flex items-center">
		<h1 className="absolute inset-x-0 text-center text-2xl font-bold font-fredoka">Weathora 🌞</h1>
      <button className="ml-auto bg-white text-green-600 px-4 py-2 rounded-md shadow-md hover:bg-gray-200 transition">
        🌞 Toggle Theme
      </button>
    </header>
  );
};

export default Header;
